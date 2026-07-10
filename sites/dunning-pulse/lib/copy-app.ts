import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Dunning Pulse",
    subtitle: "One price, unlimited recovery campaigns. Zero % of recovered revenue.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Churnkey $199/mo · cancel anytime",
    perks: [
      "Unlimited recovery campaigns",
      "Reason-specific dunning sequences",
      "Hosted card-update retry links",
      "Recovery rate dashboard",
      "MRR at risk tracking",
      "Stripe webhook integration (coming soon)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free campaigns, then subscribe?",
    whyItems: [
      "Dunning email delivery and retry links cost real infrastructure",
      "Paying users = founders who actually lose MRR to failed payments",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅失败支付恢复",
    subtitle: "一口价，恢复活动不限量。零恢复收入分成。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Churnkey $199/月 · 随时可取消",
    perks: [
      "无限恢复活动",
      "按原因定制催款序列",
      "托管更新卡片重试链接",
      "恢复率看板",
      "风险 MRR 追踪",
      "Stripe Webhook 集成（即将推出）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个活动，之后订阅？",
    whyItems: [
      "催款邮件投递与重试链接有真实基础设施成本",
      "付费用户 = 真正因支付失败损失 MRR 的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Recovery Dashboard",
    subtitle: "Create dunning campaigns, send reason-specific emails, track MRR recovery.",
    memberBadge: "✓ Member · unlimited campaigns",
    freeSyncs: "Free campaigns remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 free recovery campaigns. Subscribe for unlimited campaigns, full dunning sequences, and recovery analytics.",
    paywallCta: "Subscribe · $9.9/mo",
    createTitle: "New recovery campaign",
    customerEmail: "Customer email",
    customerEmailPlaceholder: "e.g. sarah@startup.io",
    amount: "Subscription amount ($)",
    amountPlaceholder: "29",
    failureReason: "Failure reason",
    failureReasons: {
      expired_card: "Expired card",
      insufficient_funds: "Insufficient funds",
      card_declined: "Card declined",
      authentication_required: "3DS authentication required",
    },
    amountHint: "Monthly subscription amount that failed to charge.",
    creating: "Creating…",
    createCampaign: "Create recovery campaign",
    createdTitle: "Dunning sequence created!",
    createdHint: "Review the email sequence below — send emails or simulate recovery.",
    sendEmail: "Send next email",
    simulateRecovery: "Simulate recovery (demo)",
    syncing: "Loading…",
    yourCampaigns: "Your recovery campaigns",
    status: "Status",
    emailsSent: "Emails sent",
    recovered: "Recovered",
    pending: "Pending",
    emailed: "In progress",
    failed: "Failed",
    mrrAtRisk: "MRR at risk",
    mrrRecovered: "MRR recovered",
    recoveryRate: "Recovery rate",
    emailSequence: "Email sequence",
    day: "Day",
  },
  zh: {
    title: "恢复控制台",
    subtitle: "创建催款活动、发送按原因定制的邮件、追踪 MRR 恢复。",
    memberBadge: "✓ 会员 · 活动不限量",
    freeSyncs: "剩余免费活动：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 个免费恢复活动。订阅后可无限创建、使用完整催款序列与恢复分析。",
    paywallCta: "订阅 · $9.9/月",
    createTitle: "新建恢复活动",
    customerEmail: "客户邮箱",
    customerEmailPlaceholder: "例如：sarah@startup.io",
    amount: "订阅金额（美元）",
    amountPlaceholder: "29",
    failureReason: "失败原因",
    failureReasons: {
      expired_card: "卡片过期",
      insufficient_funds: "余额不足",
      card_declined: "卡片拒绝",
      authentication_required: "需 3DS 验证",
    },
    amountHint: "扣款失败的月度订阅金额。",
    creating: "创建中…",
    createCampaign: "创建恢复活动",
    createdTitle: "催款序列已创建！",
    createdHint: "查看下方邮件序列 — 可发送邮件或模拟恢复。",
    sendEmail: "发送下一封",
    simulateRecovery: "模拟恢复（演示）",
    syncing: "加载中…",
    yourCampaigns: "你的恢复活动",
    status: "状态",
    emailsSent: "已发邮件",
    recovered: "已恢复",
    pending: "待处理",
    emailed: "进行中",
    failed: "失败",
    mrrAtRisk: "风险 MRR",
    mrrRecovered: "已恢复 MRR",
    recoveryRate: "恢复率",
    emailSequence: "邮件序列",
    day: "第",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Dunning Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited recovery campaigns, dunning sequences, and MRR recovery analytics.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用失败支付恢复！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建恢复活动、使用催款序列并查看 MRR 恢复分析。",
    order: "订单号：",
    openDashboard: "打开控制台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    EMAIL_REQUIRED: "Customer email is required",
    EMAIL_INVALID: "Please enter a valid email address",
    AMOUNT_INVALID: "Amount must be greater than 0",
    FAILURE_REASON_INVALID: "Please select a valid failure reason",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CAMPAIGN_NOT_FOUND: "Recovery campaign not found",
    CAMPAIGN_CREATE_FAILED: "Failed to create recovery campaign",
    NO_EMAILS_LEFT: "All dunning emails have been sent",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    EMAIL_REQUIRED: "请填写客户邮箱",
    EMAIL_INVALID: "请输入有效的邮箱地址",
    AMOUNT_INVALID: "金额必须大于 0",
    FAILURE_REASON_INVALID: "请选择有效的失败原因",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    CAMPAIGN_NOT_FOUND: "恢复活动不存在",
    CAMPAIGN_CREATE_FAILED: "创建恢复活动失败",
    NO_EMAILS_LEFT: "催款邮件已全部发送",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Dunning Pulse · Monthly",
    description: "Unlimited recovery campaigns, dunning sequences & MRR analytics.",
  },
  zh: {
    name: "失败支付恢复 · 月付",
    description: "无限恢复活动、催款序列与 MRR 分析。",
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
