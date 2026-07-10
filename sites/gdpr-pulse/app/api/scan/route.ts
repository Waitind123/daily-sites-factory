import { NextRequest, NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { apiError } from "@/lib/api-errors";
import { runGdprScan, type GdprScanInput, type Processor } from "@/lib/gdpr-engine";

export async function POST(request: NextRequest) {
  const member = await isMember();
  const access = await useTrial(member);

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const body = await request.json().catch(() => ({}));

  if (!body.productName?.trim()) {
    return apiError("MISSING_PRODUCT", 400);
  }

  const input: GdprScanInput = {
    productName: body.productName.trim(),
    websiteUrl: body.websiteUrl?.trim(),
    targetsEuUsers: Boolean(body.targetsEuUsers),
    collectsEmail: Boolean(body.collectsEmail),
    collectsPayment: Boolean(body.collectsPayment),
    usesAnalytics: Boolean(body.usesAnalytics),
    usesCookies: Boolean(body.usesCookies),
    hasPrivacyPolicy: Boolean(body.hasPrivacyPolicy),
    hasCookieBanner: Boolean(body.hasCookieBanner),
    hasDpaWithProcessors: Boolean(body.hasDpaWithProcessors),
    processors: Array.isArray(body.processors)
      ? (body.processors as Processor[])
      : [],
  };

  const result = runGdprScan(input);

  let remaining = access.isMember ? -1 : access.remaining;

  if (!access.isMember && access.consumed) {
    const recorded = await recordTrialUse();
    remaining = recorded.remaining;
    const response = NextResponse.json({ ...result, remaining });
    response.headers.append("Set-Cookie", recorded.cookieHeader);
    return response;
  }

  return NextResponse.json({ ...result, remaining });
}
