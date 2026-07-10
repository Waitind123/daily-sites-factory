import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Cron Heartbeat",
    subtitle: "One price, all features. No per-monitor fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs Cronitor $29+/mo · cancel anytime",
    perks: [
      "Unlimited cron job monitors",
      "Missed-run & late detection",
      "Slack, email & webhook alerts",
      "Job output in failure alerts",
      "Escalating reminders (1h, 6h, 24h)",
      "90-day ping history",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free jobs, then subscribe?",
    whyItems: [
      "Alert delivery and schedule scanning cost real infrastructure",
      "Paying users = founders who actually run production crons",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Cron Heartbeat",
    subtitle: "一个价格，全部功能。不按任务数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCompetitor: "对比 Cronitor $29+/月 · 随时可取消",
    perks: [
      "无限 cron 任务监控",
      "漏跑与迟到检测",
      "Slack、邮件与 Webhook 告警",
      "失败告警附带任务日志",
      "逐级提醒（1 小时、6 小时、24 小时）",
      "90 天心跳历史",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 个，之后订阅？",
    whyItems: [
      "告警投递与调度扫描有真实基础设施成本",
      "付费用户 = 认真跑生产 cron 的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const jobsCopy = {
  en: {
    title: "Cron Jobs",
    subtitle: "Create a monitor, get a ping URL. Add one curl to your cron script.",
    memberBadge: "✓ Member · unlimited jobs",
    freeRemaining: (remaining: number, limit: number) =>
      `Free jobs: ${remaining}/${limit}`,
    paywallTitle: "Free trial used up",
    paywallBody:
      "Subscribe for unlimited cron monitors, missed-run alerts & Slack notifications.",
    paywallCta: "Subscribe · $29/mo",
    nameLabel: "Job name",
    namePlaceholder: "Nightly database backup",
    scheduleLabel: "Cron schedule",
    schedulePlaceholder: "*/5 * * * *",
    scheduleHint: "minute hour day month weekday",
    graceLabel: "Grace period (minutes)",
    creating: "Creating…",
    createButton: "Create monitor & get ping URL",
    resultReady: "READY",
    pingUrl: "Ping URL",
    integration: "Integration (add to end of your script)",
    memberNote:
      "Members get 24/7 missed-run detection + Slack alerts when pings stop arriving.",
    sessionTitle: "Your session",
    emptySession: "Create a job above to get your ping URL.",
    exampleTitle: "Example jobs (Pro)",
    exampleNote: "Members save jobs for continuous monitoring + escalating alerts.",
    createFailed: "Failed to create job",
    statusHealthy: "HEALTHY",
    statusLate: "LATE",
    ago: "ago",
  },
  zh: {
    title: "Cron 任务",
    subtitle: "创建监控，获取 Ping URL。在 cron 脚本末尾加一行 curl。",
    memberBadge: "✓ 会员 · 任务不限量",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余免费任务：${remaining}/${limit}`,
    paywallTitle: "免费体验已用完",
    paywallBody: "订阅后可无限监控 cron、漏跑告警与 Slack 通知。",
    paywallCta: "订阅 · $29/月",
    nameLabel: "任务名称",
    namePlaceholder: "夜间数据库备份",
    scheduleLabel: "Cron 表达式",
    schedulePlaceholder: "*/5 * * * *",
    scheduleHint: "分 时 日 月 周",
    graceLabel: "宽限期（分钟）",
    creating: "创建中…",
    createButton: "创建监控并获取 Ping URL",
    resultReady: "就绪",
    pingUrl: "Ping URL",
    integration: "集成代码（添加到脚本末尾）",
    memberNote: "会员可 24/7 漏跑检测，心跳停止时 Slack 告警。",
    sessionTitle: "本次会话",
    emptySession: "在上方创建任务以获取 Ping URL。",
    exampleTitle: "示例任务（专业版）",
    exampleNote: "会员可保存任务，持续监控与逐级告警。",
    createFailed: "创建任务失败",
    statusHealthy: "正常",
    statusLate: "迟到",
    ago: "前",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Cron Heartbeat!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited cron monitors and alerts.",
    order: "Order:",
    openJobs: "Open jobs",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Cron Heartbeat！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限监控 cron 任务与接收告警。",
    order: "订单号：",
    openJobs: "打开任务台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    NAME_REQUIRED: "Job name is required",
    SCHEDULE_REQUIRED: "Cron schedule is required",
    INVALID_CRON: "Invalid cron expression",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CREATE_FAILED: "Failed to create job",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    NAME_REQUIRED: "请填写任务名称",
    SCHEDULE_REQUIRED: "请填写 Cron 表达式",
    INVALID_CRON: "Cron 表达式无效",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    CREATE_FAILED: "创建任务失败，请稍后重试",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Cron Heartbeat · Monthly",
    description: "Unlimited cron monitors, missed-run alerts, Slack & webhooks.",
  },
  zh: {
    name: "Cron Heartbeat · 月付",
    description: "无限 cron 监控、漏跑告警、Slack 与 Webhook。",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getJobsCopy(locale: Locale) {
  return jobsCopy[locale];
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
