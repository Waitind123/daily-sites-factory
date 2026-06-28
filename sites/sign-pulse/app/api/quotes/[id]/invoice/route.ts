import { NextRequest, NextResponse } from "next/server";
import { getQuote, generateInvoice } from "@/lib/quotes";
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

    if (quote.invoiceText) {
      return NextResponse.json({
        invoiceText: quote.invoiceText,
        trial: null,
      });
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const result = generateInvoice(id);
    if (!result) {
      return apiError("INVOICE_FAILED", 500);
    }

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        invoiceText: result.invoiceText,
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
      invoiceText: result.invoiceText,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Invoice generate error:", error);
    return apiError("INVOICE_FAILED", 500);
  }
}
