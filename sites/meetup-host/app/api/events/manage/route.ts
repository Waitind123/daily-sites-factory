import { NextRequest, NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { getEventById } from "@/lib/data";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  if (!body.eventId) {
    return NextResponse.json({ error: "缺少 eventId" }, { status: 400 });
  }

  const event = getEventById(body.eventId);
  if (!event) {
    return NextResponse.json({ error: "活动不存在" }, { status: 404 });
  }

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

  let remaining = access.isMember ? -1 : access.remaining;

  if (!access.isMember && access.consumed) {
    const recorded = await recordTrialUse();
    remaining = recorded.remaining;
    const response = NextResponse.json({
      ok: true,
      eventId: event.id,
      title: event.title,
      management: event.management,
      remaining,
    });
    response.headers.append("Set-Cookie", recorded.cookieHeader);
    return response;
  }

  return NextResponse.json({
    ok: true,
    eventId: event.id,
    title: event.title,
    management: event.management,
    remaining,
  });
}
