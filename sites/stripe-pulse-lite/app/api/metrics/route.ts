import { NextRequest, NextResponse } from "next/server";
import { createDashboard, listDashboards, syncDashboard } from "@/lib/metrics";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET() {
  return NextResponse.json({ dashboards: listDashboards() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      action?: string;
      name?: string;
      stripeKey?: string;
      dashboardId?: string;
    };

    if (body.action === "sync") {
      if (!body.dashboardId) {
        return apiError("DASHBOARD_NOT_FOUND", 400);
      }

      const member = await isMember();
      const access = await consumeTrial(SITE_ID, member);

      if (!access.consumed && !access.isMember) {
        return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
      }

      const metrics = syncDashboard(body.dashboardId);
      if (!metrics) {
        return apiError("DASHBOARD_NOT_FOUND", 404);
      }

      if (!member) {
        const trial = await incrementTrial(SITE_ID);
        const response = NextResponse.json({
          metrics,
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
        metrics,
        trial: {
          limit: 5,
          used: access.used,
          remaining: access.remaining,
          isMember: true,
          canUse: true,
        },
      });
    }

    if (!body.name?.trim()) {
      return apiError("DASHBOARD_NAME_REQUIRED", 400);
    }

    const dashboard = createDashboard(body.name.trim(), body.stripeKey);
    return NextResponse.json({ dashboard });
  } catch (error) {
    console.error("Metrics error:", error);
    return apiError("METRICS_SYNC_FAILED", 500);
  }
}
