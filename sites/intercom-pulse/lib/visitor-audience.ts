export interface AudienceDaily {
  referrers: Record<string, number>;
  paths: Record<string, number>;
  devices: Record<string, number>;
  locales: Record<string, number>;
  timezones: Record<string, number>;
  utmSources: Record<string, number>;
  hours: Record<string, number>;
  visitorTypes: { new: number; returning: number };
}

export function emptyAudience(): AudienceDaily {
  return {
    referrers: {},
    paths: {},
    devices: {},
    locales: {},
    timezones: {},
    utmSources: {},
    hours: {},
    visitorTypes: { new: 0, returning: 0 },
  };
}

export function classifyReferrer(referrer?: string): string {
  if (!referrer || referrer === "null" || referrer === "undefined") return "直接访问";
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "").toLowerCase();
    if (!host) return "直接访问";
    if (/google|bing|baidu|duckduckgo|yahoo|yandex|sogou/.test(host)) return "搜索引擎";
    if (/twitter|x\.com|facebook|instagram|linkedin|reddit|t\.co|weibo|zhihu|douyin|tiktok/.test(host)) {
      return "社交媒体";
    }
    if (/vercel\.app|daily-sites|intercom-pulse/.test(host)) return "站内互跳";
    if (/github|producthunt|indiehackers|hackernews|ycombinator/.test(host)) return "开发者社区";
    return host.length > 28 ? `${host.slice(0, 26)}…` : host;
  } catch {
    return "其他来源";
  }
}

export function classifyDevice(device?: string): string {
  const d = (device || "unknown").toLowerCase();
  if (d === "mobile" || d === "tablet" || d === "desktop") return d;
  return "unknown";
}

export function bumpMap(map: Record<string, number>, key: string, maxKeys = 30) {
  const label = (key || "unknown").slice(0, 80);
  map[label] = (map[label] || 0) + 1;
  if (Object.keys(map).length <= maxKeys) return;
  const trimmed = Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeys);
  for (const k of Object.keys(map)) delete map[k];
  for (const [k, v] of trimmed) map[k] = v;
}

export interface AudienceEventInput {
  path?: string;
  referrer?: string;
  visitorId?: string;
  locale?: string;
  device?: string;
  timezone?: string;
  utmSource?: string;
  utmMedium?: string;
  ts?: string;
}

export function applyAudienceEvent(
  audience: AudienceDaily,
  event: AudienceEventInput,
  isReturning: boolean
) {
  bumpMap(audience.referrers, classifyReferrer(event.referrer));
  bumpMap(audience.paths, event.path || "/");
  bumpMap(audience.devices, classifyDevice(event.device));
  bumpMap(audience.locales, (event.locale || "unknown").slice(0, 12));
  bumpMap(audience.timezones, (event.timezone || "unknown").slice(0, 40));
  if (event.utmSource) bumpMap(audience.utmSources, event.utmSource.slice(0, 40));

  const date = event.ts ? new Date(event.ts) : new Date();
  const hour = Number(
    date.toLocaleString("en-US", { hour: "numeric", hour12: false, timeZone: "Asia/Shanghai" })
  );
  bumpMap(audience.hours, String(hour), 24);

  if (isReturning) audience.visitorTypes.returning += 1;
  else audience.visitorTypes.new += 1;
}

export interface BreakdownRow {
  label: string;
  value: number;
  pct: string;
}

export interface VisitorProfileView {
  newVisitors: number;
  returningVisitors: number;
  referrers: BreakdownRow[];
  devices: BreakdownRow[];
  locales: BreakdownRow[];
  timezones: BreakdownRow[];
  utmSources: BreakdownRow[];
  hours: BreakdownRow[];
  landingPages: BreakdownRow[];
  intentSegments: BreakdownRow[];
}

function rowsFromMap(map: Record<string, number>, limit = 8): BreakdownRow[] {
  const entries = Object.entries(map).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, v]) => sum + v, 0) || 1;
  return entries.slice(0, limit).map(([label, value]) => ({
    label,
    value,
    pct: `${((value / total) * 100).toFixed(1)}%`,
  }));
}

export function mergeAudience(target: AudienceDaily, source: AudienceDaily) {
  for (const [k, v] of Object.entries(source.referrers)) {
    target.referrers[k] = (target.referrers[k] || 0) + v;
  }
  for (const [k, v] of Object.entries(source.paths)) target.paths[k] = (target.paths[k] || 0) + v;
  for (const [k, v] of Object.entries(source.devices)) target.devices[k] = (target.devices[k] || 0) + v;
  for (const [k, v] of Object.entries(source.locales)) target.locales[k] = (target.locales[k] || 0) + v;
  for (const [k, v] of Object.entries(source.timezones)) target.timezones[k] = (target.timezones[k] || 0) + v;
  for (const [k, v] of Object.entries(source.utmSources)) target.utmSources[k] = (target.utmSources[k] || 0) + v;
  for (const [k, v] of Object.entries(source.hours)) target.hours[k] = (target.hours[k] || 0) + v;
  target.visitorTypes.new += source.visitorTypes.new;
  target.visitorTypes.returning += source.visitorTypes.returning;
}

export function audienceToProfile(
  audience: AudienceDaily,
  totals: { pv: number; trial: number; checkout: number; purchase: number }
): VisitorProfileView {
  const intentMap = {
    仅浏览: Math.max(0, totals.pv - totals.trial),
    试用意向: Math.max(0, totals.trial - totals.checkout),
    结账意向: Math.max(0, totals.checkout - totals.purchase),
    已付费: totals.purchase,
  };

  return {
    newVisitors: audience.visitorTypes.new,
    returningVisitors: audience.visitorTypes.returning,
    referrers: rowsFromMap(audience.referrers),
    devices: rowsFromMap(audience.devices, 4),
    locales: rowsFromMap(audience.locales, 6),
    timezones: rowsFromMap(audience.timezones, 6),
    utmSources: rowsFromMap(audience.utmSources, 6),
    hours: rowsFromMap(
      Object.fromEntries(
        Object.entries(audience.hours).sort(([a], [b]) => a.localeCompare(b))
      ),
      12
    ),
    landingPages: rowsFromMap(audience.paths, 8),
    intentSegments: rowsFromMap(intentMap, 4),
  };
}
