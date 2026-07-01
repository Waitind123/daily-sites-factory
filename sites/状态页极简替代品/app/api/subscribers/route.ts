import { NextRequest, NextResponse } from "next/server";
import { getPageBySlug, addSubscriber } from "@/lib/status-pages";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { slug?: string; email?: string };

    if (!body.slug) {
      return apiError("PAGE_NOT_FOUND", 404);
    }
    if (!body.email?.trim()) {
      return apiError("EMAIL_REQUIRED", 400);
    }

    const page = getPageBySlug(body.slug);
    if (!page) {
      return apiError("PAGE_NOT_FOUND", 404);
    }

    const added = addSubscriber(page.id, body.email.trim());
    if (!added) {
      return apiError("SUBSCRIBE_FAILED", 409);
    }

    return NextResponse.json({ page, ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return apiError("SUBSCRIBE_FAILED", 500);
  }
}
