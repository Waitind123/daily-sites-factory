"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { DocShare } from "@/lib/doc-share";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getShareCopy, getSampleReport } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

function completionBarClass(pct: number) {
  if (pct >= 70) return "bg-emerald-500";
  if (pct >= 40) return "bg-amber-500";
  return "bg-red-500";
}

function formatTime(sec: number, locale: Locale) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  if (locale === "zh") return `${m}分${s}秒`;
  return `${m}m ${s}s`;
}

export function DocShareTool({ locale }: { locale: Locale }) {
  const t = getShareCopy(locale);
  const sampleReport = getSampleReport(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [title, setTitle] = useState("");
  const [pageCount, setPageCount] = useState("12");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<DocShare | null>(null);
  const [history, setHistory] = useState<DocShare[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/share")
      .then((r) => r.json())
      .then((d) => setHistory(d.shares ?? []))
      .catch(() => null);
  }, []);

  async function handleShare(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          pageCount: parseInt(pageCount, 10),
          recipientEmail: recipientEmail || undefined,
        }),
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

      setResult(data.share);
      setHistory((list) => [data.share, ...list]);
      setTitle("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : getApiErrorMessage("SHARE_FAILED", locale)
      );
    } finally {
      setLoading(false);
    }
  }

  async function copyLink(url: string) {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

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

      <form onSubmit={handleShare} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">{t.formTitle}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.docTitle}</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t.docTitlePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.pageCount}</label>
              <input
                type="number"
                min={1}
                max={50}
                value={pageCount}
                onChange={(e) => setPageCount(e.target.value)}
                placeholder={t.pageCountPlaceholder}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.recipientEmail}</label>
              <input
                type="email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                placeholder={t.recipientEmailPlaceholder}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              />
            </div>
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.sharing : t.shareButton}
          </button>
        </div>
      </form>

      {result && (
        <div className="mb-8 space-y-6">
          <div className="rounded-xl border border-emerald-600/50 bg-emerald-600/10 p-5">
            <p className="font-semibold text-foreground">{t.resultTitle}</p>
            <p className="mt-1 text-sm text-foreground font-medium">{result.title}</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                readOnly
                value={result.trackingUrl}
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm text-muted font-mono"
              />
              <button
                type="button"
                onClick={() => copyLink(result.trackingUrl)}
                className="rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-700"
              >
                {copied ? t.copied : t.copyLink}
              </button>
            </div>
            <div className="mt-4 grid sm:grid-cols-4 gap-4">
              <div className="rounded-lg bg-background border border-border p-4 text-center">
                <p className="text-2xl font-bold text-brand-500">{result.totalViews}</p>
                <p className="text-xs text-muted mt-1">{t.totalViews}</p>
              </div>
              <div className="rounded-lg bg-background border border-border p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{result.uniqueViewers}</p>
                <p className="text-xs text-muted mt-1">{t.uniqueViewers}</p>
              </div>
              <div className="rounded-lg bg-background border border-border p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{formatTime(result.avgTimeSec, locale)}</p>
                <p className="text-xs text-muted mt-1">{t.avgTime}</p>
              </div>
              <div className="rounded-lg bg-background border border-border p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{result.downloadAttempts}</p>
                <p className="text-xs text-muted mt-1">{t.downloads}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-foreground mb-4">{t.pageViewsTitle}</h3>
            <div className="space-y-3">
              {result.pageViews.map((pv) => (
                <div key={pv.page} className="rounded-lg border border-border bg-background p-4">
                  <div className="flex justify-between items-center gap-2 mb-2">
                    <p className="font-medium text-foreground text-sm">
                      {t.pageLabel} {pv.page}
                    </p>
                    <span className="text-xs text-muted">
                      {pv.views} {t.viewsLabel} · {formatTime(pv.avgTimeSec, locale)}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-border overflow-hidden">
                    <div
                      className={`h-full rounded-full ${completionBarClass(pv.completionPct)}`}
                      style={{ width: `${pv.completionPct}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted mt-1">
                    {t.completionLabel}: {pv.completionPct}%
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-foreground mb-4">{t.sessionsTitle}</h3>
            <div className="space-y-3">
              {result.sessions.map((session, i) => (
                <div key={i} className="rounded-lg border border-border bg-background p-4">
                  <p className="font-medium text-foreground text-sm">{session.viewer}</p>
                  <p className="text-sm text-muted mt-1">
                    {session.location} · {session.device}
                  </p>
                  <p className="text-sm text-brand-500 mt-1">
                    {session.pagesViewed} {t.pagesViewedLabel} · {formatTime(session.totalTimeSec, locale)}
                  </p>
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
              <div key={item.id} className="rounded-xl border border-border bg-surface p-4">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-sm text-muted mt-1">
                  {item.totalViews} {t.viewsLabel} · {item.uniqueViewers} {t.uniqueViewers}
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
