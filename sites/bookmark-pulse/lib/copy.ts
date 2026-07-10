import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Pocket shut down · $29/mo flat",
    title: "Minimal bookmark manager for indie hackers",
    subtitle:
      "Save URLs, auto-fetch favicons, nest folders, share public collections. No AI second brain. 5 free saves, then $29/mo.",
    ctaPrimary: "Save a link free",
    ctaPrimaryHref: "/bookmarks",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free saves · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Raindrop $28+" },
      { stat: "⌘K", label: "instant search across all links" },
      { stat: "5 min", label: "to import your first folder" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Save any URL",
          desc: "Paste a link — we auto-fetch title, favicon, and screenshot preview",
        },
        {
          step: "2",
          title: "Organize in folders",
          desc: "One-level folders, drag from browser tabs, share public collections",
        },
        {
          step: "3",
          title: "Find instantly",
          desc: "⌘K command palette searches every saved link in milliseconds",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🔖",
        title: "One-click save",
        desc: "Paste URL, get title + favicon automatically. No browser extension required to start.",
      },
      {
        icon: "📁",
        title: "Public share folders",
        desc: "Share a curated link collection with one URL — perfect for resource lists.",
      },
      {
        icon: "⌘K",
        title: "Instant search",
        desc: "Command palette finds any bookmark by title or URL. No AI, no clutter.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited bookmarks and folders. No per-seat fees like enterprise tools.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex K.",
        role: "Solo founder",
        text: "Mozilla killed Pocket and Raindrop wanted $28/mo for AI I don't need. Bookmark Pulse is exactly what I wanted.",
      },
      {
        name: "Mia T.",
        role: "Indie hacker",
        text: "I share a public folder of SaaS tools with my newsletter. One link, always updated.",
      },
      {
        name: "Chris W.",
        role: "Bootstrapped dev",
        text: "No second brain, no Notion integration. Just save links and find them fast.",
      },
    ],
    closing: {
      title: "Stop losing links in browser tabs",
      subtitle: "5 free saves · then $29/mo for unlimited",
      ctaPrimary: "Save a link free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Your bookmark dashboard",
      caption: "Folders · search · public share links",
      preview:
        "📁 Indie Tools (public)\n─────────────────────────────────\n🔖 Plausible Analytics    plausible.io\n🔖 Resend Email API       resend.com\n🔖 Polar Payments         polar.sh\n🔖 Cursor IDE             cursor.com\n─────────────────────────────────\n⌘K Search: \"polar\" → 1 result",
    },
  },
  zh: {
    badge: "Pocket 已关停 · $29/月 一口价",
    title: "独立开发者的极简书签收藏",
    subtitle:
      "保存链接、自动抓取图标、文件夹整理、公开分享合集。不要 AI 第二大脑。免费体验 5 次，之后 $29/月。",
    ctaPrimary: "免费保存链接",
    ctaPrimaryHref: "/bookmarks",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Raindrop 要 $28+" },
      { stat: "⌘K", label: "全站链接即时搜索" },
      { stat: "5 分钟", label: "导入第一个文件夹" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "保存任意链接",
          desc: "粘贴 URL — 自动抓取标题、图标和预览截图",
        },
        {
          step: "2",
          title: "文件夹整理",
          desc: "单层文件夹、从浏览器标签拖入、公开分享合集",
        },
        {
          step: "3",
          title: "即时搜索",
          desc: "⌘K 命令面板毫秒级搜索所有已保存链接",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🔖",
        title: "一键保存",
        desc: "粘贴链接即得标题与图标，无需安装浏览器扩展即可开始。",
      },
      {
        icon: "📁",
        title: "公开分享文件夹",
        desc: "一个链接分享精选合集 — 适合资源清单与工具列表。",
      },
      {
        icon: "⌘K",
        title: "即时搜索",
        desc: "命令面板按标题或链接搜索，无 AI、无冗余功能。",
      },
      {
        icon: "💰",
        title: "$29/月 一口价",
        desc: "书签与文件夹不限量，不像企业工具按席位收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex K.",
        role: "独立创始人",
        text: "Mozilla 关了 Pocket，Raindrop 要 $28/月买我不需要的 AI。Bookmark Pulse 正是我想要的。",
      },
      {
        name: "Mia T.",
        role: "独立开发者",
        text: "我用公开文件夹分享 SaaS 工具清单给 Newsletter 读者，一个链接永远最新。",
      },
      {
        name: "Chris W.",
        role: "自举开发者",
        text: "不要第二大脑，不要 Notion 集成。就是存链接、快速找到。",
      },
    ],
    closing: {
      title: "别再让链接消失在浏览器标签里",
      subtitle: "免费 5 次 · 之后 $29/月 不限量",
      ctaPrimary: "免费保存链接",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "你的书签看板",
      caption: "文件夹 · 搜索 · 公开分享链接",
      preview:
        "📁 独立开发者工具（公开）\n─────────────────────────────────\n🔖 Plausible 分析      plausible.io\n🔖 Resend 邮件 API     resend.com\n🔖 Polar 支付          polar.sh\n🔖 Cursor 编辑器       cursor.com\n─────────────────────────────────\n⌘K 搜索：「polar」→ 1 条结果",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Bookmark Pulse",
    subtitle: "One price, unlimited bookmarks. No AI upsells.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Raindrop $28+/mo · cancel anytime",
    perks: [
      "Unlimited bookmark saves",
      "Unlimited folders",
      "Public share pages",
      "Instant ⌘K search",
      "Auto title + favicon fetch",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free saves, then subscribe?",
    whyItems: [
      "Storing bookmarks, favicons, and share pages costs real infrastructure",
      "Paying users = founders who actually organize their research links",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Bookmark Pulse",
    subtitle: "一口价，书签不限量。无 AI 加价。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Raindrop $28+/月 · 随时可取消",
    perks: [
      "书签保存不限量",
      "文件夹不限量",
      "公开分享页",
      "即时 ⌘K 搜索",
      "自动抓取标题与图标",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "存储书签、图标与分享页有真实基础设施成本",
      "付费用户 = 真正整理调研链接的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export type HomeCopy = (typeof homeCopy)[Locale];

export function getHomeCopy(locale: Locale): HomeCopy {
  return homeCopy[locale];
}

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}
