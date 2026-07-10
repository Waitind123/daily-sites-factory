import type { Locale } from "./i18n-shared";

export const docsCopy = {
  en: {
    title: "Your Doc Sites",
    subtitle: "Create API documentation, publish with custom domain, auto-generate llms.txt.",
    memberBadge: "✓ Member · unlimited doc sites",
    freeSites: "Free doc sites:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 doc sites. Subscribe for unlimited sites, custom domains, and llms.txt.",
    paywallCta: "Subscribe · $9.9/mo",
    siteTitle: "New doc site",
    siteName: "Site name",
    siteNamePlaceholder: "e.g. My API Docs",
    description: "Description",
    descriptionPlaceholder: "What API does this document? (optional)",
    creating: "Creating…",
    createSite: "Create doc site",
    createdTitle: "Doc site created!",
    createdHint: "Share this public docs link:",
    openSite: "Open docs →",
    yourSites: "Your doc sites",
    pages: "pages",
    views: "views",
  },
  zh: {
    title: "你的文档站",
    subtitle: "创建 API 文档、自定义域名发布、自动生成 llms.txt。",
    memberBadge: "✓ 会员 · 文档站不限量",
    freeSites: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 个文档站。订阅后可无限创建、使用自定义域名和 llms.txt。",
    paywallCta: "订阅 · $9.9/月",
    siteTitle: "新建文档站",
    siteName: "站点名称",
    siteNamePlaceholder: "例如：我的 API 文档",
    description: "描述",
    descriptionPlaceholder: "这个 API 文档什么产品？（可选）",
    creating: "创建中…",
    createSite: "创建文档站",
    createdTitle: "文档站已创建！",
    createdHint: "分享以下公开文档链接：",
    openSite: "打开文档 →",
    yourSites: "你的文档站",
    pages: "页",
    views: "次浏览",
  },
} as const;

export const publicDocCopy = {
  en: {
    poweredBy: "Powered by Docs Pulse · create your own API docs",
    llmsTxt: "llms.txt",
    pagesNav: "Pages",
    noPages: "No pages yet.",
  },
  zh: {
    poweredBy: "由 API 文档托管提供 · 创建你自己的文档",
    llmsTxt: "llms.txt",
    pagesNav: "页面",
    noPages: "暂无页面。",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Docs Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited doc sites, custom domains, and llms.txt.",
    order: "Order:",
    openDocs: "Open docs",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 API 文档托管！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建文档站、使用自定义域名和 llms.txt。",
    order: "订单号：",
    openDocs: "打开文档",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    SITE_NAME_REQUIRED: "Site name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    SITE_CREATE_FAILED: "Failed to create doc site",
    SITE_NOT_FOUND: "Doc site not found",
    PAGE_TITLE_REQUIRED: "Page title is required",
    PAGE_CREATE_FAILED: "Failed to create page",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    SITE_NAME_REQUIRED: "请填写站点名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    SITE_CREATE_FAILED: "创建文档站失败",
    SITE_NOT_FOUND: "文档站不存在",
    PAGE_TITLE_REQUIRED: "请填写页面标题",
    PAGE_CREATE_FAILED: "创建页面失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: { name: "Docs Pulse Pro", description: "Unlimited doc sites, custom domain, llms.txt" },
  zh: { name: "API 文档托管专业版", description: "无限文档站、自定义域名、llms.txt" },
} as const;

export function getDocsCopy(locale: Locale) {
  return docsCopy[locale];
}

export function getPublicDocCopy(locale: Locale) {
  return publicDocCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  const key = (code ?? "GENERIC") as ApiErrorCode;
  return apiErrorCopy[locale][key] ?? apiErrorCopy[locale].GENERIC;
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
