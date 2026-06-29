import type { Locale } from "@/lib/i18n-shared";
import { getTrackCopy } from "@/lib/copy-app";
import { getStats } from "@/lib/data";

type Feature = { icon: string; title: string; desc: string };

export { CheckoutButton } from "./CheckoutButton";

export function FeatureGrid({ features }: { features: readonly Feature[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {features.map((f) => (
        <div key={f.title} className="rounded-xl border border-border bg-surface p-5">
          <div className="text-2xl mb-2">{f.icon}</div>
          <h3 className="font-semibold text-foreground">{f.title}</h3>
          <p className="mt-1 text-sm text-muted">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function ChangeBadge({ count, locale }: { count: number; locale: Locale }) {
  const c = getTrackCopy(locale);
  const color =
    count >= 3
      ? "bg-red-100 text-red-700"
      : count >= 1
        ? "bg-amber-100 text-amber-700"
        : "bg-green-100 text-green-700";
  const label =
    locale === "zh" ? `90${c.changes90d} ${count} 次` : `${count} ${c.changes90d}`;
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>{label}</span>
  );
}

export function StatsBar({ locale }: { locale: Locale }) {
  const c = getTrackCopy(locale);
  const stats = getStats(locale);
  const items = [
    { label: c.statsProducts, value: `${stats.productCount}` },
    { label: c.statsAvgChanges, value: `${stats.avgChanges90d}` },
    { label: c.statsCategories, value: `${stats.categories}` },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-2xl font-bold text-brand-500">{item.value}</p>
          <p className="text-sm text-muted mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ImpactBadge({
  impact,
  locale,
}: {
  impact: "high" | "medium" | "low";
  locale: Locale;
}) {
  const c = getTrackCopy(locale);
  const styles = {
    high: "bg-red-100 text-red-700",
    medium: "bg-amber-100 text-amber-700",
    low: "bg-surface-muted text-muted",
  };
  const labels = { high: c.impactHigh, medium: c.impactMedium, low: c.impactLow };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded ${styles[impact]}`}>
      {labels[impact]}
    </span>
  );
}
