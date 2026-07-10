"use client";

import type { PromoPerformancePayload } from "@/lib/promo-performance";
import { DASHBOARD_COPY } from "@/lib/dashboard-labels";

export function PromoPerformancePanel({ data }: { data: PromoPerformancePayload }) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-zinc-100">{DASHBOARD_COPY.promoTitle}</h2>
        <p className="text-sm text-zinc-500 mt-1">{DASHBOARD_COPY.promoSub}</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
          <div className="text-2xl font-bold text-zinc-100">{data.totalPosts}</div>
          <div className="text-xs text-zinc-500 mt-1">{DASHBOARD_COPY.promoTotalPosts}</div>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
          <div className="text-2xl font-bold text-sky-300">
            {data.channels.reduce((s, c) => s + c.visits, 0)}
          </div>
          <div className="text-xs text-zinc-500 mt-1">{DASHBOARD_COPY.promoUtmVisits}</div>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
          <div className="text-sm font-medium text-zinc-300">
            {data.lastPostedAt
              ? new Date(data.lastPostedAt).toLocaleString("zh-CN")
              : DASHBOARD_COPY.noDataYet}
          </div>
          <div className="text-xs text-zinc-500 mt-1">{DASHBOARD_COPY.promoLastPost}</div>
        </div>
      </div>

      {data.channels.length > 0 ? (
        <div className="mb-6 overflow-x-auto rounded-2xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead className="bg-zinc-900/80 text-zinc-400 text-xs">
              <tr>
                <th className="text-left px-4 py-3">{DASHBOARD_COPY.promoChannel}</th>
                <th className="text-right px-4 py-3">{DASHBOARD_COPY.promoVisits}</th>
              </tr>
            </thead>
            <tbody>
              {data.channels.map((row) => (
                <tr key={row.source} className="border-t border-zinc-800/80">
                  <td className="px-4 py-2">{row.label}</td>
                  <td className="px-4 py-2 text-right font-medium text-sky-300">{row.visits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm text-zinc-500 mb-6 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-6 text-center">
          {DASHBOARD_COPY.promoNoUtm}
        </p>
      )}

      {data.posts.length > 0 ? (
        <div className="overflow-x-auto rounded-2xl border border-zinc-800">
          <table className="w-full text-sm min-w-[720px]">
            <thead className="bg-zinc-900/80 text-zinc-400 text-xs">
              <tr>
                <th className="text-left px-4 py-3">{DASHBOARD_COPY.promoPostTime}</th>
                <th className="text-left px-4 py-3">{DASHBOARD_COPY.promoPostPlatform}</th>
                <th className="text-left px-4 py-3">{DASHBOARD_COPY.promoPostTitle}</th>
                <th className="text-left px-4 py-3">{DASHBOARD_COPY.promoPostLink}</th>
              </tr>
            </thead>
            <tbody>
              {data.posts.map((post, i) => (
                <tr key={`${post.at}-${i}`} className="border-t border-zinc-800/80 align-top">
                  <td className="px-4 py-2 text-xs text-zinc-400 whitespace-nowrap">
                    {new Date(post.at).toLocaleString("zh-CN")}
                  </td>
                  <td className="px-4 py-2 text-xs">{post.platform}</td>
                  <td className="px-4 py-2 text-xs text-zinc-300 max-w-[240px]">{post.title || "—"}</td>
                  <td className="px-4 py-2 text-xs">
                    {post.url ? (
                      <a href={post.url} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                        {DASHBOARD_COPY.promoViewPost}
                      </a>
                    ) : (
                      "—"
                    )}
                    {post.joinUrl ? (
                      <span className="block mt-1 text-zinc-500 truncate max-w-[200px]" title={post.joinUrl}>
                        UTM → join
                      </span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm text-zinc-500 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-6 text-center">
          {DASHBOARD_COPY.promoNoPosts}
        </p>
      )}
    </section>
  );
}
