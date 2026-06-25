import { features } from "@/lib/data";

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
        <div key={f.title} className="rounded-xl border border-border bg-surface p-5">
          <div className="text-2xl mb-2">{f.icon}</div>
          <h3 className="font-semibold text-foreground">{f.title}</h3>
          <p className="mt-1 text-sm text-muted">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

import { sampleComparison } from "@/lib/data";

export function ComparisonChart() {
  const maxKg = Math.max(...sampleComparison.map((d) => d.kg));

  return (
    <div className="space-y-4">
      {sampleComparison.map((d) => (
        <div key={d.label}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted">{d.label}</span>
            <span className="font-medium text-foreground">{d.kg.toLocaleString()} kg/年</span>
          </div>
          <div className="h-3 bg-surface-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-600/100 rounded-full transition-all"
              style={{ width: `${(d.kg / maxKg) * 100}%` }}
            />
          </div>
        </div>
      ))}
      <p className="text-xs text-muted">示例：15km 地铁通勤 · 每周到岗 2 天 · 中国电网</p>
    </div>
  );
}
