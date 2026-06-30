import type { RollupFile, SiteRollup } from "@/lib/analytics-store";

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
  pvToTrial: string;
  trialToCheckout: string;
  checkoutToPurchase: string;
  pvToCheckout: string;
  pvToPurchase: string;
  uvToPurchase: string;
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
  liveCount: number;
  demoCount: number;
  failCount: number;
  updatedAt: string | null;
}

export interface TopSiteRow {
  id: string;
  name: string;
  url: string;
  pv: number;
  uv: number;
  purchase: number;
  todayPv: number;
}

export interface DashboardSummary {
  siteCount: number;
  activeSites: number;
  payingSites: number;
  todayActiveSites: number;
  totals: MetricTotals;
  today: MetricTotals;
  funnel: FunnelRates;
  estimatedRevenueUsd: number;
  seo: SeoHealth;
  stripe: StripeHealth;
  topSites: TopSiteRow[];
}

function pct(n: number, d: number) {
  if (!d) return "0%";
  return `${((n / d) * 100).toFixed(1)}%`;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function sumToday(rollup: RollupFile): MetricTotals {
  const key = todayKey();
  const totals: MetricTotals = { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  for (const site of Object.values(rollup.sites)) {
    const day = site.daily[key];
    if (!day) continue;
    totals.pv += day.pv || 0;
    totals.uv += day.uv || 0;
    totals.trial += day.trial || 0;
    totals.checkout += day.checkout || 0;
    totals.purchase += day.purchase || 0;
  }
  return totals;
}

function sumTotals(rollup: RollupFile): MetricTotals {
  const totals: MetricTotals = { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  for (const site of Object.values(rollup.sites)) {
    totals.pv += site.totals.pv;
    totals.uv += site.totals.uv;
    totals.trial += site.totals.trial;
    totals.checkout += site.totals.checkout;
    totals.purchase += site.totals.purchase;
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

export function getTodayMetrics(site?: SiteRollup): MetricTotals {
  if (!site) return { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  const day = site.daily[todayKey()];
  if (!day) return { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  return {
    pv: day.pv || 0,
    uv: day.uv || 0,
    trial: day.trial || 0,
    checkout: day.checkout || 0,
    purchase: day.purchase || 0,
  };
}

export function buildFunnel(totals: MetricTotals): FunnelRates {
  return {
    pvToTrial: pct(totals.trial, totals.pv),
    trialToCheckout: pct(totals.checkout, totals.trial),
    checkoutToPurchase: pct(totals.purchase, totals.checkout),
    pvToCheckout: pct(totals.checkout, totals.pv),
    pvToPurchase: pct(totals.purchase, totals.pv),
    uvToPurchase: pct(totals.purchase, totals.uv),
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
  stripe: StripeHealth
): DashboardSummary {
  const totals = sumTotals(rollup);
  const today = sumToday(rollup);
  const key = todayKey();

  let activeSites = 0;
  let payingSites = 0;
  let todayActiveSites = 0;

  for (const site of Object.values(rollup.sites)) {
    if (site.totals.pv > 0) activeSites += 1;
    if (site.totals.purchase > 0) payingSites += 1;
    if ((site.daily[key]?.pv || 0) > 0) todayActiveSites += 1;
  }

  const topSites = sites
    .map((site) => {
      const r = rollup.sites[site.id];
      const t = r?.totals || { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
      const td = getTodayMetrics(r);
      return {
        id: site.id,
        name: site.name,
        url: site.url,
        pv: t.pv,
        uv: t.uv,
        purchase: t.purchase,
        todayPv: td.pv,
      };
    })
    .sort((a, b) => b.pv - a.pv || b.todayPv - a.todayPv)
    .slice(0, 8);

  return {
    siteCount: sites.length,
    activeSites,
    payingSites,
    todayActiveSites,
    totals,
    today,
    funnel: buildFunnel(totals),
    estimatedRevenueUsd: totals.purchase * SUBSCRIPTION_PRICE_USD,
    seo: computeSeo(rollup),
    stripe,
    topSites,
  };
}
