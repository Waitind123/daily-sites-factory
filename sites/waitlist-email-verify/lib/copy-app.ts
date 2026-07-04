import type { Locale } from "./i18n-shared";

export const listsCopy = {
  en: {
    title: "Waitlist Verify",
    subtitle: "Create a waitlist with email validation, then AI-score conversion readiness before launch.",
    memberBadge: "✓ Member · unlimited waitlists & email audits",
    freeLists: "Free email audits:",
    paywallTitle: "Free trial used up",
    paywallBody: "You've used 5 email audits. Subscribe for unlimited lists, validation, and conversion reports.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "New product waitlist",
    listName: "Product name",
    listNamePlaceholder: "e.g. My SaaS Launch",
    description: "Tagline",
    descriptionPlaceholder: "What are you building? (optional)",
    creating: "Creating…",
    createList: "Create waitlist",
    createdTitle: "Waitlist created!",
    createdHint: "Share this public signup page:",
    openList: "Open signup page →",
    yourLists: "Your waitlists",
    exampleTitle: "Example signup page preview",
    signups: "signups",
    analyzeBtn: "Email audit",
    analyzing: "Auditing…",
    healthScore: "Conversion score",
    grade: "Grade",
    recommendations: "Recommendations",
    qualityBreakdown: "Quality breakdown",
    noSignups: "No signups yet — share your link to collect emails first",
  },
  zh: {
    title: "等候名单邮件验证",
    subtitle: "创建带邮箱验证的等候名单，上线前用 AI 评估转化就绪度。",
    memberBadge: "✓ 会员 · 等候名单与邮箱审计不限量",
    freeLists: "免费邮箱审计：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次邮箱审计。订阅后可无限验证、转化报告。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "新建产品等候名单",
    listName: "产品名称",
    listNamePlaceholder: "例如：我的 SaaS 上线",
    description: "一句话介绍",
    descriptionPlaceholder: "你在做什么？（可选）",
    creating: "创建中…",
    createList: "创建等候名单",
    createdTitle: "等候名单已创建！",
    createdHint: "分享以下公开报名页：",
    openList: "打开报名页 →",
    yourLists: "你的等候名单",
    exampleTitle: "报名页预览示例",
    signups: "人已报名",
    analyzeBtn: "邮箱审计",
    analyzing: "审计中…",
    healthScore: "转化分",
    grade: "等级",
    recommendations: "建议",
    qualityBreakdown: "质量分布",
    noSignups: "暂无报名 — 先分享链接收集邮箱",
  },
} as const;

export const publicWaitlistCopy = {
  en: {
    poweredBy: "Powered by Waitlist Verify · email-validated signups",
    joinTitle: "Join the waitlist",
    emailPlaceholder: "you@email.com",
    submitting: "Verifying…",
    joinCta: "Join waitlist",
    joined: "You're on the list! Share your referral link to move up.",
    position: "Your position",
    totalSignups: "people on the waitlist",
    referralHint: "Share to move up:",
    empty: "Be the first to join!",
    alreadyJoined: "You're already on this waitlist.",
    aiScore: "Your email grade",
    typoHint: "Did you mean",
    typoFix: "Use suggested email",
    invalidEmail: "Invalid or disposable email",
  },
  zh: {
    poweredBy: "由等候名单邮件验证提供 · 邮箱已验证报名",
    joinTitle: "加入等候名单",
    emailPlaceholder: "you@email.com",
    submitting: "验证中…",
    joinCta: "加入等候名单",
    joined: "报名成功！分享推荐链接可提升排队位置。",
    position: "你的排位",
    totalSignups: "人已报名",
    referralHint: "分享可提升排位：",
    empty: "来做第一个报名的人吧！",
    alreadyJoined: "你已在此等候名单中。",
    aiScore: "你的邮箱等级",
    typoHint: "你是否想输入",
    typoFix: "使用建议邮箱",
    invalidEmail: "无效或一次性邮箱",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Waitlist Verify!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited waitlists, email validation, and AI conversion audits.",
    order: "Order:",
    openLists: "Open waitlists",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用等候名单邮件验证！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建等候名单、邮箱验证与 AI 转化审计。",
    order: "订单号：",
    openLists: "打开等候名单",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    LIST_NAME_REQUIRED: "Product name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    LIST_CREATE_FAILED: "Failed to create waitlist",
    LIST_NOT_FOUND: "Waitlist not found",
    EMAIL_REQUIRED: "Email is required",
    SIGNUP_FAILED: "Failed to join waitlist",
    INVALID_EMAIL: "Invalid or disposable email address",
    ANALYZE_FAILED: "Email audit failed. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    LIST_NAME_REQUIRED: "请填写产品名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    LIST_CREATE_FAILED: "创建等候名单失败",
    LIST_NOT_FOUND: "等候名单不存在",
    EMAIL_REQUIRED: "请填写邮箱",
    SIGNUP_FAILED: "报名失败",
    INVALID_EMAIL: "无效或一次性邮箱地址",
    ANALYZE_FAILED: "邮箱审计失败，请稍后重试",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Waitlist Verify · Monthly",
    description: "Unlimited waitlists, email validation & AI conversion audits.",
  },
  zh: {
    name: "等候名单邮件验证 · 月付",
    description: "无限等候名单、邮箱验证与 AI 转化审计。",
  },
} as const;

export function getListsCopy(locale: Locale) {
  return listsCopy[locale];
}

export function getPublicWaitlistCopy(locale: Locale) {
  return publicWaitlistCopy[locale];
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
