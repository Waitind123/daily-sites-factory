import type { Locale } from "@/lib/i18n-shared";
import { getStudioCopy } from "@/lib/copy-app";

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

export function StatsBar({ locale }: { locale: Locale }) {
  const c = getStudioCopy(locale);
  const items = [
    { label: c.stats.styles, value: "20" },
    { label: c.stats.avgTime, value: locale === "zh" ? "60 秒" : "60s" },
    { label: c.stats.exports, value: "HTML" },
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

export function StyleBadge({ style, locale }: { style: string; locale: Locale }) {
  const c = getStudioCopy(locale);
  const labels = c.styleBadge as Record<string, string>;
  return (
    <span className="text-xs font-medium text-brand-500 bg-brand-600/10 px-2 py-0.5 rounded">
      {labels[style] || style}
    </span>
  );
}
