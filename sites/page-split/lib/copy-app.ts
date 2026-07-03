import type { Locale } from "./i18n-shared";

export const sampleStatsCopy = {
  en: [
    {
      label: "Hero headline — pricing page",
      variantA: "Start free trial",
      rateA: "8.1%",
      variantB: "Try 5 days free — no card",
      rateB: "12.4%",
      winner: "B" as const,
    },
    {
      label: "CTA button — landing page",
      variantA: "Get started",
      rateA: "5.2%",
      variantB: "Start testing free",
      rateB: "7.8%",
      winner: "B" as const,
    },
    {
      label: "Social proof placement",
      variantA: "Below fold",
      rateA: "6.0%",
      variantB: "Above fold",
      rateB: "6.1%",
      winner: "tie" as const,
    },
  ],
  zh: [
    {
      label: "定价页首屏标题",
      variantA: "免费试用",
      rateA: "8.1%",
      variantB: "免费试用 5 天 — 无需信用卡",
      rateB: "12.4%",
      winner: "B" as const,
    },
    {
      label: "落地页主按钮",
      variantA: "立即开始",
      rateA: "5.2%",
      variantB: "免费开始测试",
      rateB: "7.8%",
      winner: "B" as const,
    },
    {
      label: "社会证明位置",
      variantA: "首屏下方",
      rateA: "6.0%",
      variantB: "首屏上方",
      rateB: "6.1%",
      winner: "tie" as const,
    },
  ],
};

export const experimentsCopy = {
  en: {
    title: "A/B Experiments",
    subtitle: "Create experiments, split traffic 50/50, and track which variant converts better.",
    memberBadge: "✓ Member · unlimited experiments",
    freeExperiments: "Free experiments:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 experiments. Subscribe for unlimited tests, live dashboards, and auto winner detection.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "New A/B experiment",
    expName: "Experiment name",
    expNamePlaceholder: "e.g. Hero headline test",
    pageUrl: "Landing page URL",
    pageUrlPlaceholder: "https://yoursite.com/pricing",
    variantA: "Variant A headline",
    variantAPlaceholder: "Start free trial",
    variantB: "Variant B headline",
    variantBPlaceholder: "Try 5 days free — no card",
    creating: "Creating…",
    createExperiment: "Create experiment",
    createdTitle: "Experiment created!",
    createdHint: "Share this public dashboard link:",
    snippetLabel: "Tracking snippet (paste before </body>):",
    openExperiment: "Open dashboard →",
    yourExperiments: "Your experiments",
    exampleTitle: "Example conversion results",
  },
  zh: {
    title: "A/B 实验",
    subtitle: "创建实验、50/50 分流，追踪哪个变体转化更好。",
    memberBadge: "✓ 会员 · 实验不限量",
    freeExperiments: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 个实验。订阅后可无限测试、实时看板与自动判定赢家。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "新建 A/B 实验",
    expName: "实验名称",
    expNamePlaceholder: "例如：首屏标题测试",
    pageUrl: "落地页链接",
    pageUrlPlaceholder: "https://你的网站.com/pricing",
    variantA: "变体 A 标题",
    variantAPlaceholder: "免费试用",
    variantB: "变体 B 标题",
    variantBPlaceholder: "免费试用 5 天 — 无需信用卡",
    creating: "创建中…",
    createExperiment: "创建实验",
    createdTitle: "实验已创建！",
    createdHint: "分享以下公开看板链接：",
    snippetLabel: "追踪代码片段（贴在 </body> 前）：",
    openExperiment: "打开看板 →",
    yourExperiments: "你的实验",
    exampleTitle: "示例转化结果",
  },
} as const;

export const publicExperimentCopy = {
  en: {
    pageUrl: "Page:",
    poweredBy: "Powered by Page Split · A/B testing for indie hackers",
    variantA: "Variant A",
    variantB: "Variant B",
    views: "Views",
    conversions: "Conversions",
    rate: "Rate",
    needMoreData: "Need more data before declaring a winner (min 100 conversions per variant).",
    tie: "Variants are tied — keep testing or try bolder copy.",
    recordView: "Record view",
    recordConversion: "Record conversion",
  },
  zh: {
    pageUrl: "页面：",
    poweredBy: "由 Page Split 提供 · 独立开发者 A/B 测试",
    variantA: "变体 A",
    variantB: "变体 B",
    views: "浏览",
    conversions: "转化",
    rate: "转化率",
    needMoreData: "数据不足，暂无法判定赢家（每变体至少 100 次转化）。",
    tie: "两版持平 — 继续测试或尝试更激进的文案。",
    recordView: "记录浏览",
    recordConversion: "记录转化",
  },
} as const;

export const winnerLabels = {
  en: { A: "Winner", B: "Winner" },
  zh: { A: "赢家", B: "赢家" },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Page Split!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited experiments, pageviews, and conversion tracking.",
    order: "Order:",
    openExperiments: "Open experiments",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Page Split！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建实验、追踪页面浏览与转化。",
    order: "订单号：",
    openExperiments: "打开实验看板",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    EXPERIMENT_NAME_REQUIRED: "Experiment name is required",
    PAGE_URL_REQUIRED: "Landing page URL is required",
    VARIANT_REQUIRED: "Both variant headlines are required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    EXPERIMENT_CREATE_FAILED: "Failed to create experiment",
    EXPERIMENT_NOT_FOUND: "Experiment not found",
    EVENT_RECORD_FAILED: "Failed to record event",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    EXPERIMENT_NAME_REQUIRED: "请填写实验名称",
    PAGE_URL_REQUIRED: "请填写落地页链接",
    VARIANT_REQUIRED: "请填写两个变体标题",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    EXPERIMENT_CREATE_FAILED: "创建实验失败",
    EXPERIMENT_NOT_FOUND: "实验不存在",
    EVENT_RECORD_FAILED: "记录事件失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Page Split · Monthly",
    description: "Unlimited A/B experiments, pageviews & conversion tracking.",
    annualName: "Page Split · Annual",
    annualDescription: "Unlimited experiments for 12 months. Save vs monthly billing.",
  },
  zh: {
    name: "Page Split · 月付",
    description: "A/B 实验、页面浏览与转化追踪不限量。",
    annualName: "Page Split · 年付",
    annualDescription: "12 个月实验不限量，比月付更省。",
  },
} as const;

export function getExperimentsCopy(locale: Locale) {
  return experimentsCopy[locale];
}

export function getSampleStats(locale: Locale) {
  return sampleStatsCopy[locale];
}

export function getPublicExperimentCopy(locale: Locale) {
  return publicExperimentCopy[locale];
}

export function getWinnerLabel(variant: "A" | "B", locale: Locale) {
  return winnerLabels[locale][variant];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  if (code && code in apiErrorCopy[locale]) {
    return apiErrorCopy[locale][code as ApiErrorCode];
  }
  return apiErrorCopy[locale].GENERIC;
}
