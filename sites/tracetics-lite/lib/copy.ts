import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Plausible has no funnels · $9.9/mo flat",
    title: "Tracetics Lite — funnel analytics for indie hackers",
    subtitle:
      "Plausible can't do funnels. Mixpanel costs $500/mo. See drop-off, fix leaks, grow MRR. 5 free funnels, then $9.9/mo.",
    ctaPrimary: "Create a funnel free",
    ctaPrimaryHref: "/funnels",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free funnels · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Mixpanel $500+" },
      { stat: "1 line", label: "SDK — POST events, done" },
      { stat: "5 min", label: "to find your biggest drop-off" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Define your funnel",
          desc: "Name it and list steps: Landing → Signup → Activation → Payment",
        },
        {
          step: "2",
          title: "Track with one POST",
          desc: "Send events from your app — no 3-week Mixpanel integration",
        },
        {
          step: "3",
          title: "Fix the leak",
          desc: "See drop-off % between each step, focus on the worst bottleneck",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📉",
        title: "Step-by-step drop-off",
        desc: "Visual funnel with conversion rates between every step. Know exactly where users leave.",
      },
      {
        icon: "⚡",
        title: "One-line event tracking",
        desc: "POST /api/events with your funnel slug and step index. No bloated SDK.",
      },
      {
        icon: "🎯",
        title: "Biggest leak highlight",
        desc: "Auto-flag the step with the highest drop-off so you fix what matters first.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited funnels and events. No per-MAU pricing like enterprise analytics.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex K.",
        role: "Solo SaaS founder",
        text: "Mixpanel wanted $500/mo for funnel analytics. I have 200 users. Tracetics Lite shows me the same drop-off chart for $9.9.",
      },
      {
        name: "Mia T.",
        role: "Indie hacker",
        text: "Found 62% drop-off between signup and activation. Fixed onboarding, conversion doubled in a week.",
      },
      {
        name: "Chris P.",
        role: "Bootstrapped dev",
        text: "Plausible has no funnels. Mixpanel is overkill. This is the sweet spot for solo founders.",
      },
    ],
    closing: {
      title: "Stop losing users in the dark",
      subtitle: "5 free funnels · then $9.9/mo for unlimited",
      ctaPrimary: "Create a funnel free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live funnel dashboard",
      caption: "Signup funnel · drop-off rates update in real time",
      preview:
        "Funnel: SaaS signup flow\n─────────────────────────────────\nLanding page     │ 2,400 users  │ 100.0%\nSignup started   │ 1,680 users  │  70.0%  │ ▼ 30.0% drop\nEmail verified   │   840 users  │  50.0%  │ ▼ 50.0% drop ★ Leak\nActivated        │   672 users  │  80.0%  │ ▼ 20.0% drop\nPaid             │   336 users  │  50.0%  │ ▼ 50.0% drop\n─────────────────────────────────\nOverall conv: 14.0%  ·  Fix email verification step",
    },
  },
  zh: {
    badge: "Plausible 没有漏斗 · $9.9/月一口价",
    title: "Tracetics Lite — 独立开发者漏斗分析",
    subtitle:
      "Plausible 做不了漏斗，Mixpanel 要 $500/月。看清流失、修复漏洞、提升 MRR。免费体验 5 个漏斗，之后 $9.9/月。",
    ctaPrimary: "免费创建漏斗",
    ctaPrimaryHref: "/funnels",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Mixpanel 要 $500+" },
      { stat: "1 行", label: "SDK — POST 事件即可" },
      { stat: "5 分钟", label: "找到最大流失点" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "定义漏斗",
          desc: "命名并列出步骤：落地页 → 注册 → 激活 → 付费",
        },
        {
          step: "2",
          title: "一行代码追踪",
          desc: "从应用发送事件 — 无需三周 Mixpanel 接入",
        },
        {
          step: "3",
          title: "修复漏洞",
          desc: "查看每步之间的流失率，聚焦最大瓶颈",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📉",
        title: "逐步流失分析",
        desc: "可视化漏斗，每步转化率一目了然，精准定位用户离开的位置。",
      },
      {
        icon: "⚡",
        title: "一行事件追踪",
        desc: "POST /api/events 带上漏斗 slug 和步骤索引，无需臃肿 SDK。",
      },
      {
        icon: "🎯",
        title: "最大漏洞高亮",
        desc: "自动标记流失最高的步骤，优先修复最关键的问题。",
      },
      {
        icon: "💰",
        title: "$9.9/月 一口价",
        desc: "漏斗与事件不限量，不像企业分析工具按 MAU 收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex K.",
        role: "一人 SaaS 创始人",
        text: "Mixpanel 漏斗分析要 $500/月，我只有 200 用户。Tracetics Lite $9.9 就能看到同样的流失图。",
      },
      {
        name: "Mia T.",
        role: "独立开发者",
        text: "发现注册到激活之间 62% 流失。优化引导流程后，一周转化率翻倍。",
      },
      {
        name: "Chris P.",
        role: "自举创业者",
        text: "Plausible 没有漏斗，Mixpanel 又太重。这是独立开发者的甜蜜点。",
      },
    ],
    closing: {
      title: "别再盲目丢失用户",
      subtitle: "免费 5 个漏斗 · 之后 $9.9/月 不限量",
      ctaPrimary: "免费创建漏斗",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "漏斗实时看板",
      caption: "注册漏斗 · 流失率实时更新",
      preview:
        "漏斗：SaaS 注册流程\n─────────────────────────────────\n落地页浏览     │ 2,400 用户  │ 100.0%\n开始注册       │ 1,680 用户  │  70.0%  │ ▼ 30.0% 流失\n邮箱验证       │   840 用户  │  50.0%  │ ▼ 50.0% 流失 ★ 漏洞\n完成激活       │   672 用户  │  80.0%  │ ▼ 20.0% 流失\n完成付费       │   336 用户  │  50.0%  │ ▼ 50.0% 流失\n─────────────────────────────────\n总转化率：14.0%  ·  优先修复邮箱验证步骤",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Tracetics Lite",
    subtitle: "One price, unlimited funnels. No per-MAU fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Mixpanel $500+/mo · cancel anytime",
    perks: [
      "Unlimited funnels",
      "Unlimited events & pageviews",
      "Step-by-step drop-off charts",
      "Biggest leak auto-detection",
      "One-line event SDK",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free funnels, then subscribe?",
    whyItems: [
      "Storing and aggregating funnel events costs real infrastructure",
      "Paying users = founders who actually optimize conversion",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Tracetics Lite",
    subtitle: "一口价，漏斗不限量。不按 MAU 收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Mixpanel $500+/月 · 随时可取消",
    perks: [
      "漏斗不限量",
      "事件与页面浏览不限量",
      "逐步流失图表",
      "最大漏洞自动检测",
      "一行事件 SDK",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个漏斗，之后订阅？",
    whyItems: [
      "漏斗事件存储与聚合有真实基础设施成本",
      "付费用户 = 真正优化转化的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}
