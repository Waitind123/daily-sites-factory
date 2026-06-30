import { NextRequest, NextResponse } from "next/server";
import {
  createKeyword,
  listKeywords,
  checkKeywordRank,
  getKeywordStats,
  getKeywordById,
} from "@/lib/keywords";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

function isValidDomain(domain: string): boolean {
  const d = domain.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/.*$/, "");
  return /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/.test(d);
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const stats = getKeywordStats(id);
    if (!stats) return apiError("KEYWORD_NOT_FOUND", 404);
    return NextResponse.json({ stats });
  }
  return NextResponse.json({ keywords: listKeywords() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      action?: string;
      keyword?: string;
      domain?: string;
      id?: string;
    };

    if (body.action === "check") {
      if (!body.id) return apiError("KEYWORD_NOT_FOUND", 400);
      const existing = getKeywordById(body.id);
      if (!existing) return apiError("KEYWORD_NOT_FOUND", 404);

      const member = await isMember();
      const access = await consumeTrial(SITE_ID, member);
      if (!access.consumed && !access.isMember) {
        return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
      }

      const updated = checkKeywordRank(body.id);
      if (!updated) return apiError("KEYWORD_NOT_FOUND", 404);

      if (!member) {
        const trial = await incrementTrial(SITE_ID);
        const response = NextResponse.json({
          keyword: updated,
          stats: getKeywordStats(updated.id),
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
        keyword: updated,
        stats: getKeywordStats(updated.id),
        trial: { limit: 5, used: access.used, remaining: access.remaining, isMember: true, canUse: true },
      });
    }

    if (!body.keyword?.trim()) {
      return apiError("KEYWORD_REQUIRED", 400);
    }
    if (!body.domain?.trim()) {
      return apiError("DOMAIN_REQUIRED", 400);
    }
    if (!isValidDomain(body.domain)) {
      return apiError("DOMAIN_INVALID", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);
    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const keyword = createKeyword(body.keyword, body.domain);

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        keyword,
        stats: getKeywordStats(keyword.id),
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
      keyword,
      stats: getKeywordStats(keyword.id),
      trial: { limit: 5, used: access.used, remaining: access.remaining, isMember: true, canUse: true },
    });
  } catch (error) {
    console.error("Keywords error:", error);
    return apiError("KEYWORD_CREATE_FAILED", 500);
  }
}
