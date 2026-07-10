import { NextRequest, NextResponse } from "next/server";
import { scanPainPoints } from "@/lib/pain-miner";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { keyword?: string };

    if (!body.keyword?.trim()) {
      return apiError("KEYWORD_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const result = scanPainPoints(body.keyword.trim());

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        result,
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
      result,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Scan error:", error);
    return apiError("SCAN_FAILED", 500);
  }
}
