import type { Locale } from "./i18n-shared";

export const sampleFunnelsCopy = {
  en: [
    { name: "SaaS signup", steps: ["Landing", "Signup", "Email verified", "Activated", "Paid"], counts: [2400, 1680, 840, 672, 336], leak: 2 },
    { name: "Onboarding", steps: ["Welcome", "Profile", "First action", "Invite"], counts: [1200, 960, 480, 192], leak: 2 },
    { name: "Checkout", steps: ["Cart", "Shipping", "Payment", "Confirm"], counts: [800, 720, 540, 486], leak: 2 },
  ],
  zh: [
    { name: "SaaS 注册", steps: ["落地页", "注册", "邮件验证", "激活", "付费"], counts: [2400, 1680, 840, 672, 336], leak: 2 },
    { name: "新手引导", steps: ["欢迎页", "完善资料", "首次操作", "邀请好友"], counts: [1200, 960, 480, 192], leak: 2 },
    { name: "结账流程", steps: ["购物车", "填写地址", "支付", "确认"], counts: [800, 720, 540, 486], leak: 2 },
  ],
};

export const diagnoseCopy = {
  en: {
    title: "AI Funnel Diagnosis",
    subtitle: "Paste your funnel steps and user counts. Get instant AI analysis + fix suggestions.",
    memberBadge: "✓ Member · unlimited diagnoses",
    freeDiagnoses: "Free diagnoses:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free AI diagnoses. Subscribe for unlimited diagnoses, prioritized fix plans, and export.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "New diagnosis",
    funnelName: "Funnel name",
    funnelNamePlaceholder: "e.g. SaaS signup flow",
    steps: "Step names (comma-separated)",
    stepsPlaceholder: "e.g. Landing, Signup, Email verified, Activated, Paid",
    counts: "User counts per step (comma-separated)",
    countsPlaceholder: "e.g. 2400, 1680, 840, 672, 336",
    analyzing: "Analyzing…",
    runDiagnosis: "Run AI diagnosis",
    resultTitle: "AI diagnosis complete",
    aiSummary: "AI summary",
    fixPlan: "Prioritized fix plan",
    priorityHigh: "HIGH",
    priorityMedium: "MED",
    priorityLow: "LOW",
    estimatedUplift: "Est. uplift",
    exampleTitle: "Try an example",
    loadExample: "Load example",
    stepBreakdown: "Step breakdown",
    leakBadge: "Biggest leak",
    users: "users",
    dropOff: "drop-off",
    overallConv: "Overall conversion",
    convRate: "Conv. rate",
  },
  zh: {
    title: "AI 漏斗诊断",
    subtitle: "粘贴漏斗步骤和用户数量，获得即时 AI 分析 + 修复建议。",
    memberBadge: "✓ 会员 · 诊断不限量",
    freeDiagnoses: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费 AI 诊断。订阅后可无限诊断、优先级修复方案和导出。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "新建诊断",
    funnelName: "漏斗名称",
    funnelNamePlaceholder: "例如：SaaS 注册流程",
    steps: "步骤名称（逗号分隔）",
    stepsPlaceholder: "例如：落地页, 注册, 邮件验证, 激活, 付费",
    counts: "每步用户数（逗号分隔）",
    countsPlaceholder: "例如：2400, 1680, 840, 672, 336",
    analyzing: "分析中…",
    runDiagnosis: "运行 AI 诊断",
    resultTitle: "AI 诊断完成",
    aiSummary: "AI 摘要",
    fixPlan: "优先级修复方案",
    priorityHigh: "高",
    priorityMedium: "中",
    priorityLow: "低",
    estimatedUplift: "预估提升",
    exampleTitle: "试试示例",
    loadExample: "加载示例",
    stepBreakdown: "步骤拆解",
    leakBadge: "最大漏洞",
    users: "用户",
    dropOff: "流失",
    overallConv: "总转化率",
    convRate: "转化率",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to AI Funnel Diagnosis!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited AI funnel diagnoses and fix plans.",
    order: "Order:",
    openDiagnose: "Open diagnosis",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 AI 漏斗诊断！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限次 AI 漏斗诊断和修复方案。",
    order: "订单号：",
    openDiagnose: "打开诊断",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    FUNNEL_NAME_REQUIRED: "Funnel name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    DIAGNOSIS_FAILED: "Diagnosis failed. Please try again.",
    STEPS_REQUIRED: "At least 2 steps are required",
    COUNTS_MISMATCH: "User counts must match the number of steps",
    COUNTS_INVALID: "User counts must be positive numbers",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    FUNNEL_NAME_REQUIRED: "请填写漏斗名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    DIAGNOSIS_FAILED: "诊断失败，请重试",
    STEPS_REQUIRED: "至少需要 2 个步骤",
    COUNTS_MISMATCH: "用户数量必须与步骤数一致",
    COUNTS_INVALID: "用户数量必须为正整数",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "AI Funnel Diagnosis · Monthly",
    description: "Unlimited AI funnel diagnoses, fix plans & drop-off analysis.",
  },
  zh: {
    name: "AI 漏斗诊断 · 月付",
    description: "无限 AI 漏斗诊断、修复方案与流失分析。",
  },
} as const;

export function getDiagnoseCopy(locale: Locale) {
  return diagnoseCopy[locale];
}

export function getSampleFunnels(locale: Locale) {
  return sampleFunnelsCopy[locale];
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
