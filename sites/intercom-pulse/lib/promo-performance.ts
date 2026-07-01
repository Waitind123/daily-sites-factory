import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { RollupFile } from "@/lib/analytics-store";
import type { DateRange } from "@/lib/date-range";
import { isDayInRange } from "@/lib/date-range";

export interface PromoPostRecord {
  at: string;
  subreddit?: string;
  title?: string;
  hash?: string;
  url?: string;
  joinUrl?: string;
  campaign?: string;
  platform: string;
}

export interface PromoChannelStats {
  source: string;
  label: string;
  visits: number;
}

export interface PromoPerformancePayload {
  posts: PromoPostRecord[];
  totalPosts: number;
  channels: PromoChannelStats[];
  dateRange: DateRange;
  lastPostedAt: string | null;
}

const CHANNEL_LABELS: Record<string, string> = {
  reddit: "Reddit",
  hn: "Hacker News",
  twitter: "Twitter/X",
  facebook: "Facebook",
  linkedin: "LinkedIn",
};

function repoRoot() {
  return join(process.cwd(), "..", "..");
}

export function loadSocialPromoState() {
  const paths = [
    join(process.cwd(), "data", "social-promo-state.json"),
    join(repoRoot(), "analytics", "social-promo-state.json"),
  ];
  for (const path of paths) {
    if (!existsSync(path)) continue;
    return JSON.parse(readFileSync(path, "utf8")) as {
      history?: PromoPostRecord[];
      lastPostedAt?: string | null;
      posts?: number;
    };
  }
  return { history: [], lastPostedAt: null, posts: 0 };
}

function collectUtmFromRollup(rollup: RollupFile, range: DateRange) {
  const merged: Record<string, number> = {};
  for (const site of Object.values(rollup.sites)) {
    for (const [day, metrics] of Object.entries(site.daily)) {
      if (!isDayInRange(day, range)) continue;
      const sources = metrics.audience?.utmSources;
      if (!sources) continue;
      for (const [key, count] of Object.entries(sources)) {
        if (!key || key === "unknown") continue;
        merged[key] = (merged[key] || 0) + count;
      }
    }
  }
  return merged;
}

export function buildPromoPerformance(rollup: RollupFile, range: DateRange): PromoPerformancePayload {
  const state = loadSocialPromoState();
  const utm = collectUtmFromRollup(rollup, range);

  const channels: PromoChannelStats[] = Object.entries(utm)
    .map(([source, visits]) => ({
      source,
      label: CHANNEL_LABELS[source] || source,
      visits,
    }))
    .sort((a, b) => b.visits - a.visits);

  const posts: PromoPostRecord[] = (state.history || [])
    .filter((h) => {
      if (!h.at) return false;
      const day = h.at.slice(0, 10);
      return isDayInRange(day, range);
    })
    .map((h) => ({
      ...h,
      platform: h.subreddit ? `Reddit r/${h.subreddit}` : "Reddit",
    }));

  return {
    posts,
    totalPosts: state.posts || posts.length,
    channels,
    dateRange: range,
    lastPostedAt: state.lastPostedAt || null,
  };
}
