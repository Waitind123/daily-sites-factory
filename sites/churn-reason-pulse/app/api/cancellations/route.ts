import { NextRequest, NextResponse } from "next/server";
import {
  createCancellation,
  listCancellations,
  getCancellationById,
  getChurnStats,
  type ChurnReasonCategory,
} from "@/lib/churn-reason";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

const VALID_REASONS: ChurnReasonCategory[] = [
  "price",
  "missing_feature",
  "switched_competitor",
  "not_using",
  "support",
  "bugs",
  "other",
];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const record = getCancellationById(id);
    if (!record) return apiError("CANCELLATION_NOT_FOUND", 404);
    return NextResponse.json({ record });
  }
  return NextResponse.json({
    records: listCancellations(),
    stats: getChurnStats(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      customerEmail?: string;
      mrrLost?: number;
      reason?: ChurnReasonCategory;
      freeText?: string;
    };

    if (!body.customerEmail?.trim()) {
      return apiError("EMAIL_REQUIRED", 400);
    }

    if (!isValidEmail(body.customerEmail.trim())) {
      return apiError("EMAIL_INVALID", 400);
    }

    const mrrLost = body.mrrLost ?? 0;
    if (mrrLost <= 0) {
      return apiError("MRR_INVALID", 400);
    }

    const reason = body.reason ?? "other";
    if (!VALID_REASONS.includes(reason)) {
      return apiError("CHURN_REASON_INVALID", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const record = createCancellation(
      body.customerEmail.trim(),
      mrrLost,
      reason,
      body.freeText
    );

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        record,
        stats: getChurnStats(),
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
      record,
      stats: getChurnStats(),
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Cancellations error:", error);
    return apiError("CANCELLATION_CREATE_FAILED", 500);
  }
}
