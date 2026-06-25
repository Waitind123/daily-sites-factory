import { NextRequest, NextResponse } from "next/server";
import { addIdea, getIdeas, upvoteIdea } from "@/lib/votes";
import { apiError } from "@/lib/api-errors";

export async function GET(request: NextRequest) {
  const boardId = request.nextUrl.searchParams.get("boardId");
  if (!boardId) {
    return apiError("BOARD_NOT_FOUND", 400);
  }
  return NextResponse.json({ ideas: getIdeas(boardId) });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      boardId?: string;
      title?: string;
      description?: string;
    };

    if (!body.boardId || !body.title?.trim()) {
      return apiError("IDEA_TITLE_REQUIRED", 400);
    }

    const idea = addIdea(body.boardId, body.title.trim(), body.description?.trim() ?? "");
    if (!idea) {
      return apiError("BOARD_NOT_FOUND", 404);
    }

    return NextResponse.json({ idea });
  } catch (error) {
    console.error("Idea create error:", error);
    return apiError("IDEA_SUBMIT_FAILED", 500);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = (await request.json()) as { boardId?: string; ideaId?: string };

    if (!body.boardId || !body.ideaId) {
      return apiError("IDEA_NOT_FOUND", 400);
    }

    const idea = upvoteIdea(body.boardId, body.ideaId);
    if (!idea) {
      return apiError("IDEA_NOT_FOUND", 404);
    }

    return NextResponse.json({ idea });
  } catch (error) {
    console.error("Upvote error:", error);
    return apiError("UPVOTE_FAILED", 500);
  }
}
