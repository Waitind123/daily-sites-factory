"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Dashboard, MetricSnapshot } from "@/lib/metrics";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function MetricsCard({ metrics, locale }: { metrics: MetricSnapshot; locale: Locale }) {
  const t = getDashboardCopy(locale);
  const items = [
    { label: t.mrr, value: formatUsd(metrics.mrr), accent: true },
    { label: t.arr, value: formatUsd(metrics.arr), accent: true },
    { label: t.churn, value: `${metrics.churnRate.toFixed(1)}%`, accent: false },
    { label: t.customers, value: String(metrics.activeCustomers), accent: false },
    { label: t.newCustomers, value: `+${metrics.newCustomers}`, accent: false },
    { label: t.churned, value: `-${metrics.churnedCustomers}`, accent: false },
    { label: t.expansion, value: `+${formatUsd(metrics.expansionMrr)}`, accent: false },
    { label: t.contraction, value: `-${formatUsd(metrics.contractionMrr)}`, accent: false },
  ];

  return (
    <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 shadow-xl">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.label} className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs text-muted uppercase tracking-wide">{item.label}</p>
            <p className={`mt-1 text-xl font-bold ${item.accent ? "text-brand-500" : "text-foreground"}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted text-center">
        {t.syncedAt} {new Date(metrics.syncedAt).toLocaleString(locale === "zh" ? "zh-CN" : "en-US")}
      </p>
    </div>
  );
}

export function MetricsDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [stripeKey, setStripeKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [active, setActive] = useState<Dashboard | null>(null);
  const [metrics, setMetrics] = useState<MetricSnapshot | null>(null);
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/metrics")
      .then((r) => r.json())
      .then((d) => setDashboards(d.dashboards ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, stripeKey }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(getApiErrorMessage(data.code, locale));
      }

      setActive(data.dashboard);
      setDashboards((list) => [data.dashboard, ...list]);
      setName("");
      setStripeKey("");
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("METRICS_SYNC_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  async function handleSync(dashboardId: string) {
    setSyncing(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "sync", dashboardId }),
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

      setMetrics(data.metrics);
      if (data.trial) setTrial(data.trial);
      setDashboards((list) =>
        list.map((d) =>
          d.id === dashboardId ? { ...d, metrics: data.metrics, lastSync: data.metrics.syncedAt } : d
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("METRICS_SYNC_FAILED", locale));
    } finally {
      setSyncing(false);
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
              <span className="text-brand-500 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeSyncs} {trial.remaining}/{trial.limit}
              </span>
            )}
          </p>
        )}
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-brand-600/50 bg-brand-100/10 p-6 text-center">
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

      {error && (
        <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-2xl border border-border bg-surface p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">{t.createTitle}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t.productName}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.productNamePlaceholder}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t.stripeKey}</label>
            <input
              type="password"
              value={stripeKey}
              onChange={(e) => setStripeKey(e.target.value)}
              placeholder={t.stripeKeyPlaceholder}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
            <p className="mt-1 text-xs text-muted">{t.stripeKeyHint}</p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.creating : t.createDashboard}
          </button>
        </div>
      </form>

      {active && !metrics && (
        <div className="mb-8 rounded-xl border border-brand-600/30 bg-brand-100/5 p-6 text-center">
          <p className="font-medium text-foreground">{t.createdTitle}</p>
          <p className="mt-2 text-sm text-muted">{t.createdHint}</p>
          <button
            onClick={() => handleSync(active.id)}
            disabled={syncing}
            className="mt-4 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {syncing ? t.syncing : t.syncNow}
          </button>
        </div>
      )}

      {metrics && <MetricsCard metrics={metrics} locale={locale} />}

      {dashboards.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">{t.yourDashboards}</h2>
          <div className="space-y-3">
            {dashboards.map((d) => (
              <div
                key={d.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <div>
                  <p className="font-medium text-foreground">{d.name}</p>
                  <p className="text-xs text-muted">
                    {d.stripeKeyHint} · {d.metrics ? formatUsd(d.metrics.mrr) + " MRR" : t.notSynced}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActive(d);
                    handleSync(d.id);
                  }}
                  disabled={syncing}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background disabled:opacity-50"
                >
                  {syncing ? t.syncing : t.syncNow}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
