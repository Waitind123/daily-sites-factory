import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Alt Intel",
    subtitle: "One price, unlimited hike alerts + ranked alternatives. No per-tool fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited price hike intel reports",
      "Ranked alternatives for every tracked product",
      "24h email alerts on pricing moves",
      "90-day hike history + migration playbooks",
      "Daily automated pricing page scans",
      "Request new product tracking",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Static directories are free — hike alerts + playbooks need servers",
      "One saved renewal pays for a year at $9.9/mo",
      "Solo-maintained — subscription keeps intel data fresh",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入 SaaS 替代品情报",
    subtitle: "一个价格，无限涨价提醒与排名替代品。不按工具收费。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限涨价情报报告",
      "每个追踪产品附带排名替代品",
      "定价变动 24h 邮件提醒",
      "90 天涨价历史 + 迁移手册",
      "每日自动扫描定价页",
      "新增产品追踪请求",
    ],
    subscribe: "立即订阅 · $9.9/月",
    demoNote: "演示模式：未配置 Stripe 密钥，点击支付将模拟成功",
    checkoutNote: "Stripe 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "静态目录免费 — 涨价提醒与手册需要服务器",
      "一次续费节省就够付一年 $9.9/月",
      "一人维护，订阅才能持续更新情报",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const trackCopy = {
  en: {
    title: "Price hike intel + alternatives",
    subtitle: "Pick a product for 90-day hike history, ranked alternatives & migration playbooks",
    trialRemaining: "free intel reports remaining",
    subscribeUnlock: "Subscribe $9.9/mo →",
    memberActive: "✓ Member active · unlimited intel + hike alerts",
    viewHistory: "View intel report →",
    loading: "Loading alt intel...",
    loadFailed: "load_failed",
    subscribeCta: "Subscribe $9.9/mo now",
    subscribeUpsell: "Subscribe to unlock all products + hike email alerts",
    subscribeButton: "Subscribe $9.9/mo",
    close: "×",
    summaryTitle: "📊 Intel summary",
    historyTitle: "📈 Hike history",
    pricingTitle: "💰 Current pricing",
    competitiveTitle: "🔀 Ranked alternatives",
    strategyTitle: "💡 Migration playbook",
    positionTitle: "🏆 Market position",
    planCol: "Plan",
    monthlyCol: "Monthly",
    featuresCol: "Key features",
    contactSales: "Contact sales",
    freeTier: "Free",
    perMonth: "/mo",
    lastChecked: "Last checked",
    frequency: "Frequency",
    changes90d: "hikes in 90d",
    all: "All",
    categories: ["All", "Productivity", "Project Mgmt", "Dev Tools", "Design", "Deploy", "Payments", "Customer Support"],
    statsProducts: "Products tracked",
    statsAvgChanges: "Avg hikes/90d",
    statsCategories: "Categories",
    impactHigh: "High impact",
    impactMedium: "Medium impact",
    impactLow: "Low impact",
    scanTitle: "Paste any pricing URL",
    scanPlaceholder: "e.g. zapier.com/pricing",
    scanButton: "Scan for hikes + alts",
    scanHint: "Detects price moves + suggests alternatives — uses 1 free try",
    scanLoading: "Scanning pricing page...",
  },
  zh: {
    title: "涨价情报 + 替代品",
    subtitle: "选择产品查看 90 天涨价历史、排名替代品与迁移手册",
    trialRemaining: "次免费情报报告",
    subscribeUnlock: "订阅 $9.9/月 →",
    memberActive: "✓ 会员已激活 · 无限情报 + 涨价提醒",
    viewHistory: "查看情报报告 →",
    loading: "加载替代品情报中...",
    loadFailed: "load_failed",
    subscribeCta: "立即订阅 $9.9/月",
    subscribeUpsell: "订阅解锁全部产品无限情报 + 涨价邮件提醒",
    subscribeButton: "订阅 $9.9/月",
    close: "×",
    summaryTitle: "📊 情报摘要",
    historyTitle: "📈 涨价历史",
    pricingTitle: "💰 当前定价",
    competitiveTitle: "🔀 排名替代品",
    strategyTitle: "💡 迁移手册",
    positionTitle: "🏆 市场定位",
    planCol: "计划",
    monthlyCol: "月费",
    featuresCol: "核心功能",
    contactSales: "联系销售",
    freeTier: "免费",
    perMonth: "/月",
    lastChecked: "上次检查",
    frequency: "频率",
    changes90d: "天内涨价",
    all: "全部",
    categories: ["全部", "生产力", "项目管理", "开发工具", "设计工具", "部署平台", "支付", "客服工具"],
    scanTitle: "粘贴任意定价页 URL",
    scanPlaceholder: "例如 zapier.com/pricing",
    scanButton: "扫描涨价 + 替代品",
    scanHint: "检测定价变动并推荐替代品 — 消耗 1 次免费体验",
    scanLoading: "正在扫描定价页...",
    statsProducts: "追踪产品",
    statsAvgChanges: "平均涨价/90天",
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
    INVALID_URL: "Invalid URL — try zapier.com/pricing",
    PRODUCT_NOT_FOUND: "Product not found",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    MISSING_PRODUCT_ID: "缺少 productId",
    MISSING_URL: "请输入定价页 URL",
    INVALID_URL: "URL 无效 — 试试 zapier.com/pricing",
    PRODUCT_NOT_FOUND: "产品不存在",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const successCopy = {
  en: {
    title: "Welcome to Alt Intel!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited hike intel + alternatives.",
    order: "Order:",
    openTrack: "Open intel dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入 SaaS 替代品情报！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是月度会员，可无限获取涨价情报与替代品推荐。",
    order: "订单:",
    openTrack: "打开情报面板",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Alt Intel · Monthly",
    description: "Unlimited hike alerts, ranked alternatives & migration playbooks.",
  },
  zh: {
    name: "SaaS 替代品情报 · 月度会员",
    description: "无限涨价提醒、排名替代品与迁移手册",
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
