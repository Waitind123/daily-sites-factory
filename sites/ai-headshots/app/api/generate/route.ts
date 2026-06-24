import { NextRequest, NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import {
  demoHeadshotSvg,
  generateHeadshot,
  isReplicateConfigured,
} from "@/lib/replicate";

export async function POST(request: NextRequest) {
  try {
    const member = await isMember();
    const demoAllowed =
      process.env.ALLOW_DEMO_GENERATE === "true" || !isReplicateConfigured();

    if (!member && !demoAllowed) {
      return NextResponse.json(
        { error: "请先加入会员", code: "NOT_MEMBER" },
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

    // 限制大小 ~4MB base64
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

    return NextResponse.json({
      ok: true,
      url: outputUrl,
      style,
      demo,
      message: demo
        ? "演示模式：配置 REPLICATE_API_TOKEN 后生成真实 AI 头像"
        : "生成成功",
    });
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
