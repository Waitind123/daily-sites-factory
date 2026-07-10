import { NextRequest, NextResponse } from "next/server";
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
  if (!body.habitId) {
    return apiError("MISSING_HABIT_ID", 400);
  }

  let remaining = access.isMember ? -1 : access.remaining;

  if (!access.isMember && access.consumed) {
    const recorded = await recordTrialUse();
    remaining = recorded.remaining;
    const response = NextResponse.json({
      ok: true,
      habitId: body.habitId,
      checkedInAt: new Date().toISOString(),
      remaining,
    });
    response.headers.append("Set-Cookie", recorded.cookieHeader);
    return response;
  }

  return NextResponse.json({
    ok: true,
    habitId: body.habitId,
    checkedInAt: new Date().toISOString(),
    remaining,
  });
}
