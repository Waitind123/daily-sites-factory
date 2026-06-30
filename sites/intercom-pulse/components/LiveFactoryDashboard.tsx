"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { RollupFile, SiteRollup } from "@/lib/analytics-store";
import { DashboardFilters } from "@/components/DashboardFilters";
import { VisitorInsightsPanel } from "@/components/VisitorInsightsPanel";
import type { DashboardSummary, RevenueGoalView } from "@/lib/dashboard-metrics";
import { SUBSCRIPTION_PRICE_USD, buildFunnel, sumSitePeriod } from "@/lib/dashboard-metrics";
import { METRIC, SEO_LABELS, STRIPE_LABELS } from "@/lib/dashboard-labels";
import type { DatePreset, DateRange } from "@/lib/date-range";
import { formatRangeLabel } from "@/lib/date-range";
import type { VisitorInsightsPayload } from "@/lib/visitor-insights";

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
  visitorInsights?: VisitorInsightsPayload;
  filters?: { preset: DatePreset; siteId: string; range: DateRange };
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

function SiteCard({
  site,
  rollup,
  range,
}: {
  site: SiteEntry;
  rollup?: SiteRollup;
  range: DateRange;
}) {
  const t = rollup ? sumSitePeriod(rollup, range) : { pv: 0, uv: 0, trial: 0, checkout: 0, purchase: 0 };
  const seo = rollup?.seo;
  const funnel = buildFunnel(t);

  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-indigo-500/40 transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-zinc-50">{site.name}</h3>
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
            搜索优化 {seo.score} 分
          </span>
        ) : null}
      </div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
        {[
          [METRIC.pv, t.pv],
          [METRIC.uv, t.uv],
          [METRIC.trial, t.trial],
          [METRIC.checkout, t.checkout],
          [METRIC.purchase, t.purchase],
        ].map(([label, val]) => (
          <div key={label as string} className="rounded-xl bg-zinc-950/80 py-2">
            <div className="text-lg font-semibold text-zinc-100">{val as number}</div>
            <div className="text-[10px] text-zinc-500">{label as string}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-1 text-xs text-zinc-400">
        <p>
          浏览→试用 {funnel.visitToTrial} · 试用→结账 {funnel.trialToCheckout} · 结账→付费{" "}
          {funnel.checkoutToPurchase}
        </p>
        <p>
          浏览→付费 {funnel.visitToPurchase} · 访客→付费 {funnel.visitorToPurchase}
        </p>
        {seo?.lastChecked ? (
          <p>
            {seo.sitemapOk ? "✓ 站点地图" : "✗ 站点地图"} ·{" "}
            {seo.robotsOk ? "✓ 爬虫规则" : "✗ 爬虫规则"} · {seo.guideCount} 篇指南
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

export function LiveFactoryDashboard({ locale }: { locale: string }) {
  const [data, setData] = useState<DashboardPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastFetchedAt, setLastFetchedAt] = useState<string | null>(null);
  const [preset, setPreset] = useState<DatePreset>("today");
  const [siteId, setSiteId] = useState("all");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");

  const refresh = useCallback(async () => {
    try {
      const params = new URLSearchParams({ preset, site: siteId });
      if (preset === "custom" && customFrom && customTo) {
        params.set("from", customFrom);
        params.set("to", customTo);
      }
      const res = await fetch(`/api/dashboard?${params}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`请求失败 ${res.status}`);
      const json = (await res.json()) as DashboardPayload;
      setData(json);
      if (json.filters?.range) {
        setCustomFrom(json.filters.range.from);
        setCustomTo(json.filters.range.to);
      }
      setLastFetchedAt(new Date().toLocaleString("zh-CN"));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "加载失败");
    }
  }, [preset, siteId, customFrom, customTo]);

  useEffect(() => {
    refresh();
    const timer = setInterval(refresh, 20000);
    return () => clearInterval(timer);
  }, [refresh]);

  const sortedSites = useMemo(() => {
    if (!data) return [];
    const range = data.summary.dateRange;
    return [...data.sites]
      .filter((s) => siteId === "all" || s.id === siteId)
      .sort((a, b) => {
        const ap = data.rollup.sites[a.id] ? sumSitePeriod(data.rollup.sites[a.id], range).pv : 0;
        const bp = data.rollup.sites[b.id] ? sumSitePeriod(data.rollup.sites[b.id], range).pv : 0;
        return bp - ap;
      });
  }, [data, siteId]);

  const summary = data?.summary;
  const revenueGoal = data?.revenueGoal;
  const range = summary?.dateRange;
  const rollupUpdated = data?.rollup.updatedAt
    ? new Date(data.rollup.updatedAt).toLocaleString("zh-CN")
    : "暂无";

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-widest text-indigo-400">每日站点工厂</p>
            <h1 className="text-2xl font-bold mt-1">全站运营看板</h1>
          </div>
          <div className="text-right text-xs text-zinc-500">
            <p>流量 · 转化 · 搜索优化 · 收款</p>
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

        {data?.sites && range ? (
          <DashboardFilters
            locale={locale}
            sites={data.sites}
            preset={preset}
            siteId={siteId}
            range={range}
            onPresetChange={setPreset}
            onSiteChange={setSiteId}
            onCustomRange={(from, to) => {
              setPreset("custom");
              setCustomFrom(from);
              setCustomTo(to);
            }}
          />
        ) : null}

        {!summary || !range ? (
          <p className="text-zinc-500 text-center py-16">正在拉取最新数据…</p>
        ) : (
          <>
            {revenueGoal ? (
              <section className="rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-6">
                <SectionTitle title="收入目标" subtitle={revenueGoal.purpose || "距离目标还有多远"} />
                <div className="grid sm:grid-cols-4 gap-4 mb-4">
                  <MetricCard label="目标金额" value={`$${revenueGoal.targetUsd}`} hint={`截止 ${revenueGoal.deadline}`} />
                  <MetricCard
                    label="估算已收"
                    value={`$${revenueGoal.estimatedRevenueUsd.toFixed(1)}`}
                    hint={`每次付费按 $${SUBSCRIPTION_PRICE_USD} 估算`}
                    accent="text-emerald-400"
                  />
                  <MetricCard label="完成度" value={`${revenueGoal.progressPct.toFixed(1)}%`} accent="text-indigo-400" />
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
              <SectionTitle
                title={`${formatRangeLabel(range)} 数据`}
                subtitle="以下数字均按你选的日期范围统计"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                <MetricCard label={METRIC.pv} value={summary.period.pv} />
                <MetricCard label={METRIC.uv} value={summary.period.uv} />
                <MetricCard label={METRIC.trial} value={summary.period.trial} />
                <MetricCard label={METRIC.checkout} value={summary.period.checkout} />
                <MetricCard label={METRIC.purchase} value={summary.period.purchase} accent="text-emerald-400" />
              </div>
              <div className="grid sm:grid-cols-4 gap-3 mt-3">
                <MetricCard label="站点数" value={summary.siteCount} />
                <MetricCard label="有流量的站" value={summary.activeSites} hint="该时段内有浏览" />
                <MetricCard label="有付费的站" value={summary.payingSites} accent="text-emerald-400" />
                <MetricCard
                  label="估算收入"
                  value={`$${summary.estimatedRevenueUsd.toFixed(1)}`}
                  hint={`${summary.period.purchase} 次付费 × $${SUBSCRIPTION_PRICE_USD}`}
                  accent="text-emerald-400"
                />
              </div>
            </section>

            <section>
              <SectionTitle title="转化漏斗" subtitle="看访客在哪一步流失最多" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  ["浏览 → 试用", summary.funnel.visitToTrial],
                  ["试用 → 结账", summary.funnel.trialToCheckout],
                  ["结账 → 付费", summary.funnel.checkoutToPurchase],
                  ["浏览 → 结账", summary.funnel.visitToCheckout],
                  ["浏览 → 付费", summary.funnel.visitToPurchase],
                  ["访客 → 付费", summary.funnel.visitorToPurchase],
                ].map(([label, val]) => (
                  <MetricCard key={label as string} label={label as string} value={val as string} />
                ))}
              </div>
            </section>

            {data.visitorInsights ? (
              <VisitorInsightsPanel locale={locale} profile={data.visitorInsights.profile} />
            ) : null}

            <section>
              <SectionTitle title="搜索优化健康度" subtitle="影响自然搜索流量能否持续增长" />
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                <MetricCard label={SEO_LABELS.score} value={summary.seo.avgScore} />
                <MetricCard label={SEO_LABELS.excellent} value={summary.seo.excellentCount} accent="text-emerald-400" />
                <MetricCard label={SEO_LABELS.needsWork} value={summary.seo.needsWorkCount} accent="text-amber-400" />
                <MetricCard label={SEO_LABELS.sitemap} value={summary.seo.sitemapPass} />
                <MetricCard label={SEO_LABELS.robots} value={summary.seo.robotsPass} />
                <MetricCard label={SEO_LABELS.og} value={summary.seo.withOg} />
                <MetricCard label={SEO_LABELS.jsonLd} value={summary.seo.withJsonLd} />
                <MetricCard label={SEO_LABELS.guides} value={summary.seo.withGuides} />
                <MetricCard label={SEO_LABELS.scanned} value={summary.seo.checkedCount} />
              </div>
            </section>

            <section>
              <SectionTitle title={STRIPE_LABELS.title} subtitle="没配密钥就只能演示，用户付了也进不了账" />
              <div className="grid sm:grid-cols-4 gap-3">
                <MetricCard
                  label={STRIPE_LABELS.configured}
                  value={summary.stripe.configured ? "已配置" : "未配置"}
                  accent={summary.stripe.configured ? "text-emerald-400" : "text-red-400"}
                />
                <MetricCard label={STRIPE_LABELS.live} value={summary.stripe.liveCount} accent="text-emerald-400" />
                <MetricCard label={STRIPE_LABELS.demo} value={summary.stripe.demoCount} accent="text-amber-400" />
                <MetricCard label={STRIPE_LABELS.fail} value={summary.stripe.failCount} />
              </div>
            </section>

            <section>
              <SectionTitle title="流量排名（该时段）" subtitle="优先推广排名靠前的站点" />
              <div className="overflow-x-auto rounded-2xl border border-zinc-800">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-900/80 text-zinc-400">
                    <tr>
                      <th className="text-left px-4 py-3">站点</th>
                      <th className="text-right px-4 py-3">{METRIC.pv}</th>
                      <th className="text-right px-4 py-3">{METRIC.uv}</th>
                      <th className="text-right px-4 py-3">{METRIC.purchase}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summary.topSites.map((row) => (
                      <tr key={row.id} className="border-t border-zinc-800/80 hover:bg-zinc-900/40">
                        <td className="px-4 py-3">
                          <a href={row.url} target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                            {row.name}
                          </a>
                        </td>
                        <td className="text-right px-4 py-3 font-medium">{row.pv}</td>
                        <td className="text-right px-4 py-3">{row.uv}</td>
                        <td className="text-right px-4 py-3 text-emerald-400">{row.purchase}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <SectionTitle title="全部站点" subtitle="按所选时段浏览次数排序" />
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {sortedSites.map((site) => (
                  <SiteCard
                    key={site.id}
                    site={site}
                    rollup={data?.rollup.sites[site.id]}
                    range={range}
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="text-center py-8 text-zinc-600 text-xs">每日站点工厂 · 实时数据看板</footer>
    </div>
  );
}
