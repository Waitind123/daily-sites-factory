import { NextRequest, NextResponse } from "next/server";
import { generateIncidentDrafts, listDrafts, getDraft } from "@/lib/draft";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";
import { getLocale } from "@/lib/locale";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const draft = getDraft(id);
    if (!draft) return apiError("DRAFT_NOT_FOUND", 404);
    return NextResponse.json({ draft });
  }
  return NextResponse.json({ drafts: listDrafts() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      alert?: string;
      serviceName?: string;
    };

    if (!body.alert?.trim()) {
      return apiError("ALERT_REQUIRED", 400);
    }

    if (body.alert.trim().length < 20) {
      return apiError("ALERT_TOO_SHORT", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const locale = await getLocale();
    const draft = generateIncidentDrafts(
      body.alert.trim(),
      body.serviceName,
      locale
    );

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        draft,
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
      draft,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Draft error:", error);
    return apiError("DRAFT_FAILED", 500);
  }
}
