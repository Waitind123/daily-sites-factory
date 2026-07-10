import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession, createCnyCheckoutSession } from "@/lib/stripe";
import { memberCookieHeader } from "@/lib/member";
import { apiError } from "@/lib/api-errors";
import { getLocale } from "@/lib/locale";

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

  const result = await createCheckoutSession(origin);
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
  return NextResponse.json({
    status: "ok",
    code: "checkout_ready",
    price: "$29/mo",
    demo: (await import("@/lib/stripe")).isDemoMode(),
  });
}
