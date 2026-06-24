import { NextRequest, NextResponse } from "next/server";
import { getVenueById, generateBookingConfirmation } from "@/lib/data";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { FREE_TRIAL_LIMIT } from "@/lib/trial-core";

export async function POST(request: NextRequest) {
  try {
    const { venueId } = await request.json();
    if (!venueId || typeof venueId !== "string") {
      return NextResponse.json({ error: "缺少 venueId" }, { status: 400 });
    }

    const venue = getVenueById(venueId);
    if (!venue) {
      return NextResponse.json({ error: "场地不存在" }, { status: 404 });
    }

    const member = await isMember();
    const access = await useTrial(member);

    if (!access.consumed && !access.isMember) {
      return NextResponse.json(
        {
          error: "免费体验已用完，请订阅",
          code: "TRIAL_EXHAUSTED",
          remaining: 0,
        },
        { status: 403 }
      );
    }

    const booking = generateBookingConfirmation(venue);

    if (member) {
      return NextResponse.json({
        venue: { ...venue, unlocked: true, booking },
        trial: null,
      });
    }

    const inc = await recordTrialUse();
    return NextResponse.json(
      {
        venue: { ...venue, unlocked: true, booking },
        trial: {
          limit: FREE_TRIAL_LIMIT,
          used: inc.used,
          remaining: inc.remaining,
          isMember: false,
          canUse: inc.remaining > 0,
        },
      },
      { headers: { "Set-Cookie": inc.cookieHeader } }
    );
  } catch (error) {
    console.error("Pass book error:", error);
    return NextResponse.json({ error: "预订失败" }, { status: 500 });
  }
}
