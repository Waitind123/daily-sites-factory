"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Experiment } from "@/lib/experiments";
import type { Locale } from "@/lib/i18n-shared";
import {
  getApiErrorMessage,
  getExperimentsCopy,
  getSampleStats,
} from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function ExperimentDashboard({ locale }: { locale: Locale }) {
  const t = getExperimentsCopy(locale);
  const sampleStats = getSampleStats(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [variantA, setVariantA] = useState("");
  const [variantB, setVariantB] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<Experiment | null>(null);
  const [experiments, setExperiments] = useState<Experiment[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/experiments")
      .then((r) => r.json())
      .then((d) => setExperiments(d.experiments ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setCreated(null);

    try {
      const res = await fetch("/api/experiments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, pageUrl, variantA, variantB }),
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

      setCreated(data.experiment);
      setExperiments((list) => [data.experiment, ...list]);
      setName("");
      setPageUrl("");
      setVariantA("");
      setVariantB("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : getApiErrorMessage("EXPERIMENT_CREATE_FAILED", locale)
      );
    } finally {
      setLoading(false);
    }
  }

  const snippet = created
    ? `<script src="${typeof window !== "undefined" ? window.location.origin : ""}/api/snippet/${created.slug}"></script>`
    : "";

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
                {t.freeExperiments}{" "}
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
          <p className="font-semibold text-foreground">{t.paywallTitle}</p>
          <p className="mt-1 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">{t.formTitle}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.expName}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.expNamePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.pageUrl}</label>
            <input
              type="url"
              value={pageUrl}
              onChange={(e) => setPageUrl(e.target.value)}
              placeholder={t.pageUrlPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.variantA}</label>
              <input
                type="text"
                value={variantA}
                onChange={(e) => setVariantA(e.target.value)}
                placeholder={t.variantAPlaceholder}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.variantB}</label>
              <input
                type="text"
                value={variantB}
                onChange={(e) => setVariantB(e.target.value)}
                placeholder={t.variantBPlaceholder}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
                required
              />
            </div>
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.creating : t.createExperiment}
          </button>
        </div>
      </form>

      {created && (
        <div className="mb-8 rounded-xl border border-emerald-600/50 bg-emerald-600/10 p-5">
          <p className="font-semibold text-foreground">{t.createdTitle}</p>
          <p className="mt-2 text-sm text-muted">{t.createdHint}</p>
          <code className="mt-2 block rounded-lg bg-background border border-border p-3 text-sm text-brand-500 break-all">
            {typeof window !== "undefined"
              ? `${window.location.origin}/experiments/${created.slug}`
              : `/experiments/${created.slug}`}
          </code>
          <p className="mt-4 text-sm font-medium text-foreground">{t.snippetLabel}</p>
          <code className="mt-1 block rounded-lg bg-background border border-border p-3 text-xs text-muted break-all">
            {snippet}
          </code>
          <Link
            href={`/experiments/${created.slug}`}
            className="mt-3 inline-block text-sm text-brand-500 hover:underline"
          >
            {t.openExperiment}
          </Link>
        </div>
      )}

      {experiments.length > 0 && (
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-4">{t.yourExperiments}</h2>
          <div className="space-y-3">
            {experiments.map((exp) => (
              <Link
                key={exp.id}
                href={`/experiments/${exp.slug}`}
                className="block rounded-xl border border-border bg-surface p-4 hover:border-brand-600/50 transition-colors"
              >
                <p className="font-medium text-foreground">{exp.name}</p>
                <p className="text-sm text-muted mt-1">{exp.pageUrl}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border bg-surface-muted/30 p-6">
        <h3 className="font-semibold text-foreground mb-4">{t.exampleTitle}</h3>
        <div className="space-y-3">
          {sampleStats.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-surface px-4 py-3"
            >
              <p className="text-sm font-medium text-foreground mb-2">{item.label}</p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <span className="text-muted">
                  A: {item.variantA} — {item.rateA}
                </span>
                <span className="text-brand-500">
                  B: {item.variantB} — {item.rateB}
                  {item.winner === "B" ? " ★" : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
