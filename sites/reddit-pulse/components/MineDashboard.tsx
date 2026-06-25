"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { PainPoint } from "@/lib/pain-miner";
import type { Locale } from "@/lib/i18n-shared";
import {
  getApiErrorMessage,
  getMineCopy,
  getSampleResults,
  getSignalLabel,
} from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type MineResult = {
  keyword: string;
  points: PainPoint[];
  totalFound: number;
  minedAt: string;
};

export function MineDashboard({ locale }: { locale: Locale }) {
  const t = getMineCopy(locale);
  const samples = getSampleResults(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<MineResult | null>(null);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  async function handleMine(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/mine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword }),
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
      setError(
        err instanceof Error ? err.message : getApiErrorMessage("MINE_FAILED", locale)
      );
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
                {t.freeSearches}{" "}
                <span className="text-foreground font-medium">
                  {trial.remaining}/{trial.limit}
                </span>
              </span>
            )}
          </p>
        )}
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

      <form onSubmit={handleMine} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-foreground mb-4">{t.formTitle}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-muted mb-1">{t.keyword}</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={t.keywordPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.mining : t.mineNow}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </form>

      {result && (
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-2">
            {t.resultsTitle}: &ldquo;{result.keyword}&rdquo;
          </h2>
          <p className="text-sm text-muted mb-4">
            {result.totalFound} {t.totalFound}
          </p>
          <div className="space-y-4">
            {result.points.map((point) => (
              <div
                key={point.id}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-600/20 text-brand-400">
                    {getSignalLabel(point.signal, locale)}
                  </span>
                  <span className="text-xs text-muted">
                    {t.intensity}: {point.intensity}/10
                  </span>
                  <span className="text-xs text-muted">
                    {t.subreddit}: {point.subreddit}
                  </span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  &ldquo;{point.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">{t.exampleTitle}</h2>
        {samples.map((sample) => (
          <div key={sample.keyword} className="rounded-xl border border-border bg-surface p-5">
            <p className="font-medium text-foreground mb-3">
              {sample.keyword}
            </p>
            <div className="space-y-3">
              {sample.points.map((point, i) => (
                <div key={i} className="text-sm border-t border-border pt-3 first:border-0 first:pt-0">
                  <div className="flex gap-2 mb-1">
                    <span className="text-xs font-semibold text-brand-400">
                      {getSignalLabel(point.signal, locale)}
                    </span>
                    <span className="text-xs text-muted">
                      {t.intensity} {point.intensity}/10 · {point.subreddit}
                    </span>
                  </div>
                  <p className="text-muted">&ldquo;{point.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
