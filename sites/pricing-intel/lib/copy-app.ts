import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Pricing Intel",
    subtitle: "One price, unlimited intel reports. No per-competitor fees, no enterprise contracts.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited competitor pricing intel reports",
      "90-day change history + strategy playbooks",
      "Email alerts within 24h of pricing moves",
      "Competitive analysis + strategy recommendations",
      "Daily automated pricing page scans",
      "Request new competitor intel",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Kompyte/Klue cost $10K+/yr — we cover solo founders at $29/mo",
      "Daily intel scans require server costs",
      "Solo-maintained — $29 keeps intel data fresh",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入竞品定价情报",
    subtitle: "一个价格，无限情报报告。没有按竞品收费，没有企业合同。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限竞品定价情报报告",
      "90 天变动历史 + 策略手册",
      "定价变动邮件提醒（24h 内）",
      "竞争分析 + 可执行建议",
      "每日自动扫描定价页",
      "新增竞品情报请求",
    ],
    subscribe: "立即订阅 · $29/月",
    demoNote: "演示模式：未配置 Stripe 密钥，点击支付将模拟成功",
    checkoutNote: "Stripe 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "Kompyte/Klue 年费 $10K+，我们 $29/月 覆盖 solo founder",
      "每日情报扫描需要服务器成本",
      "一人维护，$29 才能持续更新情报数据",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const trackCopy = {
  en: {
    title: "Competitor pricing intel",
    subtitle: "Pick a product for 90-day intel, competitive analysis & strategy playbooks",
    trialRemaining: "free intel reports remaining",
    subscribeUnlock: "Subscribe $29/mo →",
    memberActive: "✓ Member active · unlimited intel + email alerts",
    viewHistory: "View intel report →",
    loading: "Loading pricing intel...",
    loadFailed: "load_failed",
    subscribeCta: "Subscribe $29/mo now",
    subscribeUpsell: "Subscribe to unlock all competitors + email alerts",
    subscribeButton: "Subscribe $29/mo",
    close: "×",
    summaryTitle: "📊 Intel summary",
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
    title: "竞品定价情报",
    subtitle: "选择产品查看 90 天情报、竞争分析和策略手册",
    trialRemaining: "次免费情报报告",
    subscribeUnlock: "订阅 $29/月 →",
    memberActive: "✓ 会员已激活 · 无限情报 + 邮件提醒",
    viewHistory: "查看情报报告 →",
    loading: "加载定价情报中...",
    loadFailed: "load_failed",
    subscribeCta: "立即订阅 $29/月",
    subscribeUpsell: "订阅解锁全部竞品无限情报 + 邮件提醒",
    subscribeButton: "订阅 $29/月",
    close: "×",
    summaryTitle: "📊 情报摘要",
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
    title: "Welcome to Pricing Intel!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited competitor intel.",
    order: "Order:",
    openTrack: "Open intel dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入竞品定价情报！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是月度会员，可无限获取竞品定价情报。",
    order: "订单:",
    openTrack: "打开情报面板",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Pricing Intel · Monthly",
    description: "Unlimited competitor intel, change alerts, playbooks & strategy tips.",
  },
  zh: {
    name: "竞品定价情报 · 月度会员",
    description: "无限竞品定价情报、变动提醒、策略手册与建议",
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
