import Link from "next/link";
import { FeatureGrid } from "@/components/ui";
import { testimonials } from "@/lib/changelog";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            Beamer $49/月？这里有 $9.9 的替代方案
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            10 分钟发布
            <span className="text-brand-600"> 产品 Changelog</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            生成公开更新页、嵌入 Widget、状态页片段和 RSS Feed。专为 indie hacker 和 bootstrapped SaaS 设计。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/publish"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              免费发布 Changelog
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
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: "$9.9", label: "月费 vs Beamer $49" },
              { stat: "10min", label: "从 0 到可发布 Changelog" },
              { stat: "4-in-1", label: "Changelog + Widget + 状态页 + RSS" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-stone-200 p-6">
                <p className="text-3xl font-bold text-brand-600">{item.stat}</p>
                <p className="text-sm text-stone-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">三步发布更新</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "填写版本", desc: "输入版本号、标题、描述，支持 feature/fix/优化标签" },
              { step: "2", title: "一键生成", desc: "公开页 HTML、嵌入 Widget、状态页片段、RSS 全部导出" },
              { step: "3", title: "部署上线", desc: "复制 HTML 到任意托管，或嵌入产品内通知用户" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-bold text-lg flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-stone-500 mt-1 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100/50 border-t border-stone-200 py-16">
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
                className="rounded-xl border border-stone-200 bg-white p-6"
              >
                <p className="text-stone-600 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-4 text-sm">
                  <strong className="text-stone-900">{t.name}</strong>
                  <span className="text-stone-400"> · {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-stone-900">
          用户需要知道你在 ship
        </h2>
        <p className="mt-3 text-stone-500">
          活跃的 changelog 是产品生命力的证明。$9.9/月，比 Beamer 便宜 80%。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/publish"
            className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            开始发布
          </Link>
          <Link
            href="/guide/beamer-alternative-indie-changelog"
            className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
          >
            阅读 Beamer 替代指南
          </Link>
        </div>
      </section>
    </div>
  );
}
