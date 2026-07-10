import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { getVisaById } from "@/lib/data";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse, getTrialInfo } from "@/lib/trial";
import { recentPolicyChanges } from "@/lib/tracking-data";

export async function POST(request: NextRequest) {
  const member = await isMember();
  const body = await request.json().catch(() => ({}));
  const visaId = String(body.visaId ?? "");

  if (!visaId) {
    return apiError("GENERIC", 400);
  }

  const visa = getVisaById(visaId);
  if (!visa) {
    return apiError("VISA_NOT_FOUND", 404);
  }

  const lastChange = recentPolicyChanges.find((c) => c.visaId === visaId)?.change;

  if (!member) {
    const access = await useTrial(false);
    if (!access.consumed) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }
    const inc = await recordTrialUse();
    const watched = {
      id: `user-${Date.now()}`,
      visaId: visa.id,
      country: visa.country,
      flag: visa.flag,
      programName: visa.programName,
      lastChange,
      alertActive: true,
    };
    const res = NextResponse.json({
      ok: true,
      watched,
      trial: {
        ...(await getTrialInfo(false)),
        used: inc.used,
        remaining: inc.remaining,
      },
    });
    res.headers.append("Set-Cookie", inc.cookieHeader);
    return res;
  }

  const watched = {
    id: `user-${Date.now()}`,
    visaId: visa.id,
    country: visa.country,
    flag: visa.flag,
    programName: visa.programName,
    lastChange,
    alertActive: true,
  };

  return NextResponse.json({
    ok: true,
    watched,
    trial: await getTrialInfo(true),
  });
}
