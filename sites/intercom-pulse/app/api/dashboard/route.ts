import { NextRequest, NextResponse } from "next/server";
import { loadRollup } from "@/lib/analytics-store";
import { loadSitesFromState } from "@/lib/sites-registry";
import { loadRevenueGoal, loadStripeHealth } from "@/lib/dashboard-config";
import { buildDashboardSummary, buildRevenueGoal } from "@/lib/dashboard-metrics";
import { buildVisitorInsights } from "@/lib/visitor-insights";
import { earliestDayInRollup, parseDateRange, rangeForPreset, type DatePreset } from "@/lib/date-range";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const [sites, rollup] = await Promise.all([Promise.resolve(loadSitesFromState()), loadRollup()]);
  const params = req.nextUrl.searchParams;
  const preset = (params.get("preset") || "today") as DatePreset;
  const siteId = params.get("site") || "all";

  const earliest = earliestDayInRollup(rollup.sites);
  const range =
    preset === "custom"
      ? parseDateRange(params.get("from"), params.get("to"))
      : rangeForPreset(preset, earliest);

  const stripe = loadStripeHealth();
  const summary = buildDashboardSummary(sites, rollup, stripe, range, siteId);
  const goalConfig = loadRevenueGoal();
  const revenueGoal = goalConfig
    ? buildRevenueGoal(goalConfig, summary.estimatedRevenueUsd)
    : null;
  const visitorInsights = buildVisitorInsights(sites, rollup, range, siteId);

  return NextResponse.json(
    {
      sites,
      rollup,
      summary,
      revenueGoal,
      visitorInsights,
      filters: { preset, siteId, range },
    },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
