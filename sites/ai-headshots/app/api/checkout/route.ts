import { NextRequest, NextResponse } from "next/server";
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

    const response = NextResponse.redirect(result.url);
    if (result.demo) {
      response.headers.append("Set-Cookie", memberCookieHeader());
    }
    return response;
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "支付创建失败，请稍后重试" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const { getPricing } = await import("@/lib/payments");
  const pricing = getPricing();
  return NextResponse.json({
    status: "ok",
    message: "AI 证件照支付接口",
    ...pricing,
  });
}
