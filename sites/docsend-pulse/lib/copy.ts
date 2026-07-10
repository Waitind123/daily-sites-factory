import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "DocSend $45–300/mo · Peony free tier · $9.9/mo",
    title: "Secure document sharing with page-level analytics — without the DocSend tax",
    subtitle:
      "Share pitch decks, proposals, and contracts with trackable links. See who viewed what page, for how long. 5 free shares, then $9.9/mo flat.",
    ctaPrimary: "Share document free",
    ctaPrimaryHref: "/share",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tracked shares · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs DocSend $45+/user" },
      { stat: "Page-level", label: "analytics on every view" },
      { stat: "2 min", label: "to send your first tracked deck" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Upload document",
          desc: "Add your pitch deck, proposal, or contract — PDF, PPT, or any file",
        },
        {
          step: "2",
          title: "Get tracking link",
          desc: "Secure shareable URL with optional password and expiry date",
        },
        {
          step: "3",
          title: "Track every view",
          desc: "Page-by-page analytics: who opened, time per page, download attempts",
        },
      ],
    },
    featuresTitle: "Built for indie founders who send decks to investors",
    features: [
      {
        icon: "📄",
        title: "Secure doc links",
        desc: "Password-protected, expiring links. No per-seat pricing like DocSend Standard.",
      },
      {
        icon: "📊",
        title: "Page-level analytics",
        desc: "See which slides investors linger on. Drop-off per page, not just open count.",
      },
      {
        icon: "🔔",
        title: "View notifications",
        desc: "Email alert when a prospect opens your deck — know when to follow up.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited tracked shares. No $150/mo Advanced tier for watermarks.",
      },
    ],
    testimonialsTitle: "What indie founders say",
    testimonials: [
      {
        name: "Marcus T.",
        role: "B2B SaaS founder",
        text: "Sent my pitch deck to 12 VCs. Saw exactly which slide they dropped off on. Closed our seed round.",
      },
      {
        name: "Jenny R.",
        role: "Solo founder",
        text: "DocSend wanted $45/user/month. I just needed to track one investor deck. $9.9/mo is perfect.",
      },
      {
        name: "Alex K.",
        role: "Indie hacker",
        text: "Dropbox killed free Send & Track. This replaced it with better page analytics in 2 minutes.",
      },
    ],
    closing: {
      title: "Stop guessing if investors read your deck",
      subtitle: "5 free tracked shares · then $9.9/mo for unlimited page-level analytics",
      ctaPrimary: "Share document free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Document analytics preview",
      caption: "Views · time per page · viewer sessions",
      preview:
        "📄 DocSend Pulse                        Last view: 12 min ago\n─────────────────────────────────────────────────────\n  Document         Views    Avg time    Completion\n  Seed Deck v3     24       3m 42s      78%\n─────────────────────────────────────────────────────\n  Page 1 (Cover)     ████████████  89%  ·  42s avg\n  Page 2 (Problem)   ██████████░░  76%  ·  38s avg\n  Page 3 (Solution)  ████████░░░░  62%  ·  31s avg\n  Page 4 (Traction)  ██████░░░░░░  48%  ·  22s avg\n─────────────────────────────────────────────────────\n  👤 Sarah K. · London · Desktop · 4 pages · 2m 15s\n  [ + Share document ]    [ Copy tracking link ]",
    },
  },
  zh: {
    badge: "DocSend $45–300/月 · Peony 免费档 · $9.9/月",
    title: "安全文档分享 + 逐页分析 — 不用交 DocSend 的席位税",
    subtitle:
      "用可追踪链接分享路演稿、方案与合同。看清谁看了哪一页、停留多久。免费体验 5 次，之后 $9.9/月 固定价。",
    ctaPrimary: "免费分享文档",
    ctaPrimaryHref: "/share",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次追踪分享 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "固定月费 vs DocSend $45+/席位" },
      { stat: "逐页", label: "每次浏览都有分析" },
      { stat: "2 分钟", label: "发出第一份追踪路演稿" },
    ],
    howItWorks: {
      title: "使用流程",
      steps: [
        {
          step: "1",
          title: "上传文档",
          desc: "添加路演稿、方案或合同 — 支持 PDF、PPT 等格式",
        },
        {
          step: "2",
          title: "获取追踪链接",
          desc: "安全可分享链接，可选密码与过期时间",
        },
        {
          step: "3",
          title: "追踪每次浏览",
          desc: "逐页分析：谁打开、每页停留、下载尝试次数",
        },
      ],
    },
    featuresTitle: "为向投资人发路演稿的独立开发者打造",
    features: [
      {
        icon: "📄",
        title: "安全文档链接",
        desc: "密码保护、可过期链接。不像 DocSend 标准版按席位收费。",
      },
      {
        icon: "📊",
        title: "逐页分析",
        desc: "看清投资人在哪页停留。每页流失率，不只是打开次数。",
      },
      {
        icon: "🔔",
        title: "浏览通知",
        desc: "潜在客户打开文档时邮件提醒 — 知道何时跟进。",
      },
      {
        icon: "💰",
        title: "固定 $9.9/月",
        desc: "无限追踪分享。不用为水印付 $150/月 高级版。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "张明",
        role: "B2B SaaS 创始人",
        text: "向 12 家 VC 发了路演稿。看清他们在哪页退出。顺利拿下种子轮。",
      },
      {
        name: "李雪",
        role: "独立创始人",
        text: "DocSend 要 $45/席位/月。我只需追踪一份投资人路演稿。$9.9/月 刚好。",
      },
      {
        name: "王磊",
        role: "独立开发者",
        text: "Dropbox 关了免费 Send & Track。这个两分钟搞定，逐页分析还更好。",
      },
    ],
    closing: {
      title: "别再猜投资人有没有看完你的路演稿",
      subtitle: "免费体验 5 次追踪分享 · 之后 $9.9/月 无限逐页分析",
      ctaPrimary: "免费分享文档",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "文档分析预览",
      caption: "浏览量 · 每页时长 · 访客会话",
      preview:
        "📄 文档追踪脉冲                        上次浏览：12 分钟前\n─────────────────────────────────────────────────────\n  文档             浏览量   平均时长   完成率\n  种子轮路演 v3    24       3分42秒    78%\n─────────────────────────────────────────────────────\n  第 1 页（封面）    ████████████  89%  ·  42秒\n  第 2 页（问题）    ██████████░░  76%  ·  38秒\n  第 3 页（方案）    ████████░░░░  62%  ·  31秒\n  第 4 页（增长）    ██████░░░░░░  48%  ·  22秒\n─────────────────────────────────────────────────────\n  👤 李雪 · 上海 · 桌面端 · 4 页 · 2分15秒\n  [ + 分享文档 ]    [ 复制追踪链接 ]",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join DocSend Pulse",
    subtitle: "One price, unlimited secure document shares. No per-seat fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs DocSend $45+/user · cancel anytime",
    perks: [
      "Unlimited tracked document shares",
      "Page-by-page analytics",
      "Viewer session reports",
      "Secure links with password + expiry",
      "View notifications via email",
      "Export analytics (CSV)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free shares, then subscribe?",
    whyItems: [
      "Each tracked share uses real analytics compute",
      "Paying users = founders who actually pitch investors",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅文档追踪脉冲",
    subtitle: "一口价，安全文档分享不限次数。不按席位收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 DocSend $45+/席位 · 随时可取消",
    perks: [
      "追踪文档分享不限次数",
      "逐页分析",
      "访客会话报告",
      "密码保护 + 过期链接",
      "浏览邮件通知",
      "分析导出（CSV）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "每次追踪分享有真实分析成本",
      "付费用户 = 真正向投资人发路演稿的创始人",
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
