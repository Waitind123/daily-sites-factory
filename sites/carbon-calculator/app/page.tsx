import Link from "next/link";
import { FeatureGrid, ComparisonChart } from "@/components/ui";
import { testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            混合办公时代 · Scope 3 基线 5 分钟搞定
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            远程办公，
            <span className="text-brand-600"> 到底减了多少碳？</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            输入通勤距离和到岗天数，对比全勤 vs 混合 vs 完全远程的年度碳排放。HR、CSO、独立开发者都能用——不用找六位数咨询费。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculate"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              免费计算
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-bold mb-4">三场景对比示例</h2>
              <ComparisonChart />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">谁在用？</h2>
              <div className="space-y-3">
                {[
                  { icon: "🏢", title: "HR / People Ops", desc: "混合办公政策需要数据支撑" },
                  { icon: "📋", title: "CSO / ESG 负责人", desc: "政府招标要求 Carbon Reduction Plan" },
                  { icon: "💻", title: "远程团队 Lead", desc: "向管理层证明远程办公的环保价值" },
                  { icon: "🌱", title: "个人用户", desc: "了解自己通勤的真实环境代价" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-lg border border-stone-200 px-4 py-3 bg-stone-50"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-medium text-stone-900">{item.title}</p>
                      <p className="text-sm text-stone-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">三步出报告</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "输入参数", desc: "通勤距离、到岗天数、交通方式、电网区域" },
              { step: "2", title: "看对比", desc: "全勤 vs 当前 vs 完全远程，减排百分比一目了然" },
              { step: "3", title: "导出报告", desc: "会员导出 PDF/CSV，直接用于 ESG 披露" },
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

      <section className="bg-white border-y border-stone-200 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">用户怎么说</h2>
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
          <h2 className="text-2xl font-bold text-center mb-10">核心功能</h2>
          <FeatureGrid />
        </div>
      </section>

      <section className="bg-brand-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Watershed 太贵，Excel 太乱</h2>
          <p className="mt-4 text-brand-100 text-lg">
            我们只要 $9.9/月。5 分钟出基线，第一天就设计收费点——因为 ESG 数据也需要持续维护。
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
