import { NextRequest, NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { getIdeaById } from "@/lib/data";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  if (!body.ideaId) {
    return NextResponse.json({ error: "缺少 ideaId" }, { status: 400 });
  }

  const idea = getIdeaById(body.ideaId);
  if (!idea) {
    return NextResponse.json({ error: "点子不存在" }, { status: 404 });
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
      ideaId: idea.id,
      title: idea.title,
      analysis: idea.analysis,
      remaining,
    });
    response.headers.append("Set-Cookie", recorded.cookieHeader);
    return response;
  }

  return NextResponse.json({
    ok: true,
    ideaId: idea.id,
    title: idea.title,
    analysis: idea.analysis,
    remaining,
  });
}
