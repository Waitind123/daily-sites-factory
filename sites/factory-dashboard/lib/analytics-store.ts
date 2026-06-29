import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

export type EventType = "pageview" | "trial" | "checkout" | "purchase";

export interface AnalyticsEvent {
  siteId: string;
  type: EventType;
  path?: string;
  visitorId?: string;
  referrer?: string;
  ts?: string;
}

export interface DailyMetrics {
  pv: number;
  uv: Set<string> | string[];
  trial: number;
  checkout: number;
  purchase: number;
}

export interface SiteSeoMetrics {
  lastChecked: string | null;
  sitemapOk: boolean;
  robotsOk: boolean;
  title: string;
  titleLen: number;
  description: string;
  descriptionLen: number;
  hasOg: boolean;
  hasJsonLd: boolean;
  guideCount: number;
  score: number;
}

export interface SiteRollup {
  url: string;
  name?: string;
  daily: Record<
    string,
    { pv: number; uv: number; trial: number; checkout: number; purchase: number; visitors?: string[] }
  >;
  seo: SiteSeoMetrics;
  totals: { pv: number; uv: number; trial: number; checkout: number; purchase: number };
}

export interface RollupFile {
  version: number;
  updatedAt: string | null;
  sites: Record<string, SiteRollup>;
}

const REPO = process.env.GITHUB_REPO || "Waitind123/daily-sites-factory";
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const ROLLUP_PATH = "analytics/rollup.json";

function repoRoot() {
  return join(process.cwd(), "..", "..");
}

function localRollupPath() {
  const bundled = join(process.cwd(), "data", "rollup.json");
  if (existsSync(bundled)) return bundled;
  return join(repoRoot(), ROLLUP_PATH);
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function emptySeo(): SiteSeoMetrics {
  return {
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
  };
}

function emptySite(url = ""): SiteRollup {
  return {
    url,
    daily: {},
    seo: emptySeo(),
    totals: { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 },
  };
}

export function emptyRollup(): RollupFile {
  return { version: 1, updatedAt: null, sites: {} };
}

async function githubGet(path: string): Promise<{ sha: string; content: string } | null> {
  if (!TOKEN) return null;
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "factory-dashboard",
    },
    signal: AbortSignal.timeout(15000),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub GET ${path}: ${res.status}`);
  const data = await res.json();
  return { sha: data.sha, content: Buffer.from(data.content, "base64").toString("utf8") };
}

async function githubPut(path: string, content: string, sha?: string) {
  if (!TOKEN) throw new Error("GITHUB_TOKEN not configured");
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "factory-dashboard",
    },
    body: JSON.stringify({
      message: `analytics: update ${path}`,
      content: Buffer.from(content, "utf8").toString("base64"),
      sha,
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`GitHub PUT: ${res.status}`);
}

function readLocal(): RollupFile {
  const path = localRollupPath();
  if (!existsSync(path)) return emptyRollup();
  return JSON.parse(readFileSync(path, "utf8")) as RollupFile;
}

function writeLocal(data: RollupFile) {
  const path = localRollupPath();
  const dir = join(repoRoot(), "analytics");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}

export async function loadRollup(): Promise<RollupFile> {
  try {
    const remote = await githubGet(ROLLUP_PATH);
    if (remote) return JSON.parse(remote.content) as RollupFile;
  } catch {
    // local fallback
  }
  return readLocal();
}

export async function saveRollup(data: RollupFile) {
  data.updatedAt = new Date().toISOString();
  const content = JSON.stringify(data, null, 2) + "\n";
  try {
    const remote = await githubGet(ROLLUP_PATH);
    await githubPut(ROLLUP_PATH, content, remote?.sha);
  } catch {
    writeLocal(data);
  }
}

function recomputeTotals(site: SiteRollup) {
  const totals = { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  for (const day of Object.values(site.daily)) {
    totals.pv += day.pv;
    totals.uv += day.uv;
    totals.trial += day.trial;
    totals.checkout += day.checkout;
    totals.purchase += day.purchase;
  }
  site.totals = totals;
}

export async function recordEvent(event: AnalyticsEvent) {
  const rollup = await loadRollup();
  const site = rollup.sites[event.siteId] || emptySite();
  const dayKey = todayKey();
  const day = site.daily[dayKey] || { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0, visitors: [] as string[] };

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
  await saveRollup(rollup);
}

export async function updateSiteSeo(siteId: string, url: string, seo: SiteSeoMetrics, name?: string) {
  const rollup = await loadRollup();
  const site = rollup.sites[siteId] || emptySite(url);
  site.url = url;
  if (name) site.name = name;
  site.seo = seo;
  rollup.sites[siteId] = site;
  recomputeTotals(site);
  await saveRollup(rollup);
}

export function conversionRate(site: SiteRollup) {
  const { pv, purchase, checkout } = site.totals;
  if (!pv) return 0;
  return { visitToCheckout: checkout / pv, visitToPurchase: purchase / pv };
}
