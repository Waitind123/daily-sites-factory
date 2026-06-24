import { NextRequest, NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { roomTypes } from "@/lib/data";

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
  const room = roomTypes.find((r) => r.id === body.roomId);
  if (!room) {
    return NextResponse.json({ error: "无效的共工模式" }, { status: 400 });
  }

  let remaining = access.isMember ? -1 : access.remaining;

  if (!access.isMember && access.consumed) {
    const recorded = await recordTrialUse();
    remaining = recorded.remaining;
    const response = NextResponse.json({
      ok: true,
      sessionId: `session_${Date.now()}`,
      roomId: room.id,
      roomName: room.name,
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
    roomName: room.name,
    duration: room.duration,
    sound: body.sound || "cafe",
    startedAt: new Date().toISOString(),
    remaining,
  });
}
