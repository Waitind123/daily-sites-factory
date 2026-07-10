import type { Locale } from "./i18n-shared";

export const sampleResultsCopy = {
  en: [
    {
      keyword: "gummysearch",
      points: [
        {
          signal: "alternative",
          intensity: 10,
          quote: "Looking for a GummySearch alternative under $20/mo that covers Reddit AND Hacker News.",
          source: "Ask HN",
        },
        {
          signal: "wish",
          intensity: 9,
          quote: "I wish there was a cross-platform pain scanner after GummySearch shut down.",
          source: "r/SaaS",
        },
      ],
    },
  ],
  zh: [
    {
      keyword: "gummysearch",
      points: [
        {
          signal: "alternative",
          intensity: 10,
          quote: "寻找 $20/月以下、同时覆盖 Reddit 和 Hacker News 的 GummySearch 替代品。",
          source: "Ask HN",
        },
        {
          signal: "wish",
          intensity: 9,
          quote: "GummySearch 关停后，我希望有个跨平台痛点扫描工具。",
          source: "r/SaaS",
        },
      ],
    },
  ],
};

export const scanCopy = {
  en: {
    title: "Cross-Platform Pain Scan",
    subtitle:
      "Enter a niche keyword. We scan Reddit, Hacker News & Product Hunt — ranked by opportunity score.",
    memberBadge: "✓ Member · unlimited scans",
    freeScans: "Free scans:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 scans. Subscribe for unlimited cross-platform pain mining, scoring, and export.",
    paywallCta: "Subscribe · $29/mo",
    formTitle: "Scan a niche",
    keyword: "Niche keyword",
    keywordPlaceholder: "e.g. gummysearch, analytics, booking tool",
    scanning: "Scanning…",
    scanNow: "Scan pain points",
    resultsTitle: "Pain signals found",
    totalFound: "total matches",
    intensity: "Intensity",
    score: "Opportunity",
    opportunityScore: "Avg opportunity",
    source: "Source",
    noResults: "No strong matches — showing top signals for inspiration.",
    exampleTitle: "Example scan result",
  },
  zh: {
    title: "跨平台痛点扫描",
    subtitle: "输入细分领域关键词，扫描 Reddit、Hacker News 与 Product Hunt，按机会分排序。",
    memberBadge: "✓ 会员 · 扫描不限量",
    freeScans: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次扫描。订阅后可无限跨平台挖掘、评分并导出痛点。",
    paywallCta: "订阅 · $29/月",
    formTitle: "扫描细分领域",
    keyword: "细分领域关键词",
    keywordPlaceholder: "例如：gummysearch、分析工具、预约工具",
    scanning: "扫描中…",
    scanNow: "扫描痛点",
    resultsTitle: "发现的痛点信号",
    totalFound: "条匹配",
    intensity: "强度",
    score: "机会分",
    opportunityScore: "平均机会分",
    source: "来源",
    noResults: "无强匹配 — 展示热门信号供参考。",
    exampleTitle: "示例扫描结果",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Pain Radar!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited cross-platform pain scans.",
    order: "Order:",
    openScan: "Open scan dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用跨平台痛点雷达！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限跨平台扫描痛点。",
    order: "订单号：",
    openScan: "打开扫描看板",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    KEYWORD_REQUIRED: "Keyword is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    SCAN_FAILED: "Scan failed. Please try again.",
    MINE_FAILED: "Scan failed. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    KEYWORD_REQUIRED: "请填写关键词",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    SCAN_FAILED: "扫描失败，请重试。",
    MINE_FAILED: "扫描失败，请重试。",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Pain Radar · Monthly",
    description: "Unlimited cross-platform pain point scanning & opportunity scoring.",
  },
  zh: {
    name: "跨平台痛点雷达 · 月付",
    description: "无限跨平台痛点扫描与机会分评分。",
  },
} as const;

export const signalCopy = {
  en: {
    wish: "I wish",
    alternative: "Alternative",
    frustrated: "Frustrated",
    would_pay: "Would pay",
  },
  zh: {
    wish: "我希望",
    alternative: "寻找替代",
    frustrated: "不满",
    would_pay: "愿意付费",
  },
} as const;

export const platformCopy = {
  en: {
    reddit: "Reddit",
    hn: "Hacker News",
    producthunt: "Product Hunt",
  },
  zh: {
    reddit: "Reddit",
    hn: "Hacker News",
    producthunt: "Product Hunt",
  },
} as const;

export function getScanCopy(locale: Locale) {
  return scanCopy[locale];
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

export function getSampleResults(locale: Locale) {
  return sampleResultsCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}

export function getSignalLabel(signal: string, locale: Locale): string {
  if (signal in signalCopy[locale]) {
    return signalCopy[locale][signal as keyof typeof signalCopy.en];
  }
  return signal;
}

export function getPlatformLabel(platform: string, locale: Locale): string {
  if (platform in platformCopy[locale]) {
    return platformCopy[locale][platform as keyof typeof platformCopy.en];
  }
  return platform;
}
