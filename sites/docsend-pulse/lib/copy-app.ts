import type { Locale } from "./i18n-shared";

export const sampleReportCopy = {
  en: `Analytics: Seed Deck v3
─────────────────────────────────
Views: 24  │  Avg time: 3m 42s  │  78% completion
─────────────────────────────────
Page 1 (Cover)     ████████████  89%  ·  42s
Page 2 (Problem)   ██████████░░  76%  ·  38s
Page 3 (Solution)  ████████░░░░  62%  ·  31s
Page 4 (Traction)  ██████░░░░░░  48%  ·  22s

👤 Sarah K. · London · Desktop · 4 pages · 2m 15s`,
  zh: `分析：种子轮路演 v3
─────────────────────────────────
浏览量：24  │  平均时长：3分42秒  │  完成率 78%
─────────────────────────────────
第 1 页（封面）    ████████████  89%  ·  42秒
第 2 页（问题）    ██████████░░  76%  ·  38秒
第 3 页（方案）    ████████░░░░  62%  ·  31秒
第 4 页（增长）    ██████░░░░░░  48%  ·  22秒

👤 李雪 · 上海 · 桌面端 · 4 页 · 2分15秒`,
};

export const shareCopy = {
  en: {
    title: "Document Share & Analytics",
    subtitle: "Create a secure tracking link — get page-level views, time spent, and viewer sessions.",
    memberBadge: "✓ Member · unlimited shares",
    freeScans: "Free shares:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free tracked shares. Subscribe for unlimited secure links, page analytics, and view notifications.",
    paywallCta: "Subscribe · $29/mo",
    formTitle: "Share a document",
    docTitle: "Document title",
    docTitlePlaceholder: "Seed Deck v3 — Q2 2026",
    pageCount: "Number of pages",
    pageCountPlaceholder: "12",
    recipientEmail: "Recipient email (optional)",
    recipientEmailPlaceholder: "investor@vc.com",
    sharing: "Creating tracking link…",
    shareButton: "Create tracking link",
    resultTitle: "Tracking link ready",
    trackingUrl: "Tracking URL",
    copyLink: "Copy link",
    copied: "Copied!",
    totalViews: "Total views",
    uniqueViewers: "Unique viewers",
    avgTime: "Avg. time",
    downloads: "Download attempts",
    pageViewsTitle: "Page-by-page analytics",
    pageLabel: "Page",
    viewsLabel: "Views",
    timeLabel: "Avg time",
    completionLabel: "Completion",
    sessionsTitle: "Recent viewer sessions",
    viewerLabel: "Viewer",
    locationLabel: "Location",
    deviceLabel: "Device",
    pagesViewedLabel: "Pages viewed",
    historyTitle: "Recent shares",
    exampleTitle: "Example analytics report",
  },
  zh: {
    title: "文档分享与分析",
    subtitle: "创建安全追踪链接 — 获取逐页浏览量、停留时长与访客会话。",
    memberBadge: "✓ 会员 · 分享不限次数",
    freeScans: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费追踪分享。订阅后可无限安全链接、逐页分析与浏览通知。",
    paywallCta: "订阅 · $29/月",
    formTitle: "分享文档",
    docTitle: "文档标题",
    docTitlePlaceholder: "种子轮路演 v3 — 2026 Q2",
    pageCount: "页数",
    pageCountPlaceholder: "12",
    recipientEmail: "收件人邮箱（可选）",
    recipientEmailPlaceholder: "investor@vc.com",
    sharing: "正在创建追踪链接…",
    shareButton: "创建追踪链接",
    resultTitle: "追踪链接已就绪",
    trackingUrl: "追踪链接",
    copyLink: "复制链接",
    copied: "已复制！",
    totalViews: "总浏览量",
    uniqueViewers: "独立访客",
    avgTime: "平均时长",
    downloads: "下载尝试",
    pageViewsTitle: "逐页分析",
    pageLabel: "页",
    viewsLabel: "浏览量",
    timeLabel: "平均时长",
    completionLabel: "完成率",
    sessionsTitle: "最近访客会话",
    viewerLabel: "访客",
    locationLabel: "地区",
    deviceLabel: "设备",
    pagesViewedLabel: "已浏览页数",
    historyTitle: "最近分享",
    exampleTitle: "示例分析报告",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to DocSend Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited secure document shares with page-level analytics.",
    order: "Order:",
    openShare: "Open share tool",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用文档追踪脉冲！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限次安全分享文档并查看逐页分析。",
    order: "订单号：",
    openShare: "打开分享工具",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    DOC_TITLE_REQUIRED: "Document title is required",
    PAGE_COUNT_INVALID: "Page count must be between 1 and 50",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    SHARE_FAILED: "Failed to create tracking link",
    SHARE_NOT_FOUND: "Share not found",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    DOC_TITLE_REQUIRED: "请填写文档标题",
    PAGE_COUNT_INVALID: "页数须在 1 到 50 之间",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    SHARE_FAILED: "创建追踪链接失败",
    SHARE_NOT_FOUND: "分享记录不存在",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "DocSend Pulse · Monthly",
    description: "Unlimited secure document shares with page-level analytics and view notifications.",
  },
  zh: {
    name: "文档追踪脉冲 · 月付",
    description: "无限安全文档分享、逐页分析与浏览通知。",
  },
} as const;

export function getShareCopy(locale: Locale) {
  return shareCopy[locale];
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

export function getSampleReport(locale: Locale) {
  return sampleReportCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}

export function getJoinCopy(locale: Locale) {
  return {
    en: {
      title: "Join DocSend Pulse",
      subtitle: "One price, unlimited secure document shares.",
      subscribe: "Subscribe · $29/mo",
    },
    zh: {
      title: "订阅文档追踪脉冲",
      subtitle: "一口价，安全文档分享不限次数。",
      subscribe: "订阅 · $29/月",
    },
  }[locale];
}
