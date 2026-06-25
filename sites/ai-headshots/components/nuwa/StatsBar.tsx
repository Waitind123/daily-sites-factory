export function StatsBar({
  stats,
}: {
  stats: { label: string; value: string }[];
}) {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="border-white/10 px-4 py-8 text-center sm:border-r last:border-r-0 [&:nth-child(2)]:border-r"
          >
            <div className="text-2xl font-bold text-white sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-sm text-zinc-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
