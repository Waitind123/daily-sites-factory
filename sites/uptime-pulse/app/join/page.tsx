import { CheckoutButton, FeatureGrid } from "@/components/ui";
import { isDemoMode } from "@/lib/stripe";

export default function JoinPage() {
  const demo = isDemoMode();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Join Uptime Pulse</h1>
        <p className="mt-3 text-muted">
          One price, all features. No per-monitor fees.
        </p>
      </div>

      <div className="rounded-2xl border-2 border-brand-600 bg-surface p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-xl">
          Recommended
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-brand-500 mb-2">Monthly</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-foreground">$9.9</span>
            <span className="text-muted">/mo</span>
          </div>
          <p className="mt-2 text-sm text-muted">
            vs UptimeRobot $34+/mo after price hike · cancel anytime
          </p>
        </div>

        <ul className="mt-8 space-y-3 text-sm">
          {[
            "Unlimited URL monitors",
            "1-minute checks from EU + US",
            "Slack, email & webhook alerts",
            "Public branded status page",
            "SSL certificate expiry alerts",
            "30-day uptime history",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-brand-500 mt-0.5">✓</span>
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CheckoutButton />
        </div>

        {demo && (
          <p className="mt-4 text-center text-xs text-amber-600 bg-amber-50 rounded-lg py-2 px-3">
            Demo mode: no payment keys configured — checkout simulates success
          </p>
        )}

        <p className="mt-4 text-center text-xs text-muted">
          Stripe / Polar secure checkout · credit cards accepted
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-background p-6">
        <h3 className="font-semibold text-foreground mb-3">Why 5 free checks, then subscribe?</h3>
        <ul className="space-y-2 text-sm text-muted">
          <li>· Regional probes and alert delivery cost real money</li>
          <li>· Paying users = founders who actually ship products</li>
          <li>· Solo-maintained — flat pricing keeps it sustainable</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-foreground mb-6 text-center">Included</h2>
        <FeatureGrid />
      </div>
    </div>
  );
}
