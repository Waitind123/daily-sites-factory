import { NextRequest } from "next/server";
import { apiError } from "@/lib/api-errors";
import { getSpaceById } from "@/lib/data";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { FREE_TRIAL_LIMIT } from "@/lib/trial-core";

export async function POST(request: NextRequest) {
  try {
    const { spaceId } = await request.json();
    if (!spaceId || typeof spaceId !== "string") {
      return apiError("SPACE_ID_REQUIRED", 400);
    }

    const space = getSpaceById(spaceId);
    if (!space) {
      return apiError("SPACE_NOT_FOUND", 404);
    }

    const member = await isMember();
    const access = await useTrial(member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    if (member) {
      return Response.json({ space: { ...space, unlocked: true }, trial: null });
    }

    const inc = await recordTrialUse();
    return Response.json(
      {
        space: { ...space, unlocked: true },
        trial: {
          limit: FREE_TRIAL_LIMIT,
          used: inc.used,
          remaining: inc.remaining,
          isMember: false,
          canUse: inc.remaining > 0,
        },
      },
      { headers: { "Set-Cookie": inc.cookieHeader } }
    );
  } catch (error) {
    console.error("Space view error:", error);
    return apiError("LOAD_FAILED", 500);
  }
}
