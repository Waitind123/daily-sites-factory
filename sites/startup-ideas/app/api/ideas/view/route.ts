import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { getIdeaById } from "@/lib/data";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  if (!body.ideaId) {
    return apiError("MISSING_IDEA_ID", 400);
  }

  const idea = getIdeaById(body.ideaId);
  if (!idea) {
    return apiError("IDEA_NOT_FOUND", 404);
  }

  const member = await isMember();
  const access = await useTrial(member);

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
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
