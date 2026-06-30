export interface DateRange {
  from: string;
  to: string;
}

export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function addDays(iso: string, days: number) {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export function firstDayOfMonth(iso: string) {
  return `${iso.slice(0, 7)}-01`;
}

export function lastDayOfMonth(iso: string) {
  const d = new Date(`${iso.slice(0, 7)}-01T12:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() + 1);
  d.setUTCDate(0);
  return d.toISOString().slice(0, 10);
}

export function parseDateRange(from?: string | null, to?: string | null): DateRange {
  const today = todayKey();
  const f = from && /^\d{4}-\d{2}-\d{2}$/.test(from) ? from : today;
  const t = to && /^\d{4}-\d{2}-\d{2}$/.test(to) ? to : today;
  return f <= t ? { from: f, to: t } : { from: t, to: f };
}

export function isDayInRange(day: string, range: DateRange) {
  return day >= range.from && day <= range.to;
}

export type DatePreset =
  | "today"
  | "yesterday"
  | "last7"
  | "last30"
  | "thisMonth"
  | "lastMonth"
  | "all"
  | "custom";

export function rangeForPreset(preset: DatePreset, earliestDay?: string): DateRange {
  const today = todayKey();
  switch (preset) {
    case "today":
      return { from: today, to: today };
    case "yesterday": {
      const y = addDays(today, -1);
      return { from: y, to: y };
    }
    case "last7":
      return { from: addDays(today, -6), to: today };
    case "last30":
      return { from: addDays(today, -29), to: today };
    case "thisMonth":
      return { from: firstDayOfMonth(today), to: today };
    case "lastMonth": {
      const prev = addDays(firstDayOfMonth(today), -1);
      return { from: firstDayOfMonth(prev), to: lastDayOfMonth(prev) };
    }
    case "all":
      return { from: earliestDay || "2020-01-01", to: today };
    default:
      return { from: today, to: today };
  }
}

export function formatRangeLabel(range: DateRange) {
  if (range.from === range.to) return range.from;
  return `${range.from} 至 to ${range.to}`;
}

export function earliestDayInRollup(sites: Record<string, { daily: Record<string, unknown> }>) {
  let min = todayKey();
  for (const site of Object.values(sites)) {
    for (const day of Object.keys(site.daily || {})) {
      if (day < min) min = day;
    }
  }
  return min;
}
