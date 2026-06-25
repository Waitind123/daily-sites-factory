"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { CheckResult } from "@/lib/monitor";
import { sampleMonitors } from "@/lib/monitor";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function MonitorDashboard() {
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
          setTrial((t) => (t ? { ...t, remaining: 0, canUse: false } : t));
          return;
        }
        throw new Error(data.error || "Check failed");
      }

      setResult(data.check);
      setHistory((h) => [data.check, ...h].slice(0, 10));
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Check failed");
    } finally {
      setLoading(false);
    }
  }

  function statusColor(ok: boolean) {
    return ok ? "text-emerald-400" : "text-red-400";
  }

  function statusBadge(ok: boolean) {
    return ok ? "UP" : "DOWN";
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">URL Monitor</h1>
          <p className="mt-1 text-muted text-sm">
            Run instant HTTP checks. Members get scheduled 1-min monitoring + alerts.
          </p>
        </div>
        {trial && (
          <div className="rounded-lg border border-border bg-surface px-4 py-2 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">✓ Member · unlimited checks</span>
            ) : (
              <span className="text-muted">
                Free checks:{" "}
                <strong className="text-foreground">{trial.remaining}/{trial.limit}</strong>
              </span>
            )}
          </div>
        )}
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-brand-600/50 bg-brand-600/10 p-5">
          <p className="font-semibold text-foreground">Free trial used up</p>
          <p className="mt-1 text-sm text-muted">
            Subscribe for unlimited monitors, 1-min checks, Slack alerts & status pages.
          </p>
          <Link
            href="/join"
            className="mt-3 inline-block rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Subscribe · $9.9/mo
          </Link>
        </div>
      )}

      <form onSubmit={handleCheck} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-1">URL to monitor</label>
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://your-app.vercel.app"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Label (optional)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="API health"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50 transition-colors"
            >
              {loading ? "Checking…" : "Check now"}
            </button>
          </div>
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </form>

      {result && (
        <div className="rounded-xl border border-border bg-surface p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg text-foreground">Latest result</h2>
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
              <dt className="text-muted">URL</dt>
              <dd className="text-foreground break-all">{result.url}</dd>
            </div>
            <div>
              <dt className="text-muted">HTTP status</dt>
              <dd className={statusColor(result.ok)}>{result.status || "—"}</dd>
            </div>
            <div>
              <dt className="text-muted">Latency</dt>
              <dd className="text-foreground">{result.latencyMs} ms</dd>
            </div>
            <div>
              <dt className="text-muted">Checked at</dt>
              <dd className="text-foreground">{new Date(result.checkedAt).toLocaleString()}</dd>
            </div>
            {result.error && (
              <div className="sm:col-span-2">
                <dt className="text-muted">Error</dt>
                <dd className="text-red-400">{result.error}</dd>
              </div>
            )}
          </dl>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="font-semibold text-foreground mb-4">Your session history</h2>
          {history.length === 0 ? (
            <p className="text-sm text-muted rounded-xl border border-border p-4">
              Run a check above to see results here.
            </p>
          ) : (
            <ul className="space-y-2">
              {history.map((h, i) => (
                <li
                  key={`${h.checkedAt}-${i}`}
                  className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-sm"
                >
                  <span className="truncate text-foreground mr-2">{h.url}</span>
                  <span className={`font-medium shrink-0 ${statusColor(h.ok)}`}>
                    {h.status || "ERR"} · {h.latencyMs}ms
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="font-semibold text-foreground mb-4">Example monitors (Pro)</h2>
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
                  UP · {m.latency}ms
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">
            Members save monitors for 24/7 scheduled checks + Slack alerts.
          </p>
        </div>
      </div>
    </div>
  );
}
