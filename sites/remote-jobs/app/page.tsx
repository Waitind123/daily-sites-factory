import Link from "next/link";
import { FeatureGrid, JobPreviewTable } from "@/components/ui";
import { testimonials } from "@/lib/data";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  return (
    <div>
      <HomeHero />

<section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">最新远程职位</h2>
            <Link href="/jobs" className="text-sm text-brand-500 hover:underline">
              查看全部 →
            </Link>
          </div>
          <JobPreviewTable />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">为什么选我们</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "精准筛选", desc: "按技术栈、时区、薪资范围过滤" },
              { step: "2", title: "透明薪资", desc: "会员可见完整薪资和申请链接" },
              { step: "3", title: "企业直发", desc: "HR 直接发布，无中介抽成" },
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
          <h2 className="text-2xl font-bold text-center mb-10">会员权益</h2>
          <FeatureGrid />
        </div>
      </section>

      <section className="bg-brand-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">LinkedIn Premium ¥588/月，我们只要 ¥699/年</h2>
          <p className="mt-4 text-brand-100 text-lg">
            无限查看职位详情 + 企业无限发帖。第一天收费，因为好数据需要持续维护。
          </p>
          <Link
            href="/join"
            className="inline-block mt-8 bg-surface text-brand-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-600/10 transition-colors"
          >
            立即加入 ¥699/年
          </Link>
        </div>
      </section>
    </div>
  );
}
