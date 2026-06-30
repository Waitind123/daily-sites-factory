"use client";

import { useMemo, useState } from "react";
import type { VisitorInsightsPayload } from "@/lib/visitor-insights";
import type { VisitorProfileView } from "@/lib/visitor-audience";

interface SiteOption {
  id: string;
  name: string;
}

function maxValue(rows: { value: number }[]) {
  return rows.reduce((m, r) => Math.max(m, r.value), 0) || 1;
}

function HBarChart({
  title,
  rows,
  color = "bg-indigo-500",
}: {
  title: string;
  rows: { label: string; value: number; pct: string }[];
  color?: string;
}) {
  const max = maxValue(rows);
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
      <h4 className="text-sm font-medium text-zinc-200 mb-3">{title}</h4>
      {rows.length === 0 ? (
        <p className="text-xs text-zinc-500 py-6 text-center">暂无数据（新埋点生效后自动填充）</p>
      ) : (
        <div className="space-y-2">
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-[5.5rem_1fr_2.5rem] items-center gap-2 text-xs">
              <span className="truncate text-zinc-400" title={row.label}>
                {row.label}
              </span>
              <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className={`h-full rounded-full ${color}`}
                  style={{ width: `${(row.value / max) * 100}%` }}
                />
              </div>
              <span className="text-right text-zinc-300">{row.pct}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DonutChart({
  title,
  segments,
}: {
  title: string;
  segments: { label: string; value: number; color: string }[];
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  let acc = 0;
  const gradient =
    total === 0
      ? "#27272a 0% 100%"
      : segments
          .filter((s) => s.value > 0)
          .map((s) => {
            const start = (acc / total) * 100;
            acc += s.value;
            const end = (acc / total) * 100;
            return `${s.color} ${start}% ${end}%`;
          })
          .join(", ");

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
      <h4 className="text-sm font-medium text-zinc-200 mb-3">{title}</h4>
      <div className="flex items-center gap-4">
        <div
          className="w-24 h-24 rounded-full shrink-0"
          style={{ background: total ? `conic-gradient(${gradient})` : "#27272a" }}
        />
        <div className="space-y-1 text-xs">
          {segments.map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-zinc-300">
              <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
              <span>{s.label}</span>
              <span className="text-zinc-500">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfilePanel({ profile }: { profile: VisitorProfileView }) {
  const deviceColors: Record<string, string> = {
    mobile: "#38bdf8",
    desktop: "#818cf8",
    tablet: "#a78bfa",
    unknown: "#71717a",
  };

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <DonutChart
        title="新老访客"
        segments={[
          { label: "新访客", value: profile.newVisitors, color: "#34d399" },
          { label: "回访客", value: profile.returningVisitors, color: "#6366f1" },
        ]}
      />
      <DonutChart
        title="设备类型"
        segments={
          profile.devices.length
            ? profile.devices.map((d) => ({
                label: d.label,
                value: d.value,
                color: deviceColors[d.label] || "#94a3b8",
              }))
            : [{ label: "暂无", value: 0, color: "#71717a" }]
        }
      />
      <DonutChart
        title="访客意向分层"
        segments={[
          { label: "仅浏览", value: profile.intentSegments.find((x) => x.label === "仅浏览")?.value || 0, color: "#64748b" },
          { label: "试用意向", value: profile.intentSegments.find((x) => x.label === "试用意向")?.value || 0, color: "#38bdf8" },
          { label: "结账意向", value: profile.intentSegments.find((x) => x.label === "结账意向")?.value || 0, color: "#f59e0b" },
          { label: "已付费", value: profile.intentSegments.find((x) => x.label === "已付费")?.value || 0, color: "#34d399" },
        ]}
      />
      <HBarChart title="来源渠道 TOP" rows={profile.referrers} color="bg-sky-500" />
      <HBarChart title="语言 / 地区偏好" rows={profile.locales} color="bg-violet-500" />
      <HBarChart title="时区分布" rows={profile.timezones} color="bg-emerald-500" />
      <HBarChart title="UTM 来源" rows={profile.utmSources} color="bg-amber-500" />
      <HBarChart title="活跃时段 (UTC)" rows={profile.hours} color="bg-indigo-500" />
      <HBarChart title="落地页 TOP" rows={profile.landingPages} color="bg-rose-500" />
    </div>
  );
}

export function VisitorInsightsPanel({
  locale: _locale,
  insights,
  sites,
}: {
  locale: string;
  insights: VisitorInsightsPayload;
  sites: SiteOption[];
}) {
  const [range, setRange] = useState<"today" | "allTime">("today");
  const [siteId, setSiteId] = useState<string>("all");

  const profile = useMemo(() => {
    if (siteId === "all") return range === "today" ? insights.today : insights.allTime;
    const site = insights.bySite[siteId];
    if (!site) return range === "today" ? insights.today : insights.allTime;
    return range === "today" ? site.today : site.allTime;
  }, [insights, range, siteId]);

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-zinc-100">访客画像分析</h2>
          <p className="text-sm text-zinc-500 mt-1">来源、设备、语言、时段与意向分层 — 可视化洞察真实访客特征</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            value={siteId}
            onChange={(e) => setSiteId(e.target.value)}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200"
          >
            <option value="all">全站汇总</option>
            {sites.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
          <div className="flex rounded-lg border border-zinc-700 overflow-hidden text-sm">
            {[
              ["today", "今日"],
              ["allTime", "累计"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setRange(key as "today" | "allTime")}
                className={`px-3 py-2 ${range === key ? "bg-indigo-600 text-white" : "bg-zinc-900 text-zinc-400"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <ProfilePanel profile={profile} />
    </section>
  );
}
