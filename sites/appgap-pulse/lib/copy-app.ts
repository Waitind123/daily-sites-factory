import type { Locale } from "./i18n-shared";

export const sampleResultsCopy = {
  en: [
    {
      keyword: "invoice",
      points: [
        {
          signal: "broken",
          intensity: 10,
          quote: "Crashes every time I try to export a PDF.",
          source: "App Store · Invoice Maker Pro",
        },
        {
          signal: "missing_feature",
          intensity: 9,
          quote: "No Stripe integration for invoicing.",
          source: "App Store · BillEasy",
        },
      ],
    },
  ],
  zh: [
    {
      keyword: "invoice",
      points: [
        {
          signal: "broken",
          intensity: 10,
          quote: "每次导出 PDF 都崩溃。",
          source: "应用商店 · Invoice Maker Pro",
        },
        {
          signal: "missing_feature",
          intensity: 9,
          quote: "发票工具没有 Stripe 集成。",
          source: "应用商店 · BillEasy",
        },
      ],
    },
  ],
};

export const mineCopy = {
  en: {
    title: "App Store Review Scanner",
    subtitle: "Enter a category keyword. We cluster 1-star reviews into market gaps ranked by intensity.",
    memberBadge: "✓ Member · unlimited scans",
    freeSearches: "Free scans:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 scans. Subscribe for unlimited review clustering, scoring, and export.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "Scan a category",
    keyword: "Category keyword",
    keywordPlaceholder: "e.g. invoice, habit, booking, fitness, notes",
    mining: "Scanning…",
    mineNow: "Scan 1-star reviews",
    resultsTitle: "Pain clusters found",
    totalFound: "total matches",
    intensity: "Intensity",
    signal: "Signal",
    subreddit: "Source",
    noResults: "No strong matches — showing top clusters for inspiration.",
    exampleTitle: "Example scan result",
  },
  zh: {
    title: "应用商店差评扫描",
    subtitle: "输入品类关键词，将 1 星差评按强度聚类为市场空白。",
    memberBadge: "✓ 会员 · 扫描不限量",
    freeSearches: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次扫描。订阅后可无限聚类、评分并导出机会列表。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "扫描品类",
    keyword: "品类关键词",
    keywordPlaceholder: "例如：发票、习惯、预约、健身、笔记",
    mining: "扫描中…",
    mineNow: "扫描 1 星差评",
    resultsTitle: "发现的痛点主题",
    totalFound: "条匹配",
    intensity: "强度",
    signal: "信号",
    subreddit: "来源",
    noResults: "无强匹配 — 展示热门主题供参考。",
    exampleTitle: "示例扫描结果",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to AppGap Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited App Store review mining.",
    order: "Order:",
    openMine: "Open scan dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用应用商店差评挖痛点！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限扫描应用商店差评。",
    order: "订单号：",
    openMine: "打开扫描看板",
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
    name: "AppGap Pulse · Monthly",
    description: "Unlimited App Store 1-star review clustering & opportunity scoring.",
  },
  zh: {
    name: "应用商店差评挖痛点 · 月付",
    description: "无限应用商店 1 星差评聚类与机会评分。",
  },
} as const;

export const signalCopy = {
  en: {
    missing_feature: "Missing feature",
    broken: "Broken",
    overpriced: "Overpriced",
    competitor_gap: "Competitor gap",
    opportunity: "Market gap",
    wish: "I wish",
    alternative: "Alternative",
    frustrated: "Frustrated",
    would_pay: "Would pay",
  },
  zh: {
    missing_feature: "功能缺失",
    broken: "严重故障",
    overpriced: "定价过高",
    competitor_gap: "竞品空白",
    opportunity: "市场机会",
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

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}

export function getSampleResults(locale: Locale) {
  return sampleResultsCopy[locale];
}

export function getSignalLabel(signal: string, locale: Locale): string {
  const labels = signalCopy[locale];
  if (signal in labels) {
    return labels[signal as keyof typeof labels];
  }
  return signal;
}
