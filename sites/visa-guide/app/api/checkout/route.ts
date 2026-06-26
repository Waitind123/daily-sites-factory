import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
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
    return apiError("CHECKOUT_FAILED", 500);
  }
}

export async function GET() {
  const { isDemoMode } = await import("@/lib/stripe");
  return NextResponse.json({
    status: "ok",
    message: "visa_guide_checkout",
    price: "$9.9/mo",
    demo: isDemoMode(),
  });
}
