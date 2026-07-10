import { NextRequest, NextResponse } from "next/server";
import { addPage, getDocSiteById } from "@/lib/docs";
import { apiError } from "@/lib/api-errors";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      siteId?: string;
      title?: string;
      content?: string;
    };

    if (!body.siteId) {
      return apiError("SITE_NOT_FOUND", 404);
    }
    if (!body.title?.trim()) {
      return apiError("PAGE_TITLE_REQUIRED", 400);
    }

    const site = getDocSiteById(body.siteId);
    if (!site) {
      return apiError("SITE_NOT_FOUND", 404);
    }

    const page = addPage(site.id, body.title.trim(), body.content?.trim() ?? "");
    if (!page) {
      return apiError("PAGE_CREATE_FAILED", 500);
    }

    return NextResponse.json({ page, site });
  } catch (error) {
    console.error("Page create error:", error);
    return apiError("PAGE_CREATE_FAILED", 500);
  }
}
