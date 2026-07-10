import { NextRequest, NextResponse } from "next/server";
import {
  createBookingPage,
  listBookingPages,
  publishBookingPage,
} from "@/lib/bookings";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET() {
  return NextResponse.json({ pages: listBookingPages() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      action?: string;
      name?: string;
      bio?: string;
      project?: string;
      timezone?: string;
      pageId?: string;
    };

    if (body.action === "publish") {
      if (!body.pageId) {
        return apiError("PAGE_NOT_FOUND", 400);
      }

      const member = await isMember();
      const access = await consumeTrial(SITE_ID, member);

      if (!access.consumed && !access.isMember) {
        return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
      }

      const page = publishBookingPage(body.pageId);
      if (!page) {
        return apiError("PAGE_NOT_FOUND", 404);
      }

      if (!member) {
        const trial = await incrementTrial(SITE_ID);
        const response = NextResponse.json({
          page,
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
        page,
        trial: {
          limit: 5,
          used: access.used,
          remaining: access.remaining,
          isMember: true,
          canUse: true,
        },
      });
    }

    if (!body.name?.trim()) {
      return apiError("PAGE_NAME_REQUIRED", 400);
    }

    const page = createBookingPage({
      name: body.name,
      bio: body.bio,
      project: body.project,
      timezone: body.timezone,
    });

    return NextResponse.json({ page });
  } catch (error) {
    console.error("Booking page error:", error);
    return apiError("BOOKING_PUBLISH_FAILED", 500);
  }
}
