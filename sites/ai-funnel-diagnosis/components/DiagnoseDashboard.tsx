"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { DiagnosisResult } from "@/lib/diagnosis";
import type { Locale } from "@/lib/i18n-shared";
import {
  getApiErrorMessage,
  getDiagnoseCopy,
  getSampleFunnels,
} from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

const priorityClass = {
  high: "text-red-400 bg-red-600/10 border-red-600/30",
  medium: "text-amber-400 bg-amber-600/10 border-amber-600/30",
  low: "text-muted bg-surface border-border",
};

const priorityLabel = {
  en: { high: "HIGH", medium: "MED", low: "LOW" },
  zh: { high: "高", medium: "中", low: "低" },
};

export function DiagnoseDashboard({ locale }: { locale: Locale }) {
  const t = getDiagnoseCopy(locale);
  const samples = getSampleFunnels(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [steps, setSteps] = useState("");
  const [counts, setCounts] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  function loadExample(sample: (typeof samples)[0]) {
    setName(sample.name);
    setSteps(sample.steps.join(", "));
    setCounts(sample.counts.join(", "));
    setResult(null);
    setError("");
  }

  async function handleDiagnose(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, steps, counts, locale }),
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

      setResult(data.diagnosis);
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : getApiErrorMessage("DIAGNOSIS_FAILED", locale)
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-emerald-400 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeDiagnoses}{" "}
                <span className="text-foreground font-medium">
                  {trial.remaining}/{trial.limit}
                </span>
              </span>
            )}
          </p>
        )}
      </div>

      {showPaywall && (
        <div className="mb-8 rounded-xl border border-amber-600/40 bg-amber-600/10 p-6">
          <h2 className="font-semibold text-foreground">{t.paywallTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form onSubmit={handleDiagnose} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-foreground mb-4">{t.formTitle}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-muted mb-1">{t.funnelName}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.funnelNamePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">{t.steps}</label>
            <input
              type="text"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder={t.stepsPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">{t.counts}</label>
            <input
              type="text"
              value={counts}
              onChange={(e) => setCounts(e.target.value)}
              placeholder={t.countsPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.analyzing : t.runDiagnosis}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </form>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-3">{t.exampleTitle}</h2>
        <div className="flex flex-wrap gap-2">
          {samples.map((sample) => (
            <button
              key={sample.name}
              type="button"
              onClick={() => loadExample(sample)}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground hover:border-brand-600/50 transition-colors"
            >
              {sample.name}
            </button>
          ))}
        </div>
      </div>

      {result && (
        <div className="space-y-6">
          <div className="rounded-xl border border-emerald-600/40 bg-emerald-600/10 p-6">
            <h3 className="font-semibold text-emerald-400">{t.resultTitle}</h3>
            <p className="mt-2 text-sm text-muted">
              {t.overallConv}: <span className="text-foreground font-medium">{result.overallConversion}%</span>
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-foreground mb-3">🤖 {t.aiSummary}</h3>
            <p className="text-sm text-muted leading-relaxed">{result.summary}</p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-foreground mb-4">{t.stepBreakdown}</h3>
            <div className="space-y-2">
              {result.steps.map((step) => (
                <div
                  key={step.step}
                  className={`flex items-center justify-between text-sm py-2 px-3 rounded ${step.isLeak ? "bg-red-600/10 border border-red-600/30" : ""}`}
                >
                  <span className="text-foreground">
                    {step.step}
                    {step.isLeak && (
                      <span className="ml-2 text-xs text-red-400">★ {t.leakBadge}</span>
                    )}
                  </span>
                  <span className="text-muted">
                    {step.count.toLocaleString()} {t.users} · {step.conversionRate}% {t.convRate}
                    {step.dropOffRate && ` · ▼ ${step.dropOffRate}% ${t.dropOff}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-brand-600/30 bg-surface p-6">
            <h3 className="font-semibold text-foreground mb-4">✅ {t.fixPlan}</h3>
            <div className="space-y-4">
              {result.suggestions.map((s, i) => (
                <div key={s.title} className="rounded-lg border border-border p-4">
                  <div className="flex items-start gap-3">
                    <span
                      className={`shrink-0 rounded px-2 py-0.5 text-xs font-bold border ${priorityClass[s.priority]}`}
                    >
                      {priorityLabel[locale][s.priority]}
                    </span>
                    <div>
                      <p className="font-medium text-foreground">
                        {i + 1}. {s.title}
                      </p>
                      <p className="mt-1 text-sm text-muted">{s.description}</p>
                      <p className="mt-2 text-xs text-brand-500">
                        {t.estimatedUplift}: {s.estimatedUplift}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
