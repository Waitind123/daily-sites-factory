import type { Locale } from "./i18n-shared";

export const sampleStatsCopy = {
  en: [
    { label: "Pricing headline test", variantA: "Start free today", variantB: "Try 5 days free", rateA: "8.2%", rateB: "11.4%", winner: "B" as const },
    { label: "CTA button test", variantA: "Get started", variantB: "Start now — it's free", rateA: "6.1%", rateB: "7.8%", winner: "B" as const },
    { label: "Hero image test", variantA: "Screenshot A", variantB: "Screenshot B", rateA: "9.5%", rateB: "9.3%", winner: "tie" as const },
  ],
  zh: [
    { label: "定价页标题测试", variantA: "今天免费开始", variantB: "免费试用 5 天", rateA: "8.2%", rateB: "11.4%", winner: "B" as const },
    { label: "按钮文案测试", variantA: "立即开始", variantB: "免费开始 — 无需信用卡", rateA: "6.1%", rateB: "7.8%", winner: "B" as const },
    { label: "首屏图片测试", variantA: "截图 A", variantB: "截图 B", rateA: "9.5%", rateB: "9.3%", winner: "tie" as const },
  ],
};

export const experimentsCopy = {
  en: {
    title: "A/B Experiments",
    subtitle: "Create a test, add the snippet, compare which variant converts better.",
    memberBadge: "✓ Member · unlimited experiments",
    freeExperiments: "Free experiments:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 experiments. Subscribe for unlimited tests, live dashboards, and winner detection.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "New A/B experiment",
    expName: "Experiment name",
    expNamePlaceholder: "e.g. Pricing headline test",
    pageUrl: "Landing page URL",
    pageUrlPlaceholder: "https://yoursite.com/pricing",
    variantA: "Variant A headline",
    variantAPlaceholder: "e.g. Start free today",
    variantB: "Variant B headline",
    variantBPlaceholder: "e.g. Try 5 days free — no card",
    creating: "Creating…",
    createExperiment: "Create experiment",
    createdTitle: "Experiment created!",
    createdHint: "Share this dashboard link and add the snippet to your page:",
    snippetLabel: "Tracking snippet (paste before </body>):",
    openExperiment: "Open dashboard →",
    yourExperiments: "Your experiments",
    exampleTitle: "Example experiment results",
    winnerBadge: "Winner",
    tieBadge: "Tie",
  },
  zh: {
    title: "A/B 实验",
    subtitle: "创建测试、嵌入代码片段，对比哪个变体转化率更高。",
    memberBadge: "✓ 会员 · 实验不限量",
    freeExperiments: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 个实验。订阅后可无限测试、实时看板与自动判定赢家。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "新建 A/B 实验",
    expName: "实验名称",
    expNamePlaceholder: "例如：定价页标题测试",
    pageUrl: "落地页链接",
    pageUrlPlaceholder: "https://你的网站.com/pricing",
    variantA: "变体 A 标题",
    variantAPlaceholder: "例如：今天免费开始",
    variantB: "变体 B 标题",
    variantBPlaceholder: "例如：免费试用 5 天 — 无需信用卡",
    creating: "创建中…",
    createExperiment: "创建实验",
    createdTitle: "实验已创建！",
    createdHint: "分享以下看板链接，并在页面中嵌入追踪代码：",
    snippetLabel: "追踪代码片段（粘贴到 </body> 前）：",
    openExperiment: "打开看板 →",
    yourExperiments: "你的实验",
    exampleTitle: "示例实验结果",
    winnerBadge: "胜出",
    tieBadge: "平局",
  },
} as const;

export const publicExperimentCopy = {
  en: {
    poweredBy: "Powered by Page Split · A/B testing for indie hackers",
    variantA: "Variant A",
    variantB: "Variant B",
    views: "Views",
    conversions: "Conversions",
    rate: "Conv. rate",
    recordView: "Simulate view",
    recordConversion: "Simulate conversion",
    winner: "Statistical winner",
    needMoreData: "Need more traffic for confidence",
    tie: "No clear winner yet",
    pageUrl: "Page:",
  },
  zh: {
    poweredBy: "由 Page Split 提供 · 独立开发者 A/B 测试",
    variantA: "变体 A",
    variantB: "变体 B",
    views: "浏览量",
    conversions: "转化数",
    rate: "转化率",
    recordView: "模拟浏览",
    recordConversion: "模拟转化",
    winner: "统计胜出",
    needMoreData: "需要更多流量才能判定",
    tie: "暂无明确赢家",
    pageUrl: "页面：",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Page Split!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited A/B experiments and conversion tracking.",
    order: "Order:",
    openExperiments: "Open experiments",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Page Split！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建 A/B 实验并追踪转化。",
    order: "订单号：",
    openExperiments: "打开实验看板",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    EXPERIMENT_NAME_REQUIRED: "Experiment name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    EXPERIMENT_CREATE_FAILED: "Failed to create experiment",
    EXPERIMENT_NOT_FOUND: "Experiment not found",
    VARIANT_REQUIRED: "Both variants are required",
    PAGE_URL_REQUIRED: "Page URL is required",
    EVENT_RECORD_FAILED: "Failed to record event",
    INVALID_VARIANT: "Invalid variant",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    EXPERIMENT_NAME_REQUIRED: "请填写实验名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    EXPERIMENT_CREATE_FAILED: "创建实验失败",
    EXPERIMENT_NOT_FOUND: "实验不存在",
    VARIANT_REQUIRED: "请填写两个变体标题",
    PAGE_URL_REQUIRED: "请填写落地页链接",
    EVENT_RECORD_FAILED: "记录事件失败",
    INVALID_VARIANT: "无效的变体",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Page Split · Monthly",
    description: "Unlimited A/B experiments, conversion tracking & winner detection.",
  },
  zh: {
    name: "Page Split · 月付",
    description: "无限 A/B 实验、转化追踪与自动判定赢家。",
  },
} as const;

export function getExperimentsCopy(locale: Locale) {
  return experimentsCopy[locale];
}

export function getPublicExperimentCopy(locale: Locale) {
  return publicExperimentCopy[locale];
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

export function getSampleStats(locale: Locale) {
  return sampleStatsCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}

export function getWinnerLabel(winner: "A" | "B" | "tie" | null, locale: Locale) {
  const t = experimentsCopy[locale];
  if (winner === "A" || winner === "B") return t.winnerBadge;
  if (winner === "tie") return t.tieBadge;
  return publicExperimentCopy[locale].needMoreData;
}
