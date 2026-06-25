import Link from "next/link";
import { FeatureGrid } from "@/components/ui";
import { testimonials } from "@/lib/og-generator";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  return (
    <div>
      <HomeHero />

<section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: "$9.9", label: "月费 vs Bannerbear $49" },
              { stat: "30s", label: "从标题到可分享 OG 图" },
              { stat: "1200×630", label: "Twitter/LinkedIn 标准尺寸" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border p-6">
                <p className="text-3xl font-bold text-brand-500">{item.stat}</p>
                <p className="text-sm text-muted mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">三步生成分享图</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "输入标题", desc: "主标题、副标题、品牌色，选择 5 种模板之一" },
              { step: "2", title: "即时预览", desc: "纯 SVG 渲染，毫秒出图，无需 Puppeteer 或 API 密钥" },
              { step: "3", title: "导出使用", desc: "下载 SVG、复制 meta 标签或 Next.js metadata 片段" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-brand-100 text-brand-500 font-bold text-lg flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-muted mt-1 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted/50 border-t border-border py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">核心功能</h2>
          <FeatureGrid />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">独立开发者怎么说</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <p className="text-muted text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-4 text-sm">
                  <strong className="text-foreground">{t.name}</strong>
                  <span className="text-muted"> · {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-foreground">
          好产品需要好看的分享图
        </h2>
        <p className="mt-3 text-muted">
          Product Hunt 发布、博客 SEO、Twitter 推广——OG 图决定点击率。$9.9/月，比 Bannerbear 便宜 80%。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/studio"
            className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            开始生成
          </Link>
          <Link
            href="/guide/bannerbear-alternative-og-image"
            className="rounded-xl border border-border px-8 py-3.5 text-base font-semibold text-foreground hover:bg-surface-muted transition-colors"
          >
            阅读 Bannerbear 替代指南
          </Link>
        </div>
      </section>
    </div>
  );
}
