import type { Locale } from "./i18n-shared";

export const sampleResultsCopy = {
  en: [
    {
      keyword: "gummysearch",
      points: [
        {
          signal: "alternative",
          intensity: 10,
          quote: "Looking for a GummySearch alternative with competitor ad spy under $20/mo.",
          source: "Ask HN",
        },
        {
          signal: "wish",
          intensity: 9,
          quote: "I wish SpyCenter had a cheaper tier for solo founders.",
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
          quote: "寻找 $20/月以下、带竞品广告侦察的 GummySearch 替代品。",
          source: "Ask HN",
        },
        {
          signal: "wish",
          intensity: 9,
          quote: "希望 SpyCenter 有适合独立开发者的低价档。",
          source: "r/SaaS",
        },
      ],
    },
  ],
};

export const scanCopy = {
  en: {
    title: "Audience Spy — Pain Point Scan",
    subtitle:
      "Enter a niche keyword. We scan Reddit, Hacker News & Product Hunt — ranked by opportunity score.",
    memberBadge: "✓ Member · unlimited scans",
    freeScans: "Free uses:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free uses. Subscribe for unlimited audience + competitor intelligence.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "Scan audience pain",
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
    spyLink: "Also try Competitor Spy →",
  },
  zh: {
    title: "受众侦察 — 痛点扫描",
    subtitle: "输入细分领域关键词，扫描 Reddit、Hacker News 与 Product Hunt，按机会分排序。",
    memberBadge: "✓ 会员 · 扫描不限量",
    freeScans: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费额度。订阅后可无限使用受众 + 竞品情报。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "扫描受众痛点",
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
    spyLink: "也可试试竞品侦察 →",
  },
} as const;

export const spyCopy = {
  en: {
    title: "Competitor Spy — Ad & SEO Intelligence",
    subtitle:
      "Enter any competitor URL. See their active Meta/Google ads, SEO keywords & G2/Capterra review weaknesses.",
    memberBadge: "✓ Member · unlimited spy",
    freeScans: "Free uses:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free uses. Subscribe for unlimited audience + competitor intelligence.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "Spy on a competitor",
    url: "Competitor URL",
    urlPlaceholder: "e.g. spycenter.io, painhunt.com",
    spying: "Spying…",
    spyNow: "Spy competitor",
    resultsTitle: "Competitor intelligence",
    totalAds: "active ads found",
    avgDays: "avg days running",
    adsTitle: "Active ads",
    seoTitle: "SEO keywords",
    weaknessesTitle: "Review weaknesses",
    daysRunning: "days running",
    spend: "est. spend",
    position: "Position",
    volume: "Volume",
    difficulty: "Difficulty",
    severity: "Severity",
    theme: "Theme",
    keywordCol: "Keyword",
    exampleTitle: "Example spy result",
    scanLink: "Also try Audience Spy →",
  },
  zh: {
    title: "竞品侦察 — 广告与 SEO 情报",
    subtitle: "输入任意竞品网址，查看活跃 Meta/Google 广告、SEO 关键词与 G2/Capterra 评价弱点。",
    memberBadge: "✓ 会员 · 侦察不限量",
    freeScans: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费额度。订阅后可无限使用受众 + 竞品情报。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "侦察竞品",
    url: "竞品网址",
    urlPlaceholder: "例如：spycenter.io、painhunt.com",
    spying: "侦察中…",
    spyNow: "侦察竞品",
    resultsTitle: "竞品情报",
    totalAds: "条活跃广告",
    avgDays: "平均投放天数",
    adsTitle: "活跃广告",
    seoTitle: "SEO 关键词",
    weaknessesTitle: "评价弱点",
    daysRunning: "投放天数",
    spend: "预估花费",
    position: "排名",
    volume: "搜索量",
    difficulty: "难度",
    severity: "严重度",
    theme: "主题",
    keywordCol: "关键词",
    exampleTitle: "示例侦察结果",
    scanLink: "也可试试受众侦察 →",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to GummySpy!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited audience + competitor intelligence.",
    order: "Order:",
    openScan: "Open audience scan",
    openSpy: "Open competitor spy",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 GummySpy！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限使用受众 + 竞品情报。",
    order: "订单号：",
    openScan: "打开受众扫描",
    openSpy: "打开竞品侦察",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    KEYWORD_REQUIRED: "Keyword is required",
    URL_REQUIRED: "Competitor URL is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    SCAN_FAILED: "Scan failed. Please try again.",
    SPY_FAILED: "Spy failed. Please try again.",
    MINE_FAILED: "Scan failed. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    KEYWORD_REQUIRED: "请填写关键词",
    URL_REQUIRED: "请填写竞品网址",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    SCAN_FAILED: "扫描失败，请重试。",
    SPY_FAILED: "侦察失败，请重试。",
    MINE_FAILED: "扫描失败，请重试。",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "GummySpy · Monthly",
    description: "Unlimited audience pain mining + competitor ad intelligence.",
  },
  zh: {
    name: "GummySpy · 月付",
    description: "无限受众痛点挖掘 + 竞品广告情报。",
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
    meta: "Meta Ads",
    google: "Google Ads",
    linkedin: "LinkedIn Ads",
  },
  zh: {
    reddit: "Reddit",
    hn: "Hacker News",
    producthunt: "Product Hunt",
    meta: "Meta 广告",
    google: "Google 广告",
    linkedin: "LinkedIn 广告",
  },
} as const;

export function getScanCopy(locale: Locale) {
  return scanCopy[locale];
}

export function getSpyCopy(locale: Locale) {
  return spyCopy[locale];
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
