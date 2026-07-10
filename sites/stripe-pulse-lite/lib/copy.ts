import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Baremetrics $99/mo? · $19.9/mo flat",
    title: "Indie subscription analytics — MRR, churn & cohorts",
    subtitle:
      "ChartMogul free tier expired? Get MRR, churn, and cohort retention from Stripe in 2 minutes. 5 free syncs, then $19.9/mo. Stripe-only, no bloat.",
    ctaPrimary: "Open dashboard free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $19.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free syncs · then $19.9/mo",
    stats: [
      { stat: "$19.9", label: "flat/mo vs Baremetrics $99+" },
      { stat: "3", label: "cohort months tracked by default" },
      { stat: "2 min", label: "to connect Stripe & see MRR" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Connect Stripe",
          desc: "Paste your restricted read-only API key — we never touch payouts",
        },
        {
          step: "2",
          title: "See MRR + cohorts",
          desc: "Monthly recurring revenue, churn rate, and 3-month retention cohorts in one view",
        },
        {
          step: "3",
          title: "Spot churn early",
          desc: "Sync weekly, compare cohorts, catch retention drops before they compound",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📊",
        title: "MRR / ARR dashboard",
        desc: "The numbers every bootstrapped founder checks Monday morning — without enterprise pricing.",
      },
      {
        icon: "📉",
        title: "Churn & customer movements",
        desc: "New vs churned customers, expansion and contraction MRR — see what's moving.",
      },
      {
        icon: "🧮",
        title: "Cohort retention analysis",
        desc: "3-month signup cohorts with retention curves. Know which months brought sticky customers.",
      },
      {
        icon: "💰",
        title: "Flat $19.9/mo",
        desc: "Unlimited syncs, unlimited history. No per-customer fees when you hit 500 subscribers.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo SaaS founder",
        text: "Baremetrics jumped to $99/mo after my free trial. Stripe Pulse Lite gives me MRR + cohorts for $19.9.",
      },
      {
        name: "Sarah L.",
        role: "Indie hacker",
        text: "I finally see which signup month had the worst retention. That one insight saved my onboarding flow.",
      },
      {
        name: "David K.",
        role: "Bootstrapped dev",
        text: "ChartMogul wanted $79/mo. I just wanted MRR, churn, and basic cohorts. This is exactly that.",
      },
    ],
    closing: {
      title: "Subscription analytics without enterprise tax",
      subtitle: "5 free syncs · then $19.9/mo for unlimited MRR + cohort tracking",
      ctaPrimary: "Open dashboard free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live dashboard preview",
      caption: "MRR · churn · cohort retention — updated on sync",
      preview:
        "📈 Indie Subscription Analytics          Last sync: 2 min ago\n─────────────────────────────────────────────────────\n  MRR          ARR         Churn      Customers\n  $6,420       $77,040     3.1%       218\n─────────────────────────────────────────────────────\n  Cohort retention (signup month):\n  Jan 2026  ████████░░  82%   Feb  ██████░░░░  64%\n  Mar 2026  █████████░  91%   Apr  ███████░░░  73%\n─────────────────────────────────────────────────────\n  This month: +18 new · -5 churned · Net +$240 MRR\n─────────────────────────────────────────────────────\n  [ Sync now ]    [ Export CSV ]    [ Cohort detail ]",
    },
  },
  zh: {
    badge: "Baremetrics 要 $99/月？· $19.9/月一口价",
    title: "Indie 订阅分析 — MRR、流失率与队列留存",
    subtitle:
      "ChartMogul 免费档过期？2 分钟连接 Stripe 获取 MRR、流失率与队列留存分析。免费体验 5 次同步，之后 $19.9/月。只连 Stripe，无臃肿功能。",
    ctaPrimary: "免费打开仪表盘",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $19.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $19.9/月",
    stats: [
      { stat: "$19.9", label: "一口价/月，Baremetrics 要 $99+" },
      { stat: "3", label: "个月队列留存默认追踪" },
      { stat: "2 分钟", label: "连接 Stripe 查看 MRR" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "连接 Stripe",
          desc: "粘贴只读受限 API 密钥 — 绝不触碰你的付款",
        },
        {
          step: "2",
          title: "查看 MRR + 队列",
          desc: "月度经常性收入、流失率与 3 个月注册队列留存，一屏看清",
        },
        {
          step: "3",
          title: "早发现流失",
          desc: "每周同步，对比队列，在问题复合化前发现留存下滑",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📊",
        title: "MRR / ARR 仪表盘",
        desc: "每个自举创始人周一早上必看的数字 — 不用企业级定价。",
      },
      {
        icon: "📉",
        title: "流失与客户变动",
        desc: "新增与流失客户、扩展与收缩 MRR — 看清资金流向。",
      },
      {
        icon: "🧮",
        title: "队列留存分析",
        desc: "3 个月注册队列留存曲线，知道哪个月带来了粘性客户。",
      },
      {
        icon: "💰",
        title: "$19.9/月一口价",
        desc: "无限同步、无限历史，500 个订阅用户也不按人头收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "独立 SaaS 创始人",
        text: "Baremetrics 免费试用后跳到 $99/月。Stripe Pulse Lite 用 $19.9 给我 MRR + 队列分析。",
      },
      {
        name: "Sarah L.",
        role: "独立开发者",
        text: "我终于看到哪个月注册的用户留存最差。这一个洞察救了我的 onboarding 流程。",
      },
      {
        name: "David K.",
        role: "自举开发者",
        text: "ChartMogul 要 $79/月。我只想要 MRR、流失率和基础队列。这正是我需要的。",
      },
    ],
    closing: {
      title: "不用企业级定价也能做订阅分析",
      subtitle: "免费体验 5 次同步 · 之后 $19.9/月无限 MRR + 队列追踪",
      ctaPrimary: "免费打开仪表盘",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "仪表盘实时预览",
      caption: "MRR · 流失率 · 队列留存 — 同步即更新",
      preview:
        "📈 Indie 订阅分析                        上次同步：2 分钟前\n─────────────────────────────────────────────────────\n  MRR          ARR         流失率      客户数\n  $6,420       $77,040     3.1%       218\n─────────────────────────────────────────────────────\n  队列留存（注册月份）：\n  2026年1月  ████████░░  82%   2月  ██████░░░░  64%\n  2026年3月  █████████░  91%   4月  ███████░░░  73%\n─────────────────────────────────────────────────────\n  本月：+18 新增 · -5 流失 · 净增 +$240 MRR\n─────────────────────────────────────────────────────\n  [ 立即同步 ]    [ 导出 CSV ]    [ 队列详情 ]",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Stripe Pulse Lite",
    subtitle: "One price, unlimited Stripe syncs with cohort analysis. No per-customer fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Baremetrics $99+/mo · cancel anytime",
    perks: [
      "Unlimited Stripe syncs",
      "MRR / ARR / churn dashboard",
      "3-month cohort retention curves",
      "Customer movement tracking",
      "CSV export",
      "Read-only Stripe key (secure)",
    ],
    subscribe: "Subscribe · $19.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free syncs, then subscribe?",
    whyItems: [
      "Stripe API calls and cohort storage cost real infrastructure",
      "Paying users = founders who actually track retention weekly",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Indie 订阅分析",
    subtitle: "一口价，Stripe 同步不限量含队列分析。不按客户数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Baremetrics $99+/月 · 随时可取消",
    perks: [
      "无限 Stripe 同步",
      "MRR / ARR / 流失率仪表盘",
      "3 个月队列留存曲线",
      "客户变动追踪",
      "CSV 导出",
      "只读 Stripe 密钥（安全）",
    ],
    subscribe: "订阅 · $19.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次同步，之后订阅？",
    whyItems: [
      "Stripe API 调用与队列数据存储有真实基础设施成本",
      "付费用户 = 真正每周追踪留存的创始人",
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
