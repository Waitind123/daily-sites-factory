import Link from "next/link";
import { FeatureGrid, StatsBar } from "@/components/ui";
import { meetupEvents, testimonials } from "@/lib/data";

export default function HomePage() {
  const upcoming = meetupEvents.slice(0, 3);

  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            Meetup.com 一年 $170 · 我们 $9.9/月
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            Google Forms 管不了候补，
            <span className="text-brand-600"> 你需要轻量 RSVP 工具</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            自动容量控制、候补队列、签到视图、提醒模板。为 indie 社区组织者设计，不是企业活动平台。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              管理活动 RSVP
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              订阅 · $9.9/月
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone-400">免费体验 5 次活动管理 · 之后 $9.9/月</p>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold mb-6 text-center">平台对比</h2>
          <StatsBar />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">近期活动示例</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {upcoming.map((e) => (
              <div key={e.id} className="rounded-xl border border-stone-200 bg-white p-5">
                <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                  {e.city} · {e.category}
                </span>
                <h3 className="font-semibold mt-2">{e.title}</h3>
                <p className="text-sm text-stone-500 mt-1">
                  {e.date} · {e.venue}
                </p>
                <p className="text-sm text-stone-600 mt-2 line-clamp-2">{e.preview}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">组织者怎么说</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-xl border border-stone-200 p-5 bg-stone-50"
              >
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
          <h2 className="text-3xl sm:text-4xl font-bold">
            Meetup.com 太贵，Google Forms 太笨
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            组织者每年花 $170+ 在 Meetup Pro，还要手动管候补表格。我们只要 $9.9/月，专注 RSVP + 候补 + 签到。
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
