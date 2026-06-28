import { NextRequest, NextResponse } from "next/server";
import { createQuote, listQuotes } from "@/lib/quotes";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET() {
  return NextResponse.json({ quotes: listQuotes() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      clientName?: string;
      clientEmail?: string;
      projectTitle?: string;
      description?: string;
      amount?: number;
    };

    if (!body.clientName?.trim()) {
      return apiError("CLIENT_NAME_REQUIRED", 400);
    }
    if (!body.clientEmail?.trim()) {
      return apiError("EMAIL_REQUIRED", 400);
    }
    if (!body.projectTitle?.trim()) {
      return apiError("PROJECT_TITLE_REQUIRED", 400);
    }
    if (!body.description?.trim()) {
      return apiError("DESCRIPTION_REQUIRED", 400);
    }
    if (!body.amount || body.amount <= 0) {
      return apiError("AMOUNT_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const quote = createQuote(
      body.clientName.trim(),
      body.clientEmail.trim(),
      body.projectTitle.trim(),
      body.description.trim(),
      body.amount
    );

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        quote,
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
      quote,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Quote create error:", error);
    return apiError("QUOTE_CREATE_FAILED", 500);
  }
}
