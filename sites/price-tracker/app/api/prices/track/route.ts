import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { isMember } from "@/lib/member";
import { getLocale } from "@/lib/locale";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { getProductById } from "@/lib/data";

export async function POST(request: NextRequest) {
  const locale = await getLocale();
  const body = await request.json().catch(() => ({}));
  if (!body.productId) {
    return apiError("MISSING_PRODUCT_ID", 400);
  }

  const product = getProductById(body.productId, locale);
  if (!product) {
    return apiError("PRODUCT_NOT_FOUND", 404);
  }

  const member = await isMember();
  const access = await useTrial(member);

  if (!access.consumed && !access.isMember) {
    return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
  }

  let remaining = access.isMember ? -1 : access.remaining;

  if (!access.isMember && access.consumed) {
    const recorded = await recordTrialUse();
    remaining = recorded.remaining;
    const response = NextResponse.json({
      ok: true,
      productId: product.id,
      name: product.name,
      tracking: product.tracking,
      remaining,
    });
    response.headers.append("Set-Cookie", recorded.cookieHeader);
    return response;
  }

  return NextResponse.json({
    ok: true,
    productId: product.id,
    name: product.name,
    tracking: product.tracking,
    remaining,
  });
}
