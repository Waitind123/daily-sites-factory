import { NextRequest } from "next/server";
import { apiError } from "@/lib/api-errors";
import { getJobById } from "@/lib/data";
import { isMember } from "@/lib/member";
import { useTrial, recordTrialUse } from "@/lib/trial";
import { FREE_TRIAL_LIMIT } from "@/lib/trial-core";

export async function POST(request: NextRequest) {
  try {
    const { jobId } = await request.json();
    if (!jobId || typeof jobId !== "string") {
      return apiError("MISSING_JOB_ID", 400);
    }

    const job = getJobById(jobId);
    if (!job) {
      return apiError("JOB_NOT_FOUND", 404);
    }

    const member = await isMember();
    const access = await useTrial(member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    if (member) {
      return Response.json({ job: { ...job, unlocked: true }, trial: null });
    }

    const inc = await recordTrialUse();
    return Response.json(
      {
        job: { ...job, unlocked: true },
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
    console.error("Job view error:", error);
    return apiError("LOAD_FAILED", 500);
  }
}
