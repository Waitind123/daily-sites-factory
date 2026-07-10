import { NextRequest, NextResponse } from "next/server";
import { createExperiment, listExperiments, getExperimentBySlug } from "@/lib/experiments";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (slug) {
    const experiment = getExperimentBySlug(slug);
    if (!experiment) return apiError("EXPERIMENT_NOT_FOUND", 404);
    return NextResponse.json({ experiment });
  }
  return NextResponse.json({ experiments: listExperiments() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      name?: string;
      pageUrl?: string;
      variantA?: string;
      variantB?: string;
    };

    if (!body.name?.trim()) {
      return apiError("EXPERIMENT_NAME_REQUIRED", 400);
    }
    if (!body.pageUrl?.trim()) {
      return apiError("PAGE_URL_REQUIRED", 400);
    }
    if (!body.variantA?.trim() || !body.variantB?.trim()) {
      return apiError("VARIANT_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const experiment = createExperiment(
      body.name.trim(),
      body.pageUrl.trim(),
      body.variantA.trim(),
      body.variantB.trim()
    );

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        experiment,
        trial: {
          limit: 5,
          used: trial.used,
          remaining: trial.remaining,
          isMember: false,
          canUse: trial.remaining > 0,
        },
      });
      response.headers.append("Set-Cookie", trial.cookieHeader);
      return response;
    }

    return NextResponse.json({
      experiment,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Experiment create error:", error);
    return apiError("EXPERIMENT_CREATE_FAILED", 500);
  }
}
