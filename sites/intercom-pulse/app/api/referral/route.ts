import { NextRequest, NextResponse } from "next/server";
import { getReferralStatus } from "@/lib/referral-store";
import { apiError } from "@/lib/api-errors";

const ALLOWED_ORIGINS = /\.vercel\.app$/;

function corsHeaders(origin: string) {
  const corsOrigin = ALLOWED_ORIGINS.test(origin) ? origin : "*";
  return { "Access-Control-Allow-Origin": corsOrigin };
}

export async function GET(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  try {
    const siteId = req.nextUrl.searchParams.get("siteId")?.trim() || "";
    const visitorId = req.nextUrl.searchParams.get("visitorId")?.trim() || "";
    const pageOrigin = req.nextUrl.searchParams.get("origin")?.trim() || "";
    if (!siteId || !visitorId) return apiError("invalid_payload", 400);

    const status = await getReferralStatus(siteId, visitorId, pageOrigin || undefined);
    return NextResponse.json(status, { headers: corsHeaders(origin) });
  } catch (err) {
    console.error("referral status failed:", err);
    return apiError("referral_failed", 500);
  }
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin") || "*";
  return new NextResponse(null, {
    status: 204,
    headers: {
      ...corsHeaders(origin),
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
