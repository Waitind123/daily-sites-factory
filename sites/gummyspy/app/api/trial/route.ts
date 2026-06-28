import { NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { SITE_ID, getTrialStatus } from "@/lib/trial";

export async function GET() {
  const member = await isMember();
  const status = await getTrialStatus(SITE_ID, member);
  return NextResponse.json(status);
}
