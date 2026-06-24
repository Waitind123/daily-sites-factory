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

export function IndieScoreBadge({ score }: { score: number }) {
  const color =
    score >= 9
      ? "bg-green-100 text-green-700"
      : score >= 7
        ? "bg-brand-100 text-brand-700"
        : "bg-amber-100 text-amber-700";
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
      Indie {score}/10
    </span>
  );
}

export function StatsBar() {
  const { toolCount, categoryCount, avgScore } = stats;
  const items = [
    { label: "精选工具", value: `${toolCount}+` },
    { label: "分类", value: `${categoryCount}` },
    { label: "平均评分", value: avgScore },
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
