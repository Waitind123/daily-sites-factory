import { NextRequest, NextResponse } from "next/server";
import { analyzeWaitlist } from "@/lib/ai-validator";
import { apiError } from "@/lib/api-errors";
import { getSignups, getWaitlistById } from "@/lib/waitlists";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { waitlistId?: string };
    if (!body.waitlistId) {
      return apiError("LIST_NOT_FOUND", 400);
    }

    const waitlist = getWaitlistById(body.waitlistId);
    if (!waitlist) {
      return apiError("LIST_NOT_FOUND", 404);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const signups = getSignups(waitlist.id);
    const emails = signups.map((s) => s.email);
    const analysis = analyzeWaitlist(waitlist.id, emails);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        analysis,
        waitlist: { id: waitlist.id, name: waitlist.name },
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
      analysis,
      waitlist: { id: waitlist.id, name: waitlist.name },
    });
  } catch (error) {
    console.error("Analyze error:", error);
    return apiError("ANALYZE_FAILED", 500);
  }
}
