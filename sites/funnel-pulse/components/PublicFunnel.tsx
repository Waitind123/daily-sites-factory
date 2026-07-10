"use client";

import { useState, useEffect } from "react";
import type { Funnel } from "@/lib/funnels";
import { conversionRate, dropOffRate, biggestDropOff } from "@/lib/funnels";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getPublicFunnelCopy } from "@/lib/copy-app";

export function PublicFunnel({ funnel, locale }: { funnel: Funnel; locale: Locale }) {
  const t = getPublicFunnelCopy(locale);
  const [f, setF] = useState(funnel);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const leak = biggestDropOff(f);
  const top = f.stepCounts[0] || 0;
  const bottom = f.stepCounts[f.steps.length - 1] || 0;
  const overall = conversionRate(bottom, top);

  async function recordEvent(stepIndex: number) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: f.slug, step: stepIndex }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(getApiErrorMessage(data.code, locale));
      setF(data.funnel);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("EVENT_RECORD_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`/api/funnels?slug=${f.slug}`)
        .then((r) => r.json())
        .then((d) => {
          if (d.funnel) setF(d.funnel);
        })
        .catch(() => null);
    }, 5000);
    return () => clearInterval(interval);
  }, [f.slug]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{f.name}</h1>
        <p className="mt-2 text-xs text-muted">{t.poweredBy}</p>
        <p className="mt-3 text-sm text-muted">
          {t.overallConv}: <span className="text-brand-500 font-semibold">{overall}%</span>
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-foreground mb-4">{t.steps}</h2>
        <div className="space-y-3">
          {f.steps.map((step, i) => {
            const count = f.stepCounts[i];
            const rate = conversionRate(count, top);
            const isLeak = leak?.index === i;
            const drop = i > 0 ? dropOffRate(f.stepCounts[i - 1], count) : null;
            return (
              <div
                key={step}
                className={`flex items-center justify-between py-3 px-4 rounded-lg ${isLeak ? "bg-red-600/10 border border-red-600/30" : "bg-background border border-border"}`}
              >
                <div>
                  <span className="text-xs text-muted mr-2">{t.step} {i + 1}</span>
                  <span className="font-medium text-foreground">{step}</span>
                  {isLeak && (
                    <span className="ml-2 text-xs text-red-400">★ {t.biggestLeak}</span>
                  )}
                </div>
                <div className="text-right text-sm">
                  <p className="text-foreground font-semibold">{count.toLocaleString()} {t.users}</p>
                  <p className="text-muted">
                    {rate}% {t.rate}
                    {drop && ` · ▼ ${drop}% ${t.dropOff}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {!leak && top === 0 && (
          <p className="mt-4 text-center text-sm text-muted">{t.noLeak}</p>
        )}
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <p className="text-sm text-muted mb-4">{t.recordEvent}</p>
        <div className="flex flex-wrap gap-2">
          {f.steps.map((step, i) => (
            <button
              key={step}
              type="button"
              disabled={loading}
              onClick={() => recordEvent(i)}
              className="rounded-lg border border-border px-4 py-2 text-sm hover:border-brand-600/50 disabled:opacity-50"
            >
              {step}
            </button>
          ))}
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </div>
    </div>
  );
}
