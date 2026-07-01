import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { getLocale } from "@/lib/locale";
import { memberCookieHeader } from "@/lib/member";
import { createCheckoutSession } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin") || request.nextUrl.origin;
    const locale = await getLocale();
    const formData = await request.formData().catch(() => null);
    const plan = formData?.get("plan") === "annual" ? "annual" : "monthly";
    const result = await createCheckoutSession(origin, locale, plan);

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
    price: "$9.9/mo",
    demo: isDemoMode(),
  });
}
