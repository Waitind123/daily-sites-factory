import { features, spaces } from "@/lib/data";

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

export function SpacePreviewTable() {
  const preview = spaces.filter((s) => s.featured).slice(0, 5);

  return (
    <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-stone-100 bg-stone-50 text-left text-stone-500">
            <th className="px-4 py-3 font-medium">空间</th>
            <th className="px-4 py-3 font-medium hidden sm:table-cell">城市</th>
            <th className="px-4 py-3 font-medium hidden md:table-cell">WiFi</th>
            <th className="px-4 py-3 font-medium text-right">日票</th>
          </tr>
        </thead>
        <tbody>
          {preview.map((space) => (
            <tr key={space.id} className="border-b border-stone-50 hover:bg-stone-50/50">
              <td className="px-4 py-3">
                <span className="mr-2">{space.logo}</span>
                <span className="font-medium">{space.name}</span>
                <span className="block text-stone-400 text-xs mt-0.5">{space.neighborhood}</span>
              </td>
              <td className="px-4 py-3 hidden sm:table-cell text-stone-600">
                {space.city}, {space.country}
              </td>
              <td className="px-4 py-3 hidden md:table-cell text-stone-600">{space.wifiMbps} Mbps</td>
              <td className="px-4 py-3 text-right font-medium text-brand-700">{space.dayPassPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
