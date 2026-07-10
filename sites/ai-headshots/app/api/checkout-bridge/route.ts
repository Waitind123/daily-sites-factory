import { NextRequest, NextResponse } from "next/server";
import {
  ALLOWED_RETURN_ORIGIN,
  CHECKOUT_HUB_URL,
  DEFAULT_POLAR_CHECKOUT_URL,
  RETURN_ORIGIN_COOKIE,
} from "@/lib/polar-config";

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.searchParams.get("origin")?.replace(/\/$/, "");
  const hub = CHECKOUT_HUB_URL.replace(/\/$/, "");
  const polar = DEFAULT_POLAR_CHECKOUT_URL;

  if (!origin || !ALLOWED_RETURN_ORIGIN.test(origin)) {
    return NextResponse.redirect(polar, 302);
  }

  const response = NextResponse.redirect(polar, 302);
  if (origin !== hub) {
    response.cookies.set(RETURN_ORIGIN_COOKIE, origin, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60,
      path: "/",
    });
  }
  return response;
}
