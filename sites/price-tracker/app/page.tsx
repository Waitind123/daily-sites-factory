import Link from "next/link";
import { FeatureGrid, StatsBar } from "@/components/ui";
import { saasProducts, testimonials } from "@/lib/data";

export default function HomePage() {
  const recent = saasProducts.slice(0, 3);

  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            RivalPeek $49/月 · 我们 $9.9/月
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            竞品悄悄涨价 3 周，
            <span className="text-brand-600"> 你还在手动截图对比？</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            自动追踪 Notion、Linear、Cursor 等 SaaS 定价变动。90 天历史、趋势分析、策略建议。Indie Hacker 专用，不是企业级情报平台。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/track"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              追踪竞品定价
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              订阅 · $9.9/月
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone-400">免费体验 5 次深度追踪 · 之后 $9.9/月</p>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold mb-6 text-center">为什么需要自动追踪？</h2>
          <StatsBar />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">近期定价变动</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {recent.map((p) => (
              <div key={p.id} className="rounded-xl border border-stone-200 bg-white p-5">
                <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                  {p.category}
                </span>
                <h3 className="font-semibold mt-2">{p.name}</h3>
                <p className="text-sm text-stone-500 mt-1">{p.preview}</p>
                <p className="text-xs text-stone-400 mt-2">
                  90 天内 {p.tracking.changesLast90Days} 次变动
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">创始人怎么说</h2>
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
          <h2 className="text-2xl font-bold text-center mb-10">核心功能</h2>
          <FeatureGrid />
        </div>
      </section>

      <section className="bg-brand-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            每周开 5 个标签页截图？该停了
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            Indie Hackers 上最常见的痛点：手动追踪竞品定价，一周后就忘了。$9.9/月自动监控，变动 24h 内通知。
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
