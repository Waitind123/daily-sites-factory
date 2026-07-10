import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Incident AI",
    subtitle: "One price, unlimited incident communication drafts.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Statuspage $29+/mo · cancel anytime",
    perks: [
      "Unlimited incident drafts",
      "Status page + email + Slack + postmortem",
      "Severity detection from raw alerts",
      "One-click copy per channel",
      "Draft history",
      "Webhook ingest (coming soon)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free drafts, then subscribe?",
    whyItems: [
      "AI draft generation and storage cost real infrastructure",
      "Paying users = founders who actually ship production SaaS",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 AI 事件摘要",
    subtitle: "一口价，事件沟通草稿不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Statuspage $29+/月 · 随时可取消",
    perks: [
      "无限次事件草稿",
      "状态页 + 邮件 + Slack + 复盘报告",
      "从原始告警自动识别严重程度",
      "每个渠道一键复制",
      "草稿历史记录",
      "Webhook 接入（即将推出）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "AI 草稿生成与存储有真实基础设施成本",
      "付费用户 = 真正运营生产环境的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Incident Draft Studio",
    subtitle: "Paste a monitoring alert, get status page, email, Slack, and postmortem drafts.",
    memberBadge: "✓ Member · unlimited drafts",
    freeSyncs: "Free drafts remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free incident drafts. Subscribe for unlimited status updates, emails, and postmortems.",
    paywallCta: "Subscribe · $29/mo",
    createTitle: "New incident draft",
    productName: "Service name (optional)",
    productNamePlaceholder: "checkout-service",
    versionLabel: "Severity hint (optional)",
    versionPlaceholder: "investigating / resolved",
    stripeKey: "Monitoring alert",
    stripeKeyPlaceholder:
      "Paste your PagerDuty, Datadog, uptime, or raw incident description. Minimum 20 characters.",
    stripeKeyHint: "We'll detect severity, extract service name, and draft 4 channel updates.",
    creating: "Generating…",
    createDashboard: "Generate 4 channel drafts",
    createdTitle: "Drafts generated!",
    createdHint: "Switch tabs to preview each channel. Copy and publish.",
    syncNow: "View drafts",
    syncing: "Loading…",
    yourDashboards: "Recent drafts",
    notSynced: "channel variants",
    mrr: "chars",
    arr: "max",
    churn: "Top channel",
    customers: "Service",
    newCustomers: "Alert",
    churned: "Created",
    expansion: "Channels",
    contraction: "Status",
    syncedAt: "chars",
    copyLink: "Copy draft",
    copied: "Copied!",
  },
  zh: {
    title: "事件草稿工作台",
    subtitle: "粘贴监控告警，生成状态页、邮件、Slack 和复盘报告草稿。",
    memberBadge: "✓ 会员 · 草稿不限量",
    freeSyncs: "剩余免费次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费草稿。订阅后可无限生成事件沟通文案。",
    paywallCta: "订阅 · $29/月",
    createTitle: "新建事件草稿",
    productName: "服务名称（可选）",
    productNamePlaceholder: "checkout-service",
    versionLabel: "严重程度提示（可选）",
    versionPlaceholder: "调查中 / 已恢复",
    stripeKey: "监控告警",
    stripeKeyPlaceholder:
      "在此粘贴 PagerDuty、Datadog、uptime 告警或故障描述，至少 20 个字符。",
    stripeKeyHint: "系统将识别严重程度、提取服务名，并生成 4 个渠道的草稿。",
    creating: "生成中…",
    createDashboard: "生成 4 个渠道草稿",
    createdTitle: "草稿已生成！",
    createdHint: "切换标签预览各渠道内容，复制后发布。",
    syncNow: "查看草稿",
    syncing: "加载中…",
    yourDashboards: "最近草稿",
    notSynced: "个渠道变体",
    mrr: "字",
    arr: "上限",
    churn: "热门渠道",
    customers: "服务",
    newCustomers: "告警",
    churned: "创建时间",
    expansion: "渠道",
    contraction: "状态",
    syncedAt: "字",
    copyLink: "复制草稿",
    copied: "已复制！",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Incident AI!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited incident communication drafts.",
    order: "Order:",
    openDashboard: "Open draft studio",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 AI 事件摘要！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限生成事件沟通草稿。",
    order: "订单号：",
    openDashboard: "打开草稿工作台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    ALERT_REQUIRED: "Monitoring alert is required",
    ALERT_TOO_SHORT: "Alert must be at least 20 characters",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    DRAFT_NOT_FOUND: "Draft batch not found",
    DRAFT_FAILED: "Failed to generate incident drafts",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    ALERT_REQUIRED: "请填写监控告警",
    ALERT_TOO_SHORT: "告警内容至少需要 20 个字符",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    DRAFT_NOT_FOUND: "草稿批次不存在",
    DRAFT_FAILED: "生成事件草稿失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Incident AI · Monthly",
    description: "Unlimited incident communication drafts.",
  },
  zh: {
    name: "AI 事件摘要 · 月付",
    description: "无限事件沟通草稿。",
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
