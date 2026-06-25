import { NextRequest, NextResponse } from "next/server";
import { generateProposal, type ProposalInput } from "@/lib/generator";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { FREE_TRIAL_LIMIT } from "@/lib/trial-core";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const input: ProposalInput = {
      freelancerName: String(body.freelancerName || "").trim(),
      freelancerEmail: String(body.freelancerEmail || "").trim(),
      clientName: String(body.clientName || "").trim(),
      clientEmail: String(body.clientEmail || "").trim(),
      projectTitle: String(body.projectTitle || "").trim(),
      deliverables: String(body.deliverables || "").trim(),
      timeline: String(body.timeline || "2-4 周").trim(),
      amount: Number(body.amount) || 0,
      currency: String(body.currency || "USD"),
      paymentTerms: String(body.paymentTerms || "50% 预付，50% 交付后").trim(),
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
      return NextResponse.json({ error: "请填写完整项目信息" }, { status: 400 });
    }

    const member = await isMember();
    const access = await useTrial(member);

    if (!access.consumed && !access.isMember) {
      return NextResponse.json(
        {
          error: "免费体验已用完，请订阅",
          code: "TRIAL_EXHAUSTED",
          remaining: 0,
        },
        { status: 403 }
      );
    }

    const proposal = generateProposal(input);

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
    return NextResponse.json({ error: "生成失败" }, { status: 500 });
  }
}
