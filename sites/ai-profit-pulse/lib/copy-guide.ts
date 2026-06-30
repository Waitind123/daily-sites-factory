import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    meta: {
      title: "2026 AI SaaS Customer Profit Tracking Guide — Per-Customer Margin Analysis",
      description:
        "Stripe shows revenue growing but OpenAI bills rising faster? Learn how indie hackers track per-customer AI profit margins without $49+/mo enterprise tools.",
    },
    h1: "2026 AI SaaS Customer Profit Tracking: Per-Customer Margin Guide",
    updated: "Updated June 2026 · 11 min read",
    intro: [
      "Your MRR chart goes up every month. Stripe looks healthy. But your OpenAI bill jumped 3x last quarter and you have no idea which customers caused it. Sound familiar?",
      "This is the hidden crisis of AI-native SaaS in 2026: revenue grows linearly, but AI API costs grow with usage — and a few heavy users can destroy your margins without you noticing until it's too late.",
      "ChartMogul and Baremetrics show MRR, churn, and customer count. They don't show whether Customer #47 costs you $78/month in GPT-4 calls while paying $99/month. That's a 21% margin — or negative if they upgrade their usage.",
      "On Indie Hackers and r/SaaS, founders repeatedly ask: \"How do I track AI costs per customer?\" One wrote: \"My MRR is $8K but I'm pretty sure I'm losing money on 3 power users.\" Another: \"OpenAI billing is a black box — I can't attribute costs to customers.\"",
      "This guide explains why per-customer profit tracking matters for AI SaaS, how to calculate margins without enterprise tools, and what to do when you find unprofitable customers.",
    ],
    sections: [
      {
        h2: "Why MRR alone lies to AI SaaS founders",
        paragraphs: ["Traditional SaaS metrics assume near-zero marginal cost per customer. AI SaaS breaks this assumption:"],
        list: [
          "GPT-4o costs ~$5 per million input tokens — heavy users can burn $50-200/month",
          "A $29/month customer using your AI feature 500 times/day may cost you $31 in API calls",
          "Revenue scales with subscriptions; AI costs scale with actual usage",
          "One unprofitable enterprise trial can wipe out profit from 20 small customers",
        ],
        after: [
          "The fix isn't stopping AI features — it's knowing which customers are profitable and adjusting pricing, usage caps, or upsells accordingly.",
        ],
      },
      {
        h2: "2026 tools for AI cost tracking compared",
        tools: [
          {
            h3: "OpenAI Usage Dashboard — free",
            p: "Shows total API spend by API key. No per-customer attribution. You see $471/month total but can't map it to Stripe customers.",
          },
          {
            h3: "Stripe Billing Meters — complex",
            p: "Stripe's 2026 Meter API enables usage-based billing. Powerful but requires engineering to emit meter events per customer per AI call. Great for billing, not for margin analysis.",
          },
          {
            h3: "AICost.ai / Margine — $49+/mo",
            p: "Enterprise-focused AI cost monitoring. Good for teams with dedicated finance ops. Overkill for solo founders with 50-200 customers.",
          },
          {
            h3: "Google Sheets — free",
            p: "Manual: export Stripe revenue, paste OpenAI costs, match by customer email. Works until you have 30+ customers, then becomes a weekly nightmare.",
          },
          {
            h3: "AI Profit Pulse — $9.9/mo flat",
            p: "Built for indie hackers: connect Stripe, see per-customer revenue vs AI cost, margin %, and unprofitable customer alerts.",
            link: { href: "/join", text: "5 free analyses to try", suffix: ", then $9.9/mo flat. No per-customer fees." },
          },
        ],
      },
      {
        h2: "How to calculate per-customer AI profit",
        paragraphs: ["The formula every AI SaaS founder should know:"],
        ordered: [
          "Customer Revenue = their Stripe subscription amount (monthly)",
          "Customer AI Cost = sum of API calls attributed to their user ID",
          "Gross Profit = Revenue − AI Cost",
          "Margin % = (Gross Profit / Revenue) × 100",
        ],
        after: [
          "Healthy AI SaaS margins: 60-80% gross margin per customer. Below 30% means you need usage caps or price increases. Negative margin means you're subsidizing that customer.",
        ],
      },
      {
        h2: "What to do when you find unprofitable customers",
        paragraphs: [
          "Real scenario: you analyze 8 customers and find StartupXYZ pays $99/mo but costs $78 in AI calls (21% margin) while SoloFounder pays $29/mo but costs $31 (-7% margin, losing money).",
          "Three actions indie founders take:",
        ],
        ordered: [
          "Usage caps — limit free-tier or low-tier users to N AI calls per day",
          "Tiered pricing — move heavy users to a Pro plan that covers AI costs + margin",
          "Personal outreach — email unprofitable customers: \"We noticed high usage, here's an upgrade that saves you money per call\"",
        ],
        after: [
          "The worst action is doing nothing. Every month you serve unprofitable customers, you burn cash that could fund growth.",
        ],
      },
      {
        h2: "Setting up profit tracking in 2 minutes",
        paragraphs: ["The fastest path for a solo AI SaaS founder:"],
        ordered: [
          "Create a restricted read-only Stripe API key",
          "Connect it to your profit dashboard",
          "Set your monthly AI budget cap for alerts",
          "Click analyze — see per-customer profit table instantly",
          "Review weekly: spot margin drops before they compound",
        ],
        after: [
          "Most founders over-engineer cost tracking before they have paying customers. Start with a simple per-customer table. Add automated metering only when you hit 500+ customers.",
        ],
      },
      {
        h2: "Pricing math: why $9.9/mo pays for itself",
        paragraphs: [
          "One saved unprofitable customer paying $99/mo with $78 AI cost = $21/month recovered margin.",
          "AI Profit Pulse at $9.9/mo pays for itself if it helps you fix ONE customer's pricing.",
          "Compare: AICost.ai at $49/mo requires saving 2+ customers to break even. Enterprise tools at $200+/mo need a finance team to justify.",
          "For bootstrapped AI SaaS founders, per-customer profit visibility isn't optional — it's how you survive the usage-cost trap.",
        ],
        after: [
          "Ready to see your real margins? Connect Stripe free, analyze profit 5 times, and upgrade when you need unlimited weekly tracking.",
        ],
      },
    ],
    cta: {
      title: "See your per-customer profit margins free",
      subtitle: "5 free analyses · revenue vs AI cost · $9.9/mo unlimited",
      button: "Open dashboard →",
    },
  },
  zh: {
    meta: {
      title: "2026 AI SaaS 客户利润追踪指南 — 按客户利润率分析",
      description:
        "Stripe 显示收入增长但 OpenAI 账单涨得更快？独立开发者如何不用 $49+/月企业工具追踪按客户 AI 利润率。",
    },
    h1: "2026 AI SaaS 客户利润追踪：按客户利润率分析指南",
    updated: "更新于 2026 年 6 月 · 阅读约 11 分钟",
    intro: [
      "你的 MRR 图表每月上涨，Stripe 看起来很健康。但上季度 OpenAI 账单涨了 3 倍，你不知道是哪个客户造成的。熟悉吗？",
      "这是 2026 年 AI 原生 SaaS 的隐性危机：收入线性增长，但 AI API 成本随用量增长 — 几个重度用户可以在你察觉之前摧毁利润率。",
      "ChartMogul 和 Baremetrics 显示 MRR、流失率和客户数，但不显示 47 号客户每月花 $78 调 GPT-4 却只付 $99 — 利润率 21%，如果用量再涨就是负数。",
      "在 Indie Hackers 和 r/SaaS 上，创始人反复问：「怎么按客户追踪 AI 成本？」有人说：「MRR 有 $8K 但我确信 3 个重度用户在让我亏钱。」",
      "本指南解释为什么 AI SaaS 需要按客户利润追踪、如何不用企业工具计算利润率，以及发现亏损客户后该怎么做。",
    ],
    sections: [
      {
        h2: "为什么 MRR 对 AI SaaS 创始人在说谎",
        paragraphs: ["传统 SaaS 指标假设每个客户的边际成本接近零，AI SaaS 打破了这个假设："],
        list: [
          "GPT-4o 每百万输入 token 约 $5 — 重度用户每月可烧 $50-200",
          "月付 $29 的客户每天调用 AI 功能 500 次可能花你 $31 API 费用",
          "收入随订阅增长，AI 成本随实际用量增长",
          "一个亏损的企业试用客户可以抹掉 20 个小客户的利润",
        ],
        after: [
          "解决办法不是停用 AI 功能 — 而是知道哪些客户盈利，相应调整定价、用量上限或 upsell。",
        ],
      },
      {
        h2: "2026 年 AI 成本追踪工具对比",
        tools: [
          {
            h3: "OpenAI 用量仪表盘 — 免费",
            p: "按 API 密钥显示总支出，无法按客户归因。你看到 $471/月总额，但无法对应到 Stripe 客户。",
          },
          {
            h3: "Stripe Billing Meters — 复杂",
            p: "Stripe 2026 Meter API 支持按量计费，强大但需要工程能力为每次 AI 调用发送 meter 事件。适合计费，不适合利润率分析。",
          },
          {
            h3: "AICost.ai / Margine — $49+/月",
            p: "面向企业的 AI 成本监控，适合有专职财务的团队。对 50-200 客户的独立开发者来说太重。",
          },
          {
            h3: "Google 表格 — 免费",
            p: "手动：导出 Stripe 收入，粘贴 OpenAI 成本，按邮箱匹配客户。30 个客户以上就变成每周噩梦。",
          },
          {
            h3: "AI 客户利润追踪 — $9.9/月一口价",
            p: "为独立开发者打造：连接 Stripe，查看按客户收入对比 AI 成本、利润率 % 和亏损客户预警。",
            link: { href: "/join", text: "免费体验 5 次分析", suffix: "，之后 $9.9/月一口价，无按客户收费。" },
          },
        ],
      },
      {
        h2: "如何计算按客户 AI 利润",
        paragraphs: ["每个 AI SaaS 创始人都该知道的公式："],
        ordered: [
          "客户收入 = Stripe 订阅金额（月付）",
          "客户 AI 成本 = 归因到该用户 ID 的 API 调用总和",
          "毛利润 = 收入 − AI 成本",
          "利润率 % = (毛利润 / 收入) × 100",
        ],
        after: [
          "健康的 AI SaaS 利润率：每客户 60-80% 毛利率。低于 30% 需要设置用量上限或涨价。负利润率意味着你在补贴该客户。",
        ],
      },
      {
        h2: "发现亏损客户后该怎么做",
        paragraphs: [
          "真实场景：分析 8 个客户后发现 StartupXYZ 月付 $99 但 AI 成本 $78（利润率 21%），SoloFounder 月付 $29 但成本 $31（-7%，在亏钱）。",
          "独立开发者采取的三个行动：",
        ],
        ordered: [
          "用量上限 — 限制免费或低档用户每天 N 次 AI 调用",
          "分层定价 — 将重度用户引导到覆盖 AI 成本 + 利润的 Pro 方案",
          "个人沟通 — 邮件联系亏损客户：「我们注意到高用量，这是更划算的升级方案」",
        ],
        after: [
          "最糟糕的行动是什么都不做。每服务一个月亏损客户，你就在烧本该用于增长的钱。",
        ],
      },
      {
        h2: "2 分钟设置利润追踪",
        paragraphs: ["独立 AI SaaS 创始人最快的路径："],
        ordered: [
          "在 Stripe 创建只读受限 API 密钥",
          "连接到利润仪表盘",
          "设置月度 AI 预算上限用于预警",
          "点击分析 — 立刻看到按客户利润表",
          "每周复查：在利润率下降失控前发现异常",
        ],
        after: [
          "大多数创始人在有付费客户之前就过度工程化成本追踪。从简单的按客户表格开始，500+ 客户后再加自动计量。",
        ],
      },
      {
        h2: "定价数学：为什么 $9.9/月物超所值",
        paragraphs: [
          "挽救一个亏损客户：月付 $99、AI 成本 $78 = 每月回收 $21 利润率。",
          "AI 客户利润追踪 $9.9/月，只要帮你修正一个客户的定价就回本。",
          "对比：AICost.ai $49/月需要挽救 2+ 客户才回本。$200+/月企业工具需要财务团队才能 justify。",
          "对自举 AI SaaS 创始人来说，按客户利润可见性不是可选项 — 是穿越用量成本陷阱的生存之道。",
        ],
        after: [
          "准备好查看真实利润率了吗？免费连接 Stripe，分析 5 次利润，需要无限周追踪时再升级。",
        ],
      },
    ],
    cta: {
      title: "免费查看按客户利润率",
      subtitle: "免费体验 5 次 · 收入对比 AI 成本 · $9.9/月无限",
      button: "打开仪表盘 →",
    },
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
