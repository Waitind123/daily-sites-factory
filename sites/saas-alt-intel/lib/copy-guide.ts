import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "SaaS price hike alternatives for indie founders — payoncealternatives guide 2026",
      description:
        "When competitors raise prices, how to find ranked alternatives fast: monitoring, migration playbooks, open-source swaps. Alt Intel at $29/mo.",
    },
    h1: "What to do when your SaaS stack raises prices (indie founder guide)",
    updated: "Updated July 2026 · 14 min read",
    intro: [
      "HN thread #41614926 on payoncealternatives hit 500+ comments in 2026 — founders are exhausted by surprise price hikes. Intercom doubled per-seat pricing. Zapier cut free tiers. Notion gated AI behind paid plans. The pattern: you learn from a renewal email, not a competitor comparison.",
      "This guide shows how indie founders build a price-hike early warning system and pick ranked alternatives — open-source, flat-rate, or pay-once — without spending weekends in spreadsheet hell.",
    ],
    sections: [
      {
        h2: "Why price hikes hit indie founders harder",
        list: [
          "Thin margins — a $40/mo tool becoming $80/mo is 2% of a $2K MRR product's revenue",
          "Stack sprawl — 8-12 SaaS tools means compound hikes every quarter",
          "Renewal traps — annual plans hide hikes until month 11",
          "No procurement team — you are sales, finance, and ops",
        ],
        after: [
          "The fix isn't「cancel everything」— it's knowing your exits before renewal day.",
        ],
      },
      {
        h2: "Signals a price hike is coming",
        list: [
          "Free tier limits shrink (tasks, seats, API calls)",
          "New「Pro Plus Ultra」tiers above existing plans",
          "Per-seat minimums increase on enterprise pages",
          "AI features move from included to add-on",
          "Blog posts about「sustainable pricing」— corporate speak for hikes",
        ],
        after: [
          "Track these signals weekly, or automate with daily pricing page scans.",
        ],
        link: { href: "/join", text: "Try Alt Intel free", suffix: " — 5 intel reports with ranked alternatives." },
      },
      {
        h2: "Three alternative categories to evaluate",
        ordered: [
          "Open-source self-host — n8n for Zapier, Plane for Jira, Plausible for GA4 (highest savings, needs ops)",
          "Flat-rate indie tools — $29/mo products built for solo founders, no per-seat surprises",
          "Pay-once / lifetime — smaller catalog but zero recurring if it fits your workflow",
        ],
        after: [
          "Most indie stacks save 40-70% by mixing one self-hosted core + flat-rate satellites.",
        ],
      },
      {
        h2: "Migration playbook template",
        ordered: [
          "Export data before cancellation window closes (JSON, CSV, API bulk)",
          "Map integrations — webhooks, OAuth apps, DNS records",
          "Run parallel for 2 weeks — don't hard-cut on renewal day",
          "Update team docs + client-facing URLs",
          "Set hike alert on the new tool — yes, monitor your replacement too",
        ],
        link: { href: "/intel", text: "Browse hike intel", suffix: " — Zapier, Intercom, Notion & more with alt rankings." },
      },
      {
        h2: "Tool comparison: fragmented lists vs alt intel",
        list: [
          "payoncealternatives.com — great directory, no hike alerts",
          "IndieList / AltStack — curated but manual discovery",
          "Kompyte — $10K+/yr enterprise CI, overkill for solo founders",
          "Alt Intel — $29/mo hike alerts + ranked alternatives + migration playbooks",
        ],
        after: [
          "For founders shipping on weekends, alerts + playbooks beat static directories.",
        ],
      },
      {
        h2: "Acting on a hike alert within 48 hours",
        ordered: [
          "Calculate true annual impact (seats × new price × 12)",
          "Check alt rankings — savings vs migration hours",
          "Email vendor for retention discount (often 15-20% if you ask)",
          "If switching: follow playbook, set calendar reminder before renewal",
          "Share your switch on IH/Reddit — helps others, drives backlinks",
        ],
      },
    ],
    cta: {
      title: "Ready for hike alerts with ranked alternatives?",
      body: "5 free intel reports. Daily scans, 24h alerts, migration playbooks for $29/mo.",
      primary: "Subscribe · $29/mo",
      secondary: "Try alt intel free",
    },
  },
  zh: {
    meta: {
      title: "SaaS 涨价替代品指南 — indie 创始人 payoncealternatives 2026",
      description:
        "竞品涨价怎么办？如何快速找到排名替代品：监控、迁移手册、开源平替。SaaS 替代品情报 $29/月。",
    },
    h1: "SaaS 工具涨价了怎么办？（indie 创始人指南）",
    updated: "更新于 2026 年 7 月 · 阅读约 14 分钟",
    intro: [
      "HN #41614926 关于 payoncealternatives 的帖子在 2026 年收获 500+ 评论 — 创始人厌倦了意外涨价。Intercom 按席位价格翻倍，Zapier 削减免费层，Notion 把 AI 锁进付费计划。典型场景：你从续费邮件才知道，而不是从竞品对比。",
      "这篇指南教 indie 创始人如何建立涨价预警系统，并选择排名替代品 — 开源、固定价或一次性买断 — 不用周末泡在表格里。",
    ],
    sections: [
      {
        h2: "一、为什么涨价对 indie 创始人打击更大",
        list: [
          "利润薄 — $40/月 工具涨到 $80/月，相当于 $2K MRR 产品收入的 2%",
          "工具栈膨胀 — 8-12 个 SaaS 意味着每季度复合涨价",
          "续费陷阱 — 年付计划把涨价藏到第 11 个月",
          "没有采购团队 — 你一个人兼销售、财务、运维",
        ],
        after: ["解法不是「全部取消」— 而是在续费日前知道退路。"],
      },
      {
        h2: "二、涨价来临前的信号",
        list: [
          "免费层限额缩减（任务数、席位数、API 调用）",
          "现有套餐上方新增「Pro Plus Ultra」层",
          "企业页按席位最低价上涨",
          "AI 功能从包含变为附加项",
          "博客发「可持续定价」— 企业话术即涨价预告",
        ],
        after: ["每周手动追踪这些信号，或用每日定价页扫描自动化。"],
        link: { href: "/join", text: "免费体验替代品情报", suffix: " — 含 5 次带排名替代品的报告。" },
      },
      {
        h2: "三、三类替代品评估框架",
        ordered: [
          "开源自托管 — Zapier 换 n8n、Jira 换 Plane、GA4 换 Plausible（节省最高，需运维）",
          "固定价 indie 工具 — $29/月 为 solo 设计，无按席位惊喜",
          "一次性买断 — 目录较小但零 recurring，适合匹配工作流",
        ],
        after: ["多数 indie 工具栈混合一个自托管核心 + 固定价卫星工具，可省 40-70%。"],
      },
      {
        h2: "四、迁移手册模板",
        ordered: [
          "取消窗口关闭前导出数据（JSON、CSV、API 批量）",
          "映射集成 — Webhook、OAuth 应用、DNS 记录",
          "并行运行 2 周 — 别在续费日硬切",
          "更新团队文档 + 面向客户的 URL",
          "给新工具也设涨价提醒 — 对，替代品也要监控",
        ],
        link: { href: "/intel", text: "浏览涨价情报", suffix: " — Zapier、Intercom、Notion 等含替代品排名。" },
      },
      {
        h2: "五、碎片化目录 vs 替代品情报工具",
        list: [
          "payoncealternatives.com — 好目录，无涨价提醒",
          "IndieList / AltStack — 精选但需手动发现",
          "Kompyte — 年费 $10K+ 企业 CI，solo 用不起",
          "SaaS 替代品情报 — $29/月 涨价提醒 + 排名替代品 + 迁移手册",
        ],
        after: ["对周末 ship 的创始人，提醒+手册胜过静态目录。"],
      },
      {
        h2: "六、收到涨价提醒后 48 小时内行动",
        ordered: [
          "计算真实年影响（席位 × 新价 × 12）",
          "查看替代品排名 — 节省 vs 迁移工时",
          "邮件供应商要留存折扣（开口常给 15-20%）",
          "若切换：按手册执行，续费日前设日历提醒",
          "在 IH/Reddit 分享切换经历 — 帮别人也赚外链",
        ],
      },
    ],
    cta: {
      title: "准备好涨价提醒 + 排名替代品了吗？",
      body: "免费体验 5 次情报报告。每日扫描、24h 提醒、迁移手册，$29/月。",
      primary: "立即订阅 $29/月",
      secondary: "免费体验",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
