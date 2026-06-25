import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "VWO $198/mo? · $9.9/mo flat",
    title: "Landing page A/B testing for indie hackers",
    subtitle:
      "Split traffic 50/50, compare conversion rates, declare a winner. No enterprise sales calls. 5 free experiments, then $9.9/mo.",
    ctaPrimary: "Start a test free",
    ctaPrimaryHref: "/experiments",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free experiments · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs VWO $198+" },
      { stat: "50/50", label: "traffic split, auto-balanced" },
      { stat: "5 min", label: "to launch your first test" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Create an experiment",
          desc: "Name your test, paste your landing page URL, write two headline variants",
        },
        {
          step: "2",
          title: "Add the snippet",
          desc: "One script tag splits visitors between A and B, tracks views and conversions",
        },
        {
          step: "3",
          title: "Ship the winner",
          desc: "See live conversion rates, statistical confidence, and which variant wins",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🔀",
        title: "50/50 traffic split",
        desc: "Visitors randomly see variant A or B. No code changes to your page required.",
      },
      {
        icon: "📊",
        title: "Live conversion dashboard",
        desc: "Views, conversions, and rates update in real time. Know which headline wins.",
      },
      {
        icon: "🏆",
        title: "Auto winner detection",
        desc: "After enough traffic, we flag the statistically significant winner for you.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited experiments and pageviews. No per-visitor fees like enterprise tools.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Jake M.",
        role: "Solo SaaS founder",
        text: "VWO wanted $198/mo for one landing page test. Page Split does exactly what I need for $9.9.",
      },
      {
        name: "Sarah L.",
        role: "Indie hacker",
        text: "Changed my pricing headline, ran a 3-day test, conversion went up 23%. Shipped the winner same day.",
      },
      {
        name: "Tom R.",
        role: "Bootstrapped dev",
        text: "No sales demo, no annual contract. Paste snippet, see results. That's it.",
      },
    ],
    closing: {
      title: "Stop guessing which headline converts",
      subtitle: "5 free experiments · then $9.9/mo for unlimited",
      ctaPrimary: "Start a test free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live A/B test dashboard",
      caption: "Variant A vs B · conversion rates update in real time",
      preview:
        "Experiment: Pricing headline test\n─────────────────────────────────\nVariant A  │ 1,240 views  │  8.2% conv  │ 102 signups\nVariant B  │ 1,198 views  │ 11.4% conv  │ 137 signups  ★ Winner\n─────────────────────────────────\nConfidence: 95%  ·  Ship variant B",
    },
  },
  zh: {
    badge: "VWO $198/月？· $9.9/月一口价",
    title: "独立开发者的落地页 A/B 测试",
    subtitle:
      "50/50 分流、对比转化率、自动判定赢家。无需企业销售演示。免费体验 5 个实验，之后 $9.9/月。",
    ctaPrimary: "免费开始测试",
    ctaPrimaryHref: "/experiments",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，VWO 要 $198+" },
      { stat: "50/50", label: "流量均分，自动平衡" },
      { stat: "5 分钟", label: "上线第一个测试" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "创建实验",
          desc: "命名测试、粘贴落地页链接、写两个标题变体",
        },
        {
          step: "2",
          title: "嵌入代码片段",
          desc: "一行脚本将访客随机分到 A/B，自动追踪浏览与转化",
        },
        {
          step: "3",
          title: "上线赢家版本",
          desc: "查看实时转化率、统计置信度，知道哪个变体胜出",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🔀",
        title: "50/50 流量分流",
        desc: "访客随机看到变体 A 或 B，无需改动页面代码。",
      },
      {
        icon: "📊",
        title: "实时转化看板",
        desc: "浏览量、转化数、转化率实时更新，一眼看出哪个标题更好。",
      },
      {
        icon: "🏆",
        title: "自动判定赢家",
        desc: "流量足够后，自动标记统计显著的胜出变体。",
      },
      {
        icon: "💰",
        title: "$9.9/月 一口价",
        desc: "实验与页面浏览不限量，不像企业工具按访客收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Jake M.",
        role: "一人 SaaS 创始人",
        text: "VWO 一个落地页测试就要 $198/月。Page Split $9.9 刚好够用。",
      },
      {
        name: "Sarah L.",
        role: "独立开发者",
        text: "改了定价页标题，跑了 3 天测试，转化率涨 23%，当天就上线了赢家版本。",
      },
      {
        name: "Tom R.",
        role: "自举创业者",
        text: "没有销售演示、没有年付合同。贴代码、看结果，就这么简单。",
      },
    ],
    closing: {
      title: "别再猜哪个标题更能转化",
      subtitle: "免费 5 个实验 · 之后 $9.9/月 不限量",
      ctaPrimary: "免费开始测试",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "A/B 测试实时看板",
      caption: "变体 A 对比 B · 转化率实时更新",
      preview:
        "实验：定价页标题测试\n─────────────────────────────────\n变体 A  │ 1,240 浏览  │  8.2% 转化  │ 102 注册\n变体 B  │ 1,198 浏览  │ 11.4% 转化  │ 137 注册  ★ 胜出\n─────────────────────────────────\n置信度：95%  ·  上线变体 B",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Page Split",
    subtitle: "One price, unlimited experiments. No per-visitor fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs VWO $198+/mo · cancel anytime",
    perks: [
      "Unlimited A/B experiments",
      "Unlimited pageviews & conversions",
      "50/50 traffic split snippet",
      "Live conversion dashboard",
      "Auto winner detection",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free experiments, then subscribe?",
    whyItems: [
      "Running split tests and storing conversion data costs real infrastructure",
      "Paying users = founders who actually optimize their landing pages",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Page Split",
    subtitle: "一口价，实验不限量。不按访客收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 VWO $198+/月 · 随时可取消",
    perks: [
      "A/B 实验不限量",
      "页面浏览与转化追踪不限量",
      "50/50 分流代码片段",
      "实时转化看板",
      "自动判定赢家",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个实验，之后订阅？",
    whyItems: [
      "分流测试与转化数据存储有真实基础设施成本",
      "付费用户 = 真正优化落地页的创始人",
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
