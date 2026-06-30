"use client";

import {
  DATE_PRESET_LABELS,
  formatRangeLabel,
  type DatePreset,
  type DateRange,
  todayKey,
} from "@/lib/date-range";

interface SiteOption {
  id: string;
  name: string;
}

export function DashboardFilters({
  locale: _locale,
  sites,
  preset,
  siteId,
  range,
  onPresetChange,
  onSiteChange,
  onCustomRange,
}: {
  locale: string;
  sites: SiteOption[];
  preset: DatePreset;
  siteId: string;
  range: DateRange;
  onPresetChange: (preset: DatePreset) => void;
  onSiteChange: (siteId: string) => void;
  onCustomRange: (from: string, to: string) => void;
}) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-zinc-100">筛选条件</h2>
          <p className="text-sm text-zinc-500 mt-1">
            当前查看：<span className="text-indigo-300">{formatRangeLabel(range)}</span>
            {siteId === "all" ? " · 全部站点" : ` · ${sites.find((s) => s.id === siteId)?.name || siteId}`}
          </p>
        </div>
        <select
          value={siteId}
          onChange={(e) => onSiteChange(e.target.value)}
          className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
        >
          <option value="all">全部站点</option>
          {sites.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        {(Object.keys(DATE_PRESET_LABELS) as DatePreset[])
          .filter((k) => k !== "custom")
          .map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => onPresetChange(key)}
              className={`rounded-lg px-3 py-1.5 text-sm ${
                preset === key
                  ? "bg-indigo-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {DATE_PRESET_LABELS[key]}
            </button>
          ))}
      </div>

      <div className="flex flex-wrap items-end gap-3">
        <label className="text-sm text-zinc-400">
          开始日期
          <input
            type="date"
            max={todayKey()}
            value={range.from}
            onChange={(e) => onCustomRange(e.target.value, range.to)}
            className="mt-1 block rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
          />
        </label>
        <label className="text-sm text-zinc-400">
          结束日期
          <input
            type="date"
            max={todayKey()}
            value={range.to}
            onChange={(e) => onCustomRange(range.from, e.target.value)}
            className="mt-1 block rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
          />
        </label>
        <button
          type="button"
          onClick={() => onPresetChange("custom")}
          className={`rounded-lg px-3 py-2 text-sm ${
            preset === "custom" ? "bg-indigo-600 text-white" : "bg-zinc-800 text-zinc-400"
          }`}
        >
          {DATE_PRESET_LABELS.custom}
        </button>
      </div>
    </section>
  );
}
