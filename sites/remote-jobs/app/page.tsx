import Link from "next/link";
import { FeatureGrid, JobPreviewTable } from "@/components/ui";
import { testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            已有 847 家企业在此发布远程岗位
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            找到你的
            <span className="text-brand-600"> 远程工作</span>
            <br />
            不用搬去硅谷
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            200+ 全球远程职位每日更新，透明薪资、一键筛选。企业 ¥699/年无限发帖，直达认真找远程工作的候选人。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/jobs"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              浏览远程职位
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              企业发帖 · ¥699/年
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone-400">免费体验 5 次 · 之后 ¥699/年</p>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">最新远程职位</h2>
            <Link href="/jobs" className="text-sm text-brand-600 hover:underline">
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
            className="inline-block mt-8 bg-white text-brand-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            立即加入 ¥699/年
          </Link>
        </div>
      </section>
    </div>
  );
}
