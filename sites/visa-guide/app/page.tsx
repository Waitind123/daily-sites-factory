import Link from "next/link";
import { FeatureGrid, StatsBar } from "@/components/ui";
import { visaPrograms, testimonials } from "@/lib/data";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  const cheapest = visaPrograms.reduce((a, b) =>
    a.incomeUsd < b.incomeUsd ? a : b
  );
  const fastest = visaPrograms.find((v) => v.id === "uae-dubai")!;

  return (
    <div>
      <HomeHero />

<section className="bg-surface border-y border-border py-12">
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
              <div key={v.id} className="rounded-xl border border-border bg-surface p-5">
                <span className="text-3xl">{v.flag}</span>
                <h3 className="font-semibold mt-2">{v.country}</h3>
                <p className="text-sm text-brand-500">{v.programName}</p>
                <p className="text-sm text-muted mt-2">${v.incomeUsd.toLocaleString()}/月 · {v.duration}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-brand-600/10 border border-brand-200 p-5">
              <p className="text-sm text-brand-500 font-medium">最低门槛</p>
              <p className="text-lg font-bold mt-1">
                {cheapest.flag} {cheapest.country} — ${cheapest.incomeUsd}/月
              </p>
            </div>
            <div className="rounded-xl bg-brand-600/10 border border-brand-200 p-5">
              <p className="text-sm text-brand-500 font-medium">最快审批</p>
              <p className="text-lg font-bold mt-1">
                {fastest.flag} {fastest.country} — {fastest.processingDays}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">用户怎么说</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-xl border border-border p-5 bg-background"
              >
                <p className="text-foreground text-sm">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-3 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-muted"> · {t.role}</span>
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
            className="inline-block mt-8 bg-surface text-brand-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-600/10 transition-colors"
          >
            立即订阅 $9.9/月
          </Link>
        </div>
      </section>
    </div>
  );
}
