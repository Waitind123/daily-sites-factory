import Link from "next/link";
import { FeatureGrid, StatsBar } from "@/components/ui";
import { meetupEvents, testimonials } from "@/lib/data";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  const upcoming = meetupEvents.slice(0, 3);

  return (
    <div>
      <HomeHero />

<section className="bg-surface border-y border-border py-12">
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
              <div key={e.id} className="rounded-xl border border-border bg-surface p-5">
                <span className="text-xs font-medium text-brand-500 bg-brand-600/10 px-2 py-0.5 rounded">
                  {e.city} · {e.category}
                </span>
                <h3 className="font-semibold mt-2">{e.title}</h3>
                <p className="text-sm text-muted mt-1">
                  {e.date} · {e.venue}
                </p>
                <p className="text-sm text-muted mt-2 line-clamp-2">{e.preview}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">组织者怎么说</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-xl border border-border p-5 bg-background"
              >
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
          <h2 className="text-3xl sm:text-4xl font-bold">
            Meetup.com 太贵，Google Forms 太笨
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            组织者每年花 $170+ 在 Meetup Pro，还要手动管候补表格。我们只要 $9.9/月，专注 RSVP + 候补 + 签到。
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
