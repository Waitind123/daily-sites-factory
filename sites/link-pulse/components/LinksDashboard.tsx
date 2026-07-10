"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { ShortLink } from "@/lib/links";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type LinkStats = {
  slug: string;
  destination: string;
  title: string;
  totalClicks: number;
  clicksLast7Days: number;
  topReferrers: { name: string; count: number }[];
};

function StatsCard({ stats, locale }: { stats: LinkStats; locale: Locale }) {
  const t = getDashboardCopy(locale);
  const topRef = stats.topReferrers[0]?.name ?? "—";

  return (
    <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 shadow-xl">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs text-muted uppercase tracking-wide">{t.mrr}</p>
          <p className="mt-1 text-xl font-bold text-brand-500">{stats.totalClicks}</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs text-muted uppercase tracking-wide">{t.arr}</p>
          <p className="mt-1 text-xl font-bold text-brand-500">{stats.clicksLast7Days}</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-4 col-span-2">
          <p className="text-xs text-muted uppercase tracking-wide">{t.churn}</p>
          <p className="mt-1 text-sm font-bold text-foreground truncate">{topRef}</p>
        </div>
      </div>
      {stats.topReferrers.length > 0 && (
        <div className="mt-4 space-y-2">
          {stats.topReferrers.map((r) => (
            <div key={r.name} className="flex justify-between text-sm">
              <span className="text-muted truncate mr-4">{r.name}</span>
              <span className="text-foreground font-medium">{r.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function LinksDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [destination, setDestination] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [statsLoading, setStatsLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [createdLink, setCreatedLink] = useState<ShortLink | null>(null);
  const [activeStats, setActiveStats] = useState<LinkStats | null>(null);
  const [links, setLinks] = useState<ShortLink[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/links")
      .then((r) => r.json())
      .then((d) => setLinks(d.links ?? []))
      .catch(() => null);
  }, []);

  function shortUrl(slug: string) {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/l/${slug}`;
    }
    return `/l/${slug}`;
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          slug: customSlug || undefined,
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

      setCreatedLink(data.link);
      if (data.trial) setTrial(data.trial);
      setLinks((prev) => [data.link, ...prev]);
      setDestination("");
      setCustomSlug("");
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
    }
  }

  async function loadStats(slug: string) {
    setStatsLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/links?slug=${encodeURIComponent(slug)}`);
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

  async function copyToClipboard(slug: string) {
    try {
      await navigator.clipboard.writeText(shortUrl(slug));
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
          <label className="block text-sm font-medium text-foreground mb-1">{t.productName}</label>
          <input
            type="url"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder={t.productNamePlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
            required
          />
          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.stripeKey}</label>
          <input
            type="text"
            value={customSlug}
            onChange={(e) => setCustomSlug(e.target.value)}
            placeholder={t.stripeKeyPlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <p className="mt-1 text-xs text-muted">{t.stripeKeyHint}</p>
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {loading ? t.creating : t.createDashboard}
          </button>
        </form>

        <div>
          {createdLink && (
            <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 mb-6">
              <h3 className="font-semibold text-foreground">{t.createdTitle}</h3>
              <p className="mt-1 text-sm text-muted">{t.createdHint}</p>
              <code className="mt-3 block rounded-lg bg-background border border-border p-3 text-sm text-brand-500 break-all">
                {shortUrl(createdLink.slug)}
              </code>
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => copyToClipboard(createdLink.slug)}
                  className="rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-background"
                >
                  {copied ? t.copied : t.copyLink}
                </button>
                <button
                  type="button"
                  onClick={() => loadStats(createdLink.slug)}
                  className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
                >
                  {statsLoading ? t.syncing : t.syncNow}
                </button>
              </div>
            </div>
          )}

          {activeStats && <StatsCard stats={activeStats} locale={locale} />}
        </div>
      </div>

      {links.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-foreground mb-4">{t.yourDashboards}</h2>
          <div className="space-y-3">
            {links.map((link) => (
              <div
                key={link.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <div className="min-w-0">
                  <p className="font-mono text-sm text-brand-500">/l/{link.slug}</p>
                  <p className="text-xs text-muted truncate mt-1">{link.destination}</p>
                  <p className="text-xs text-muted mt-1">
                    {link.clicks.length > 0
                      ? `${link.clicks.length} clicks`
                      : t.notSynced}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(link.slug)}
                    className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-background"
                  >
                    {t.copyLink}
                  </button>
                  <button
                    type="button"
                    onClick={() => loadStats(link.slug)}
                    className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
                  >
                    {t.syncNow}
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
