import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Churn Reason Pulse",
    subtitle: "One price, unlimited cancellation logs. Know why customers leave.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Baremetrics $50+/mo · cancel anytime",
    perks: [
      "Unlimited cancellation reason logs",
      "7 built-in churn categories",
      "MRR lost tracking per cancellation",
      "Category breakdown dashboard",
      "Free-text feedback capture",
      "Stripe webhook integration (coming soon)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free logs, then subscribe?",
    whyItems: [
      "Structured churn data compounds — 5 logs shows the pattern",
      "Paying users = founders who actually lose customers monthly",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅流失原因追踪",
    subtitle: "一口价，取消记录不限量。知道客户为什么离开。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Baremetrics $50+/月 · 随时可取消",
    perks: [
      "无限取消原因记录",
      "7 种内置流失分类",
      "每条取消追踪流失 MRR",
      "分类占比看板",
      "自由文本反馈采集",
      "Stripe Webhook 集成（即将推出）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "结构化流失数据会叠加 — 5 条就能看出规律",
      "付费用户 = 每月真有客户流失的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Churn Reason Dashboard",
    subtitle: "Log cancellations, categorize reasons, spot patterns before they compound.",
    memberBadge: "✓ Member · unlimited logs",
    freeSyncs: "Free logs remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've logged 5 free cancellations. Subscribe for unlimited logs, category breakdown, and MRR lost tracking.",
    paywallCta: "Subscribe · $9.9/mo",
    createTitle: "Log cancellation",
    customerEmail: "Customer email",
    customerEmailPlaceholder: "e.g. sarah@startup.io",
    mrrLostLabel: "MRR lost ($)",
    mrrPlaceholder: "29",
    mrrHint: "Monthly subscription amount lost from this cancellation.",
    churnReason: "Cancellation reason",
    churnReasons: {
      price: "Too expensive",
      missing_feature: "Missing feature",
      switched_competitor: "Switched to competitor",
      not_using: "Not using enough",
      support: "Poor support",
      bugs: "Bugs / reliability",
      other: "Other",
    },
    freeText: "Additional feedback (optional)",
    freeTextPlaceholder: "What they said when cancelling…",
    creating: "Logging…",
    logCancellation: "Log cancellation",
    yourRecords: "Your cancellation records",
    totalCancellations: "Cancellations",
    mrrLost: "MRR lost",
    topReason: "Top reason",
    breakdownTitle: "Reason breakdown",
    tipsTitle: "Quick tips",
    tips: [
      "Log every cancellation within 24 hours — memory fades fast",
      "Use free-text for quotes you'll reference in product decisions",
      "Review breakdown monthly — one dominant reason = your roadmap priority",
      "Connect to Stripe webhooks (coming soon) for automatic logging",
    ],
  },
  zh: {
    title: "流失原因控制台",
    subtitle: "记录取消、分类原因，在问题恶化前发现规律。",
    memberBadge: "✓ 会员 · 记录不限量",
    freeSyncs: "剩余免费次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已记录 5 次取消。订阅后可无限记录、查看分类占比与流失 MRR 追踪。",
    paywallCta: "订阅 · $9.9/月",
    createTitle: "记录取消",
    customerEmail: "客户邮箱",
    customerEmailPlaceholder: "例如：sarah@startup.io",
    mrrLostLabel: "流失 MRR（美元）",
    mrrPlaceholder: "29",
    mrrHint: "此次取消损失的月度订阅金额。",
    churnReason: "取消原因",
    churnReasons: {
      price: "价格太贵",
      missing_feature: "缺少功能",
      switched_competitor: "换到竞品",
      not_using: "使用不足",
      support: "客服不佳",
      bugs: "缺陷/稳定性",
      other: "其他",
    },
    freeText: "补充反馈（可选）",
    freeTextPlaceholder: "取消时他们说了什么…",
    creating: "记录中…",
    logCancellation: "记录取消",
    yourRecords: "你的取消记录",
    totalCancellations: "取消数",
    mrrLost: "流失 MRR",
    topReason: "首要原因",
    breakdownTitle: "原因占比",
    tipsTitle: "快速提示",
    tips: [
      "24 小时内记录每次取消 — 记忆会快速模糊",
      "自由文本保留你会在产品决策中引用的原话",
      "每月复盘占比 — 一个主导原因就是你的路线图优先级",
      "即将支持 Stripe Webhook 自动记录",
    ],
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Churn Reason Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited cancellation logs, category breakdown, and MRR lost tracking.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用流失原因追踪！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限记录取消、查看分类占比并追踪流失 MRR。",
    order: "订单号：",
    openDashboard: "打开控制台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    EMAIL_REQUIRED: "Customer email is required",
    EMAIL_INVALID: "Please enter a valid email address",
    MRR_INVALID: "MRR lost must be greater than 0",
    CHURN_REASON_INVALID: "Please select a valid cancellation reason",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CANCELLATION_NOT_FOUND: "Cancellation record not found",
    CANCELLATION_CREATE_FAILED: "Failed to log cancellation",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    EMAIL_REQUIRED: "请填写客户邮箱",
    EMAIL_INVALID: "请输入有效的邮箱地址",
    MRR_INVALID: "流失 MRR 必须大于 0",
    CHURN_REASON_INVALID: "请选择有效的取消原因",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    CANCELLATION_NOT_FOUND: "取消记录不存在",
    CANCELLATION_CREATE_FAILED: "记录取消失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Churn Reason Pulse · Monthly",
    description: "Unlimited cancellation logs, reason breakdown & MRR tracking.",
  },
  zh: {
    name: "流失原因追踪 · 月付",
    description: "无限取消记录、原因占比与 MRR 追踪。",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getDashboardCopy(locale: Locale) {
  return dashboardCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  if (code && code in apiErrorCopy[locale]) {
    return apiErrorCopy[locale][code as ApiErrorCode];
  }
  return apiErrorCopy[locale].GENERIC;
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
