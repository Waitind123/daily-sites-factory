"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { SpyResult, AdPlatform } from "@/lib/competitor-spy";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getSpyCopy, getPlatformLabel } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

const AD_COLORS: Record<AdPlatform, string> = {
  meta: "bg-blue-500/20 text-blue-400",
  google: "bg-emerald-500/20 text-emerald-400",
  linkedin: "bg-sky-500/20 text-sky-400",
};

export function SpyDashboard({ locale }: { locale: Locale }) {
  const t = getSpyCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<SpyResult | null>(null);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  async function handleSpy(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/spy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((prev) => (prev ? { ...prev, remaining: 0, canUse: false } : prev));
          return;
        }
        throw new Error(getApiErrorMessage(data.code, locale));
      }

      setResult(data.result);
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("SPY_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-emerald-400 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeScans}{" "}
                <span className="text-foreground font-medium">
                  {trial.remaining}/{trial.limit}
                </span>
              </span>
            )}
          </p>
        )}
        <Link href="/scan" className="mt-2 inline-block text-sm text-brand-400 hover:text-brand-300">
          {t.scanLink}
        </Link>
      </div>

      {showPaywall && (
        <div className="mb-8 rounded-xl border border-amber-600/40 bg-amber-600/10 p-6">
          <h2 className="font-semibold text-foreground">{t.paywallTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form onSubmit={handleSpy} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-foreground mb-4">{t.formTitle}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-muted mb-1">{t.url}</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={t.urlPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.spying : t.spyNow}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </form>

      {result && (
        <div className="mb-12 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              {t.resultsTitle}: {result.domain}
            </h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="text-muted">
                {result.totalAds} {t.totalAds}
              </span>
              <span className="text-muted">
                {t.avgDays}: {result.avgAdDays}
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.adsTitle}</h3>
            <div className="space-y-4">
              {result.ads.map((ad) => (
                <div key={ad.id} className="rounded-xl border border-border bg-surface p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded ${AD_COLORS[ad.platform]}`}
                    >
                      {getPlatformLabel(ad.platform, locale)}
                    </span>
                    <span className="text-xs text-muted">
                      {t.daysRunning}: {ad.daysRunning} · {t.spend}: {ad.spendEstimate}
                    </span>
                  </div>
                  <p className="font-medium text-foreground text-sm">{ad.headline}</p>
                  <p className="text-sm text-muted mt-1">{ad.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.seoTitle}</h3>
            <div className="rounded-xl border border-border bg-surface overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted">
                    <th className="text-left p-3">{t.keywordCol}</th>
                    <th className="text-left p-3">{t.position}</th>
                    <th className="text-left p-3">{t.volume}</th>
                    <th className="text-left p-3">{t.difficulty}</th>
                  </tr>
                </thead>
                <tbody>
                  {result.seoKeywords.map((kw) => (
                    <tr key={kw.keyword} className="border-b border-border last:border-0">
                      <td className="p-3 text-foreground">{kw.keyword}</td>
                      <td className="p-3 text-muted">#{kw.position}</td>
                      <td className="p-3 text-muted">{kw.volume.toLocaleString()}</td>
                      <td className="p-3 text-muted">{kw.difficulty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.weaknessesTitle}</h3>
            <div className="space-y-4">
              {result.weaknesses.map((w, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-500/20 text-red-400">
                      {w.source}
                    </span>
                    <span className="text-xs text-muted">
                      {t.theme}: {w.theme} · {t.severity}: {w.severity}/10
                    </span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    &ldquo;{w.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
