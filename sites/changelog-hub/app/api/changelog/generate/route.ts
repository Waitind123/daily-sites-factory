import { NextRequest, NextResponse } from "next/server";
import { generateChangelog, type ChangelogInput } from "@/lib/changelog";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ChangelogInput;

    if (!body.productName?.trim()) {
      return apiError("product_name_required", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const changelog = generateChangelog(body);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        changelog,
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
      changelog,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Changelog generate error:", error);
    return apiError("generate_failed", 500);
  }
}
