import type { Locale } from "./i18n-shared";

export const wikiCopy = {
  en: {
    title: "Your Wiki Spaces",
    subtitle: "Create team wikis, collaborate in real-time, connect MCP for Cursor and Claude.",
    memberBadge: "✓ Member · unlimited wiki spaces",
    freeSites: "Free wiki spaces:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 wiki spaces. Subscribe for unlimited spaces, AI search, and MCP integration.",
    paywallCta: "Subscribe · $9.9/mo",
    siteTitle: "New wiki space",
    siteName: "Space name",
    siteNamePlaceholder: "e.g. Engineering Wiki",
    description: "Description",
    descriptionPlaceholder: "What does this wiki cover? (optional)",
    creating: "Creating…",
    createSite: "Create wiki space",
    createdTitle: "Wiki space created!",
    createdHint: "Share this public wiki link:",
    openSite: "Open wiki →",
    yourSites: "Your wiki spaces",
    pages: "pages",
    views: "views",
  },
  zh: {
    title: "你的知识库空间",
    subtitle: "创建团队知识库、实时协作、连接 MCP 供 Cursor 和 Claude 使用。",
    memberBadge: "✓ 会员 · 知识库空间不限量",
    freeSites: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 个知识库空间。订阅后可无限创建、使用 AI 搜索和 MCP 集成。",
    paywallCta: "订阅 · $9.9/月",
    siteTitle: "新建知识库空间",
    siteName: "空间名称",
    siteNamePlaceholder: "例如：工程知识库",
    description: "描述",
    descriptionPlaceholder: "这个知识库涵盖什么？（可选）",
    creating: "创建中…",
    createSite: "创建知识库空间",
    createdTitle: "知识库空间已创建！",
    createdHint: "分享以下公开知识库链接：",
    openSite: "打开知识库 →",
    yourSites: "你的知识库空间",
    pages: "页",
    views: "次浏览",
  },
} as const;

export const publicWikiCopy = {
  en: {
    poweredBy: "Powered by Wiki Pulse · create your own team wiki",
    mcpBadge: "MCP",
    pagesNav: "Pages",
    noPages: "No pages yet.",
  },
  zh: {
    poweredBy: "由团队知识库提供 · 创建你自己的知识库",
    mcpBadge: "MCP",
    pagesNav: "页面",
    noPages: "暂无页面。",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Wiki Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited wiki spaces, AI search, and MCP integration.",
    order: "Order:",
    openWiki: "Open wiki",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用团队知识库！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建知识库空间、使用 AI 搜索和 MCP 集成。",
    order: "订单号：",
    openWiki: "打开知识库",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    SITE_NAME_REQUIRED: "Space name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    SITE_CREATE_FAILED: "Failed to create wiki space",
    SITE_NOT_FOUND: "Wiki space not found",
    PAGE_TITLE_REQUIRED: "Page title is required",
    PAGE_CREATE_FAILED: "Failed to create page",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    SITE_NAME_REQUIRED: "请填写空间名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    SITE_CREATE_FAILED: "创建知识库空间失败",
    SITE_NOT_FOUND: "知识库空间不存在",
    PAGE_TITLE_REQUIRED: "请填写页面标题",
    PAGE_CREATE_FAILED: "创建页面失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: { name: "Wiki Pulse Pro", description: "Unlimited wiki spaces, AI search, MCP integration" },
  zh: { name: "团队知识库专业版", description: "无限知识库空间、AI 搜索、MCP 集成" },
} as const;

export function getWikiCopy(locale: Locale) {
  return wikiCopy[locale];
}

export function getPublicWikiCopy(locale: Locale) {
  return publicWikiCopy[locale];
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
