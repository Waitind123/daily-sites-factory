import type { Locale } from "./i18n-shared";

export const generateCopy = {
  en: {
    title: "GDPR compliance scan",
    subtitle: "Answer a few questions about your SaaS stack — get a scored checklist and privacy policy draft.",
    productName: "Product name",
    productNamePlaceholder: "My Indie SaaS",
    websiteUrl: "Website URL (optional)",
    websiteUrlPlaceholder: "https://myapp.com",
    processors: "Sub-processors you use",
    processorLabels: {
      stripe: "Stripe",
      "google-analytics": "Google Analytics",
      posthog: "PostHog",
      supabase: "Supabase",
      vercel: "Vercel",
      mailchimp: "Mailchimp",
      intercom: "Intercom",
    },
    euUsers: "Targets EU/UK users",
    collectsEmail: "Collects email addresses",
    collectsPayment: "Processes payments",
    usesAnalytics: "Uses analytics",
    usesCookies: "Uses cookies",
    hasPrivacyPolicy: "Has published privacy policy",
    hasCookieBanner: "Has cookie consent banner",
    hasDpa: "Signed DPAs with processors",
    scan: "Run GDPR scan",
    scanning: "Scanning…",
    resultTitle: "Compliance report",
    fixLabel: "Fix",
    policyTitle: "Privacy policy draft",
    copyPolicy: "Copy policy draft",
    copied: "Copied!",
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free scans left`,
    subscribeNow: "Subscribe now",
    subscribeCta: "Subscribe · $9.9/mo →",
    memberBadge: "✓ Member active · unlimited scans",
  },
  zh: {
    title: "GDPR 合规自检",
    subtitle: "回答几个关于 SaaS 技术栈的问题 — 获取评分清单与隐私政策草稿。",
    productName: "产品名称",
    productNamePlaceholder: "我的独立 SaaS",
    websiteUrl: "网站 URL（可选）",
    websiteUrlPlaceholder: "https://myapp.com",
    processors: "使用的子处理器",
    processorLabels: {
      stripe: "Stripe",
      "google-analytics": "Google Analytics",
      posthog: "PostHog",
      supabase: "Supabase",
      vercel: "Vercel",
      mailchimp: "Mailchimp",
      intercom: "Intercom",
    },
    euUsers: "面向欧盟/英国用户",
    collectsEmail: "收集邮箱地址",
    collectsPayment: "处理支付",
    usesAnalytics: "使用分析工具",
    usesCookies: "使用 Cookie",
    hasPrivacyPolicy: "已发布隐私政策",
    hasCookieBanner: "有 Cookie 同意横幅",
    hasDpa: "已与处理器签署 DPA",
    scan: "运行 GDPR 自检",
    scanning: "扫描中…",
    resultTitle: "合规报告",
    fixLabel: "修复",
    policyTitle: "隐私政策草稿",
    copyPolicy: "复制政策草稿",
    copied: "已复制！",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    subscribeNow: "立即订阅",
    subscribeCta: "订阅 $9.9/月 →",
    memberBadge: "✓ 会员已激活 · 无限扫描",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to GDPR Pulse!",
    demoPaid: "Demo payment successful.",
    paidBody: "Payment successful — unlimited GDPR scans and policy exports are now active.",
    order: "Order:",
    openGenerate: "Start scanning",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 GDPR 合规自检！",
    demoPaid: "演示支付成功。",
    paidBody: "支付成功，你已是月度会员，可无限扫描并导出政策。",
    order: "订单号：",
    openGenerate: "开始扫描",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    GENERIC: "Something went wrong. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    MISSING_PRODUCT: "Product name is required.",
  },
  zh: {
    GENERIC: "出错了，请稍后再试",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅",
    MISSING_PRODUCT: "请填写产品名称",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "GDPR Pulse · Monthly",
    description: "Unlimited GDPR scans, privacy policy drafts, and compliance checklists.",
  },
  zh: {
    name: "GDPR 合规自检 · 月付",
    description: "无限 GDPR 扫描、隐私政策草稿与合规清单。",
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
  return tip;
}
