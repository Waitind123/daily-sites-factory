import { NextRequest, NextResponse } from "next/server";
import { createTicket, listTickets } from "@/lib/tickets";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET() {
  return NextResponse.json({ tickets: listTickets() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      subject?: string;
      customerEmail?: string;
      message?: string;
    };

    if (!body.subject?.trim()) {
      return apiError("TICKET_SUBJECT_REQUIRED", 400);
    }
    if (!body.customerEmail?.trim()) {
      return apiError("EMAIL_REQUIRED", 400);
    }
    if (!body.message?.trim()) {
      return apiError("MESSAGE_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const ticket = createTicket(
      body.subject.trim(),
      body.customerEmail.trim(),
      body.message.trim()
    );

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        ticket,
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
      ticket,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Ticket create error:", error);
    return apiError("TICKET_CREATE_FAILED", 500);
  }
}
