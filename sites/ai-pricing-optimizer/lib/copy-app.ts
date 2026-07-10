import type { Locale } from "./i18n-shared";

export const sampleReportCopy = {
  en: `AI Report: indie-saas.com/pricing
─────────────────────────────────
Score: 68/100  │  Est. conversion: 2.9%
─────────────────────────────────
[LAYOUT] Pricing tier grid — HIGH
  Issue: No recommended badge — choice paralysis
  Fix:  Highlight middle tier + annual savings

[LAYOUT] CTA placement — MEDIUM
  Issue: Single CTA at page bottom
  Fix:  Sticky CTA bar after hero

[AI COPY] Hero headline
  Before: Simple pricing for everyone
  After:  Turn pricing visitors into paying customers
  Why:    Outcome-first +22% vs feature-first

[AI COPY] Primary CTA
  Before: Get started
  After:  Optimize my pricing page free
  Why:    Action-specific CTA +14–19%

[A/B] Annual pre-selected + 'Save 17%' → +15–22% ARR`,
  zh: `AI 报告：indie-saas.com/pricing
─────────────────────────────────
评分：68/100  │  预估转化：2.9%
─────────────────────────────────
[布局] 定价档位网格 — 高优先级
  问题：无推荐角标 — 选择困难
  方案：中间档位加角标 + 年付节省

[布局] 行动按钮位置 — 中优先级
  问题：页面底部单一按钮
  方案：首屏后加固定行动条

[AI 文案] 首屏标题
  改前：简单透明的定价
  改后：把定价页访客变成付费用户
  理由：结果导向比功能导向 +22%

[AI 文案] 主行动按钮
  改前：立即开始
  改后：免费优化我的定价页
  理由：具体动作按钮 +14–19%

[A/B] 默认年付 +「省 17%」→ +15–22% 年化收入`,
};

export const analyzeCopy = {
  en: {
    title: "AI Pricing Page Optimizer",
    subtitle: "Paste your pricing page URL — get AI copy rewrites, layout diagnosis, and A/B playbook.",
    memberBadge: "✓ Member · unlimited optimizations",
    freeScans: "Free optimizations:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free optimizations. Subscribe for unlimited AI scans, copy rewrites, and layout reports.",
    paywallCta: "Subscribe · $29/mo",
    formTitle: "Optimize a pricing page",
    pageUrl: "Pricing page URL",
    pageUrlPlaceholder: "https://yoursite.com/pricing",
    analyzing: "AI analyzing…",
    analyzeButton: "Run AI optimization",
    resultTitle: "AI optimization complete",
    scoreLabel: "Conversion score",
    conversionLabel: "Est. conversion",
    layoutTitle: "Layout diagnosis",
    copyTitle: "AI copy rewrites",
    beforeLabel: "Before",
    afterLabel: "After",
    whyLabel: "Why",
    abTitle: "A/B test playbook",
    currentLabel: "Current",
    suggestedLabel: "Suggested",
    severityHigh: "high",
    severityMedium: "medium",
    severityLow: "low",
    historyTitle: "Recent optimizations",
    exampleTitle: "Example AI report",
  },
  zh: {
    title: "AI 定价页优化",
    subtitle: "粘贴定价页链接 — 获取 AI 文案改写、布局诊断与 A/B 测试方案。",
    memberBadge: "✓ 会员 · 优化不限次数",
    freeScans: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费优化。订阅后可无限 AI 扫描、文案改写与布局报告。",
    paywallCta: "订阅 · $29/月",
    formTitle: "优化定价页",
    pageUrl: "定价页链接",
    pageUrlPlaceholder: "https://你的网站.com/pricing",
    analyzing: "AI 分析中…",
    analyzeButton: "开始 AI 优化",
    resultTitle: "AI 优化完成",
    scoreLabel: "转化评分",
    conversionLabel: "预估转化率",
    layoutTitle: "布局诊断",
    copyTitle: "AI 文案改写",
    beforeLabel: "改前",
    afterLabel: "改后",
    whyLabel: "理由",
    abTitle: "A/B 测试方案",
    currentLabel: "当前",
    suggestedLabel: "建议",
    severityHigh: "高",
    severityMedium: "中",
    severityLow: "低",
    historyTitle: "最近优化",
    exampleTitle: "示例 AI 报告",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to PricePulse AI!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited AI pricing page optimizations.",
    order: "Order:",
    openAnalyze: "Open optimizer",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 PricePulse AI！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限次 AI 优化定价页。",
    order: "订单号：",
    openAnalyze: "打开优化工具",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    PAGE_URL_REQUIRED: "Pricing page URL is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    ANALYSIS_FAILED: "Failed to run AI optimization",
    ANALYSIS_NOT_FOUND: "Optimization not found",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    PAGE_URL_REQUIRED: "请填写定价页链接",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    ANALYSIS_FAILED: "AI 定价页优化失败",
    ANALYSIS_NOT_FOUND: "优化记录不存在",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "PricePulse AI · Monthly",
    description: "Unlimited AI pricing page optimizations, copy rewrites & layout diagnosis.",
  },
  zh: {
    name: "PricePulse AI · 月付",
    description: "无限 AI 定价页优化、文案改写与布局诊断。",
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
