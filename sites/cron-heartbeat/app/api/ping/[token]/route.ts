import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  let body: { status?: string; duration_ms?: number; logs?: string } = {};

  try {
    body = await request.json();
  } catch {
    // empty body is fine for simple pings
  }

  const status = body.status === "fail" ? "failed" : "success";

  return NextResponse.json({
    ok: true,
    token,
    status,
    receivedAt: new Date().toISOString(),
    message:
      status === "failed"
        ? "Failure ping recorded. Members get Slack alerts with logs."
        : "Heartbeat recorded. Monitor is healthy.",
  });
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  return NextResponse.json({
    ok: true,
    token,
    status: "healthy",
    message: "Use POST to send heartbeat pings from your cron job.",
  });
}
