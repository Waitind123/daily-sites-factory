import { NextRequest, NextResponse } from "next/server";
import { createListing, listListings } from "@/lib/listings";
import { apiError } from "@/lib/api-errors";
import { SITE_ID, consumeTrial, incrementTrial } from "@/lib/trial";
import { isMember } from "@/lib/member";

export async function GET() {
  return NextResponse.json({ listings: listListings() });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      productName?: string;
      description?: string;
      targetAudience?: string;
    };

    if (!body.productName?.trim()) {
      return apiError("PRODUCT_NAME_REQUIRED", 400);
    }

    const member = await isMember();
    const access = await consumeTrial(SITE_ID, member);

    if (!access.consumed && !access.isMember) {
      return apiError("TRIAL_EXHAUSTED", 403, { remaining: 0 });
    }

    const listing = createListing(
      body.productName.trim(),
      body.description?.trim() ?? "",
      body.targetAudience?.trim() ?? ""
    );

    if (!member) {
      const trial = await incrementTrial(SITE_ID);
      const response = NextResponse.json({
        listing,
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
      listing,
      trial: {
        limit: 5,
        used: access.used,
        remaining: access.remaining,
        isMember: true,
        canUse: true,
      },
    });
  } catch (error) {
    console.error("Listing create error:", error);
    return apiError("LISTING_CREATE_FAILED", 500);
  }
}
