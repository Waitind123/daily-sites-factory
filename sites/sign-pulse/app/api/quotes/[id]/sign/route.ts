import { NextRequest, NextResponse } from "next/server";
import { getQuote, collectSignature } from "@/lib/quotes";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const quote = getQuote(id);

    if (!quote) {
      return apiError("QUOTE_NOT_FOUND", 404);
    }

    if (!quote.contractText) {
      return apiError("CONTRACT_REQUIRED", 400);
    }

    if (quote.signedAt) {
      return NextResponse.json({
        signedAt: quote.signedAt,
        signedBy: quote.signedBy,
        trial: null,
      });
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const result = collectSignature(id);
    if (!result) {
      return apiError("SIGN_FAILED", 500);
    }

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        signedAt: result.signedAt,
        signedBy: result.signedBy,
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
      signedAt: result.signedAt,
      signedBy: result.signedBy,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("E-sign error:", error);
    return apiError("SIGN_FAILED", 500);
  }
}
