import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

import {
  applyAudienceEvent,
  emptyAudience,
  type AudienceDaily,
} from "@/lib/visitor-audience";

export type EventType = "pageview" | "trial" | "checkout" | "purchase";

export interface AnalyticsEvent {
  siteId: string;
  type: EventType;
  path?: string;
  visitorId?: string;
  referrer?: string;
  locale?: string;
  device?: string;
  timezone?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  ts?: string;
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
  knownVisitors?: string[];
  daily: Record<
    string,
    {
      pv: number;
      uv: number;
      trial: number;
      checkout: number;
      purchase: number;
      visitors?: string[];
      audience?: AudienceDaily;
    }
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
const TOKEN =
  process.env.ANALYTICS_GITHUB_PAT ||
  process.env.GITHUB_TOKEN ||
  process.env.GH_TOKEN;
const ROLLUP_PATH = "analytics/rollup.json";

function repoRoot() {
  return join(process.cwd(), "..", "..");
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
      "User-Agent": "intercom-pulse-analytics",
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
      "User-Agent": "intercom-pulse-analytics",
    },
    body: JSON.stringify({
      message: `analytics: ${path} via intercom-pulse`,
      content: Buffer.from(content, "utf8").toString("base64"),
      sha,
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`GitHub PUT: ${res.status}`);
}

function readLocal(): RollupFile {
  const path = join(repoRoot(), ROLLUP_PATH);
  if (!existsSync(path)) return emptyRollup();
  return JSON.parse(readFileSync(path, "utf8")) as RollupFile;
}

function writeLocal(data: RollupFile) {
  const path = join(repoRoot(), ROLLUP_PATH);
  const dir = join(repoRoot(), "analytics");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}

async function fetchRollupFromRaw(): Promise<RollupFile | null> {
  try {
    let path = `main/analytics/rollup.json`;
    const meta = await fetch(`https://api.github.com/repos/${REPO}/commits/main`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "intercom-pulse-analytics" },
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (meta.ok) {
      const commit = (await meta.json()) as { sha?: string };
      if (commit.sha) path = `${commit.sha}/analytics/rollup.json`;
    }
    const res = await fetch(
      `https://raw.githubusercontent.com/${REPO}/${path}?t=${Date.now()}`,
      { signal: AbortSignal.timeout(10000), cache: "no-store" }
    );
    if (!res.ok) return null;
    return (await res.json()) as RollupFile;
  } catch {
    return null;
  }
}

export async function loadRollup(): Promise<RollupFile> {
  try {
    const remote = await githubGet(ROLLUP_PATH);
    if (remote) return JSON.parse(remote.content) as RollupFile;
  } catch {
    /* github api fallback */
  }
  try {
    const raw = await fetchRollupFromRaw();
    if (raw) return raw;
  } catch {
    /* raw fallback */
  }
  return readLocal();
}

async function saveRollup(data: RollupFile) {
  data.updatedAt = new Date().toISOString();
  const content = JSON.stringify(data, null, 2) + "\n";
  if (!TOKEN) {
    throw new Error("GITHUB_TOKEN not configured on Vercel");
  }
  const remote = await githubGet(ROLLUP_PATH);
  await githubPut(ROLLUP_PATH, content, remote?.sha);
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
  const dayKey = new Date().toISOString().slice(0, 10);
  const day = site.daily[dayKey] || {
    pv: 0,
    uv: 0,
    trial: 0,
    checkout: 0,
    purchase: 0,
    visitors: [] as string[],
    audience: emptyAudience(),
  };
  if (!day.audience) day.audience = emptyAudience();

  const known = site.knownVisitors || [];
  const isReturning = Boolean(event.visitorId && known.includes(event.visitorId));

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
        if (!known.includes(event.visitorId)) {
          site.knownVisitors = [...known, event.visitorId].slice(-20000);
        }
      }
      applyAudienceEvent(day.audience, event, isReturning);
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
