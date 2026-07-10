import { NextRequest, NextResponse } from "next/server";
import { addSignup, getWaitlistById, getWaitlistBySlug, getSignups } from "@/lib/waitlists";
import { apiError } from "@/lib/api-errors";

export async function GET(request: NextRequest) {
  const waitlistId = request.nextUrl.searchParams.get("waitlistId");
  const slug = request.nextUrl.searchParams.get("slug");

  const waitlist = waitlistId
    ? getWaitlistById(waitlistId)
    : slug
      ? getWaitlistBySlug(slug)
      : undefined;

  if (!waitlist) {
    return apiError("LIST_NOT_FOUND", 404);
  }

  return NextResponse.json({
    waitlist,
    signups: getSignups(waitlist.id).map((s) => ({
      position: s.position,
      createdAt: s.createdAt,
    })),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      waitlistId?: string;
      slug?: string;
      email?: string;
    };

    if (!body.email?.trim()) {
      return apiError("EMAIL_REQUIRED", 400);
    }

    const waitlist = body.waitlistId
      ? getWaitlistById(body.waitlistId)
      : body.slug
        ? getWaitlistBySlug(body.slug)
        : undefined;

    if (!waitlist) {
      return apiError("LIST_NOT_FOUND", 404);
    }

    const signup = addSignup(waitlist.id, body.email);
    if (!signup) {
      return apiError("SIGNUP_FAILED", 500);
    }

    return NextResponse.json({
      signup: {
        position: signup.position,
        referralCode: signup.referralCode,
        email: signup.email,
      },
      waitlist: {
        signupCount: waitlist.signupCount,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return apiError("SIGNUP_FAILED", 500);
  }
}
