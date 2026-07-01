import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { createPayment } from "@/lib/payments";
import { memberCookieHeader } from "@/lib/member";

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData().catch(() => null);
    const body = form
      ? { currency: form.get("currency") as string }
      : await request.json().catch(() => ({}));

    const currency = body.currency === "usd" ? "usd" : "cny";
    const origin = request.headers.get("origin") || request.nextUrl.origin;
    const result = await createPayment(origin, currency);

    // 303: form POST must become GET at Polar checkout link (307 keeps POST → polar.sh homepage)
    const response = NextResponse.redirect(result.url, 303);
    if (result.demo) {
      response.headers.append("Set-Cookie", memberCookieHeader());
    }
    return response;
  } catch (error) {
    console.error("Checkout error:", error);
    return apiError("CHECKOUT_FAILED", 500);
  }
}

export async function GET() {
  const { getPricing } = await import("@/lib/payments");
  const pricing = getPricing();
  return NextResponse.json({
    status: "ok",
  });
}
