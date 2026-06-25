import Link from "next/link";
import { FeatureGrid } from "@/components/ui";
import { testimonials } from "@/lib/monitor";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  return (
    <div>
      <HomeHero />

      <section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: "$9.9", label: "flat/mo vs UptimeRobot $34+" },
              { stat: "60s", label: "detection from downtime" },
              { stat: "∞", label: "monitors, no per-seat fees" },
            ].map((item) => (
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Add your URLs", desc: "Landing page, API, docs — any HTTP endpoint you ship" },
              { step: "2", title: "We ping every minute", desc: "Checks from multiple regions. SSL expiry tracked automatically" },
              { step: "3", title: "Get alerted fast", desc: "Slack, email, or webhook when status flips. Share a public status page" },
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

      <section className="bg-surface-muted/50 border-t border-border py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Core features</h2>
          <FeatureGrid />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">What indie hackers say</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
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
        <h2 className="text-2xl font-bold text-foreground">
          Your users shouldn&apos;t be your uptime monitor
        </h2>
        <p className="mt-3 text-muted">
          5 free checks · then $9.9/mo for unlimited monitoring
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/monitors"
            className="rounded-xl bg-brand-600 px-8 py-3.5 font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Check a URL free
          </Link>
          <Link
            href="/join"
            className="rounded-xl border border-border px-8 py-3.5 font-semibold text-foreground hover:bg-surface transition-colors"
          >
            View pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
