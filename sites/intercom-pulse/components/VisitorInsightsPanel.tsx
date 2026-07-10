"use client";

import type { VisitorProfileView } from "@/lib/visitor-audience";
import { DASHBOARD_COPY } from "@/lib/dashboard-labels";

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
        <p className="text-xs text-zinc-500 py-6 text-center">{DASHBOARD_COPY.noAudienceData}</p>
      ) : (
        <div className="space-y-2">
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-[7rem_1fr_2.5rem] items-center gap-2 text-xs">
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
              <span className="text-zinc-500">
                {s.value} {DASHBOARD_COPY.peopleUnit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VisitorInsightsPanel({
  locale: _locale,
  profile,
}: {
  locale: string;
  profile: VisitorProfileView;
}) {
  const deviceColors: Record<string, string> = {
    "手机 (Mobile)": "#38bdf8",
    "电脑 (Desktop)": "#818cf8",
    "平板 (Tablet)": "#a78bfa",
    "未知设备 (Unknown)": "#71717a",
  };

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-zinc-100">{DASHBOARD_COPY.visitorTitle}</h2>
        <p className="text-sm text-zinc-500 mt-1">{DASHBOARD_COPY.visitorSub}</p>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <DonutChart
          title={DASHBOARD_COPY.newVsReturningTitle}
          segments={[
            { label: DASHBOARD_COPY.newVisitors, value: profile.newVisitors, color: "#34d399" },
            { label: DASHBOARD_COPY.returningVisitors, value: profile.returningVisitors, color: "#6366f1" },
          ]}
        />
        <DonutChart
          title={DASHBOARD_COPY.deviceChart}
          segments={
            profile.devices.length
              ? profile.devices.map((d) => ({
                  label: d.label,
                  value: d.value,
                  color: deviceColors[d.label] || "#94a3b8",
                }))
              : [{ label: DASHBOARD_COPY.noDataYet, value: 0, color: "#71717a" }]
          }
        />
        <DonutChart
          title={DASHBOARD_COPY.intentChart}
          segments={profile.intentSegments.map((s, i) => ({
            label: s.label,
            value: s.value,
            color: ["#64748b", "#38bdf8", "#f59e0b", "#34d399"][i] || "#94a3b8",
          }))}
        />
        <HBarChart title={DASHBOARD_COPY.referrers} rows={profile.referrers} color="bg-sky-500" />
        <HBarChart title={DASHBOARD_COPY.locales} rows={profile.locales} color="bg-violet-500" />
        <HBarChart title={DASHBOARD_COPY.timezones} rows={profile.timezones} color="bg-emerald-500" />
        <HBarChart title={DASHBOARD_COPY.utmSources} rows={profile.utmSources} color="bg-amber-500" />
        <HBarChart title={DASHBOARD_COPY.hours} rows={profile.hours} color="bg-indigo-500" />
        <HBarChart title={DASHBOARD_COPY.landingPages} rows={profile.landingPages} color="bg-rose-500" />
      </div>
    </section>
  );
}
