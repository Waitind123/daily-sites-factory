import Link from "next/link";
import { FeatureGrid, StatsBar } from "@/components/ui";
import { indieTools, testimonials } from "@/lib/data";

export default function HomePage() {
  const topRated = [...indieTools].sort((a, b) => b.indieScore - a.indieScore).slice(0, 3);
  const paymentTools = indieTools.filter((t) => t.category === "支付");

  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            精选 40+ 工具 · 2026 年 6 月更新
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            工具目录太多太杂，
            <span className="text-brand-600"> 一张表选对 indie 技术栈</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            支付、邮件、托管、分析——每个工具含定价对比、替代方案、5 分钟接入指南。$9.9/月无限查阅。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              浏览工具目录
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              订阅 · $9.9/月
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone-400">免费体验 5 次深度评测 · 之后 $9.9/月</p>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-12">
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
              <div key={t.id} className="rounded-xl border border-stone-200 bg-white p-5">
                <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                  {t.category}
                </span>
                <h3 className="font-semibold mt-2">{t.name}</h3>
                <p className="text-sm text-stone-500 mt-1">{t.tagline}</p>
                <p className="text-sm text-brand-600 mt-2 font-medium">Indie {t.indieScore}/10</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-brand-50 border border-brand-200 p-5">
            <p className="text-sm text-brand-600 font-medium">支付方案怎么选？</p>
            <p className="text-lg font-bold mt-1">
              {paymentTools.map((t) => t.name).join(" vs ")} — 深度对比在工具目录
            </p>
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
            Product Hunt 有 5000 个工具目录，没有一个帮你选型
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            我们只要 $9.9/月。深度评测 + 定价对比 + 替代方案 + 接入指南。第一天收费，因为调研每个工具也要时间。
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
