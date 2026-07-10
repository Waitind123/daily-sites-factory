import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Testimonial.to $40/mo · ship your wall in 10min",
    title: "Testimonial wall for indie hackers",
    subtitle:
      "Collect user praise, embed Wall of Love in two lines of HTML. $29/mo vs Testimonial.to $40/mo for white-label.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/wall",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Testimonial.to $40" },
      { stat: "10min", label: "zero to embedded wall" },
      { stat: "0 JS", label: "pure HTML embed, fast load" },
    ],
    comparisonTitle: "What you get",
    audienceTitle: "Who uses it?",
    audiences: [
      { icon: "🚀", title: "Indie hacker", desc: "MRR under $2k — need social proof without $40/mo branding fees" },
      { icon: "💻", title: "Solo SaaS founder", desc: "5–20 text testimonials, embed on landing page today" },
      { icon: "🎨", title: "Side project builder", desc: "Collection email template + embed code in one click" },
      { icon: "📈", title: "Bootstrapped founder", desc: "Grid, carousel, masonry — match your landing style" },
    ],
    sampleNote: "Example: 3 testimonials · grid layout · brand accent",
    sampleDeliverable: "Embed HTML + collection email template · copy-paste ready",
    howItWorks: {
      title: "Three steps to social proof",
      steps: [
        { step: "1", title: "Add testimonials", desc: "Paste from customer emails or type manually" },
        { step: "2", title: "Generate", desc: "Get Wall of Love HTML + collection email template" },
        { step: "3", title: "Embed", desc: "Two lines of code on your landing page — done" },
      ],
    },
    featuresTitle: "Core features",
    features: [
      { icon: "💬", title: "One-click wall", desc: "Input praise, get embeddable Wall of Love HTML in seconds" },
      { icon: "📧", title: "Collection email", desc: "Auto-generated ask-for-testimonial email — copy and send" },
      { icon: "🎨", title: "Three layouts", desc: "Grid, carousel, masonry for different landing styles" },
      { icon: "⚡", title: "Fast load", desc: "Pure HTML/CSS embed, no third-party JS, great Core Web Vitals" },
      { icon: "💰", title: "$29 vs $40", desc: "Testimonial.to white-label $40/mo — we're $29/mo all-in" },
      { icon: "🔒", title: "Your data", desc: "Generated locally, no long-term storage of customer info" },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Ming Z.",
        role: "Indie developer",
        text: "At $800 MRR, paying $40/mo just to remove branding hurt. $29 here is perfect.",
      },
      {
        name: "Alex Kim",
        role: "Bootstrapped Founder",
        text: "Shipped my wall of love in 5 minutes. Embed code just works.",
      },
      {
        name: "Sarah Chen",
        role: "Side project author",
        text: "Collection email template got me 12 more testimonials — landing conversion +23%.",
      },
    ],
    closing: {
      title: "At $500 MRR you shouldn't pay $40/mo for testimonials",
      subtitle:
        "Social proof drives landing conversions. $29/mo day-one pricing because good tools are worth paying for.",
      ctaPrimary: "Create wall",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Wall preview",
      caption: "Fill form · generate embed HTML + collection email",
      preview:
        '<!-- Testimonial Wall · My SaaS -->\n<section style="font-family:system-ui">\n  <h2>My SaaS</h2>\n  <p>What users say</p>\n  <div>★★★★★ "Saved me 3 hours/week..."</div>\n  <div>★★★★★ "Finally affordable social proof"</div>\n</section>\n\nFree tries left: 4/5',
    },
  },
  zh: {
    badge: "Testimonial.to $40/月 · 10 分钟嵌入证言墙",
    title: "独立开发者证言墙",
    subtitle:
      "收集用户好评，两行 HTML 嵌入 Wall of Love。$29/月，Testimonial.to 去品牌 $40/月的 1/4 价格。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/wall",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Testimonial.to $40" },
      { stat: "10 分钟", label: "从零到嵌入证言墙" },
      { stat: "0 JS", label: "纯 HTML 嵌入，极速加载" },
    ],
    comparisonTitle: "你将获得",
    audienceTitle: "谁在用？",
    audiences: [
      { icon: "🚀", title: "独立开发者", desc: "MRR 不到 $2000 — 需要社交证明，不想付 $40/月 去品牌费" },
      { icon: "💻", title: "Solo SaaS 创始人", desc: "5–20 条文字好评，今天就能嵌入落地页" },
      { icon: "🎨", title: "Side Project 作者", desc: "收集邮件模板 + 嵌入代码一键生成" },
      { icon: "📈", title: "Bootstrap 创始人", desc: "网格、轮播、瀑布流 — 匹配你的落地页风格" },
    ],
    sampleNote: "示例：3 条好评 · 网格布局 · 品牌强调色",
    sampleDeliverable: "嵌入 HTML + 收集邮件模板 · 复制即用",
    howItWorks: {
      title: "三步搞定社交证明",
      steps: [
        { step: "1", title: "输入好评", desc: "从客户邮件复制或手动录入" },
        { step: "2", title: "一键生成", desc: "获得 Wall of Love HTML + 收集邮件模板" },
        { step: "3", title: "嵌入网站", desc: "两行代码贴到落地页，立即展示" },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      { icon: "💬", title: "一键生成证言墙", desc: "输入用户好评，秒出可嵌入的 Wall of Love HTML" },
      { icon: "📧", title: "收集邮件模板", desc: "自动生成向客户索要好评的邮件文案，复制即用" },
      { icon: "🎨", title: "三种布局", desc: "网格、轮播、瀑布流，适配不同落地页风格" },
      { icon: "⚡", title: "极速加载", desc: "纯 HTML/CSS 嵌入，无第三方 JS，不影响 Core Web Vitals" },
      { icon: "💰", title: "$29 vs $40", desc: "Testimonial.to 去品牌 $40/月，我们 $29/月全包" },
      { icon: "🔒", title: "数据在你手里", desc: "本地生成，不长期存储客户敏感信息" },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "张明",
        role: "独立开发者",
        text: "MRR $800 时付 $40/月 要证言去品牌太肉疼，证言墙 $29 完全够用。",
      },
      {
        name: "Alex Kim",
        role: "Bootstrap 创始人",
        text: "5 分钟搞定证言墙，嵌入代码直接能用。",
      },
      {
        name: "陈悦",
        role: "Side Project 作者",
        text: "收集邮件模板帮我多拿了 12 条好评，落地转化率 +23%。",
      },
    ],
    closing: {
      title: "MRR $500 时不该为证言付 $40/月",
      subtitle:
        "社交证明是落地页转化率的关键。$29/月，第一天收费，因为好工具值得付费。",
      ctaPrimary: "创建证言墙",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "证言墙预览",
      caption: "填写表单 · 生成嵌入 HTML + 收集邮件",
      preview:
        '<!-- 证言墙 · 我的 SaaS -->\n<section style="font-family:system-ui">\n  <h2>我的 SaaS</h2>\n  <p>用户怎么说</p>\n  <div>★★★★★ "每周帮我省 3 小时..."</div>\n  <div>★★★★★ "终于有买得起的社交证明工具"</div>\n</section>\n\n剩余免费次数：4/5',
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Testimonial Wall",
    subtitle: "One price, all features. 1/4 the cost of Testimonial.to white-label.",
    recommended: "Only plan",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs Testimonial.to $40/mo white-label · cancel anytime",
    perks: [
      "Unlimited wall generation",
      "Three layouts (grid / carousel / masonry)",
      "Embed HTML export",
      "Collection email template",
      "Custom accent color",
      "No third-party JS — fast load",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Embed code needs ongoing maintenance and layout optimization",
      "Paying users = indie hackers shipping real products",
      "Solo-maintained — $29 keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入证言墙",
    subtitle: "一个价格，全部功能。Testimonial.to 去品牌的 1/4 价格。",
    recommended: "推荐",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "对比 Testimonial.to $40/月去品牌 · 随时取消",
    perks: [
      "无限生成证言墙",
      "三种布局（网格/轮播/瀑布流）",
      "嵌入 HTML 代码导出",
      "收集好评邮件模板",
      "自定义主题色",
      "无第三方 JS，极速加载",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 次，之后订阅？",
    whyItems: [
      "嵌入代码需要持续维护和布局优化",
      "付费用户 = 认真做产品的 indie hacker",
      "一人维护，简单定价才能持续运营",
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
