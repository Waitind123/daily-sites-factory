"use client";

import { useState, useEffect } from "react";
import type { Experiment } from "@/lib/experiments";
import { conversionRate, pickWinner } from "@/lib/experiments";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getPublicExperimentCopy, getWinnerLabel } from "@/lib/copy-app";

export function PublicExperiment({ experiment, locale }: { experiment: Experiment; locale: Locale }) {
  const t = getPublicExperimentCopy(locale);
  const [exp, setExp] = useState(experiment);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const winner = pickWinner(exp);
  const rateA = conversionRate(exp.conversionsA, exp.viewsA);
  const rateB = conversionRate(exp.conversionsB, exp.viewsB);

  async function recordEvent(variant: "A" | "B", type: "view" | "conversion") {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: exp.slug, variant, type }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(getApiErrorMessage(data.code, locale));
      setExp(data.experiment);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("EVENT_RECORD_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`/api/experiments?slug=${exp.slug}`)
        .then((r) => r.json())
        .then((d) => {
          if (d.experiment) setExp(d.experiment);
        })
        .catch(() => null);
    }, 5000);
    return () => clearInterval(interval);
  }, [exp.slug]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{exp.name}</h1>
        <p className="mt-2 text-sm text-muted">
          {t.pageUrl} <span className="text-foreground">{exp.pageUrl}</span>
        </p>
        <p className="mt-2 text-xs text-muted">{t.poweredBy}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <VariantCard
          label={t.variantA}
          headline={exp.variantA}
          views={exp.viewsA}
          conversions={exp.conversionsA}
          rate={rateA}
          isWinner={winner === "A"}
          winnerLabel={getWinnerLabel("A", locale)}
          viewsLabel={t.views}
          conversionsLabel={t.conversions}
          rateLabel={t.rate}
        />
        <VariantCard
          label={t.variantB}
          headline={exp.variantB}
          views={exp.viewsB}
          conversions={exp.conversionsB}
          rate={rateB}
          isWinner={winner === "B"}
          winnerLabel={getWinnerLabel("B", locale)}
          viewsLabel={t.views}
          conversionsLabel={t.conversions}
          rateLabel={t.rate}
        />
      </div>

      {winner === null && (
        <p className="text-center text-sm text-muted mb-6">{t.needMoreData}</p>
      )}
      {winner === "tie" && (
        <p className="text-center text-sm text-amber-400 mb-6">{t.tie}</p>
      )}

      <div className="rounded-xl border border-border bg-surface p-6">
        <p className="text-sm text-muted mb-4">{t.recordView} / {t.recordConversion}</p>
        <div className="flex flex-wrap gap-3">
          {(["A", "B"] as const).map((v) => (
            <div key={v} className="flex gap-2">
              <button
                type="button"
                disabled={loading}
                onClick={() => recordEvent(v, "view")}
                className="rounded-lg border border-border px-4 py-2 text-sm hover:border-brand-600/50 disabled:opacity-50"
              >
                {t.variantA.replace("A", v)} {t.views}
              </button>
              <button
                type="button"
                disabled={loading}
                onClick={() => recordEvent(v, "conversion")}
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm text-white hover:bg-brand-700 disabled:opacity-50"
              >
                {t.recordConversion}
              </button>
            </div>
          ))}
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </div>
    </div>
  );
}

function VariantCard({
  label,
  headline,
  views,
  conversions,
  rate,
  isWinner,
  winnerLabel,
  viewsLabel,
  conversionsLabel,
  rateLabel,
}: {
  label: string;
  headline: string;
  views: number;
  conversions: number;
  rate: string;
  isWinner: boolean;
  winnerLabel: string;
  viewsLabel: string;
  conversionsLabel: string;
  rateLabel: string;
}) {
  return (
    <div
      className={`rounded-xl border p-6 ${isWinner ? "border-emerald-600/50 bg-emerald-600/10" : "border-border bg-surface"}`}
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-foreground">{label}</h2>
        {isWinner && (
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-600/20 px-2 py-0.5 rounded">
            ★ {winnerLabel}
          </span>
        )}
      </div>
      <p className="text-sm text-muted mb-4 italic">&ldquo;{headline}&rdquo;</p>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-2xl font-bold text-foreground">{views}</p>
          <p className="text-xs text-muted">{viewsLabel}</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">{conversions}</p>
          <p className="text-xs text-muted">{conversionsLabel}</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-brand-500">{rate}%</p>
          <p className="text-xs text-muted">{rateLabel}</p>
        </div>
      </div>
    </div>
  );
}
