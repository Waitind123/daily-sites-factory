import { NextRequest, NextResponse } from "next/server";
import { recordView, recordConversion } from "@/lib/experiments";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      slug?: string;
      variant?: string;
      type?: string;
    };

    if (!body.slug) {
      return apiError("EXPERIMENT_NOT_FOUND", 400);
    }
    if (body.variant !== "A" && body.variant !== "B") {
      return apiError("INVALID_VARIANT", 400);
    }

    const experiment =
      body.type === "conversion"
        ? recordConversion(body.slug, body.variant)
        : recordView(body.slug, body.variant);

    if (!experiment) {
      return apiError("EXPERIMENT_NOT_FOUND", 404);
    }

    return NextResponse.json({ experiment });
  } catch (error) {
    console.error("Event record error:", error);
    return apiError("EVENT_RECORD_FAILED", 500);
  }
}
