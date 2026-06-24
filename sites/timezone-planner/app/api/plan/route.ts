import { NextRequest, NextResponse } from "next/server";
import { planMeeting, type Participant } from "@/lib/timezone";
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
  const rawParticipants = body.participants as Participant[] | undefined;
  const durationMinutes = Number(body.durationMinutes) || 60;

  if (!Array.isArray(rawParticipants) || rawParticipants.length < 2) {
    return NextResponse.json({ error: "至少需要 2 名团队成员" }, { status: 400 });
  }

  if (rawParticipants.length > 10) {
    return NextResponse.json({ error: "最多支持 10 名成员" }, { status: 400 });
  }

  const participants: Participant[] = rawParticipants.map((p, i) => ({
    id: p.id || String(i),
    name: String(p.name || `成员${i + 1}`).slice(0, 30),
    timezone: String(p.timezone || "UTC"),
    workStart: Math.max(0, Math.min(23, Number(p.workStart) || 9)),
    workEnd: Math.max(1, Math.min(24, Number(p.workEnd) || 18)),
  }));

  for (const p of participants) {
    if (p.workEnd <= p.workStart) {
      return NextResponse.json({ error: `${p.name} 的工作时间无效` }, { status: 400 });
    }
  }

  const daysToScan = member ? 14 : 7;
  const result = planMeeting(participants, durationMinutes, daysToScan);

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
