import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Rank Pulse",
    subtitle: "One price, unlimited keyword rank tracking.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs SEMrush $130+/mo · cancel anytime",
    perks: [
      "Unlimited keyword tracking",
      "Daily rank rechecks",
      "14-day position history charts",
      "Best rank + change arrows",
      "Multiple domains per project",
      "CSV export (coming soon)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free rank checks, then subscribe?",
    whyItems: [
      "SERP data and daily rechecks cost real infrastructure",
      "Paying users = founders who actually track SEO growth",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 SEO 排名追踪",
    subtitle: "一口价，关键词排名追踪不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 SEMrush $130+/月 · 随时可取消",
    perks: [
      "无限关键词追踪",
      "每日排名复查",
      "14 日排名历史图表",
      "最佳排名 + 涨跌箭头",
      "每个项目支持多域名",
      "CSV 导出（即将推出）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次排名查询，之后订阅？",
    whyItems: [
      "SERP 数据与每日复查有真实基础设施成本",
      "付费用户 = 真正追踪 SEO 增长的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Rank Dashboard",
    subtitle: "Track keyword positions, see rank changes, and monitor 7-day trends.",
    memberBadge: "✓ Member · unlimited rank checks",
    freeSyncs: "Free rank checks remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free rank checks. Subscribe for unlimited keywords, daily rechecks, and full history charts.",
    paywallCta: "Subscribe · $9.9/mo",
    createTitle: "Track a new keyword",
    keywordLabel: "Target keyword",
    keywordPlaceholder: "indie saas rank tracker",
    domainLabel: "Your domain",
    domainPlaceholder: "mysaas.com",
    domainHint: "Enter domain without https:// — we check Google position for this site",
    creating: "Checking…",
    createDashboard: "Check rank now",
    createdTitle: "Keyword tracked!",
    createdHint: "Your initial Google position is ready. Recheck daily to see changes.",
    syncNow: "View stats",
    syncing: "Loading…",
    recheck: "Recheck rank",
    yourDashboards: "Your tracked keywords",
    currentRank: "Current rank",
    change: "Change",
    bestRank: "Best rank",
    checks7d: "Checks (7d)",
  },
  zh: {
    title: "排名控制台",
    subtitle: "追踪关键词排名、查看涨跌、监控 7 日趋势。",
    memberBadge: "✓ 会员 · 排名查询不限量",
    freeSyncs: "剩余免费排名查询：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费排名查询。订阅后可无限追踪关键词、每日复查、查看完整历史图表。",
    paywallCta: "订阅 · $9.9/月",
    createTitle: "追踪新关键词",
    keywordLabel: "目标关键词",
    keywordPlaceholder: "indie saas rank tracker",
    domainLabel: "你的网站域名",
    domainPlaceholder: "mysaas.com",
    domainHint: "无需输入 https:// — 我们查询该域名在 Google 的排名位置",
    creating: "查询中…",
    createDashboard: "立即查询排名",
    createdTitle: "关键词已追踪！",
    createdHint: "初始 Google 排名已就绪。每日复查可查看变化。",
    syncNow: "查看统计",
    syncing: "加载中…",
    recheck: "复查排名",
    yourDashboards: "已追踪的关键词",
    currentRank: "当前排名",
    change: "变化",
    bestRank: "最佳排名",
    checks7d: "近 7 日查询",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Rank Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited keyword tracking, daily rechecks, and full rank history.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 SEO 排名追踪！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限追踪关键词、每日复查、查看完整排名历史。",
    order: "订单号：",
    openDashboard: "打开控制台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    KEYWORD_REQUIRED: "Target keyword is required",
    DOMAIN_REQUIRED: "Domain is required",
    DOMAIN_INVALID: "Please enter a valid domain like mysaas.com",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    KEYWORD_NOT_FOUND: "Tracked keyword not found",
    KEYWORD_CREATE_FAILED: "Failed to track keyword",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    KEYWORD_REQUIRED: "请填写目标关键词",
    DOMAIN_REQUIRED: "请填写网站域名",
    DOMAIN_INVALID: "请输入有效域名，如 mysaas.com",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    KEYWORD_NOT_FOUND: "追踪的关键词不存在",
    KEYWORD_CREATE_FAILED: "关键词追踪失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Rank Pulse · Monthly",
    description: "Unlimited keyword rank tracking & daily rechecks.",
  },
  zh: {
    name: "SEO 排名追踪 · 月付",
    description: "无限关键词排名追踪与每日复查。",
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
