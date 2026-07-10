"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { CalcResult, GridRegion, TransportMode } from "@/lib/calculator";
import type { Locale } from "@/lib/i18n-shared";
import {
  getApiErrorMessage,
  getCalcCopy,
  getGridLabels,
  getTransportOptions,
} from "@/lib/copy-app";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function CarbonCalculator({ locale }: { locale: Locale }) {
  const t = getCalcCopy(locale);
  const transportOptions = getTransportOptions(locale);
  const gridLabels = getGridLabels(locale);

  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [commuteKm, setCommuteKm] = useState(15);
  const [officeDays, setOfficeDays] = useState(2);
  const [transport, setTransport] = useState<TransportMode>("subway");
  const [gridRegion, setGridRegion] = useState<GridRegion>("cn");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CalcResult | null>(null);

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  async function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const res = await fetch("/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        commuteKm,
        officeDaysPerWeek: officeDays,
        transportMode: transport,
        gridRegion,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(getApiErrorMessage(data.code, locale));
      setLoading(false);
      return;
    }

    setResult(data.result);
    await loadTrial();
    setLoading(false);
  }

  const maxKg = result
    ? Math.max(result.fullOffice.annualKg, result.current.annualKg, result.fullRemote.annualKg, 1)
    : 1;

  const transportLabel =
    transportOptions.find((opt) => opt.id === transport)?.label ?? transport;

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            <strong>{t.freeRemaining(trial.remaining, trial.limit)}</strong>
          </span>
          <Link href="/join" className="font-semibold text-brand-500 hover:underline">
            {t.subscribeCta}
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800">
          {t.memberBadge}
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
          {error.includes("订阅") || error.toLowerCase().includes("subscribe") ? (
            <Link href="/join" className="ml-2 font-semibold underline">
              {t.subscribeNow}
            </Link>
          ) : null}
        </div>
      )}

      <form onSubmit={handleCalculate} className="rounded-2xl border border-border bg-surface p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t.commuteLabel(commuteKm)}
          </label>
          <input
            type="range"
            min={0}
            max={80}
            step={1}
            value={commuteKm}
            onChange={(e) => setCommuteKm(Number(e.target.value))}
            className="w-full accent-brand-600"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>{t.rangeMin}</span>
            <span>{t.rangeMax}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t.officeDaysLabel(officeDays)}
          </label>
          <input
            type="range"
            min={0}
            max={5}
            step={1}
            value={officeDays}
            onChange={(e) => setOfficeDays(Number(e.target.value))}
            className="w-full accent-brand-600"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>{t.officeMin}</span>
            <span>{t.officeMax}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">{t.transportLabel}</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {transportOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setTransport(opt.id as TransportMode)}
                className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                  transport === opt.id
                    ? "border-brand-600 bg-brand-600/10 text-brand-800 font-medium"
                    : "border-border hover:border-border"
                }`}
              >
                {opt.icon} {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">{t.gridLabel}</label>
          <select
            value={gridRegion}
            onChange={(e) => setGridRegion(e.target.value as GridRegion)}
            className="w-full rounded-lg border border-border px-3 py-2.5 text-sm bg-surface"
          >
            {Object.entries(gridLabels).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-brand-700 transition-colors disabled:opacity-50"
        >
          {loading ? t.calculating : t.calculate}
        </button>
      </form>

      {result && (
        <div className="space-y-4">
          <div className="rounded-2xl border-2 border-brand-600 bg-brand-600/10 p-6 text-center">
            <p className="text-sm text-brand-500 font-medium">{t.savingsTitle}</p>
            <p className="text-4xl sm:text-5xl font-bold text-brand-800 mt-2">
              {result.savingsVsOfficeKg.toLocaleString()} {t.savingsUnit}
            </p>
            <p className="text-brand-500 mt-2">
              {t.savingsDetail(result.savingsVsOfficePercent, result.treesEquivalent)}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[result.fullOffice, result.current, result.fullRemote].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
                <p className="text-sm text-muted">{s.label}</p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {s.annualKg.toLocaleString()}
                  <span className="text-sm font-normal text-muted ml-1">{t.perYear}</span>
                </p>
                <div className="mt-3 h-2 bg-surface-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-600/100 rounded-full"
                    style={{ width: `${(s.annualKg / maxKg) * 100}%` }}
                  />
                </div>
                <ul className="mt-3 text-xs text-muted space-y-1">
                  <li>{t.breakdownCommute(s.commuteKg)}</li>
                  <li>{t.breakdownOffice(s.officeEnergyKg)}</li>
                  <li>{t.breakdownHome(s.homeEnergyKg)}</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-background p-4 text-sm text-muted">
            <p>{t.resultMeta(transportLabel, gridLabels[gridRegion])}</p>
            <p className="mt-1">{t.methodology}</p>
          </div>
        </div>
      )}
    </div>
  );
}
