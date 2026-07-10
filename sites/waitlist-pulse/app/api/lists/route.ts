import { NextRequest, NextResponse } from "next/server";
import { createWaitlist, listWaitlists } from "@/lib/waitlists";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET() {
  return NextResponse.json({ waitlists: listWaitlists() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { name?: string; description?: string };

    if (!body.name?.trim()) {
      return apiError("LIST_NAME_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const waitlist = createWaitlist(body.name.trim(), body.description?.trim() ?? "");

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        waitlist,
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
      waitlist,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Waitlist create error:", error);
    return apiError("LIST_CREATE_FAILED", 500);
  }
}
