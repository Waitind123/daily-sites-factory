import type { RollupFile } from "@/lib/analytics-store";
import type { RevenueGoalView, StripeHealth } from "@/lib/dashboard-metrics";
import { SUBSCRIPTION_PRICE_USD, sumSitePeriod, type SiteEntry } from "@/lib/dashboard-metrics";
import type { DateRange } from "@/lib/date-range";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

export interface RevenueSprintPlan {
  gapUsd: number;
  purchasesNeeded: number;
  liveCheckoutSites: Array<{ id: string; name: string; url: string; joinUrl: string }>;
  promoteNow: Array<{ id: string; name: string; url: string; joinUrl: string; pv: number; live: boolean }>;
  blockers: string[];
  actions: string[];
}

function loadLiveSiteIds(): string[] {
  const paths = [
    join(process.cwd(), "data", "stripe-status.json"),
    join(process.cwd(), "..", "..", "analytics", "stripe-status.json"),
  ];
  for (const path of paths) {
    if (!existsSync(path)) continue;
    const data = JSON.parse(readFileSync(path, "utf8")) as { liveSiteIds?: string[] };
    if (data.liveSiteIds?.length) return data.liveSiteIds;
  }
  return [];
}

export function buildRevenueSprint(
  goal: RevenueGoalView,
  sites: SiteEntry[],
  rollup: RollupFile,
  stripe: StripeHealth,
  range: DateRange
): RevenueSprintPlan {
  const gapUsd = Math.max(0, goal.targetUsd - goal.estimatedRevenueUsd);
  const purchasesNeeded = gapUsd <= 0 ? 0 : Math.ceil(gapUsd / SUBSCRIPTION_PRICE_USD);
  const liveIds = new Set(loadLiveSiteIds());

  const siteById = new Map(sites.map((s) => [s.id, s]));
  const liveCheckoutSites = [...liveIds]
    .map((id) => siteById.get(id))
    .filter(Boolean)
    .map((s) => ({
      id: s!.id,
      name: s!.name,
      url: s!.url,
      joinUrl: `${s!.url.replace(/\/$/, "")}/join`,
    }));

  const promoteNow = sites
    .map((site) => {
      const r = rollup.sites[site.id];
      const pv = r ? sumSitePeriod(r, range).pv : 0;
      return {
        id: site.id,
        name: site.name,
        url: site.url,
        joinUrl: `${site.url.replace(/\/$/, "")}/join`,
        pv,
        live: liveIds.has(site.id),
      };
    })
    .filter((s) => s.pv > 0 || s.live)
    .sort((a, b) => {
      if (a.live !== b.live) return a.live ? -1 : 1;
      return b.pv - a.pv;
    })
    .slice(0, 6);

  const blockers: string[] = [];
  const actions: string[] = [];

  if (purchasesNeeded > 0) {
    actions.push(
      `Need ${purchasesNeeded} paid subscriber(s) @ $${SUBSCRIPTION_PRICE_USD} (≈$${(purchasesNeeded * SUBSCRIPTION_PRICE_USD).toFixed(1)}) before ${goal.deadline}`
    );
  }

  if (!stripe.configured && liveCheckoutSites.length === 0) {
    blockers.push("GitHub Secrets 未配置 — 需要 POLAR_ACCESS_TOKEN + POLAR_PRODUCT_ID（或 STRIPE_SECRET_KEY）");
    actions.push("Add Polar secrets per docs/POLAR-PER-SITE.md, then redeploy priority sites");
  } else if (!stripe.polarPerSite && liveCheckoutSites.length > 0) {
    blockers.push("Polar 静态链接模式 — 付完统一跳 ai-headshots，其他站回调未独立");
    actions.push("Add POLAR_ACCESS_TOKEN + POLAR_PRODUCT_ID for per-site success URLs");
  } else if (liveCheckoutSites.length < 3) {
    blockers.push(`Only ${liveCheckoutSites.length} site(s) can collect real payments`);
    actions.push("Redeploy top-traffic sites (intercom-pulse, feature-vote, ai-headshots)");
  }

  if (liveCheckoutSites.length > 0) {
    actions.push(`Promote live checkout: ${liveCheckoutSites.map((s) => s.name).join(", ")}`);
  }

  const topDemo = promoteNow.filter((s) => !s.live && s.pv > 0).slice(0, 3);
  if (topDemo.length) {
    blockers.push(`Top traffic in demo mode: ${topDemo.map((s) => s.name).join(", ")}`);
  }

  if (goal.daysLeft <= 12 && purchasesNeeded > 0) {
    actions.push("Post ai-headshots on Reddit r/SideProject or r/linkedin — Polar checkout live");
    actions.push("Share /join link with ?utm_source=twitter for attribution");
  }

  return {
    gapUsd,
    purchasesNeeded,
    liveCheckoutSites,
    promoteNow,
    blockers,
    actions,
  };
}
