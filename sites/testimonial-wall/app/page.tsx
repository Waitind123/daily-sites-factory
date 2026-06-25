import Link from "next/link";
import { FeatureGrid } from "@/components/ui";
import { testimonials } from "@/lib/generator";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            Testimonial.to 去品牌 $40/月？这里有 $9.9 的替代方案
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            10 分钟搭建
            <span className="text-brand-600"> 用户证言墙</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            收集用户好评、生成 Wall of Love 嵌入代码、附带索要好评邮件模板。专为 indie hacker 和独立开发者设计。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/build"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              免费创建证言墙
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
              { stat: "$9.9", label: "月费 vs Testimonial.to $40" },
              { stat: "10min", label: "从 0 到嵌入证言墙" },
              { stat: "0 JS", label: "纯 HTML 嵌入，极速加载" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">三步搞定社交证明</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "输入好评", desc: "手动录入或从客户邮件复制用户证言" },
              { step: "2", title: "一键生成", desc: "获得 Wall of Love HTML + 收集邮件模板" },
              { step: "3", title: "嵌入网站", desc: "两行代码贴到 landing page，立即展示" },
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

      <section className="bg-white border-y border-stone-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">独立开发者怎么说</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-stone-200 p-5 bg-stone-50">
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
          <h2 className="text-3xl sm:text-4xl font-bold">MRR $500 时不该为证言付 $40/月</h2>
          <p className="mt-4 text-brand-100 text-lg">
            社交证明是 landing page 转化率的关键。$9.9/月，第一天收费，因为好工具值得付费。
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
