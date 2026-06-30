"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { RollupFile, SiteRollup } from "@/lib/analytics-store";
import type {
  DashboardSummary,
  MetricTotals,
  RevenueGoalView,
} from "@/lib/dashboard-metrics";
import { SUBSCRIPTION_PRICE_USD, buildFunnel, getTodayMetrics } from "@/lib/dashboard-metrics";

interface SiteEntry {
  id: string;
  name: string;
  url: string;
}

interface DashboardPayload {
  sites: SiteEntry[];
  rollup: RollupFile;
  summary: DashboardSummary;
  revenueGoal: RevenueGoalView | null;
}

function pct(n: number, d: number) {
  if (!d) return "0%";
  return `${((n / d) * 100).toFixed(1)}%`;
}

function MetricCard({
  label,
  value,
  hint,
  accent,
}: {
  label: string;
  value: string | number;
  hint?: string;
  accent?: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-4">
      <div className={`text-2xl font-bold ${accent || "text-white"}`}>{value}</div>
      <div className="text-sm text-zinc-500 mt-1">{label}</div>
      {hint ? <div className="text-[11px] text-zinc-600 mt-1">{hint}</div> : null}
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-zinc-100">{title}</h2>
      {subtitle ? <p className="text-sm text-zinc-500 mt-1">{subtitle}</p> : null}
    </div>
  );
}

function TotalsRow({ totals, prefix }: { totals: MetricTotals; prefix: string }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {[
        ["PV", totals.pv],
        ["UV", totals.uv],
        ["试用", totals.trial],
        ["结账", totals.checkout],
        ["付费", totals.purchase],
      ].map(([label, val]) => (
        <MetricCard key={`${prefix}-${label}`} label={`${prefix}${label}`} value={val as number} />
      ))}
    </div>
  );
}

function SiteCard({ site, rollup }: { site: SiteEntry; rollup?: SiteRollup }) {
  const t = rollup?.totals || { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  const today = getTodayMetrics(rollup);
  const seo = rollup?.seo;
  const funnel = buildFunnel(t);

  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-indigo-500/40 transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-zinc-50">{site.name}</h3>
          <p className="text-xs text-zinc-500 font-mono">{site.id}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
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
          {today.pv > 0 ? (
            <span className="text-[10px] text-sky-400">今日 +{today.pv} PV</span>
          ) : null}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
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

      <div className="mt-3 grid gap-1 text-xs text-zinc-400">
        <p>访问→试用 {funnel.pvToTrial} · 试用→结账 {funnel.trialToCheckout} · 结账→付费 {funnel.checkoutToPurchase}</p>
        <p>访问→付费 {funnel.pvToPurchase} · UV→付费 {funnel.uvToPurchase}</p>
        {seo?.lastChecked ? (
          <p>
            {seo.sitemapOk ? "✓ sitemap" : "✗ sitemap"} · {seo.robotsOk ? "✓ robots" : "✗ robots"} ·
            {seo.hasOg ? " ✓ OG" : " ✗ OG"} · {seo.hasJsonLd ? "✓ JSON-LD" : "✗ JSON-LD"} · {seo.guideCount} 指南页
          </p>
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
  const [data, setData] = useState<DashboardPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastFetchedAt, setLastFetchedAt] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/dashboard", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as DashboardPayload;
      setData(json);
      setLastFetchedAt(new Date().toLocaleString("zh-CN"));
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

  const sortedSites = useMemo(() => {
    if (!data) return [];
    return [...data.sites].sort((a, b) => {
      const ap = data.rollup.sites[a.id]?.totals.pv || 0;
      const bp = data.rollup.sites[b.id]?.totals.pv || 0;
      return bp - ap;
    });
  }, [data]);

  const summary = data?.summary;
  const revenueGoal = data?.revenueGoal;
  const rollupUpdated = data?.rollup.updatedAt
    ? new Date(data.rollup.updatedAt).toLocaleString("zh-CN")
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
            <p>流量 · 转化 · SEO · 收款</p>
            <p className="mt-1">
              数据更新 {rollupUpdated}
              {lastFetchedAt ? ` · 页面拉取 ${lastFetchedAt}` : ""}
            </p>
            <p className="mt-1 text-emerald-400">每 20 秒自动刷新</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-10">
        {error ? (
          <p className="text-center text-amber-400 text-sm">拉取失败: {error} · 20 秒后重试</p>
        ) : null}

        {!summary ? (
          <p className="text-zinc-500 text-center py-16">正在拉取最新数据…</p>
        ) : (
          <>
            {revenueGoal ? (
              <section className="rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-6">
                <SectionTitle
                  title="收入目标"
                  subtitle={revenueGoal.purpose || "追踪距离目标的进度"}
                />
                <div className="grid sm:grid-cols-4 gap-4 mb-4">
                  <MetricCard
                    label="目标金额"
                    value={`$${revenueGoal.targetUsd}`}
                    hint={`截止 ${revenueGoal.deadline}`}
                  />
                  <MetricCard
                    label="估算已收"
                    value={`$${revenueGoal.estimatedRevenueUsd.toFixed(1)}`}
                    hint={`付费次数 × $${SUBSCRIPTION_PRICE_USD}`}
                    accent="text-emerald-400"
                  />
                  <MetricCard
                    label="完成度"
                    value={`${revenueGoal.progressPct.toFixed(1)}%`}
                    accent="text-indigo-400"
                  />
                  <MetricCard label="剩余天数" value={revenueGoal.daysLeft} />
                </div>
                <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${Math.min(100, revenueGoal.progressPct)}%` }}
                  />
                </div>
              </section>
            ) : null}

            <section>
              <SectionTitle title="今日数据" subtitle="当天实时累计，最能反映推广是否起效" />
              <TotalsRow totals={summary.today} prefix="今日" />
              <div className="grid sm:grid-cols-3 gap-3 mt-3">
                <MetricCard label="今日活跃站" value={summary.todayActiveSites} hint="今日 PV > 0" />
                <MetricCard
                  label="今日估算收入"
                  value={`$${(summary.today.purchase * SUBSCRIPTION_PRICE_USD).toFixed(1)}`}
                />
                <MetricCard
                  label="今日访问→付费"
                  value={pct(summary.today.purchase, summary.today.pv)}
                />
              </div>
            </section>

            <section>
              <SectionTitle title="累计数据" subtitle="全周期总量，看整体盘子大小" />
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                <MetricCard label="站点数" value={summary.siteCount} />
                <MetricCard label="有流量站" value={summary.activeSites} hint="累计 PV > 0" />
                <MetricCard label="有付费站" value={summary.payingSites} accent="text-emerald-400" />
                <MetricCard label="总 PV" value={summary.totals.pv} />
                <MetricCard label="总 UV" value={summary.totals.uv} />
                <MetricCard label="总试用" value={summary.totals.trial} />
                <MetricCard label="总结账" value={summary.totals.checkout} />
                <MetricCard label="总付费" value={summary.totals.purchase} accent="text-emerald-400" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                <MetricCard
                  label="估算累计收入"
                  value={`$${summary.estimatedRevenueUsd.toFixed(1)}`}
                  hint={`${summary.totals.purchase} 次付费 × $${SUBSCRIPTION_PRICE_USD}/月`}
                  accent="text-emerald-400"
                />
                <MetricCard label="人均访问深度" value={pct(summary.totals.pv, summary.totals.uv)} hint="PV / UV" />
              </div>
            </section>

            <section>
              <SectionTitle title="转化漏斗" subtitle="优先看哪一步掉人最多" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  ["访问 → 试用", summary.funnel.pvToTrial],
                  ["试用 → 结账", summary.funnel.trialToCheckout],
                  ["结账 → 付费", summary.funnel.checkoutToPurchase],
                  ["访问 → 结账", summary.funnel.pvToCheckout],
                  ["访问 → 付费", summary.funnel.pvToPurchase],
                  ["UV → 付费", summary.funnel.uvToPurchase],
                ].map(([label, val]) => (
                  <MetricCard key={label as string} label={label as string} value={val as string} />
                ))}
              </div>
            </section>

            <section>
              <SectionTitle title="SEO 健康" subtitle="决定自然流量能不能持续增长" />
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                <MetricCard label="平均 SEO 分" value={summary.seo.avgScore} />
                <MetricCard label="优秀站 (≥80)" value={summary.seo.excellentCount} accent="text-emerald-400" />
                <MetricCard label="待优化 (<50)" value={summary.seo.needsWorkCount} accent="text-amber-400" />
                <MetricCard label="Sitemap 通过" value={summary.seo.sitemapPass} />
                <MetricCard label="Robots 通过" value={summary.seo.robotsPass} />
                <MetricCard label="有 OG 标签" value={summary.seo.withOg} />
                <MetricCard label="有 JSON-LD" value={summary.seo.withJsonLd} />
                <MetricCard label="有指南页" value={summary.seo.withGuides} />
                <MetricCard label="已扫描站" value={summary.seo.checkedCount} />
              </div>
            </section>

            <section>
              <SectionTitle
                title="Stripe 收款状态"
                subtitle="没配密钥 = 演示付费，用户付了也进不了账"
              />
              <div className="grid sm:grid-cols-4 gap-3">
                <MetricCard
                  label="密钥状态"
                  value={summary.stripe.configured ? "已配置" : "未配置"}
                  accent={summary.stripe.configured ? "text-emerald-400" : "text-red-400"}
                />
                <MetricCard label="真实收款站" value={summary.stripe.liveCount} accent="text-emerald-400" />
                <MetricCard label="演示模式站" value={summary.stripe.demoCount} accent="text-amber-400" />
                <MetricCard label="检查失败" value={summary.stripe.failCount} />
              </div>
            </section>

            <section>
              <SectionTitle title="流量 TOP 站" subtitle="集中推广这几个，比撒网 56 站更有效" />
              <div className="overflow-x-auto rounded-2xl border border-zinc-800">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-900/80 text-zinc-400">
                    <tr>
                      <th className="text-left px-4 py-3">站点</th>
                      <th className="text-right px-4 py-3">累计 PV</th>
                      <th className="text-right px-4 py-3">UV</th>
                      <th className="text-right px-4 py-3">今日 PV</th>
                      <th className="text-right px-4 py-3">付费</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summary.topSites.map((row) => (
                      <tr key={row.id} className="border-t border-zinc-800/80 hover:bg-zinc-900/40">
                        <td className="px-4 py-3">
                          <a href={row.url} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                            {row.name}
                          </a>
                          <span className="block text-[11px] text-zinc-600 font-mono">{row.id}</span>
                        </td>
                        <td className="text-right px-4 py-3 font-medium">{row.pv}</td>
                        <td className="text-right px-4 py-3">{row.uv}</td>
                        <td className="text-right px-4 py-3 text-sky-400">{row.todayPv}</td>
                        <td className="text-right px-4 py-3 text-emerald-400">{row.purchase}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <SectionTitle title="全部站点" subtitle="按累计 PV 排序" />
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {sortedSites.map((site) => (
                  <SiteCard key={site.id} site={site} rollup={data?.rollup.sites[site.id]} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="text-center py-8 text-zinc-600 text-xs">daily-sites-factory · 实时数据看板</footer>
    </div>
  );
}
