import { isTestVisitor } from "./analytics-real-users.mjs";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const rollupPath = join(root, "analytics", "rollup.json");

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function emptySite(url = "") {
  return {
    url,
    daily: {},
    seo: {
      lastChecked: null,
      sitemapOk: false,
      robotsOk: false,
      title: "",
      titleLen: 0,
      description: "",
      descriptionLen: 0,
      hasOg: false,
      hasJsonLd: false,
      guideCount: 0,
      score: 0,
    },
    totals: { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 },
  };
}

export function loadRollup() {
  if (!existsSync(rollupPath)) {
    return { version: 1, updatedAt: null, sites: {} };
  }
  return JSON.parse(readFileSync(rollupPath, "utf8"));
}

export function saveRollup(data) {
  const dir = join(root, "analytics");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  data.updatedAt = new Date().toISOString();
  writeFileSync(rollupPath, JSON.stringify(data, null, 2) + "\n");
}

function recomputeTotals(site) {
  const totals = { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  for (const day of Object.values(site.daily || {})) {
    totals.pv += day.pv || 0;
    totals.uv += day.uv || 0;
    totals.trial += day.trial || 0;
    totals.checkout += day.checkout || 0;
    totals.purchase += day.purchase || 0;
  }
  site.totals = totals;
}

/**
 * @param {{ siteId: string, type: 'pageview'|'trial'|'checkout'|'purchase', visitorId?: string, url?: string }} event
 */
export function recordLocalEvent(event) {
  if (event.type === "pageview" && isTestVisitor(event.visitorId)) {
    return;
  }

  const rollup = loadRollup();
  const site = rollup.sites[event.siteId] || emptySite(event.url || "");
  if (event.url) site.url = event.url;

  const dayKey = todayKey();
  const day = site.daily[dayKey] || {
    pv: 0,
    uv: 0,
    trial: 0,
    checkout: 0,
    purchase: 0,
    visitors: [],
  };

  switch (event.type) {
    case "pageview":
      day.pv += 1;
      if (event.visitorId) {
        const visitors = day.visitors || [];
        if (!visitors.includes(event.visitorId)) {
          visitors.push(event.visitorId);
          day.uv = visitors.length;
          day.visitors = visitors.slice(-5000);
        }
        const hits = day.visitorHits || {};
        hits[event.visitorId] = (hits[event.visitorId] || 0) + 1;
        day.visitorHits = hits;
      }
      break;
    case "trial":
      day.trial += 1;
      break;
    case "checkout":
      day.checkout += 1;
      break;
    case "purchase":
      day.purchase += 1;
      break;
  }

  site.daily[dayKey] = day;
  rollup.sites[event.siteId] = site;
  recomputeTotals(site);
  saveRollup(rollup);
}
