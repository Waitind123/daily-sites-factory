import type { RollupFile, SiteRollup } from "@/lib/analytics-store";
import type { SiteEntry } from "@/lib/dashboard-metrics";
import { sumSitePeriod } from "@/lib/dashboard-metrics";
import type { DateRange } from "@/lib/date-range";
import { isDayInRange } from "@/lib/date-range";
import { labelDevice, labelHour, labelLocale, labelReferrer, DASHBOARD_COPY, INTENT_SEGMENT_LABELS } from "@/lib/dashboard-labels";
import {
  audienceToProfile,
  emptyAudience,
  mergeAudience,
  type VisitorProfileView,
} from "@/lib/visitor-audience";

export type { VisitorProfileView };

export interface VisitorInsightsPayload {
  profile: VisitorProfileView;
  dateRange: DateRange;
  siteId: string;
}

function collectAudience(site: SiteRollup, range: DateRange) {
  const merged = emptyAudience();
  for (const [day, metrics] of Object.entries(site.daily)) {
    if (!isDayInRange(day, range)) continue;
    if (metrics.audience) mergeAudience(merged, metrics.audience);
  }
  return merged;
}

export function buildVisitorInsights(
  sites: SiteEntry[],
  rollup: RollupFile,
  range: DateRange,
  siteId = "all"
): VisitorInsightsPayload {
  const merged = emptyAudience();
  let totals = { pv: 0, trial: 0, checkout: 0, purchase: 0 };

  const targets =
    siteId === "all" ? sites : sites.filter((s) => s.id === siteId);

  for (const site of targets) {
    const r = rollup.sites[site.id];
    if (!r) continue;
    mergeAudience(merged, collectAudience(r, range));
    const p = sumSitePeriod(r, range);
    totals.pv += p.pv;
    totals.trial += p.trial;
    totals.checkout += p.checkout;
    totals.purchase += p.purchase;
  }

  const profile = localizeProfile(audienceToProfile(merged, totals));

  return { profile, dateRange: range, siteId };
}

function localizeProfile(profile: VisitorProfileView): VisitorProfileView {
  return {
    ...profile,
    referrers: profile.referrers.map((r) => ({ ...r, label: labelReferrer(r.label) })),
    devices: profile.devices.map((r) => ({ ...r, label: labelDevice(r.label) })),
    locales: profile.locales.map((r) => ({ ...r, label: labelLocale(r.label) })),
    hours: profile.hours.map((r) => ({ ...r, label: labelHour(r.label) })),
    utmSources: profile.utmSources.map((r) => ({
      ...r,
      label: r.label === "unknown" ? DASHBOARD_COPY.unknownUtm : r.label,
    })),
    intentSegments: profile.intentSegments.map((r) => ({
      ...r,
      label: INTENT_SEGMENT_LABELS[r.label] || r.label,
    })),
  };
}
