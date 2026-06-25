import Link from "next/link";
import { FeatureGrid, StatsBar } from "@/components/ui";
import { indieTools, testimonials } from "@/lib/data";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  const topRated = [...indieTools].sort((a, b) => b.indieScore - a.indieScore).slice(0, 3);
  const paymentTools = indieTools.filter((t) => t.category === "支付");

  return (
    <div>
      <HomeHero />

<section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold mb-6 text-center">目录概览</h2>
          <StatsBar />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">最高评分工具</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {topRated.map((t) => (
              <div key={t.id} className="rounded-xl border border-border bg-surface p-5">
                <span className="text-xs font-medium text-brand-500 bg-brand-600/10 px-2 py-0.5 rounded">
                  {t.category}
                </span>
                <h3 className="font-semibold mt-2">{t.name}</h3>
                <p className="text-sm text-muted mt-1">{t.tagline}</p>
                <p className="text-sm text-brand-500 mt-2 font-medium">Indie {t.indieScore}/10</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-brand-600/10 border border-brand-200 p-5">
            <p className="text-sm text-brand-500 font-medium">支付方案怎么选？</p>
            <p className="text-lg font-bold mt-1">
              {paymentTools.map((t) => t.name).join(" vs ")} — 深度对比在工具目录
            </p>
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
            Product Hunt 有 5000 个工具目录，没有一个帮你选型
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            我们只要 $9.9/月。深度评测 + 定价对比 + 替代方案 + 接入指南。第一天收费，因为调研每个工具也要时间。
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
