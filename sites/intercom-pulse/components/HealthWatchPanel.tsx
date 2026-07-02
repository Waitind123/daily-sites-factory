"use client";

import { DASHBOARD_COPY as L } from "@/lib/dashboard-labels";

export interface HealthWatchFailure {
  siteId: string;
  check: string;
  detail: string;
}

export interface HealthWatchPayload {
  at: string;
  summary: { pass: number; warn: number; fail: number };
  failures: HealthWatchFailure[];
}

export function HealthWatchPanel({ data }: { data: HealthWatchPayload }) {
  const { pass, warn, fail } = data.summary;
  const ok = fail === 0;
  const time = data.at
    ? new Date(data.at).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })
    : "—";

  return (
    <section className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold">{L.healthTitle}</h2>
          <p className="text-sm text-muted-foreground">{L.healthSub}</p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            ok ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
          }`}
        >
          {ok ? L.healthOk : L.healthFail}
        </span>
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        {L.healthLastRun}: {time}
      </p>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-lg bg-emerald-50 px-2 py-3 dark:bg-emerald-950/30">
          <div className="text-2xl font-bold text-emerald-700">{pass}</div>
          <div className="text-xs text-muted-foreground">{L.healthPass}</div>
        </div>
        <div className="rounded-lg bg-amber-50 px-2 py-3 dark:bg-amber-950/30">
          <div className="text-2xl font-bold text-amber-700">{warn}</div>
          <div className="text-xs text-muted-foreground">{L.healthWarn}</div>
        </div>
        <div className="rounded-lg bg-red-50 px-2 py-3 dark:bg-red-950/30">
          <div className="text-2xl font-bold text-red-700">{fail}</div>
          <div className="text-xs text-muted-foreground">{L.healthFailCount}</div>
        </div>
      </div>

      {data.failures?.length ? (
        <ul className="mt-4 space-y-2 text-sm">
          {data.failures.slice(0, 6).map((f, i) => (
            <li key={i} className="rounded-md border border-red-200/60 bg-red-50/50 px-3 py-2 dark:border-red-900/40 dark:bg-red-950/20">
              <span className="font-medium">{f.siteId}</span>
              <span className="text-muted-foreground"> · {f.check}</span>
              <div className="text-xs text-muted-foreground">{f.detail}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">{L.healthAllClear}</p>
      )}
    </section>
  );
}
