"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { CheckResult } from "@/lib/monitor";
import { sampleMonitors } from "@/lib/monitor";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getMonitorCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function MonitorDashboard({ locale }: { locale: Locale }) {
  const t = getMonitorCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [url, setUrl] = useState("https://");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [history, setHistory] = useState<CheckResult[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, name: name || undefined }),
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

      setResult(data.check);
      setHistory((h) => [data.check, ...h].slice(0, 10));
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.checkFailed);
    } finally {
      setLoading(false);
    }
  }

  function statusColor(ok: boolean) {
    return ok ? "text-emerald-400" : "text-red-400";
  }

  function statusBadge(ok: boolean) {
    return ok ? t.statusUp : t.statusDown;
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

      <form onSubmit={handleCheck} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-1">{t.urlLabel}</label>
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={t.urlPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.nameLabel}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50 transition-colors"
            >
              {loading ? t.checking : t.checkNow}
            </button>
          </div>
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </form>

      {result && (
        <div className="rounded-xl border border-border bg-surface p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg text-foreground">{t.latestResult}</h2>
            <span
              className={`text-sm font-bold px-3 py-1 rounded-full ${
                result.ok ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
              }`}
            >
              {statusBadge(result.ok)}
            </span>
          </div>
          <dl className="grid sm:grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-muted">{t.urlField}</dt>
              <dd className="text-foreground break-all">{result.url}</dd>
            </div>
            <div>
              <dt className="text-muted">{t.httpStatus}</dt>
              <dd className={statusColor(result.ok)}>{result.status || "—"}</dd>
            </div>
            <div>
              <dt className="text-muted">{t.latency}</dt>
              <dd className="text-foreground">
                {result.latencyMs} {t.ms}
              </dd>
            </div>
            <div>
              <dt className="text-muted">{t.checkedAt}</dt>
              <dd className="text-foreground">{new Date(result.checkedAt).toLocaleString()}</dd>
            </div>
            {result.error && (
              <div className="sm:col-span-2">
                <dt className="text-muted">{t.errorField}</dt>
                <dd className="text-red-400">{result.error}</dd>
              </div>
            )}
          </dl>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="font-semibold text-foreground mb-4">{t.sessionHistory}</h2>
          {history.length === 0 ? (
            <p className="text-sm text-muted rounded-xl border border-border p-4">{t.emptyHistory}</p>
          ) : (
            <ul className="space-y-2">
              {history.map((h, i) => (
                <li
                  key={`${h.checkedAt}-${i}`}
                  className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-sm"
                >
                  <span className="truncate text-foreground mr-2">{h.url}</span>
                  <span className={`font-medium shrink-0 ${statusColor(h.ok)}`}>
                    {h.status || t.err} · {h.latencyMs}
                    {t.ms}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="font-semibold text-foreground mb-4">{t.exampleMonitors}</h2>
          <ul className="space-y-2">
            {sampleMonitors.map((m) => (
              <li
                key={m.url}
                className="flex items-center justify-between rounded-lg border border-border bg-surface-muted/30 px-4 py-3 text-sm"
              >
                <div>
                  <p className="font-medium text-foreground">{m.name}</p>
                  <p className="text-muted text-xs truncate">{m.url}</p>
                </div>
                <span className="text-emerald-400 font-medium shrink-0 ml-2">
                  {t.statusUp} · {m.latency}
                  {t.ms}
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
