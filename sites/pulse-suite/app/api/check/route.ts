import { NextRequest, NextResponse } from "next/server";
import { checkUrl } from "@/lib/monitor";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { url?: string };

    if (!body.url?.trim()) {
      return apiError("URL_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const check = await checkUrl(body.url.trim());

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        check,
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
      check,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Check error:", error);
    return apiError("CHECK_FAILED", 500);
  }
}
