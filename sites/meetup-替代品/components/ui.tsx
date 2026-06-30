import type { Locale } from "@/lib/i18n-shared";
import { getEventsCopy } from "@/lib/copy-app";

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
  const rows = [
    { label: c.comparePrice, meetup: c.compareMeetupPrice, heylo: c.compareHeyloPrice, us: c.compareUsPrice },
    { label: c.compareExport, meetup: c.compareMeetupExport, heylo: c.compareHeyloExport, us: c.compareUsExport },
    { label: c.compareEmbed, meetup: c.compareMeetupEmbed, heylo: c.compareHeyloEmbed, us: c.compareUsEmbed },
    { label: c.compareLockIn, meetup: c.compareMeetupLockIn, heylo: c.compareHeyloLockIn, us: c.compareUsLockIn },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 px-2 text-left text-muted font-medium" />
            <th className="py-3 px-2 text-center text-muted font-medium">{c.compareMeetup}</th>
            <th className="py-3 px-2 text-center text-muted font-medium">{c.compareHeylo}</th>
            <th className="py-3 px-2 text-center text-brand-500 font-semibold">{c.compareUs}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border/50">
              <td className="py-3 px-2 text-muted">{row.label}</td>
              <td className="py-3 px-2 text-center text-foreground">{row.meetup}</td>
              <td className="py-3 px-2 text-center text-foreground">{row.heylo}</td>
              <td className="py-3 px-2 text-center font-semibold text-brand-500">{row.us}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
