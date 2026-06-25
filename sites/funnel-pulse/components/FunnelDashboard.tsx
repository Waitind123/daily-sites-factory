"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Funnel } from "@/lib/funnels";
import { conversionRate, dropOffRate } from "@/lib/funnels";
import type { Locale } from "@/lib/i18n-shared";
import {
  getApiErrorMessage,
  getFunnelsCopy,
  getSampleFunnels,
} from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function FunnelDashboard({ locale }: { locale: Locale }) {
  const t = getFunnelsCopy(locale);
  const samples = getSampleFunnels(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [steps, setSteps] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<Funnel | null>(null);
  const [funnels, setFunnels] = useState<Funnel[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/funnels")
      .then((r) => r.json())
      .then((d) => setFunnels(d.funnels ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setCreated(null);

    try {
      const res = await fetch("/api/funnels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, steps }),
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

      setCreated(data.funnel);
      setFunnels((list) => [data.funnel, ...list]);
      setName("");
      setSteps("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : getApiErrorMessage("FUNNEL_CREATE_FAILED", locale)
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
                {t.freeFunnels}{" "}
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

      <form onSubmit={handleCreate} className="rounded-xl border border-border bg-surface p-6 mb-8">
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
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.creating : t.createFunnel}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </form>

      {created && (
        <div className="mb-8 rounded-xl border border-emerald-600/40 bg-emerald-600/10 p-6">
          <h3 className="font-semibold text-emerald-400">{t.createdTitle}</h3>
          <p className="mt-2 text-sm text-muted">{t.createdHint}</p>
          <p className="mt-2 text-xs text-muted">{t.snippetLabel}</p>
          <pre className="mt-2 rounded-lg bg-background border border-border p-3 text-xs font-mono overflow-x-auto">
            {`POST /api/events\n{ "slug": "${created.slug}", "step": 0 }`}
          </pre>
          <Link
            href={`/funnels/${created.slug}`}
            className="mt-4 inline-block text-sm text-brand-500 hover:text-brand-400"
          >
            {t.openFunnel}
          </Link>
        </div>
      )}

      {funnels.length > 0 && (
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t.yourFunnels}</h2>
          <div className="space-y-3">
            {funnels.map((f) => (
              <Link
                key={f.id}
                href={`/funnels/${f.slug}`}
                className="block rounded-xl border border-border bg-surface p-4 hover:border-brand-600/50 transition-colors"
              >
                <p className="font-medium text-foreground">{f.name}</p>
                <p className="text-xs text-muted mt-1">{f.steps.join(" → ")}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">{t.exampleTitle}</h2>
        <div className="space-y-4">
          {samples.map((sample) => (
            <div key={sample.name} className="rounded-xl border border-border bg-surface p-5">
              <p className="font-medium text-foreground mb-3">{sample.name}</p>
              <div className="space-y-2">
                {sample.steps.map((step, i) => {
                  const count = sample.counts[i];
                  const top = sample.counts[0];
                  const rate = conversionRate(count, top);
                  const isLeak = i === sample.leak;
                  const drop =
                    i > 0 ? dropOffRate(sample.counts[i - 1], count) : null;
                  return (
                    <div
                      key={step}
                      className={`flex items-center justify-between text-sm py-1.5 px-2 rounded ${isLeak ? "bg-red-600/10 border border-red-600/30" : ""}`}
                    >
                      <span className="text-foreground">
                        {step}
                        {isLeak && (
                          <span className="ml-2 text-xs text-red-400">★ {t.leakBadge}</span>
                        )}
                      </span>
                      <span className="text-muted">
                        {count.toLocaleString()} {t.users} · {rate}%
                        {drop && ` · ▼ ${drop}% ${t.dropOff}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
