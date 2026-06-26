import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Beamer $49/mo · ship changelog in 10min",
    title: "Changelog for indie hackers",
    subtitle:
      "Generate public changelog pages, embed widgets, status snippets, and RSS. $9.9/mo vs Beamer $49/mo — no MAU billing.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/publish",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Beamer $49" },
      { stat: "10min", label: "zero to published changelog" },
      { stat: "4-in-1", label: "page + widget + status + RSS" },
    ],
    comparisonTitle: "What you get",
    audienceTitle: "Who uses it?",
    audiences: [
      { icon: "🚀", title: "Indie hacker", desc: "MRR under $3k — ship updates without $49/mo MAU traps" },
      { icon: "💻", title: "Solo SaaS founder", desc: "2–8 releases/month, public page + embed widget today" },
      { icon: "🎨", title: "Side project builder", desc: "Version tags + RSS + status snippet in one click" },
      { icon: "📈", title: "Bootstrapped founder", desc: "Pure HTML export — zero vendor lock-in" },
    ],
    sampleNote: "Example: 3 releases · feature/fix tags · brand accent",
    sampleDeliverable: "Public page HTML + embed widget + RSS · copy-paste ready",
    howItWorks: {
      title: "Three steps to ship updates",
      steps: [
        { step: "1", title: "Add releases", desc: "Version, title, description — feature/fix/improvement tags" },
        { step: "2", title: "Generate", desc: "Get public page HTML, embed widget, status snippet, RSS" },
        { step: "3", title: "Deploy", desc: "Copy HTML to any host or embed widget in your product" },
      ],
    },
    featuresTitle: "Core features",
    features: [
      { icon: "📋", title: "One-click changelog page", desc: "Input release notes, get a publishable public page in seconds" },
      { icon: "🔌", title: "Embed widget", desc: "Lightweight widget for in-app update notifications" },
      { icon: "🟢", title: "Status snippet", desc: "Uptime status page HTML — publish incidents in one click" },
      { icon: "📡", title: "RSS feed", desc: "Auto-generated RSS for email digests and subscribers" },
      { icon: "💰", title: "$9.9 vs $49", desc: "Beamer $49/mo — we're $9.9/mo all-in, no MAU billing" },
      { icon: "⚡", title: "10 min to launch", desc: "No database setup — copy HTML and deploy anywhere" },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Tom Wright",
        role: "Indie Hacker",
        text: "Finally a changelog tool that doesn't charge per MAU. $9.9 flat is perfect for bootstrapped products.",
      },
      {
        name: "Ming Z.",
        role: "SaaS founder",
        text: "Beamer hiked to $49 so I switched. Changelog page live in 10 minutes at $1.2k MRR.",
      },
      {
        name: "Sarah Chen",
        role: "Side project author",
        text: "3KB embed widget, no Core Web Vitals hit. Update notification open rate +35%.",
      },
    ],
    closing: {
      title: "At $1k MRR you shouldn't pay $49/mo for changelog",
      subtitle:
        "Users need to see you ship. $9.9/mo day-one pricing because good tools are worth paying for.",
      ctaPrimary: "Publish changelog",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Changelog preview",
      caption: "Fill form · generate public page + embed widget + RSS",
      preview:
        '<!-- Changelog · My SaaS -->\n<header>\n  <h1>My SaaS</h1>\n  <p>What\'s new</p>\n</header>\n<article>\n  <span>v1.2.0</span> <span>New</span>\n  <h3>Dark mode support</h3>\n  <p>System-level theme toggle in settings.</p>\n</article>\n\nFree tries left: 4/5',
    },
  },
  zh: {
    badge: "Beamer $49/月 · 10 分钟发布 Changelog",
    title: "独立开发者 Changelog 发布台",
    subtitle:
      "一键生成公开更新页、嵌入 Widget、状态页片段和 RSS。$9.9/月，Beamer $49/月的 1/5 价格，无 MAU 计费。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/publish",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Beamer $49" },
      { stat: "10 分钟", label: "从零到可发布 Changelog" },
      { stat: "四合一", label: "公开页 + Widget + 状态页 + RSS" },
    ],
    comparisonTitle: "你将获得",
    audienceTitle: "谁在用？",
    audiences: [
      { icon: "🚀", title: "独立开发者", desc: "MRR 不到 $3000 — 不想为 MAU 计费付 $49/月" },
      { icon: "💻", title: "Solo SaaS 创始人", desc: "每月 2–8 次更新，今天就能发布公开页 + 嵌入 Widget" },
      { icon: "🎨", title: "Side Project 作者", desc: "版本标签 + RSS + 状态页片段一键生成" },
      { icon: "📈", title: "Bootstrap 创始人", desc: "纯 HTML 导出，零 vendor lock-in" },
    ],
    sampleNote: "示例：3 条更新 · feature/fix 标签 · 品牌强调色",
    sampleDeliverable: "公开页 HTML + 嵌入 Widget + RSS · 复制即用",
    howItWorks: {
      title: "三步发布更新",
      steps: [
        { step: "1", title: "填写版本", desc: "版本号、标题、描述，支持 feature/fix/优化标签" },
        { step: "2", title: "一键生成", desc: "公开页 HTML、嵌入 Widget、状态页片段、RSS 全部导出" },
        { step: "3", title: "部署上线", desc: "复制 HTML 到任意托管，或嵌入产品内通知用户" },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      { icon: "📋", title: "一键生成 Changelog 页", desc: "输入版本更新记录，秒出可发布的 changelog 公开页" },
      { icon: "🔌", title: "嵌入 Widget", desc: "轻量 JS widget，放在产品内让用户随时看更新" },
      { icon: "🟢", title: "状态页片段", desc: "附带 uptime 状态页 HTML，incident 时一键发布" },
      { icon: "📡", title: "RSS Feed", desc: "自动生成 RSS，方便邮件通知和订阅同步" },
      { icon: "💰", title: "$9.9 vs $49", desc: "Beamer $49/月，我们 $9.9/月全包 changelog + 状态页" },
      { icon: "⚡", title: "10 分钟上线", desc: "无需配置数据库，复制 HTML 即可部署到任意托管" },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "刘洋",
        role: "SaaS 创始人",
        text: "Beamer 涨价到 $49 后果断换过来，changelog 页 10 分钟搞定，MRR $1.2k 阶段完全够用。",
      },
      {
        name: "Tom Wright",
        role: "Indie Hacker",
        text: "终于有个 changelog 工具不按 MAU 收费，$9.9 一口价对 bootstrap 产品太合适了。",
      },
      {
        name: "赵婷",
        role: "独立开发者",
        text: "嵌入 widget 只有 3KB，不影响 Core Web Vitals，用户更新通知打开率 +35%。",
      },
    ],
    closing: {
      title: "MRR $1000 时不该为 Changelog 付 $49/月",
      subtitle:
        "用户需要知道你在 ship。$9.9/月，第一天收费，因为好工具值得付费。",
      ctaPrimary: "发布 Changelog",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "Changelog 预览",
      caption: "填写表单 · 生成公开页 + 嵌入 Widget + RSS",
      preview:
        '<!-- Changelog · 我的 SaaS -->\n<header>\n  <h1>我的 SaaS</h1>\n  <p>产品更新</p>\n</header>\n<article>\n  <span>v1.2.0</span> <span>新功能</span>\n  <h3>新增暗色模式</h3>\n  <p>支持系统级暗色主题切换。</p>\n</article>\n\n剩余免费次数：4/5',
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Indie Changelog",
    subtitle: "One price, all features. 1/5 the cost of Beamer.",
    recommended: "Only plan",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs Beamer $49/mo · cancel anytime",
    perks: [
      "Unlimited changelog page generation",
      "Embed widget code export",
      "Status page HTML snippet",
      "Auto-generated RSS feed",
      "Custom accent color",
      "Version tags (feature/fix/improvement)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Changelog templates need ongoing maintenance and SEO optimization",
      "Paying users = indie hackers shipping real products",
      "Solo-maintained — $9.9 keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入 Indie Changelog",
    subtitle: "一个价格，全部功能。Beamer 的 1/5 价格。",
    recommended: "推荐",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "对比 Beamer $49/月 · 随时取消",
    perks: [
      "无限生成 Changelog 公开页",
      "嵌入 Widget 代码导出",
      "状态页 HTML 片段",
      "RSS Feed 自动生成",
      "自定义主题色",
      "版本标签（feature/fix/优化）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 次，之后订阅？",
    whyItems: [
      "Changelog 模板需要持续维护和 SEO 优化",
      "付费用户 = 认真 ship 产品的 indie hacker",
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
