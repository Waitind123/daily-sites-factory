import { cities, features } from "@/lib/data";

export function CityTable({ showLocked = true }: { showLocked?: boolean }) {
  const displayCities = showLocked ? cities : cities.filter((c) => !c.locked);

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-background text-left text-muted">
            <th className="px-4 py-3 font-medium">#</th>
            <th className="px-4 py-3 font-medium">城市</th>
            <th className="px-4 py-3 font-medium hidden sm:table-cell">月成本</th>
            <th className="px-4 py-3 font-medium hidden md:table-cell">网速</th>
            <th className="px-4 py-3 font-medium hidden md:table-cell">安全</th>
            <th className="px-4 py-3 font-medium hidden lg:table-cell">签证</th>
            <th className="px-4 py-3 font-medium text-right">评分</th>
          </tr>
        </thead>
        <tbody>
          {displayCities.map((city) => (
            <tr
              key={city.name}
              className={`border-b border-stone-50 hover:bg-background/50 ${city.locked ? "relative" : ""}`}
            >
              <td className="px-4 py-3 text-muted">{city.rank}</td>
              <td className="px-4 py-3">
                <span className="mr-1.5">{city.flag}</span>
                <span className="font-medium">{city.name}</span>
                <span className="ml-1 text-muted">{city.country}</span>
                {city.locked && (
                  <span className="ml-2 inline-flex items-center rounded bg-amber-50 px-1.5 py-0.5 text-xs text-amber-700">
                    🔒 会员
                  </span>
                )}
              </td>
              <td className="px-4 py-3 hidden sm:table-cell text-muted">
                {city.locked ? "—" : `¥${city.cost.toLocaleString()}`}
              </td>
              <td className="px-4 py-3 hidden md:table-cell text-muted">
                {city.locked ? "—" : `${city.internet} Mbps`}
              </td>
              <td className="px-4 py-3 hidden md:table-cell text-muted">
                {city.locked ? "—" : city.safety}
              </td>
              <td className="px-4 py-3 hidden lg:table-cell text-muted">
                {city.locked ? "—" : city.visa}
              </td>
              <td className="px-4 py-3 text-right">
                {city.locked ? (
                  <span className="text-muted/60">—</span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-brand-600/10 px-2.5 py-0.5 font-semibold text-brand-500">
                    {city.score}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CheckoutButton({ className = "" }: { className?: string }) {
  return (
    <form action="/api/checkout" method="POST">
      <button
        type="submit"
        className={`w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors active:scale-[0.98] ${className}`}
      >
        立即加入 · ¥699/年
      </button>
    </form>
  );
}

export function FeatureGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {features.map((f: { icon: string; title: string; desc: string }) => (
        <div key={f.title} className="rounded-xl border border-border bg-surface p-5">
          <div className="text-2xl mb-2">{f.icon}</div>
          <h3 className="font-semibold text-foreground">{f.title}</h3>
          <p className="mt-1 text-sm text-muted">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
