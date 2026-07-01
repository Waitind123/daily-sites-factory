import { NextRequest, NextResponse } from "next/server";
import {
  ALLOWED_RETURN_ORIGIN,
  RETURN_ORIGIN_COOKIE,
} from "@/lib/polar-config";

/** After Polar payment, send user back to the site that started checkout. */
export async function GET(request: NextRequest) {
  const origin = request.cookies
    .get(RETURN_ORIGIN_COOKIE)
    ?.value?.replace(/\/$/, "");

  if (!origin || !ALLOWED_RETURN_ORIGIN.test(origin)) {
    const fallback = new URL("/success", request.url);
    request.nextUrl.searchParams.forEach((value, key) => {
      fallback.searchParams.set(key, value);
    });
    if (!fallback.searchParams.has("polar")) {
      fallback.searchParams.set("polar", "true");
    }
    return NextResponse.redirect(fallback, 302);
  }

  const target = new URL(`${origin}/success`);
  request.nextUrl.searchParams.forEach((value, key) => {
    target.searchParams.set(key, value);
  });
  if (!target.searchParams.has("polar")) {
    target.searchParams.set("polar", "true");
  }

  const response = NextResponse.redirect(target.toString(), 302);
  response.cookies.set(RETURN_ORIGIN_COOKIE, "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
  return response;
}
