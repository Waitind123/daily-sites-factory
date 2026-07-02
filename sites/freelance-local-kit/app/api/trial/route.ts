import { NextRequest, NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { getTrialInfo } from "@/lib/trial";
import { syncReferralBonusFromHub } from "@/lib/referral-server";
import { trialBonusCookieHeader } from "@/lib/trial-core";

import { SITE_ID } from "@/lib/trial";

export async function GET(req: NextRequest) {
  const member = await isMember();
  const visitorId = req.nextUrl.searchParams.get("visitorId")?.trim() || "";

  const headers = new Headers();
  if (visitorId) {
    const bonus = await syncReferralBonusFromHub(SITE_ID, visitorId);
    if (bonus !== null && bonus > 0) {
      headers.append("Set-Cookie", trialBonusCookieHeader(SITE_ID, bonus));
    }
  }

  const status = await getTrialInfo(member);
  return NextResponse.json(status, { headers });
}
