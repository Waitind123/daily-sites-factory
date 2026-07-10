import { NextRequest, NextResponse } from "next/server";
import {
  createCampaign,
  listCampaigns,
  getCampaignById,
  sendDunningEmail,
  simulateRecovery,
  getCampaignStats,
  type FailureReason,
} from "@/lib/dunning";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

const VALID_REASONS: FailureReason[] = [
  "expired_card",
  "insufficient_funds",
  "card_declined",
  "authentication_required",
];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const campaign = getCampaignById(id);
    if (!campaign) return apiError("CAMPAIGN_NOT_FOUND", 404);
    return NextResponse.json({ campaign });
  }
  return NextResponse.json({
    campaigns: listCampaigns(),
    stats: getCampaignStats(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      action?: string;
      customerEmail?: string;
      amount?: number;
      failureReason?: FailureReason;
      id?: string;
    };

    if (body.action === "send") {
      if (!body.id) return apiError("CAMPAIGN_NOT_FOUND", 400);
      const email = sendDunningEmail(body.id);
      if (!email) {
        const campaign = getCampaignById(body.id);
        if (!campaign) return apiError("CAMPAIGN_NOT_FOUND", 404);
        return apiError("NO_EMAILS_LEFT", 400);
      }
      const campaign = getCampaignById(body.id);
      return NextResponse.json({ email, campaign });
    }

    if (body.action === "recover") {
      if (!body.id) return apiError("CAMPAIGN_NOT_FOUND", 400);
      const campaign = simulateRecovery(body.id);
      if (!campaign) return apiError("CAMPAIGN_NOT_FOUND", 404);
      return NextResponse.json({ campaign, stats: getCampaignStats() });
    }

    if (!body.customerEmail?.trim()) {
      return apiError("EMAIL_REQUIRED", 400);
    }

    if (!isValidEmail(body.customerEmail.trim())) {
      return apiError("EMAIL_INVALID", 400);
    }

    const amount = body.amount ?? 0;
    if (amount <= 0) {
      return apiError("AMOUNT_INVALID", 400);
    }

    const reason = body.failureReason ?? "expired_card";
    if (!VALID_REASONS.includes(reason)) {
      return apiError("FAILURE_REASON_INVALID", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const campaign = createCampaign(body.customerEmail.trim(), amount, reason);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        campaign,
        stats: getCampaignStats(),
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
      campaign,
      stats: getCampaignStats(),
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Recoveries error:", error);
    return apiError("CAMPAIGN_CREATE_FAILED", 500);
  }
}
