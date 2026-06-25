import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Canny $79/mo? · $9.9/mo flat",
    title: "Feature voting for indie SaaS",
    subtitle:
      "Collect feature requests, let users upvote, publish a public roadmap. No per-user fees. 5 free boards, then $9.9/mo.",
    ctaPrimary: "Create a board free",
    ctaPrimaryHref: "/boards",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free boards · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Canny $79+" },
      { stat: "∞", label: "voters, no per-user fees" },
      { stat: "5 min", label: "to launch a public board" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create a board",
          desc: "Name your product, get a public voting page in seconds",
        },
        {
          step: "2",
          title: "Share the link",
          desc: "Embed on your docs or drop the URL in your changelog",
        },
        {
          step: "3",
          title: "Build what wins",
          desc: "See top-voted ideas, update status, close the loop with voters",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🗳️",
        title: "Public voting boards",
        desc: "Let users submit ideas and upvote what matters. No login wall for voters.",
      },
      {
        icon: "🗺️",
        title: "Auto-updating roadmap",
        desc: "Drag ideas through Planned → In Progress → Shipped. Voters get notified.",
      },
      {
        icon: "📋",
        title: "Embeddable widget",
        desc: "Drop a script tag on your docs or app. Collect feedback where users already are.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited voters, unlimited ideas. No per-user fees like Canny.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Marcus T.",
        role: "Solo SaaS founder",
        text: "Canny wanted $79/mo for 25 tracked users. Feature Vote does what I need for $9.9 with unlimited voters.",
      },
      {
        name: "Elena R.",
        role: "Indie hacker",
        text: "Shipped a public roadmap in 10 minutes. My users finally know what I'm building next.",
      },
      {
        name: "David K.",
        role: "Bootstrapped dev",
        text: "The embed widget on my docs page collects better signal than our old Google Form.",
      },
    ],
    closing: {
      title: "Stop guessing what to build next",
      subtitle: "5 free boards · then $9.9/mo for unlimited",
      ctaPrimary: "Create a board free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live voting board preview",
      caption: "Public roadmap · voters upvote without login",
      preview: "▲ 47  Dark mode for dashboard     [Planned]\n▲ 32  Webhook on status change  [In Progress]\n▲ 28  CSV export for ideas        [Open]",
    },
  },
  zh: {
    badge: "Canny $79/月？· $9.9/月一口价",
    title: "独立开发者的功能投票板",
    subtitle:
      "收集功能请求、用户投票、公开路线图。不按用户数收费。免费体验 5 个投票板，之后 $9.9/月。",
    ctaPrimary: "免费创建投票板",
    ctaPrimaryHref: "/boards",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Canny 要 $79+" },
      { stat: "∞", label: "投票人数不限，不按人头收费" },
      { stat: "5 分钟", label: "上线公开投票板" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建投票板",
          desc: "输入产品名称，几秒内生成公开投票页",
        },
        {
          step: "2",
          title: "分享链接",
          desc: "嵌入文档站，或把链接放进更新日志",
        },
        {
          step: "3",
          title: "做用户最想要的",
          desc: "查看高票需求、更新状态、闭环通知投票者",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🗳️",
        title: "公开投票板",
        desc: "用户提交想法并投票。投票者无需登录。",
      },
      {
        icon: "🗺️",
        title: "自动更新路线图",
        desc: "想法在「计划中 → 开发中 → 已上线」间流转，投票者会收到通知。",
      },
      {
        icon: "📋",
        title: "可嵌入组件",
        desc: "一行脚本嵌入文档或产品页，在用户所在处收集反馈。",
      },
      {
        icon: "💰",
        title: "$9.9/月 一口价",
        desc: "投票者与想法数量不限，不像 Canny 按人头收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Marcus T.",
        role: "一人 SaaS 创始人",
        text: "Canny 25 个用户就要 $79/月。功能投票板 $9.9 不限投票人数，刚好够用。",
      },
      {
        name: "Elena R.",
        role: "独立开发者",
        text: "10 分钟就上线了公开路线图，用户终于知道我在做什么了。",
      },
      {
        name: "David K.",
        role: "自举创业者",
        text: "文档页嵌入的投票组件，比以前的 Google 表单好用太多。",
      },
    ],
    closing: {
      title: "别再猜用户想要什么",
      subtitle: "免费 5 个投票板 · 之后 $9.9/月 不限量",
      ctaPrimary: "免费创建投票板",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "投票板实时预览",
      caption: "公开路线图 · 投票者无需登录即可投票",
      preview: "▲ 47  仪表盘深色模式        [计划中]\n▲ 32  状态变更 Webhook    [开发中]\n▲ 28  想法 CSV 导出        [待讨论]",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Feature Vote",
    subtitle: "One price, all features. No per-voter fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Canny $79+/mo · cancel anytime",
    perks: [
      "Unlimited feedback boards",
      "Unlimited voters & ideas",
      "Public roadmap columns",
      "Embeddable feedback widget",
      "Voter notifications on ship",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free boards, then subscribe?",
    whyItems: [
      "Hosting boards and voter notifications costs real infrastructure",
      "Paying users = founders who actually listen to customers",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅功能投票板",
    subtitle: "一口价，全功能。不按投票人数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Canny $79+/月 · 随时可取消",
    perks: [
      "不限投票板数量",
      "不限投票者与想法数",
      "公开路线图看板",
      "可嵌入反馈组件",
      "功能上线通知投票者",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个板，之后订阅？",
    whyItems: [
      "托管投票板与通知有真实基础设施成本",
      "付费用户 = 真正倾听客户的创始人",
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
