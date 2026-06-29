import { NextResponse } from "next/server";
import { loadRollup } from "@/lib/analytics-store";
import { loadSitesFromState } from "@/lib/sites-registry";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const [sites, rollup] = await Promise.all([Promise.resolve(loadSitesFromState()), loadRollup()]);
  return NextResponse.json({ sites, rollup }, {
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}
