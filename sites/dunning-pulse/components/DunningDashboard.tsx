"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { RecoveryCampaign } from "@/lib/dunning";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type CampaignStats = {
  totalCampaigns: number;
  recovered: number;
  pending: number;
  totalAtRisk: number;
  totalRecovered: number;
  recoveryRate: number;
};

function statusLabel(status: string, t: ReturnType<typeof getDashboardCopy>) {
  const map: Record<string, string> = {
    pending: t.pending,
    emailed: t.emailed,
    recovered: t.recovered,
    failed: t.failed,
  };
  return map[status] ?? status;
}

function StatsOverview({ stats, locale }: { stats: CampaignStats; locale: Locale }) {
  const t = getDashboardCopy(locale);

  return (
    <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 shadow-xl mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs text-muted uppercase tracking-wide">{t.mrrAtRisk}</p>
          <p className="mt-1 text-xl font-bold text-amber-400">${stats.totalAtRisk.toFixed(2)}</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs text-muted uppercase tracking-wide">{t.mrrRecovered}</p>
          <p className="mt-1 text-xl font-bold text-emerald-400">${stats.totalRecovered.toFixed(2)}</p>
        </div>
        <div className="rounded-xl border border-border bg-background p-4 col-span-2 sm:col-span-1">
          <p className="text-xs text-muted uppercase tracking-wide">{t.recoveryRate}</p>
          <p className="mt-1 text-xl font-bold text-brand-500">{stats.recoveryRate}%</p>
        </div>
      </div>
    </div>
  );
}

export function DunningDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const [amount, setAmount] = useState("29");
  const [failureReason, setFailureReason] = useState("expired_card");
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [createdCampaign, setCreatedCampaign] = useState<RecoveryCampaign | null>(null);
  const [campaigns, setCampaigns] = useState<RecoveryCampaign[]>([]);
  const [stats, setStats] = useState<CampaignStats | null>(null);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    refreshCampaigns();
  }, []);

  async function refreshCampaigns() {
    try {
      const res = await fetch("/api/recoveries");
      const data = await res.json();
      setCampaigns(data.campaigns ?? []);
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
      const res = await fetch("/api/recoveries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerEmail,
          amount: Number(amount),
          failureReason,
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

      setCreatedCampaign(data.campaign);
      if (data.trial) setTrial(data.trial);
      if (data.stats) setStats(data.stats);
      setCampaigns((prev) => [data.campaign, ...prev]);
      setCustomerEmail("");
      setAmount("29");
      setFailureReason("expired_card");
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
    }
  }

  async function handleSendEmail(id: string) {
    setActionLoading(true);
    setError("");
    try {
      const res = await fetch("/api/recoveries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "send", id }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(getApiErrorMessage(data.code, locale));
        return;
      }
      if (data.campaign) {
        setCreatedCampaign(data.campaign);
        setCampaigns((prev) => prev.map((c) => (c.id === id ? data.campaign : c)));
      }
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setActionLoading(false);
    }
  }

  async function handleRecover(id: string) {
    setActionLoading(true);
    try {
      const res = await fetch("/api/recoveries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "recover", id }),
      });
      const data = await res.json();
      if (res.ok) {
        if (data.campaign) {
          setCreatedCampaign(data.campaign);
          setCampaigns((prev) => prev.map((c) => (c.id === id ? data.campaign : c)));
        }
        if (data.stats) setStats(data.stats);
      }
    } catch {
      /* ignore */
    } finally {
      setActionLoading(false);
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

      {stats && stats.totalCampaigns > 0 && <StatsOverview stats={stats} locale={locale} />}

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
          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.amount}</label>
          <input
            type="number"
            min="1"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={t.amountPlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
            required
          />
          <p className="mt-1 text-xs text-muted">{t.amountHint}</p>
          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.failureReason}</label>
          <select
            value={failureReason}
            onChange={(e) => setFailureReason(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {Object.entries(t.failureReasons).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {loading ? t.creating : t.createCampaign}
          </button>
        </form>

        <div>
          {createdCampaign && (
            <div className="rounded-2xl border border-brand-600/30 bg-surface p-6">
              <h3 className="font-semibold text-foreground">{t.createdTitle}</h3>
              <p className="mt-1 text-sm text-muted">{t.createdHint}</p>
              <p className="mt-3 text-sm">
                <span className="text-muted">{createdCampaign.customerEmail}</span>
                <span className="text-muted"> · </span>
                <span className="text-brand-500 font-medium">${createdCampaign.amount}/mo</span>
              </p>
              <h4 className="mt-4 text-sm font-medium text-foreground">{t.emailSequence}</h4>
              <ul className="mt-2 space-y-2">
                {createdCampaign.emails.map((email) => (
                  <li
                    key={email.id}
                    className={`rounded-lg border px-3 py-2 text-sm ${
                      email.sentAt ? "border-emerald-500/30 bg-emerald-500/5" : "border-border"
                    }`}
                  >
                    <span className="text-muted">{t.day} {email.day}: </span>
                    {email.subject}
                    {email.sentAt && <span className="ml-2 text-emerald-400">✓</span>}
                  </li>
                ))}
              </ul>
              {createdCampaign.status !== "recovered" && (
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleSendEmail(createdCampaign.id)}
                    disabled={actionLoading}
                    className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
                  >
                    {actionLoading ? t.syncing : t.sendEmail}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRecover(createdCampaign.id)}
                    disabled={actionLoading}
                    className="rounded-xl border border-dashed border-brand-600/50 px-4 py-2 text-sm text-brand-500 hover:bg-brand-600/10"
                  >
                    {t.simulateRecovery}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {campaigns.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-foreground mb-4">{t.yourCampaigns}</h2>
          <div className="space-y-3">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <div className="min-w-0">
                  <p className="font-medium text-foreground">{campaign.customerEmail}</p>
                  <p className="text-sm text-brand-500 mt-1">
                    ${campaign.amount}/mo · {t.failureReasons[campaign.failureReason]}
                  </p>
                  <p className="text-xs text-muted mt-1">
                    {t.status}: {statusLabel(campaign.status, t)} · {campaign.emails.filter((e) => e.sentAt).length}/{campaign.emails.length} {t.emailsSent}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {campaign.status !== "recovered" && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleSendEmail(campaign.id)}
                        className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
                      >
                        {t.sendEmail}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRecover(campaign.id)}
                        className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-background"
                      >
                        {t.simulateRecovery}
                      </button>
                    </>
                  )}
                  {campaign.status === "recovered" && (
                    <span className="rounded-lg bg-emerald-500/10 text-emerald-400 px-3 py-1.5 text-xs font-medium">
                      ✓ {t.recovered}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
