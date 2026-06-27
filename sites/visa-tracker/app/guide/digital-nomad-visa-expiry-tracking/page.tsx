import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { getLocale } from "@/lib/locale";
import { getSiteConfig } from "@/lib/seo";

const guideMeta = {
  en: {
    title: "Digital Nomad Visa Expiry Tracking Guide 2026 — Never Overstay Again",
    description:
      "How to track digital nomad visa expiry dates, set renewal reminders, and stay updated on policy changes for Portugal D8, Thailand DTV, Spain, and 30+ programs.",
  },
  zh: {
    title: "2026 数字游民签证到期追踪完全指南 — 再也不逾期停留",
    description:
      "如何追踪数字游民签证到期日、设置续签提醒、关注葡萄牙 D8、泰国 DTV、西班牙等 30+ 项目政策变更。",
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
          ? "2026 数字游民签证到期追踪完全指南：30+ 项目政策变更与续签提醒"
          : "Digital Nomad Visa Expiry Tracking Guide 2026: Policy Changes & Renewal Alerts for 30+ Programs"}
      </h1>
      <p className="text-muted mb-8">
        {isZh ? "更新于 2026 年 6 月 · 阅读约 10 分钟" : "Updated June 2026 · 10 min read"}
      </p>

      {isZh ? (
        <>
          <p className="text-foreground leading-relaxed mb-4">
            2026 年，全球已有 <strong>60+ 个国家推出数字游民签证</strong>。但大多数游民面临一个被忽视的风险：<strong>签证到期日与政策变更</strong>。Nomad List 的签证数据平均滞后 18 个月，Reddit 帖子更是以讹传讹。逾期停留的罚款从 $500 到遣返禁令不等。
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            本指南教你如何用系统化方法追踪签证到期、关注政策变更，并在续签窗口到来前做好准备。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">为什么需要签证追踪器？</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted mb-6">
            <li><strong>政策频繁变更</strong>：葡萄牙 D8 收入门槛 2026 年从 €2,800 涨至 €3,280，泰国 DTV 银行余额要求也在上调</li>
            <li><strong>到期日易忘</strong>：多签证游民（如泰国 DTV + 葡萄牙 D8）容易混淆续签时间</li>
            <li><strong>信息源不可靠</strong>：Nomad List 不追踪签证，移民中介 $300/小时，Reddit 信息过时</li>
            <li><strong>逾期代价高</strong>：泰国逾期每天罚款 500 泰铢，申根区逾期可能导致 5 年入境禁令</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">五步追踪法</h2>
          <ol className="list-decimal pl-6 space-y-4 text-muted mb-6">
            <li><strong>记录所有活跃签证</strong>：国家、项目名、签发日、到期日、续签条件</li>
            <li><strong>设置 30 天和 7 天提醒</strong>：留足材料准备和预约时间</li>
            <li><strong>订阅政策变更流</strong>：关注收入门槛、停留时长、税务规则变化</li>
            <li><strong>提前生成续签清单</strong>：根据最新政策准备材料，避免临时补件</li>
            <li><strong>对齐旅行日历</strong>：确保签证空档期不影响行程</li>
          </ol>

          <h2 className="text-2xl font-bold mt-10 mb-4">2026 年重点关注的政策变更</h2>
          <div className="rounded-xl border border-border bg-surface p-5 mb-6 space-y-3 text-sm">
            <p>🇵🇹 <strong>葡萄牙 D8</strong>：收入门槛核实为 €3,280/月（Nomad List 仍显示 €2,800）</p>
            <p>🇹🇭 <strong>泰国 DTV</strong>：银行余额证明 $13,800→$15,000</p>
            <p>🇪🇸 <strong>西班牙远程签证</strong>：审批时间延长至 20–45 天</p>
            <p>🇬🇪 <strong>格鲁吉亚 Remotely from Georgia</strong>：收入门槛 $2,000→$2,400/月</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Visa Tracker 如何帮你</h2>
          <p className="text-muted leading-relaxed mb-4">
            <Link href="/track" className="text-brand-500 hover:underline">签证追踪器</Link> 覆盖 35+ 数字游民签证项目，提供到期倒计时、政策变更对比和续签清单。免费体验 5 次追踪，之后 $9.9/月 — 比移民律师便宜 3000 倍。
          </p>

          <div className="mt-10 rounded-xl bg-brand-600/10 border border-brand-600/30 p-6 text-center">
            <p className="font-semibold text-lg mb-3">免费开始追踪你的签证</p>
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
            In 2026, <strong>60+ countries offer digital nomad visas</strong>. But most nomads overlook a critical risk: <strong>visa expiry dates and policy changes</strong>. Nomad List visa data averages 18 months stale. Reddit posts are unreliable. Overstay fines range from $500 to multi-year entry bans.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            This guide shows you how to systematically track visa expiry, monitor policy changes, and prepare for renewals before deadlines hit.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Why you need a visa tracker</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted mb-6">
            <li><strong>Policies change frequently</strong>: Portugal D8 income rose from €2,800 to €3,280 in 2026; Thailand DTV bank balance requirements are increasing</li>
            <li><strong>Expiry dates get forgotten</strong>: Multi-visa nomads (Thailand DTV + Portugal D8) easily mix up renewal windows</li>
            <li><strong>Information sources are unreliable</strong>: Nomad List ignores visas; immigration lawyers charge $300/hr; Reddit is outdated</li>
            <li><strong>Overstay is expensive</strong>: Thailand fines 500 THB/day; Schengen overstays can mean 5-year entry bans</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">The 5-step tracking method</h2>
          <ol className="list-decimal pl-6 space-y-4 text-muted mb-6">
            <li><strong>Log all active visas</strong>: country, program, issue date, expiry, renewal conditions</li>
            <li><strong>Set 30-day and 7-day alerts</strong>: leave time for documents and appointments</li>
            <li><strong>Subscribe to policy change feeds</strong>: watch income thresholds, stay duration, tax rules</li>
            <li><strong>Generate renewal checklists early</strong>: prepare documents based on current policy</li>
            <li><strong>Align with travel calendar</strong>: avoid gaps between visa validity periods</li>
          </ol>

          <h2 className="text-2xl font-bold mt-10 mb-4">Key policy changes to watch in 2026</h2>
          <div className="rounded-xl border border-border bg-surface p-5 mb-6 space-y-3 text-sm">
            <p>🇵🇹 <strong>Portugal D8</strong>: income verified at €3,280/mo (Nomad List still shows €2,800)</p>
            <p>🇹🇭 <strong>Thailand DTV</strong>: bank balance proof $13,800→$15,000</p>
            <p>🇪🇸 <strong>Spain remote visa</strong>: processing extended to 20–45 days</p>
            <p>🇬🇪 <strong>Georgia Remotely</strong>: income threshold $2,000→$2,400/mo</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">How Visa Tracker helps</h2>
          <p className="text-muted leading-relaxed mb-4">
            <Link href="/track" className="text-brand-500 hover:underline">Visa Tracker</Link> covers 35+ digital nomad visa programs with expiry countdowns, policy change diffs, and renewal checklists. 5 free tracks, then $9.9/mo — 3,000× cheaper than an immigration lawyer.
          </p>

          <div className="mt-10 rounded-xl bg-brand-600/10 border border-brand-600/30 p-6 text-center">
            <p className="font-semibold text-lg mb-3">Start tracking your visas for free</p>
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
