"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { CreateFlowResult, Flow, TriggerType } from "@/lib/flows";
import { sampleFlows } from "@/lib/flows";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getFlowsCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function FlowDashboard({ locale }: { locale: Locale }) {
  const t = getFlowsCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [triggerType, setTriggerType] = useState<TriggerType>("webhook");
  const [targetUrl, setTargetUrl] = useState("");
  const [schedule, setSchedule] = useState("0 9 * * *");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<CreateFlowResult | null>(null);
  const [history, setHistory] = useState<Flow[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/flows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, triggerType, targetUrl, schedule }),
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

      setResult(data);
      setHistory((h) => [data.flow, ...h].slice(0, 10));
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.createFailed);
    } finally {
      setLoading(false);
    }
  }

  function statusColor(status: string) {
    if (status === "active") return "text-emerald-400";
    if (status === "paused") return "text-amber-400";
    return "text-red-400";
  }

  function statusLabel(status: string) {
    if (status === "active") return t.statusActive;
    if (status === "paused") return t.statusPaused;
    return status.toUpperCase();
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
                {t.freeRemaining(trial.remaining, trial.limit)}
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
            className="mt-3 inline-block rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-1">{t.nameLabel}</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-2">{t.triggerLabel}</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setTriggerType("webhook")}
                className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                  triggerType === "webhook"
                    ? "border-brand-600 bg-brand-600/10 text-brand-500"
                    : "border-border text-muted hover:border-brand-600/50"
                }`}
              >
                {t.triggerWebhook}
              </button>
              <button
                type="button"
                onClick={() => setTriggerType("cron")}
                className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                  triggerType === "cron"
                    ? "border-brand-600 bg-brand-600/10 text-brand-500"
                    : "border-border text-muted hover:border-brand-600/50"
                }`}
              >
                {t.triggerCron}
              </button>
            </div>
          </div>
          {triggerType === "cron" && (
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-1">{t.scheduleLabel}</label>
              <input
                type="text"
                required
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                placeholder={t.schedulePlaceholder}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground font-mono text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              />
              <p className="mt-1 text-xs text-muted">{t.scheduleHint}</p>
            </div>
          )}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-1">{t.targetLabel}</label>
            <input
              type="url"
              required
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              placeholder={t.targetPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
            <p className="mt-1 text-xs text-muted">{t.targetHint}</p>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50 transition-colors"
            >
              {loading ? t.creating : t.createButton}
            </button>
          </div>
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </form>

      {result && (
        <div className="rounded-xl border border-border bg-surface p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg text-foreground">{result.flow.name}</h2>
            <span className="text-sm font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
              {t.resultReady}
            </span>
          </div>
          <dl className="grid gap-3 text-sm mb-4">
            {result.flow.webhookUrl && (
              <div>
                <dt className="text-muted mb-1">{t.webhookUrl}</dt>
                <dd className="text-foreground break-all font-mono text-xs bg-background rounded-lg p-3 border border-border">
                  {result.flow.webhookUrl}
                </dd>
              </div>
            )}
            {result.flow.schedule && (
              <div>
                <dt className="text-muted mb-1">{t.scheduleLabel}</dt>
                <dd className="text-foreground font-mono text-xs">{result.flow.schedule}</dd>
              </div>
            )}
            <div>
              <dt className="text-muted mb-1">{t.integration}</dt>
              <dd>
                <pre className="text-xs text-foreground bg-background rounded-lg p-3 border border-border overflow-x-auto whitespace-pre-wrap">
                  {result.curlSnippet}
                </pre>
              </dd>
            </div>
          </dl>
          <p className="text-xs text-muted">{t.memberNote}</p>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="font-semibold text-foreground mb-4">{t.sessionTitle}</h2>
          {history.length === 0 ? (
            <p className="text-sm text-muted rounded-xl border border-border p-4">{t.emptySession}</p>
          ) : (
            <ul className="space-y-2">
              {history.map((f) => (
                <li
                  key={f.id}
                  className="rounded-lg border border-border bg-surface px-4 py-3 text-sm"
                >
                  <p className="font-medium text-foreground">{f.name}</p>
                  <p className="text-muted text-xs mt-1">
                    {f.triggerType === "webhook" ? t.triggerWebhook : t.triggerCron}
                    {f.schedule ? ` · ${f.schedule}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="font-semibold text-foreground mb-4">{t.exampleTitle}</h2>
          <ul className="space-y-2">
            {sampleFlows.map((f) => (
              <li
                key={f.name}
                className="flex items-center justify-between rounded-lg border border-border bg-surface-muted/30 px-4 py-3 text-sm"
              >
                <div>
                  <p className="font-medium text-foreground">{f.name}</p>
                  <p className="text-muted text-xs">
                    {f.triggerType === "webhook" ? t.triggerWebhook : `${t.triggerCron} · ${f.schedule}`}
                  </p>
                </div>
                <span className={`font-medium shrink-0 ml-2 ${statusColor(f.status)}`}>
                  {statusLabel(f.status)} · {f.lastRun}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">{t.exampleNote}</p>
        </div>
      </div>
    </div>
  );
}
