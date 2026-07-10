import type { Locale } from "./i18n-shared";
import type { VisaRegion } from "./data";

export const joinCopy = {
  en: {
    title: "Subscribe to Visa Live",
    subtitle: "One price, unlimited visa tracking. No hidden fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited visa tracking & expiry reminders",
      "Real-time policy change alerts within 24h",
      "Policy change diff for 35+ programs",
      "30-day and 7-day expiry reminders",
      "Auto-generated renewal checklists",
      "Weekly digest of all visa policy updates",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tracks, then subscribe?",
    whyItems: [
      "Each policy change is verified against official sources",
      "Paying users = real-time alerts, no stale data",
      "Solo-maintained — simple pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅签证政策实时追踪",
    subtitle: "一个价格，无限签证追踪。没有隐藏费用。",
    recommended: "推荐",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限签证追踪与到期提醒",
      "政策变更 24 小时内实时告警",
      "35+ 项目政策变更对比",
      "30 天和 7 天到期提醒",
      "自动生成续签清单",
      "每周签证政策变更摘要",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，点击支付将模拟成功",
    checkoutNote: "Stripe / Polar 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "每项政策变更需人工核实官方来源",
      "付费用户 = 实时告警，没有过时数据",
      "一人维护，简单定价才能持续更新",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const visasCopy = {
  en: {
    title: "Digital nomad visa policies",
    subtitle:
      "Browse income thresholds, stay duration, and tax rules. Click to view full requirements.",
    trialRemaining: "free detail views remaining",
    subscribeUnlock: "Subscribe to unlock all →",
    subscribeNow: "Subscribe · $29/mo",
    allRegions: "All regions",
    sortIncome: "Sort by income threshold",
    sortProcessing: "Sort by processing time",
    viewAgain: "View again",
    viewDetails: "View full details",
    schengen: "Schengen",
    prPathway: "PR pathway",
    incomeThreshold: "Monthly income",
    stayDuration: "Stay duration",
    tax: "Tax",
    processing: "Processing",
    requirements: "Requirements",
    documents: "Documents",
    tips: "Insider tips",
    officialLink: "Official application →",
    updatedNote: "Updated",
    disclaimer: "Always verify latest policy with official sources before applying",
    close: "×",
    loadFailed: "load_failed",
    subscribeCta: "Subscribe now",
  },
  zh: {
    title: "数字游民签证政策库",
    subtitle: "对比收入门槛、停留时长、税务政策。点击查看完整条件与材料清单。",
    trialRemaining: "次免费详情查询",
    subscribeUnlock: "订阅解锁全部 →",
    subscribeNow: "立即订阅 $29/月",
    allRegions: "全部地区",
    sortIncome: "按收入门槛排序",
    sortProcessing: "按审批时长排序",
    viewAgain: "再次查看详情",
    viewDetails: "查看完整详情",
    schengen: "申根",
    prPathway: "永居路径",
    incomeThreshold: "月收入门槛",
    stayDuration: "停留时长",
    tax: "税务",
    processing: "审批",
    requirements: "申请条件",
    documents: "材料清单",
    tips: "实操建议",
    officialLink: "官方申请入口 →",
    updatedNote: "数据更新于",
    disclaimer: "申请前请以官方最新政策为准",
    close: "×",
    loadFailed: "load_failed",
    subscribeCta: "立即订阅",
  },
} as const;

export const regionLabels: Record<Locale, Record<VisaRegion, string>> = {
  en: {
    europe: "Europe",
    asia: "Asia",
    americas: "Americas",
    "middle-east": "Middle East",
  },
  zh: {
    europe: "欧洲",
    asia: "亚洲",
    americas: "美洲",
    "middle-east": "中东",
  },
};

export const apiErrorCopy = {
  en: {
    VISA_NOT_FOUND: "Visa program not found",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    VISA_NOT_FOUND: "未找到该签证项目",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const successCopy = {
  en: {
    title: "Welcome to Visa Live!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited visa tracking and expiry reminders.",
    order: "Order:",
    openVisas: "Open tracking dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入签证政策实时追踪会员！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你现在拥有无限签证追踪与到期提醒。",
    order: "订单:",
    openVisas: "打开追踪面板",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Visa Live · Monthly",
    description: "Real-time digital nomad visa tracking & expiry reminders.",
  },
  zh: {
    name: "签证政策实时追踪 · 月付",
    description: "数字游民签证实时政策追踪与到期提醒",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getVisasCopy(locale: Locale) {
  return visasCopy[locale];
}

export function getRegionLabels(locale: Locale) {
  return regionLabels[locale];
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
