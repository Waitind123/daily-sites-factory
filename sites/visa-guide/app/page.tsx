import Link from "next/link";
import { FeatureGrid, StatsBar } from "@/components/ui";
import { visaPrograms, testimonials } from "@/lib/data";

export default function HomePage() {
  const cheapest = visaPrograms.reduce((a, b) =>
    a.incomeUsd < b.incomeUsd ? a : b
  );
  const fastest = visaPrograms.find((v) => v.id === "uae-dubai")!;

  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            覆盖 28+ 国 · 2026 年 6 月最新数据
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            Reddit 签证信息太乱，
            <span className="text-brand-600"> 一张表看清全球 DN 签证</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            收入门槛、停留时长、税务政策、材料清单一站式对比。告别以讹传讹，$9.9/月无限查阅。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visas"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              浏览签证数据库
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              订阅 · $9.9/月
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone-400">免费体验 5 次详情查询 · 之后 $9.9/月</p>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold mb-6 text-center">数据库概览</h2>
          <StatsBar />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">热门签证速览</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {visaPrograms.slice(0, 3).map((v) => (
              <div key={v.id} className="rounded-xl border border-stone-200 bg-white p-5">
                <span className="text-3xl">{v.flag}</span>
                <h3 className="font-semibold mt-2">{v.country}</h3>
                <p className="text-sm text-brand-600">{v.programName}</p>
                <p className="text-sm text-stone-500 mt-2">${v.incomeUsd.toLocaleString()}/月 · {v.duration}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-brand-50 border border-brand-200 p-5">
              <p className="text-sm text-brand-600 font-medium">最低门槛</p>
              <p className="text-lg font-bold mt-1">
                {cheapest.flag} {cheapest.country} — ${cheapest.incomeUsd}/月
              </p>
            </div>
            <div className="rounded-xl bg-brand-50 border border-brand-200 p-5">
              <p className="text-sm text-brand-600 font-medium">最快审批</p>
              <p className="text-lg font-bold mt-1">
                {fastest.flag} {fastest.country} — {fastest.processingDays}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">用户怎么说</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-xl border border-stone-200 p-5 bg-stone-50"
              >
                <p className="text-stone-700 text-sm">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-3 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-stone-400"> · {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">会员功能</h2>
          <FeatureGrid />
        </div>
      </section>

      <section className="bg-brand-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Nomad List 不管签证，移民中介太贵
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            我们只要 $9.9/月。28 国签证数据库 + 材料清单 + 税务速查。第一天收费，因为人工核实政策也有成本。
          </p>
          <Link
            href="/join"
            className="inline-block mt-8 bg-white text-brand-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            立即订阅 $9.9/月
          </Link>
        </div>
      </section>
    </div>
  );
}
