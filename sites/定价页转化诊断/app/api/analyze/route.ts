import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { analyzePricingPage, getAnalysis, listAnalyses } from "@/lib/pricing-analyzer";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";
import { LOCALE_COOKIE } from "@/lib/i18n-shared";

async function getRequestLocale(): Promise<"en" | "zh"> {
  const jar = await cookies();
  const value = jar.get(LOCALE_COOKIE)?.value;
  return value === "zh" ? "zh" : "en";
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const analysis = getAnalysis(id);
    if (!analysis) return apiError("ANALYSIS_NOT_FOUND", 404);
    return NextResponse.json({ analysis });
  }
  return NextResponse.json({ analyses: listAnalyses() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { pageUrl?: string };
    const locale = await getRequestLocale();

    if (!body.pageUrl?.trim()) {
      return apiError("PAGE_URL_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const analysis = analyzePricingPage(body.pageUrl.trim(), locale);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        analysis,
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
      analysis,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Pricing analysis error:", error);
    return apiError("ANALYSIS_FAILED", 500);
  }
}
