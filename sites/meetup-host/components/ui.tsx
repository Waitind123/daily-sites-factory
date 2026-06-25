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

export function CapacityBadge({ confirmed, capacity }: { confirmed: number; capacity: number }) {
  const pct = Math.round((confirmed / capacity) * 100);
  const color =
    pct >= 100
      ? "bg-red-100 text-red-700"
      : pct >= 80
        ? "bg-amber-100 text-amber-700"
        : "bg-green-100 text-green-700";
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
      {confirmed}/{capacity} 人
    </span>
  );
}

export function StatsBar() {
  const { eventCount, cityCount, avgCapacity } = stats;
  const items = [
    { label: "示例活动", value: `${eventCount}` },
    { label: "覆盖城市", value: `${cityCount}` },
    { label: "平均容量", value: `${avgCapacity}` },
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
