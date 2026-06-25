import { NextRequest, NextResponse } from "next/server";
import { createJob, validateCronExpression } from "@/lib/cron";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      name?: string;
      schedule?: string;
      graceMinutes?: number;
    };

    if (!body.name?.trim()) {
      return NextResponse.json({ error: "Job name is required" }, { status: 400 });
    }
    if (!body.schedule?.trim()) {
      return NextResponse.json({ error: "Cron schedule is required" }, { status: 400 });
    }

    const validation = validateCronExpression(body.schedule.trim());
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const graceMinutes = Math.min(1440, Math.max(1, body.graceMinutes ?? 10));

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return NextResponse.json(
        {
          error: "Free trial exhausted. Please subscribe.",
          code: "TRIAL_EXHAUSTED",
          remaining: 0,
        },
        { status: 403 }
      );
    }

    const origin = request.headers.get("origin") || request.nextUrl.origin;
    const created = createJob(body.name.trim(), body.schedule.trim(), graceMinutes, origin);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        ...created,
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
      ...created,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Job create error:", error);
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}
