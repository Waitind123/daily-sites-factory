import type { RollupFile, SiteRollup } from "@/lib/analytics-store";
import type { SiteEntry } from "@/lib/dashboard-metrics";
import {
  audienceToProfile,
  emptyAudience,
  mergeAudience,
  type VisitorProfileView,
} from "@/lib/visitor-audience";

export type { VisitorProfileView };

export interface VisitorInsightsPayload {
  today: VisitorProfileView;
  allTime: VisitorProfileView;
  bySite: Record<string, { today: VisitorProfileView; allTime: VisitorProfileView }>;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function collectAudience(site: SiteRollup, dayFilter?: string) {
  const merged = emptyAudience();
  for (const [day, metrics] of Object.entries(site.daily)) {
    if (dayFilter && day !== dayFilter) continue;
    if (metrics.audience) mergeAudience(merged, metrics.audience);
  }
  return merged;
}

function totalsFor(site: SiteRollup, dayFilter?: string) {
  if (!dayFilter) return site.totals;
  const day = site.daily[dayFilter];
  if (!day) return { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  return {
    pv: day.pv,
    uv: day.uv,
    trial: day.trial,
    checkout: day.checkout,
    purchase: day.purchase,
  };
}

function buildSiteProfiles(site: SiteRollup) {
  const today = todayKey();
  return {
    today: audienceToProfile(collectAudience(site, today), totalsFor(site, today)),
    allTime: audienceToProfile(collectAudience(site), site.totals),
  };
}

export function buildVisitorInsights(
  sites: SiteEntry[],
  rollup: RollupFile
): VisitorInsightsPayload {
  const today = todayKey();
  const globalToday = emptyAudience();
  const globalAll = emptyAudience();
  const todayTotals = { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  const allTotals = { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };

  const bySite: VisitorInsightsPayload["bySite"] = {};

  for (const site of sites) {
    const r = rollup.sites[site.id];
    if (!r) continue;
    bySite[site.id] = buildSiteProfiles(r);

    mergeAudience(globalToday, collectAudience(r, today));
    mergeAudience(globalAll, collectAudience(r));
    const t = totalsFor(r, today);
    todayTotals.pv += t.pv;
    todayTotals.uv += t.uv;
    todayTotals.trial += t.trial;
    todayTotals.checkout += t.checkout;
    todayTotals.purchase += t.purchase;
    allTotals.pv += r.totals.pv;
    allTotals.uv += r.totals.uv;
    allTotals.trial += r.totals.trial;
    allTotals.checkout += r.totals.checkout;
    allTotals.purchase += r.totals.purchase;
  }

  return {
    today: audienceToProfile(globalToday, todayTotals),
    allTime: audienceToProfile(globalAll, allTotals),
    bySite,
  };
}
