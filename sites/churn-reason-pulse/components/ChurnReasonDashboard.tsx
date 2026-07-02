"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { CancellationRecord, ChurnReasonCategory } from "@/lib/churn-reason";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type ChurnStats = {
  totalCancellations: number;
  totalMrrLost: number;
  topReason: ChurnReasonCategory | null;
  breakdown: { reason: ChurnReasonCategory; count: number; percent: number }[];
};

export function ChurnReasonDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const [mrrLost, setMrrLost] = useState("29");
  const [reason, setReason] = useState<ChurnReasonCategory>("price");
  const [freeText, setFreeText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [records, setRecords] = useState<CancellationRecord[]>([]);
  const [stats, setStats] = useState<ChurnStats | null>(null);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    refreshRecords();
  }, []);

  async function refreshRecords() {
    try {
      const res = await fetch("/api/cancellations");
      const data = await res.json();
      setRecords(data.records ?? []);
      setStats(data.stats ?? null);
    } catch {
      /* ignore */
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/cancellations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerEmail,
          mrrLost: Number(mrrLost),
          reason,
          freeText: freeText || undefined,
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

      if (data.trial) setTrial(data.trial);
      if (data.stats) setStats(data.stats);
      setRecords((prev) => [data.record, ...prev]);
      setCustomerEmail("");
      setMrrLost("29");
      setReason("price");
      setFreeText("");
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
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

      {stats && stats.totalCancellations > 0 && (
        <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 shadow-xl mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl border border-border bg-background p-4">
              <p className="text-xs text-muted uppercase tracking-wide">{t.totalCancellations}</p>
              <p className="mt-1 text-xl font-bold text-foreground">{stats.totalCancellations}</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-4">
              <p className="text-xs text-muted uppercase tracking-wide">{t.mrrLost}</p>
              <p className="mt-1 text-xl font-bold text-amber-400">${stats.totalMrrLost.toFixed(2)}</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-4 col-span-2 sm:col-span-1">
              <p className="text-xs text-muted uppercase tracking-wide">{t.topReason}</p>
              <p className="mt-1 text-xl font-bold text-brand-500">
                {stats.topReason ? t.churnReasons[stats.topReason] : "—"}
              </p>
            </div>
          </div>
          {stats.breakdown.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">{t.breakdownTitle}</h3>
              <div className="space-y-2">
                {stats.breakdown.map((item) => (
                  <div key={item.reason} className="flex items-center gap-3">
                    <span className="text-sm text-muted w-32 shrink-0">{t.churnReasons[item.reason]}</span>
                    <div className="flex-1 h-2 rounded-full bg-background overflow-hidden">
                      <div
                        className="h-full rounded-full bg-brand-600"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                    <span className="text-sm text-foreground w-16 text-right">
                      {item.count} ({item.percent}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

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
          <label className="block text-sm font-medium text-foreground mb-1">{t.customerEmail}</label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder={t.customerEmailPlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
            required
          />
          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.mrrLostLabel}</label>
          <input
            type="number"
            min="1"
            step="0.01"
            value={mrrLost}
            onChange={(e) => setMrrLost(e.target.value)}
            placeholder={t.mrrPlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
            required
          />
          <p className="mt-1 text-xs text-muted">{t.mrrHint}</p>
          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.churnReason}</label>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value as ChurnReasonCategory)}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {Object.entries(t.churnReasons).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.freeText}</label>
          <textarea
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
            placeholder={t.freeTextPlaceholder}
            rows={3}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
          />
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {loading ? t.creating : t.logCancellation}
          </button>
        </form>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-semibold text-foreground">{t.tipsTitle}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {t.tips.map((tip, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-brand-500 font-medium">{String(i + 1).padStart(2, "0")}</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {records.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-foreground mb-4">{t.yourRecords}</h2>
          <div className="space-y-3">
            {records.map((record) => (
              <div
                key={record.id}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">{record.customerEmail}</p>
                    <p className="text-sm text-brand-500 mt-1">
                      ${record.mrrLost}/mo · {t.churnReasons[record.reason]}
                    </p>
                    {record.freeText && (
                      <p className="text-sm text-muted mt-2 italic">&ldquo;{record.freeText}&rdquo;</p>
                    )}
                  </div>
                  <p className="text-xs text-muted shrink-0">
                    {new Date(record.createdAt).toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
