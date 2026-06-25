import Link from "next/link";
import { FeatureGrid, StatsBar } from "@/components/ui";
import { newsletterTools, testimonials } from "@/lib/data";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  const recent = newsletterTools.slice(0, 3);

  return (
    <div>
      <HomeHero />

<section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold mb-6 text-center">为什么需要工具对比？</h2>
          <StatsBar />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">热门工具速览</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {recent.map((tool) => (
              <div key={tool.id} className="rounded-xl border border-border bg-surface p-5">
                <span className="text-xs font-medium text-brand-500 bg-brand-600/10 px-2 py-0.5 rounded">
                  {tool.category}
                </span>
                <h3 className="font-semibold mt-2">{tool.name}</h3>
                <p className="text-sm text-muted mt-1">{tool.preview}</p>
                <p className="text-xs text-brand-500 mt-2 font-medium">{tool.startingPrice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">创作者怎么说</h2>
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
            在 Substack 交了两年 10% 抽成？
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            MRR $800 时每月多付 $80。对比一次，可能省下 $960/年。$9.9/月 无限对比，比选错平台便宜 100 倍。
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
