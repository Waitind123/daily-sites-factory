import { NextRequest, NextResponse } from "next/server";
import { getSpaceById } from "@/lib/data";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { FREE_TRIAL_LIMIT } from "@/lib/trial-core";

export async function POST(request: NextRequest) {
  try {
    const { spaceId } = await request.json();
    if (!spaceId || typeof spaceId !== "string") {
      return NextResponse.json({ error: "缺少 spaceId" }, { status: 400 });
    }

    const space = getSpaceById(spaceId);
    if (!space) {
      return NextResponse.json({ error: "空间不存在" }, { status: 404 });
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
      return NextResponse.json({ space: { ...space, unlocked: true }, trial: null });
    }

    const inc = await recordTrialUse();
    return NextResponse.json(
      {
        space: { ...space, unlocked: true },
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
    console.error("Space view error:", error);
    return NextResponse.json({ error: "加载失败" }, { status: 500 });
  }
}
