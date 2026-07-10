import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Link Pulse",
    subtitle: "One price, unlimited short links and click analytics.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Bitly $35+/mo · cancel anytime",
    perks: [
      "Unlimited short links",
      "Click analytics & referrers",
      "UTM source / medium / campaign tracking",
      "7-day click trends",
      "Custom branded slugs",
      "CSV export (coming soon)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free links, then subscribe?",
    whyItems: [
      "Click logging and analytics storage cost real infrastructure",
      "Paying users = founders who actually track launch campaigns",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅短链点击统计",
    subtitle: "一口价，短链与点击分析不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Bitly $35+/月 · 随时可取消",
    perks: [
      "无限短链",
      "点击分析与来源统计",
      "UTM 来源/媒介/活动追踪",
      "7 日点击趋势",
      "自定义品牌别名",
      "CSV 导出（即将推出）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 条短链，之后订阅？",
    whyItems: [
      "点击日志与分析存储有真实基础设施成本",
      "付费用户 = 真正追踪发布活动的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Link Dashboard",
    subtitle: "Create short links, track clicks, see referrers and UTM breakdown.",
    memberBadge: "✓ Member · unlimited links",
    freeSyncs: "Free links remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 free short links. Subscribe for unlimited links, full analytics, and UTM tracking.",
    paywallCta: "Subscribe · $9.9/mo",
    createTitle: "New short link",
    productName: "Destination URL",
    productNamePlaceholder: "https://yoursite.com/landing",
    stripeKey: "Custom slug (optional)",
    stripeKeyPlaceholder: "launch-day",
    stripeKeyHint: "Leave empty for auto-generated slug. Used in /l/your-slug",
    creating: "Creating…",
    createDashboard: "Create short link",
    createdTitle: "Short link created!",
    createdHint: "Share your link — clicks are tracked automatically.",
    syncNow: "View stats",
    syncing: "Loading…",
    yourDashboards: "Your short links",
    notSynced: "No clicks yet",
    mrr: "Total clicks",
    arr: "Last 7 days",
    churn: "Top referrer",
    customers: "Slug",
    newCustomers: "Destination",
    churned: "Created",
    expansion: "UTM source",
    contraction: "UTM campaign",
    syncedAt: "Last click",
    copyLink: "Copy link",
    copied: "Copied!",
  },
  zh: {
    title: "短链控制台",
    subtitle: "创建短链、追踪点击、查看来源与 UTM 明细。",
    memberBadge: "✓ 会员 · 短链不限量",
    freeSyncs: "剩余免费短链：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 条免费短链。订阅后可无限创建短链、查看完整分析与 UTM 追踪。",
    paywallCta: "订阅 · $9.9/月",
    createTitle: "新建短链",
    productName: "目标链接",
    productNamePlaceholder: "https://你的网站.com/落地页",
    stripeKey: "自定义别名（可选）",
    stripeKeyPlaceholder: "发布日",
    stripeKeyHint: "留空则自动生成别名，访问路径为 /l/你的别名",
    creating: "创建中…",
    createDashboard: "创建短链",
    createdTitle: "短链已创建！",
    createdHint: "分享你的链接 — 点击将自动记录。",
    syncNow: "查看统计",
    syncing: "加载中…",
    yourDashboards: "你的短链",
    notSynced: "暂无点击",
    mrr: "总点击",
    arr: "近 7 日",
    churn: "热门来源",
    customers: "别名",
    newCustomers: "目标链接",
    churned: "创建时间",
    expansion: "UTM 来源",
    contraction: "UTM 活动",
    syncedAt: "最近点击",
    copyLink: "复制链接",
    copied: "已复制！",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Link Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited short links, full click analytics, and UTM tracking.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用短链点击统计！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建短链、查看完整点击分析与 UTM 追踪。",
    order: "订单号：",
    openDashboard: "打开控制台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    LINK_URL_REQUIRED: "Destination URL is required",
    LINK_URL_INVALID: "Please enter a valid URL starting with http:// or https://",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    LINK_NOT_FOUND: "Short link not found",
    LINK_CREATE_FAILED: "Failed to create short link",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    LINK_URL_REQUIRED: "请填写目标链接",
    LINK_URL_INVALID: "请输入以 http:// 或 https:// 开头的有效链接",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    LINK_NOT_FOUND: "短链不存在",
    LINK_CREATE_FAILED: "创建短链失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Link Pulse · Monthly",
    description: "Unlimited short links, click analytics & UTM tracking.",
  },
  zh: {
    name: "短链点击统计 · 月付",
    description: "无限短链、点击分析与 UTM 追踪。",
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
