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
        <div key={f.title} className="rounded-xl border border-border bg-surface p-5">
          <div className="text-2xl mb-2">{f.icon}</div>
          <h3 className="font-semibold text-foreground">{f.title}</h3>
          <p className="mt-1 text-sm text-muted">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="text-2xl font-bold text-brand-500">{stats.countries}+</p>
        <p className="text-xs text-muted mt-1">覆盖国家</p>
      </div>
      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="text-2xl font-bold text-brand-500">{stats.programs}</p>
        <p className="text-xs text-muted mt-1">签证项目</p>
      </div>
      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="text-2xl font-bold text-brand-500">$900</p>
        <p className="text-xs text-muted mt-1">最低月收入门槛</p>
      </div>
    </div>
  );
}
