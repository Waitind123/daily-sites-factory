import { NextRequest, NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { recordTrialUse, useTrial } from "@/lib/trial";
import {
  demoHeadshotSvg,
  generateHeadshot,
  isReplicateConfigured,
} from "@/lib/replicate";

export async function POST(request: NextRequest) {
  try {
    const member = await isMember();
    const trial = await useTrial(member);

    if (!member && !trial.consumed) {
      return NextResponse.json(
        {
          error: "免费体验 5 次已用完，请订阅继续使用",
          code: "TRIAL_EXHAUSTED",
          remaining: 0,
          limit: trial.limit,
        },
        { status: 403 }
      );
    }

    const { image, style = "corporate" } = await request.json();

    if (!image || typeof image !== "string") {
      return NextResponse.json({ error: "请上传图片" }, { status: 400 });
    }

    if (!image.startsWith("data:image/")) {
      return NextResponse.json({ error: "图片格式无效" }, { status: 400 });
    }

    if (image.length > 5_500_000) {
      return NextResponse.json({ error: "图片过大，请压缩后重试" }, { status: 400 });
    }

    let outputUrl: string;
    let demo = false;

    if (isReplicateConfigured()) {
      outputUrl = await generateHeadshot(image, style);
    } else {
      demo = true;
      outputUrl = demoHeadshotSvg(style);
    }

    let remaining: number | null = null;
    const headers = new Headers();

    if (!member) {
      const recorded = await recordTrialUse();
      remaining = recorded.remaining;
      headers.append("Set-Cookie", recorded.cookieHeader);
    }

    return NextResponse.json(
      {
        ok: true,
        url: outputUrl,
        style,
        demo,
        remaining,
        message: demo
          ? "演示模式：配置 REPLICATE_API_TOKEN 后生成真实 AI 头像"
          : "生成成功",
      },
      { headers }
    );
  } catch (error) {
    console.error("Generate error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "生成失败，请稍后重试",
      },
      { status: 500 }
    );
  }
}
