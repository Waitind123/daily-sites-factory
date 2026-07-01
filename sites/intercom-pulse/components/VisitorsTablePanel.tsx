"use client";

import type { VisitorTablePayload } from "@/lib/visitor-registry";
import { DASHBOARD_COPY } from "@/lib/dashboard-labels";

function shortId(id: string) {
  return id.length > 12 ? `${id.slice(0, 8)}…${id.slice(-4)}` : id;
}

function formatTime(iso: string) {
  try {
    return new Date(iso).toLocaleString("zh-CN", { hour12: false });
  } catch {
    return iso;
  }
}

export function VisitorsTablePanel({ table }: { table: VisitorTablePayload }) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-zinc-100">{DASHBOARD_COPY.visitorTableTitle}</h2>
        <p className="text-sm text-zinc-500 mt-1">
          {DASHBOARD_COPY.visitorTableSub} · {table.total} {DASHBOARD_COPY.peopleUnit}
        </p>
      </div>

      {table.rows.length === 0 ? (
        <p className="text-sm text-zinc-500 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-8 text-center">
          {DASHBOARD_COPY.visitorTableEmpty}
        </p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-zinc-800">
          <table className="w-full text-sm min-w-[960px]">
            <thead className="bg-zinc-900/80 text-zinc-400 text-xs">
              <tr>
                <th className="text-left px-3 py-3">{DASHBOARD_COPY.visitorColId}</th>
                <th className="text-left px-3 py-3">{DASHBOARD_COPY.visitorColSite}</th>
                <th className="text-left px-3 py-3">{DASHBOARD_COPY.visitorColLastSeen}</th>
                <th className="text-right px-3 py-3">{DASHBOARD_COPY.visitorColPv}</th>
                <th className="text-left px-3 py-3">{DASHBOARD_COPY.visitorColPath}</th>
                <th className="text-left px-3 py-3">{DASHBOARD_COPY.visitorColReferrer}</th>
                <th className="text-left px-3 py-3">{DASHBOARD_COPY.visitorColDevice}</th>
                <th className="text-left px-3 py-3">{DASHBOARD_COPY.visitorColLocale}</th>
                <th className="text-left px-3 py-3">{DASHBOARD_COPY.visitorColTimezone}</th>
                <th className="text-left px-3 py-3">{DASHBOARD_COPY.visitorColUtm}</th>
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.visitorId} className="border-t border-zinc-800/80 hover:bg-zinc-900/40 align-top">
                  <td className="px-3 py-2 font-mono text-xs text-sky-300" title={row.visitorId}>
                    {shortId(row.visitorId)}
                  </td>
                  <td className="px-3 py-2">
                    {row.siteUrl ? (
                      <a
                        href={row.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-400 hover:underline"
                      >
                        {row.siteName}
                      </a>
                    ) : (
                      row.siteName
                    )}
                  </td>
                  <td className="px-3 py-2 text-xs text-zinc-400 whitespace-nowrap">{formatTime(row.lastSeen)}</td>
                  <td className="px-3 py-2 text-right font-medium">{row.pageviews}</td>
                  <td className="px-3 py-2 text-xs text-zinc-300 max-w-[140px] truncate" title={row.path}>
                    {row.path || "—"}
                  </td>
                  <td className="px-3 py-2 text-xs text-zinc-400 max-w-[160px] truncate" title={row.referrer}>
                    {row.referrerLabel}
                  </td>
                  <td className="px-3 py-2 text-xs">{row.deviceLabel}</td>
                  <td className="px-3 py-2 text-xs">{row.localeLabel}</td>
                  <td className="px-3 py-2 text-xs text-zinc-400">{row.timezone || "—"}</td>
                  <td className="px-3 py-2 text-xs text-zinc-500 max-w-[120px] truncate">
                    {[row.utmSource, row.utmMedium, row.utmCampaign].filter(Boolean).join(" / ") || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
