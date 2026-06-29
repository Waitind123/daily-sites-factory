import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { getToolById } from "@/lib/data";
import { getLocale } from "@/lib/locale";

export async function POST(request: NextRequest) {
  const locale = await getLocale();
  const body = await request.json().catch(() => ({}));
  if (!body.toolId) {
    return apiError("MISSING_TOOL_ID", 400);
  }

  const tool = getToolById(body.toolId, locale);
  if (!tool) {
    return apiError("TOOL_NOT_FOUND", 404);
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
      toolId: tool.id,
      name: tool.name,
      review: tool.review,
      remaining,
    });
    response.headers.append("Set-Cookie", recorded.cookieHeader);
    return response;
  }

  return NextResponse.json({
    ok: true,
    toolId: tool.id,
    name: tool.name,
    review: tool.review,
    remaining,
  });
}
