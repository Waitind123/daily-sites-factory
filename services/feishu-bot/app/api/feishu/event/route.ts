import { NextRequest, NextResponse } from "next/server";
import { decryptFeishuEvent } from "@/lib/feishu-crypto";
import { handleFeishuEvent } from "@/lib/feishu";

export const runtime = "edge";

async function parseBody(req: NextRequest): Promise<Record<string, unknown>> {
  let body = (await req.json()) as Record<string, unknown>;

  if (body.encrypt) {
    const encryptKey = process.env.FEISHU_ENCRYPT_KEY;
    if (!encryptKey) {
      throw new Error("FEISHU_ENCRYPT_KEY required when Feishu encryption is enabled");
    }
    const decrypted = await decryptFeishuEvent(encryptKey, String(body.encrypt));
    body = JSON.parse(decrypted) as Record<string, unknown>;
  }

  return body;
}

export async function POST(req: NextRequest) {
  try {
    const body = await parseBody(req);

    // Feishu URL verify must respond within ~3s — answer immediately.
    if (body.type === "url_verification" && body.challenge) {
      return NextResponse.json({ challenge: body.challenge });
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
