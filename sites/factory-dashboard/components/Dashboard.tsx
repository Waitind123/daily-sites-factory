"use client";

import { useMemo } from "react";
import type { RollupFile, SiteRollup } from "@/lib/analytics-store";

interface SiteEntry {
  id: string;
  name: string;
  url: string;
  deployedAt?: string;
}

function pct(n: number, d: number) {
  if (!d) return "0%";
  return `${((n / d) * 100).toFixed(1)}%`;
}

function SiteCard({ site, rollup }: { site: SiteEntry; rollup?: SiteRollup }) {
  const t = rollup?.totals || { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  const seo = rollup?.seo;
  const conv = pct(t.purchase, t.pv);
  const checkoutRate = pct(t.checkout, t.pv);

  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-indigo-500/40 transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-zinc-50">{site.name}</h2>
          <p className="text-xs text-zinc-500 font-mono">{site.id}</p>
        </div>
        {seo ? (
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              seo.score >= 80 ? "bg-emerald-500/15 text-emerald-400" : seo.score >= 50 ? "bg-amber-500/15 text-amber-400" : "bg-red-500/15 text-red-400"
            }`}
          >
            SEO {seo.score}
          </span>
        ) : null}
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
        {[
          ["PV", t.pv],
          ["UV", t.uv],
          ["试用", t.trial],
          ["结账", t.checkout],
          ["付费", t.purchase],
        ].map(([label, val]) => (
          <div key={label as string} className="rounded-xl bg-zinc-950/80 py-2">
            <div className="text-lg font-semibold text-zinc-100">{val as number}</div>
            <div className="text-[10px] uppercase tracking-wide text-zinc-500">{label as string}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-3 text-xs text-zinc-400">
        <span>访问→结账 {checkoutRate}</span>
        <span>访问→付费 {conv}</span>
        {seo?.lastChecked ? (
          <>
            <span>{seo.sitemapOk ? "✓ sitemap" : "✗ sitemap"}</span>
            <span>{seo.robotsOk ? "✓ robots" : "✗ robots"}</span>
            <span>{seo.guideCount} 指南页</span>
          </>
        ) : null}
      </div>

      <a
        href={site.url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex text-sm text-indigo-400 hover:text-indigo-300"
      >
        打开站点 →
      </a>
    </article>
  );
}

export function Dashboard({ sites, rollup }: { sites: SiteEntry[]; rollup: RollupFile }) {
  const summary = useMemo(() => {
    let pv = 0,
      uv = 0,
      purchase = 0,
      checkout = 0;
    for (const s of Object.values(rollup.sites)) {
      pv += s.totals.pv;
      uv += s.totals.uv;
      purchase += s.totals.purchase;
      checkout += s.totals.checkout;
    }
    return { pv, uv, purchase, checkout, count: sites.length };
  }, [rollup, sites.length]);

  return (
    <div className="space-y-8">
      <section className="grid sm:grid-cols-4 gap-4">
        {[
          ["站点数", summary.count],
          ["总 PV", summary.pv],
          ["总 UV", summary.uv],
          ["总付费转化", pct(summary.purchase, summary.pv)],
        ].map(([label, val]) => (
          <div key={label as string} className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5">
            <div className="text-2xl font-bold text-white">{val as string | number}</div>
            <div className="text-sm text-zinc-500 mt-1">{label as string}</div>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {sites.map((site) => (
          <SiteCard key={site.id} site={site} rollup={rollup.sites[site.id]} />
        ))}
      </section>
    </div>
  );
}
