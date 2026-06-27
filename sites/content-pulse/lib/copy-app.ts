import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Content Pulse",
    subtitle: "One price, unlimited multi-platform reposts.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Buffer $15+/mo · cancel anytime",
    perks: [
      "Unlimited repost generations",
      "X, LinkedIn, Threads, Reddit, Product Hunt",
      "Platform-native tone & character limits",
      "One-click copy per platform",
      "Batch history",
      "CSV export (coming soon)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free reposts, then subscribe?",
    whyItems: [
      "Platform adaptation logic and storage cost real infrastructure",
      "Paying users = founders who actually ship on multiple channels",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅内容多平台分发",
    subtitle: "一口价，多平台内容改写不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Buffer $15+/月 · 随时可取消",
    perks: [
      "无限次内容分发",
      "X、领英、Threads、Reddit、Product Hunt",
      "平台原生语气与字数限制",
      "每个平台一键复制",
      "历史批次记录",
      "CSV 导出（即将推出）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "平台适配逻辑与存储有真实基础设施成本",
      "付费用户 = 真正在多渠道发布的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Repost Studio",
    subtitle: "Paste once, get native posts for X, LinkedIn, Threads, Reddit, and Product Hunt.",
    memberBadge: "✓ Member · unlimited reposts",
    freeSyncs: "Free reposts remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free repost generations. Subscribe for unlimited multi-platform content adaptation.",
    paywallCta: "Subscribe · $9.9/mo",
    createTitle: "New repost",
    productName: "Title (optional)",
    productNamePlaceholder: "v2.0 launch announcement",
    stripeKey: "Original content",
    stripeKeyPlaceholder:
      "Paste your product update, changelog, or launch note here. Minimum 20 characters.",
    stripeKeyHint: "We'll adapt tone and length for each platform automatically.",
    creating: "Generating…",
    createDashboard: "Generate 5 platform posts",
    createdTitle: "Posts generated!",
    createdHint: "Switch tabs to preview each platform. Copy and paste to publish.",
    syncNow: "View posts",
    syncing: "Loading…",
    yourDashboards: "Recent reposts",
    notSynced: "platform variants",
    mrr: "chars",
    arr: "max",
    churn: "Top platform",
    customers: "Title",
    newCustomers: "Content",
    churned: "Created",
    expansion: "Platforms",
    contraction: "Status",
    syncedAt: "chars",
    copyLink: "Copy post",
    copied: "Copied!",
  },
  zh: {
    title: "分发工作台",
    subtitle: "粘贴一次，生成适配 X、领英、Threads、Reddit、Product Hunt 的原生帖子。",
    memberBadge: "✓ 会员 · 分发不限量",
    freeSyncs: "剩余免费次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费分发。订阅后可无限生成多平台内容变体。",
    paywallCta: "订阅 · $9.9/月",
    createTitle: "新建分发",
    productName: "标题（可选）",
    productNamePlaceholder: "v2.0 发布通知",
    stripeKey: "原始内容",
    stripeKeyPlaceholder: "在此粘贴产品更新、changelog 或发布说明，至少 20 个字符。",
    stripeKeyHint: "系统将自动适配每个平台的语气与字数限制。",
    creating: "生成中…",
    createDashboard: "生成 5 个平台帖子",
    createdTitle: "帖子已生成！",
    createdHint: "切换标签预览各平台内容，复制后发布。",
    syncNow: "查看帖子",
    syncing: "加载中…",
    yourDashboards: "最近分发",
    notSynced: "个平台变体",
    mrr: "字",
    arr: "上限",
    churn: "热门平台",
    customers: "标题",
    newCustomers: "内容",
    churned: "创建时间",
    expansion: "平台",
    contraction: "状态",
    syncedAt: "字",
    copyLink: "复制帖子",
    copied: "已复制！",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Content Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited multi-platform reposts.",
    order: "Order:",
    openDashboard: "Open repost studio",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用内容多平台分发！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限生成多平台内容变体。",
    order: "订单号：",
    openDashboard: "打开分发工作台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    CONTENT_REQUIRED: "Content is required",
    CONTENT_TOO_SHORT: "Content must be at least 20 characters",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    REPOST_NOT_FOUND: "Repost batch not found",
    REPOST_FAILED: "Failed to generate reposts",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    CONTENT_REQUIRED: "请填写内容",
    CONTENT_TOO_SHORT: "内容至少需要 20 个字符",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    REPOST_NOT_FOUND: "分发批次不存在",
    REPOST_FAILED: "生成分发内容失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Content Pulse · Monthly",
    description: "Unlimited multi-platform content reposts.",
  },
  zh: {
    name: "内容多平台分发 · 月付",
    description: "无限多平台内容改写与分发。",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getDashboardCopy(locale: Locale) {
  return dashboardCopy[locale];
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
