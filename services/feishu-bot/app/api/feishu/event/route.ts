import { NextRequest, NextResponse } from "next/server";
import { decryptFeishuEvent, handleFeishuEvent } from "@/lib/feishu";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    let body = await req.json();

    const encryptKey = process.env.FEISHU_ENCRYPT_KEY;
    if (body.encrypt && encryptKey) {
      const decrypted = decryptFeishuEvent(encryptKey, body.encrypt);
      body = JSON.parse(decrypted);
    }

    const token = process.env.FEISHU_VERIFICATION_TOKEN;
    if (token && body.token && body.token !== token) {
      return NextResponse.json({ error: "invalid token" }, { status: 403 });
    }

    const result = await handleFeishuEvent(body);
    return NextResponse.json(result);
  } catch (err) {
    console.error("feishu event error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "unknown" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "feishu-bot",
    hint: "POST /api/feishu/event for Feishu event subscription",
  });
}
