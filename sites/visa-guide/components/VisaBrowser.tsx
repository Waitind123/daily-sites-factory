"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  visaPrograms,
  regionLabels,
  type VisaProgram,
  type VisaRegion,
} from "@/lib/data";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type VisaDetail = VisaProgram & { viewed: boolean };

export function VisaBrowser() {
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
      setError(data.error || "无法查看详情");
      setLoading(false);
      return;
    }

    setSelected(data.visa);
    setViewedIds((prev) => new Set(prev).add(visaId));
    if (data.remaining !== undefined && data.remaining !== -1) {
      setTrial((t) =>
        t ? { ...t, remaining: data.remaining, used: t.limit - data.remaining } : t
      );
    }
    setLoading(false);
  }

  return (
    <div>
      {trial && !trial.isMember && (
        <div className="mb-6 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800 flex flex-wrap items-center justify-between gap-2">
          <span>
            剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次免费详情查询
          </span>
          {trial.remaining === 0 && (
            <Link href="/join" className="font-semibold underline">
              订阅解锁全部 →
            </Link>
          )}
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
          {error.includes("订阅") && (
            <Link href="/join" className="ml-2 font-semibold underline">
              立即订阅 $9.9/月
            </Link>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value as VisaRegion | "all")}
          className="rounded-lg border border-stone-300 px-3 py-2 text-sm bg-white"
        >
          <option value="all">全部地区</option>
          {(Object.keys(regionLabels) as VisaRegion[]).map((r) => (
            <option key={r} value={r}>
              {regionLabels[r]}
            </option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "income" | "processing")}
          className="rounded-lg border border-stone-300 px-3 py-2 text-sm bg-white"
        >
          <option value="income">按收入门槛排序</option>
          <option value="processing">按审批时长排序</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((visa) => (
          <div
            key={visa.id}
            className="rounded-xl border border-stone-200 bg-white p-5 hover:border-brand-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-2xl">{visa.flag}</span>
                <h3 className="font-semibold text-lg mt-1">
                  {visa.country}
                </h3>
                <p className="text-sm text-brand-600">{visa.programName}</p>
              </div>
              <div className="text-right text-sm">
                <p className="font-bold text-stone-900">${visa.incomeUsd.toLocaleString()}/月</p>
                <p className="text-stone-400">{visa.duration}</p>
              </div>
            </div>

            <p className="text-sm text-stone-500 mt-3 line-clamp-2">{visa.preview}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {visa.schengen && (
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                  申根
                </span>
              )}
              {visa.prPathway && (
                <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                  永居路径
                </span>
              )}
              <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                {visa.processingDays}
              </span>
            </div>

            <button
              onClick={() => viewDetail(visa.id)}
              disabled={loading}
              className="mt-4 w-full rounded-lg bg-brand-600 text-white py-2.5 text-sm font-semibold hover:bg-brand-700 transition-colors disabled:opacity-50"
            >
              {viewedIds.has(visa.id) ? "再次查看详情" : "查看完整详情"}
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
            className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6"
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
                className="text-stone-400 hover:text-stone-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm mb-6">
              <div className="bg-stone-50 rounded-lg p-3">
                <p className="text-stone-400">月收入门槛</p>
                <p className="font-bold">${selected.incomeUsd.toLocaleString()}</p>
              </div>
              <div className="bg-stone-50 rounded-lg p-3">
                <p className="text-stone-400">停留时长</p>
                <p className="font-bold">{selected.duration}</p>
              </div>
              <div className="bg-stone-50 rounded-lg p-3">
                <p className="text-stone-400">税务</p>
                <p className="font-bold">{selected.taxNote}</p>
              </div>
              <div className="bg-stone-50 rounded-lg p-3">
                <p className="text-stone-400">审批</p>
                <p className="font-bold">{selected.processingDays}</p>
              </div>
            </div>

            <h3 className="font-semibold mb-2">申请条件</h3>
            <ul className="text-sm text-stone-600 space-y-1 mb-4">
              {selected.requirements.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="text-brand-600">•</span>
                  {r}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-2">材料清单</h3>
            <ul className="text-sm text-stone-600 space-y-1 mb-4">
              {selected.documents.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-brand-600">✓</span>
                  {d}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-2">实操建议</h3>
            <ul className="text-sm text-stone-600 space-y-1 mb-4">
              {selected.tips.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-amber-500">💡</span>
                  {t}
                </li>
              ))}
            </ul>

            <a
              href={selected.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-600 hover:underline"
            >
              官方申请入口 →
            </a>
            <p className="text-xs text-stone-400 mt-4">
              数据更新于 {selected.updatedAt} · 申请前请以官方最新政策为准
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
