import type { Locale } from "./i18n-shared";

export const generateCopy = {
  en: {
    title: "Generate alt text",
    subtitle: "Pick image type, describe the content, get WCAG-compliant alt text instantly.",
    imageType: "Image type",
    types: {
      photo: "Photo",
      chart: "Chart",
      icon: "Icon",
      logo: "Logo",
      decorative: "Decorative",
    },
    subject: "Subject / description",
    subjectPlaceholder: "Three designers reviewing wireframes on a laptop",
    context: "Page context (optional)",
    contextPlaceholder: "Product team sprint planning section",
    action: "Action (for icons)",
    actionPlaceholder: "Open site search",
    generate: "Generate alt text",
    generating: "Generating…",
    resultTitle: "Generated alt text",
    score: (n: number) => `Score ${n}/100`,
    decorativeResult: 'alt="" (decorative — screen readers skip)',
    chars: (n: number) => `${n} characters`,
    wcag: "WCAG 2.2 AA",
    tips: "Improvement tips",
    copy: "Copy alt text",
    copied: "Copied!",
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free generations left`,
    subscribeNow: "Subscribe now",
    subscribeCta: "Subscribe · $29/mo →",
    memberBadge: "✓ Member active · unlimited generations",
  },
  zh: {
    title: "生成 alt 文本",
    subtitle: "选择图片类型、描述内容，即时获得 WCAG 合规 alt 文本。",
    imageType: "图片类型",
    types: {
      photo: "照片",
      chart: "图表",
      icon: "图标",
      logo: "Logo",
      decorative: "装饰图",
    },
    subject: "主体 / 描述",
    subjectPlaceholder: "三位设计师在笔记本电脑上审阅线框图",
    context: "页面语境（可选）",
    contextPlaceholder: "产品团队冲刺规划区块",
    action: "动作（图标用）",
    actionPlaceholder: "打开站内搜索",
    generate: "生成 alt 文本",
    generating: "生成中…",
    resultTitle: "生成的 alt 文本",
    score: (n: number) => `评分 ${n}/100`,
    decorativeResult: 'alt=""（装饰图 — 屏幕阅读器跳过）',
    chars: (n: number) => `${n} 字符`,
    wcag: "WCAG 2.2 AA",
    tips: "改进建议",
    copy: "复制 alt 文本",
    copied: "已复制！",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    subscribeNow: "立即订阅",
    subscribeCta: "订阅 $29/月 →",
    memberBadge: "✓ 会员已激活 · 无限生成",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to AltText Pro!",
    demoPaid: "Demo payment successful.",
    paidBody: "Payment successful — unlimited alt-text generations and CSV export are now active.",
    order: "Order:",
    openGenerate: "Start generating",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用无障碍 Alt 文本！",
    demoPaid: "演示支付成功。",
    paidBody: "支付成功，你已是月度会员，可无限生成 alt 文本并导出 CSV。",
    order: "订单号：",
    openGenerate: "开始生成",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    GENERIC: "Something went wrong. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    MISSING_SUBJECT: "Subject description is required.",
  },
  zh: {
    GENERIC: "出错了，请稍后再试",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅。",
    MISSING_SUBJECT: "请填写主体描述。",
  },
} as const;

/** Map engine tip strings (en) to localized text */
export const tipTranslations: Record<Locale, Record<string, string>> = {
  en: {},
  zh: {
    'Decorative images should use alt="" per WCAG 1.1.1':
      "装饰图应使用 alt=\"\"，符合 WCAG 1.1.1",
    "Describe the subject and key action, not camera metadata":
      "描述主体和关键动作，不要写相机参数",
    "Include chart type and the main takeaway for screen readers":
      "包含图表类型和屏幕阅读器用户需要的关键结论",
    "Icons used as buttons need action-oriented alt text":
      "作为按钮的图标需要描述动作的 alt 文本",
    "Logo alt text should be the organization name only":
      "Logo 的 alt 文本应仅为组织名称",
    "Keep alt text under 125 characters when possible":
      "尽量将 alt 文本控制在 125 字符以内",
  },
};

export const stripeProductCopy = {
  en: {
    name: "AltText Pro · Monthly",
    description: "Unlimited WCAG alt-text generations, compliance scoring, and CSV export.",
  },
  zh: {
    name: "无障碍 Alt 文本 · 月付",
    description: "无限 alt 文本生成、合规评分与 CSV 导出。",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}

export function getGenerateCopy(locale: Locale) {
  return generateCopy[locale];
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

export function translateTip(tip: string, locale: Locale): string {
  return tipTranslations[locale][tip] ?? tip;
}
