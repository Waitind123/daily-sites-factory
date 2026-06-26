import { todayStats, virtualCoworkers } from "@/lib/data";
import type { Locale } from "@/lib/i18n-shared";
import { getRoomCopy } from "@/lib/copy-app";

type FeatureItem = {
  readonly icon: string;
  readonly title: string;
  readonly desc: string;
};

export function CheckoutButton({
  className = "",
  label = "Subscribe · $9.9/mo",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <form action="/api/checkout" method="POST">
      <button
        type="submit"
        className={`w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors active:scale-[0.98] ${className}`}
      >
        {label}
      </button>
    </form>
  );
}

export function FeatureGrid({ features }: { features: readonly FeatureItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {features.map((f) => (
        <div key={f.title} className="rounded-xl border border-border bg-surface p-5">
          <div className="text-2xl mb-2">{f.icon}</div>
          <h3 className="font-semibold text-foreground">{f.title}</h3>
          <p className="mt-1 text-sm text-muted">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function LiveStats({ locale }: { locale: Locale }) {
  const stats = getRoomCopy(locale).liveStats;

  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="text-2xl font-bold text-brand-500">{todayStats.activeSessions}</p>
        <p className="text-xs text-muted mt-1">{stats.active}</p>
      </div>
      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="text-2xl font-bold text-brand-500">{todayStats.totalFocusHours}</p>
        <p className="text-xs text-muted mt-1">{stats.focusHours}</p>
      </div>
      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="text-2xl font-bold text-brand-500">{todayStats.avgSessionMin}</p>
        <p className="text-xs text-muted mt-1">{stats.avgMin}</p>
      </div>
    </div>
  );
}

export function CoworkerAvatars() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {virtualCoworkers.slice(0, 8).map((c) => (
        <div
          key={c.id}
          className="w-10 h-10 rounded-full bg-brand-600/10 border-2 border-brand-200 flex items-center justify-center text-lg relative"
          title={c.name}
        >
          {c.avatar}
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
        </div>
      ))}
      <div className="w-10 h-10 rounded-full bg-surface-muted border-2 border-border flex items-center justify-center text-xs font-medium text-muted">
        +{virtualCoworkers.length - 8}
      </div>
    </div>
  );
}
