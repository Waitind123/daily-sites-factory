import { NextRequest, NextResponse } from "next/server";
import { planMeeting, type Participant } from "@/lib/timezone";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  const member = await isMember();
  const access = await useTrial(member);

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const body = await request.json().catch(() => ({}));
  const rawParticipants = body.participants as Participant[] | undefined;
  const durationMinutes = Number(body.durationMinutes) || 60;

  if (!Array.isArray(rawParticipants) || rawParticipants.length < 2) {
    return apiError("MIN_PARTICIPANTS", 400);
  }

  if (rawParticipants.length > 10) {
    return apiError("MAX_PARTICIPANTS", 400);
  }

  const participants: Participant[] = rawParticipants.map((p, i) => ({
    id: p.id || String(i),
    name: String(p.name || `member${i + 1}`).slice(0, 30),
    timezone: String(p.timezone || "UTC"),
    workStart: Math.max(0, Math.min(23, Number(p.workStart) || 9)),
    workEnd: Math.max(1, Math.min(24, Number(p.workEnd) || 18)),
  }));

  for (const p of participants) {
    if (p.workEnd <= p.workStart) {
      return apiError("INVALID_WORK_HOURS", 400, { name: p.name });
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
