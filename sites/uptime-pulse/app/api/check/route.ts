import { NextRequest, NextResponse } from "next/server";
import { checkUrl } from "@/lib/monitor";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { url?: string; name?: string };

    if (!body.url?.trim()) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return NextResponse.json(
        {
          error: "Free trial exhausted. Please subscribe.",
          code: "TRIAL_EXHAUSTED",
          remaining: 0,
        },
        { status: 403 }
      );
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
    return NextResponse.json({ error: "Check failed, please retry" }, { status: 500 });
  }
}
