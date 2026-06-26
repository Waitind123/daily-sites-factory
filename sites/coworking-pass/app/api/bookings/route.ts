import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";
import { getSpaceById } from "@/lib/data";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { spaceId?: string };

    if (!body.spaceId?.trim()) {
      return apiError("MISSING_FIELDS", 400);
    }

    const space = getSpaceById(body.spaceId.trim());
    if (!space) {
      return apiError("INVALID_SPACE", 404);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const confirmationCode = `CP-${randomBytes(4).toString("hex").toUpperCase()}`;
    const date = new Date().toISOString().slice(0, 10);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        confirmationCode,
        date,
        spaceId: space.id,
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
      confirmationCode,
      date,
      spaceId: space.id,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Booking error:", error);
    return apiError("BOOKING_FAILED", 500);
  }
}
