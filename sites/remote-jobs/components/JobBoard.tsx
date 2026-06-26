"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getJobsCopy } from "@/lib/copy-app";
import { jobs as allJobs, type Job } from "@/lib/data";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type JobDetail = Job & { unlocked: boolean };

const TAGS = ["React", "Go", "Remote", "Product", "Design"];

export function JobBoard({ locale }: { locale: Locale }) {
  const t = getJobsCopy(locale);
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [selected, setSelected] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  const filtered = allJobs.filter((job) => {
    const matchTag = !tag || job.tags.some((item) => item.toLowerCase().includes(tag.toLowerCase()));
    if (!query.trim()) return matchTag;
    const haystack = `${job.title} ${job.company} ${job.tags.join(" ")}`.toLowerCase();
    return matchTag && haystack.includes(query.toLowerCase());
  });

  async function unlockJob(jobId: string) {
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/jobs/view", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId }),
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

      setSelected(data.job);
      if (data.trial) {
        setTrial(data.trial);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : getApiErrorMessage(undefined, locale));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <p className="text-muted mt-1">
            {filtered.length} {t.openCount}
          </p>
        </div>
        {trial && (
          <div className="text-sm rounded-lg bg-brand-600/10 text-brand-500 px-4 py-2 font-medium">
            {trial.isMember
              ? t.memberBadge
              : `${t.freeViews} ${trial.remaining}/${trial.limit}`}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="search"
          placeholder={t.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        <div className="flex flex-wrap gap-2">
          {TAGS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTag(tag === item ? "" : item)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                tag === item
                  ? "bg-brand-600 text-white"
                  : "bg-surface-muted text-muted hover:bg-stone-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-amber-900">{t.paywallTitle}</p>
            <p className="text-sm text-amber-700 mt-1">{t.paywallBody}</p>
          </div>
          <Link
            href="/join"
            className="shrink-0 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">{error}</p>
      )}

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {filtered.map((job) => (
            <button
              key={job.id}
              type="button"
              onClick={() => unlockJob(job.id)}
              disabled={loading}
              className={`w-full text-left rounded-xl border p-4 transition-colors hover:border-brand-300 hover:bg-brand-600/10/30 ${
                selected?.id === job.id ? "border-brand-600 bg-brand-600/10" : "border-border bg-surface"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{job.logo}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">{job.title}</p>
                  <p className="text-sm text-muted">{job.company}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {job.tags.slice(0, 3).map((item) => (
                      <span key={item} className="text-xs bg-surface-muted text-muted px-2 py-0.5 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-brand-500 mt-2">{job.salary}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3">
          {selected ? (
            <div className="rounded-xl border border-border bg-surface p-6 sticky top-24">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{selected.logo}</span>
                <div>
                  <h2 className="text-xl font-bold">{selected.title}</h2>
                  <p className="text-muted">
                    {selected.company} · {selected.location}
                  </p>
                  <p className="text-brand-500 font-semibold mt-1">{selected.salary}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.description}</h3>
                  <p className="text-muted">{selected.description}</p>
                </div>
                {selected.requirements && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t.requirements}</h3>
                    <ul className="list-disc list-inside text-muted space-y-1">
                      {selected.requirements.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {selected.applyUrl && (
                <a
                  href={selected.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 transition-colors"
                >
                  {t.applyNow}
                </a>
              )}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-background p-12 text-center text-muted">
              <p className="text-4xl mb-3">👈</p>
              <p>{t.selectJob}</p>
              <p className="text-sm mt-1">{t.freeTrialNote}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
