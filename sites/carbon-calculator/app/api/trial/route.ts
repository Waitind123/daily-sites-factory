import { NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { getTrialInfo } from "@/lib/trial";

export async function GET() {
  const member = await isMember();
  const status = await getTrialInfo(member);
  return NextResponse.json(status);
}
