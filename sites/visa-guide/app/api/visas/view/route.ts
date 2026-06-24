import { NextRequest, NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { visaPrograms } from "@/lib/data";

export async function POST(request: NextRequest) {
  const member = await isMember();
  const body = await request.json().catch(() => ({}));
  const visa = visaPrograms.find((v) => v.id === body.visaId);

  if (!visa) {
    return NextResponse.json({ error: "未找到该签证项目" }, { status: 404 });
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
    return NextResponse.json(
      {
        error: "免费体验已用完，请订阅 $9.9/月 解锁全部签证详情",
        code: "TRIAL_EXHAUSTED",
        remaining: 0,
      },
      { status: 403 }
    );
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
