import type { Locale } from "./i18n-shared";

export const sampleReportCopy = {
  en: `Audit: indie-saas.com/pricing
─────────────────────────────────
Score: 64/100  │  Est. conversion: 2.4%
─────────────────────────────────
Hero headline      ████████████░░  76%  low risk
Pricing tiers      █████░░░░░░░░░  48%  HIGH drop-off
Feature compare    ████████░░░░░░  62%  medium risk
FAQ section        ██████░░░░░░░░  51%  medium risk
CTA button         ██████████░░░░  74%  low risk
Social proof       ████░░░░░░░░░░  38%  HIGH drop-off
─────────────────────────────────
Drop-off #1: Hero → pricing scroll (38%)
  → Add sticky CTA linking to pricing section

Drop-off #2: Tier selection (52%)
  → Highlight recommended plan + annual savings badge

A/B #1: "Get started" → "Start free — no card" (+12–18%)
A/B #2: "$9.9/mo" → "$99/yr (save 17%)" (+8–14%)`,
  zh: `诊断：indie-saas.com/pricing
─────────────────────────────────
评分：64/100  │  预估转化：2.4%
─────────────────────────────────
首屏标题      ████████████░░  76%  低风险
定价档位      █████░░░░░░░░░  48%  高流失
功能对比      ████████░░░░░░  62%  中风险
常见问题      ██████░░░░░░░░  51%  中风险
行动按钮      ██████████░░░░  74%  低风险
社会证明      ████░░░░░░░░░░  38%  高流失
─────────────────────────────────
流失 #1：首屏 → 定价区滚动（38%）
  → 添加固定行动按钮锚点到定价区

流失 #2：选择定价档位（52%）
  → 推荐方案加角标 + 年付节省金额

A/B #1：「立即开始」→「免费开始 — 无需信用卡」（+12–18%）
A/B #2：「$9.9/月」→「$99/年（省 17%）」（+8–14%）`,
};

export const analyzeCopy = {
  en: {
    title: "Pricing Page Audit",
    subtitle: "Paste your pricing page URL — get heatmap zones, drop-off analysis, and A/B suggestions.",
    memberBadge: "✓ Member · unlimited audits",
    freeScans: "Free audits:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free audits. Subscribe for unlimited scans, heatmap reports, and A/B test ideas.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "Audit a pricing page",
    pageUrl: "Pricing page URL",
    pageUrlPlaceholder: "https://yoursite.com/pricing",
    analyzing: "Analyzing…",
    analyzeButton: "Run audit",
    resultTitle: "Audit complete",
    scoreLabel: "Conversion score",
    conversionLabel: "Est. conversion",
    heatmapTitle: "Attention heatmap",
    dropOffTitle: "Drop-off points",
    abTitle: "A/B test suggestions",
    currentLabel: "Current",
    suggestedLabel: "Suggested",
    riskHigh: "high risk",
    riskMedium: "medium",
    riskLow: "low risk",
    historyTitle: "Recent audits",
    exampleTitle: "Example audit report",
  },
  zh: {
    title: "定价页诊断",
    subtitle: "粘贴定价页链接 — 获取热力图分区、流失分析与 A/B 测试建议。",
    memberBadge: "✓ 会员 · 诊断不限次数",
    freeScans: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费诊断。订阅后可无限扫描、热力图报告与 A/B 测试建议。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "诊断定价页",
    pageUrl: "定价页链接",
    pageUrlPlaceholder: "https://你的网站.com/pricing",
    analyzing: "分析中…",
    analyzeButton: "开始诊断",
    resultTitle: "诊断完成",
    scoreLabel: "转化评分",
    conversionLabel: "预估转化率",
    heatmapTitle: "注意力热力图",
    dropOffTitle: "流失节点",
    abTitle: "A/B 测试建议",
    currentLabel: "当前",
    suggestedLabel: "建议",
    riskHigh: "高风险",
    riskMedium: "中风险",
    riskLow: "低风险",
    historyTitle: "最近诊断",
    exampleTitle: "示例诊断报告",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to PriceLens!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited pricing page audits and conversion reports.",
    order: "Order:",
    openAnalyze: "Open audit tool",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 PriceLens！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限次诊断定价页并获取转化报告。",
    order: "订单号：",
    openAnalyze: "打开诊断工具",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    PAGE_URL_REQUIRED: "Pricing page URL is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    ANALYSIS_FAILED: "Failed to analyze pricing page",
    ANALYSIS_NOT_FOUND: "Audit not found",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    PAGE_URL_REQUIRED: "请填写定价页链接",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    ANALYSIS_FAILED: "定价页诊断失败",
    ANALYSIS_NOT_FOUND: "诊断记录不存在",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "PriceLens · Monthly",
    description: "Unlimited pricing page audits, heatmap zones & A/B suggestions.",
  },
  zh: {
    name: "PriceLens · 月付",
    description: "无限定价页诊断、热力图分区与 A/B 测试建议。",
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
