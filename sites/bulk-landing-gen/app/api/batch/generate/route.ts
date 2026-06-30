import { NextRequest, NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { generateBatch } from "@/lib/batch-generator";
import type { LandingStyle } from "@/lib/generator";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  const access = await useTrial(await isMember());

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const body = await request.json();
  const { productName, tagline, description, features, ctaText, style, audience, keywords } = body;

  if (!productName || !tagline || !description) {
    return apiError("MISSING_FIELDS", 400);
  }

  const keywordList = Array.isArray(keywords)
    ? keywords.map(String).filter(Boolean)
    : String(keywords || "")
        .split("\n")
        .map((k) => k.trim())
        .filter(Boolean);

  if (keywordList.length === 0) {
    return apiError("MISSING_FIELDS", 400);
  }

  const results = generateBatch({
    productName: String(productName).slice(0, 80),
    tagline: String(tagline).slice(0, 120),
    description: String(description).slice(0, 500),
    features: Array.isArray(features) ? features.map(String).slice(0, 6) : [],
    ctaText: String(ctaText || "Get started").slice(0, 40),
    style: (["minimal", "bold", "dark", "gradient"].includes(style)
      ? style
      : "minimal") as LandingStyle,
    audience: audience ? String(audience).slice(0, 60) : undefined,
    keywords: keywordList.slice(0, 20),
  });

  const response = NextResponse.json({ ok: true, results, count: results.length });

  if (!access.isMember) {
    const trialUpdate = await recordTrialUse();
    response.headers.append("Set-Cookie", trialUpdate.cookieHeader);
  }

  return response;
}
