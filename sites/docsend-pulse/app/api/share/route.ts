import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createDocShare, getShare, listShares } from "@/lib/doc-share";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, recordTrialUse } from "@/lib/trial";
import { isMember } from "@/lib/member";
import { LOCALE_COOKIE } from "@/lib/i18n-shared";

async function getRequestLocale(): Promise<"en" | "zh"> {
  const jar = await cookies();
  const value = jar.get(LOCALE_COOKIE)?.value;
  return value === "zh" ? "zh" : "en";
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    const share = getShare(id);
    if (!share) return apiError("SHARE_NOT_FOUND", 404);
    return NextResponse.json({ share });
  }
  return NextResponse.json({ shares: listShares() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      title?: string;
      pageCount?: number;
      recipientEmail?: string;
    };
    const locale = await getRequestLocale();

    if (!body.title?.trim()) {
      return apiError("DOC_TITLE_REQUIRED", 400);
    }

    const pages = body.pageCount ?? 1;
    if (pages < 1 || pages > 50) {
      return apiError("PAGE_COUNT_INVALID", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const share = createDocShare(
      body.title.trim(),
      pages,
      body.recipientEmail,
      locale
    );

    if (!member) {
      const trial = await recordTrialUse();
      const response = NextResponse.json({
        share,
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
      share,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Doc share error:", error);
    return apiError("SHARE_FAILED", 500);
  }
}
