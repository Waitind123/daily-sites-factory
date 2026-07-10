import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join AIO Rank",
    subtitle: "One price, unlimited dual-track rank + AI Overview monitoring.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs SEMrush $130+/mo · cancel anytime",
    perks: [
      "Unlimited keyword dual-track checks",
      "Classic SERP + AI Overview citation",
      "Daily rechecks with history charts",
      "AI citation position (#1–3) tracking",
      "Competitor citation alerts",
      "CSV export (coming soon)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free dual-track checks, then subscribe?",
    whyItems: [
      "SERP + AI Overview scraping costs real infrastructure",
      "Paying users = founders who track both classic and AI search",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 AI Overview 排名追踪",
    subtitle: "一口价，经典排名 + AI 摘要双轨监控不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 SEMrush $130+/月 · 随时可取消",
    perks: [
      "无限关键词双轨查询",
      "经典 SERP + AI Overview 引用",
      "每日复查与历史图表",
      "AI 引用位置（#1–3）追踪",
      "竞品引用提醒",
      "CSV 导出（即将推出）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次双轨查询，之后订阅？",
    whyItems: [
      "SERP + AI 摘要抓取有真实基础设施成本",
      "付费用户 = 同时追踪经典与 AI 搜索的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Dual-Track Rank Dashboard",
    subtitle: "Classic Google rank + AI Overview citation status in one view.",
    memberBadge: "✓ Member · unlimited dual-track checks",
    freeSyncs: "Free dual-track checks remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free dual-track checks. Subscribe for unlimited keywords, daily rechecks, and full history.",
    paywallCta: "Subscribe · $29/mo",
    createTitle: "Track a new keyword",
    keywordLabel: "Target keyword",
    keywordPlaceholder: "ai overview rank tracker",
    domainLabel: "Your domain",
    domainPlaceholder: "mysaas.com",
    domainHint: "Enter domain without https:// — we check classic rank AND AI Overview citation",
    creating: "Scanning…",
    createDashboard: "Run dual-track check",
    createdTitle: "Keyword tracked!",
    createdHint: "Classic rank and AI Overview status are ready. Recheck daily to see changes.",
    syncNow: "View stats",
    syncing: "Loading…",
    recheck: "Recheck both tracks",
    yourDashboards: "Your tracked keywords",
    currentRank: "Classic rank",
    change: "Change",
    bestRank: "Best rank",
    checks7d: "Checks (7d)",
    aiOverview: "AI Overview",
    aiCited: "Cited",
    aiNotCited: "Not cited",
    aiPosition: "Citation slot",
    aiSnippet: "Snippet preview",
    competitorsCited: "Competitors cited in AI Overview",
    aiBadgeYes: "AI cited",
    aiBadgeNo: "AI not cited",
  },
  zh: {
    title: "双轨排名控制台",
    subtitle: "经典 Google 排名与 AI Overview 引用状态一屏查看。",
    memberBadge: "✓ 会员 · 双轨查询不限量",
    freeSyncs: "剩余免费双轨查询：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费双轨查询。订阅后可无限追踪关键词、每日复查、查看完整历史。",
    paywallCta: "订阅 · $29/月",
    createTitle: "追踪新关键词",
    keywordLabel: "目标关键词",
    keywordPlaceholder: "ai overview rank tracker",
    domainLabel: "你的网站域名",
    domainPlaceholder: "mysaas.com",
    domainHint: "无需输入 https:// — 同时查询经典排名与 AI Overview 引用",
    creating: "扫描中…",
    createDashboard: "运行双轨查询",
    createdTitle: "关键词已追踪！",
    createdHint: "经典排名与 AI 摘要状态已就绪。每日复查可查看变化。",
    syncNow: "查看统计",
    syncing: "加载中…",
    recheck: "双轨复查",
    yourDashboards: "已追踪的关键词",
    currentRank: "经典排名",
    change: "变化",
    bestRank: "最佳排名",
    checks7d: "近 7 日查询",
    aiOverview: "AI 摘要",
    aiCited: "已引用",
    aiNotCited: "未引用",
    aiPosition: "引用位置",
    aiSnippet: "摘要预览",
    competitorsCited: "AI 摘要中引用的竞品",
    aiBadgeYes: "AI 已引用",
    aiBadgeNo: "AI 未引用",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to AIO Rank!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited dual-track checks, daily rechecks, and full history.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 AI Overview 排名追踪！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限双轨查询、每日复查、查看完整历史。",
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
    name: "AIO Rank · Monthly",
    description: "Unlimited dual-track rank + AI Overview monitoring.",
  },
  zh: {
    name: "AI Overview 排名追踪 · 月付",
    description: "无限双轨排名与 AI 摘要监控。",
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
