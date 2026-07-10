import { NextRequest, NextResponse } from "next/server";
import {
  reviewContract,
  listContracts,
  getContractById,
  getContractStats,
} from "@/lib/contract-review";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const record = getContractById(id);
    if (!record) return apiError("CONTRACT_NOT_FOUND", 404);
    return NextResponse.json({ record });
  }
  return NextResponse.json({
    records: listContracts(),
    stats: getContractStats(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      title?: string;
      contractText?: string;
    };

    if (!body.title?.trim()) {
      return apiError("TITLE_REQUIRED", 400);
    }

    if (!body.contractText?.trim()) {
      return apiError("CONTRACT_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const record = reviewContract(body.title.trim(), body.contractText.trim());

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        record,
        stats: getContractStats(),
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
      stats: getContractStats(),
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Contract review error:", error);
    return apiError("CONTRACT_REVIEW_FAILED", 500);
  }
}
