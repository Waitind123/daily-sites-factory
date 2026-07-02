import { NextRequest, NextResponse } from "next/server";
import { getInviteCookieName } from "@/lib/trial-core";

const SITE_ID = "stripe-pulse";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code")?.trim().toUpperCase();
  if (!code) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(getInviteCookieName(SITE_ID), code, {
    path: "/",
    maxAge: 365 * 24 * 60 * 60,
    sameSite: "lax",
    httpOnly: true,
  });
  return res;
}
