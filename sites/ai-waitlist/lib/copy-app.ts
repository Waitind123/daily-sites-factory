import type { Locale } from "./i18n-shared";

export const listsCopy = {
  en: {
    title: "AI Waitlists",
    subtitle: "Create a waitlist, collect signups, then AI-score lead quality before launch.",
    memberBadge: "✓ Member · unlimited waitlists & AI analyses",
    freeLists: "Free AI analyses:",
    paywallTitle: "Free trial used up",
    paywallBody: "You've used 5 AI analyses. Subscribe for unlimited lists, lead scoring, and health reports.",
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
    analyzeBtn: "AI analyze",
    analyzing: "Analyzing…",
    healthScore: "Health score",
    grade: "Grade",
    recommendations: "Recommendations",
    qualityBreakdown: "Quality breakdown",
    noSignups: "No signups yet — share your link to collect emails first",
  },
  zh: {
    title: "AI 等候名单",
    subtitle: "创建等候名单、收集报名，上线前用 AI 评估线索质量。",
    memberBadge: "✓ 会员 · 等候名单与 AI 分析不限量",
    freeLists: "免费 AI 分析：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次 AI 分析。订阅后可无限分析、线索评分与健康报告。",
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
    analyzeBtn: "AI 分析",
    analyzing: "分析中…",
    healthScore: "健康分",
    grade: "等级",
    recommendations: "建议",
    qualityBreakdown: "质量分布",
    noSignups: "暂无报名 — 先分享链接收集邮箱",
  },
} as const;

export const publicWaitlistCopy = {
  en: {
    poweredBy: "Powered by AI Waitlist · AI-validated signups",
    joinTitle: "Join the waitlist",
    emailPlaceholder: "you@email.com",
    submitting: "Joining…",
    joinCta: "Join waitlist",
    joined: "You're on the list! Share your referral link to move up.",
    position: "Your position",
    totalSignups: "people on the waitlist",
    referralHint: "Share to move up:",
    empty: "Be the first to join!",
    alreadyJoined: "You're already on this waitlist.",
    aiScore: "Your lead grade",
  },
  zh: {
    poweredBy: "由 AI 等候名单验证提供 · AI 验证报名",
    joinTitle: "加入等候名单",
    emailPlaceholder: "you@email.com",
    submitting: "提交中…",
    joinCta: "加入等候名单",
    joined: "报名成功！分享推荐链接可提升排队位置。",
    position: "你的排位",
    totalSignups: "人已报名",
    referralHint: "分享可提升排位：",
    empty: "来做第一个报名的人吧！",
    alreadyJoined: "你已在此等候名单中。",
    aiScore: "你的线索等级",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to AI Waitlist!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited waitlists, AI analyses, and email export.",
    order: "Order:",
    openLists: "Open waitlists",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 AI 等候名单验证！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建等候名单、AI 分析与邮箱导出。",
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
    ANALYZE_FAILED: "AI analysis failed. Please try again.",
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
    ANALYZE_FAILED: "AI 分析失败，请稍后重试",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "AI Waitlist · Monthly",
    description: "Unlimited waitlists, AI lead scoring & health analysis.",
  },
  zh: {
    name: "AI 等候名单验证 · 月付",
    description: "无限等候名单、AI 线索评分与健康分析。",
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
