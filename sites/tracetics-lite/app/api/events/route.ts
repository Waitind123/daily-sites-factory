import { NextRequest, NextResponse } from "next/server";
import { recordStep } from "@/lib/funnels";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      slug?: string;
      step?: number;
    };

    if (!body.slug) {
      return apiError("FUNNEL_NOT_FOUND", 400);
    }
    if (typeof body.step !== "number" || body.step < 0) {
      return apiError("INVALID_STEP", 400);
    }

    const funnel = recordStep(body.slug, body.step);

    if (!funnel) {
      return apiError("FUNNEL_NOT_FOUND", 404);
    }

    return NextResponse.json({ funnel });
  } catch (error) {
    console.error("Event record error:", error);
    return apiError("EVENT_RECORD_FAILED", 500);
  }
}
