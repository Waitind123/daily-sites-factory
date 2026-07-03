import { NextRequest, NextResponse } from "next/server";
import { getVenueById, generateBookingConfirmation } from "@/lib/data";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { FREE_TRIAL_LIMIT } from "@/lib/trial-core";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  try {
    const { venueId } = await request.json();
    if (!venueId || typeof venueId !== "string") {
      return apiError("MISSING_VENUE_ID", 400);
    }

    const venue = getVenueById(venueId);
    if (!venue) {
      return apiError("VENUE_NOT_FOUND", 404);
    }

    const member = await isMember();
    const access = await useTrial(member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
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
    return apiError("BOOKING_FAILED", 500);
  }
}
