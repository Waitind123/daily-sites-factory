import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { getVisaById } from "@/lib/data";
import { getLocale } from "@/lib/locale";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse, getTrialInfo } from "@/lib/trial";

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr);
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function statusFromDays(days: number): "ok" | "warning" | "urgent" {
  if (days <= 14) return "urgent";
  if (days <= 60) return "warning";
  return "ok";
}

export async function POST(request: NextRequest) {
  const locale = await getLocale();
  const member = await isMember();
  const body = await request.json().catch(() => ({}));
  const visaId = String(body.visaId ?? "");
  const expiresAt = String(body.expiresAt ?? "");

  if (!visaId || !expiresAt) {
    return apiError("GENERIC", 400);
  }

  const visa = getVisaById(visaId);
  if (!visa) {
    return apiError("VISA_NOT_FOUND", 404);
  }

  if (!member) {
    const access = await useTrial(false);
    if (!access.consumed) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }
    const inc = await recordTrialUse();
    const daysLeft = daysUntil(expiresAt);
    const tracked = {
      id: `user-${Date.now()}`,
      visaId: visa.id,
      country: locale === "zh" ? visa.country : visa.country,
      flag: visa.flag,
      programName: visa.programName,
      expiresAt,
      daysLeft,
      status: statusFromDays(daysLeft),
    };
    const res = NextResponse.json({
      ok: true,
      tracked,
      trial: {
        ...(await getTrialInfo(false)),
        used: inc.used,
        remaining: inc.remaining,
      },
    });
    res.headers.append("Set-Cookie", inc.cookieHeader);
    return res;
  }

  const daysLeft = daysUntil(expiresAt);
  const tracked = {
    id: `user-${Date.now()}`,
    visaId: visa.id,
    country: visa.country,
    flag: visa.flag,
    programName: visa.programName,
    expiresAt,
    daysLeft,
    status: statusFromDays(daysLeft),
  };

  return NextResponse.json({
    ok: true,
    tracked,
    trial: await getTrialInfo(true),
  });
}
