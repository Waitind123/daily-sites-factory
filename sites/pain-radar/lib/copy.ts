import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "HN + Reddit + PH · $29/mo flat",
    title: "Scan pain points across Reddit, HN & Product Hunt",
    subtitle:
      "GummySearch is gone. Reddit API is unstable. One tool scans 3 platforms, scores opportunities, ranks pain quotes. 5 free scans, then $29/mo.",
    ctaPrimary: "Scan pain points free",
    ctaPrimaryHref: "/scan",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free scans · then $29/mo",
    stats: [
      { stat: "3", label: "platforms: Reddit · HN · Product Hunt" },
      { stat: "92", label: "max opportunity score / 100" },
      { stat: "$29", label: "flat/mo vs PainHunt $29+" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Enter your niche",
          desc: "Type a keyword: gummysearch, analytics, booking, monitoring…",
        },
        {
          step: "2",
          title: "Scan 3 platforms",
          desc: "We pull pain quotes from Reddit, Hacker News & Product Hunt",
        },
        {
          step: "3",
          title: "Build what scores highest",
          desc: "Ship a $29/mo micro-SaaS solving the top opportunity",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📡",
        title: "Cross-platform scan",
        desc: "One search across Reddit, Hacker News & Product Hunt — no tab switching.",
      },
      {
        icon: "📊",
        title: "Opportunity scoring",
        desc: "0–100 composite score: pain intensity + willingness to pay + platform spread.",
      },
      {
        icon: "🎯",
        title: "4 signal types",
        desc: "Auto-detect I wish, alternative, frustrated, would pay patterns.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited niche scans. No $199/mo enterprise audience research pricing.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo founder",
        text: "GummySearch died, PainHunt wants $29/mo. Pain Radar found the same HN + Reddit signals for $29.",
      },
      {
        name: "Priya S.",
        role: "Indie hacker",
        text: "Scored 92 on 'cross-platform pain mining' — validated my niche in one scan. Shipped in 4 days.",
      },
      {
        name: "Chris L.",
        role: "Bootstrapped dev",
        text: "Stopped juggling Syften + manual PH comments. One keyword, three platforms, ranked quotes.",
      },
    ],
    closing: {
      title: "Stop guessing what to build",
      subtitle: "5 free scans · then $29/mo for unlimited cross-platform mining",
      ctaPrimary: "Scan pain points free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live cross-platform scan",
      caption: "Keyword: gummysearch · 8 signals · avg opportunity 88/100",
      preview:
        "📡 Scanning Reddit · Hacker News · Product Hunt…\n─────────────────────────────────\n★ WOULD PAY · HN · opportunity 92/100\n\"Would pay $15/mo for HN + Reddit pain ranking in one search…\"\n  — Ask HN\n\n★ ALTERNATIVE · Reddit · opportunity 87/100\n\"Looking for GummySearch alternative under $20/mo…\"\n  — r/Entrepreneur\n\n★ I WISH · Product Hunt · opportunity 86/100\n\"Wish I had validated on Reddit/HN pain threads first…\"\n  — Product Hunt\n─────────────────────────────────\n8 pain points · 3 platforms · Build now →",
    },
  },
  zh: {
    badge: "HN + Reddit + PH · $29/月一口价",
    title: "跨平台扫描 Reddit、HN 与 Product Hunt 痛点",
    subtitle:
      "GummySearch 已关停，Reddit API 不稳定。一个工具扫描 3 个平台、评分机会、排序痛点引用。免费体验 5 次，之后 $29/月。",
    ctaPrimary: "免费扫描痛点",
    ctaPrimaryHref: "/scan",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "3", label: "个平台：Reddit · HN · Product Hunt" },
      { stat: "92", label: "最高机会分 / 100" },
      { stat: "$29", label: "一口价/月，PainHunt 要 $29+" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "输入细分领域",
          desc: "输入关键词：gummysearch、分析工具、预约、监控…",
        },
        {
          step: "2",
          title: "扫描 3 个平台",
          desc: "从 Reddit、Hacker News 与 Product Hunt 提取痛点引用",
        },
        {
          step: "3",
          title: "做机会分最高的",
          desc: "针对最高分机会，快速上线 $29/月 微 SaaS",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📡",
        title: "跨平台扫描",
        desc: "一次搜索覆盖 Reddit、Hacker News 与 Product Hunt，不用来回切标签页。",
      },
      {
        icon: "📊",
        title: "机会分评分",
        desc: "0–100 综合分：痛点强度 + 付费意愿 + 平台覆盖度。",
      },
      {
        icon: "🎯",
        title: "4 类信号",
        desc: "自动识别「我希望」「寻找替代」「不满」「愿意付费」模式。",
      },
      {
        icon: "💰",
        title: "$29/月 一口价",
        desc: "细分领域扫描不限量，不像企业受众研究工具收 $199/月。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "一人创始人",
        text: "GummySearch 关了，PainHunt 要 $29/月。Pain Radar $29 就能拿到同样的 HN + Reddit 信号。",
      },
      {
        name: "Priya S.",
        role: "独立开发者",
        text: "「跨平台痛点挖掘」机会分 92 — 一次扫描就验证了细分领域，4 天上线。",
      },
      {
        name: "Chris L.",
        role: "自举创业者",
        text: "不用再同时用 Syften 和手动翻 PH 评论。一个关键词、三个平台、排序后的引用。",
      },
    ],
    closing: {
      title: "别再猜该做什么产品",
      subtitle: "免费 5 次扫描 · 之后 $29/月 跨平台挖掘不限量",
      ctaPrimary: "免费扫描痛点",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "跨平台扫描实时预览",
      caption: "关键词：gummysearch · 8 条信号 · 平均机会分 88/100",
      preview:
        "📡 正在扫描 Reddit · Hacker News · Product Hunt…\n─────────────────────────────────\n★ 愿意付费 · HN · 机会分 92/100\n「愿意付 $15/月，要 HN + Reddit 痛点一次排序…」\n  — Ask HN\n\n★ 寻找替代 · Reddit · 机会分 87/100\n「寻找 $20/月以下的 GummySearch 替代品…」\n  — r/Entrepreneur\n\n★ 我希望 · Product Hunt · 机会分 86/100\n「希望先在 Reddit/HN 痛点帖里验证再上线…」\n  — Product Hunt\n─────────────────────────────────\n8 条痛点 · 3 个平台 · 立即开做 →",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Pain Radar",
    subtitle: "One price, unlimited cross-platform pain scans. No per-search fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs PainHunt $29+/mo · cancel anytime",
    perks: [
      "Unlimited niche scans across 3 platforms",
      "Opportunity score 0–100",
      "Pain signal classification",
      "Platform source tracking",
      "Export pain point lists",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free scans, then subscribe?",
    whyItems: [
      "Cross-platform scanning and scoring costs real compute",
      "Paying users = founders who actually ship products",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅跨平台痛点雷达",
    subtitle: "一口价，跨平台痛点扫描不限量。不按次数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 PainHunt $29+/月 · 随时可取消",
    perks: [
      "3 个平台细分领域扫描不限量",
      "0–100 机会分评分",
      "痛点信号分类",
      "平台来源追踪",
      "痛点列表导出",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次扫描，之后订阅？",
    whyItems: [
      "跨平台扫描与评分有真实计算成本",
      "付费用户 = 真正会 ship 产品的创始人",
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
