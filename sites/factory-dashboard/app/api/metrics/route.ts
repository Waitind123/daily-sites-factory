import { NextResponse } from "next/server";
import { loadRollup } from "@/lib/analytics-store";

export async function GET() {
  const rollup = await loadRollup();
  return NextResponse.json(rollup);
}
