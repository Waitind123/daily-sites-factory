import { NextResponse } from "next/server";
import { isMember } from "@/lib/member";
import { getTrialInfo } from "@/lib/trial";

export async function GET() {
  const status = await getTrialInfo(await isMember());
  return NextResponse.json(status);
}
