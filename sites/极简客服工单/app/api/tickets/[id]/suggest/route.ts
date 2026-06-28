import { NextRequest, NextResponse } from "next/server";
import { getTicket, suggestReply } from "@/lib/tickets";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const ticket = getTicket(id);

    if (!ticket) {
      return apiError("TICKET_NOT_FOUND", 404);
    }

    if (ticket.suggestedReply) {
      return NextResponse.json({
        reply: ticket.suggestedReply,
        articleId: ticket.matchedArticleId,
        alreadyGenerated: true,
      });
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const result = suggestReply(id);
    if (!result) {
      return apiError("SUGGEST_FAILED", 500);
    }

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        ...result,
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
      ...result,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Suggest reply error:", error);
    return apiError("SUGGEST_FAILED", 500);
  }
}
