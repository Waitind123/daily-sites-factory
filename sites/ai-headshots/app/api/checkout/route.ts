import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin") || request.nextUrl.origin;
    const result = await createCheckoutSession(origin);
    return NextResponse.redirect(result.url);
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "支付创建失败，请稍后重试" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "AI 证件照支付接口",
    demo: !process.env.STRIPE_SECRET_KEY,
    price: "¥699/年",
  });
}
