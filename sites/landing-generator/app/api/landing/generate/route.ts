import { NextRequest, NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { generateLanding, type LandingStyle } from "@/lib/generator";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  const access = await useTrial(await isMember());

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const body = await request.json();
  const { productName, tagline, description, features, ctaText, style, audience } = body;

  if (!productName || !tagline || !description) {
    return apiError("MISSING_FIELDS", 400);
  }

  const landing = generateLanding({
    productName: String(productName).slice(0, 80),
    tagline: String(tagline).slice(0, 120),
    description: String(description).slice(0, 500),
    features: Array.isArray(features) ? features.map(String).slice(0, 6) : [],
    ctaText: String(ctaText || "Get started").slice(0, 40),
    style: (["minimal", "bold", "dark", "gradient"].includes(style)
      ? style
      : "minimal") as LandingStyle,
    audience: audience ? String(audience).slice(0, 60) : undefined,
  });

  const response = NextResponse.json({ ok: true, landing });

  if (!access.isMember) {
    const trialUpdate = await recordTrialUse();
    response.headers.append("Set-Cookie", trialUpdate.cookieHeader);
  }

  return response;
}
