import { NextRequest, NextResponse } from "next/server";
import {
  addApplication,
  getListingById,
  getListingBySlug,
  getApplications,
} from "@/lib/listings";
import { apiError } from "@/lib/api-errors";

export async function GET(request: NextRequest) {
  const listingId = request.nextUrl.searchParams.get("listingId");
  const slug = request.nextUrl.searchParams.get("slug");

  const listing = listingId
    ? getListingById(listingId)
    : slug
      ? getListingBySlug(slug)
      : undefined;

  if (!listing) {
    return apiError("LISTING_NOT_FOUND", 404);
  }

  return NextResponse.json({
    listing,
    applications: getApplications(listing.id).map((a) => ({
      position: a.position,
      profile: a.profile,
      createdAt: a.createdAt,
    })),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      listingId?: string;
      slug?: string;
      email?: string;
      profile?: string;
    };

    if (!body.email?.trim()) {
      return apiError("EMAIL_REQUIRED", 400);
    }

    const listing = body.listingId
      ? getListingById(body.listingId)
      : body.slug
        ? getListingBySlug(body.slug)
        : undefined;

    if (!listing) {
      return apiError("LISTING_NOT_FOUND", 404);
    }

    const application = addApplication(
      listing.id,
      body.email,
      body.profile ?? ""
    );
    if (!application) {
      return apiError("APPLICATION_FAILED", 500);
    }

    return NextResponse.json({
      application: {
        position: application.position,
        email: application.email,
      },
      listing: {
        applicationCount: listing.applicationCount,
      },
    });
  } catch (error) {
    console.error("Application error:", error);
    return apiError("APPLICATION_FAILED", 500);
  }
}
