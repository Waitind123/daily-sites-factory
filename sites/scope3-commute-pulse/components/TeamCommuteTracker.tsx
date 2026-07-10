"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { GridRegion, TransportMode } from "@/lib/calculator";
import type { EmployeeEntry, TeamCommuteResult } from "@/lib/team-commute";
import { defaultEmployees } from "@/lib/team-commute";
import type { Locale } from "@/lib/i18n-shared";
import {
  getApiErrorMessage,
  getSurveyCopy,
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

function newId() {
  return Math.random().toString(36).slice(2, 9);
}

export function TeamCommuteTracker({ locale }: { locale: Locale }) {
  const t = getSurveyCopy(locale);
  const transportOptions = getTransportOptions(locale);
  const gridLabels = getGridLabels(locale);

  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [employees, setEmployees] = useState<EmployeeEntry[]>(defaultEmployees());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TeamCommuteResult | null>(null);

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  function updateEmployee(id: string, patch: Partial<EmployeeEntry>) {
    setEmployees((prev) => prev.map((e) => (e.id === id ? { ...e, ...patch } : e)));
  }

  function addEmployee() {
    if (employees.length >= 20) return;
    setEmployees((prev) => [
      ...prev,
      {
        id: newId(),
        name: `Employee ${prev.length + 1}`,
        commuteKm: 10,
        officeDaysPerWeek: 2,
        transportMode: "subway",
        gridRegion: "eu",
      },
    ]);
  }

  function removeEmployee(id: string) {
    if (employees.length <= 1) return;
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const res = await fetch("/api/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ employees }),
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

  const maxTransportKg = result
    ? Math.max(...result.byTransport.map((b) => b.kg), 1)
    : 1;

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

      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-xs text-muted">{t.maxEmployees}</p>

        {employees.map((emp) => (
          <div
            key={emp.id}
            className="rounded-xl border border-border bg-surface p-4 space-y-3"
          >
            <div className="flex items-center justify-between gap-2">
              <input
                type="text"
                value={emp.name}
                onChange={(e) => updateEmployee(emp.id, { name: e.target.value })}
                className="font-medium bg-transparent border-b border-border focus:border-brand-500 outline-none flex-1"
                aria-label={t.employeeName}
              />
              {employees.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEmployee(emp.id)}
                  className="text-xs text-muted hover:text-red-400"
                >
                  {t.removeEmployee}
                </button>
              )}
            </div>

            <div>
              <label className="text-sm text-muted">{t.commuteLabel(emp.commuteKm)}</label>
              <input
                type="range"
                min={0}
                max={80}
                value={emp.commuteKm}
                onChange={(e) =>
                  updateEmployee(emp.id, { commuteKm: Number(e.target.value) })
                }
                className="w-full accent-brand-500"
              />
              <div className="flex justify-between text-xs text-muted">
                <span>{t.rangeMin}</span>
                <span>{t.rangeMax}</span>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted">
                {t.officeDaysLabel(emp.officeDaysPerWeek)}
              </label>
              <input
                type="range"
                min={0}
                max={5}
                step={1}
                value={emp.officeDaysPerWeek}
                onChange={(e) =>
                  updateEmployee(emp.id, { officeDaysPerWeek: Number(e.target.value) })
                }
                className="w-full accent-brand-500"
              />
              <div className="flex justify-between text-xs text-muted">
                <span>{t.officeMin}</span>
                <span>{t.officeMax}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-muted block mb-1">{t.transportLabel}</label>
                <select
                  value={emp.transportMode}
                  onChange={(e) =>
                    updateEmployee(emp.id, {
                      transportMode: e.target.value as TransportMode,
                    })
                  }
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                >
                  {transportOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.icon} {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-muted block mb-1">{t.gridLabel}</label>
                <select
                  value={emp.gridRegion}
                  onChange={(e) =>
                    updateEmployee(emp.id, { gridRegion: e.target.value as GridRegion })
                  }
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                >
                  {(Object.keys(gridLabels) as GridRegion[]).map((key) => (
                    <option key={key} value={key}>
                      {gridLabels[key]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addEmployee}
          disabled={employees.length >= 20}
          className="text-sm text-brand-500 hover:underline disabled:opacity-50"
        >
          + {t.addEmployee}
        </button>

        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}{" "}
            {error.includes("subscribe") || error.includes("订阅") ? (
              <Link href="/join" className="font-semibold underline">
                {t.subscribeNow}
              </Link>
            ) : null}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-brand-600/100 px-6 py-3 font-semibold text-white hover:bg-brand-600 disabled:opacity-50 transition-colors"
        >
          {loading ? t.calculating : t.calculate}
        </button>
      </form>

      {result && (
        <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 space-y-5">
          <div>
            <p className="text-sm text-muted">{t.teamTotal}</p>
            <p className="text-3xl font-bold text-brand-500">
              {result.totalAnnualKg.toLocaleString()} {t.perYear}
            </p>
            <p className="text-sm text-muted mt-1">
              {t.employeeCount(result.employeeCount)} · {t.avgPerEmployee(result.avgKgPerEmployee)}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <p className="font-medium text-sm mb-1">{t.savingsTitle}</p>
            <p className="text-xl font-bold text-green-400">
              {result.hybridSavingsKg.toLocaleString()} {t.savingsUnit}
            </p>
            <p className="text-sm text-muted mt-1">
              {t.savingsDetail(result.hybridSavingsPercent, result.hybridSavingsKg)}
            </p>
          </div>

          <div>
            <p className="font-medium text-sm mb-3">{t.transportBreakdown}</p>
            <div className="space-y-2">
              {result.byTransport.map((row) => {
                const opt = transportOptions.find((o) => o.id === row.mode);
                const pct = Math.round((row.kg / result.totalAnnualKg) * 100);
                return (
                  <div key={row.mode}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>
                        {opt?.icon} {opt?.label} ({row.count})
                      </span>
                      <span className="text-muted">
                        {row.kg.toLocaleString()} kg · {pct}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full bg-brand-600/100 rounded-full"
                        style={{ width: `${(row.kg / maxTransportKg) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-xs text-muted">{t.csrdNote}</p>
        </div>
      )}
    </div>
  );
}
