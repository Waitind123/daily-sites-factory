import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Zapier Pulse",
    subtitle: "One price, all features. No per-task fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs Zapier $49+/mo · cancel anytime",
    perks: [
      "Unlimited webhook + cron flows",
      "Webhook → HTTP forwarding",
      "Cron-triggered automations",
      "90-day run history & logs",
      "Retry on failure (3 attempts)",
      "Signed webhook URLs",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free flows, then subscribe?",
    whyItems: [
      "Webhook delivery and cron scheduling cost real infrastructure",
      "Paying users = founders who actually run production automations",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Zapier Pulse",
    subtitle: "一个价格，全部功能。不按任务数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCompetitor: "对比 Zapier $49+/月 · 随时可取消",
    perks: [
      "无限 Webhook + Cron 流程",
      "Webhook → HTTP 转发",
      "Cron 定时自动化",
      "90 天运行历史与日志",
      "失败自动重试（3 次）",
      "签名 Webhook URL",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 条，之后订阅？",
    whyItems: [
      "Webhook 投递与 Cron 调度有真实基础设施成本",
      "付费用户 = 认真跑生产自动化的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const flowsCopy = {
  en: {
    title: "Automation Flows",
    subtitle: "Create a flow, get a webhook URL or cron schedule. Forward events to any HTTP endpoint.",
    memberBadge: "✓ Member · unlimited flows",
    freeRemaining: (remaining: number, limit: number) =>
      `Free flows: ${remaining}/${limit}`,
    paywallTitle: "Free trial used up",
    paywallBody:
      "Subscribe for unlimited webhook + cron flows, run history & retry on failure.",
    paywallCta: "Subscribe · $9.9/mo",
    nameLabel: "Flow name",
    namePlaceholder: "Stripe payment → Slack alert",
    triggerLabel: "Trigger type",
    triggerWebhook: "Webhook",
    triggerCron: "Cron schedule",
    scheduleLabel: "Cron schedule",
    schedulePlaceholder: "0 9 * * *",
    scheduleHint: "minute hour day month weekday",
    targetLabel: "Target URL (HTTP POST)",
    targetPlaceholder: "https://hooks.slack.com/services/...",
    targetHint: "We forward incoming webhook payloads to this URL as JSON POST",
    creating: "Creating…",
    createButton: "Create flow & get webhook URL",
    resultReady: "READY",
    webhookUrl: "Webhook URL",
    integration: "Integration (send events here)",
    memberNote:
      "Members get persistent flows, 90-day run logs, and automatic retry on delivery failure.",
    sessionTitle: "Your session",
    emptySession: "Create a flow above to get your webhook URL.",
    exampleTitle: "Example flows (Pro)",
    exampleNote: "Members save flows for continuous automation + run history.",
    createFailed: "Failed to create flow",
    statusActive: "ACTIVE",
    statusPaused: "PAUSED",
  },
  zh: {
    title: "自动化流程",
    subtitle: "创建流程，获取 Webhook URL 或 Cron 调度。将事件转发到任意 HTTP 端点。",
    memberBadge: "✓ 会员 · 流程不限量",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余免费流程：${remaining}/${limit}`,
    paywallTitle: "免费体验已用完",
    paywallBody: "订阅后可无限 Webhook + Cron 流程、运行历史与失败重试。",
    paywallCta: "订阅 · $9.9/月",
    nameLabel: "流程名称",
    namePlaceholder: "Stripe 支付 → Slack 通知",
    triggerLabel: "触发类型",
    triggerWebhook: "Webhook",
    triggerCron: "Cron 定时",
    scheduleLabel: "Cron 表达式",
    schedulePlaceholder: "0 9 * * *",
    scheduleHint: "分 时 日 月 周",
    targetLabel: "目标 URL（HTTP POST）",
    targetPlaceholder: "https://hooks.slack.com/services/...",
    targetHint: "收到 Webhook 后，我们将载荷以 JSON POST 转发到此 URL",
    creating: "创建中…",
    createButton: "创建流程并获取 Webhook URL",
    resultReady: "就绪",
    webhookUrl: "Webhook URL",
    integration: "集成代码（将事件发送到这里）",
    memberNote: "会员可持久保存流程、90 天运行日志、投递失败自动重试。",
    sessionTitle: "本次会话",
    emptySession: "在上方创建流程以获取 Webhook URL。",
    exampleTitle: "示例流程（专业版）",
    exampleNote: "会员可保存流程，持续自动化与运行历史。",
    createFailed: "创建流程失败",
    statusActive: "运行中",
    statusPaused: "已暂停",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Zapier Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited webhook + cron automations.",
    order: "Order:",
    openFlows: "Open flows",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Zapier Pulse！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限使用 Webhook + Cron 自动化。",
    order: "订单号：",
    openFlows: "打开流程台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    NAME_REQUIRED: "Flow name is required",
    TARGET_REQUIRED: "Target URL is required",
    INVALID_URL: "Invalid target URL",
    SCHEDULE_REQUIRED: "Cron schedule is required",
    INVALID_CRON: "Invalid cron expression",
    INVALID_TOKEN: "Invalid webhook token",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CREATE_FAILED: "Failed to create flow",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    NAME_REQUIRED: "请填写流程名称",
    TARGET_REQUIRED: "请填写目标 URL",
    INVALID_URL: "目标 URL 无效",
    SCHEDULE_REQUIRED: "请填写 Cron 表达式",
    INVALID_CRON: "Cron 表达式无效",
    INVALID_TOKEN: "Webhook Token 无效",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    CREATE_FAILED: "创建流程失败，请稍后重试",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Zapier Pulse · Monthly",
    description: "Unlimited webhook + cron flows, run history, retry on failure.",
  },
  zh: {
    name: "Zapier Pulse · 月付",
    description: "无限 Webhook + Cron 流程、运行历史、失败重试。",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getFlowsCopy(locale: Locale) {
  return flowsCopy[locale];
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

export function getJobsCopy(locale: Locale) {
  return getFlowsCopy(locale);
}
