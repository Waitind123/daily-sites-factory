"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { visaPrograms } from "@/lib/data";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage } from "@/lib/copy-app";
import { getAlertsCopy } from "@/lib/copy-alerts";
import { demoWatchedPolicies, recentPolicyChanges, type WatchedPolicy } from "@/lib/tracking-data";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function AlertDashboard({ locale }: { locale: Locale }) {
  const t = getAlertsCopy(locale);
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [watched, setWatched] = useState<WatchedPolicy[]>(demoWatchedPolicies);
  const [showForm, setShowForm] = useState(false);
  const [visaId, setVisaId] = useState(visaPrograms[0]?.id ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPaywall, setShowPaywall] = useState(false);

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  async function addWatch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    const res = await fetch("/api/watch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visaId }),
    });
    const data = await res.json();

    if (res.status === 403 && data.code === "TRIAL_EXHAUSTED") {
      setShowPaywall(true);
      setLoading(false);
      return;
    }

    if (!res.ok) {
      setError(getApiErrorMessage(data.code, locale));
      setLoading(false);
      return;
    }

    if (data.trial) setTrial(data.trial);
    if (data.watched) setWatched((prev) => [...prev, data.watched]);
    setShowForm(false);
    setLoading(false);
  }

  return (
    <div className="space-y-8">
      {trial && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4">
          {trial.isMember ? (
            <span className="text-sm font-medium text-brand-500">{t.memberBadge}</span>
          ) : (
            <>
              <span className="text-sm text-muted">
                {trial.remaining} {t.trialRemaining}
              </span>
              <Link href="/join" className="text-sm font-medium text-brand-500 hover:underline">
                {t.subscribeUnlock}
              </Link>
            </>
          )}
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{t.yourVisas}</h2>
          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
          >
            {t.addVisa}
          </button>
        </div>
        <p className="text-xs text-muted mb-4">{t.demoNote}</p>

        <div className="space-y-3">
          {watched.map((v) => (
            <div
              key={v.id}
              className="rounded-xl border border-border bg-surface p-5 hover:border-brand-600/30 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{v.flag}</span>
                  <div>
                    <h3 className="font-semibold">
                      {v.country} — {v.programName}
                    </h3>
                    {v.lastChange && (
                      <p className="text-sm text-muted mt-0.5">
                        {t.lastChange}: {v.lastChange}
                      </p>
                    )}
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10">
                  {t.alertActive}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <form
          onSubmit={addWatch}
          className="rounded-xl border border-brand-600/30 bg-surface p-6 space-y-4"
        >
          <h3 className="font-semibold">{t.addVisaTitle}</h3>
          <div>
            <label className="block text-sm text-muted mb-1">{t.selectVisa}</label>
            <select
              value={visaId}
              onChange={(e) => setVisaId(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            >
              {visaPrograms.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.flag} {v.country} — {v.programName}
                </option>
              ))}
            </select>
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.adding : t.addBtn}
          </button>
        </form>
      )}

      {showPaywall && (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 text-center">
          <h3 className="font-semibold text-lg">{t.paywallTitle}</h3>
          <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <div>
        <h2 className="text-lg font-semibold mb-4">{t.policyChanges}</h2>
        <div className="space-y-2">
          {recentPolicyChanges.map((c) => (
            <div
              key={c.id}
              className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm"
            >
              <span>
                {c.flag} <span className="font-medium">{c.country}</span>
                <span className="text-muted"> — {c.change}</span>
              </span>
              <span className="text-xs text-muted">{c.changedAt}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/visas" className="text-sm text-brand-500 hover:underline">
            {t.viewPolicy} →
          </Link>
        </div>
      </div>
    </div>
  );
}
