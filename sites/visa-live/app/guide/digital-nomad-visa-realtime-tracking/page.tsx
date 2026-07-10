import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { getLocale } from "@/lib/locale";
import { getSiteConfig } from "@/lib/seo";

const guideMeta = {
  en: {
    title: "Real-Time Digital Nomad Visa Tracking Guide 2026 — Policy Changes & Expiry Alerts",
    description:
      "How to track digital nomad visa policies in real time, set expiry reminders, and stay updated on RelocateMe 2026 changes for Portugal D8, Thailand DTV, Spain, and 35+ programs.",
  },
  zh: {
    title: "2026 数字游民签证政策实时追踪指南 — 到期提醒与变更告警",
    description:
      "如何实时追踪数字游民签证政策、设置到期提醒、关注 RelocateMe 2026 报告中葡萄牙 D8、泰国 DTV、西班牙等 35+ 项目变更。",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const g = guideMeta[locale];
  const cfg = getSiteConfig(locale);
  return buildSiteMetadata({ ...cfg, keywords: [...cfg.keywords] }, {
    title: g.title,
    description: g.description,
  });
}

export default async function GuidePage() {
  const locale = await getLocale();
  const isZh = locale === "zh";

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        {isZh
          ? "2026 数字游民签证政策实时追踪指南：RelocateMe 报告解读与到期提醒"
          : "Real-Time Digital Nomad Visa Tracking Guide 2026: RelocateMe Report & Expiry Alerts"}
      </h1>
      <p className="text-muted mb-8">
        {isZh ? "更新于 2026 年 7 月 · 阅读约 10 分钟" : "Updated July 2026 · 10 min read"}
      </p>

      {isZh ? (
        <>
          <p className="text-foreground leading-relaxed mb-4">
            RelocateMe 2026 年《签证世界杯》报告显示，<strong>60+ 个国家数字游民签证门槛在过去 18 个月内发生变动</strong>，但 Nomad List 的数据平均滞后 18 个月。Basehop 等免费替代品的政策数据同样不实时。对多签证游民来说，<strong>政策变更与到期日</strong>是最被忽视的风险。
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            本指南教你如何用系统化方法实时追踪签证政策、设置到期提醒，并在续签窗口到来前做好准备。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">为什么需要实时签证追踪？</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted mb-6">
            <li><strong>RelocateMe 2026 报告</strong>：多数热门签证项目收入门槛、审批时长在 2025–2026 年有变动</li>
            <li><strong>Nomad List 数据过时</strong>：葡萄牙 D8 仍显示 €2,800，实际已核实为 €3,280</li>
            <li><strong>到期日易忘</strong>：泰国 DTV + 葡萄牙 D8 等多签证游民容易混淆续签时间</li>
            <li><strong>逾期代价高</strong>：泰国逾期每天罚款 500 泰铢，申根区逾期可能导致 5 年入境禁令</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">五步实时追踪法</h2>
          <ol className="list-decimal pl-6 space-y-4 text-muted mb-6">
            <li><strong>记录所有活跃签证</strong>：国家、项目名、签发日、到期日、续签条件</li>
            <li><strong>订阅政策变更流</strong>：关注收入门槛、停留时长、税务规则实时变化</li>
            <li><strong>设置 30 天和 7 天到期提醒</strong>：留足材料准备和预约时间</li>
            <li><strong>对比政策变更 diff</strong>：看清 €2,800 → €3,280 等具体变化，不用重读政府官网</li>
            <li><strong>提前生成续签清单</strong>：根据最新政策准备材料，避免临时补件</li>
          </ol>

          <h2 className="text-2xl font-bold mt-10 mb-4">2026 年 RelocateMe 报告重点变更</h2>
          <div className="rounded-xl border border-border bg-surface p-5 mb-6 space-y-3 text-sm">
            <p>🇵🇹 <strong>葡萄牙 D8</strong>：收入门槛核实为 €3,280/月（Nomad List 仍显示 €2,800）</p>
            <p>🇹🇭 <strong>泰国 DTV</strong>：银行余额证明 $13,800→$15,000</p>
            <p>🇪🇸 <strong>西班牙远程签证</strong>：审批时间延长至 20–45 天</p>
            <p>🇱🇰 <strong>斯里兰卡 DNV</strong>：2026 年 7 月新上线，$2,000/月收入门槛</p>
            <p>🇨🇴 <strong>哥伦比亚 V 签证</strong>：申请费 $177→$230</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Visa Live 如何帮你</h2>
          <p className="text-muted leading-relaxed mb-4">
            <Link href="/track" className="text-brand-500 hover:underline">签证政策实时追踪</Link> 覆盖 35+ 数字游民签证项目，提供到期倒计时、实时政策变更对比和续签清单。免费体验 5 次追踪，之后 $29/月 — 比移民律师便宜 3000 倍。
          </p>

          <div className="mt-10 rounded-xl bg-brand-600/10 border border-brand-600/30 p-6 text-center">
            <p className="font-semibold text-lg mb-3">免费开始实时追踪你的签证</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/track" className="rounded-lg bg-brand-600 px-6 py-3 text-white font-semibold hover:bg-brand-700">
                免费追踪 5 次
              </Link>
              <Link href="/join" className="rounded-lg border border-border px-6 py-3 font-semibold hover:bg-surface">
                查看定价
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-foreground leading-relaxed mb-4">
            The RelocateMe 2026 World Cup of Visas report shows <strong>60+ countries changed digital nomad visa thresholds in the past 18 months</strong>, yet Nomad List data averages 18 months stale. Free alternatives like Basehop don&apos;t track policy changes in real time. For multi-visa nomads, <strong>policy changes and expiry dates</strong> are the most overlooked risks.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            This guide shows you how to track visa policies in real time, set expiry reminders, and prepare for renewals before deadlines hit.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Why you need real-time visa tracking</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted mb-6">
            <li><strong>RelocateMe 2026 report</strong>: most popular visa programs changed income thresholds and processing times in 2025–2026</li>
            <li><strong>Nomad List data is stale</strong>: Portugal D8 still shows €2,800, verified at €3,280</li>
            <li><strong>Expiry dates get forgotten</strong>: multi-visa nomads (Thailand DTV + Portugal D8) easily mix up renewal windows</li>
            <li><strong>Overstay is expensive</strong>: Thailand fines 500 THB/day; Schengen overstays can mean 5-year entry bans</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">The 5-step real-time tracking method</h2>
          <ol className="list-decimal pl-6 space-y-4 text-muted mb-6">
            <li><strong>Log all active visas</strong>: country, program, issue date, expiry, renewal conditions</li>
            <li><strong>Subscribe to policy change feeds</strong>: watch income thresholds, stay duration, tax rules in real time</li>
            <li><strong>Set 30-day and 7-day expiry alerts</strong>: leave time for documents and appointments</li>
            <li><strong>Review policy change diffs</strong>: see €2,800 → €3,280 changes without re-reading government sites</li>
            <li><strong>Generate renewal checklists early</strong>: prepare documents based on current policy</li>
          </ol>

          <h2 className="text-2xl font-bold mt-10 mb-4">Key changes from RelocateMe 2026 report</h2>
          <div className="rounded-xl border border-border bg-surface p-5 mb-6 space-y-3 text-sm">
            <p>🇵🇹 <strong>Portugal D8</strong>: income verified at €3,280/mo (Nomad List still shows €2,800)</p>
            <p>🇹🇭 <strong>Thailand DTV</strong>: bank balance proof $13,800→$15,000</p>
            <p>🇪🇸 <strong>Spain remote visa</strong>: processing extended to 20–45 days</p>
            <p>🇱🇰 <strong>Sri Lanka DNV</strong>: launched July 2026, $2,000/mo income threshold</p>
            <p>🇨🇴 <strong>Colombia V visa</strong>: application fee $177→$230</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">How Visa Live helps</h2>
          <p className="text-muted leading-relaxed mb-4">
            <Link href="/track" className="text-brand-500 hover:underline">Visa Live</Link> covers 35+ digital nomad visa programs with expiry countdowns, real-time policy change diffs, and renewal checklists. 5 free tracks, then $29/mo — 3,000× cheaper than an immigration lawyer.
          </p>

          <div className="mt-10 rounded-xl bg-brand-600/10 border border-brand-600/30 p-6 text-center">
            <p className="font-semibold text-lg mb-3">Start real-time visa tracking for free</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/track" className="rounded-lg bg-brand-600 px-6 py-3 text-white font-semibold hover:bg-brand-700">
                5 free tracks
              </Link>
              <Link href="/join" className="rounded-lg border border-border px-6 py-3 font-semibold hover:bg-surface">
                See plans
              </Link>
            </div>
          </div>
        </>
      )}
    </article>
  );
}
