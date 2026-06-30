"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { TrackedKeyword } from "@/lib/keywords";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type KeywordStats = {
  id: string;
  keyword: string;
  domain: string;
  position: number;
  previousPosition: number | null;
  change: number;
  bestPosition: number;
  lastChecked: string;
  checksLast7Days: number;
  history: { position: number; checkedAt: string }[];
  aiOverview: {
    cited: boolean;
    position: number | null;
    snippet: string;
    competitorsCited: string[];
  };
};

function StatsCard({ stats, locale }: { stats: KeywordStats; locale: Locale }) {
  const t = getDashboardCopy(locale);
  const changeLabel =
    stats.change > 0 ? `↑${stats.change}` : stats.change < 0 ? `↓${Math.abs(stats.change)}` : "—";

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 shadow-xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs text-muted uppercase tracking-wide">{t.currentRank}</p>
            <p className="mt-1 text-xl font-bold text-brand-500">#{stats.position}</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs text-muted uppercase tracking-wide">{t.change}</p>
            <p
              className={`mt-1 text-xl font-bold ${stats.change > 0 ? "text-green-400" : stats.change < 0 ? "text-red-400" : "text-muted"}`}
            >
              {changeLabel}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs text-muted uppercase tracking-wide">{t.bestRank}</p>
            <p className="mt-1 text-xl font-bold text-brand-500">#{stats.bestPosition}</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs text-muted uppercase tracking-wide">{t.checks7d}</p>
            <p className="mt-1 text-xl font-bold text-foreground">{stats.checksLast7Days}</p>
          </div>
        </div>
        {stats.history.length > 1 && (
          <div className="mt-4 flex items-end gap-1 h-16">
            {[...stats.history].reverse().map((h, i) => (
              <div
                key={`${h.checkedAt}-${i}`}
                className="flex-1 bg-brand-600/40 rounded-t"
                style={{ height: `${Math.max(12, 100 - h.position)}%` }}
                title={`#${h.position}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-6">
        <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wide">{t.aiOverview}</h3>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold ${stats.aiOverview.cited ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`}
          >
            {stats.aiOverview.cited ? `✓ ${t.aiCited}` : `✗ ${t.aiNotCited}`}
          </span>
          {stats.aiOverview.cited && stats.aiOverview.position && (
            <span className="text-sm text-muted">
              {t.aiPosition}: <span className="font-bold text-foreground">#{stats.aiOverview.position}</span>
            </span>
          )}
        </div>
        {stats.aiOverview.cited && stats.aiOverview.snippet && (
          <p className="mt-3 text-sm text-muted italic border-l-2 border-violet-500/50 pl-3">
            {stats.aiOverview.snippet}
          </p>
        )}
        {!stats.aiOverview.cited && stats.aiOverview.competitorsCited.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-muted">{t.competitorsCited}:</p>
            <div className="mt-1 flex flex-wrap gap-2">
              {stats.aiOverview.competitorsCited.map((c) => (
                <span key={c} className="rounded-md bg-background border border-border px-2 py-0.5 text-xs text-muted">
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function RankDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [keyword, setKeyword] = useState("");
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [statsLoading, setStatsLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [createdKeyword, setCreatedKeyword] = useState<TrackedKeyword | null>(null);
  const [activeStats, setActiveStats] = useState<KeywordStats | null>(null);
  const [keywords, setKeywords] = useState<TrackedKeyword[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/keywords")
      .then((r) => r.json())
      .then((d) => setKeywords(d.keywords ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/keywords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword, domain }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          return;
        }
        setError(getApiErrorMessage(data.code, locale));
        return;
      }

      setCreatedKeyword(data.keyword);
      setActiveStats(data.stats);
      if (data.trial) setTrial(data.trial);
      setKeywords((prev) => [data.keyword, ...prev]);
      setKeyword("");
      setDomain("");
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
    }
  }

  async function handleRecheck(id: string) {
    setStatsLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/keywords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "check", id }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          return;
        }
        setError(getApiErrorMessage(data.code, locale));
        return;
      }

      setActiveStats(data.stats);
      setCreatedKeyword(data.keyword);
      if (data.trial) setTrial(data.trial);
      setKeywords((prev) => prev.map((k) => (k.id === id ? data.keyword : k)));
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setStatsLoading(false);
    }
  }

  async function loadStats(id: string) {
    setStatsLoading(true);
    try {
      const res = await fetch(`/api/keywords?id=${id}`);
      const data = await res.json();
      if (res.ok) {
        setActiveStats(data.stats);
        const kw = keywords.find((k) => k.id === id);
        if (kw) setCreatedKeyword(kw);
      }
    } finally {
      setStatsLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeSyncs}{" "}
                <span className="font-semibold text-brand-500">
                  {trial.remaining}/{trial.limit}
                </span>
              </span>
            )}
          </p>
        )}
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-5">
          <h3 className="font-semibold text-foreground">{t.paywallTitle}</h3>
          <p className="mt-1 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-3 inline-block rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-600/100"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-2xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">{t.createTitle}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted mb-1">{t.keywordLabel}</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={t.keywordPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">{t.domainLabel}</label>
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder={t.domainPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground"
              required
            />
            <p className="mt-1 text-xs text-muted">{t.domainHint}</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-4 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-600/100 disabled:opacity-50"
        >
          {loading ? t.creating : t.createDashboard}
        </button>
      </form>

      {activeStats && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">
              {activeStats.keyword} · {activeStats.domain}
            </h2>
            <button
              type="button"
              onClick={() => handleRecheck(activeStats.id)}
              disabled={statsLoading}
              className="text-sm font-semibold text-brand-500 hover:underline disabled:opacity-50"
            >
              {statsLoading ? t.syncing : t.recheck}
            </button>
          </div>
          <StatsCard stats={activeStats} locale={locale} />
        </div>
      )}

      {createdKeyword && !activeStats && (
        <div className="mb-8 rounded-xl border border-brand-600/30 bg-brand-600/10 p-5">
          <h3 className="font-semibold">{t.createdTitle}</h3>
          <p className="mt-1 text-sm text-muted">{t.createdHint}</p>
          <p className="mt-2 text-brand-500 font-medium">
            #{createdKeyword.position} · {createdKeyword.keyword}
            {createdKeyword.aiOverview.cited && (
              <span className="ml-2 text-violet-300">
                · AI {createdKeyword.aiOverview.position ? `#${createdKeyword.aiOverview.position}` : t.aiCited}
              </span>
            )}
          </p>
        </div>
      )}

      {keywords.length > 0 && (
        <div>
          <h2 className="font-semibold text-lg mb-4">{t.yourDashboards}</h2>
          <div className="space-y-3">
            {keywords.map((k) => (
              <div
                key={k.id}
                className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{k.keyword}</p>
                  <p className="text-sm text-muted truncate">{k.domain}</p>
                </div>
                <span className="text-lg font-bold text-brand-500">#{k.position}</span>
                <span
                  className={`text-xs font-semibold rounded-full px-2 py-0.5 ${k.aiOverview.cited ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`}
                >
                  {k.aiOverview.cited ? t.aiBadgeYes : t.aiBadgeNo}
                </span>
                <button
                  type="button"
                  onClick={() => loadStats(k.id)}
                  className="text-sm text-brand-500 hover:underline"
                >
                  {t.syncNow}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
