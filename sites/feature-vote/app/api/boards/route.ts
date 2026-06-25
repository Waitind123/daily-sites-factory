import { NextRequest, NextResponse } from "next/server";
import { createBoard, listBoards } from "@/lib/votes";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET() {
  return NextResponse.json({ boards: listBoards() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { name?: string; description?: string };

    if (!body.name?.trim()) {
      return NextResponse.json({ error: "Board name is required" }, { status: 400 });
    }

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

    const board = createBoard(body.name.trim(), body.description?.trim() ?? "");

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        board,
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
      board,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Board create error:", error);
    return NextResponse.json({ error: "Failed to create board" }, { status: 500 });
  }
}
