import type { Locale } from "./i18n-shared";

export const listingsCopy = {
  en: {
    title: "Beta Listings",
    subtitle: "Post a recruitment page, share the link, get qualified early adopter applications.",
    memberBadge: "✓ Member · unlimited listings",
    freeListings: "Free listings:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 beta listings. Subscribe for unlimited listings and application export.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "New beta listing",
    productName: "Product name",
    productNamePlaceholder: "e.g. Analytics Dashboard for Indie Hackers",
    description: "What you're building",
    descriptionPlaceholder: "One-line description of your product (optional)",
    targetAudience: "Who you need",
    targetAudiencePlaceholder: "e.g. SaaS founders with 1-50 customers",
    creating: "Creating…",
    createListing: "Create beta listing",
    createdTitle: "Beta listing created!",
    createdHint: "Share this public application page:",
    openListing: "Open application page →",
    yourListings: "Your beta listings",
    exampleTitle: "Application page preview",
    applications: "applications",
  },
  zh: {
    title: "内测招募帖",
    subtitle: "发布招募页面、分享链接，获取合格的早期用户申请。",
    memberBadge: "✓ 会员 · 招募帖不限量",
    freeListings: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 条内测招募帖。订阅后可无限创建并导出申请。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "新建内测招募帖",
    productName: "产品名称",
    productNamePlaceholder: "例如：独立开发者数据分析面板",
    description: "你在做什么",
    descriptionPlaceholder: "一句话描述产品（可选）",
    targetAudience: "你需要什么样的人",
    targetAudiencePlaceholder: "例如：拥有 1-50 个客户的 SaaS 创始人",
    creating: "创建中…",
    createListing: "创建内测招募帖",
    createdTitle: "内测招募帖已创建！",
    createdHint: "分享以下公开申请页：",
    openListing: "打开申请页 →",
    yourListings: "你的内测招募帖",
    exampleTitle: "申请页预览示例",
    applications: "人已申请",
  },
} as const;

export const publicBetaCopy = {
  en: {
    poweredBy: "Powered by Beta Match · apply as early adopter",
    applyTitle: "Apply as beta tester",
    emailPlaceholder: "you@email.com",
    profilePlaceholder: "Brief intro: who you are, why you're a fit (optional)",
    submitting: "Applying…",
    applyCta: "Apply as beta tester",
    applied: "Application submitted! The founder will review and reach out.",
    position: "Your application #",
    totalApplications: "testers applied",
    targetLabel: "Looking for:",
    empty: "Be the first to apply!",
    alreadyApplied: "You've already applied to this listing.",
  },
  zh: {
    poweredBy: "由早期用户市场提供 · 申请成为内测用户",
    applyTitle: "申请成为内测用户",
    emailPlaceholder: "you@email.com",
    profilePlaceholder: "简短介绍：你是谁、为什么适合（可选）",
    submitting: "提交中…",
    applyCta: "申请成为内测用户",
    applied: "申请已提交！创始人将审核并联系你。",
    position: "你的申请编号",
    totalApplications: "人已申请",
    targetLabel: "招募对象：",
    empty: "来做第一个申请的人吧！",
    alreadyApplied: "你已申请过此招募帖。",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Beta Match!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited beta listings and application export.",
    order: "Order:",
    openListings: "Open beta listings",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用早期用户市场！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建内测招募帖并导出申请。",
    order: "订单号：",
    openListings: "打开内测招募",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    PRODUCT_NAME_REQUIRED: "Product name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    LISTING_CREATE_FAILED: "Failed to create beta listing",
    LISTING_NOT_FOUND: "Beta listing not found",
    EMAIL_REQUIRED: "Email is required",
    APPLICATION_FAILED: "Failed to submit application",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    PRODUCT_NAME_REQUIRED: "请填写产品名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    LISTING_CREATE_FAILED: "创建内测招募帖失败",
    LISTING_NOT_FOUND: "内测招募帖不存在",
    EMAIL_REQUIRED: "请填写邮箱",
    APPLICATION_FAILED: "申请提交失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Beta Match · Monthly",
    description: "Unlimited beta listings & tester applications. Early adopter marketplace for indie founders.",
  },
  zh: {
    name: "早期用户市场 · 月付",
    description: "无限内测招募帖与测试者申请。独立开发者早期用户撮合市场。",
  },
} as const;

export function getListingsCopy(locale: Locale) {
  return listingsCopy[locale];
}

export function getPublicBetaCopy(locale: Locale) {
  return publicBetaCopy[locale];
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
