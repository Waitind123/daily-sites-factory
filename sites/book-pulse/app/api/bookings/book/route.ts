import { NextRequest, NextResponse } from "next/server";
import { recordBooking } from "@/lib/bookings";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { slug?: string };
    if (!body.slug) {
      return apiError("PAGE_NOT_FOUND", 400);
    }
    const page = recordBooking(body.slug);
    if (!page) {
      return apiError("PAGE_NOT_FOUND", 404);
    }
    return NextResponse.json({ ok: true, page });
  } catch {
    return apiError("BOOKING_PUBLISH_FAILED", 500);
  }
}
