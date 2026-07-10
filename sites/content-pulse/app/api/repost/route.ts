import { NextRequest, NextResponse } from "next/server";
import { generateReposts, listBatches, getBatch } from "@/lib/repost";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const batch = getBatch(id);
    if (!batch) return apiError("REPOST_NOT_FOUND", 404);
    return NextResponse.json({ batch });
  }
  return NextResponse.json({ batches: listBatches() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      content?: string;
      title?: string;
    };

    if (!body.content?.trim()) {
      return apiError("CONTENT_REQUIRED", 400);
    }

    if (body.content.trim().length < 20) {
      return apiError("CONTENT_TOO_SHORT", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const batch = generateReposts(body.content.trim(), body.title);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        batch,
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
      batch,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Repost error:", error);
    return apiError("REPOST_FAILED", 500);
  }
}
