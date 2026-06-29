"use client";

import { useCallback, useEffect, useState } from "react";
import type { RollupFile, SiteRollup } from "@/lib/analytics-store";

interface SiteEntry {
  id: string;
  name: string;
  url: string;
}

function pct(n: number, d: number) {
  if (!d) return "0%";
  return `${((n / d) * 100).toFixed(1)}%`;
}

function SiteCard({ site, rollup }: { site: SiteEntry; rollup?: SiteRollup }) {
  const t = rollup?.totals || { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  const seo = rollup?.seo;

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
              seo.score >= 80
                ? "bg-emerald-500/15 text-emerald-400"
                : seo.score >= 50
                  ? "bg-amber-500/15 text-amber-400"
                  : "bg-red-500/15 text-red-400"
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
        <span>访问→结账 {pct(t.checkout, t.pv)}</span>
        <span>访问→付费 {pct(t.purchase, t.pv)}</span>
        {seo?.lastChecked ? (
          <>
            <span>{seo.sitemapOk ? "✓ sitemap" : "✗ sitemap"}</span>
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

export function LiveFactoryDashboard() {
  const [sites, setSites] = useState<SiteEntry[]>([]);
  const [rollup, setRollup] = useState<RollupFile>({ version: 1, updatedAt: null, sites: {} });
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/dashboard", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setSites(data.sites || []);
      setRollup(data.rollup || { version: 1, updatedAt: null, sites: {} });
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "加载失败");
    }
  }, []);

  useEffect(() => {
    refresh();
    const timer = setInterval(refresh, 20000);
    return () => clearInterval(timer);
  }, [refresh]);

  let totalPv = 0;
  let totalUv = 0;
  let totalPurchase = 0;
  for (const s of Object.values(rollup.sites)) {
    totalPv += s.totals.pv;
    totalUv += s.totals.uv;
    totalPurchase += s.totals.purchase;
  }

  const updated = rollup.updatedAt
    ? new Date(rollup.updatedAt).toLocaleString("zh-CN")
    : "暂无";

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-400">Daily Sites Factory</p>
            <h1 className="text-2xl font-bold mt-1">全站运营看板</h1>
          </div>
          <div className="text-right text-xs text-zinc-500">
            <p>PV · UV · SEO · 转化漏斗</p>
            <p className="mt-1">
              更新 {updated} · <span className="text-emerald-400">每 20 秒自动刷新</span>
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {error ? (
          <p className="text-center text-amber-400 text-sm">拉取失败: {error} · 20 秒后重试</p>
        ) : null}

        <section className="grid sm:grid-cols-4 gap-4">
          {[
            ["站点数", sites.length],
            ["总 PV", totalPv],
            ["总 UV", totalUv],
            ["总付费转化", pct(totalPurchase, totalPv)],
          ].map(([label, val]) => (
            <div
              key={label as string}
              className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5"
            >
              <div className="text-2xl font-bold text-white">{val as string | number}</div>
              <div className="text-sm text-zinc-500 mt-1">{label as string}</div>
            </div>
          ))}
        </section>

        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {sites.length === 0 ? (
            <p className="text-zinc-500 col-span-full text-center py-12">正在拉取最新数据…</p>
          ) : (
            sites.map((site) => (
              <SiteCard key={site.id} site={site} rollup={rollup.sites[site.id]} />
            ))
          )}
        </section>
      </main>

      <footer className="text-center py-8 text-zinc-600 text-xs">daily-sites-factory · 实时数据看板</footer>
    </div>
  );
}
