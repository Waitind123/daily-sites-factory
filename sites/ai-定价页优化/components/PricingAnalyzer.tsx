"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { PricingAnalysis } from "@/lib/pricing-analyzer";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getAnalyzeCopy, getSampleReport } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function PricingAnalyzer({ locale }: { locale: Locale }) {
  const t = getAnalyzeCopy(locale);
  const sampleReport = getSampleReport(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [pageUrl, setPageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<PricingAnalysis | null>(null);
  const [history, setHistory] = useState<PricingAnalysis[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/analyze")
      .then((r) => r.json())
      .then((d) => setHistory(d.analyses ?? []))
      .catch(() => null);
  }, []);

  async function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageUrl }),
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

      setResult(data.analysis);
      setHistory((list) => [data.analysis, ...list]);
      setPageUrl("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : getApiErrorMessage("ANALYSIS_FAILED", locale)
      );
    } finally {
      setLoading(false);
    }
  }

  const severityLabel = (severity: string) => {
    if (severity === "high") return t.severityHigh;
    if (severity === "medium") return t.severityMedium;
    return t.severityLow;
  };

  const severityClass = (severity: string) => {
    if (severity === "high") return "bg-red-500/20 text-red-400";
    if (severity === "medium") return "bg-amber-500/20 text-amber-400";
    return "bg-emerald-500/20 text-emerald-400";
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.title}</h1>
          <p className="mt-1 text-muted text-sm">{t.subtitle}</p>
        </div>
        {trial && (
          <div className="rounded-lg border border-border bg-surface px-4 py-2 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeScans}{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </div>
        )}
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-brand-600/50 bg-brand-600/10 p-5">
          <p className="font-semibold text-foreground">{t.paywallTitle}</p>
          <p className="mt-1 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form onSubmit={handleAnalyze} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">{t.formTitle}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.pageUrl}</label>
            <input
              type="url"
              value={pageUrl}
              onChange={(e) => setPageUrl(e.target.value)}
              placeholder={t.pageUrlPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.analyzing : t.analyzeButton}
          </button>
        </div>
      </form>

      {result && (
        <div className="mb-8 space-y-6">
          <div className="rounded-xl border border-emerald-600/50 bg-emerald-600/10 p-5">
            <p className="font-semibold text-foreground">{t.resultTitle}</p>
            <p className="mt-1 text-sm text-muted break-all">{result.pageUrl}</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-background border border-border p-4 text-center">
                <p className="text-3xl font-bold text-brand-500">{result.overallScore}</p>
                <p className="text-sm text-muted mt-1">{t.scoreLabel}</p>
              </div>
              <div className="rounded-lg bg-background border border-border p-4 text-center">
                <p className="text-3xl font-bold text-foreground">{result.estimatedConversion}</p>
                <p className="text-sm text-muted mt-1">{t.conversionLabel}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-foreground mb-4">{t.layoutTitle}</h3>
            <div className="space-y-3">
              {result.layoutIssues.map((issue) => (
                <div key={issue.area} className="rounded-lg border border-border bg-background p-4">
                  <div className="flex justify-between items-start gap-2">
                    <p className="font-medium text-foreground text-sm">{issue.area}</p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${severityClass(issue.severity)}`}
                    >
                      {severityLabel(issue.severity)}
                    </span>
                  </div>
                  <p className="text-sm text-muted mt-2">{issue.issue}</p>
                  <p className="text-sm text-brand-500 mt-2">{issue.fix}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-foreground mb-4">{t.copyTitle}</h3>
            <div className="space-y-3">
              {result.aiCopyRewrites.map((rewrite) => (
                <div key={rewrite.element} className="rounded-lg border border-border bg-background p-4">
                  <p className="font-medium text-foreground text-sm">{rewrite.element}</p>
                  <p className="text-sm text-muted mt-1">
                    {t.beforeLabel}: {rewrite.before}
                  </p>
                  <p className="text-sm text-brand-500 mt-1">
                    {t.afterLabel}: {rewrite.after}
                  </p>
                  <p className="text-xs text-muted mt-2">
                    {t.whyLabel}: {rewrite.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-foreground mb-4">{t.abTitle}</h3>
            <div className="space-y-3">
              {result.abSuggestions.map((s) => (
                <div key={s.element} className="rounded-lg border border-border bg-background p-4">
                  <p className="font-medium text-foreground text-sm">{s.element}</p>
                  <p className="text-sm text-muted mt-1">
                    {t.currentLabel}: {s.current}
                  </p>
                  <p className="text-sm text-brand-500 mt-1">
                    {t.suggestedLabel}: {s.suggested}
                  </p>
                  <p className="text-xs text-emerald-400 mt-2">{s.expectedLift}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-4">{t.historyTitle}</h2>
          <div className="space-y-3">
            {history.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <p className="text-sm text-muted break-all">{item.pageUrl}</p>
                <p className="text-sm text-foreground mt-1">
                  {t.scoreLabel}: {item.overallScore} · {t.conversionLabel}: {item.estimatedConversion}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border bg-surface-muted/30 p-6">
        <h3 className="font-semibold text-foreground mb-4">{t.exampleTitle}</h3>
        <pre className="whitespace-pre-wrap rounded-lg bg-background border border-border p-5 font-mono text-sm text-foreground leading-relaxed">
          {sampleReport}
        </pre>
      </div>
    </div>
  );
}
