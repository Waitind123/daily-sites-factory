"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { AffiliateProgram } from "@/lib/affiliates";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type AffiliateStats = {
  trackingCode: string;
  affiliateName: string;
  productUrl: string;
  commissionRate: number;
  clicks: number;
  conversions: number;
  conversionRate: number;
  totalRevenue: number;
  commissionOwed: number;
};

function StatsCard({ stats, locale }: { stats: AffiliateStats; locale: Locale }) {
  const t = getDashboardCopy(locale);

  return (
    <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 shadow-xl">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs text-muted uppercase tracking-wide">{t.clicks}</p>
          <p className="mt-1 text-xl font-bold text-brand-500">{stats.clicks}</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs text-muted uppercase tracking-wide">{t.conversions}</p>
          <p className="mt-1 text-xl font-bold text-brand-500">{stats.conversions}</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs text-muted uppercase tracking-wide">{t.convRate}</p>
          <p className="mt-1 text-xl font-bold text-brand-500">{stats.conversionRate}%</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs text-muted uppercase tracking-wide">{t.commissionOwed}</p>
          <p className="mt-1 text-xl font-bold text-emerald-400">${stats.commissionOwed.toFixed(2)}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-muted">{t.revenue}: </span>
          <span className="text-foreground font-medium">${stats.totalRevenue.toFixed(2)}</span>
        </div>
        <div>
          <span className="text-muted">{t.rate}: </span>
          <span className="text-foreground font-medium">{stats.commissionRate}%</span>
        </div>
      </div>
    </div>
  );
}

export function AffiliateDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [affiliateName, setAffiliateName] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [commissionRate, setCommissionRate] = useState("20");
  const [loading, setLoading] = useState(false);
  const [statsLoading, setStatsLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [createdProgram, setCreatedProgram] = useState<AffiliateProgram | null>(null);
  const [activeStats, setActiveStats] = useState<AffiliateStats | null>(null);
  const [programs, setPrograms] = useState<AffiliateProgram[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/affiliates")
      .then((r) => r.json())
      .then((d) => setPrograms(d.programs ?? []))
      .catch(() => null);
  }, []);

  function trackingUrl(code: string) {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/r/${code}`;
    }
    return `/r/${code}`;
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/affiliates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          affiliateName,
          productUrl,
          commissionRate: Number(commissionRate),
        }),
      });
      const data = await res.json();

      if (res.status === 403 && data.code === "TRIAL_EXHAUSTED") {
        setShowPaywall(true);
        return;
      }

      if (!res.ok) {
        setError(getApiErrorMessage(data.code, locale));
        return;
      }

      setCreatedProgram(data.program);
      if (data.trial) setTrial(data.trial);
      setPrograms((prev) => [data.program, ...prev]);
      setAffiliateName("");
      setProductUrl("");
      setCommissionRate("20");
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
    }
  }

  async function loadStats(code: string) {
    setStatsLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/affiliates?code=${encodeURIComponent(code)}`);
      const data = await res.json();
      if (!res.ok) {
        setError(getApiErrorMessage(data.code, locale));
        return;
      }
      setActiveStats(data.stats);
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setStatsLoading(false);
    }
  }

  async function simulateConversion(code: string) {
    setStatsLoading(true);
    try {
      const res = await fetch("/api/affiliates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "simulate", code, amount: 29 }),
      });
      const data = await res.json();
      if (res.ok && data.stats) {
        setActiveStats(data.stats);
      }
    } catch {
      /* ignore */
    } finally {
      setStatsLoading(false);
    }
  }

  async function copyToClipboard(code: string) {
    try {
      await navigator.clipboard.writeText(trackingUrl(code));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeSyncs}{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </p>
        )}
      </div>

      {showPaywall && (
        <div className="mb-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6">
          <h2 className="text-lg font-semibold text-foreground">{t.paywallTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleCreate} className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t.createTitle}</h2>
          <label className="block text-sm font-medium text-foreground mb-1">{t.affiliateName}</label>
          <input
            type="text"
            value={affiliateName}
            onChange={(e) => setAffiliateName(e.target.value)}
            placeholder={t.affiliateNamePlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
            required
          />
          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.productUrl}</label>
          <input
            type="url"
            value={productUrl}
            onChange={(e) => setProductUrl(e.target.value)}
            placeholder={t.productUrlPlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
            required
          />
          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.commissionRate}</label>
          <input
            type="number"
            min="1"
            max="100"
            value={commissionRate}
            onChange={(e) => setCommissionRate(e.target.value)}
            placeholder="20"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
            required
          />
          <p className="mt-1 text-xs text-muted">{t.commissionHint}</p>
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {loading ? t.creating : t.createProgram}
          </button>
        </form>

        <div>
          {createdProgram && (
            <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 mb-6">
              <h3 className="font-semibold text-foreground">{t.createdTitle}</h3>
              <p className="mt-1 text-sm text-muted">{t.createdHint}</p>
              <code className="mt-3 block rounded-lg bg-background border border-border p-3 text-sm text-brand-500 break-all">
                {trackingUrl(createdProgram.trackingCode)}
              </code>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => copyToClipboard(createdProgram.trackingCode)}
                  className="rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-background"
                >
                  {copied ? t.copied : t.copyLink}
                </button>
                <button
                  type="button"
                  onClick={() => loadStats(createdProgram.trackingCode)}
                  className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
                >
                  {statsLoading ? t.syncing : t.viewStats}
                </button>
              </div>
            </div>
          )}

          {activeStats && (
            <>
              <StatsCard stats={activeStats} locale={locale} />
              <button
                type="button"
                onClick={() => simulateConversion(activeStats.trackingCode)}
                className="mt-4 w-full rounded-xl border border-dashed border-brand-600/50 px-4 py-2 text-sm text-brand-500 hover:bg-brand-600/10"
              >
                {t.simulateConversion}
              </button>
            </>
          )}
        </div>
      </div>

      {programs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-foreground mb-4">{t.yourPrograms}</h2>
          <div className="space-y-3">
            {programs.map((program) => (
              <div
                key={program.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <div className="min-w-0">
                  <p className="font-medium text-foreground">{program.affiliateName}</p>
                  <p className="font-mono text-sm text-brand-500 mt-1">/r/{program.trackingCode}</p>
                  <p className="text-xs text-muted truncate mt-1">{program.productUrl}</p>
                  <p className="text-xs text-muted mt-1">
                    {program.commissionRate}% · {program.clicks} {t.clicksLabel}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(program.trackingCode)}
                    className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-background"
                  >
                    {t.copyLink}
                  </button>
                  <button
                    type="button"
                    onClick={() => loadStats(program.trackingCode)}
                    className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
                  >
                    {t.viewStats}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
