import { NextResponse } from "next/server";
import { memberCookieHeader } from "@/lib/member";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.headers.append("Set-Cookie", memberCookieHeader());
  return response;
}
