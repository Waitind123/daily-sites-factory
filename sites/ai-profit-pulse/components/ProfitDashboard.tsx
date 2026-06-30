"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Workspace, ProfitSnapshot } from "@/lib/profit";
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
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function ProfitTable({ snapshot, locale }: { snapshot: ProfitSnapshot; locale: Locale }) {
  const t = getDashboardCopy(locale);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: t.totalRevenue, value: formatUsd(snapshot.totalRevenue), accent: true },
          { label: t.totalAiCost, value: formatUsd(snapshot.totalAiCost), accent: false },
          { label: t.grossProfit, value: formatUsd(snapshot.grossProfit), accent: true },
          { label: t.avgMargin, value: `${snapshot.avgMargin.toFixed(1)}%`, accent: true },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs text-muted uppercase tracking-wide">{item.label}</p>
            <p className={`mt-1 text-xl font-bold ${item.accent ? "text-brand-500" : "text-foreground"}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-brand-600/30 bg-surface overflow-hidden shadow-xl">
        <div className="px-4 py-3 border-b border-border flex justify-between items-center">
          <h3 className="font-semibold text-foreground">{t.customerTable}</h3>
          <span className="text-xs text-muted">
            {snapshot.profitableCustomers} {t.profitable} · {snapshot.unprofitableCustomers} {t.unprofitable}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted text-left">
                <th className="px-4 py-3 font-medium">{t.customer}</th>
                <th className="px-4 py-3 font-medium">{t.revenue}</th>
                <th className="px-4 py-3 font-medium">{t.aiCost}</th>
                <th className="px-4 py-3 font-medium">{t.profit}</th>
                <th className="px-4 py-3 font-medium">{t.margin}</th>
                <th className="px-4 py-3 font-medium hidden sm:table-cell">{t.model}</th>
              </tr>
            </thead>
            <tbody>
              {snapshot.customers.map((c) => (
                <tr key={c.id} className="border-b border-border/50 hover:bg-background/50">
                  <td className="px-4 py-3 font-medium text-foreground">{c.name}</td>
                  <td className="px-4 py-3">{formatUsd(c.revenue)}</td>
                  <td className="px-4 py-3 text-red-400">{formatUsd(c.aiCost)}</td>
                  <td className={`px-4 py-3 font-medium ${c.profit >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {formatUsd(c.profit)}
                  </td>
                  <td className={`px-4 py-3 ${c.margin >= 30 ? "text-green-400" : c.margin >= 0 ? "text-yellow-400" : "text-red-400"}`}>
                    {c.margin.toFixed(1)}%
                  </td>
                  <td className="px-4 py-3 text-muted hidden sm:table-cell">{c.model}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="px-4 py-3 text-xs text-muted text-center border-t border-border">
          {t.syncedAt} {new Date(snapshot.syncedAt).toLocaleString(locale === "zh" ? "zh-CN" : "en-US")}
        </p>
      </div>
    </div>
  );
}

export function ProfitDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [stripeKey, setStripeKey] = useState("");
  const [aiBudget, setAiBudget] = useState("500");
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [active, setActive] = useState<Workspace | null>(null);
  const [snapshot, setSnapshot] = useState<ProfitSnapshot | null>(null);
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/profit")
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
      const res = await fetch("/api/profit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          stripeKey,
          monthlyAiBudget: parseInt(aiBudget, 10) || 500,
        }),
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
      setError(err instanceof Error ? err.message : getApiErrorMessage("PROFIT_SYNC_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  async function handleSync(workspaceId: string) {
    setSyncing(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/profit", {
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
      setError(err instanceof Error ? err.message : getApiErrorMessage("PROFIT_SYNC_FAILED", locale));
    } finally {
      setSyncing(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeAnalyses} {trial.remaining}/{trial.limit}
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
          <div className="grid sm:grid-cols-2 gap-4">
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
            <div>
              <label className="block text-sm font-medium mb-1">{t.aiBudget}</label>
              <input
                type="number"
                value={aiBudget}
                onChange={(e) => setAiBudget(e.target.value)}
                placeholder="500"
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              />
              <p className="mt-1 text-xs text-muted">{t.aiBudgetHint}</p>
            </div>
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
            {syncing ? t.syncing : t.analyzeNow}
          </button>
        </div>
      )}

      {snapshot && <ProfitTable snapshot={snapshot} locale={locale} />}

      {workspaces.length > 0 && (
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
                      ? `${w.snapshot.avgMargin.toFixed(1)}% ${t.avgMarginLabel}`
                      : t.notSynced}
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
                  {syncing ? t.syncing : t.analyzeNow}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
