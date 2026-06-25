import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "ChartMogul $79/mo? · $9.9/mo flat",
    title: "Stripe revenue dashboard for indie SaaS",
    subtitle:
      "MRR, ARR, churn, customer movements — connect Stripe in 2 minutes. 5 free syncs, then $9.9/mo. No enterprise bloat.",
    ctaPrimary: "Open dashboard free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free syncs · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs ChartMogul $79+" },
      { stat: "4", label: "metrics founders check weekly" },
      { stat: "2 min", label: "to connect Stripe & see MRR" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Connect Stripe",
          desc: "Paste your restricted API key — read-only, no write access needed",
        },
        {
          step: "2",
          title: "See your numbers",
          desc: "MRR, ARR, churn rate, new vs churned customers in one clean view",
        },
        {
          step: "3",
          title: "Track weekly",
          desc: "Sync on Monday, spot churn spikes before they become a crisis",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📊",
        title: "MRR / ARR at a glance",
        desc: "The 4 numbers every bootstrapped founder checks on Monday morning. No 50-page reports.",
      },
      {
        icon: "📉",
        title: "Churn & customer movements",
        desc: "New customers, churned, expansion and contraction MRR — see what's moving.",
      },
      {
        icon: "🔒",
        title: "Read-only Stripe key",
        desc: "Restricted key with read access only. We never touch your payouts or refunds.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited syncs, unlimited history. No per-customer fees like Baremetrics.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Tom R.",
        role: "Solo SaaS founder",
        text: "ChartMogul wanted $79/mo when I had 50 customers. Stripe Pulse shows me what I need for $9.9.",
      },
      {
        name: "Lisa W.",
        role: "Indie hacker",
        text: "I check MRR every Monday. This dashboard replaced my messy Stripe export spreadsheet.",
      },
      {
        name: "James K.",
        role: "Bootstrapped dev",
        text: "Baremetrics was overkill. I just wanted MRR, churn, and customer count. Done in 2 minutes.",
      },
    ],
    closing: {
      title: "Know your numbers without enterprise pricing",
      subtitle: "5 free syncs · then $9.9/mo for unlimited",
      ctaPrimary: "Open dashboard free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live dashboard preview",
      caption: "MRR · ARR · churn · customer movements — updated on sync",
      preview:
        "📊 My SaaS Dashboard                    Last sync: 2 min ago\n─────────────────────────────────────────────────────\n  MRR          ARR         Churn      Customers\n  $4,280       $51,360     2.3%       142\n─────────────────────────────────────────────────────\n  This month:\n  +12 new customers    -3 churned    +$180 expansion\n  -$45 contraction    Net: +$135 MRR\n─────────────────────────────────────────────────────\n  [ Sync now ]    [ Export CSV ]    [ View history ]",
    },
  },
  zh: {
    badge: "ChartMogul 要 $79/月？· $9.9/月一口价",
    title: "独立开发者 Stripe 收入仪表盘",
    subtitle:
      "MRR、ARR、流失率、客户变动 — 2 分钟连接 Stripe。免费体验 5 次同步，之后 $9.9/月。无企业级臃肿功能。",
    ctaPrimary: "免费打开仪表盘",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，ChartMogul 要 $79+" },
      { stat: "4", label: "创始人每周必看的指标" },
      { stat: "2 分钟", label: "连接 Stripe 查看 MRR" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "连接 Stripe",
          desc: "粘贴只读 API 密钥 — 仅需读取权限，无需写入",
        },
        {
          step: "2",
          title: "查看核心数据",
          desc: "MRR、ARR、流失率、新增与流失客户，一屏看清",
        },
        {
          step: "3",
          title: "每周追踪",
          desc: "周一同步一次，在危机爆发前发现流失异常",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📊",
        title: "MRR / ARR 一目了然",
        desc: "每个自举创始人周一早上必看的 4 个数字，没有 50 页报告。",
      },
      {
        icon: "📉",
        title: "流失与客户变动",
        desc: "新增客户、流失、扩展与收缩 MRR — 看清资金流向。",
      },
      {
        icon: "🔒",
        title: "只读 Stripe 密钥",
        desc: "仅需读取权限的受限密钥，绝不触碰你的付款或退款。",
      },
      {
        icon: "💰",
        title: "$9.9/月一口价",
        desc: "无限同步、无限历史记录，无 Baremetrics 式的按客户收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Tom R.",
        role: "独立 SaaS 创始人",
        text: "我只有 50 个客户时 ChartMogul 要 $79/月。Stripe Pulse 用 $9.9 给我需要的一切。",
      },
      {
        name: "Lisa W.",
        role: "独立开发者",
        text: "我每周一看 MRR。这个仪表盘替代了我混乱的 Stripe 导出表格。",
      },
      {
        name: "James K.",
        role: "自举开发者",
        text: "Baremetrics 太重了。我只想要 MRR、流失率和客户数。2 分钟搞定。",
      },
    ],
    closing: {
      title: "不用企业级定价也能掌握数据",
      subtitle: "免费体验 5 次同步 · 之后 $9.9/月无限使用",
      ctaPrimary: "免费打开仪表盘",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "仪表盘实时预览",
      caption: "MRR · ARR · 流失率 · 客户变动 — 同步即更新",
      preview:
        "📊 我的 SaaS 仪表盘                    上次同步：2 分钟前\n─────────────────────────────────────────────────────\n  MRR          ARR         流失率      客户数\n  $4,280       $51,360     2.3%       142\n─────────────────────────────────────────────────────\n  本月变动：\n  +12 新增客户    -3 流失    +$180 扩展\n  -$45 收缩       净增：+$135 MRR\n─────────────────────────────────────────────────────\n  [ 立即同步 ]    [ 导出 CSV ]    [ 查看历史 ]",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Stripe Pulse",
    subtitle: "One price, unlimited Stripe syncs. No per-customer fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs ChartMogul $79+/mo · cancel anytime",
    perks: [
      "Unlimited Stripe syncs",
      "MRR / ARR / churn dashboard",
      "Customer movement tracking",
      "Expansion & contraction MRR",
      "CSV export",
      "Read-only Stripe key (secure)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free syncs, then subscribe?",
    whyItems: [
      "Stripe API calls and data storage cost real infrastructure",
      "Paying users = founders who actually track revenue weekly",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Stripe 收入仪表盘",
    subtitle: "一口价，Stripe 同步不限量。不按客户数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 ChartMogul $79+/月 · 随时可取消",
    perks: [
      "无限 Stripe 同步",
      "MRR / ARR / 流失率仪表盘",
      "客户变动追踪",
      "扩展与收缩 MRR",
      "CSV 导出",
      "只读 Stripe 密钥（安全）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次同步，之后订阅？",
    whyItems: [
      "Stripe API 调用与数据存储有真实基础设施成本",
      "付费用户 = 真正每周追踪收入的创始人",
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
