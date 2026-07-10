import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { getLocale } from "@/lib/locale";
import { memberCookieHeader } from "@/lib/member";
import {createCheckoutSession, createCnyCheckoutSession } from "@/lib/stripe";

async function checkoutRedirect(request: NextRequest) {
  const origin = request.headers.get("origin") || request.nextUrl.origin;
  if (
    request.nextUrl.searchParams.get("currency") === "cny" ||
    (await request.formData().catch(() => null))?.get("currency") === "cny"
  ) {
    const locale = await getLocale();
    const result = await createCnyCheckoutSession(origin, locale);
    const response = NextResponse.redirect(result.url, 302);
    if (result.demo) {
      response.headers.append("Set-Cookie", memberCookieHeader());
    }
    return response;
  }

  const locale = await getLocale();
  const plan =
    request.nextUrl.searchParams.get("plan") === "annual" ||
    (await request.formData().catch(() => null))?.get("plan") === "annual"
      ? "annual"
      : "monthly";
  const result = await createCheckoutSession(origin, locale, plan);
  const response = NextResponse.redirect(result.url, 302);
  if (result.demo) {
    response.headers.append("Set-Cookie", memberCookieHeader());
  }
  return response;
}

export async function POST(request: NextRequest) {
  try {
    return await checkoutRedirect(request);
  } catch (error) {
    console.error("Checkout error:", error);
    return apiError("CHECKOUT_FAILED", 500);
  }
}

export async function GET(request: NextRequest) {
  if (request.nextUrl.searchParams.get("go") === "1") {
    try {
      return await checkoutRedirect(request);
    } catch (error) {
      console.error("Checkout error:", error);
      return apiError("CHECKOUT_FAILED", 500);
    }
  }
  const { isDemoMode } = await import("@/lib/stripe");
  return NextResponse.json({
    status: "ok",
    price: "$9.9/mo",
    demo: isDemoMode(),
  });
}
