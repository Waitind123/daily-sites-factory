import Link from "next/link";
import { FeatureGrid, OverlapPreview } from "@/components/ui";
import { testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            告别 Slack「什么时候方便？」· 30 秒出公平时段
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            跨时区会议，
            <span className="text-brand-600"> 不再折磨任何人</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            添加团队成员城市，可视化工作时段重叠，自动推荐最公平的会议时间。含痛苦指数和轮换建议——远程团队 Lead 的救星。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/planner"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              免费规划
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
              <h2 className="text-xl font-bold mb-4">三地团队重叠示例</h2>
              <OverlapPreview />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">谁在用？</h2>
              <div className="space-y-3">
                {[
                  { icon: "👥", title: "远程团队 Lead", desc: "上海-柏林-纽约三地站会，每周省 20 分钟协调" },
                  { icon: "🏢", title: "Agency PM", desc: "客户分布在 4 个时区，快速出 3 个公平时段" },
                  { icon: "💼", title: "HR / People Ops", desc: "全球招聘面试，避免候选人凌晨 5 点参会" },
                  { icon: "🚀", title: "独立开发者", desc: "外包团队跨时区协作，痛苦指数一目了然" },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">三步定会议</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "添加成员", desc: "选城市 + 工作时间，支持 16 个常用时区" },
              { step: "2", title: "扫描重叠", desc: "自动找未来 7 天全员可用时段，DST 自动处理" },
              { step: "3", title: "选最公平", desc: "按痛苦指数排序，提示谁该下次轮换" },
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
          <h2 className="text-3xl sm:text-4xl font-bold">World Time Buddy 只显示时间，我们告诉你谁最惨</h2>
          <p className="mt-4 text-brand-100 text-lg">
            协调一次跨时区会议平均浪费 31 分钟。$9.9/月，第一天就设计收费点——因为公平调度值得付费。
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
