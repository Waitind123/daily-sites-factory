import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Buffer $15+/mo? · $9.9/mo flat",
    title: "One post, five platforms — adapted for each",
    subtitle:
      "Paste your product update once. Get native-ready posts for X, LinkedIn, Threads, Reddit, and Product Hunt. 5 free reposts, then $9.9/mo.",
    ctaPrimary: "Repost free",
    ctaPrimaryHref: "/repost",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free reposts · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Buffer $15+" },
      { stat: "5", label: "platforms from one paste" },
      { stat: "30s", label: "to adapt a launch announcement" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste your update",
          desc: "Drop a changelog, launch note, or feature announcement — any length works",
        },
        {
          step: "2",
          title: "Get platform variants",
          desc: "X threads, LinkedIn posts, Reddit-friendly tone — each formatted natively",
        },
        {
          step: "3",
          title: "Copy and ship",
          desc: "One-click copy per platform. No more rewriting the same update 5 times",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📣",
        title: "5-platform repost",
        desc: "X, LinkedIn, Threads, Reddit, Product Hunt — one paste, five native posts.",
      },
      {
        icon: "✂️",
        title: "Character limits",
        desc: "Auto-truncates for 280-char X and PH limits. LinkedIn gets professional framing.",
      },
      {
        icon: "🎯",
        title: "Platform tone",
        desc: "Reddit gets casual value-first tone. LinkedIn adds professional CTA. No copy-paste spam.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited reposts. No per-channel fees like Buffer Essentials at $5/channel.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo SaaS founder",
        text: "I used to spend 45 min rewriting every launch for 5 platforms. Content Pulse does it in 30 seconds.",
      },
      {
        name: "Sarah L.",
        role: "Indie hacker",
        text: "Buffer wanted $15/mo for 3 channels. This gives me 5 platform formats for $9.9.",
      },
      {
        name: "Chris P.",
        role: "Bootstrapped dev",
        text: "Reddit tone vs LinkedIn tone — finally something that doesn't sound like spam everywhere.",
      },
    ],
    closing: {
      title: "Stop rewriting the same update five times",
      subtitle: "5 free reposts · then $9.9/mo for unlimited",
      ctaPrimary: "Repost free",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Live repost preview",
      caption: "One paste → X · LinkedIn · Threads · Reddit · Product Hunt",
      preview:
        "📣 Content Pulse                     Generated: 2 min ago\n─────────────────────────────────────────────────────\n  Original: \"Shipped v2.0 — dark mode, 3x faster\n  exports, and $9.9/mo pricing for indie devs.\"\n─────────────────────────────────────────────────────\n  𝕏 Twitter (142/280):\n  Shipped v2.0 — dark mode, 3x faster exports…\n  #buildinpublic\n─────────────────────────────────────────────────────\n  LinkedIn (380/3000):\n  Sharing an update from the build:\n  Shipped v2.0 with dark mode…\n─────────────────────────────────────────────────────\n  [ Copy 𝕏 ]  [ Copy LinkedIn ]  [ + New repost ]",
    },
  },
  zh: {
    badge: "Buffer 要 $15+/月？· $9.9/月一口价",
    title: "一篇内容，五个平台 — 自动适配格式",
    subtitle:
      "粘贴一次产品更新，自动生成适配 X、领英、Threads、Reddit、Product Hunt 的帖子。免费体验 5 次，之后 $9.9/月。",
    ctaPrimary: "免费分发",
    ctaPrimaryHref: "/repost",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Buffer 要 $15+" },
      { stat: "5", label: "个平台一次生成" },
      { stat: "30 秒", label: "适配一条发布通知" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "粘贴更新内容",
          desc: "填入 changelog、发布说明或功能公告 — 任意长度均可",
        },
        {
          step: "2",
          title: "获取平台变体",
          desc: "X 短帖、领英长文、Reddit 友好语气 — 每个平台原生格式",
        },
        {
          step: "3",
          title: "复制发布",
          desc: "每个平台一键复制，不用再手写 5 遍相同更新",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📣",
        title: "五平台分发",
        desc: "X、领英、Threads、Reddit、Product Hunt — 粘贴一次，生成五条原生帖子。",
      },
      {
        icon: "✂️",
        title: "字数限制",
        desc: "自动截断至 X 280 字和 PH 限制，领英自动添加专业开场白。",
      },
      {
        icon: "🎯",
        title: "平台语气",
        desc: "Reddit 用价值优先的随意语气，领英加专业结尾，避免全平台复制粘贴感。",
      },
      {
        icon: "💰",
        title: "$9.9/月一口价",
        desc: "无限分发，不像 Buffer Essentials 按频道 $5/月收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "独立 SaaS 创始人",
        text: "以前每次发布要花 45 分钟改 5 个平台。内容多平台分发 30 秒搞定。",
      },
      {
        name: "Sarah L.",
        role: "独立开发者",
        text: "Buffer 3 个频道要 $15/月。这个 5 个平台格式只要 $9.9。",
      },
      {
        name: "Chris P.",
        role: "自举开发者",
        text: "Reddit 语气和领英语气终于不一样了，不会到处像垃圾广告。",
      },
    ],
    closing: {
      title: "别再为五个平台重写同一条更新",
      subtitle: "免费体验 5 次 · 之后 $9.9/月无限使用",
      ctaPrimary: "免费分发",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "实时分发预览",
      caption: "一次粘贴 → X · 领英 · Threads · Reddit · Product Hunt",
      preview:
        "📣 内容多平台分发                   生成于：2 分钟前\n─────────────────────────────────────────────────────\n  原文：「发布 v2.0 — 深色模式、导出快 3 倍、\n  独立开发者 $9.9/月定价。」\n─────────────────────────────────────────────────────\n  𝕏 推特 (142/280)：\n  发布 v2.0 — 深色模式、导出快 3 倍…\n  #buildinpublic\n─────────────────────────────────────────────────────\n  领英 (380/3000)：\n  分享一个构建进展：\n  发布 v2.0，新增深色模式…\n─────────────────────────────────────────────────────\n  [ 复制 𝕏 ]  [ 复制领英 ]  [ + 新建分发 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
