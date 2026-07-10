import { NextRequest, NextResponse } from "next/server";
import {
  createProgram,
  listPrograms,
  getProgramStats,
  recordConversion,
} from "@/lib/affiliates";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (code) {
    const stats = getProgramStats(code);
    if (!stats) return apiError("AFFILIATE_NOT_FOUND", 404);
    return NextResponse.json({ stats });
  }
  return NextResponse.json({ programs: listPrograms() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      action?: string;
      affiliateName?: string;
      productUrl?: string;
      commissionRate?: number;
      code?: string;
      amount?: number;
    };

    if (body.action === "stats") {
      if (!body.code) return apiError("AFFILIATE_NOT_FOUND", 400);
      const stats = getProgramStats(body.code);
      if (!stats) return apiError("AFFILIATE_NOT_FOUND", 404);
      return NextResponse.json({ stats });
    }

    if (body.action === "simulate") {
      if (!body.code) return apiError("AFFILIATE_NOT_FOUND", 400);
      const amount = body.amount ?? 29;
      const conversion = recordConversion(body.code, amount);
      if (!conversion) return apiError("AFFILIATE_NOT_FOUND", 404);
      const stats = getProgramStats(body.code);
      return NextResponse.json({ conversion, stats });
    }

    if (!body.affiliateName?.trim()) {
      return apiError("AFFILIATE_NAME_REQUIRED", 400);
    }

    if (!body.productUrl?.trim()) {
      return apiError("PRODUCT_URL_REQUIRED", 400);
    }

    if (!isValidUrl(body.productUrl.trim())) {
      return apiError("PRODUCT_URL_INVALID", 400);
    }

    const rate = body.commissionRate ?? 20;
    if (rate < 1 || rate > 100) {
      return apiError("COMMISSION_RATE_INVALID", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const program = createProgram(
      body.affiliateName.trim(),
      body.productUrl.trim(),
      rate
    );

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        program,
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
      program,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Affiliates error:", error);
    return apiError("AFFILIATE_CREATE_FAILED", 500);
  }
}
