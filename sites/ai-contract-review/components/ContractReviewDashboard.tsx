"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { ContractRecord } from "@/lib/contract-review";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type ContractStats = {
  totalReviews: number;
  avgRiskScore: number;
  totalHighRisks: number;
};

function riskColor(score: number): string {
  if (score >= 70) return "text-red-400";
  if (score >= 40) return "text-amber-400";
  return "text-green-400";
}

function riskBadge(risk: string): string {
  if (risk === "high") return "bg-red-500/20 text-red-400";
  if (risk === "medium") return "bg-amber-500/20 text-amber-400";
  return "bg-green-500/20 text-green-400";
}

export function ContractReviewDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [title, setTitle] = useState("");
  const [contractText, setContractText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [records, setRecords] = useState<ContractRecord[]>([]);
  const [stats, setStats] = useState<ContractStats | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    refreshRecords();
  }, []);

  async function refreshRecords() {
    try {
      const res = await fetch("/api/contracts");
      const data = await res.json();
      setRecords(data.records ?? []);
      setStats(data.stats ?? null);
    } catch {
      /* ignore */
    }
  }

  async function handleReview(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/contracts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, contractText }),
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
      setExpandedId(data.record.id);
      setTitle("");
      setContractText("");
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
    }
  }

  async function copyEmail(record: ContractRecord) {
    await navigator.clipboard.writeText(record.negotiationEmail);
    setCopiedId(record.id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">{t.title}</h1>
        <p className="text-muted mt-2">{t.subtitle}</p>
      </div>

      {trial && (
        <div className="mb-6 rounded-xl border border-border bg-surface p-4 flex flex-wrap items-center justify-between gap-3">
          {trial.isMember ? (
            <span className="text-sm font-medium text-brand-500">{t.memberBadge}</span>
          ) : (
            <span className="text-sm text-muted">
              {t.freeSyncs}{" "}
              <strong className="text-foreground">
                {trial.remaining}/{trial.limit}
              </strong>
            </span>
          )}
          {!trial.isMember && (
            <Link
              href="/join"
              className="text-sm text-brand-500 hover:underline font-medium"
            >
              {t.paywallCta}
            </Link>
          )}
        </div>
      )}

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-brand-600/40 bg-brand-600/10 p-6">
          <h3 className="font-semibold text-lg">{t.paywallTitle}</h3>
          <p className="text-muted text-sm mt-2">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form onSubmit={handleReview} className="rounded-2xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">{t.createTitle}</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t.titleLabel}</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t.titlePlaceholder}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t.contractLabel}</label>
            <textarea
              value={contractText}
              onChange={(e) => setContractText(e.target.value)}
              placeholder={t.contractPlaceholder}
              rows={10}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono"
              required
            />
            <p className="text-xs text-muted mt-1">{t.contractHint}</p>
          </div>
        </div>

        {error && <p className="text-red-400 text-sm mt-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
        >
          {loading ? t.creating : t.reviewContract}
        </button>
      </form>

      {stats && stats.totalReviews > 0 && (
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-2xl font-bold text-brand-500">{stats.totalReviews}</p>
            <p className="text-xs text-muted mt-1">{t.totalReviews}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className={`text-2xl font-bold ${riskColor(stats.avgRiskScore)}`}>
              {stats.avgRiskScore}
            </p>
            <p className="text-xs text-muted mt-1">{t.avgRisk}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-2xl font-bold text-red-400">{stats.totalHighRisks}</p>
            <p className="text-xs text-muted mt-1">{t.totalHigh}</p>
          </div>
        </div>
      )}

      {records.length > 0 && (
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-4">{t.yourRecords}</h2>
          <div className="space-y-3">
            {records.map((r) => (
              <div key={r.id} className="rounded-xl border border-border bg-surface overflow-hidden">
                <button
                  type="button"
                  onClick={() => setExpandedId(expandedId === r.id ? null : r.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-background/50"
                >
                  <div>
                    <p className="font-medium">{r.title}</p>
                    <p className="text-xs text-muted mt-1">
                      {t.riskScore}:{" "}
                      <span className={riskColor(r.riskScore)}>{r.riskScore}/100</span>
                      {" · "}
                      {r.highCount} high · {r.findings.length} flagged
                    </p>
                  </div>
                  <span className="text-muted text-sm">{expandedId === r.id ? "▲" : "▼"}</span>
                </button>
                {expandedId === r.id && (
                  <div className="border-t border-border px-5 py-4 space-y-4">
                    {r.findings.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-2">{t.findingsTitle}</p>
                        {r.findings.map((f, i) => (
                          <div key={i} className="rounded-lg bg-background border border-border p-3 mb-2">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${riskBadge(f.risk)}`}>
                                {f.risk.toUpperCase()}
                              </span>
                              <span className="text-xs text-muted">{f.category}</span>
                            </div>
                            <p className="text-xs text-muted">{f.clause}</p>
                            <p className="text-sm mt-2">{f.suggestion}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {r.missing.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-2">{t.missingTitle}</p>
                        {r.missing.map((m, i) => (
                          <div key={i} className="rounded-lg bg-background border border-border p-3 mb-2">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${riskBadge(m.importance)}`}>
                                {m.importance.toUpperCase()}
                              </span>
                              <span className="text-sm font-medium">{m.name}</span>
                            </div>
                            <p className="text-sm text-muted">{m.suggestion}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium">{t.emailTitle}</p>
                        <button
                          type="button"
                          onClick={() => copyEmail(r)}
                          className="text-xs text-brand-500 hover:underline"
                        >
                          {copiedId === r.id ? t.copied : t.copyEmail}
                        </button>
                      </div>
                      <pre className="rounded-lg bg-background border border-border p-3 text-xs whitespace-pre-wrap font-mono">
                        {r.negotiationEmail}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="font-semibold mb-3">{t.tipsTitle}</h3>
        <ul className="space-y-2">
          {t.tips.map((tip) => (
            <li key={tip} className="text-sm text-muted flex gap-2">
              <span className="text-brand-500">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
