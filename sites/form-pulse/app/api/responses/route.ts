import { NextRequest, NextResponse } from "next/server";
import { getFormBySlug, recordStepStart, submitResponse } from "@/lib/forms";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      slug?: string;
      answers?: Record<string, string>;
      step?: number;
      completed?: boolean;
      action?: "start";
    };

    if (!body.slug) {
      return apiError("FORM_NOT_FOUND", 404);
    }

    const form = getFormBySlug(body.slug);
    if (!form) {
      return apiError("FORM_NOT_FOUND", 404);
    }

    if (body.action === "start" && typeof body.step === "number") {
      recordStepStart(form.id, body.step);
      return NextResponse.json({ ok: true });
    }

    if (!body.answers) {
      return apiError("ANSWERS_REQUIRED", 400);
    }

    const emailAnswer = Object.values(body.answers).find((v) => v.includes("@"));
    if (form.questions.some((q) => q.type === "email") && !emailAnswer) {
      return apiError("EMAIL_REQUIRED", 400);
    }

    const response = submitResponse(
      form.id,
      body.answers,
      body.step ?? form.questions.length,
      body.completed ?? true
    );

    if (!response) {
      return apiError("RESPONSE_FAILED", 500);
    }

    return NextResponse.json({ ok: true, response });
  } catch (error) {
    console.error("Response submit error:", error);
    return apiError("RESPONSE_FAILED", 500);
  }
}
