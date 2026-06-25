import Link from "next/link";
import { FeatureGrid, OverlapPreview } from "@/components/ui";
import { testimonials } from "@/lib/data";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  return (
    <div>
      <HomeHero />

<section className="bg-surface border-y border-border py-12">
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
                    className="flex items-start gap-3 rounded-lg border border-border px-4 py-3 bg-background"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted">{item.desc}</p>
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

      <section className="bg-surface border-y border-border py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">用户怎么说</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-border p-5 bg-background">
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
          <h2 className="text-3xl sm:text-4xl font-bold">World Time Buddy 只显示时间，我们告诉你谁最惨</h2>
          <p className="mt-4 text-brand-100 text-lg">
            协调一次跨时区会议平均浪费 31 分钟。$9.9/月，第一天就设计收费点——因为公平调度值得付费。
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
