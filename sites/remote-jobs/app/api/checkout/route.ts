import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";
import { memberCookieHeader } from "@/lib/member";

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin") || request.nextUrl.origin;
    const result = await createCheckoutSession(origin);

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
  const { isDemoMode } = await import("@/lib/stripe");
  return NextResponse.json({
    status: "ok",
    message: "远程工作板支付接口",
    price: "¥699/年",
    demo: isDemoMode(),
  });
}
