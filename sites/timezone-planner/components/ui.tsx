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
        <div key={f.title} className="rounded-xl border border-stone-200 bg-white p-5">
          <div className="text-2xl mb-2">{f.icon}</div>
          <h3 className="font-semibold text-stone-900">{f.title}</h3>
          <p className="mt-1 text-sm text-stone-500">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

import { sampleTeam } from "@/lib/data";
import { getUtcOffset } from "@/lib/timezone";

export function OverlapPreview() {
  return (
    <div className="space-y-3">
      {sampleTeam.map((city) => (
        <div key={city.name} className="flex items-center gap-3">
          <span className="w-16 text-sm font-medium text-stone-700">{city.name}</span>
          <div className="flex-1 h-8 bg-stone-100 rounded-lg relative overflow-hidden">
            <div
              className="absolute top-0 bottom-0 bg-brand-500/80 rounded"
              style={{ left: "37.5%", width: "37.5%" }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-xs text-stone-500">
              {city.workHours} · {getUtcOffset(city.timezone)}
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-3">
        <span className="w-16 text-sm font-medium text-brand-700">重叠</span>
        <div className="flex-1 h-8 bg-brand-100 border-2 border-brand-500 border-dashed rounded-lg flex items-center justify-center text-xs font-medium text-brand-700">
          14:00–17:00 UTC · 约 3 小时/天
        </div>
      </div>
      <p className="text-xs text-stone-400">示例：上海 + 伦敦 + 纽约三地团队</p>
    </div>
  );
}
