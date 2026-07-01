import type { RollupFile, SiteRollup } from "@/lib/analytics-store";
import type { DateRange } from "@/lib/date-range";
import { isDayInRange } from "@/lib/date-range";
import { isTestVisitor } from "@/lib/analytics-real-users";

export const SUBSCRIPTION_PRICE_USD = 9.9;

export interface SiteEntry {
  id: string;
  name: string;
  url: string;
}

export interface RevenueGoalView {
  targetUsd: number;
  deadline: string;
  purpose?: string;
  daysLeft: number;
  estimatedRevenueUsd: number;
  progressPct: number;
}

export interface MetricTotals {
  pv: number;
  uv: number;
  trial: number;
  checkout: number;
  purchase: number;
}

export interface FunnelRates {
  visitToTrial: string;
  trialToCheckout: string;
  checkoutToPurchase: string;
  visitToCheckout: string;
  visitToPurchase: string;
  visitorToPurchase: string;
}

export interface SeoHealth {
  avgScore: number;
  excellentCount: number;
  goodCount: number;
  needsWorkCount: number;
  sitemapPass: number;
  robotsPass: number;
  withOg: number;
  withJsonLd: number;
  withGuides: number;
  checkedCount: number;
}

export interface StripeHealth {
  configured: boolean;
  polarPerSite?: boolean;
  polarApi?: boolean;
  provider?: string;
  liveCount: number;
  demoCount: number;
  failCount: number;
  liveSiteIds?: string[];
  updatedAt: string | null;
}

export interface TopSiteRow {
  id: string;
  name: string;
  url: string;
  pv: number;
  uv: number;
  purchase: number;
}

export interface DashboardSummary {
  siteCount: number;
  activeSites: number;
  payingSites: number;
  period: MetricTotals;
  funnel: FunnelRates;
  estimatedRevenueUsd: number;
  seo: SeoHealth;
  stripe: StripeHealth;
  topSites: TopSiteRow[];
  dateRange: DateRange;
}

function pct(n: number, d: number) {
  if (!d) return "0%";
  return `${((n / d) * 100).toFixed(1)}%`;
}

export function sumSitePeriod(site: SiteRollup, range: DateRange): MetricTotals {
  const visitors = new Set<string>();
  const totals: MetricTotals = { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };

  for (const [day, metrics] of Object.entries(site.daily || {})) {
    if (!isDayInRange(day, range)) continue;
    totals.trial += metrics.trial || 0;
    totals.checkout += metrics.checkout || 0;
    totals.purchase += metrics.purchase || 0;

    const hits = metrics.visitorHits;
    if (hits && Object.keys(hits).length > 0) {
      for (const [vid, count] of Object.entries(hits)) {
        if (isTestVisitor(vid)) continue;
        totals.pv += count;
        visitors.add(vid);
      }
      continue;
    }

    const dayVisitors = metrics.visitors || [];
    const realVisitors = dayVisitors.filter((v) => !isTestVisitor(v));
    const testCount = dayVisitors.length - realVisitors.length;
    totals.pv += Math.max(0, (metrics.pv || 0) - testCount);
    for (const v of realVisitors) visitors.add(v);
  }

  totals.uv = visitors.size;
  return totals;
}

export function sumRollupPeriod(rollup: RollupFile, range: DateRange, siteId?: string): MetricTotals {
  const totals: MetricTotals = { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  const sites = siteId ? { [siteId]: rollup.sites[siteId] } : rollup.sites;

  for (const site of Object.values(sites)) {
    if (!site) continue;
    const part = sumSitePeriod(site, range);
    totals.pv += part.pv;
    totals.trial += part.trial;
    totals.checkout += part.checkout;
    totals.purchase += part.purchase;
    totals.uv += part.uv;
  }
  return totals;
}

function computeSeo(rollup: RollupFile): SeoHealth {
  const sites = Object.values(rollup.sites);
  let scoreSum = 0;
  let scoreCount = 0;
  const health: SeoHealth = {
    avgScore: 0,
    excellentCount: 0,
    goodCount: 0,
    needsWorkCount: 0,
    sitemapPass: 0,
    robotsPass: 0,
    withOg: 0,
    withJsonLd: 0,
    withGuides: 0,
    checkedCount: 0,
  };

  for (const site of sites) {
    const seo = site.seo;
    if (!seo?.lastChecked) continue;
    health.checkedCount += 1;
    scoreSum += seo.score;
    scoreCount += 1;
    if (seo.score >= 80) health.excellentCount += 1;
    else if (seo.score >= 50) health.goodCount += 1;
    else health.needsWorkCount += 1;
    if (seo.sitemapOk) health.sitemapPass += 1;
    if (seo.robotsOk) health.robotsPass += 1;
    if (seo.hasOg) health.withOg += 1;
    if (seo.hasJsonLd) health.withJsonLd += 1;
    if ((seo.guideCount || 0) > 0) health.withGuides += 1;
  }

  health.avgScore = scoreCount ? Math.round(scoreSum / scoreCount) : 0;
  return health;
}

export function buildFunnel(totals: MetricTotals): FunnelRates {
  return {
    visitToTrial: pct(totals.trial, totals.pv),
    trialToCheckout: pct(totals.checkout, totals.trial),
    checkoutToPurchase: pct(totals.purchase, totals.checkout),
    visitToCheckout: pct(totals.checkout, totals.pv),
    visitToPurchase: pct(totals.purchase, totals.pv),
    visitorToPurchase: pct(totals.purchase, totals.uv),
  };
}

export function buildRevenueGoal(
  target: { targetUsd: number; deadline: string; purpose?: string },
  estimatedRevenueUsd: number
): RevenueGoalView {
  const deadline = new Date(target.deadline);
  const daysLeft = Math.max(0, Math.ceil((deadline.getTime() - Date.now()) / 86400000));
  const progressPct = target.targetUsd
    ? Math.min(100, (estimatedRevenueUsd / target.targetUsd) * 100)
    : 0;
  return {
    targetUsd: target.targetUsd,
    deadline: target.deadline,
    purpose: target.purpose,
    daysLeft,
    estimatedRevenueUsd,
    progressPct,
  };
}

export function buildDashboardSummary(
  sites: SiteEntry[],
  rollup: RollupFile,
  stripe: StripeHealth,
  range: DateRange,
  filterSiteId?: string
): DashboardSummary {
  const period = sumRollupPeriod(rollup, range, filterSiteId === "all" ? undefined : filterSiteId);

  let activeSites = 0;
  let payingSites = 0;

  for (const site of sites) {
    if (filterSiteId && filterSiteId !== "all" && site.id !== filterSiteId) continue;
    const r = rollup.sites[site.id];
    if (!r) continue;
    const p = sumSitePeriod(r, range);
    if (p.pv > 0) activeSites += 1;
    if (p.purchase > 0) payingSites += 1;
  }

  const topSites = sites
    .filter((s) => !filterSiteId || filterSiteId === "all" || s.id === filterSiteId)
    .map((site) => {
      const r = rollup.sites[site.id];
      const p = r ? sumSitePeriod(r, range) : { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
      return {
        id: site.id,
        name: site.name,
        url: site.url,
        pv: p.pv,
        uv: p.uv,
        purchase: p.purchase,
      };
    })
    .sort((a, b) => b.pv - a.pv)
    .slice(0, 8);

  return {
    siteCount: filterSiteId && filterSiteId !== "all" ? 1 : sites.length,
    activeSites,
    payingSites,
    period,
    funnel: buildFunnel(period),
    estimatedRevenueUsd: period.purchase * SUBSCRIPTION_PRICE_USD,
    seo: computeSeo(rollup),
    stripe,
    topSites,
    dateRange: range,
  };
}
