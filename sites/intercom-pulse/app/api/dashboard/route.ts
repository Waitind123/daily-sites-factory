import { NextResponse } from "next/server";
import { loadRollup } from "@/lib/analytics-store";
import { loadSitesFromState } from "@/lib/sites-registry";
import { loadRevenueGoal, loadStripeHealth } from "@/lib/dashboard-config";
import { buildDashboardSummary, buildRevenueGoal } from "@/lib/dashboard-metrics";
import { buildVisitorInsights } from "@/lib/visitor-insights";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const [sites, rollup] = await Promise.all([Promise.resolve(loadSitesFromState()), loadRollup()]);
  const stripe = loadStripeHealth();
  const summary = buildDashboardSummary(sites, rollup, stripe);
  const goalConfig = loadRevenueGoal();
  const revenueGoal = goalConfig
    ? buildRevenueGoal(goalConfig, summary.estimatedRevenueUsd)
    : null;
  const visitorInsights = buildVisitorInsights(sites, rollup);

  return NextResponse.json(
    { sites, rollup, summary, revenueGoal, visitorInsights },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
