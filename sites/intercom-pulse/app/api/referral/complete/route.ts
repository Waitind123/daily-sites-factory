import { NextRequest, NextResponse } from "next/server";
import { completeReferralTrial } from "@/lib/referral-store";
import { apiError } from "@/lib/api-errors";

const ALLOWED_ORIGINS = /\.vercel\.app$/;

function corsHeaders(origin: string) {
  const corsOrigin = ALLOWED_ORIGINS.test(origin) ? origin : "*";
  return { "Access-Control-Allow-Origin": corsOrigin };
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  try {
    const body = await req.json();
    const siteId = String(body.siteId || "").trim();
    const inviteCode = String(body.inviteCode || "").trim();
    const refereeVisitorId = String(body.refereeVisitorId || "").trim();
    if (!siteId || !inviteCode || !refereeVisitorId) {
      return apiError("invalid_payload", 400);
    }

    const result = await completeReferralTrial(siteId, inviteCode, refereeVisitorId);
    return NextResponse.json(result, {
      status: result.ok ? 200 : 400,
      headers: corsHeaders(origin),
    });
  } catch (err) {
    console.error("referral complete failed:", err);
    return apiError("referral_failed", 500);
  }
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin") || "*";
  return new NextResponse(null, {
    status: 204,
    headers: {
      ...corsHeaders(origin),
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
