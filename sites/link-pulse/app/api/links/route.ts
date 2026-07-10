import { NextRequest, NextResponse } from "next/server";
import { createLink, listLinks, getLinkStats } from "@/lib/links";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (slug) {
    const stats = getLinkStats(slug);
    if (!stats) return apiError("LINK_NOT_FOUND", 404);
    return NextResponse.json({ stats });
  }
  return NextResponse.json({ links: listLinks() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      action?: string;
      destination?: string;
      title?: string;
      slug?: string;
    };

    if (body.action === "stats") {
      if (!body.slug) return apiError("LINK_NOT_FOUND", 400);
      const stats = getLinkStats(body.slug);
      if (!stats) return apiError("LINK_NOT_FOUND", 404);
      return NextResponse.json({ stats });
    }

    if (!body.destination?.trim()) {
      return apiError("LINK_URL_REQUIRED", 400);
    }

    if (!isValidUrl(body.destination.trim())) {
      return apiError("LINK_URL_INVALID", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const link = createLink(body.destination.trim(), body.title, body.slug);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        link,
        trial: {
          limit: 5,
          used: trial.used,
          remaining: trial.remaining,
          isMember: false,
          canUse: trial.remaining > 0,
        },
      });
      response.headers.append("Set-Cookie", trial.cookieHeader);
      return response;
    }

    return NextResponse.json({
      link,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Links error:", error);
    return apiError("LINK_CREATE_FAILED", 500);
  }
}
