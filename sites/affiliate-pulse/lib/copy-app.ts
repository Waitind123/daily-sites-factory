import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Affiliate Pulse",
    subtitle: "One price, unlimited affiliates. Zero revenue share.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Rewardful $49/mo + 9% revenue share · cancel anytime",
    perks: [
      "Unlimited affiliate programs",
      "Click & conversion tracking",
      "Commission auto-calculation",
      "Stripe metadata attribution",
      "Conversion rate dashboard",
      "CSV export for payouts (coming soon)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free programs, then subscribe?",
    whyItems: [
      "Click logging and conversion tracking cost real infrastructure",
      "Paying users = founders who actually run affiliate programs",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅联盟追踪平替",
    subtitle: "一口价，联盟计划不限量。零收入分成。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Rewardful $49/月 + 9% 收入分成 · 随时可取消",
    perks: [
      "无限联盟计划",
      "点击与转化追踪",
      "佣金自动计算",
      "Stripe 元数据归因",
      "转化率看板",
      "打款 CSV 导出（即将推出）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 个联盟计划，之后订阅？",
    whyItems: [
      "点击日志与转化追踪有真实基础设施成本",
      "付费用户 = 真正运营联盟计划的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Affiliate Dashboard",
    subtitle: "Create affiliate programs, track clicks & conversions, calculate commissions.",
    memberBadge: "✓ Member · unlimited programs",
    freeSyncs: "Free programs remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 free affiliate programs. Subscribe for unlimited programs, full analytics, and commission tracking.",
    paywallCta: "Subscribe · $29/mo",
    createTitle: "New affiliate program",
    affiliateName: "Affiliate name",
    affiliateNamePlaceholder: "e.g. Sarah Creates, Tom Writes",
    productUrl: "Product URL",
    productUrlPlaceholder: "https://yoursite.com/pricing",
    commissionRate: "Commission rate (%)",
    commissionHint: "Percentage of each sale paid to this affiliate. Typical: 15–30%.",
    creating: "Creating…",
    createProgram: "Create affiliate program",
    createdTitle: "Tracking link created!",
    createdHint: "Share this link with your affiliate — clicks and conversions are tracked automatically.",
    viewStats: "View stats",
    syncing: "Loading…",
    yourPrograms: "Your affiliate programs",
    clicks: "Clicks",
    conversions: "Conversions",
    convRate: "Conv rate",
    commissionOwed: "Commission owed",
    revenue: "Revenue",
    rate: "Rate",
    clicksLabel: "clicks",
    copyLink: "Copy link",
    copied: "Copied!",
    simulateConversion: "Simulate $29 conversion (demo)",
  },
  zh: {
    title: "联盟追踪控制台",
    subtitle: "创建联盟计划、追踪点击与转化、自动计算佣金。",
    memberBadge: "✓ 会员 · 联盟计划不限量",
    freeSyncs: "剩余免费联盟计划：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 个免费联盟计划。订阅后可无限创建、查看完整分析与佣金追踪。",
    paywallCta: "订阅 · $29/月",
    createTitle: "新建联盟计划",
    affiliateName: "联盟伙伴名称",
    affiliateNamePlaceholder: "例如：Sarah Creates、Tom Writes",
    productUrl: "产品链接",
    productUrlPlaceholder: "https://你的网站.com/定价",
    commissionRate: "佣金比例 (%)",
    commissionHint: "每笔销售支付给该联盟伙伴的百分比。常见：15–30%。",
    creating: "创建中…",
    createProgram: "创建联盟计划",
    createdTitle: "追踪链接已创建！",
    createdHint: "将此链接分享给联盟伙伴 — 点击与转化将自动记录。",
    viewStats: "查看统计",
    syncing: "加载中…",
    yourPrograms: "你的联盟计划",
    clicks: "点击",
    conversions: "转化",
    convRate: "转化率",
    commissionOwed: "应付佣金",
    revenue: "收入",
    rate: "比例",
    clicksLabel: "次点击",
    copyLink: "复制链接",
    copied: "已复制！",
    simulateConversion: "模拟 $29 转化（演示）",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Affiliate Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited affiliate programs, conversion tracking, and commission analytics.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用联盟追踪平替！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建联盟计划、追踪转化并查看佣金分析。",
    order: "订单号：",
    openDashboard: "打开控制台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    AFFILIATE_NAME_REQUIRED: "Affiliate name is required",
    PRODUCT_URL_REQUIRED: "Product URL is required",
    PRODUCT_URL_INVALID: "Please enter a valid URL starting with http:// or https://",
    COMMISSION_RATE_INVALID: "Commission rate must be between 1% and 100%",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    AFFILIATE_NOT_FOUND: "Affiliate program not found",
    AFFILIATE_CREATE_FAILED: "Failed to create affiliate program",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    AFFILIATE_NAME_REQUIRED: "请填写联盟伙伴名称",
    PRODUCT_URL_REQUIRED: "请填写产品链接",
    PRODUCT_URL_INVALID: "请输入以 http:// 或 https:// 开头的有效链接",
    COMMISSION_RATE_INVALID: "佣金比例须在 1% 至 100% 之间",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    AFFILIATE_NOT_FOUND: "联盟计划不存在",
    AFFILIATE_CREATE_FAILED: "创建联盟计划失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Affiliate Pulse · Monthly",
    description: "Unlimited affiliate programs, conversion tracking & commission analytics.",
  },
  zh: {
    name: "联盟追踪平替 · 月付",
    description: "无限联盟计划、转化追踪与佣金分析。",
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
