"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { CronJob, CreateJobResult } from "@/lib/cron";
import { sampleJobs } from "@/lib/cron";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function CronDashboard() {
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [schedule, setSchedule] = useState("*/5 * * * *");
  const [graceMinutes, setGraceMinutes] = useState(10);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<CreateJobResult | null>(null);
  const [history, setHistory] = useState<CronJob[]>([]);

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
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, schedule, graceMinutes }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((t) => (t ? { ...t, remaining: 0, canUse: false } : t));
          return;
        }
        throw new Error(data.error || "Failed to create job");
      }

      setResult(data);
      setHistory((h) => [data.job, ...h].slice(0, 10));
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create job");
    } finally {
      setLoading(false);
    }
  }

  function statusColor(status: string) {
    if (status === "healthy") return "text-emerald-400";
    if (status === "late") return "text-amber-400";
    return "text-red-400";
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Cron Jobs</h1>
          <p className="mt-1 text-muted text-sm">
            Create a monitor, get a ping URL. Add one curl to your cron script.
          </p>
        </div>
        {trial && (
          <div className="rounded-lg border border-border bg-surface px-4 py-2 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">✓ Member · unlimited jobs</span>
            ) : (
              <span className="text-muted">
                Free jobs:{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </div>
        )}
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-brand-600/50 bg-brand-600/10 p-5">
          <p className="font-semibold text-foreground">Free trial used up</p>
          <p className="mt-1 text-sm text-muted">
            Subscribe for unlimited cron monitors, missed-run alerts & Slack notifications.
          </p>
          <Link
            href="/join"
            className="mt-3 inline-block rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Subscribe · $9.9/mo
          </Link>
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-1">Job name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nightly database backup"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Cron schedule</label>
            <input
              type="text"
              required
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              placeholder="*/5 * * * *"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground font-mono text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
            <p className="mt-1 text-xs text-muted">minute hour day month weekday</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Grace period (minutes)
            </label>
            <input
              type="number"
              min={1}
              max={1440}
              value={graceMinutes}
              onChange={(e) => setGraceMinutes(Number(e.target.value))}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-600"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50 transition-colors"
            >
              {loading ? "Creating…" : "Create monitor & get ping URL"}
            </button>
          </div>
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </form>

      {result && (
        <div className="rounded-xl border border-border bg-surface p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg text-foreground">{result.job.name}</h2>
            <span className="text-sm font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
              READY
            </span>
          </div>
          <dl className="grid gap-3 text-sm mb-4">
            <div>
              <dt className="text-muted mb-1">Ping URL</dt>
              <dd className="text-foreground break-all font-mono text-xs bg-background rounded-lg p-3 border border-border">
                {result.job.pingUrl}
              </dd>
            </div>
            <div>
              <dt className="text-muted mb-1">Integration (add to end of your script)</dt>
              <dd>
                <pre className="text-xs text-foreground bg-background rounded-lg p-3 border border-border overflow-x-auto whitespace-pre-wrap">
                  {result.curlSnippet}
                </pre>
              </dd>
            </div>
          </dl>
          <p className="text-xs text-muted">
            Members get 24/7 missed-run detection + Slack alerts when pings stop arriving.
          </p>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="font-semibold text-foreground mb-4">Your session</h2>
          {history.length === 0 ? (
            <p className="text-sm text-muted rounded-xl border border-border p-4">
              Create a job above to get your ping URL.
            </p>
          ) : (
            <ul className="space-y-2">
              {history.map((j) => (
                <li
                  key={j.id}
                  className="rounded-lg border border-border bg-surface px-4 py-3 text-sm"
                >
                  <p className="font-medium text-foreground">{j.name}</p>
                  <p className="text-muted font-mono text-xs mt-1">{j.schedule}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="font-semibold text-foreground mb-4">Example jobs (Pro)</h2>
          <ul className="space-y-2">
            {sampleJobs.map((j) => (
              <li
                key={j.name}
                className="flex items-center justify-between rounded-lg border border-border bg-surface-muted/30 px-4 py-3 text-sm"
              >
                <div>
                  <p className="font-medium text-foreground">{j.name}</p>
                  <p className="text-muted font-mono text-xs">{j.schedule}</p>
                </div>
                <span className={`font-medium shrink-0 ml-2 ${statusColor(j.status)}`}>
                  {j.status.toUpperCase()} · {j.lastPing}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">
            Members save jobs for continuous monitoring + escalating alerts.
          </p>
        </div>
      </div>
    </div>
  );
}
