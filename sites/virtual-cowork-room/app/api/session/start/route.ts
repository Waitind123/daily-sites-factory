import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { roomTypeMeta } from "@/lib/data";

export async function POST(request: NextRequest) {
  const member = await isMember();
  const access = await useTrial(member);

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const body = await request.json().catch(() => ({}));
  const room = roomTypeMeta.find((r) => r.id === body.roomId);
  if (!room) {
    return apiError("INVALID_ROOM", 400);
  }

  let remaining = access.isMember ? -1 : access.remaining;

  if (!access.isMember && access.consumed) {
    const recorded = await recordTrialUse();
    remaining = recorded.remaining;
    const response = NextResponse.json({
      ok: true,
      sessionId: `session_${Date.now()}`,
      roomId: room.id,
      duration: room.duration,
      sound: body.sound || "cafe",
      startedAt: new Date().toISOString(),
      remaining,
    });
    response.headers.append("Set-Cookie", recorded.cookieHeader);
    return response;
  }

  return NextResponse.json({
    ok: true,
    sessionId: `session_${Date.now()}`,
    roomId: room.id,
    duration: room.duration,
    sound: body.sound || "cafe",
    startedAt: new Date().toISOString(),
    remaining,
  });
}
