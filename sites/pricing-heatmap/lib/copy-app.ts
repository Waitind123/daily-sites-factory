import type { Locale } from "./i18n-shared";

export const sampleReportCopy = {
  en: `Conversion Report: indie-saas.com/pricing
─────────────────────────────────
Score: 64/100  │  Est. conversion: 2.7%
─────────────────────────────────
[DROPOFF] Tier selection — 38% leak
  Fix: Add 'Recommended' badge on middle tier

[HEATMAP] FAQ section — low attention (12%)
  Fix: Move top 3 objections under tiers

[LAYOUT] CTA placement — HIGH
  Fix: Sticky CTA bar after hero

[A/B] Annual pre-selected + 'Save 17%' → +15–22% ARR`,
  zh: `转化报告：indie-saas.com/pricing
─────────────────────────────────
评分：64/100  │  预估转化：2.7%
─────────────────────────────────
[流失] 选档位 — 38% 泄漏
  方案：中间档位加「最受欢迎」角标

[热力] 常见问题区 — 关注度低（12%）
  方案：前 3 个异议移到档位下方

[布局] 行动按钮位置 — 高优先级
  方案：首屏后加固定行动条

[A/B] 默认年付 +「省 17%」→ +15–22% 年化收入`,
};

export const analyzeCopy = {
  en: {
    title: "Pricing Page Conversion Diagnosis",
    subtitle: "Paste your /pricing URL — get heatmap zones, funnel drop-off, layout fixes, and A/B playbook.",
    memberBadge: "✓ Member · unlimited diagnoses",
    freeScans: "Free diagnoses:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free diagnoses. Subscribe for unlimited conversion scans, drop-off reports, and A/B playbooks.",
    paywallCta: "Subscribe · $29/mo",
    formTitle: "Diagnose a pricing page",
    pageUrl: "Pricing page URL",
    pageUrlPlaceholder: "https://yoursite.com/pricing",
    analyzing: "Analyzing conversion…",
    analyzeButton: "Run conversion diagnosis",
    resultTitle: "Diagnosis complete",
    scoreLabel: "Conversion score",
    conversionLabel: "Est. conversion",
    dropoutTitle: "Funnel drop-off",
    heatmapTitle: "Heatmap zones",
    attentionLabel: "Attention",
    dropoutLabel: "Drop-off",
    layoutTitle: "Layout diagnosis",
    copyTitle: "Copy improvements",
    beforeLabel: "Before",
    afterLabel: "After",
    whyLabel: "Why",
    abTitle: "A/B test playbook",
    currentLabel: "Current",
    suggestedLabel: "Suggested",
    severityHigh: "high",
    severityMedium: "medium",
    severityLow: "low",
    historyTitle: "Recent diagnoses",
    exampleTitle: "Example conversion report",
  },
  zh: {
    title: "定价页热力图",
    subtitle: "粘贴 /pricing 链接 — 获取热力图区域、漏斗流失、布局修复与 A/B 测试方案。",
    memberBadge: "✓ 会员 · 诊断不限次数",
    freeScans: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费诊断。订阅后可无限转化扫描、流失报告与 A/B 方案。",
    paywallCta: "订阅 · $29/月",
    formTitle: "诊断定价页",
    pageUrl: "定价页链接",
    pageUrlPlaceholder: "https://你的网站.com/pricing",
    analyzing: "转化分析中…",
    analyzeButton: "开始转化诊断",
    resultTitle: "诊断完成",
    scoreLabel: "转化评分",
    conversionLabel: "预估转化率",
    dropoutTitle: "漏斗流失",
    heatmapTitle: "热力图区域",
    attentionLabel: "关注度",
    dropoutLabel: "流失率",
    layoutTitle: "布局诊断",
    copyTitle: "文案改进",
    beforeLabel: "改前",
    afterLabel: "改后",
    whyLabel: "理由",
    abTitle: "A/B 测试方案",
    currentLabel: "当前",
    suggestedLabel: "建议",
    severityHigh: "高",
    severityMedium: "中",
    severityLow: "低",
    historyTitle: "最近诊断",
    exampleTitle: "示例转化报告",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Indie Pricing Heatmap!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited pricing page conversion diagnoses.",
    order: "Order:",
    openAnalyze: "Open diagnosis tool",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用定价页热力图！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限次诊断定价页转化。",
    order: "订单号：",
    openAnalyze: "打开诊断工具",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    PAGE_URL_REQUIRED: "Pricing page URL is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    ANALYSIS_FAILED: "Failed to run conversion diagnosis",
    ANALYSIS_NOT_FOUND: "Diagnosis not found",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    PAGE_URL_REQUIRED: "请填写定价页链接",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    ANALYSIS_FAILED: "定价页热力图失败",
    ANALYSIS_NOT_FOUND: "诊断记录不存在",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Indie Pricing Heatmap · Monthly",
    description: "Unlimited pricing page conversion diagnoses, heatmap zones & drop-off reports.",
  },
  zh: {
    name: "定价页热力图 · 月付",
    description: "无限定价页热力图、热力图区域与流失报告。",
  },
} as const;

export function getAnalyzeCopy(locale: Locale) {
  return analyzeCopy[locale];
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

export function getSampleReport(locale: Locale) {
  return sampleReportCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
