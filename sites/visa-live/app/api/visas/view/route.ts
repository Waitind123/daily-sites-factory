import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { visaPrograms } from "@/lib/data";

export async function POST(request: NextRequest) {
  const member = await isMember();
  const body = await request.json().catch(() => ({}));
  const visa = visaPrograms.find((v) => v.id === body.visaId);

  if (!visa) {
    return apiError("VISA_NOT_FOUND", 404);
  }

  if (member) {
    return NextResponse.json({
      ok: true,
      visa: { ...visa, viewed: true },
      remaining: -1,
    });
  }

  const access = await useTrial(member);

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  const recorded = await recordTrialUse();
  const response = NextResponse.json({
    ok: true,
    visa: { ...visa, viewed: true },
    remaining: recorded.remaining,
  });
  response.headers.append("Set-Cookie", recorded.cookieHeader);
  return response;
}
