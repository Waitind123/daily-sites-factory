import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Typeform 10 responses/mo? · $29/mo flat",
    title: "Forms that convert — without the Typeform tax",
    subtitle:
      "One question at a time, drop-off analytics, embed anywhere. 5 free forms, then $29/mo unlimited responses.",
    ctaPrimary: "Create a form free",
    ctaPrimaryHref: "/forms",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free forms · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Typeform $39+" },
      { stat: "∞", label: "responses, no per-submission cap" },
      { stat: "3 min", label: "to launch your first form" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create a form",
          desc: "Name your survey, get a shareable link and embed code instantly",
        },
        {
          step: "2",
          title: "Share or embed",
          desc: "Post the link, embed on your site, or send to customers one-on-one",
        },
        {
          step: "3",
          title: "Fix drop-offs",
          desc: "See exactly which question loses people — optimize and convert more",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📋",
        title: "One-question-at-a-time UX",
        desc: "Typeform-style flow that feels conversational. Higher completion rates than long forms.",
      },
      {
        icon: "📉",
        title: "Drop-off analytics",
        desc: "See which step loses respondents. Fix the bottleneck, not guess.",
      },
      {
        icon: "🔗",
        title: "Share link + embed",
        desc: "Public URL or iframe embed. Works on landing pages, emails, and Notion.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited forms and responses. No per-response fees like Typeform Basic $39/mo.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo founder",
        text: "Typeform capped me at 10 responses on day one. Form Pulse gave me unlimited for $29/mo.",
      },
      {
        name: "Priya S.",
        role: "Indie hacker",
        text: "Drop-off analytics showed 40% quit on question 2. Fixed the copy, completions doubled.",
      },
      {
        name: "Chris L.",
        role: "Bootstrapped dev",
        text: "Embedded the feedback form on my landing page in 5 minutes. Clean, dark, on-brand.",
      },
    ],
    closing: {
      title: "Stop paying per response",
      subtitle: "5 free forms · then $29/mo for unlimited",
      ctaPrimary: "Create a form free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live form preview",
      caption: "One question at a time · progress bar · drop-off tracking",
      preview:
        "📋 Customer Feedback Survey\n   Help us build what you need\n─────────────────────────────────\n   Question 2 of 3                    ████░░ 67%\n\n   What's your email?\n   ┌─────────────────────────────────┐\n   │ you@email.com                   │\n   └─────────────────────────────────┘\n\n              [ Next → ]\n─────────────────────────────────\n   Drop-off analytics (dashboard):\n   Q1: 100 started → 12% drop-off\n   Q2: 88 started  → 8% drop-off\n   Q3: 81 completed ✓",
    },
  },
  zh: {
    badge: "Typeform 仅 10 条/月？· $29/月一口价",
    title: "高转化表单 — 不用交 Typeform 税",
    subtitle:
      "逐题展示、放弃率分析、随处嵌入。免费体验 5 个表单，之后 $29/月无限回复。",
    ctaPrimary: "免费创建表单",
    ctaPrimaryHref: "/forms",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Typeform 要 $39+" },
      { stat: "∞", label: "回复不限量，无按条收费" },
      { stat: "3 分钟", label: "上线第一个表单" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建表单",
          desc: "命名问卷，几秒内获得分享链接和嵌入代码",
        },
        {
          step: "2",
          title: "分享或嵌入",
          desc: "发链接、嵌入网站，或一对一发给客户",
        },
        {
          step: "3",
          title: "优化放弃率",
          desc: "精确看到哪一题流失最多 — 针对性优化转化",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📋",
        title: "逐题展示体验",
        desc: "Typeform 风格对话式流程，完成率高于传统长表单。",
      },
      {
        icon: "📉",
        title: "放弃率分析",
        desc: "看清哪一步流失受访者。优化瓶颈，不再靠猜。",
      },
      {
        icon: "🔗",
        title: "分享链接 + 嵌入",
        desc: "公开链接或 iframe 嵌入。适用于落地页、邮件和 Notion。",
      },
      {
        icon: "💰",
        title: "$29/月 一口价",
        desc: "表单与回复不限量，不像 Typeform 基础版 $39/月按条收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "一人创始人",
        text: "第一天 Typeform 就卡在 10 条回复上限。极简表单 $29/月无限用。",
      },
      {
        name: "Priya S.",
        role: "独立开发者",
        text: "放弃率分析显示 40% 在第 2 题退出。改了文案，完成率翻倍。",
      },
      {
        name: "Chris L.",
        role: "自举创业者",
        text: "5 分钟把反馈表单嵌入落地页。深色风格，和品牌一致。",
      },
    ],
    closing: {
      title: "别再按回复数付费",
      subtitle: "免费 5 个表单 · 之后 $29/月 不限量",
      ctaPrimary: "免费创建表单",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "表单实时预览",
      caption: "逐题展示 · 进度条 · 放弃率追踪",
      preview:
        "📋 客户反馈问卷\n   帮助我们打造你需要的产品\n─────────────────────────────────\n   第 2 题 / 共 3 题                    ████░░ 67%\n\n   你的邮箱是？\n   ┌─────────────────────────────────┐\n   │ you@email.com                   │\n   └─────────────────────────────────┘\n\n              [ 下一题 → ]\n─────────────────────────────────\n   放弃率分析（仪表盘）：\n   第1题：100 人开始 → 12% 放弃\n   第2题：88 人继续 → 8% 放弃\n   第3题：81 人完成 ✓",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Form Pulse",
    subtitle: "One price, unlimited forms and responses. No per-submission fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Typeform $39+/mo · cancel anytime",
    perks: [
      "Unlimited forms",
      "Unlimited responses",
      "Drop-off analytics per question",
      "One-question-at-a-time UX",
      "Share link + iframe embed",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free forms, then subscribe?",
    whyItems: [
      "Hosting forms and analytics costs real infrastructure",
      "Paying users = founders who actually collect feedback",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅极简表单构建器",
    subtitle: "一口价，表单与回复不限量。不按条数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Typeform $39+/月 · 随时可取消",
    perks: [
      "不限表单数量",
      "不限回复数量",
      "每题放弃率分析",
      "逐题展示体验",
      "分享链接 + iframe 嵌入",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个表单，之后订阅？",
    whyItems: [
      "托管表单与分析有真实基础设施成本",
      "付费用户 = 真正在收集反馈的创始人",
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
