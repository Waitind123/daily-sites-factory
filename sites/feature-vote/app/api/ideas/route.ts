import { NextRequest, NextResponse } from "next/server";
import { addIdea, getIdeas, upvoteIdea } from "@/lib/votes";

export async function GET(request: NextRequest) {
  const boardId = request.nextUrl.searchParams.get("boardId");
  if (!boardId) {
    return NextResponse.json({ error: "boardId required" }, { status: 400 });
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
      return NextResponse.json({ error: "boardId and title required" }, { status: 400 });
    }

    const idea = addIdea(body.boardId, body.title.trim(), body.description?.trim() ?? "");
    if (!idea) {
      return NextResponse.json({ error: "Board not found" }, { status: 404 });
    }

    return NextResponse.json({ idea });
  } catch (error) {
    console.error("Idea create error:", error);
    return NextResponse.json({ error: "Failed to submit idea" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = (await request.json()) as { boardId?: string; ideaId?: string };

    if (!body.boardId || !body.ideaId) {
      return NextResponse.json({ error: "boardId and ideaId required" }, { status: 400 });
    }

    const idea = upvoteIdea(body.boardId, body.ideaId);
    if (!idea) {
      return NextResponse.json({ error: "Idea not found" }, { status: 404 });
    }

    return NextResponse.json({ idea });
  } catch (error) {
    console.error("Upvote error:", error);
    return NextResponse.json({ error: "Failed to upvote" }, { status: 500 });
  }
}
