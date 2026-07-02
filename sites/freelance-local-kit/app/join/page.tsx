import { InviteReferralCard } from "@/components/InviteReferralCard";
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
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{c.title}</h1>
        <p className="mt-3 text-muted">{c.subtitle}</p>
      </div>

      <div className="rounded-2xl border-2 border-brand-600 bg-surface p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-xl">
          {c.recommended}
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-brand-500 mb-2">{c.monthly}</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-foreground">$9.9</span>
            <span className="text-muted">{c.perMonth}</span>
          </div>
          <p className="mt-2 text-sm text-muted">{c.vsCanny}</p>
        </div>

        <ul className="mt-8 space-y-3 text-sm">
          {c.perks.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-brand-500 mt-0.5">✓</span>
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CheckoutButton label={c.subscribe} />
        </div>

        {demo && (
          <p className="mt-4 text-center text-xs text-amber-600 bg-amber-50 rounded-lg py-2 px-3">
            {c.demoNote}
          </p>
        )}

        <p className="mt-4 text-center text-xs text-muted">{c.checkoutNote}</p>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-background p-6">
        <h3 className="font-semibold text-foreground mb-3">{c.whyTitle}</h3>
        <ul className="space-y-2 text-sm text-muted">
          {c.whyItems.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-foreground mb-6 text-center">{c.includedTitle}</h2>
        <FeatureGrid features={home.features} />
      </div>
    </div>
  );
}
