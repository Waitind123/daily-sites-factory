import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { createPayment } from "@/lib/payments";
import { memberCookieHeader } from "@/lib/member";

async function checkoutRedirect(request: NextRequest, currency: "cny" | "usd") {
  const origin = request.headers.get("origin") || request.nextUrl.origin;
  const result = await createPayment(origin, currency);
  const response = NextResponse.redirect(result.url, 302);
  if (result.demo) {
    response.headers.append("Set-Cookie", memberCookieHeader());
  }
  return response;
}

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData().catch(() => null);
    const body = form
      ? { currency: form.get("currency") as string }
      : await request.json().catch(() => ({}));
    const currency = body.currency === "usd" ? "usd" : "cny";
    return await checkoutRedirect(request, currency);
  } catch (error) {
    console.error("Checkout error:", error);
    return apiError("CHECKOUT_FAILED", 500);
  }
}

export async function GET(request: NextRequest) {
  if (request.nextUrl.searchParams.get("go") === "1") {
    try {
      const currency =
        request.nextUrl.searchParams.get("currency") === "cny" ? "cny" : "usd";
      return await checkoutRedirect(request, currency);
    } catch (error) {
      console.error("Checkout error:", error);
      return apiError("CHECKOUT_FAILED", 500);
    }
  }
  const { getPricing } = await import("@/lib/payments");
  getPricing();
  return NextResponse.json({ status: "ok" });
}
