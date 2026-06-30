import { NextResponse } from "next/server";
import { loadRollup } from "@/lib/analytics-store";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const rollup = await loadRollup();
  return NextResponse.json(rollup, {
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}
