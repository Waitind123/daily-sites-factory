import { features, stats } from "@/lib/data";

export function CheckoutButton({ className = "" }: { className?: string }) {
  return (
    <form action="/api/checkout" method="POST">
      <button
        type="submit"
        className={`w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors active:scale-[0.98] ${className}`}
      >
        立即订阅 · $9.9/月
      </button>
    </form>
  );
}

export function FeatureGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {features.map((f) => (
        <div key={f.title} className="rounded-xl border border-stone-200 bg-white p-5">
          <div className="text-2xl mb-2">{f.icon}</div>
          <h3 className="font-semibold text-stone-900">{f.title}</h3>
          <p className="mt-1 text-sm text-stone-500">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function ChangeBadge({ count }: { count: number }) {
  const color =
    count >= 3
      ? "bg-red-100 text-red-700"
      : count >= 1
        ? "bg-amber-100 text-amber-700"
        : "bg-green-100 text-green-700";
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
      90天 {count} 次变动
    </span>
  );
}

export function StatsBar() {
  const { productCount, avgChanges90d, categories } = stats;
  const items = [
    { label: "追踪产品", value: `${productCount}` },
    { label: "平均变动/90天", value: `${avgChanges90d}` },
    { label: "覆盖品类", value: `${categories}` },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-2xl font-bold text-brand-600">{item.value}</p>
          <p className="text-sm text-stone-500 mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ImpactBadge({ impact }: { impact: "high" | "medium" | "low" }) {
  const styles = {
    high: "bg-red-100 text-red-700",
    medium: "bg-amber-100 text-amber-700",
    low: "bg-stone-100 text-stone-600",
  };
  const labels = { high: "高影响", medium: "中影响", low: "低影响" };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded ${styles[impact]}`}>
      {labels[impact]}
    </span>
  );
}
