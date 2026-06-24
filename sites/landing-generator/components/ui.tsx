import { features, stats } from "@/lib/generator";

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

export function StatsBar() {
  const items = [
    { label: "风格模板", value: `${stats.styles}` },
    { label: "平均生成时间", value: stats.avgTime },
    { label: "导出格式", value: stats.exports },
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

export function StyleBadge({ style }: { style: string }) {
  const labels: Record<string, string> = {
    minimal: "极简",
    bold: "醒目",
    dark: "暗色",
    gradient: "渐变",
  };
  return (
    <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
      {labels[style] || style}
    </span>
  );
}
