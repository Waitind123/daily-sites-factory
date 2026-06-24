import Link from "next/link";
import { FeatureGrid } from "@/components/ui";
import { startupIdeas, testimonials } from "@/lib/data";

export default function HomePage() {
  const todayIdea = startupIdeas[0];

  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            已有 847 位 indie hacker 在这里找方向
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            别 build 六个月，
            <span className="text-brand-600"> 才发现没人要</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            每日精选可落地创业点子 + 深度市场分析。含竞品定价、MRR 预估、MVP 路线图。$9.9/月无限阅读。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ideas"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              浏览创业点子
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              订阅 · $9.9/月
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone-400">免费体验 5 次深度分析 · 之后 $9.9/月</p>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border-2 border-brand-200 bg-brand-50 p-6 sm:p-8">
            <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">
              今日精选
            </p>
            <h2 className="text-2xl font-bold text-stone-900">{todayIdea.title}</h2>
            <p className="text-stone-600 mt-2">{todayIdea.tagline}</p>
            <p className="text-sm text-stone-500 mt-3 line-clamp-2">{todayIdea.preview}</p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="text-sm text-brand-700 font-medium">
                MRR 潜力 {todayIdea.mrrPotential}
              </span>
              <span className="text-sm text-stone-400">· {todayIdea.buildTime} 可 ship</span>
              <Link
                href="/ideas"
                className="text-sm font-semibold text-brand-600 hover:underline ml-auto"
              >
                查看深度分析 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">三步找到方向</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "浏览点子", desc: "8+ 垂直方向，DevTools、SaaS、Marketing 等分类筛选" },
              { step: "2", title: "读深度分析", desc: "竞品定价、市场规模、获客渠道，写代码前先验证" },
              { step: "3", title: "周末 ship MVP", desc: "每个点子含 4 步 MVP 清单，levelsio 式快速上线" },
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
          <h2 className="text-2xl font-bold text-center mb-10">会员功能</h2>
          <FeatureGrid />
        </div>
      </section>

      <section className="bg-brand-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">IdeaProof 太贵，Twitter 灵感太散</h2>
          <p className="mt-4 text-brand-100 text-lg">
            我们只要 $9.9/月。 curated 点子 + 深度分析，帮你 ship 对的 thing。第一天收费，因为 research 也有成本。
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
