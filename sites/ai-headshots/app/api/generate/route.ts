import { NextRequest, NextResponse } from "next/server";
import { apiError } from "@/lib/api-errors";
import { isMember } from "@/lib/member";
import { recordTrialUse, useTrial } from "@/lib/trial";
import {
  demoHeadshotSvg,
  generateHeadshot,
  isReplicateConfigured,
} from "@/lib/replicate";

export async function POST(request: NextRequest) {
  try {
    const member = await isMember();
    const trial = await useTrial(member);

    if (!member && !trial.consumed) {
      return apiError("TRIAL_EXHAUSTED", 403, {
        remaining: 0,
        limit: trial.limit,
      });
    }

    const { image, style = "corporate" } = await request.json();

    if (!image || typeof image !== "string") {
      return apiError("IMAGE_REQUIRED", 400);
    }

    if (!image.startsWith("data:image/")) {
      return apiError("IMAGE_INVALID", 400);
    }

    if (image.length > 5_500_000) {
      return apiError("IMAGE_TOO_LARGE", 400);
    }

    let outputUrl: string;
    let demo = false;

    if (isReplicateConfigured()) {
      outputUrl = await generateHeadshot(image, style);
    } else {
      demo = true;
      outputUrl = demoHeadshotSvg(style);
    }

    let remaining: number | null = null;
    const headers = new Headers();

    if (!member) {
      const recorded = await recordTrialUse();
      remaining = recorded.remaining;
      headers.append("Set-Cookie", recorded.cookieHeader);
    }

    return NextResponse.json(
      {
        ok: true,
        url: outputUrl,
        style,
        demo,
        remaining,
      },
      { headers }
    );
  } catch (error) {
    console.error("Generate error:", error);
    return apiError("GENERATE_FAILED", 500);
  }
}
