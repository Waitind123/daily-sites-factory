import type { RollupFile, VisitorRegistryEntry } from "@/lib/analytics-store";
import type { SiteEntry } from "@/lib/dashboard-metrics";
import type { DateRange } from "@/lib/date-range";
import { labelDevice, labelLocale, labelReferrer } from "@/lib/dashboard-labels";

export interface VisitorTableRow extends VisitorRegistryEntry {
  siteName: string;
  siteUrl: string;
  referrerLabel: string;
  deviceLabel: string;
  localeLabel: string;
}

export interface VisitorTablePayload {
  rows: VisitorTableRow[];
  total: number;
  dateRange: DateRange;
  siteId: string;
}

function inRange(iso: string, range: DateRange) {
  const day = iso.slice(0, 10);
  return day >= range.from && day <= range.to;
}

export function buildVisitorTable(
  sites: SiteEntry[],
  rollup: RollupFile,
  range: DateRange,
  siteId = "all"
): VisitorTablePayload {
  const siteMap = new Map(sites.map((s) => [s.id, s]));
  const registry = rollup.visitorRegistry || [];
  const filtered = registry.filter((row) => {
    if (!inRange(row.lastSeen, range)) return false;
    if (siteId !== "all" && row.siteId !== siteId) return false;
    return true;
  });

  const rows: VisitorTableRow[] = filtered.map((row) => {
    const site = siteMap.get(row.siteId);
    const referrerKey = row.referrer?.trim() ? classifyReferrer(row.referrer) : "直接访问";
    return {
      ...row,
      siteName: site?.name || row.siteId,
      siteUrl: site?.url || "",
      referrerLabel: labelReferrer(referrerKey),
      deviceLabel: labelDevice(row.device || "unknown"),
      localeLabel: labelLocale(row.locale || "unknown"),
    };
  });

  return { rows, total: rows.length, dateRange: range, siteId };
}

function classifyReferrer(referrer: string) {
  const lower = referrer.toLowerCase();
  if (!lower || lower === "direct") return "直接访问";
  if (/google|bing|baidu|duckduckgo|yahoo|sogou|so\.com/.test(lower)) return "搜索引擎";
  if (/twitter|x\.com|facebook|instagram|linkedin|reddit|weibo|zhihu|douyin|tiktok/.test(lower))
    return "社交媒体";
  if (/github|stackoverflow|dev\.to|medium|v2ex|juejin/.test(lower)) return "开发者社区";
  if (/vercel\.app/.test(lower)) return "站内互跳";
  return "其他来源";
}
