"use client";

import { useMemo, useState } from "react";
import type { MetricsChartsPayload, MetricKey } from "@/lib/metrics-charts";
import { METRIC_KEYS } from "@/lib/metrics-charts";
import { DASHBOARD_COPY, METRIC } from "@/lib/dashboard-labels";

const METRIC_COLORS: Record<MetricKey, string> = {
  pv: "#6366f1",
  uv: "#38bdf8",
  trial: "#a78bfa",
  checkout: "#fbbf24",
  purchase: "#34d399",
};

function maxInSeries(values: number[]) {
  return values.reduce((m, v) => Math.max(m, v), 0) || 1;
}

function formatChartValue(value: number) {
  return value.toLocaleString("en-US");
}

function LineChart({
  points,
  metric,
}: {
  points: MetricsChartsPayload["daily"];
  metric: MetricKey;
}) {
  const values = points.map((p) => p[metric]);
  const max = maxInSeries(values);
  const w = 640;
  const h = 210;
  const pad = { l: 36, r: 8, t: 28, b: 24 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const dense = points.length > 16;
  const labelSize = dense ? 8 : 9;

  const coords = values.map((v, i) => {
    const x = pad.l + (values.length <= 1 ? innerW / 2 : (i / (values.length - 1)) * innerW);
    const y = pad.t + innerH - (v / max) * innerH;
    return { x, y, v, day: points[i]?.day || "" };
  });

  const line = coords.map((c) => `${c.x},${c.y}`).join(" ");
  const area = `${pad.l},${pad.t + innerH} ${line} ${pad.l + innerW},${pad.t + innerH}`;
  const color = METRIC_COLORS[metric];
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => ({
    t,
    value: Math.round(max * t),
    y: pad.t + innerH * (1 - t),
  }));

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
      <h4 className="text-sm font-medium text-zinc-200 mb-3">
        {DASHBOARD_COPY.trendLineTitle} · {METRIC[metric]}
      </h4>
      {points.length === 0 ? (
        <p className="text-xs text-zinc-500 py-10 text-center">{DASHBOARD_COPY.noChartData}</p>
      ) : (
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" role="img">
          <defs>
            <linearGradient id={`grad-${metric}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.35" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          {yTicks.map((tick) => (
            <g key={tick.t}>
              <line
                x1={pad.l}
                x2={w - pad.r}
                y1={tick.y}
                y2={tick.y}
                stroke="#27272a"
                strokeWidth="1"
              />
              <text x={pad.l - 6} y={tick.y + 3} fill="#71717a" fontSize="9" textAnchor="end">
                {formatChartValue(tick.value)}
              </text>
            </g>
          ))}
          <polygon points={area} fill={`url(#grad-${metric})`} />
          <polyline
            points={line}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {coords.map((c) => (
            <g key={c.day}>
              <circle cx={c.x} cy={c.y} r="3.5" fill={color} />
              <text
                x={c.x}
                y={Math.max(pad.t + 8, c.y - 8)}
                fill="#e4e4e7"
                fontSize={labelSize}
                textAnchor="middle"
              >
                {formatChartValue(c.v)}
              </text>
            </g>
          ))}
          {coords.length > 0 ? (
            <>
              <text x={pad.l} y={h - 4} fill="#71717a" fontSize="10">
                {coords[0].day.slice(5)}
              </text>
              <text x={w - pad.r} y={h - 4} fill="#71717a" fontSize="10" textAnchor="end">
                {coords[coords.length - 1].day.slice(5)}
              </text>
            </>
          ) : null}
        </svg>
      )}
    </div>
  );
}

function BarChart({
  points,
  metric,
}: {
  points: MetricsChartsPayload["daily"];
  metric: MetricKey;
}) {
  const values = points.map((p) => p[metric]);
  const max = maxInSeries(values);
  const color = METRIC_COLORS[metric];

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
      <h4 className="text-sm font-medium text-zinc-200 mb-3">
        {DASHBOARD_COPY.trendBarTitle} · {METRIC[metric]}
      </h4>
      {points.length === 0 ? (
        <p className="text-xs text-zinc-500 py-10 text-center">{DASHBOARD_COPY.noChartData}</p>
      ) : (
        <div className="flex items-end gap-1 h-48">
          {points.map((p) => (
            <div key={p.day} className="flex-1 min-w-0 flex flex-col items-center justify-end gap-0.5 group h-full">
              <span className="text-[9px] font-medium text-zinc-200 leading-none tabular-nums">
                {formatChartValue(p[metric])}
              </span>
              <div
                className="w-full rounded-t-md transition-all group-hover:opacity-90"
                style={{
                  height: `${Math.max(4, (p[metric] / max) * 100)}%`,
                  background: color,
                  minHeight: p[metric] > 0 ? 4 : 0,
                }}
                title={`${p.day}: ${p[metric]}`}
              />
              {points.length <= 21 ? (
                <span className="text-[9px] text-zinc-600 truncate w-full text-center">
                  {p.day.slice(8)}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ComparisonBadge({ delta, label }: { delta: { changePct: string; available: boolean }; label: string }) {
  if (!delta.available) {
    return <span className="text-[11px] text-zinc-600">{label} —</span>;
  }
  const up = delta.changePct.startsWith("+");
  const down = delta.changePct.startsWith("-");
  const cls = up ? "text-emerald-400" : down ? "text-rose-400" : "text-zinc-400";
  return (
    <span className={`text-[11px] ${cls}`}>
      {label} {delta.changePct}
    </span>
  );
}

function MetricComparisonCard({
  metric,
  data,
}: {
  metric: MetricKey;
  data: MetricsChartsPayload;
}) {
  const current = data.totals[metric];
  const mom = data.comparisons.mom[metric];
  const yoy = data.comparisons.yoy[metric];

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: METRIC_COLORS[metric] }} />
        <span className="text-xs text-zinc-400">{METRIC[metric]}</span>
      </div>
      <div className="text-2xl font-bold text-zinc-50">{current}</div>
      <div className="mt-2 flex flex-col gap-0.5">
        <ComparisonBadge delta={mom} label={DASHBOARD_COPY.momLabel} />
        <ComparisonBadge delta={yoy} label={DASHBOARD_COPY.yoyLabel} />
      </div>
      {mom.available ? (
        <p className="text-[10px] text-zinc-600 mt-2">
          {DASHBOARD_COPY.momPrev}: {mom.previous}
        </p>
      ) : null}
    </div>
  );
}

function FunnelBarChart({ data }: { data: MetricsChartsPayload }) {
  const steps: { key: MetricKey; label: string }[] = [
    { key: "pv", label: METRIC.pv },
    { key: "trial", label: METRIC.trial },
    { key: "checkout", label: METRIC.checkout },
    { key: "purchase", label: METRIC.purchase },
  ];
  const max = data.totals.pv || 1;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
      <h4 className="text-sm font-medium text-zinc-200 mb-3">{DASHBOARD_COPY.funnelBarTitle}</h4>
      <div className="space-y-3">
        {steps.map((s) => (
          <div key={s.key}>
            <div className="flex justify-between text-xs text-zinc-400 mb-1">
              <span>{s.label}</span>
              <span>{data.totals[s.key]}</span>
            </div>
            <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(data.totals[s.key] / max) * 100}%`,
                  background: METRIC_COLORS[s.key],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MetricsChartsPanel({ locale: _locale, data }: { locale: string; data: MetricsChartsPayload }) {
  const [metric, setMetric] = useState<MetricKey>("pv");

  const stacked = useMemo(
    () =>
      METRIC_KEYS.map((key) => ({
        key,
        total: data.totals[key],
        color: METRIC_COLORS[key],
      })),
    [data]
  );

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-zinc-100">{DASHBOARD_COPY.chartsTitle}</h2>
        <p className="text-sm text-zinc-500 mt-1">{DASHBOARD_COPY.chartsSub}</p>
        <p className="text-xs text-zinc-600 mt-1">
          {DASHBOARD_COPY.momRange}: {data.ranges.mom.from} ~ {data.ranges.mom.to}
          {data.ranges.yoy
            ? ` · ${DASHBOARD_COPY.yoyRange}: ${data.ranges.yoy.from} ~ ${data.ranges.yoy.to}`
            : ""}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
        {METRIC_KEYS.map((key) => (
          <MetricComparisonCard key={key} metric={key} data={data} />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {METRIC_KEYS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setMetric(key)}
            className={`rounded-full px-3 py-1 text-xs font-medium border transition ${
              metric === key
                ? "border-indigo-500 bg-indigo-500/20 text-indigo-200"
                : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
            }`}
          >
            {METRIC[key]}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <LineChart points={data.daily} metric={metric} />
        <BarChart points={data.daily} metric={metric} />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <FunnelBarChart data={data} />
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
          <h4 className="text-sm font-medium text-zinc-200 mb-3">{DASHBOARD_COPY.metricsStackTitle}</h4>
          <div className="space-y-2">
            {stacked.map((row) => (
              <div key={row.key} className="flex items-center gap-2 text-xs">
                <span className="w-28 truncate text-zinc-400">{METRIC[row.key]}</span>
                <div className="flex-1 h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(row.total / maxInSeries(stacked.map((s) => s.total))) * 100}%`,
                      background: row.color,
                    }}
                  />
                </div>
                <span className="w-10 text-right text-zinc-300">{row.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
