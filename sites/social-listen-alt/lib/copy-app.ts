import type { Locale } from "./i18n-shared";

export const sampleResultsCopy = {
  en: [
    {
      keyword: "brand24",
      leads: [
        {
          signal: "alternative",
          intentScore: 9,
          quote: "Brand24 is $199/mo for 3 keywords — need a cheaper Reddit-focused alternative.",
          source: "r/SaaS",
          postedAgo: "3h ago",
        },
        {
          signal: "pricing",
          intentScore: 8,
          quote: "Mention $49/mo still too much if I only care about Reddit + X intent threads.",
          source: "X",
          postedAgo: "6h ago",
        },
      ],
    },
  ],
  zh: [
    {
      keyword: "brand24",
      leads: [
        {
          signal: "alternative",
          intentScore: 9,
          quote: "Brand24 3 个关键词就要 $199/月 — 需要更便宜的 Reddit 专注替代品。",
          source: "r/SaaS",
          postedAgo: "3 小时前",
        },
        {
          signal: "pricing",
          intentScore: 8,
          quote: "Mention $49/月还是太贵，如果只关心 Reddit + X 的高意向帖。",
          source: "X",
          postedAgo: "6 小时前",
        },
      ],
    },
  ],
};

export const monitorCopy = {
  en: {
    title: "Intent Monitor",
    subtitle:
      "Enter a keyword or competitor. We scan Reddit & X for high-intent signals — alternative to, switching from, pricing pain — ranked by score.",
    memberBadge: "✓ Member · unlimited monitoring",
    freeScans: "Free scans:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 scans. Subscribe for unlimited intent monitoring, noise filtering, and export.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "Monitor a keyword",
    keyword: "Keyword or competitor",
    keywordPlaceholder: "e.g. brand24, mention, calendly, analytics",
    scanning: "Scanning…",
    scanNow: "Find intent signals",
    resultsTitle: "High-intent signals found",
    totalFound: "total matches",
    intentScore: "Avg intent",
    highIntent: "High-intent (9+)",
    source: "Source",
    postedAgo: "Posted",
    noResults: "No strong matches — showing top signals for inspiration.",
    exampleTitle: "Example scan result",
  },
  zh: {
    title: "意向监控",
    subtitle:
      "输入关键词或竞品名，扫描 Reddit 与 X 的高意向信号 — 寻找替代、正在切换、价格不满 — 按评分排序。",
    memberBadge: "✓ 会员 · 监控不限量",
    freeScans: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次扫描。订阅后可无限意向监控、噪音过滤并导出。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "监控关键词",
    keyword: "关键词或竞品",
    keywordPlaceholder: "例如：brand24、mention、calendly、分析工具",
    scanning: "扫描中…",
    scanNow: "查找意向信号",
    resultsTitle: "发现的高意向信号",
    totalFound: "条匹配",
    intentScore: "平均意向",
    highIntent: "高意向 (9+)",
    source: "来源",
    postedAgo: "发布",
    noResults: "无强匹配 — 展示热门信号供参考。",
    exampleTitle: "示例扫描结果",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Listen Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited intent monitoring.",
    order: "Order:",
    openMonitor: "Open intent monitor",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用社交监听替代品！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限监控高意向信号。",
    order: "订单号：",
    openMonitor: "打开意向监控",
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
    name: "Listen Pulse · Monthly",
    description: "Unlimited Reddit & X intent monitoring with noise filtering.",
  },
  zh: {
    name: "社交监听替代品 · 月付",
    description: "无限 Reddit 与 X 高意向监控与噪音过滤。",
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
