import { NextRequest, NextResponse } from "next/server";
import { forwardWebhook } from "@/lib/flows";
import { apiError } from "@/lib/api-errors";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  if (!token || token.length < 8) {
    return apiError("INVALID_TOKEN", 400);
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    payload = { raw: await request.text() };
  }

  const targetUrl = request.nextUrl.searchParams.get("target");
  const demoMode = !targetUrl;

  if (demoMode) {
    return NextResponse.json({
      ok: true,
      demo: true,
      message: "Webhook received (demo mode — configure flow target URL in dashboard)",
      token,
      receivedAt: new Date().toISOString(),
      payload,
    });
  }

  const result = await forwardWebhook(targetUrl, {
    ...(typeof payload === "object" && payload !== null ? payload : { data: payload }),
    _zapierPulse: { token, receivedAt: new Date().toISOString() },
  });

  return NextResponse.json({
    ok: result.ok,
    status: result.status,
    forwardedAt: result.forwardedAt,
    token,
  });
}
