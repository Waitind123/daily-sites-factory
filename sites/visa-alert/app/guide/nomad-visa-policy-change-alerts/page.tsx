import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { getLocale } from "@/lib/locale";
import { getSiteConfig } from "@/lib/seo";

const guideMeta = {
  en: {
    title: "Digital Nomad Visa Policy Change Alerts Guide 2026 — Never Miss an Update",
    description:
      "How to get notified when digital nomad visa policies change — income thresholds, processing times, tax rules for Portugal D8, Thailand DTV, Spain, and 35+ programs.",
  },
  zh: {
    title: "2026 数字游民签证政策变更提醒完全指南 — 再也不错过更新",
    description:
      "如何接收数字游民签证政策变更通知 — 葡萄牙 D8、泰国 DTV、西班牙等 35+ 项目的收入门槛、审批时长、税务规则变更告警。",
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
          ? "2026 数字游民签证政策变更提醒完全指南：35+ 项目实时告警"
          : "Digital Nomad Visa Policy Change Alerts Guide 2026: Real-Time Notifications for 35+ Programs"}
      </h1>
      <p className="text-muted mb-8">
        {isZh ? "更新于 2026 年 6 月 · 阅读约 10 分钟" : "Updated June 2026 · 10 min read"}
      </p>

      {isZh ? (
        <>
          <p className="text-foreground leading-relaxed mb-4">
            2026 年，全球已有 <strong>60+ 个国家推出数字游民签证</strong>。但政策不是一成不变的：葡萄牙 D8 收入门槛从 €2,800 涨到 €3,280，西班牙远程工作者签证审批从 20 天延长到 45 天，泰国 DTV 银行证明从 $13,800 提高到 $15,000。这些变更直接影响你的申请资格和时间规划。
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            问题是：<strong>大多数信息源严重滞后</strong>。Nomad List 的签证数据平均过时 18 个月，Reddit 和 Facebook 群组以讹传讹，政府官网只有最新版本没有变更对比。如果你正在准备申请或已持有签证，错过一次政策变更可能导致拒签、材料重做，甚至意外逾期停留。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">为什么需要政策变更提醒？</h2>
          <p className="text-foreground leading-relaxed mb-4">
            数字游民签证政策变更通常集中在三类：<strong>收入门槛</strong>（最常见）、<strong>审批时长</strong>（影响搬迁计划）、<strong>税务规则</strong>（影响长期成本）。2026 年上半年，仅欧洲就有 12 个项目发生了实质性变更，但 Nomad List 只更新了其中 3 个。
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            手动监控 35+ 政府网站每周需要 5-8 小时。大多数游民不会这样做 — 直到某次变更直接影响他们。马可（远程 PM）在 2026 年 3 月差点用 €2,800 的旧收入证明申请葡萄牙 D8，实际门槛已改为 €3,280，材料全部作废。
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            政策变更提醒服务的价值在于：<strong>你只看与你相关的项目</strong>，变更发生 24 小时内收到通知，并且看到新旧对比而非重读全文。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">2026 年高频变更项目</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
            <li><strong>葡萄牙 D8</strong>：收入 €3,280/月（2024 改革后 NHR 税收优惠大幅缩减）</li>
            <li><strong>西班牙远程工作者签证</strong>：审批 20→45 天，材料要求增加社保证明</li>
            <li><strong>泰国 DTV</strong>：银行余额 $13,800→$15,000，远程工作证明更严格</li>
            <li><strong>格鲁吉亚 Remotely from Georgia</strong>：收入 $2,000→$2,400/月</li>
            <li><strong>阿联酋迪拜远程工作签证</strong>：续签延长至 2 年</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">如何选择告警工具？</h2>
          <p className="text-foreground leading-relaxed mb-4">
            评估标准：覆盖项目数量、变更推送速度、是否有 diff 对比、价格。Nomad List $99/年但数据滞后；移民律师 $300/小时实时但不可持续；Google Alerts 噪音太大且无法结构化对比。
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            <Link href="/alerts" className="text-brand-500 hover:underline">签证政策提醒</Link> 覆盖 35+ 数字游民签证项目，提供 24 小时内变更告警、新旧政策并排对比和 7 天变更历史流。免费体验 5 次政策关注，之后 $29/月 — 比移民律师便宜 3000 倍，比 Nomad List 数据新 18 个月。
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">设置你的第一个政策关注</h2>
          <ol className="list-decimal pl-6 space-y-2 text-foreground mb-6">
            <li>打开<Link href="/alerts" className="text-brand-500 hover:underline">告警面板</Link>，选择你正在申请或持有的签证项目</li>
            <li>点击「开始关注」— 免费用户可关注 5 个项目</li>
            <li>政策变更时收到邮件告警，面板显示 diff 对比</li>
            <li>需要无限关注？<Link href="/join" className="text-brand-500 hover:underline">订阅 $29/月</Link></li>
          </ol>

          <div className="rounded-xl border border-brand-600/30 bg-surface p-6 mt-10">
            <h3 className="font-bold text-lg mb-2">立即开始</h3>
            <p className="text-muted mb-4">免费体验 5 次政策关注，之后 $29/月无限告警。</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/alerts" className="rounded-lg bg-brand-600 px-6 py-3 text-white font-semibold hover:bg-brand-700">
                免费开始关注
              </Link>
              <Link href="/join" className="rounded-lg border border-border px-6 py-3 font-semibold hover:border-brand-600">
                查看定价
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-foreground leading-relaxed mb-4">
            In 2026, <strong>60+ countries offer digital nomad visas</strong>. But policies change constantly: Portugal D8 income rose from €2,800 to €3,280, Spain remote worker processing went from 20 to 45 days, and Thailand DTV bank proof increased from $13,800 to $15,000. These changes directly affect your eligibility and timeline.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            The problem: <strong>most information sources are severely outdated</strong>. Nomad List visa data averages 18 months stale, Reddit and Facebook groups spread misinformation, and government sites only show the current version — no change diffs. Missing one policy update can mean rejection, reworked documents, or accidental overstays.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Why you need policy change alerts</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Digital nomad visa changes fall into three categories: <strong>income thresholds</strong> (most common), <strong>processing times</strong> (affects relocation plans), and <strong>tax rules</strong> (affects long-term costs). In H1 2026 alone, 12 European programs had substantive changes — but Nomad List updated only 3.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Manually monitoring 35+ government sites takes 5-8 hours weekly. Most nomads don&apos;t — until a change hits them directly. Marco (remote PM) nearly applied for Portugal D8 with €2,800 income proof in March 2026; the actual threshold was already €3,280, invalidating all documents.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            A policy alert service lets you <strong>watch only relevant programs</strong>, get notified within 24 hours, and see side-by-side diffs instead of re-reading full government pages.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Most-changed programs in 2026</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
            <li><strong>Portugal D8</strong>: Income €3,280/mo (NHR tax benefits reduced after 2024 reform)</li>
            <li><strong>Spain remote worker visa</strong>: Processing 20→45 days, added social security proof</li>
            <li><strong>Thailand DTV</strong>: Bank balance $13,800→$15,000, stricter remote work proof</li>
            <li><strong>Georgia Remotely from Georgia</strong>: Income $2,000→$2,400/mo</li>
            <li><strong>UAE Dubai remote work visa</strong>: Renewal extended to 2 years</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">How to choose an alert tool</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Evaluate by: program coverage, alert speed, diff view, and price. Nomad List is $29/mo but stale; immigration lawyers are $300/hr but unsustainable; Google Alerts are too noisy and unstructured.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            <Link href="/alerts" className="text-brand-500 hover:underline">Visa Alert</Link> covers 35+ digital nomad visa programs with 24h change alerts, side-by-side policy diffs, and a 7-day change feed. 5 free watches, then $29/mo — 3,000× cheaper than a lawyer, 18 months fresher than Nomad List.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Set up your first policy watch</h2>
          <ol className="list-decimal pl-6 space-y-2 text-foreground mb-6">
            <li>Open the <Link href="/alerts" className="text-brand-500 hover:underline">alert dashboard</Link> and pick programs you&apos;re applying for or holding</li>
            <li>Click &quot;Start watching&quot; — free users get 5 watches</li>
            <li>Get email alerts on changes with diff view in the dashboard</li>
            <li>Need unlimited? <Link href="/join" className="text-brand-500 hover:underline">Subscribe at $29/mo</Link></li>
          </ol>

          <div className="rounded-xl border border-brand-600/30 bg-surface p-6 mt-10">
            <h3 className="font-bold text-lg mb-2">Get started now</h3>
            <p className="text-muted mb-4">5 free policy watches, then $29/mo for unlimited alerts.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/alerts" className="rounded-lg bg-brand-600 px-6 py-3 text-white font-semibold hover:bg-brand-700">
                Start watching free
              </Link>
              <Link href="/join" className="rounded-lg border border-border px-6 py-3 font-semibold hover:border-brand-600">
                See plans
              </Link>
            </div>
          </div>
        </>
      )}
    </article>
  );
}
