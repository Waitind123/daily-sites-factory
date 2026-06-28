import type { Locale } from "./i18n-shared";

export const sampleResultsCopy = {
  en: [
    {
      keyword: "subwatch",
      leads: [
        {
          signal: "alternative",
          intentScore: 9,
          quote: "Looking for a SubWatch alternative under $15/mo with intent scoring.",
          source: "r/indiehackers",
          postedAgo: "4h ago",
        },
        {
          signal: "pricing",
          intentScore: 8,
          quote: "SubWatch $29/mo is steep for solo founders — cheaper options?",
          source: "r/SaaS",
          postedAgo: "1d ago",
        },
      ],
    },
  ],
  zh: [
    {
      keyword: "subwatch",
      leads: [
        {
          signal: "alternative",
          intentScore: 9,
          quote: "寻找 $15/月以下、带意向评分的 SubWatch 替代品。",
          source: "r/indiehackers",
          postedAgo: "4 小时前",
        },
        {
          signal: "pricing",
          intentScore: 8,
          quote: "SubWatch $29/月对独立开发者太贵 — 有更便宜的吗？",
          source: "r/SaaS",
          postedAgo: "1 天前",
        },
      ],
    },
  ],
};

export const monitorCopy = {
  en: {
    title: "Reddit Watch — Keyword Monitor",
    subtitle:
      "Add a keyword to your watchlist. We scan r/SaaS, r/Entrepreneur, r/indiehackers & r/startups 24/7 — alerts ranked by intent score.",
    memberBadge: "✓ Member · unlimited monitoring",
    freeScans: "Free scans:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 scans. Subscribe for unlimited 24/7 keyword monitoring, intent scoring, and webhook alerts.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "Add keyword to watchlist",
    keyword: "Keyword or competitor",
    keywordPlaceholder: "e.g. subwatch, harvest, calendly, analytics",
    scanning: "Scanning…",
    scanNow: "Scan watchlist now",
    resultsTitle: "High-intent alerts found",
    totalFound: "total matches",
    intentScore: "Avg intent",
    highIntent: "High-intent (9+)",
    source: "Source",
    postedAgo: "Posted",
    noResults: "No strong matches — showing top alerts for inspiration.",
    exampleTitle: "Example alert feed",
  },
  zh: {
    title: "Reddit Watch — 关键词监控",
    subtitle: "添加关键词到监控列表，全天候扫描 r/SaaS、r/Entrepreneur、r/indiehackers 与 r/startups，按意向分排序提醒。",
    memberBadge: "✓ 会员 · 监控不限量",
    freeScans: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次扫描。订阅后可无限全天候关键词监控、意向评分与 Webhook 提醒。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "添加关键词到监控列表",
    keyword: "关键词或竞品",
    keywordPlaceholder: "例如：subwatch、harvest、calendly、分析工具",
    scanning: "扫描中…",
    scanNow: "立即扫描监控列表",
    resultsTitle: "发现的高意向提醒",
    totalFound: "条匹配",
    intentScore: "平均意向",
    highIntent: "高意向 (9+)",
    source: "来源",
    postedAgo: "发布",
    noResults: "无强匹配 — 展示热门提醒供参考。",
    exampleTitle: "示例提醒流",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Reddit Watch!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited 24/7 keyword monitoring.",
    order: "Order:",
    openMonitor: "Open keyword monitor",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Reddit 线索监控！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以全天候无限关键词监控。",
    order: "订单号：",
    openMonitor: "打开关键词监控",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    KEYWORD_REQUIRED: "Keyword is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    SCAN_FAILED: "Scan failed. Please try again.",
    MONITOR_FAILED: "Scan failed. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    KEYWORD_REQUIRED: "请填写关键词",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    SCAN_FAILED: "扫描失败，请重试。",
    MONITOR_FAILED: "扫描失败，请重试。",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Reddit Watch · Monthly",
    description: "Unlimited 24/7 Reddit keyword monitoring with intent scoring.",
  },
  zh: {
    name: "Reddit 线索监控 · 月付",
    description: "全天候无限 Reddit 关键词监控与意向评分。",
  },
} as const;

export const signalCopy = {
  en: {
    switching: "Switching",
    alternative: "Alternative",
    pricing: "Pricing pain",
    recommendation: "Asking recs",
  },
  zh: {
    switching: "正在切换",
    alternative: "寻找替代",
    pricing: "价格不满",
    recommendation: "求推荐",
  },
} as const;

export const subredditCopy = {
  en: {
    saas: "r/SaaS",
    entrepreneur: "r/Entrepreneur",
    indiehackers: "r/indiehackers",
    startups: "r/startups",
  },
  zh: {
    saas: "r/SaaS",
    entrepreneur: "r/Entrepreneur",
    indiehackers: "r/indiehackers",
    startups: "r/startups",
  },
} as const;

export function getMonitorCopy(locale: Locale) {
  return monitorCopy[locale];
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

export function getSubredditLabel(sub: string, locale: Locale): string {
  if (sub in subredditCopy[locale]) {
    return subredditCopy[locale][sub as keyof typeof subredditCopy.en];
  }
  return sub;
}
