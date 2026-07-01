import type { Locale } from "./i18n-shared";

export const bookmarksCopy = {
  en: {
    title: "Your Bookmarks",
    subtitle: "Save links, organize in folders, share public collections.",
    memberBadge: "✓ Member · unlimited bookmarks",
    freeSaves: "Free saves",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've saved 5 links. Subscribe for unlimited bookmarks, folders, and public share pages.",
    paywallCta: "Subscribe · $9.9/mo",
    searchPlaceholder: "Search bookmarks… (⌘K)",
    formTitle: "Save a link",
    urlLabel: "URL",
    urlPlaceholder: "https://example.com/article",
    titleLabel: "Title (optional)",
    titlePlaceholder: "Auto-detected from URL",
    folderLabel: "Folder",
    noFolder: "No folder",
    saving: "Saving…",
    saveBookmark: "Save bookmark",
    folderFormTitle: "New public folder",
    folderNameLabel: "Folder name",
    folderNamePlaceholder: "e.g. Indie SaaS tools",
    publicFolderHint: "Public folders get a shareable link at /bookmarks/f/your-folder",
    createFolder: "Create folder",
    yourBookmarks: "Your bookmarks",
    emptyState: "No bookmarks yet — save your first link above.",
    publicFolders: "Public folders",
    viewFolder: "View folder",
  },
  zh: {
    title: "我的书签",
    subtitle: "保存链接、文件夹整理、公开分享合集。",
    memberBadge: "✓ 会员 · 书签不限量",
    freeSaves: "免费额度",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已保存 5 个链接。订阅后可无限保存、创建文件夹与公开分享页。",
    paywallCta: "订阅 · $9.9/月",
    searchPlaceholder: "搜索书签…（⌘K）",
    formTitle: "保存链接",
    urlLabel: "链接",
    urlPlaceholder: "https://example.com/article",
    titleLabel: "标题（可选）",
    titlePlaceholder: "自动从链接识别",
    folderLabel: "文件夹",
    noFolder: "无文件夹",
    saving: "保存中…",
    saveBookmark: "保存书签",
    folderFormTitle: "新建公开文件夹",
    folderNameLabel: "文件夹名称",
    folderNamePlaceholder: "例如：独立 SaaS 工具",
    publicFolderHint: "公开文件夹可在 /bookmarks/f/文件夹名 分享",
    createFolder: "创建文件夹",
    yourBookmarks: "你的书签",
    emptyState: "还没有书签 — 在上方保存第一个链接。",
    publicFolders: "公开文件夹",
    viewFolder: "查看文件夹",
  },
} as const;

export const publicFolderCopy = {
  en: {
    poweredBy: "Powered by Bookmark Pulse · minimal bookmarks for indie hackers",
    linkCount: "links",
    emptyFolder: "This folder is empty.",
  },
  zh: {
    poweredBy: "由 Bookmark Pulse 提供 · 独立开发者极简书签",
    linkCount: "个链接",
    emptyFolder: "此文件夹暂无链接。",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Bookmark Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited bookmarks, folders, and public share pages.",
    order: "Order:",
    openBookmarks: "Open bookmarks",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Bookmark Pulse！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限保存书签、创建文件夹与公开分享页。",
    order: "订单号：",
    openBookmarks: "打开书签看板",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    URL_REQUIRED: "URL is required",
    INVALID_URL: "Invalid URL format",
    FOLDER_NAME_REQUIRED: "Folder name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    BOOKMARK_SAVE_FAILED: "Failed to save bookmark",
    FOLDER_CREATE_FAILED: "Failed to create folder",
    FOLDER_NOT_FOUND: "Folder not found",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    URL_REQUIRED: "请填写链接",
    INVALID_URL: "链接格式无效",
    FOLDER_NAME_REQUIRED: "请填写文件夹名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    BOOKMARK_SAVE_FAILED: "保存书签失败",
    FOLDER_CREATE_FAILED: "创建文件夹失败",
    FOLDER_NOT_FOUND: "文件夹不存在",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Bookmark Pulse · Monthly",
    description: "Unlimited bookmarks, folders & public share pages.",
  },
  zh: {
    name: "Bookmark Pulse · 月付",
    description: "无限书签、文件夹与公开分享页。",
  },
} as const;

export function getBookmarksCopy(locale: Locale) {
  return bookmarksCopy[locale];
}

export function getPublicFolderCopy(locale: Locale) {
  return publicFolderCopy[locale];
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
