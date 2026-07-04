import type { Locale } from "@/lib/i18n-shared";
import { getHomeCopy } from "@/lib/copy";

export function EmailAlertPreview({ locale }: { locale: Locale }) {
  const c = getHomeCopy(locale);
  const e = c.emailAlertDemo;

  return (
    <section className="py-16 border-b border-border bg-surface/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">{e.title}</h2>
        <p className="text-center text-sm text-muted mb-8">{e.subtitle}</p>
        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-background shadow-2xl overflow-hidden">
          <div className="bg-brand-600/10 border-b border-border px-4 py-3 flex items-center gap-3">
            <span className="text-xl">📧</span>
            <div>
              <p className="text-xs text-muted">{e.inbox}</p>
              <p className="font-semibold text-sm text-foreground">{e.subject}</p>
            </div>
            <span className="ml-auto text-xs text-muted">{e.time}</span>
          </div>
          <div className="p-5 space-y-4 text-sm">
            <p className="text-foreground font-medium">{e.headline}</p>
            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
              <p className="font-semibold text-red-400">{e.changeTitle}</p>
              <p className="text-muted mt-1">{e.changeDetail}</p>
              <p className="text-xs text-muted mt-2">{e.beforeAfter}</p>
            </div>
            <div className="rounded-xl border border-brand-600/30 bg-brand-600/5 p-4">
              <p className="font-semibold text-brand-400">{e.strategyTitle}</p>
              <p className="text-muted mt-1">{e.strategyDetail}</p>
            </div>
            <div className="flex gap-2 pt-2">
              <span className="rounded-lg bg-brand-600 text-white px-3 py-1.5 text-xs font-semibold">
                {e.ctaView}
              </span>
              <span className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted">
                {e.ctaDismiss}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
