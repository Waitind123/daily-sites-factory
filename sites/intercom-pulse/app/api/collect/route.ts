import { NextRequest, NextResponse } from "next/server";
import { recordEvent, type EventType } from "@/lib/analytics-store";
import { apiError } from "@/lib/api-errors";

const ALLOWED_ORIGINS = /\.vercel\.app$/;

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  const corsOrigin = ALLOWED_ORIGINS.test(origin) ? origin : "*";

  try {
    const body = await req.json();
    const siteId = String(body.siteId || "").trim();
    const type = String(body.type || "pageview") as EventType;
    if (!siteId || !["pageview", "trial", "checkout", "purchase"].includes(type)) {
      return apiError("invalid_payload", 400);
    }

    await recordEvent({
      siteId,
      type,
      path: body.path,
      visitorId: body.visitorId,
      referrer: body.referrer,
      ts: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { headers: { "Access-Control-Allow-Origin": corsOrigin } });
  } catch (err) {
    console.error("analytics collect failed:", err);
    return apiError("analytics_failed", 500);
  }
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin") || "*";
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": ALLOWED_ORIGINS.test(origin) ? origin : "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
