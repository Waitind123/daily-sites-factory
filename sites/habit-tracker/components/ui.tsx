import type { Locale } from "@/lib/i18n-shared";
import { getHomeCopy } from "@/lib/copy";

type FeatureItem = {
  readonly icon: string;
  readonly title: string;
  readonly desc: string;
};

export { CheckoutButton } from "./CheckoutButton";

export function FeatureGrid({ features }: { features: readonly FeatureItem[] }) {
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

export function WeekChart({ locale }: { locale: Locale }) {
  const c = getHomeCopy(locale);
  const stats = c.weekStats.map((d, i) => ({
    day: c.weekDays[i],
    done: d.done,
    total: d.total,
  }));

  return (
    <div className="flex items-end justify-between gap-2 h-32 px-2">
      {stats.map((d) => {
        const pct = (d.done / d.total) * 100;
        return (
          <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full bg-surface-muted rounded-t-lg relative" style={{ height: "100px" }}>
              <div
                className="absolute bottom-0 w-full bg-brand-600/100 rounded-t-lg transition-all"
                style={{ height: `${pct}%` }}
              />
            </div>
            <span className="text-xs text-muted">{d.day}</span>
          </div>
        );
      })}
    </div>
  );
}
