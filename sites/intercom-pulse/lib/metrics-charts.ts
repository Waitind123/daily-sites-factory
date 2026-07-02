import type { RollupFile } from "@/lib/analytics-store";
import type { DateRange } from "@/lib/date-range";
import { addDays, isDayInRange } from "@/lib/date-range";
import { sumRollupPeriod, type MetricTotals } from "@/lib/dashboard-metrics";

export type MetricKey = keyof MetricTotals;

export const METRIC_KEYS: MetricKey[] = ["pv", "uv", "trial", "checkout", "purchase"];

export interface DailyMetricPoint {
  day: string;
  pv: number;
  uv: number;
  trial: number;
  checkout: number;
  purchase: number;
}

export interface ComparisonDelta {
  current: number;
  previous: number;
  change: number;
  changePct: string;
  available: boolean;
}

export interface MetricsChartsPayload {
  daily: DailyMetricPoint[];
  totals: MetricTotals;
  comparisons: {
    mom: Record<MetricKey, ComparisonDelta>;
    yoy: Record<MetricKey, ComparisonDelta>;
  };
  ranges: {
    current: DateRange;
    mom: DateRange;
    yoy: DateRange | null;
  };
}

function rangeDayCount(range: DateRange) {
  const start = new Date(`${range.from}T12:00:00Z`).getTime();
  const end = new Date(`${range.to}T12:00:00Z`).getTime();
  return Math.max(1, Math.round((end - start) / 86400000) + 1);
}

export function previousPeriodRange(range: DateRange): DateRange {
  const days = rangeDayCount(range);
  const prevTo = addDays(range.from, -1);
  const prevFrom = addDays(prevTo, -(days - 1));
  return { from: prevFrom, to: prevTo };
}

export function yearAgoPeriodRange(range: DateRange): DateRange | null {
  const shift = (iso: string) => {
    const d = new Date(`${iso}T12:00:00Z`);
    d.setUTCFullYear(d.getUTCFullYear() - 1);
    return d.toISOString().slice(0, 10);
  };
  return { from: shift(range.from), to: shift(range.to) };
}

function rollupHasDataInRange(rollup: RollupFile, range: DateRange, siteId?: string) {
  for (const [id, site] of Object.entries(rollup.sites)) {
    if (siteId && siteId !== "all" && id !== siteId) continue;
    for (const day of Object.keys(site.daily || {})) {
      if (isDayInRange(day, range)) return true;
    }
  }
  return false;
}

function comparisonDelta(current: number, previous: number, hasData: boolean): ComparisonDelta {
  if (!hasData) {
    return { current, previous: 0, change: 0, changePct: "—", available: false };
  }
  const change = current - previous;
  let changePct = "0%";
  if (previous === 0) {
    changePct = current === 0 ? "0%" : "—";
  } else {
    const pct = (change / previous) * 100;
    changePct = `${pct >= 0 ? "+" : ""}${pct.toFixed(1)}%`;
  }
  return { current, previous, change, changePct, available: true };
}

export function buildDailySeries(
  rollup: RollupFile,
  range: DateRange,
  siteId?: string
): DailyMetricPoint[] {
  const filter = siteId && siteId !== "all" ? siteId : undefined;
  const points: DailyMetricPoint[] = [];
  for (let day = range.from; day <= range.to; day = addDays(day, 1)) {
    const totals = sumRollupPeriod(rollup, { from: day, to: day }, filter);
    points.push({ day, ...totals });
  }
  return points;
}

export function buildMetricsCharts(
  rollup: RollupFile,
  range: DateRange,
  siteId?: string
): MetricsChartsPayload {
  const filter = siteId && siteId !== "all" ? siteId : undefined;
  const totals = sumRollupPeriod(rollup, range, filter);
  const momRange = previousPeriodRange(range);
  const yoyRange = yearAgoPeriodRange(range);
  const momTotals = sumRollupPeriod(rollup, momRange, filter);
  const yoyTotals = yoyRange ? sumRollupPeriod(rollup, yoyRange, filter) : totals;
  const momHasData = rollupHasDataInRange(rollup, momRange, filter);
  const yoyHasData = yoyRange ? rollupHasDataInRange(rollup, yoyRange, filter) : false;

  const mom = {} as Record<MetricKey, ComparisonDelta>;
  const yoy = {} as Record<MetricKey, ComparisonDelta>;
  for (const key of METRIC_KEYS) {
    mom[key] = comparisonDelta(totals[key], momTotals[key], momHasData);
    yoy[key] = comparisonDelta(totals[key], yoyTotals[key], yoyHasData);
  }

  return {
    daily: buildDailySeries(rollup, range, filter),
    totals,
    comparisons: { mom, yoy },
    ranges: { current: range, mom: momRange, yoy: yoyRange },
  };
}
