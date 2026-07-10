import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Release Pulse",
    subtitle: "One price, unlimited changelog-to-social conversions.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs PushToPost $9+/mo · cancel anytime",
    perks: [
      "Unlimited changelog conversions",
      "X, LinkedIn, Threads native posts",
      "Version detection & bullet parsing",
      "One-click copy per platform",
      "Conversion history",
      "Markdown export (coming soon)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free conversions, then subscribe?",
    whyItems: [
      "Changelog parsing and storage cost real infrastructure",
      "Paying users = founders who actually ship weekly",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅发布日志转社交帖",
    subtitle: "一口价，changelog 转社交帖不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 PushToPost $9+/月 · 随时可取消",
    perks: [
      "无限次发布日志转换",
      "X、领英、Threads 原生帖子",
      "版本号识别与要点解析",
      "每个平台一键复制",
      "转换历史记录",
      "Markdown 导出（即将推出）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "发布日志解析与存储有真实基础设施成本",
      "付费用户 = 真正每周发布的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Convert Studio",
    subtitle: "Paste release notes, get native posts for X, LinkedIn, and Threads.",
    memberBadge: "✓ Member · unlimited conversions",
    freeSyncs: "Free conversions remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free changelog conversions. Subscribe for unlimited release-to-social posts.",
    paywallCta: "Subscribe · $29/mo",
    createTitle: "New conversion",
    productName: "Release title (optional)",
    productNamePlaceholder: "v2.1.0 — Dark mode + faster exports",
    versionLabel: "Version (optional)",
    versionPlaceholder: "v2.1.0",
    stripeKey: "Release notes",
    stripeKeyPlaceholder:
      "Paste your changelog, GitHub release notes, or version update. Minimum 20 characters. Bullet points work best.",
    stripeKeyHint: "We'll parse bullets, detect version, and adapt tone for each platform.",
    creating: "Converting…",
    createDashboard: "Generate 3 platform posts",
    createdTitle: "Posts generated!",
    createdHint: "Switch tabs to preview each platform. Copy and paste to publish.",
    syncNow: "View posts",
    syncing: "Loading…",
    yourDashboards: "Recent conversions",
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
    title: "转换工作台",
    subtitle: "粘贴发布日志，生成适配 X、领英、Threads 的原生帖子。",
    memberBadge: "✓ 会员 · 转换不限量",
    freeSyncs: "剩余免费次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费转换。订阅后可无限生成发布日志社交帖。",
    paywallCta: "订阅 · $29/月",
    createTitle: "新建转换",
    productName: "发布标题（可选）",
    productNamePlaceholder: "v2.1.0 — 深色模式 + 导出加速",
    versionLabel: "版本号（可选）",
    versionPlaceholder: "v2.1.0",
    stripeKey: "发布日志",
    stripeKeyPlaceholder:
      "在此粘贴 changelog、GitHub Release 说明或版本更新，至少 20 个字符。要点列表效果最佳。",
    stripeKeyHint: "系统将解析要点、识别版本号，并适配每个平台的语气。",
    creating: "转换中…",
    createDashboard: "生成 3 个平台帖子",
    createdTitle: "帖子已生成！",
    createdHint: "切换标签预览各平台内容，复制后发布。",
    syncNow: "查看帖子",
    syncing: "加载中…",
    yourDashboards: "最近转换",
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
    title: "Welcome to Release Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited changelog-to-social conversions.",
    order: "Order:",
    openDashboard: "Open convert studio",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用发布日志转社交帖！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限转换发布日志为社交帖。",
    order: "订单号：",
    openDashboard: "打开转换工作台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    CONTENT_REQUIRED: "Release notes are required",
    CONTENT_TOO_SHORT: "Release notes must be at least 20 characters",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CONVERT_NOT_FOUND: "Conversion batch not found",
    CONVERT_FAILED: "Failed to convert release notes",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    CONTENT_REQUIRED: "请填写发布日志",
    CONTENT_TOO_SHORT: "发布日志至少需要 20 个字符",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    CONVERT_NOT_FOUND: "转换批次不存在",
    CONVERT_FAILED: "转换发布日志失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Release Pulse · Monthly",
    description: "Unlimited changelog-to-social conversions.",
  },
  zh: {
    name: "发布日志转社交帖 · 月付",
    description: "无限发布日志转社交帖。",
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
