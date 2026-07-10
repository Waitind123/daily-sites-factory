import { NextRequest, NextResponse } from "next/server";
import { createWorkspace, listWorkspaces, syncWorkspace } from "@/lib/profit";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET() {
  return NextResponse.json({ workspaces: listWorkspaces() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      action?: string;
      name?: string;
      stripeKey?: string;
      monthlyAiBudget?: number;
      workspaceId?: string;
    };

    if (body.action === "sync") {
      if (!body.workspaceId) {
        return apiError("WORKSPACE_NOT_FOUND", 400);
      }

      const member = await isMember();
      const access = await consumeTrial(SITE_ID, member);

      if (!access.consumed && !access.isMember) {
        return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
      }

      const snapshot = syncWorkspace(body.workspaceId);
      if (!snapshot) {
        return apiError("WORKSPACE_NOT_FOUND", 404);
      }

      if (!member) {
        const trial = await incrementTrial(SITE_ID);
        const response = NextResponse.json({
          snapshot,
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
        snapshot,
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
      return apiError("WORKSPACE_NAME_REQUIRED", 400);
    }

    const workspace = createWorkspace(
      body.name.trim(),
      body.stripeKey,
      body.monthlyAiBudget
    );
    return NextResponse.json({ workspace });
  } catch (error) {
    console.error("Profit sync error:", error);
    return apiError("PROFIT_SYNC_FAILED", 500);
  }
}
