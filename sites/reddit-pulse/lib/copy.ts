import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "GummySearch shut down · $9.9/mo flat",
    title: "Mine Reddit pain points for your next SaaS",
    subtitle:
      "Find 'I wish' and 'looking for alternative' posts in seconds. Validate ideas before you build. 5 free searches, then $9.9/mo.",
    ctaPrimary: "Mine pain points free",
    ctaPrimaryHref: "/mine",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free searches · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs GummySearch $79+" },
      { stat: "8 sec", label: "to extract pain signals" },
      { stat: "4 types", label: "I wish · alternative · frustrated · would pay" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Enter your niche",
          desc: "Type a keyword: analytics, freelance, booking, roadmap…",
        },
        {
          step: "2",
          title: "Mine Reddit signals",
          desc: "We extract verbatim pain quotes with frustration scores",
        },
        {
          step: "3",
          title: "Build what they want",
          desc: "Ship a $9.9/mo micro-SaaS solving the top pain point",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🔍",
        title: "Pain signal mining",
        desc: "Auto-detect 'I wish', 'looking for alternative', 'frustrated with', 'would pay for' patterns.",
      },
      {
        icon: "📊",
        title: "Frustration scoring",
        desc: "Rank pain points by intensity so you build the highest-value feature first.",
      },
      {
        icon: "🎯",
        title: "Subreddit context",
        desc: "See which community each quote came from — r/SaaS, r/indiehackers, r/Entrepreneur.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited niche searches. No $199/mo enterprise audience research pricing.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Sarah L.",
        role: "Solo founder",
        text: "GummySearch died and SpyCenter wants $199/mo. Reddit Pulse found 8 pain points in my niche for $9.9.",
      },
      {
        name: "Tom R.",
        role: "Indie hacker",
        text: "Found 'would pay for Stripe MRR dashboard' in 10 seconds. That's my next product.",
      },
      {
        name: "Jen K.",
        role: "Bootstrapped dev",
        text: "Stopped scrolling Reddit for hours. Enter keyword, get ranked pain quotes, ship.",
      },
    ],
    closing: {
      title: "Stop guessing what to build",
      subtitle: "5 free searches · then $9.9/mo for unlimited mining",
      ctaPrimary: "Mine pain points free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live pain point mining",
      caption: "Keyword: gummysearch · 8 signals found in 3.2s",
      preview:
        "🔍 Mining r/SaaS, r/indiehackers, r/Entrepreneur…\n─────────────────────────────────\n★ WOULD PAY · intensity 10/10\n\"Looking for a GummySearch alternative under $20/mo…\"\n  — r/Entrepreneur\n\n★ I WISH · intensity 9/10\n\"I wish there was a tool that mines Reddit for SaaS ideas…\"\n  — r/SaaS\n\n★ FRUSTRATED · intensity 9/10\n\"I hate that Canny costs $79/mo just for a public roadmap…\"\n  — r/indiehackers\n─────────────────────────────────\n8 pain points · 4 would-pay signals · Build now →",
    },
  },
  zh: {
    badge: "GummySearch 已关停 · $9.9/月一口价",
    title: "挖掘 Reddit 痛点，找到下一个 SaaS 方向",
    subtitle:
      "秒级提取「我希望有」和「寻找替代」类帖子，先验证再开发。免费体验 5 次搜索，之后 $9.9/月。",
    ctaPrimary: "免费挖掘痛点",
    ctaPrimaryHref: "/mine",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，GummySearch 要 $79+" },
      { stat: "8 秒", label: "提取痛点信号" },
      { stat: "4 类", label: "我希望 · 寻找替代 · 不满 · 愿意付费" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "输入细分领域",
          desc: "输入关键词：分析工具、自由职业、预约、路线图…",
        },
        {
          step: "2",
          title: "挖掘 Reddit 信号",
          desc: "提取原文痛点引用并标注挫败感分数",
        },
        {
          step: "3",
          title: "做用户想要的东西",
          desc: "针对最高分痛点，快速上线 $9.9/月 微 SaaS",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🔍",
        title: "痛点信号挖掘",
        desc: "自动识别「我希望」「寻找替代」「对…不满」「愿意付费」等模式。",
      },
      {
        icon: "📊",
        title: "挫败感评分",
        desc: "按强度排序痛点，优先做最高价值的功能。",
      },
      {
        icon: "🎯",
        title: "社区来源",
        desc: "显示每条引用来自哪个社区 — r/SaaS、r/indiehackers、r/Entrepreneur。",
      },
      {
        icon: "💰",
        title: "$9.9/月 一口价",
        desc: "细分领域搜索不限量，不像企业受众研究工具收 $199/月。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Sarah L.",
        role: "一人创始人",
        text: "GummySearch 关了，SpyCenter 要 $199/月。Reddit Pulse $9.9 就在我的细分领域找到 8 条痛点。",
      },
      {
        name: "Tom R.",
        role: "独立开发者",
        text: "10 秒找到「愿意付费的 Stripe MRR 仪表盘」。这就是我的下一个产品。",
      },
      {
        name: "Jen K.",
        role: "自举创业者",
        text: "不用再刷几小时 Reddit。输入关键词，拿到排序后的痛点引用，直接开干。",
      },
    ],
    closing: {
      title: "别再猜该做什么产品",
      subtitle: "免费 5 次搜索 · 之后 $9.9/月 不限量挖掘",
      ctaPrimary: "免费挖掘痛点",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "痛点挖掘实时预览",
      caption: "关键词：gummysearch · 3.2 秒内找到 8 条信号",
      preview:
        "🔍 正在挖掘 r/SaaS、r/indiehackers、r/Entrepreneur…\n─────────────────────────────────\n★ 愿意付费 · 强度 10/10\n「寻找 $20/月以下的 GummySearch 替代品…」\n  — r/Entrepreneur\n\n★ 我希望 · 强度 9/10\n「我希望有个工具能自动从 Reddit 挖 SaaS 点子…」\n  — r/SaaS\n\n★ 不满 · 强度 9/10\n「Canny 仅公开路线图就要 $79/月，太离谱…」\n  — r/indiehackers\n─────────────────────────────────\n8 条痛点 · 4 条愿意付费信号 · 立即开做 →",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Reddit Pulse",
    subtitle: "One price, unlimited pain point mining. No per-search fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs GummySearch $79+/mo · cancel anytime",
    perks: [
      "Unlimited niche searches",
      "Pain signal classification",
      "Frustration intensity scoring",
      "Subreddit source tracking",
      "Export pain point lists",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free searches, then subscribe?",
    whyItems: [
      "Mining and ranking pain signals costs real compute",
      "Paying users = founders who actually ship products",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Reddit Pulse",
    subtitle: "一口价，痛点挖掘不限量。不按搜索次数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 GummySearch $79+/月 · 随时可取消",
    perks: [
      "细分领域搜索不限量",
      "痛点信号分类",
      "挫败感强度评分",
      "社区来源追踪",
      "痛点列表导出",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次搜索，之后订阅？",
    whyItems: [
      "痛点挖掘与排序有真实计算成本",
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
