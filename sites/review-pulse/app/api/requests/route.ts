import { NextRequest, NextResponse } from "next/server";
import {
  createReviewRequest,
  listReviewRequests,
  getReviewRequest,
  markReviewReceived,
  getCampaignSummary,
  isValidGoogleUrl,
  isValidPhone,
} from "@/lib/review-requests";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";
import { getLocale } from "@/lib/locale";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const summary = request.nextUrl.searchParams.get("summary");

  if (summary === "1") {
    return NextResponse.json({ summary: getCampaignSummary() });
  }

  if (id) {
    const req = getReviewRequest(id);
    if (!req) return apiError("REQUEST_NOT_FOUND", 404);
    return NextResponse.json({ request: req });
  }

  return NextResponse.json({ requests: listReviewRequests() });
}

export async function POST(request: NextRequest) {
  try {
    const locale = await getLocale();
    const body = (await request.json()) as {
      action?: string;
      id?: string;
      businessName?: string;
      customerName?: string;
      customerPhone?: string;
      googleReviewUrl?: string;
      serviceName?: string;
    };

    if (body.action === "mark-reviewed") {
      if (!body.id) return apiError("REQUEST_NOT_FOUND", 400);
      const updated = markReviewReceived(body.id);
      if (!updated) return apiError("REQUEST_NOT_FOUND", 404);
      return NextResponse.json({ request: updated });
    }

    if (!body.businessName?.trim()) return apiError("BUSINESS_NAME_REQUIRED", 400);
    if (!body.customerName?.trim()) return apiError("CUSTOMER_NAME_REQUIRED", 400);
    if (!body.customerPhone?.trim()) return apiError("CUSTOMER_PHONE_REQUIRED", 400);
    if (!isValidPhone(body.customerPhone.trim())) return apiError("CUSTOMER_PHONE_INVALID", 400);
    if (!body.googleReviewUrl?.trim()) return apiError("GOOGLE_URL_REQUIRED", 400);
    if (!isValidGoogleUrl(body.googleReviewUrl.trim())) return apiError("GOOGLE_URL_INVALID", 400);

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const reviewRequest = createReviewRequest({
      businessName: body.businessName,
      customerName: body.customerName,
      customerPhone: body.customerPhone,
      googleReviewUrl: body.googleReviewUrl,
      serviceName: body.serviceName,
      locale: locale === "zh" ? "zh" : "en",
    });

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        request: reviewRequest,
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
      request: reviewRequest,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Review request error:", error);
    return apiError("REQUEST_CREATE_FAILED", 500);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = (await request.json()) as { id?: string; action?: string };
    if (body.action !== "mark-reviewed" || !body.id) {
      return apiError("REQUEST_NOT_FOUND", 400);
    }
    const updated = markReviewReceived(body.id);
    if (!updated) return apiError("REQUEST_NOT_FOUND", 404);
    return NextResponse.json({ request: updated });
  } catch {
    return apiError("REQUEST_UPDATE_FAILED", 500);
  }
}
