import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Bitly $35/mo? · $29/mo flat",
    title: "Branded short links with click analytics",
    subtitle:
      "Create short links, track clicks, see referrers and UTM sources. 5 free links, then $29/mo. No enterprise bloat.",
    ctaPrimary: "Create links free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free links · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Bitly $35+" },
      { stat: "30s", label: "to create a tracked campaign link" },
      { stat: "UTM", label: "source / medium / campaign auto-captured" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste your URL",
          desc: "Drop a landing page, Product Hunt link, or newsletter URL — add a custom slug if you want",
        },
        {
          step: "2",
          title: "Share the short link",
          desc: "Post on Twitter, Reddit, or email — every click is logged with referrer and UTM params",
        },
        {
          step: "3",
          title: "See what converts",
          desc: "Top referrers, 7-day click trends, and recent visits in one clean dashboard",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🔗",
        title: "Branded short links",
        desc: "Custom slugs like /l/launch-day — memorable links for every campaign.",
      },
      {
        icon: "📈",
        title: "Click analytics",
        desc: "Total clicks, 7-day trends, top referrers — know which channel drives traffic.",
      },
      {
        icon: "🎯",
        title: "UTM auto-capture",
        desc: "utm_source, utm_medium, utm_campaign parsed on every click. No spreadsheet hacks.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited links and clicks. No per-seat fees like Bitly Enterprise.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo SaaS founder",
        text: "Bitly wanted $35/mo for basic click stats. Link Pulse gives me everything for $29.",
      },
      {
        name: "Sarah L.",
        role: "Indie hacker",
        text: "I share 3–4 links per launch week. Finally I know which tweet actually drove signups.",
      },
      {
        name: "Chris P.",
        role: "Bootstrapped dev",
        text: "UTM tracking without Google Analytics setup hell. Paste, share, see referrers.",
      },
    ],
    closing: {
      title: "Track every launch link without enterprise pricing",
      subtitle: "5 free links · then $29/mo for unlimited",
      ctaPrimary: "Create links free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live dashboard preview",
      caption: "Short links · clicks · referrers · UTM breakdown",
      preview:
        "🔗 Link Pulse Dashboard              Last click: 3 min ago\n─────────────────────────────────────────────────────\n  /l/launch-day  →  mysaas.com/pricing\n  142 clicks     +28 last 7 days\n─────────────────────────────────────────────────────\n  Top referrers:\n  twitter.com        68   (48%)\n  news.ycombinator.com  31   (22%)\n  direct             24   (17%)\n─────────────────────────────────────────────────────\n  UTM: source=twitter · medium=social · campaign=launch\n  [ Copy link ]    [ View stats ]    [ + New link ]",
    },
  },
  zh: {
    badge: "Bitly 要 $35/月？· $29/月一口价",
    title: "品牌短链 + 点击分析",
    subtitle:
      "生成短链、追踪点击、查看来源与 UTM 参数。免费体验 5 条短链，之后 $29/月。无企业级臃肿功能。",
    ctaPrimary: "免费创建短链",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 条 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Bitly 要 $35+" },
      { stat: "30 秒", label: "创建带追踪的营销链接" },
      { stat: "UTM", label: "自动捕获来源/媒介/活动" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "粘贴目标链接",
          desc: "填入落地页、Product Hunt 或邮件链接 — 可自定义短链别名",
        },
        {
          step: "2",
          title: "分享短链",
          desc: "发到推特、Reddit 或邮件 — 每次点击记录来源与 UTM 参数",
        },
        {
          step: "3",
          title: "看清转化渠道",
          desc: "热门来源、7 日点击趋势、最近访问 — 一屏掌握",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🔗",
        title: "品牌短链",
        desc: "自定义别名如 /l/launch-day — 每次活动都有好记的链接。",
      },
      {
        icon: "📈",
        title: "点击分析",
        desc: "总点击、7 日趋势、热门来源 — 知道哪个渠道带来流量。",
      },
      {
        icon: "🎯",
        title: "UTM 自动捕获",
        desc: "每次点击解析 utm_source、utm_medium、utm_campaign，告别表格手工。",
      },
      {
        icon: "💰",
        title: "$29/月一口价",
        desc: "短链与点击不限量。无 Bitly 企业版按席位收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "独立 SaaS 创始人",
        text: "Bitly 基础点击统计要 $35/月。Link Pulse 用 $29 给我需要的一切。",
      },
      {
        name: "Sarah L.",
        role: "独立开发者",
        text: "每次发布周分享 3–4 条链接。终于知道哪条推文真正带来注册。",
      },
      {
        name: "Chris P.",
        role: "自举开发者",
        text: "不用折腾 Google Analytics 就能做 UTM 追踪。粘贴、分享、看来源。",
      },
    ],
    closing: {
      title: "不用企业级定价也能追踪每次发布链接",
      subtitle: "免费体验 5 条短链 · 之后 $29/月不限量",
      ctaPrimary: "免费创建短链",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "控制台实时预览",
      caption: "短链 · 点击 · 来源 · UTM 明细",
      preview:
        "🔗 短链控制台                        最近点击：3 分钟前\n─────────────────────────────────────────────────────\n  /l/launch-day  →  mysaas.com/pricing\n  142 次点击     近 7 日 +28\n─────────────────────────────────────────────────────\n  热门来源：\n  twitter.com           68   (48%)\n  news.ycombinator.com  31   (22%)\n  直接访问              24   (17%)\n─────────────────────────────────────────────────────\n  UTM：来源=twitter · 媒介=社交 · 活动=发布\n  [ 复制链接 ]    [ 查看统计 ]    [ + 新建短链 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
