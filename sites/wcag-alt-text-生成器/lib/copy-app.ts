import type { Locale } from "./i18n-shared";

export const generateCopy = {
  en: {
    title: "Generate WCAG alt text",
    subtitle: "Describe the image — get ADA-compliant alt text in seconds",
    imageType: "Image type",
    types: {
      photo: "Photo / illustration",
      chart: "Chart / graph",
      icon: "Icon / button",
      logo: "Logo",
      decorative: "Decorative (empty alt)",
    },
    subject: "Subject / content",
    subjectPlaceholder: "e.g. Three designers reviewing wireframes on a laptop",
    context: "Context (optional)",
    contextPlaceholder: "e.g. Product team sprint planning meeting",
    action: "Action (for icons)",
    actionPlaceholder: "e.g. Open site search",
    decorative: "Mark as decorative (alt=\"\")",
    generate: "Generate alt text",
    generating: "Generating…",
    resultTitle: "Generated alt text",
    score: (n: number) => `Compliance score: ${n}/100`,
    chars: (n: number) => `${n} characters`,
    wcag: "WCAG 2.2 AA",
    decorativeResult: "Use alt=\"\" — this image is decorative",
    copy: "Copy to clipboard",
    copied: "Copied!",
    tips: "Improvement tips",
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free generations left`,
    subscribeCta: "Subscribe · $9.9/mo →",
    memberBadge: "✓ Member active · unlimited generations",
    subscribeNow: "Subscribe now",
    batchTitle: "Batch mode (CSV)",
    batchHint: "Paste one image description per line — members get unlimited batch",
    batchPlaceholder: "Team photo reviewing wireframes\nRevenue chart Q2 growth\nSearch icon button",
  },
  zh: {
    title: "生成 WCAG alt 文本",
    subtitle: "描述图片内容 — 秒级获取 ADA 合规 alt 文本",
    imageType: "图片类型",
    types: {
      photo: "照片 / 插图",
      chart: "图表 / 曲线",
      icon: "图标 / 按钮",
      logo: "Logo",
      decorative: "装饰性（空 alt）",
    },
    subject: "主体 / 内容",
    subjectPlaceholder: "例如：三位设计师在笔记本前评审线框图",
    context: "上下文（可选）",
    contextPlaceholder: "例如：产品团队冲刺规划会议",
    action: "动作（图标用）",
    actionPlaceholder: "例如：打开站点搜索",
    decorative: "标记为装饰性（alt=\"\"）",
    generate: "生成 alt 文本",
    generating: "生成中…",
    resultTitle: "生成的 alt 文本",
    score: (n: number) => `合规评分：${n}/100`,
    chars: (n: number) => `${n} 字符`,
    wcag: "WCAG 2.2 AA",
    decorativeResult: "使用 alt=\"\" — 此图为装饰性",
    copy: "复制到剪贴板",
    copied: "已复制！",
    tips: "改进建议",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    subscribeCta: "订阅 $9.9/月 →",
    memberBadge: "✓ 会员已激活 · 无限生成",
    subscribeNow: "立即订阅",
    batchTitle: "批量模式（CSV）",
    batchHint: "每行一条图片描述 — 会员可无限批量",
    batchPlaceholder: "团队评审线框图照片\nQ2 收入增长图表\n搜索图标按钮",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to AltText Pro!",
    demoPaid: "Demo payment successful.",
    paidBody: "Payment successful — unlimited alt-text generations and batch export are now active.",
    order: "Order:",
    openGenerate: "Start generating",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入无障碍 Alt 文本！",
    demoPaid: "演示支付成功。",
    paidBody: "支付成功，你已是月度会员，可无限生成 alt 文本与批量导出。",
    order: "订单号：",
    openGenerate: "开始生成",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "AltText Pro · Monthly",
    description: "Unlimited WCAG alt-text generation, batch CSV, compliance scoring & export.",
  },
  zh: {
    name: "无障碍 Alt 文本 · 月付",
    description: "无限 WCAG alt 文本生成、CSV 批量、合规评分与导出。",
  },
} as const;

export const apiErrors = {
  en: {
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    MISSING_SUBJECT: "Please describe the image subject.",
    GENERATION_FAILED: "Generation failed. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again.",
    FEEDBACK_FAILED: "Failed to submit feedback.",
    FEEDBACK_EMPTY: "Message cannot be empty.",
  },
  zh: {
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅。",
    MISSING_SUBJECT: "请描述图片主体内容。",
    GENERATION_FAILED: "生成失败，请重试。",
    CHECKOUT_FAILED: "结账失败，请重试。",
    FEEDBACK_FAILED: "留言提交失败。",
    FEEDBACK_EMPTY: "留言不能为空。",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrors.en;

export function getGenerateCopy(locale: Locale) {
  return generateCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  const errors = apiErrors[locale];
  if (code && code in errors) {
    return errors[code as ApiErrorCode];
  }
  return errors.GENERATION_FAILED;
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
