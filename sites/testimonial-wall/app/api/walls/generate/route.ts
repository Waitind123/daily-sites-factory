import { NextRequest, NextResponse } from "next/server";
import { generateWall, type WallInput } from "@/lib/generator";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as WallInput;

    if (!body.productName?.trim()) {
      return NextResponse.json({ error: "请填写产品名称" }, { status: 400 });
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

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

    const wall = generateWall(body);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        wall,
        trial: {
          limit: 5,
          used: trial.used,
          remaining: trial.remaining,
          isMember: false,
          canUse: trial.remaining > 0,
        },
      });
      response.headers.append("Set-Cookie", trial.cookieHeader);
      return response;
    }

    return NextResponse.json({
      wall,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Wall generate error:", error);
    return NextResponse.json({ error: "生成失败，请稍后重试" }, { status: 500 });
  }
}
