import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Rewardful $49+9%? · $29/mo flat",
    title: "Stripe-native affiliate tracking without revenue share",
    subtitle:
      "Create affiliate links, track clicks & conversions, calculate commissions. 5 free programs, then $29/mo. No 9% cut of your sales.",
    ctaPrimary: "Create program free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free programs · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Rewardful $49+9%" },
      { stat: "0%", label: "revenue share — keep 100% of affiliate sales" },
      { stat: "Stripe", label: "native conversion tracking via metadata" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Add affiliate + commission rate",
          desc: "Enter affiliate name, product URL, and commission % — we generate a unique tracking link",
        },
        {
          step: "2",
          title: "Share the tracking link",
          desc: "Affiliate posts /r/their-code on Twitter, blog, or newsletter — every click is logged",
        },
        {
          step: "3",
          title: "Pay commissions via Stripe",
          desc: "See clicks, conversions, and commission owed — export for Stripe payout",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🤝",
        title: "Affiliate link tracking",
        desc: "Unique /r/code links with click logging and Stripe conversion attribution.",
      },
      {
        icon: "💵",
        title: "Commission calculator",
        desc: "Auto-calculate owed commissions by rate. No spreadsheet math at month-end.",
      },
      {
        icon: "📊",
        title: "Conversion dashboard",
        desc: "Clicks, conversion rate, revenue, and commission owed per affiliate in one view.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited affiliates. No 9% revenue share like Rewardful on top of monthly fee.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Marcus T.",
        role: "Solo SaaS founder",
        text: "Rewardful wanted $49/mo plus 9% of affiliate revenue. At $5k/mo in affiliate sales that's $499. Affiliate Pulse is $29 flat.",
      },
      {
        name: "Lisa K.",
        role: "Indie hacker",
        text: "Launched my affiliate program in 10 minutes. Stripe metadata tracking just works. No pixel, no SDK.",
      },
      {
        name: "David R.",
        role: "Bootstrapped dev",
        text: "Finally know exactly what I owe each affiliate. Commission dashboard saves me 2 hours every month.",
      },
    ],
    closing: {
      title: "Run an affiliate program without giving away 9%",
      subtitle: "5 free programs · then $29/mo for unlimited",
      ctaPrimary: "Create program free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live affiliate dashboard preview",
      caption: "Affiliates · clicks · conversions · commission owed",
      preview:
        "🤝 Affiliate Pulse Dashboard           Last conversion: 12 min ago\n─────────────────────────────────────────────────────\n  @sarah-creates  →  mysaas.com/pricing\n  20% commission · 89 clicks · 7 conversions\n─────────────────────────────────────────────────────\n  Revenue:     $203.00\n  Commission:  $40.60 owed\n  Conv rate:   7.9%\n─────────────────────────────────────────────────────\n  @tom-writes    →  mysaas.com/pricing\n  15% commission · 34 clicks · 2 conversions\n  Commission:  $8.70 owed\n─────────────────────────────────────────────────────\n  [ Copy link ]    [ View stats ]    [ + New affiliate ]",
    },
  },
  zh: {
    badge: "Rewardful $49+9%？· $29/月一口价",
    title: "Stripe 原生联盟追踪，零收入分成",
    subtitle:
      "创建联盟链接、追踪点击与转化、自动计算佣金。免费体验 5 个联盟计划，之后 $29/月。不从你的销售额中抽 9%。",
    ctaPrimary: "免费创建联盟计划",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 个 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Rewardful 要 $49+9%" },
      { stat: "0%", label: "收入分成 — 联盟销售额 100% 归你" },
      { stat: "Stripe", label: "通过元数据原生追踪转化" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "添加联盟伙伴与佣金比例",
          desc: "输入联盟伙伴名称、产品链接和佣金百分比 — 自动生成唯一追踪链接",
        },
        {
          step: "2",
          title: "分享追踪链接",
          desc: "联盟伙伴在推特、博客或邮件中发布 /r/专属代码 — 每次点击自动记录",
        },
        {
          step: "3",
          title: "通过 Stripe 支付佣金",
          desc: "查看点击、转化和应付佣金 — 导出后通过 Stripe 打款",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🤝",
        title: "联盟链接追踪",
        desc: "唯一 /r/代码 链接，记录点击并通过 Stripe 归因转化。",
      },
      {
        icon: "💵",
        title: "佣金自动计算",
        desc: "按佣金比例自动计算应付金额，月底不用手算表格。",
      },
      {
        icon: "📊",
        title: "转化看板",
        desc: "每位联盟伙伴的点击、转化率、收入和应付佣金一屏掌握。",
      },
      {
        icon: "💰",
        title: "$29/月一口价",
        desc: "联盟伙伴不限量。不像 Rewardful 月费之外再抽 9% 销售额。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Marcus T.",
        role: "独立 SaaS 创始人",
        text: "Rewardful 要 $49/月加联盟收入 9%。联盟月销 $5000 就是 $499。Affiliate Pulse 一口价 $29。",
      },
      {
        name: "Lisa K.",
        role: "独立开发者",
        text: "10 分钟上线联盟计划。Stripe 元数据追踪直接可用，无需像素或 SDK。",
      },
      {
        name: "David R.",
        role: "自举开发者",
        text: "终于清楚每位联盟伙伴该付多少。佣金看板每月省我 2 小时。",
      },
    ],
    closing: {
      title: "运营联盟计划，不必再让出 9%",
      subtitle: "免费体验 5 个联盟计划 · 之后 $29/月不限量",
      ctaPrimary: "免费创建联盟计划",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "联盟看板实时预览",
      caption: "联盟伙伴 · 点击 · 转化 · 应付佣金",
      preview:
        "🤝 联盟追踪控制台                    最近转化：12 分钟前\n─────────────────────────────────────────────────────\n  @sarah-creates  →  mysaas.com/pricing\n  佣金 20% · 89 次点击 · 7 次转化\n─────────────────────────────────────────────────────\n  收入：      $203.00\n  应付佣金：  $40.60\n  转化率：    7.9%\n─────────────────────────────────────────────────────\n  @tom-writes    →  mysaas.com/pricing\n  佣金 15% · 34 次点击 · 2 次转化\n  应付佣金：  $8.70\n─────────────────────────────────────────────────────\n  [ 复制链接 ]    [ 查看统计 ]    [ + 新建联盟 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
