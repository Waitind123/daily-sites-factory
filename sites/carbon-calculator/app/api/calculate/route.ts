import { NextRequest, NextResponse } from "next/server";
import { calculateCarbon, type CalcInput, type TransportMode, type GridRegion } from "@/lib/calculator";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";

export async function POST(request: NextRequest) {
  const member = await isMember();
  const access = await useTrial(member);

  if (!access.consumed && !access.isMember) {
    return NextResponse.json(
      {
        error: "免费体验已用完，请订阅 $9.9/月",
        code: "TRIAL_EXHAUSTED",
        remaining: 0,
      },
      { status: 403 }
    );
  }

  const body = await request.json().catch(() => ({}));

  const commuteKm = Number(body.commuteKm);
  const officeDaysPerWeek = Number(body.officeDaysPerWeek);
  const transportMode = body.transportMode as TransportMode;
  const gridRegion = body.gridRegion as GridRegion;

  if (!Number.isFinite(commuteKm) || commuteKm < 0 || commuteKm > 200) {
    return NextResponse.json({ error: "通勤距离无效" }, { status: 400 });
  }

  if (!Number.isFinite(officeDaysPerWeek) || officeDaysPerWeek < 0 || officeDaysPerWeek > 5) {
    return NextResponse.json({ error: "到岗天数无效" }, { status: 400 });
  }

  const input: CalcInput = {
    commuteKm,
    officeDaysPerWeek,
    transportMode: transportMode || "subway",
    gridRegion: gridRegion || "cn",
  };

  const result = calculateCarbon(input);

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
