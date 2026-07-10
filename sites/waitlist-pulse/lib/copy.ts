import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Prefinery $99/mo? · $9.9/mo flat",
    title: "Product waitlists for indie launches",
    subtitle:
      "Collect emails before you ship. Referral boost, public signup count, embed widget. 5 free waitlists, then $9.9/mo.",
    ctaPrimary: "Create a waitlist free",
    ctaPrimaryHref: "/lists",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free waitlists · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Prefinery $99+" },
      { stat: "2 min", label: "to launch a signup page" },
      { stat: "∞", label: "signups, no per-email fees" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create a waitlist",
          desc: "Name your product, get a public signup page instantly",
        },
        {
          step: "2",
          title: "Share the link",
          desc: "Post on Twitter, Product Hunt teaser, or embed on your landing page",
        },
        {
          step: "3",
          title: "Launch with demand",
          desc: "Export emails, see referral leaders, ship to people who asked for it",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📧",
        title: "Email capture pages",
        desc: "Clean signup pages with live counter. No login required for visitors.",
      },
      {
        icon: "🔗",
        title: "Referral boost",
        desc: "Each signup gets a referral link. Share to move up the queue — viral loops built in.",
      },
      {
        icon: "📊",
        title: "Live signup counter",
        desc: "Public count builds social proof. \"Join 847 others waiting\" converts better.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited waitlists and signups. No per-email or per-campaign fees like Prefinery.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo founder",
        text: "Prefinery wanted $99/mo before I even had 100 signups. Waitlist Pulse did the job for $9.9.",
      },
      {
        name: "Priya S.",
        role: "Indie hacker",
        text: "Launched my waitlist in 2 minutes. Referral links got me 3x more signups than a plain form.",
      },
      {
        name: "Chris L.",
        role: "Bootstrapped dev",
        text: "The live counter on my teaser page made it feel real. 400 emails before I wrote the first line of code.",
      },
    ],
    closing: {
      title: "Ship faster with a waitlist",
      subtitle: "5 free waitlists · then $9.9/mo for unlimited",
      ctaPrimary: "Create a waitlist free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live waitlist signup preview",
      caption: "Public page · referral boost · live counter",
      preview:
        "🚀 My SaaS Launch\n   Ship a better analytics dashboard for indie hackers\n─────────────────────────────────\n   📧  you@email.com          [ Join waitlist ]\n\n   🔥 847 people on the waitlist\n   Your position: #12 after joining\n   Share to move up: waitlistpulse.app/w/my-saas?ref=abc\n─────────────────────────────────\n   Referral leaderboard:\n   1. sarah@… · 23 referrals\n   2. tom@… · 18 referrals",
    },
  },
  zh: {
    badge: "Prefinery $99/月？· $9.9/月一口价",
    title: "独立开发者的产品等候名单",
    subtitle:
      "正式上线前收集邮箱。推荐裂变、公开报名计数、可嵌入组件。免费体验 5 个等候名单，之后 $9.9/月。",
    ctaPrimary: "免费创建等候名单",
    ctaPrimaryHref: "/lists",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Prefinery 要 $99+" },
      { stat: "2 分钟", label: "上线报名页" },
      { stat: "∞", label: "报名不限量，不按邮箱收费" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建等候名单",
          desc: "输入产品名称，几秒内生成公开报名页",
        },
        {
          step: "2",
          title: "分享链接",
          desc: "发到推特、Product Hunt 预告页，或嵌入落地页",
        },
        {
          step: "3",
          title: "带着需求上线",
          desc: "导出邮箱、查看推荐排行，向真正等待的人发布",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📧",
        title: "邮箱收集页",
        desc: "简洁报名页 + 实时计数。访客无需注册登录。",
      },
      {
        icon: "🔗",
        title: "推荐裂变",
        desc: "每位报名者获得专属推荐链接。分享可提升排队位置，自带传播闭环。",
      },
      {
        icon: "📊",
        title: "实时报名计数",
        desc: "公开人数增强社会证明。「已有 847 人等候」比纯表单转化更高。",
      },
      {
        icon: "💰",
        title: "$9.9/月 一口价",
        desc: "等候名单与报名不限量，不像 Prefinery 按活动或邮箱收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "一人创始人",
        text: "我还没 100 个报名，Prefinery 就要 $99/月。产品等候名单 $9.9 完全够用。",
      },
      {
        name: "Priya S.",
        role: "独立开发者",
        text: "2 分钟上线等候名单。推荐链接带来的报名是纯表单的 3 倍。",
      },
      {
        name: "Chris L.",
        role: "自举创业者",
        text: "预告页上的实时计数让产品显得很真实。写第一行代码前就有 400 个邮箱。",
      },
    ],
    closing: {
      title: "用等候名单更快上线",
      subtitle: "免费 5 个等候名单 · 之后 $9.9/月 不限量",
      ctaPrimary: "免费创建等候名单",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "报名页实时预览",
      caption: "公开页面 · 推荐裂变 · 实时计数",
      preview:
        "🚀 我的 SaaS 上线\n   为独立开发者打造更好的分析仪表盘\n─────────────────────────────────\n   📧  you@email.com          [ 加入等候名单 ]\n\n   🔥 847 人已报名\n   报名后你的排位：第 12 位\n   分享提升排位：waitlistpulse.app/w/my-saas?ref=abc\n─────────────────────────────────\n   推荐排行榜：\n   1. sarah@… · 23 次推荐\n   2. tom@… · 18 次推荐",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Waitlist Pulse",
    subtitle: "One price, unlimited waitlists and signups. No per-email fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Prefinery $99+/mo · cancel anytime",
    perks: [
      "Unlimited product waitlists",
      "Unlimited email signups",
      "Referral boost & leaderboard",
      "Live public signup counter",
      "CSV email export",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free waitlists, then subscribe?",
    whyItems: [
      "Hosting signup pages and referral tracking costs real infrastructure",
      "Paying users = founders who actually launch products",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅产品等候名单",
    subtitle: "一口价，等候名单与报名不限量。不按邮箱收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Prefinery $99+/月 · 随时可取消",
    perks: [
      "不限产品等候名单数量",
      "不限邮箱报名数",
      "推荐裂变与排行榜",
      "公开实时报名计数",
      "邮箱 CSV 导出",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个名单，之后订阅？",
    whyItems: [
      "托管报名页与推荐追踪有真实基础设施成本",
      "付费用户 = 真正会发布产品的创始人",
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
