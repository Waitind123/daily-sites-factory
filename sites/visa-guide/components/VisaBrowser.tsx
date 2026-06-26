"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  visaPrograms,
  type VisaProgram,
  type VisaRegion,
} from "@/lib/data";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getRegionLabels, getVisasCopy } from "@/lib/copy-app";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type VisaDetail = VisaProgram & { viewed: boolean };

export function VisaBrowser({ locale }: { locale: Locale }) {
  const t = getVisasCopy(locale);
  const regionLabels = getRegionLabels(locale);

  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [region, setRegion] = useState<VisaRegion | "all">("all");
  const [sortBy, setSortBy] = useState<"income" | "processing">("income");
  const [selected, setSelected] = useState<VisaDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [viewedIds, setViewedIds] = useState<Set<string>>(new Set());

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  const filtered = visaPrograms
    .filter((v) => region === "all" || v.region === region)
    .sort((a, b) =>
      sortBy === "income"
        ? a.incomeUsd - b.incomeUsd
        : a.processingDays.localeCompare(b.processingDays)
    );

  async function viewDetail(visaId: string) {
    setLoading(true);
    setError(null);

    const res = await fetch("/api/visas/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visaId }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(getApiErrorMessage(data.code, locale));
      setLoading(false);
      return;
    }

    setSelected(data.visa);
    setViewedIds((prev) => new Set(prev).add(visaId));
    if (data.remaining !== undefined && data.remaining !== -1) {
      setTrial((prev) =>
        prev ? { ...prev, remaining: data.remaining, used: prev.limit - data.remaining } : prev
      );
    }
    setLoading(false);
  }

  return (
    <div>
      {trial && !trial.isMember && (
        <div className="mb-6 rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-wrap items-center justify-between gap-2">
          <span>
            {locale === "zh" ? (
              <>
                剩余 <strong>{trial.remaining}/{trial.limit}</strong> {t.trialRemaining}
              </>
            ) : (
              <>
                <strong>{trial.remaining}/{trial.limit}</strong> {t.trialRemaining}
              </>
            )}
          </span>
          {trial.remaining === 0 && (
            <Link href="/join" className="font-semibold underline">
              {t.subscribeUnlock}
            </Link>
          )}
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
          {error.includes("订阅") || error.toLowerCase().includes("subscribe") ? (
            <Link href="/join" className="ml-2 font-semibold underline">
              {t.subscribeNow}
            </Link>
          ) : null}
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value as VisaRegion | "all")}
          className="rounded-lg border border-border px-3 py-2 text-sm bg-surface"
        >
          <option value="all">{t.allRegions}</option>
          {(Object.keys(regionLabels) as VisaRegion[]).map((r) => (
            <option key={r} value={r}>
              {regionLabels[r]}
            </option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "income" | "processing")}
          className="rounded-lg border border-border px-3 py-2 text-sm bg-surface"
        >
          <option value="income">{t.sortIncome}</option>
          <option value="processing">{t.sortProcessing}</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((visa) => (
          <div
            key={visa.id}
            className="rounded-xl border border-border bg-surface p-5 hover:border-brand-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-2xl">{visa.flag}</span>
                <h3 className="font-semibold text-lg mt-1">{visa.country}</h3>
                <p className="text-sm text-brand-500">{visa.programName}</p>
              </div>
              <div className="text-right text-sm">
                <p className="font-bold text-foreground">
                  ${visa.incomeUsd.toLocaleString()}
                  {locale === "zh" ? "/月" : "/mo"}
                </p>
                <p className="text-muted">{visa.duration}</p>
              </div>
            </div>

            <p className="text-sm text-muted mt-3 line-clamp-2">{visa.preview}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {visa.schengen && (
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                  {t.schengen}
                </span>
              )}
              {visa.prPathway && (
                <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                  {t.prPathway}
                </span>
              )}
              <span className="text-xs bg-surface-muted text-muted px-2 py-0.5 rounded-full">
                {visa.processingDays}
              </span>
            </div>

            <button
              onClick={() => viewDetail(visa.id)}
              disabled={loading}
              className="mt-4 w-full rounded-lg bg-brand-600 text-white py-2.5 text-sm font-semibold hover:bg-brand-700 transition-colors disabled:opacity-50"
            >
              {viewedIds.has(visa.id) ? t.viewAgain : t.viewDetails}
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-surface rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-3xl">{selected.flag}</span>
                <h2 className="text-xl font-bold mt-1">
                  {selected.country} · {selected.programName}
                </h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-muted hover:text-muted text-2xl leading-none"
                aria-label={t.close}
              >
                {t.close}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm mb-6">
              <div className="bg-background rounded-lg p-3">
                <p className="text-muted">{t.incomeThreshold}</p>
                <p className="font-bold">${selected.incomeUsd.toLocaleString()}</p>
              </div>
              <div className="bg-background rounded-lg p-3">
                <p className="text-muted">{t.stayDuration}</p>
                <p className="font-bold">{selected.duration}</p>
              </div>
              <div className="bg-background rounded-lg p-3">
                <p className="text-muted">{t.tax}</p>
                <p className="font-bold">{selected.taxNote}</p>
              </div>
              <div className="bg-background rounded-lg p-3">
                <p className="text-muted">{t.processing}</p>
                <p className="font-bold">{selected.processingDays}</p>
              </div>
            </div>

            <h3 className="font-semibold mb-2">{t.requirements}</h3>
            <ul className="text-sm text-muted space-y-1 mb-4">
              {selected.requirements.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="text-brand-500">•</span>
                  {r}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-2">{t.documents}</h3>
            <ul className="text-sm text-muted space-y-1 mb-4">
              {selected.documents.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-brand-500">✓</span>
                  {d}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-2">{t.tips}</h3>
            <ul className="text-sm text-muted space-y-1 mb-4">
              {selected.tips.map((tip) => (
                <li key={tip} className="flex gap-2">
                  <span className="text-amber-500">💡</span>
                  {tip}
                </li>
              ))}
            </ul>

            <a
              href={selected.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-500 hover:underline"
            >
              {t.officialLink}
            </a>
            <p className="text-xs text-muted mt-4">
              {t.updatedNote} {selected.updatedAt} · {t.disclaimer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
