import Link from "next/link";
import { CityTablePreview, FeatureGrid } from "@/components/ui";
import { HomeHero } from "@/components/HomeHero";
import { getLocale } from "@/lib/locale";
import { getHomeCopy } from "@/lib/copy";

export default async function HomePage() {
  const locale = await getLocale();
  const c = getHomeCopy(locale);

  return (
    <div>
      <HomeHero />

      {"productDemo" in c && (
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
      )}

      <section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {c.stats.map((item) => (
              <div key={item.label} className="rounded-xl border border-border p-6">
                <p className="text-3xl font-bold text-brand-500">{item.stat}</p>
                <p className="text-sm text-muted mt-1">{item.label}</p>
              </div>
            ))}
          </div>
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

      <section id="rankings" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{c.rankingsTitle}</h2>
            <p className="mt-1 text-muted">{c.rankingsSubtitle}</p>
          </div>
          <Link
            href="/join"
            className="text-sm font-medium text-brand-500 hover:text-brand-500"
          >
            {c.unlockAll}
          </Link>
        </div>
        <CityTablePreview locale={locale} />
      </section>

      <section className="bg-surface-muted/50 border-t border-border py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">{c.featuresTitle}</h2>
          <FeatureGrid features={c.features} />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">{c.testimonialsTitle}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {c.testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <p className="text-muted text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-4 text-sm">
                  <strong className="text-foreground">{t.name}</strong>
                  <span className="text-muted"> · {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-foreground">{c.closing.title}</h2>
        <p className="mt-3 text-muted">{c.closing.subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/rankings"
            className="rounded-xl bg-brand-600 px-8 py-3.5 font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            {c.closing.ctaPrimary}
          </Link>
          <Link
            href="/join"
            className="rounded-xl border border-border px-8 py-3.5 font-semibold text-foreground hover:bg-surface transition-colors"
          >
            {c.closing.ctaSecondary}
          </Link>
        </div>
      </section>
    </div>
  );
}
