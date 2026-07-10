import type { Locale } from "./i18n-shared";

export const sampleResultsCopy = {
  en: [
    {
      keyword: "gummysearch",
      points: [
        { signal: "alternative", intensity: 10, quote: "Looking for a GummySearch alternative under $20/mo.", subreddit: "r/Entrepreneur" },
        { signal: "wish", intensity: 9, quote: "I wish there was a Reddit mining tool after GummySearch shut down.", subreddit: "r/SaaS" },
      ],
    },
  ],
  zh: [
    {
      keyword: "gummysearch",
      points: [
        { signal: "alternative", intensity: 10, quote: "寻找 $20/月以下的 GummySearch 替代品。", subreddit: "r/Entrepreneur" },
        { signal: "wish", intensity: 9, quote: "GummySearch 关停后，我希望有个 Reddit 挖掘工具。", subreddit: "r/SaaS" },
      ],
    },
  ],
};

export const mineCopy = {
  en: {
    title: "Pain Point Mining",
    subtitle: "Enter a niche keyword. We extract Reddit pain signals ranked by frustration.",
    memberBadge: "✓ Member · unlimited searches",
    freeSearches: "Free searches:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 searches. Subscribe for unlimited pain point mining, scoring, and export.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "Mine a niche",
    keyword: "Niche keyword",
    keywordPlaceholder: "e.g. analytics, gummysearch, freelance booking",
    mining: "Mining…",
    mineNow: "Mine pain points",
    resultsTitle: "Pain signals found",
    totalFound: "total matches",
    intensity: "Intensity",
    signal: "Signal",
    subreddit: "Source",
    noResults: "No strong matches — showing top signals for inspiration.",
    exampleTitle: "Example mining result",
  },
  zh: {
    title: "痛点挖掘",
    subtitle: "输入细分领域关键词，按挫败感排序提取 Reddit 痛点信号。",
    memberBadge: "✓ 会员 · 搜索不限量",
    freeSearches: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次搜索。订阅后可无限挖掘、评分并导出痛点。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "挖掘细分领域",
    keyword: "细分领域关键词",
    keywordPlaceholder: "例如：分析工具、gummysearch、自由职业预约",
    mining: "挖掘中…",
    mineNow: "挖掘痛点",
    resultsTitle: "发现的痛点信号",
    totalFound: "条匹配",
    intensity: "强度",
    signal: "信号",
    subreddit: "来源",
    noResults: "无强匹配 — 展示热门信号供参考。",
    exampleTitle: "示例挖掘结果",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Reddit Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited pain point mining.",
    order: "Order:",
    openMine: "Open mining dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Reddit Pulse！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限挖掘痛点。",
    order: "订单号：",
    openMine: "打开挖掘看板",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    KEYWORD_REQUIRED: "Keyword is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    MINE_FAILED: "Mining failed. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    KEYWORD_REQUIRED: "请填写关键词",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    MINE_FAILED: "挖掘失败，请重试。",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Reddit Pulse · Monthly",
    description: "Unlimited Reddit pain point mining & frustration scoring.",
  },
  zh: {
    name: "Reddit Pulse · 月付",
    description: "无限 Reddit 痛点挖掘与挫败感评分。",
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

export function getMineCopy(locale: Locale) {
  return mineCopy[locale];
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
