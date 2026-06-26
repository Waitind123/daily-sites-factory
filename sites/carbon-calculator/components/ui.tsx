import type { Locale } from "@/lib/i18n-shared";

type Feature = {
  icon: string;
  title: string;
  desc: string;
};

export function CheckoutButton({
  className = "",
  label,
}: {
  className?: string;
  label: string;
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

export function ComparisonChart({
  locale: _locale,
  data,
  note,
}: {
  locale: Locale;
  data: readonly { label: string; kg: number }[];
  note: string;
}) {
  const maxKg = Math.max(...data.map((d) => d.kg));

  return (
    <div className="space-y-4">
      {data.map((d) => (
        <div key={d.label}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted">{d.label}</span>
            <span className="font-medium text-foreground">{d.kg.toLocaleString()} kg</span>
          </div>
          <div className="h-3 bg-surface-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-600/100 rounded-full transition-all"
              style={{ width: `${(d.kg / maxKg) * 100}%` }}
            />
          </div>
        </div>
      ))}
      <p className="text-xs text-muted">{note}</p>
    </div>
  );
}
