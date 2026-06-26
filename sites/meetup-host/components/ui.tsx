import type { Locale } from "@/lib/i18n-shared";
import { getEventsCopy } from "@/lib/copy-app";
import { meetupEvents } from "@/lib/data";

type Feature = { icon: string; title: string; desc: string };

export function CheckoutButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <form action="/api/checkout" method="POST">
      <button
        type="submit"
        className={`w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors active:scale-[0.98] ${className}`}
      >
        {label}
      </button>
    </form>
  );
}

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

export function CapacityBadge({
  confirmed,
  capacity,
  peopleLabel,
}: {
  confirmed: number;
  capacity: number;
  peopleLabel: string;
}) {
  const pct = Math.round((confirmed / capacity) * 100);
  const color =
    pct >= 100
      ? "bg-red-100 text-red-700"
      : pct >= 80
        ? "bg-amber-100 text-amber-700"
        : "bg-green-100 text-green-700";
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
      {confirmed}/{capacity} {peopleLabel}
    </span>
  );
}

export function StatsBar({ locale }: { locale: Locale }) {
  const c = getEventsCopy(locale);
  const eventCount = meetupEvents.length;
  const cityCount = c.cities.length - 1;
  const avgCapacity = Math.round(
    meetupEvents.reduce((sum, e) => sum + e.capacity, 0) / meetupEvents.length
  );
  const items = [
    { label: c.statsEvents, value: `${eventCount}` },
    { label: c.statsCities, value: `${cityCount}` },
    { label: c.statsCapacity, value: `${avgCapacity}` },
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
