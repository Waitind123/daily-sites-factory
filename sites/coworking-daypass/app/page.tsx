import Link from "next/link";
import { FeatureGrid, PassPreviewTable } from "@/components/ui";
import { venues } from "@/lib/data";
import { HomeHero } from "@/components/HomeHero";
import { getLocale } from "@/lib/locale";
import { getHomeCopy } from "@/lib/copy";

export default async function HomePage() {
  const locale = await getLocale();
  const c = getHomeCopy(locale);
  const featured = venues.filter((v) => v.featured);

  return (
    <div>
      <HomeHero />

      <section className="border-b border-border py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {c.stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
                <p className="text-2xl font-bold text-brand-500">{s.stat}</p>
                <p className="text-xs text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">{c.productDemo.title}</h2>
          <p className="text-center text-sm text-muted mb-6">{c.productDemo.caption}</p>
          <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 shadow-xl">
            <pre className="whitespace-pre-wrap rounded-xl bg-background border border-border p-5 font-mono text-sm text-foreground leading-relaxed">
              {c.productDemo.preview}
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold mb-6 text-center">{c.hotPassesTitle}</h2>
          <PassPreviewTable labels={c.previewTable} />
          <p className="text-center text-sm text-muted mt-4">
            {c.hotPassesHint}{" "}
            <Link href="/passes" className="text-brand-500 hover:underline">
              {c.hotPassesLink}
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">{c.howItWorks.title}</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {c.howItWorks.steps.map((s) => (
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

      <section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {featured.map((venue) => (
              <div key={venue.id} className="rounded-xl border border-border p-5 bg-background">
                <span className="text-3xl">{venue.logo}</span>
                <h3 className="font-semibold mt-2">{venue.name}</h3>
                <p className="text-sm text-muted">
                  {venue.city}, {venue.country}
                </p>
                <p className="text-sm text-brand-500 font-medium mt-2">
                  {venue.dayPassPrice} · {locale === "zh" ? `今日余 ${venue.spotsLeftToday} 位` : `${venue.spotsLeftToday} spots left`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">{c.testimonialsTitle}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {c.testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-border p-5 bg-surface">
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
          <h2 className="text-2xl font-bold text-center mb-10">{c.featuresTitle}</h2>
          <FeatureGrid features={c.features} />
        </div>
      </section>

      <section className="bg-brand-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">{c.closing.title}</h2>
          <p className="mt-4 text-brand-100 text-lg">{c.closing.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/passes"
              className="inline-block bg-surface text-brand-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-600/10 transition-colors"
            >
              {c.closing.ctaPrimary}
            </Link>
            <Link
              href="/join"
              className="inline-block border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-surface/10 transition-colors"
            >
              {c.closing.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
