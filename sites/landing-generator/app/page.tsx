import Link from "next/link";
import { FeatureGrid, StatsBar } from "@/components/ui";
import { examplePrompts, testimonials } from "@/lib/generator";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            Carrd $19/年 · Webflow 学 3 天 · 我们 30 秒
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            产品有了，
            <span className="text-brand-600"> landing page 还在拖？</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            输入产品描述，30 秒生成 levelsio 风格落地页。HTML 导出、SEO 优化、4 种风格模板。Indie Hacker 专用，不是企业 CMS。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/studio"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              免费生成 Landing Page
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              订阅 · $9.9/月
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone-400">免费体验 5 次 · 之后 $9.9/月</p>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold mb-6 text-center">为什么 indie 需要快速 landing page？</h2>
          <StatsBar />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">示例生成效果</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {examplePrompts.map((ex) => (
              <div key={ex.name} className="rounded-xl border border-stone-200 bg-white p-5">
                <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                  {ex.style}
                </span>
                <h3 className="font-semibold mt-2">{ex.productName}</h3>
                <p className="text-sm text-stone-500 mt-1">{ex.tagline}</p>
                <p className="text-xs text-stone-400 mt-2">{ex.audience}</p>
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
            levelsio 说：第一天就要有 landing page
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            别花 3 天学 Webflow。输入描述，30 秒出稿，改改就能 ship。$9.9/月无限生成。
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
