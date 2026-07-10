import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Bannerbear $49/mo · OG image in 30s",
    title: "OG images for indie hackers",
    subtitle:
      "Generate 1200×630 social share images, meta tags, and Next.js snippets. $9.9/mo vs Bannerbear $49/mo — pure SVG, no Puppeteer.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/studio",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Bannerbear $49" },
      { stat: "30s", label: "title to shareable OG image" },
      { stat: "1200×630", label: "Twitter / LinkedIn standard" },
    ],
    comparisonTitle: "What you get",
    audienceTitle: "Who uses it?",
    audiences: [
      { icon: "🚀", title: "Indie hacker", desc: "Product Hunt launch — OG image in 10 min, not $49/mo" },
      { icon: "✍️", title: "Blog author", desc: "Unique share image per post, meta tags copy-paste ready" },
      { icon: "💻", title: "Solo SaaS founder", desc: "5 templates, brand color, SVG download" },
      { icon: "📈", title: "Bootstrapped founder", desc: "Next.js metadata snippet — skip @vercel/og setup" },
    ],
    sampleNote: "Example: product launch · gradient template · brand accent",
    sampleDeliverable: "SVG + meta tags + Next.js snippet · copy-paste ready",
    howItWorks: {
      title: "Three steps to shareable OG images",
      steps: [
        { step: "1", title: "Enter title", desc: "Headline, subtitle, brand color — pick from 5 templates" },
        { step: "2", title: "Instant preview", desc: "Pure SVG render, millisecond output, no API keys" },
        { step: "3", title: "Export & use", desc: "Download SVG, copy meta tags or Next.js metadata snippet" },
      ],
    },
    featuresTitle: "Core features",
    features: [
      { icon: "🖼️", title: "5 templates", desc: "Minimal, product, blog, gradient, dark — indie common scenes" },
      { icon: "⚡", title: "Instant generation", desc: "Pure SVG render, no Puppeteer, millisecond output" },
      { icon: "📋", title: "Meta tag export", desc: "One-click copy og:image, twitter:card full HTML" },
      { icon: "💻", title: "Next.js snippet", desc: "Paste directly into metadata.openGraph config" },
      { icon: "🎨", title: "Custom brand color", desc: "Accent color, subtitle, product badge your way" },
      { icon: "📐", title: "Standard 1200×630", desc: "Twitter, LinkedIn, Facebook recommended size" },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Tom Wright",
        role: "Indie Hacker",
        text: "OG image done 10 min before Product Hunt launch. Saves $49/mo vs Bannerbear.",
      },
      {
        name: "Amy Chen",
        role: "SaaS founder",
        text: "Every blog post gets a share image fast. SEO click-through noticeably up.",
      },
      {
        name: "Leo Wang",
        role: "Full-stack dev",
        text: "Exported meta tags paste straight in — no @vercel/og config wrestling.",
      },
    ],
    closing: {
      title: "Great products need great share images",
      subtitle:
        "Product Hunt, blog SEO, Twitter promos — OG images drive clicks. $9.9/mo, 80% cheaper than Bannerbear.",
      ctaPrimary: "Start generating",
      ctaSecondary: "Read Bannerbear alternative guide",
    },
    productDemo: {
      title: "OG image preview",
      caption: "Enter title · pick template · export meta tags",
      preview:
        '<!-- OG Image · My SaaS -->\n<svg width="1200" height="630">\n  <rect fill="#7c3aed" width="1200" height="630"/>\n  <text x="80" y="280" fill="#fff" font-size="56">\n    Ship faster with OG images\n  </text>\n</svg>\n\n<meta property="og:image" content="..." />\n\nFree tries left: 4/5',
    },
  },
  zh: {
    badge: "Bannerbear $49/月 · 30 秒生成 OG 图",
    title: "独立开发者 OG 图生成器",
    subtitle:
      "一键生成 1200×630 社交分享图、meta 标签和 Next.js 片段。$9.9/月，Bannerbear $49/月的 1/5 价格，纯 SVG 渲染。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/studio",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Bannerbear $49" },
      { stat: "30 秒", label: "从标题到可分享 OG 图" },
      { stat: "1200×630", label: "Twitter/LinkedIn 标准尺寸" },
    ],
    comparisonTitle: "你将获得",
    audienceTitle: "谁在用？",
    audiences: [
      { icon: "🚀", title: "独立开发者", desc: "Product Hunt 发布 — 10 分钟搞定 OG 图，不用付 $49/月" },
      { icon: "✍️", title: "博客作者", desc: "每篇文章独立分享图，meta 标签复制即用" },
      { icon: "💻", title: "Solo SaaS 创始人", desc: "5 种模板、品牌色、SVG 下载" },
      { icon: "📈", title: "Bootstrap 创始人", desc: "Next.js metadata 片段，跳过 @vercel/og 配置" },
    ],
    sampleNote: "示例：产品发布 · 渐变模板 · 品牌强调色",
    sampleDeliverable: "SVG + meta 标签 + Next.js 片段 · 复制即用",
    howItWorks: {
      title: "三步生成分享图",
      steps: [
        { step: "1", title: "输入标题", desc: "主标题、副标题、品牌色，选择 5 种模板之一" },
        { step: "2", title: "即时预览", desc: "纯 SVG 渲染，毫秒出图，无需 API 密钥" },
        { step: "3", title: "导出使用", desc: "下载 SVG、复制 meta 标签或 Next.js metadata 片段" },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      { icon: "🖼️", title: "5 种模板", desc: "极简、产品、博客、渐变、暗色，覆盖 indie 常见场景" },
      { icon: "⚡", title: "即时生成", desc: "纯 SVG 渲染，无需 Puppeteer，毫秒级出图" },
      { icon: "📋", title: "Meta 标签导出", desc: "一键复制 og:image、twitter:card 完整 HTML" },
      { icon: "💻", title: "Next.js 片段", desc: "直接粘贴到 metadata.openGraph 配置" },
      { icon: "🎨", title: "自定义品牌色", desc: "主题色、副标题、产品标签随心配" },
      { icon: "📐", title: "标准 1200×630", desc: "符合 Twitter、LinkedIn、Facebook 推荐尺寸" },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "小林",
        role: "独立开发者",
        text: "Product Hunt 发布前 10 分钟搞定 OG 图，比 Bannerbear 省 $49/月。",
      },
      {
        name: "Amy",
        role: "SaaS 创始人",
        text: "博客每篇文章都能快速生成分享图，SEO 点击率明显提升。",
      },
      {
        name: "老王",
        role: "全栈开发者",
        text: "导出的 meta 标签直接粘贴，不用折腾 @vercel/og 配置了。",
      },
    ],
    closing: {
      title: "好产品需要好看的分享图",
      subtitle:
        "Product Hunt 发布、博客 SEO、Twitter 推广——OG 图决定点击率。$9.9/月，比 Bannerbear 便宜 80%。",
      ctaPrimary: "开始生成",
      ctaSecondary: "阅读 Bannerbear 替代指南",
    },
    productDemo: {
      title: "OG 图预览",
      caption: "输入标题 · 选择模板 · 导出 meta 标签",
      preview:
        '<!-- OG 图 · 我的 SaaS -->\n<svg width="1200" height="630">\n  <rect fill="#7c3aed" width="1200" height="630"/>\n  <text x="80" y="280" fill="#fff" font-size="56">\n    用 OG 图更快 ship 产品\n  </text>\n</svg>\n\n<meta property="og:image" content="..." />\n\n剩余免费次数：4/5',
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join OG Image Studio",
    subtitle: "One price, all features. 1/5 the cost of Bannerbear.",
    recommended: "Only plan",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs Bannerbear $49/mo · cancel anytime",
    perks: [
      "Unlimited OG social share image generation",
      "5 professional templates",
      "One-click meta tag export",
      "Next.js metadata code snippets",
      "SVG download",
      "Custom brand color and subtitle",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Templates and font rendering need ongoing maintenance",
      "Paying users = indie hackers shipping real products",
      "Solo-maintained — $9.9 keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入 OG Image Studio",
    subtitle: "一个价格，全部功能。Bannerbear 的 1/5 价格。",
    recommended: "推荐",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "对比 Bannerbear $49/月 · 随时取消",
    perks: [
      "无限生成 OG 社交分享图",
      "5 种专业模板",
      "Meta 标签一键导出",
      "Next.js metadata 代码片段",
      "SVG 下载",
      "自定义品牌色和副标题",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 次，之后订阅？",
    whyItems: [
      "模板和字体渲染需要持续维护",
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
