import Link from "next/link";
import { FeatureGrid, StatsBar } from "@/components/ui";
import { examplePrompts, testimonials } from "@/lib/generator";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  return (
    <div>
      <HomeHero />

<section className="bg-surface border-y border-border py-12">
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
              <div key={ex.name} className="rounded-xl border border-border bg-surface p-5">
                <span className="text-xs font-medium text-brand-500 bg-brand-600/10 px-2 py-0.5 rounded">
                  {ex.style}
                </span>
                <h3 className="font-semibold mt-2">{ex.productName}</h3>
                <p className="text-sm text-muted mt-1">{ex.tagline}</p>
                <p className="text-xs text-muted mt-2">{ex.audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">创始人怎么说</h2>
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
            className="inline-block mt-8 bg-surface text-brand-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-600/10 transition-colors"
          >
            立即订阅 $9.9/月
          </Link>
        </div>
      </section>
    </div>
  );
}
