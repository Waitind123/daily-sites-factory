import { NextRequest, NextResponse } from "next/server";
import {
  createBookmark,
  createFolder,
  listBookmarks,
  listFolders,
} from "@/lib/bookmarks";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET() {
  return NextResponse.json({
    bookmarks: listBookmarks(),
    folders: listFolders(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      url?: string;
      title?: string;
      folderId?: string | null;
      action?: "save" | "createFolder";
      folderName?: string;
      isPublic?: boolean;
    };

    if (body.action === "createFolder") {
      if (!body.folderName?.trim()) {
        return apiError("FOLDER_NAME_REQUIRED", 400);
      }
      const folder = createFolder(body.folderName.trim(), body.isPublic ?? false);
      return NextResponse.json({ folder });
    }

    if (!body.url?.trim()) {
      return apiError("URL_REQUIRED", 400);
    }

    try {
      new URL(body.url.trim());
    } catch {
      return apiError("INVALID_URL", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const bookmark = createBookmark(
      body.url.trim(),
      body.title,
      body.folderId ?? null
    );

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        bookmark,
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
      bookmark,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Bookmark save error:", error);
    return apiError("BOOKMARK_SAVE_FAILED", 500);
  }
}
