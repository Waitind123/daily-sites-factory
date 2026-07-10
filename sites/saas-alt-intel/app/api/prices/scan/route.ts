import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { isMember } from "@/lib/member";
import { getLocale } from "@/lib/locale";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { scanCustomUrl } from "@/lib/scan-url";

export async function POST(request: NextRequest) {
  const locale = await getLocale();
  const body = await request.json().catch(() => ({}));
  const url = typeof body.url === "string" ? body.url.trim() : "";

  if (!url) {
    return apiError("MISSING_URL", 400);
  }

  let parsed: URL;
  try {
    parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
  } catch {
    return apiError("INVALID_URL", 400);
  }

  const member = await isMember();
  const access = await useTrial(member);

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const result = scanCustomUrl(parsed.hostname, locale);
  let remaining = access.isMember ? -1 : access.remaining;

  if (!access.isMember && access.consumed) {
    const recorded = await recordTrialUse();
    remaining = recorded.remaining;
    const response = NextResponse.json({
      ok: true,
      url: parsed.href,
      hostname: parsed.hostname,
      ...result,
      remaining,
    });
    response.headers.append("Set-Cookie", recorded.cookieHeader);
    return response;
  }

  return NextResponse.json({
    ok: true,
    url: parsed.href,
    hostname: parsed.hostname,
    ...result,
    remaining,
  });
}
