import { NextRequest, NextResponse } from "next/server";
import {
  fillQuestionnaire,
  listQuestionnaires,
  getQuestionnaireById,
  getQuestStats,
} from "@/lib/sec-quest";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const record = getQuestionnaireById(id);
    if (!record) return apiError("QUESTIONNAIRE_NOT_FOUND", 404);
    return NextResponse.json({ record });
  }
  return NextResponse.json({
    records: listQuestionnaires(),
    stats: getQuestStats(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      title?: string;
      questions?: string;
      answerBank?: string;
    };

    if (!body.title?.trim()) {
      return apiError("TITLE_REQUIRED", 400);
    }

    if (!body.questions?.trim()) {
      return apiError("QUESTIONS_REQUIRED", 400);
    }

    if (!body.answerBank?.trim()) {
      return apiError("ANSWER_BANK_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const record = fillQuestionnaire(
      body.title.trim(),
      body.questions.trim(),
      body.answerBank.trim()
    );

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        record,
        stats: getQuestStats(),
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
      record,
      stats: getQuestStats(),
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Questionnaire error:", error);
    return apiError("QUESTIONNAIRE_CREATE_FAILED", 500);
  }
}
