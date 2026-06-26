import type { Locale } from "@/lib/i18n-shared";
import { stats } from "@/lib/data";
import { getCompareCopy } from "@/lib/copy-app";

type Feature = { icon: string; title: string; desc: string };

export function CheckoutButton({ className = "", label }: { className?: string; label: string }) {
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

export function MigrationBadge({
  difficulty,
  locale,
}: {
  difficulty: "easy" | "medium" | "hard";
  locale: Locale;
}) {
  const c = getCompareCopy(locale);
  const styles = {
    easy: "bg-green-100 text-green-700",
    medium: "bg-amber-100 text-amber-700",
    hard: "bg-red-100 text-red-700",
  };
  const labels = {
    easy: c.migrationEasy,
    medium: c.migrationMedium,
    hard: c.migrationHard,
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded ${styles[difficulty]}`}>
      {labels[difficulty]}
    </span>
  );
}

export function StatsBar({ locale }: { locale: Locale }) {
  const c = getCompareCopy(locale);
  const { toolCount, freeOptions, categories: catCount } = stats;
  const items =
    locale === "zh"
      ? [
          { label: "对比工具", value: `${toolCount}` },
          { label: "有免费层", value: `${freeOptions}` },
          { label: "覆盖品类", value: `${catCount}` },
        ]
      : [
          { label: "Tools compared", value: `${toolCount}` },
          { label: "Free tiers", value: `${freeOptions}` },
          { label: "Categories", value: `${catCount}` },
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
