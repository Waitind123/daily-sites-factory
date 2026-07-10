import { NextRequest, NextResponse } from "next/server";
import { generateProposal, type ProposalInput } from "@/lib/generator";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { FREE_TRIAL_LIMIT } from "@/lib/trial-core";
import { apiError } from "@/lib/api-errors";
import type { Locale } from "@/lib/i18n-shared";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const locale: Locale = body.locale === "zh" ? "zh" : "en";

    const input: ProposalInput = {
      freelancerName: String(body.freelancerName || "").trim(),
      freelancerEmail: String(body.freelancerEmail || "").trim(),
      clientName: String(body.clientName || "").trim(),
      clientEmail: String(body.clientEmail || "").trim(),
      projectTitle: String(body.projectTitle || "").trim(),
      deliverables: String(body.deliverables || "").trim(),
      timeline: String(body.timeline || "").trim(),
      amount: Number(body.amount) || 0,
      currency: String(body.currency || "USD"),
      paymentTerms: String(body.paymentTerms || "").trim(),
      includeContract: body.includeContract !== false,
    };

    if (
      !input.freelancerName ||
      !input.freelancerEmail ||
      !input.clientName ||
      !input.clientEmail ||
      !input.projectTitle ||
      !input.deliverables ||
      input.amount <= 0
    ) {
      return apiError("VALIDATION_FAILED", 400);
    }

    const member = await isMember();
    const access = await useTrial(member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const proposal = generateProposal(input, locale);

    if (member) {
      return NextResponse.json({ proposal, trial: null });
    }

    const inc = await recordTrialUse();
    return NextResponse.json(
      {
        proposal,
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
    console.error("Proposal generate error:", error);
    return apiError("GENERATE_FAILED", 500);
  }
}
