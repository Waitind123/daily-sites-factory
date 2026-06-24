import { NextRequest, NextResponse } from "next/server";
import { getJobById } from "@/lib/data";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { FREE_TRIAL_LIMIT } from "@/lib/trial-core";

export async function POST(request: NextRequest) {
  try {
    const { jobId } = await request.json();
    if (!jobId || typeof jobId !== "string") {
      return NextResponse.json({ error: "缺少 jobId" }, { status: 400 });
    }

    const job = getJobById(jobId);
    if (!job) {
      return NextResponse.json({ error: "职位不存在" }, { status: 404 });
    }

    const member = await isMember();
    const access = await useTrial(member);

    if (!access.consumed && !access.isMember) {
      return NextResponse.json(
        {
          error: "免费体验已用完，请订阅",
          code: "TRIAL_EXHAUSTED",
          remaining: 0,
        },
        { status: 403 }
      );
    }

    if (member) {
      return NextResponse.json({ job: { ...job, unlocked: true }, trial: null });
    }

    const inc = await recordTrialUse();
    return NextResponse.json(
      {
        job: { ...job, unlocked: true },
        trial: {
          limit: FREE_TRIAL_LIMIT,
          used: inc.used,
          remaining: inc.remaining,
          isMember: false,
          canUse: inc.remaining > 0,
        },
      },
      { headers: { "Set-Cookie": inc.cookieHeader } }
    );
  } catch (error) {
    console.error("Job view error:", error);
    return NextResponse.json({ error: "加载失败" }, { status: 500 });
  }
}
