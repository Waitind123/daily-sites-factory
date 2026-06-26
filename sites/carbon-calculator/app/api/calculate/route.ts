import { NextRequest, NextResponse } from "next/server";
import { calculateCarbon, type CalcInput, type TransportMode, type GridRegion } from "@/lib/calculator";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { apiError } from "@/lib/api-errors";
import { getLocale } from "@/lib/locale";
import { getScenarioLabels } from "@/lib/copy-app";

export async function POST(request: NextRequest) {
  const member = await isMember();
  const access = await useTrial(member);

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const body = await request.json().catch(() => ({}));

  const commuteKm = Number(body.commuteKm);
  const officeDaysPerWeek = Number(body.officeDaysPerWeek);
  const transportMode = body.transportMode as TransportMode;
  const gridRegion = body.gridRegion as GridRegion;

  if (!Number.isFinite(commuteKm) || commuteKm < 0 || commuteKm > 200) {
    return apiError("INVALID_COMMUTE_KM", 400);
  }

  if (!Number.isFinite(officeDaysPerWeek) || officeDaysPerWeek < 0 || officeDaysPerWeek > 5) {
    return apiError("INVALID_OFFICE_DAYS", 400);
  }

  const input: CalcInput = {
    commuteKm,
    officeDaysPerWeek,
    transportMode: transportMode || "subway",
    gridRegion: gridRegion || "cn",
  };

  const locale = await getLocale();
  const labels = getScenarioLabels(locale);
  const result = calculateCarbon(input, labels);

  let remaining = access.isMember ? -1 : access.remaining;

  if (!access.isMember && access.consumed) {
    const recorded = await recordTrialUse();
    remaining = recorded.remaining;
    const response = NextResponse.json({ ok: true, result, remaining });
    response.headers.append("Set-Cookie", recorded.cookieHeader);
    return response;
  }

  return NextResponse.json({ ok: true, result, remaining });
}
