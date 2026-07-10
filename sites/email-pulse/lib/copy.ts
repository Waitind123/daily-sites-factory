import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Mailchimp $13+/mo? · $29/mo flat",
    title: "HTML emails for indie product updates",
    subtitle:
      "Build responsive product emails, preview live, copy HTML for Resend/Postmark. 5 free templates, then $29/mo.",
    ctaPrimary: "Create a template free",
    ctaPrimaryHref: "/templates",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free templates · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Mailchimp $13+" },
      { stat: "3 min", label: "to ship your first product email" },
      { stat: "HTML", label: "export for any ESP" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        { step: "1", title: "Pick a template", desc: "Start from product update, launch, or changelog layouts" },
        { step: "2", title: "Edit blocks", desc: "Heading, text, CTA button — live preview updates as you type" },
        { step: "3", title: "Copy HTML", desc: "Paste into Resend, Postmark, Loops, or your own SMTP" },
      ],
    },
    featuresTitle: "Core features",
    features: [
      { icon: "✉️", title: "Block-based editor", desc: "Heading, paragraph, CTA, divider — no hand-coded tables." },
      { icon: "👁️", title: "Live HTML preview", desc: "See exactly what lands in Gmail and Apple Mail before you send." },
      { icon: "📋", title: "One-click copy", desc: "Export production-ready HTML. Works with any email provider." },
      { icon: "💰", title: "Flat $29/mo", desc: "Unlimited templates. No per-contact fees like Mailchimp Essentials." },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      { name: "Alex M.", role: "Solo founder", text: "I was hand-writing HTML tables for every launch email. Email Pulse cut that to 10 minutes." },
      { name: "Priya S.", role: "Indie hacker", text: "Mailchimp wanted $13/mo before I had 500 subscribers. This does the job for $29." },
      { name: "Chris L.", role: "Bootstrapped dev", text: "Copied HTML into Resend, shipped a changelog email same day. Clean output." },
    ],
    closing: {
      title: "Ship product emails faster",
      subtitle: "5 free templates · then $29/mo for unlimited",
      ctaPrimary: "Create a template free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live email builder preview",
      caption: "Block editor · mobile-safe HTML · copy export",
      preview:
        "✉️ Product Update — v2.1 shipped\n─────────────────────────────────\n   Subject: We just shipped dark mode\n   Preheader: Plus 3 bug fixes you asked for\n\n   [ Heading ]  Dark mode is live 🌙\n   [ Text    ]  You asked, we built it.\n   [ Button  ]  Try it now →\n─────────────────────────────────\n   [ Copy HTML ]  [ Download .html ]",
    },
  },
  zh: {
    badge: "Mailchimp $13+/月？· $29/月一口价",
    title: "独立开发者的 HTML 产品邮件",
    subtitle: "搭建响应式产品邮件、实时预览、复制 HTML 用于 Resend/Postmark。免费体验 5 个模板，之后 $29/月。",
    ctaPrimary: "免费创建模板",
    ctaPrimaryHref: "/templates",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个模板 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，对比 Mailchimp $13+" },
      { stat: "3 分钟", label: "发出第一封产品邮件" },
      { stat: "HTML", label: "适配任意邮件服务商" },
    ],
    howItWorks: {
      title: "使用流程",
      steps: [
        { step: "1", title: "选择模板", desc: "从产品更新、上线公告、更新日志等布局开始" },
        { step: "2", title: "编辑区块", desc: "标题、正文、按钮 — 输入时实时预览" },
        { step: "3", title: "复制 HTML", desc: "粘贴到 Resend、Postmark、Loops 或自建 SMTP" },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      { icon: "✉️", title: "区块式编辑器", desc: "标题、段落、按钮、分隔线 — 无需手写表格布局。" },
      { icon: "👁️", title: "实时 HTML 预览", desc: "发送前看清在 Gmail、Apple 邮件中的实际效果。" },
      { icon: "📋", title: "一键复制", desc: "导出可直接上线的 HTML，兼容任意邮件服务商。" },
      { icon: "💰", title: "$29/月一口价", desc: "模板不限量，无 Mailchimp 按联系人收费。" },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      { name: "Alex M.", role: "独立创始人", text: "以前每次发版都要手写 HTML 表格，现在 10 分钟搞定。" },
      { name: "Priya S.", role: "独立开发者", text: "还没 500 订阅 Mailchimp 就要 $13/月，这个 $29 够用。" },
      { name: "Chris L.", role: "自举开发者", text: "复制 HTML 到 Resend，当天就发出了更新日志邮件。" },
    ],
    closing: {
      title: "更快发出产品邮件",
      subtitle: "免费体验 5 个模板 · 之后 $29/月不限量",
      ctaPrimary: "免费创建模板",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "邮件构建器实时预览",
      caption: "区块编辑 · 移动端适配 HTML · 复制导出",
      preview:
        "✉️ 产品更新 — v2.1 已发布\n─────────────────────────────────\n   主题：深色模式已上线\n   [ 标题 ]  深色模式来了 🌙\n   [ 按钮 ]  立即体验 →\n─────────────────────────────────\n   [ 复制 HTML ]",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Subscribe to Email Pulse",
    subtitle: "One price, unlimited templates and HTML export. No per-contact fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Mailchimp $13+/mo · cancel anytime",
    perks: [
      "Unlimited email templates",
      "Live HTML preview",
      "Copy & download HTML",
      "Mobile-safe layouts",
      "Works with Resend, Postmark, Loops",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free templates, then subscribe?",
    whyItems: [
      "Hosting previews and exports costs real infrastructure",
      "Paying users = founders who actually ship product emails",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 HTML 邮件构建器",
    subtitle: "一口价，模板不限量、HTML 可导出。不按联系人收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Mailchimp $13+/月 · 随时可取消",
    perks: [
      "邮件模板不限量",
      "实时 HTML 预览",
      "复制与下载 HTML",
      "移动端适配布局",
      "兼容 Resend、Postmark、Loops",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个模板，之后订阅？",
    whyItems: [
      "托管预览与导出有真实基础设施成本",
      "付费用户 = 真正在发产品邮件的创始人",
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
