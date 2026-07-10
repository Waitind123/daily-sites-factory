import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "Indie competitor pricing monitor guide — auto-track SaaS price changes",
      description:
        "How to monitor Notion, Linear, Cursor pricing changes: manual vs automated, tool comparison, pricing strategy. Cheaper than RivalPeek at $29/mo.",
    },
    h1: "Indie competitor pricing monitor: how to auto-track SaaS price changes",
    updated: "Updated June 2026 · 12 min read",
    intro: [
      "The most awkward indie moment: a prospect says \"you're more expensive than XX\" — and you had no idea they cut prices 20% last week. On Indie Hackers, founders complain about manually opening 4-5 competitor pricing tabs every Monday, forgetting by Friday, then learning about changes from sales calls three weeks later.",
      "This guide helps you build a competitor pricing monitoring system — from manual hacks to automated tools — at indie-affordable cost ($0–10/mo).",
    ],
    sections: [
      {
        h2: "Why indie founders must track competitor pricing",
        list: [
          "Pricing changes are accelerating — 60%+ of SaaS companies adjust pricing yearly",
          "Changes aren't just prices — feature gating, free tier cuts, new tiers are harder to spot",
          "Information gap = lost deals — 3 weeks late on a competitor cut means 3 weeks of disadvantage",
          "Pricing meetings need data — \"how much did they raise\" without history is guesswork",
        ],
        after: [
          "What founders need isn't \"screenshot harder\" — it's \"tell me when something changes.\"",
        ],
      },
      {
        h2: "Manual vs automated monitoring",
        list: [
          "Manual ($0): good for 1-2 competitors, breaks at 5+",
          "Spreadsheet tracking: weekly calendar reminder, still easy to miss",
          "Google Alerts: useless for pricing page changes",
          "Automated ($29/mo): daily checks, email alerts, 90-day history",
        ],
        after: [
          "At 3+ competitors, automation pays for itself in one saved deal.",
        ],
        link: { href: "/join", text: "Try SaaS Price Tracker free", suffix: " — 5 deep-dives included." },
      },
      {
        h2: "What to track beyond the headline price",
        ordered: [
          "Per-seat vs usage-based pricing shifts",
          "Free tier limit reductions (silent conversion tactic)",
          "Feature moves between tiers (AI gating is 2026's top trend)",
          "New premium tiers (Ultra plans targeting power users)",
          "Overage fee changes (bandwidth, API calls)",
        ],
      },
      {
        h2: "Tool comparison for indie budgets",
        list: [
          "RivalPeek — $49/mo, enterprise-focused, overkill for solo founders",
          "CostPeek — $9/mo, AI extraction, good for 3-20 competitors",
          "SaaS Price Tracker — $29/mo, pre-loaded indie stack + strategy tips",
          "Manual screenshots — $0 but costs 2h/week of founder time",
        ],
        after: [
          "For indie founders shipping on weekends, pre-loaded data beats configuring scrapers.",
        ],
        link: { href: "/track", text: "Browse tracked products", suffix: " — Notion, Linear, Cursor & more." },
      },
      {
        h2: "Acting on pricing intelligence",
        ordered: [
          "Competitor raises → test \"we didn't raise\" messaging in sales",
          "Competitor cuts → evaluate if you need to match or differentiate",
          "Free tier gutted → opportunity to attract switchers",
          "New premium tier → signal they're pushing ARPU upmarket",
          "Document every change for your next pricing review",
        ],
      },
    ],
    cta: {
      title: "Ready to stop screenshotting pricing pages?",
      body: "5 free deep-dives. Daily checks, 90-day history, email alerts for $29/mo.",
      primary: "Subscribe · $29/mo",
      secondary: "Try tracking free",
    },
  },
  zh: {
    meta: {
      title: "Indie 开发者竞品定价监控指南 — 如何自动追踪 SaaS 价格变动",
      description:
        "手把手教你监控 Notion、Linear、Cursor 等竞品定价变动：手动 vs 自动方案、工具对比、定价策略应对。比 RivalPeek $49/月 便宜的 indie 方案。",
    },
    h1: "Indie 开发者竞品定价监控指南：如何自动追踪 SaaS 价格变动",
    updated: "更新于 2026 年 6 月 · 阅读约 12 分钟",
    intro: [
      "独立开发者最尴尬的时刻之一：潜在客户说「你们比 XX 贵」，而你根本不知道竞品上周刚降了 20%。Indie Hackers 上最常见的抱怨是每周手动打开 4-5 个竞品定价页截图对比，一周后全忘了，三周后从销售电话才知道竞品已经调价。",
      "这篇指南帮你建立一套竞品定价监控体系，从手动方案到自动化工具，覆盖 indie 开发者能负担的成本范围（$0-10/月）。",
    ],
    sections: [
      {
        h2: "一、为什么 indie 开发者必须追踪竞品定价？",
        list: [
          "定价变动频率在上升 — 超过 60% 的 SaaS 公司每年至少调整一次定价",
          "变动不只是价格 — 功能门控、免费额度缩减、新套餐推出更难发现",
          "信息差 = 丢单 — 竞品降价 3 周后你才知道，意味着至少 3 周的定价劣势",
          "定价会议需要数据 — 「他们涨了多少」没有历史数据只能猜",
        ],
        after: ["创始人真正需要的不是「更勤奋地截图」，而是「变动了自动通知我」。"],
      },
      {
        h2: "二、手动监控 vs 自动监控",
        list: [
          "手动方案（$0）：适合 1-2 个竞品，5 个以上就崩了",
          "表格追踪：每周日历提醒，仍然容易遗漏",
          "Google Alerts：对定价页变动基本无用",
          "自动化（$29/月）：每日检查、邮件提醒、90 天历史",
        ],
        after: ["追踪 3 个以上竞品时，自动化工具一单回本。"],
        link: { href: "/join", text: "免费体验 SaaS 价格追踪", suffix: " — 含 5 次深度追踪。" },
      },
      {
        h2: "三、除了 headline 价格还要追踪什么",
        ordered: [
          "按席位 vs 按用量定价模式变化",
          "免费额度缩减（隐性转化手段）",
          "功能在套餐间移动（AI 门控是 2026 年主流）",
          "新增高端层（Ultra 计划瞄准重度用户）",
          "超额费用变动（带宽、API 调用）",
        ],
      },
      {
        h2: "四、indie 预算工具对比",
        list: [
          "RivalPeek — $49/月，面向企业，solo founder 用不起",
          "CostPeek — $9/月，AI 提取，适合 3-20 个竞品",
          "SaaS 价格追踪 — $29/月，预装 indie 常用栈 + 策略建议",
          "手动截图 — $0 但每周花 2 小时创始人时间",
        ],
        after: ["对周末 ship 的 indie 创始人，预装数据比配置爬虫更实际。"],
        link: { href: "/track", text: "浏览追踪产品", suffix: " — Notion、Linear、Cursor 等。" },
      },
      {
        h2: "五、收到定价情报后怎么行动",
        ordered: [
          "竞品涨价 → 测试「我们没涨价」销售话术",
          "竞品降价 → 评估是否需要跟进或差异化",
          "免费层缩水 → 吸引迁移用户的机会",
          "新增高端层 → 信号是他们正在推 ARPU 上移",
          "每次变动都记录，为下次定价评审做准备",
        ],
      },
    ],
    cta: {
      title: "准备好停止每周截图定价页了吗？",
      body: "免费体验 5 次深度追踪。每日检查、90 天历史、邮件提醒，$29/月。",
      primary: "立即订阅 $29/月",
      secondary: "免费体验",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
