import { NextRequest, NextResponse } from "next/server";
import { createFunnel, listFunnels, getFunnelBySlug } from "@/lib/funnels";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (slug) {
    const funnel = getFunnelBySlug(slug);
    if (!funnel) return apiError("FUNNEL_NOT_FOUND", 404);
    return NextResponse.json({ funnel });
  }
  return NextResponse.json({ funnels: listFunnels() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      name?: string;
      steps?: string;
    };

    if (!body.name?.trim()) {
      return apiError("FUNNEL_NAME_REQUIRED", 400);
    }

    const steps = (body.steps ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (steps.length < 2) {
      return apiError("STEPS_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const funnel = createFunnel(body.name.trim(), steps);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        funnel,
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
      funnel,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Funnel create error:", error);
    return apiError("FUNNEL_CREATE_FAILED", 500);
  }
}
