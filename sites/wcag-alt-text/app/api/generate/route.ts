import { NextRequest, NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { apiError } from "@/lib/api-errors";
import { generateAltText, type ImageType } from "@/lib/alt-text-engine";

export async function POST(request: NextRequest) {
  const member = await isMember();
  const access = await useTrial(member);

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const body = await request.json().catch(() => ({}));
  const isDecorative = Boolean(body.isDecorative) || body.imageType === "decorative";

  if (!isDecorative && !body.subject?.trim()) {
    return apiError("MISSING_SUBJECT", 400);
  }

  const result = generateAltText({
    imageType: (body.imageType || "photo") as ImageType,
    subject: body.subject?.trim() || "",
    context: body.context?.trim(),
    action: body.action?.trim(),
    isDecorative,
  });

  let remaining = access.isMember ? -1 : access.remaining;

  if (!access.isMember && access.consumed) {
    const recorded = await recordTrialUse();
    remaining = recorded.remaining;
    const response = NextResponse.json({ ...result, remaining });
    response.headers.append("Set-Cookie", recorded.cookieHeader);
    return response;
  }

  return NextResponse.json({ ...result, remaining });
}
