"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Workspace, HealthSnapshot, CustomerHealth, RiskLevel } from "@/lib/health";
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

function riskColor(level: RiskLevel): string {
  if (level === "healthy") return "text-emerald-400";
  if (level === "at-risk") return "text-amber-400";
  return "text-red-400";
}

function riskBg(level: RiskLevel): string {
  if (level === "healthy") return "bg-emerald-500/10 border-emerald-500/30";
  if (level === "at-risk") return "bg-amber-500/10 border-amber-500/30";
  return "bg-red-500/10 border-red-500/30";
}

function HealthOverview({ snapshot, locale }: { snapshot: HealthSnapshot; locale: Locale }) {
  const t = getDashboardCopy(locale);
  const items = [
    { label: t.avgScore, value: `${snapshot.avgHealthScore}`, accent: true },
    { label: t.healthy, value: String(snapshot.healthyCount), accent: false },
    { label: t.atRisk, value: String(snapshot.atRiskCount), accent: false },
    { label: t.critical, value: String(snapshot.criticalCount), accent: false },
    { label: t.churnRisk, value: `${snapshot.churnProbability}%`, accent: true },
  ];

  return (
    <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 shadow-xl mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
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
        {t.syncedAt} {new Date(snapshot.syncedAt).toLocaleString(locale === "zh" ? "zh-CN" : "en-US")}
      </p>
    </div>
  );
}

function CustomerRow({ customer, locale }: { customer: CustomerHealth; locale: Locale }) {
  const t = getDashboardCopy(locale);
  const riskLabel =
    customer.riskLevel === "healthy"
      ? t.riskHealthy
      : customer.riskLevel === "at-risk"
        ? t.riskAtRisk
        : t.riskCritical;

  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border p-4 ${riskBg(customer.riskLevel)}`}>
      <div className="min-w-0">
        <p className="font-medium text-foreground truncate">{customer.name}</p>
        <p className="text-xs text-muted truncate">{customer.email}</p>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div className="text-center">
          <p className="text-xs text-muted">{t.healthScore}</p>
          <p className={`font-bold ${riskColor(customer.riskLevel)}`}>{customer.healthScore}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted">{t.mrr}</p>
          <p className="font-medium">{formatUsd(customer.mrr)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted">{t.inactiveDays}</p>
          <p className="font-medium">{customer.daysSinceActive}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${riskColor(customer.riskLevel)}`}>
          {riskLabel}
        </span>
      </div>
    </div>
  );
}

export function HealthDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [stripeKey, setStripeKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [active, setActive] = useState<Workspace | null>(null);
  const [snapshot, setSnapshot] = useState<HealthSnapshot | null>(null);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/health")
      .then((r) => r.json())
      .then((d) => setWorkspaces(d.workspaces ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/health", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, stripeKey }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(getApiErrorMessage(data.code, locale));
      }

      setActive(data.workspace);
      setWorkspaces((list) => [data.workspace, ...list]);
      setName("");
      setStripeKey("");
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("HEALTH_SYNC_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  async function handleSync(workspaceId: string) {
    setSyncing(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/health", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "sync", workspaceId }),
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

      setSnapshot(data.snapshot);
      if (data.trial) setTrial(data.trial);
      setWorkspaces((list) =>
        list.map((w) =>
          w.id === workspaceId
            ? { ...w, snapshot: data.snapshot, lastSync: data.snapshot.syncedAt }
            : w
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("HEALTH_SYNC_FAILED", locale));
    } finally {
      setSyncing(false);
    }
  }

  const atRiskCustomers = snapshot?.customers.filter((c) => c.riskLevel !== "healthy") ?? [];

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
                {t.freeScans} {trial.remaining}/{trial.limit}
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
            {loading ? t.creating : t.createWorkspace}
          </button>
        </div>
      </form>

      {active && !snapshot && (
        <div className="mb-8 rounded-xl border border-brand-600/30 bg-brand-100/5 p-6 text-center">
          <p className="font-medium text-foreground">{t.createdTitle}</p>
          <p className="mt-2 text-sm text-muted">{t.createdHint}</p>
          <button
            onClick={() => handleSync(active.id)}
            disabled={syncing}
            className="mt-4 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {syncing ? t.scanning : t.scanNow}
          </button>
        </div>
      )}

      {snapshot && (
        <>
          <HealthOverview snapshot={snapshot} locale={locale} />
          {atRiskCustomers.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">{t.churnAlerts}</h2>
              <div className="space-y-3">
                {atRiskCustomers.map((c) => (
                  <CustomerRow key={c.id} customer={c} locale={locale} />
                ))}
              </div>
            </div>
          )}
          <div>
            <h2 className="text-lg font-semibold mb-4">{t.allCustomers}</h2>
            <div className="space-y-3">
              {snapshot.customers.map((c) => (
                <CustomerRow key={c.id} customer={c} locale={locale} />
              ))}
            </div>
          </div>
        </>
      )}

      {workspaces.length > 0 && !snapshot && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">{t.yourWorkspaces}</h2>
          <div className="space-y-3">
            {workspaces.map((w) => (
              <div
                key={w.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <div>
                  <p className="font-medium text-foreground">{w.name}</p>
                  <p className="text-xs text-muted">
                    {w.stripeKeyHint} ·{" "}
                    {w.snapshot
                      ? `${t.avgScore} ${w.snapshot.avgHealthScore}`
                      : t.notScanned}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActive(w);
                    handleSync(w.id);
                  }}
                  disabled={syncing}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background disabled:opacity-50"
                >
                  {syncing ? t.scanning : t.scanNow}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
