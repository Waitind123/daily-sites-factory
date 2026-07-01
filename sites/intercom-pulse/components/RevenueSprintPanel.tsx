"use client";

import type { RevenueSprintPlan } from "@/lib/revenue-sprint";
import { DASHBOARD_COPY } from "@/lib/dashboard-labels";

export function RevenueSprintPanel({
  locale: _locale,
  plan,
  daysLeft,
}: {
  locale: string;
  plan: RevenueSprintPlan;
  daysLeft: number;
}) {
  if (plan.purchasesNeeded <= 0) return null;

  return (
    <div className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-amber-200">
          {DASHBOARD_COPY.sprintTitle.replace("{days}", String(daysLeft))}
        </h3>
        <p className="text-xs text-zinc-400 mt-1">{DASHBOARD_COPY.sprintSub}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-zinc-900/80 p-3">
          <div className="text-zinc-500 text-xs">{DASHBOARD_COPY.sprintNeed}</div>
          <div className="text-lg font-bold text-amber-300 mt-1">
            {plan.purchasesNeeded} × $9.9 = ${(plan.purchasesNeeded * 9.9).toFixed(1)}
          </div>
        </div>
        <div className="rounded-lg bg-zinc-900/80 p-3">
          <div className="text-zinc-500 text-xs">{DASHBOARD_COPY.sprintGap}</div>
          <div className="text-lg font-bold text-zinc-100 mt-1">${plan.gapUsd.toFixed(1)}</div>
        </div>
      </div>

      {plan.blockers.length > 0 ? (
        <div>
          <div className="text-xs font-medium text-red-400 mb-2">{DASHBOARD_COPY.sprintBlockers}</div>
          <ul className="space-y-1 text-xs text-red-300/90">
            {plan.blockers.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {plan.liveCheckoutSites.length > 0 ? (
        <div>
          <div className="text-xs font-medium text-emerald-400 mb-2">{DASHBOARD_COPY.sprintLive}</div>
          <div className="flex flex-wrap gap-2">
            {plan.liveCheckoutSites.map((s) => (
              <a
                key={s.id}
                href={s.joinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-emerald-500/15 px-3 py-1.5 text-xs text-emerald-300 hover:bg-emerald-500/25"
              >
                {s.name} → /join
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div>
        <div className="text-xs font-medium text-sky-300 mb-2">{DASHBOARD_COPY.sprintShare}</div>
        <div className="flex flex-wrap gap-2">
          {[
            ["Reddit", "https://www.reddit.com/r/SideProject/submit?url=https%3A%2F%2Fai-headshots-navy.vercel.app%2Fjoin%3Futm_source%3Dreddit&title=AI%20LinkedIn%20headshots%20%E2%80%94%20%249.9%2Fmo"],
            ["HN", "https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fai-headshots-navy.vercel.app%2Fjoin%3Futm_source%3Dhn&t=Show%20HN%3A%20AI%20headshots%20%249.9%2Fmo"],
            ["Twitter", "https://twitter.com/intent/tweet?text=AI%20LinkedIn%20headshots%20in%2030s%20%E2%80%94%20%249.9%2Fmo%20flat&url=https%3A%2F%2Fai-headshots-navy.vercel.app%2Fjoin%3Futm_source%3Dtwitter"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-sky-500/30 px-3 py-1.5 text-xs text-sky-300 hover:bg-sky-500/10"
            >
              {label} →
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xs font-medium text-indigo-300 mb-2">{DASHBOARD_COPY.sprintActions}</div>
        <ol className="space-y-1.5 text-xs text-zinc-300 list-decimal list-inside">
          {plan.actions.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ol>
      </div>

      {plan.promoteNow.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="text-zinc-500">
              <tr>
                <th className="text-left py-1">{DASHBOARD_COPY.siteColumn}</th>
                <th className="text-right py-1">PV</th>
                <th className="text-right py-1">收款 Live</th>
                <th className="text-right py-1">{DASHBOARD_COPY.sprintPromote}</th>
              </tr>
            </thead>
            <tbody>
              {plan.promoteNow.map((s) => (
                <tr key={s.id} className="border-t border-zinc-800/60">
                  <td className="py-2 text-zinc-200">{s.name}</td>
                  <td className="py-2 text-right">{s.pv}</td>
                  <td className={`py-2 text-right ${s.live ? "text-emerald-400" : "text-amber-400"}`}>
                    {s.live ? "Live" : "Demo"}
                  </td>
                  <td className="py-2 text-right">
                    <a href={s.joinUrl} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                      /join
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
