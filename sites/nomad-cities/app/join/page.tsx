import { InviteReferralCard } from "@/components/InviteReferralCard";
import Link from "next/link";
import { CheckoutButton, FeatureGrid } from "@/components/ui";
import { getHomeCopy } from "@/lib/copy";
import { getJoinCopy } from "@/lib/copy-app";
import { getLocale } from "@/lib/locale";
import { siteMeta } from "@/lib/site-meta";
import { isDemoMode } from "@/lib/stripe";

export default async function JoinPage() {
  const locale = await getLocale();
  const c = getJoinCopy(locale);
  const home = getHomeCopy(locale);
  const demo = isDemoMode();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{c.title}</h1>
        <p className="mt-3 text-muted">{c.subtitle}</p>
        <p className="mt-2 text-sm text-brand-500">{c.socialProof}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <p className="text-sm font-medium text-muted mb-2">{c.monthly}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-foreground">{c.monthlyPrice}</span>
            <span className="text-muted">{c.perMonth}</span>
          </div>
          <p className="mt-2 text-sm text-muted">{c.vsCanny}</p>

          <ul className="mt-6 space-y-2.5 text-sm">
            {c.perks.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-brand-500 mt-0.5">✓</span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CheckoutButton label={c.subscribe} plan="monthly" />
          </div>
        </div>

        <div className="rounded-2xl border-2 border-brand-600 bg-surface p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-xl">
            {c.recommended}
          </div>

          <p className="text-sm font-medium text-brand-500 mb-2">{c.annual}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-foreground">{c.annualPrice}</span>
            <span className="text-muted">{c.perYear}</span>
          </div>
          <p className="mt-2 text-sm text-emerald-500 font-medium">{c.saveAnnual}</p>

          <ul className="mt-6 space-y-2.5 text-sm">
            {c.perks.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-brand-500 mt-0.5">✓</span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CheckoutButton label={c.subscribeAnnual} plan="annual" />
          </div>
        </div>
      </div>

      {demo && (
        <p className="mt-6 text-center text-xs text-amber-600 bg-amber-500/10 border border-amber-500/30 rounded-lg py-2 px-3">
          {c.demoNote}
        </p>
      )}

      <p className="mt-4 text-center text-xs text-muted">{c.checkoutNote}</p>
      <p className="mt-2 text-center text-sm font-medium text-emerald-500">{c.guarantee}</p>

      <div className="mt-10 rounded-xl border border-border bg-background overflow-hidden">
        <h3 className="font-semibold text-foreground px-6 pt-6 pb-3">{c.compareTitle}</h3>
        <div className="grid grid-cols-3 gap-2 px-6 py-2 text-xs font-medium text-muted border-b border-border">
          <span />
          <span className="text-brand-500">{c.compareHeaderUs}</span>
          <span>{c.compareHeaderThem}</span>
        </div>
        <div className="divide-y divide-border text-sm">
          {c.compareRows.map((row) => (
            <div key={row.label} className="grid grid-cols-3 gap-2 px-6 py-3">
              <span className="text-muted">{row.label}</span>
              <span className="font-medium text-brand-500">{row.us}</span>
              <span className="text-muted">{row.them}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-background p-6">
        <h3 className="font-semibold text-foreground mb-4">{c.faqTitle}</h3>
        <div className="space-y-4">
          {c.faq.map((item, i) => (
            <div key={item.q}>
              <p className="text-sm font-medium text-foreground">
                <span className="text-brand-500 mr-2">{String(i + 1).padStart(2, "0")}</span>
                {item.q}
              </p>
              <p className="mt-1 text-sm text-muted pl-7">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-background p-6">
        <h3 className="font-semibold text-foreground mb-3">{c.whyTitle}</h3>
        <ul className="space-y-2 text-sm text-muted">
          {c.whyItems.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-center">
        <Link href="/rankings" className="text-sm text-brand-500 hover:underline">
          {locale === "zh" ? "← 返回城市排名" : "← Back to city rankings"}
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-foreground mb-6 text-center">{c.includedTitle}</h2>
        <FeatureGrid features={home.features} />
      </div>
    </div>
  );
}
