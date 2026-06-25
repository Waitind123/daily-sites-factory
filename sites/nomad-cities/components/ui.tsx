import { cities, features } from "@/lib/data";

export function CityTable({ showLocked = true }: { showLocked?: boolean }) {
  const displayCities = showLocked ? cities : cities.filter((c) => !c.locked);

  return (
    <div className="card-glow overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 text-left text-zinc-500">
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
              className="border-b border-white/5 transition-colors hover:bg-white/[0.02]"
            >
              <td className="px-4 py-3 font-mono text-zinc-600">{city.rank}</td>
              <td className="px-4 py-3">
                <span className="mr-1.5">{city.flag}</span>
                <span className="font-medium text-zinc-200">{city.name}</span>
                <span className="ml-1 text-zinc-500">{city.country}</span>
                {city.locked && (
                  <span className="ml-2 inline-flex items-center rounded bg-indigo-500/20 px-1.5 py-0.5 text-xs text-indigo-300">
                    🔒 会员
                  </span>
                )}
              </td>
              <td className="hidden px-4 py-3 text-zinc-400 sm:table-cell">
                {city.locked ? "—" : `¥${city.cost.toLocaleString()}`}
              </td>
              <td className="hidden px-4 py-3 text-zinc-400 md:table-cell">
                {city.locked ? "—" : `${city.internet} Mbps`}
              </td>
              <td className="hidden px-4 py-3 text-zinc-400 md:table-cell">
                {city.locked ? "—" : city.safety}
              </td>
              <td className="hidden px-4 py-3 text-zinc-400 lg:table-cell">
                {city.locked ? "—" : city.visa}
              </td>
              <td className="px-4 py-3 text-right">
                {city.locked ? (
                  <span className="text-zinc-600">—</span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-indigo-500/20 px-2.5 py-0.5 font-semibold text-indigo-300">
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
        className={`w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-indigo-500 active:scale-[0.98] ${className}`}
      >
        立即加入 · ¥699/年
      </button>
    </form>
  );
}

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((f: { icon: string; title: string; desc: string }) => (
        <div key={f.title} className="card-glow card-glow-hover p-5">
          <div className="mb-2 text-2xl">{f.icon}</div>
          <h3 className="font-semibold text-white">{f.title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
