import type { Locale } from "./i18n-shared";
import type { VisaRegion } from "./data";

export const joinCopy = {
  en: {
    title: "Join Nomad Visa Guide",
    subtitle: "One price, all countries. No free tier, no hidden fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited visa detail views",
      "28+ country income threshold comparison",
      "Full document checklists per country",
      "Tax quick reference (exemptions & 183-day rules)",
      "Schengen access & PR pathway labels",
      "2026 policy updates verified monthly",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free views, then subscribe?",
    whyItems: [
      "Each country's policy is verified against official sources — not scraped",
      "Paying users = quality data, no outdated info",
      "Solo-maintained — simple pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入签证指南会员",
    subtitle: "一个价格，全部国家。没有免费档，没有隐藏费用。",
    recommended: "推荐",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限签证详情查询",
      "28+ 国收入门槛对比表",
      "每国完整材料清单",
      "税务政策速查（免税/183天规则）",
      "申根通行 & 永居路径标注",
      "2026 年政策持续更新",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，点击支付将模拟成功",
    checkoutNote: "Stripe / Polar 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "每国政策需人工核实官方来源，不是爬虫拼凑",
      "付费用户 = 高质量数据，没有过时信息",
      "一人维护，简单定价才能持续更新",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const visasCopy = {
  en: {
    title: "Digital nomad visa database",
    subtitle:
      "Compare income thresholds, stay duration, and tax rules. Click to view full requirements and tips.",
    trialRemaining: "free detail views remaining",
    subscribeUnlock: "Subscribe to unlock all →",
    subscribeNow: "Subscribe · $9.9/mo",
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
    title: "数字游民签证数据库",
    subtitle:
      "对比收入门槛、停留时长、税务政策。点击「查看完整详情」获取材料清单和实操建议。",
    trialRemaining: "次免费详情查询",
    subscribeUnlock: "订阅解锁全部 →",
    subscribeNow: "立即订阅 $9.9/月",
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
    title: "Welcome to Nomad Visa Guide!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited visa details.",
    order: "Order:",
    openVisas: "Browse visa database",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入签证指南会员！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是月度会员，可无限查阅全部签证详情。",
    order: "订单:",
    openVisas: "浏览签证数据库",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Nomad Visa Guide · Monthly",
    description: "28+ country visa database, checklists & tax reference.",
  },
  zh: {
    name: "数字游民签证指南 · 月付",
    description: "28+ 国签证数据库、收入门槛对比、申请清单、政策更新提醒",
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
