import { NextRequest, NextResponse } from "next/server";
import { generateOgImage, type OgInput } from "@/lib/og-generator";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as OgInput;

    if (!body.title?.trim()) {
      return apiError("title_required", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const og = generateOgImage(body);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        og,
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
      og,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("OG generate error:", error);
    return apiError("generate_failed", 500);
  }
}
