"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { CalcResult, GridRegion, TransportMode } from "@/lib/calculator";
import { GRID_LABELS, TRANSPORT_LABELS } from "@/lib/calculator";
import { transportOptions } from "@/lib/data";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function CarbonCalculator() {
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
      setError(data.error || "计算失败");
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

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次免费体验
          </span>
          <Link href="/join" className="font-semibold text-brand-500 hover:underline">
            订阅 $9.9/月 →
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800">
          ✓ 会员已激活 · 无限计算 + 报告导出
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
          {error.includes("订阅") && (
            <Link href="/join" className="ml-2 font-semibold underline">
              立即订阅
            </Link>
          )}
        </div>
      )}

      <form onSubmit={handleCalculate} className="rounded-2xl border border-border bg-surface p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            单程通勤距离：<strong>{commuteKm} km</strong>
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
            <span>0 km</span>
            <span>80 km</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            每周到岗天数：<strong>{officeDays} 天</strong>
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
            <span>完全远程</span>
            <span>全勤 5 天</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">通勤方式</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {transportOptions.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTransport(t.id)}
                className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                  transport === t.id
                    ? "border-brand-600 bg-brand-600/10 text-brand-800 font-medium"
                    : "border-border hover:border-border"
                }`}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">电网区域</label>
          <select
            value={gridRegion}
            onChange={(e) => setGridRegion(e.target.value as GridRegion)}
            className="w-full rounded-lg border border-border px-3 py-2.5 text-sm bg-surface"
          >
            {Object.entries(GRID_LABELS).map(([key, label]) => (
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
          {loading ? "计算中..." : "计算碳足迹"}
        </button>
      </form>

      {result && (
        <div className="space-y-4">
          <div className="rounded-2xl border-2 border-brand-600 bg-brand-600/10 p-6 text-center">
            <p className="text-sm text-brand-500 font-medium">相比全勤通勤，你每年减排</p>
            <p className="text-4xl sm:text-5xl font-bold text-brand-800 mt-2">
              {result.savingsVsOfficeKg.toLocaleString()} kg CO₂e
            </p>
            <p className="text-brand-500 mt-2">
              减排 {result.savingsVsOfficePercent}% · 约等于 {result.treesEquivalent} 棵树 / 年
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[result.fullOffice, result.current, result.fullRemote].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
                <p className="text-sm text-muted">{s.label}</p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {s.annualKg.toLocaleString()}
                  <span className="text-sm font-normal text-muted ml-1">kg/年</span>
                </p>
                <div className="mt-3 h-2 bg-surface-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-600/100 rounded-full"
                    style={{ width: `${(s.annualKg / maxKg) * 100}%` }}
                  />
                </div>
                <ul className="mt-3 text-xs text-muted space-y-1">
                  <li>通勤 {s.commuteKg} kg</li>
                  <li>办公室 {s.officeEnergyKg} kg</li>
                  <li>居家 {s.homeEnergyKg} kg</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-background p-4 text-sm text-muted">
            <p>
              交通方式：<strong>{TRANSPORT_LABELS[transport]}</strong> · 电网：
              <strong>{GRID_LABELS[gridRegion]}</strong>
            </p>
            <p className="mt-1">
              方法论基于 GHG Protocol 通勤计算 + EcoAct 居家办公能耗分摊。仅供 ESG 基线参考，正式审计请咨询认证机构。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
