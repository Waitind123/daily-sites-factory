import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join SaaS Price Tracker",
    subtitle: "One price, unlimited tracking. No per-product fees, no hidden costs.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited competitor pricing deep-dives",
      "90-day change history + trend analysis",
      "Email alerts within 24h of price changes",
      "Competitive analysis + strategy recommendations",
      "Daily automated pricing page checks",
      "Request new product tracking",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "RivalPeek charges $49/mo — we cover indie needs at $9.9/mo",
      "Daily pricing page checks require server costs",
      "Solo-maintained — $9.9 keeps tracking data updated",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入 SaaS 价格追踪",
    subtitle: "一个价格，无限追踪。没有按产品收费，没有隐藏费用。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限竞品定价深度追踪",
      "90 天变动历史 + 趋势分析",
      "定价变动邮件提醒（24h 内）",
      "竞争分析 + 策略建议",
      "每日自动检查定价页",
      "新增产品追踪请求",
    ],
    subscribe: "立即订阅 · $9.9/月",
    demoNote: "演示模式：未配置 Stripe 密钥，点击支付将模拟成功",
    checkoutNote: "Stripe 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "RivalPeek $49/月 0 客户，我们 $9.9/月 功能够 indie 用",
      "每日自动检查定价页需要服务器成本",
      "一人维护，$9.9 才能持续更新追踪数据",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const trackCopy = {
  en: {
    title: "Competitor pricing tracker",
    subtitle: "Pick a product to view 90-day pricing history, competitive analysis & strategy tips",
    trialRemaining: "free deep-dives remaining",
    subscribeUnlock: "Subscribe $9.9/mo →",
    memberActive: "✓ Member active · unlimited tracking + email alerts",
    viewHistory: "View change history →",
    loading: "Loading pricing change history...",
    loadFailed: "load_failed",
    subscribeCta: "Subscribe $9.9/mo now",
    subscribeUpsell: "Subscribe to unlock all products + email alerts",
    subscribeButton: "Subscribe $9.9/mo",
    close: "×",
    summaryTitle: "📊 Tracking summary",
    historyTitle: "📈 Change history",
    pricingTitle: "💰 Current pricing",
    competitiveTitle: "🎯 Competitive analysis",
    strategyTitle: "💡 Strategy tips",
    positionTitle: "🏆 Market position",
    planCol: "Plan",
    monthlyCol: "Monthly",
    featuresCol: "Key features",
    contactSales: "Contact sales",
    freeTier: "Free",
    perMonth: "/mo",
    lastChecked: "Last checked",
    frequency: "Frequency",
    changes90d: "changes in 90d",
    all: "All",
    categories: ["All", "Productivity", "Project Mgmt", "Dev Tools", "Design", "Deploy", "Payments", "Customer Support"],
    statsProducts: "Products tracked",
    statsAvgChanges: "Avg changes/90d",
    statsCategories: "Categories",
    impactHigh: "High impact",
    impactMedium: "Medium impact",
    impactLow: "Low impact",
    scanTitle: "Paste any pricing URL",
    scanPlaceholder: "e.g. intercom.com/pricing",
    scanButton: "Scan pricing page",
    scanHint: "AI extracts tiers + detects changes — uses 1 free try",
    scanLoading: "Scanning pricing page...",
  },
  zh: {
    title: "竞品定价追踪",
    subtitle: "选择产品查看 90 天定价变动历史、竞争分析和策略建议",
    trialRemaining: "次免费深度追踪",
    subscribeUnlock: "订阅 $9.9/月 →",
    memberActive: "✓ 会员已激活 · 无限追踪 + 邮件变动提醒",
    viewHistory: "查看变动历史 →",
    loading: "加载定价变动历史中...",
    loadFailed: "load_failed",
    subscribeCta: "立即订阅 $9.9/月",
    subscribeUpsell: "订阅解锁全部产品无限追踪 + 邮件提醒",
    subscribeButton: "订阅 $9.9/月",
    close: "×",
    summaryTitle: "📊 追踪摘要",
    historyTitle: "📈 变动历史",
    pricingTitle: "💰 当前定价",
    competitiveTitle: "🎯 竞争分析",
    strategyTitle: "💡 策略建议",
    positionTitle: "🏆 市场定位",
    planCol: "计划",
    monthlyCol: "月费",
    featuresCol: "核心功能",
    contactSales: "联系销售",
    freeTier: "免费",
    perMonth: "/月",
    lastChecked: "上次检查",
    frequency: "频率",
    changes90d: "天内变动",
    all: "全部",
    categories: ["全部", "生产力", "项目管理", "开发工具", "设计工具", "部署平台", "支付", "客服工具"],
    scanTitle: "粘贴任意定价页 URL",
    scanPlaceholder: "例如 intercom.com/pricing",
    scanButton: "扫描定价页",
    scanHint: "AI 提取套餐 + 检测变动 — 消耗 1 次免费体验",
    scanLoading: "正在扫描定价页...",
    statsProducts: "追踪产品",
    statsAvgChanges: "平均变动/90天",
    statsCategories: "覆盖品类",
    impactHigh: "高影响",
    impactMedium: "中影响",
    impactLow: "低影响",
  },
} as const;

export const apiErrorCopy = {
  en: {
    MISSING_PRODUCT_ID: "Missing productId",
    MISSING_URL: "Please enter a pricing page URL",
    INVALID_URL: "Invalid URL — try intercom.com/pricing",
    PRODUCT_NOT_FOUND: "Product not found",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    MISSING_PRODUCT_ID: "缺少 productId",
    MISSING_URL: "请输入定价页 URL",
    INVALID_URL: "URL 无效 — 试试 intercom.com/pricing",
    PRODUCT_NOT_FOUND: "产品不存在",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const successCopy = {
  en: {
    title: "Welcome to SaaS Price Tracker!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited competitor tracking.",
    order: "Order:",
    openTrack: "Start tracking",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入 SaaS 价格追踪！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是月度会员，可无限追踪竞品定价变动。",
    order: "订单:",
    openTrack: "开始追踪竞品",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "SaaS Price Tracker · Monthly",
    description: "Unlimited competitor tracking, change alerts, history & strategy tips.",
  },
  zh: {
    name: "SaaS 价格追踪 · 月度会员",
    description: "无限竞品定价追踪、变动提醒、历史分析、策略建议",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getTrackCopy(locale: Locale) {
  return trackCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  if (code && code in apiErrorCopy[locale]) {
    return apiErrorCopy[locale][code as ApiErrorCode];
  }
  return apiErrorCopy[locale].GENERIC;
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
