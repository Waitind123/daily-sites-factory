import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Churnkey $199/mo? · $9.9/mo flat",
    title: "Recover failed Stripe payments — dunning emails + retry links",
    subtitle:
      "9% of MRR leaks to failed payments every month. Stripe Smart Retries only recover 30%. Get branded dunning sequences, card-update links, and recovery tracking in 5 minutes. 5 free campaigns, then $9.9/mo.",
    ctaPrimary: "Start recovering free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free recovery campaigns · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Churnkey $199+" },
      { stat: "57%", label: "avg recovery with full dunning stack" },
      { stat: "5 min", label: "to launch first recovery campaign" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Import failed payments",
          desc: "Paste customer email, amount, and decline reason — we build the right email sequence",
        },
        {
          step: "2",
          title: "Send dunning emails",
          desc: "Reason-specific templates: expired card, insufficient funds, 3DS required",
        },
        {
          step: "3",
          title: "Track recovery",
          desc: "See MRR at risk, recovered revenue, and recovery rate in one dashboard",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📧",
        title: "Reason-specific dunning",
        desc: "Different email sequences for expired cards vs insufficient funds — not generic \"update your card\" blasts.",
      },
      {
        icon: "🔗",
        title: "Hosted card-update links",
        desc: "One-click retry links your customers can use without logging into your app.",
      },
      {
        icon: "📊",
        title: "Recovery dashboard",
        desc: "MRR at risk, recovered revenue, recovery rate — the numbers that matter for bootstrapped SaaS.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited campaigns, unlimited emails. No % of recovered revenue like Churnkey.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo SaaS founder",
        text: "Lost $340/mo to failed payments. Stripe retries got 30%. Dunning Pulse recovered 62% in the first month.",
      },
      {
        name: "Sarah L.",
        role: "Indie hacker",
        text: "Churnkey wanted $199/mo. I just needed dunning emails and a card-update page for $9.9.",
      },
      {
        name: "David K.",
        role: "Bootstrapped dev",
        text: "Reason-specific emails actually work. Expired card vs insufficient funds get different messages.",
      },
    ],
    closing: {
      title: "Stop leaking MRR to failed payments",
      subtitle: "5 free recovery campaigns · then $9.9/mo for unlimited dunning",
      ctaPrimary: "Start recovering free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Recovery dashboard preview",
      caption: "Failed payments · dunning status · MRR recovered",
      preview:
        "💳 Dunning Recovery Console              Last recovery: 18 min ago\n─────────────────────────────────────────────────────\n  MRR at risk     Recovered      Recovery rate\n  $1,240          $890           71.8%\n─────────────────────────────────────────────────────\n  sarah@startup.io    $29/mo   expired_card   ✓ recovered\n  tom@indie.dev       $49/mo   insufficient   → email 2/3\n  alex@saas.co        $99/mo   card_declined  → pending\n─────────────────────────────────────────────────────\n  Next dunning: tom@indie.dev — Day 3 retry email\n─────────────────────────────────────────────────────\n  [ Send email ]    [ Simulate recovery ]    [ + New campaign ]",
    },
  },
  zh: {
    badge: "Churnkey 要 $199/月？· $9.9/月一口价",
    title: "恢复 Stripe 失败支付 — 催款邮件 + 重试链接",
    subtitle:
      "每月约 9% 的 MRR 因支付失败流失。Stripe 智能重试仅恢复 30%。5 分钟上线品牌化催款序列、更新卡片链接与恢复追踪。免费体验 5 个恢复活动，之后 $9.9/月。",
    ctaPrimary: "免费开始恢复",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Churnkey 要 $199+" },
      { stat: "57%", label: "完整催款栈平均恢复率" },
      { stat: "5 分钟", label: "上线首个恢复活动" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "导入失败支付",
          desc: "粘贴客户邮箱、金额与拒绝原因 — 自动生成对应邮件序列",
        },
        {
          step: "2",
          title: "发送催款邮件",
          desc: "按原因定制模板：卡片过期、余额不足、需 3DS 验证",
        },
        {
          step: "3",
          title: "追踪恢复",
          desc: "一屏看清风险 MRR、已恢复收入与恢复率",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📧",
        title: "按原因定制催款",
        desc: "卡片过期与余额不足走不同邮件序列 — 不是千篇一律的「请更新卡片」。",
      },
      {
        icon: "🔗",
        title: "托管更新卡片链接",
        desc: "客户一键重试，无需登录你的产品。",
      },
      {
        icon: "📊",
        title: "恢复看板",
        desc: "风险 MRR、已恢复收入、恢复率 — 自举 SaaS 最该看的数字。",
      },
      {
        icon: "💰",
        title: "$9.9/月一口价",
        desc: "无限活动、无限邮件。不像 Churnkey 按恢复收入抽成。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "独立 SaaS 创始人",
        text: "每月因支付失败损失 $340。Stripe 重试只恢复 30%。Dunning Pulse 首月恢复 62%。",
      },
      {
        name: "Sarah L.",
        role: "独立开发者",
        text: "Churnkey 要 $199/月。我只需要 $9.9 的催款邮件和更新卡片页。",
      },
      {
        name: "David K.",
        role: "自举开发者",
        text: "按原因发邮件真有用。过期卡与余额不足的消息完全不同。",
      },
    ],
    closing: {
      title: "别再让失败支付漏掉 MRR",
      subtitle: "免费体验 5 个恢复活动 · 之后 $9.9/月不限量",
      ctaPrimary: "免费开始恢复",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "恢复看板实时预览",
      caption: "失败支付 · 催款状态 · 已恢复 MRR",
      preview:
        "💳 失败支付恢复控制台                最近恢复：18 分钟前\n─────────────────────────────────────────────────────\n  风险 MRR        已恢复          恢复率\n  $1,240          $890            71.8%\n─────────────────────────────────────────────────────\n  sarah@startup.io    $29/月   卡片过期     ✓ 已恢复\n  tom@indie.dev       $49/月   余额不足     → 邮件 2/3\n  alex@saas.co        $99/月   卡片拒绝     → 待处理\n─────────────────────────────────────────────────────\n  下次催款：tom@indie.dev — 第 3 天重试邮件\n─────────────────────────────────────────────────────\n  [ 发送邮件 ]    [ 模拟恢复 ]    [ + 新建活动 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
