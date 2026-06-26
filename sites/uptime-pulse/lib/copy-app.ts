import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Uptime Pulse",
    subtitle: "One price, all features. No per-monitor fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs UptimeRobot $34+/mo after price hike · cancel anytime",
    perks: [
      "Unlimited URL monitors",
      "1-minute checks from EU + US",
      "Slack, email & webhook alerts",
      "Public branded status page",
      "SSL certificate expiry alerts",
      "30-day uptime history",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free checks, then subscribe?",
    whyItems: [
      "Regional probes and alert delivery cost real money",
      "Paying users = founders who actually ship products",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Uptime Pulse",
    subtitle: "一个价格，全部功能。不按监控数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCompetitor: "对比 UptimeRobot 涨价后 $34+/月 · 随时可取消",
    perks: [
      "无限 URL 监控",
      "EU + US 1 分钟检测",
      "Slack、邮件与 Webhook 告警",
      "公开品牌状态页",
      "SSL 证书到期提醒",
      "30 天 uptime 历史",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 次，之后订阅？",
    whyItems: [
      "区域探测与告警投递有真实成本",
      "付费用户 = 认真 ship 产品的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const monitorCopy = {
  en: {
    title: "URL Monitor",
    subtitle: "Run instant HTTP checks. Members get scheduled 1-min monitoring + alerts.",
    memberBadge: "✓ Member · unlimited checks",
    freeRemaining: (remaining: number, limit: number) =>
      `Free checks: ${remaining}/${limit}`,
    paywallTitle: "Free trial used up",
    paywallBody:
      "Subscribe for unlimited monitors, 1-min checks, Slack alerts & status pages.",
    paywallCta: "Subscribe · $9.9/mo",
    urlLabel: "URL to monitor",
    urlPlaceholder: "https://your-app.vercel.app",
    nameLabel: "Label (optional)",
    namePlaceholder: "API health",
    checking: "Checking…",
    checkNow: "Check now",
    latestResult: "Latest result",
    statusUp: "UP",
    statusDown: "DOWN",
    urlField: "URL",
    httpStatus: "HTTP status",
    latency: "Latency",
    checkedAt: "Checked at",
    errorField: "Error",
    sessionHistory: "Your session history",
    emptyHistory: "Run a check above to see results here.",
    exampleMonitors: "Example monitors (Pro)",
    exampleNote: "Members save monitors for 24/7 scheduled checks + Slack alerts.",
    checkFailed: "Check failed",
    ms: "ms",
    err: "ERR",
  },
  zh: {
    title: "URL 监控",
    subtitle: "即时 HTTP 检测。会员可享 1 分钟定时监控与告警。",
    memberBadge: "✓ 会员 · 检测不限量",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余免费检测：${remaining}/${limit}`,
    paywallTitle: "免费体验已用完",
    paywallBody: "订阅后可无限监控、1 分钟检测、Slack 告警与状态页。",
    paywallCta: "订阅 · $9.9/月",
    urlLabel: "要监控的 URL",
    urlPlaceholder: "https://你的应用.vercel.app",
    nameLabel: "标签（可选）",
    namePlaceholder: "API 健康检查",
    checking: "检测中…",
    checkNow: "立即检测",
    latestResult: "最近结果",
    statusUp: "正常",
    statusDown: "异常",
    urlField: "URL",
    httpStatus: "HTTP 状态",
    latency: "延迟",
    checkedAt: "检测时间",
    errorField: "错误",
    sessionHistory: "本次会话历史",
    emptyHistory: "在上方运行检测后，结果将显示在这里。",
    exampleMonitors: "示例监控（专业版）",
    exampleNote: "会员可保存监控，享受 24/7 定时检测与 Slack 告警。",
    checkFailed: "检测失败",
    ms: "毫秒",
    err: "错误",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Uptime Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited monitors and alerts.",
    order: "Order:",
    openMonitors: "Open monitors",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Uptime Pulse！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限监控与接收告警。",
    order: "订单号：",
    openMonitors: "打开监控台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    URL_REQUIRED: "URL is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CHECK_FAILED: "Check failed, please retry",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    URL_REQUIRED: "请填写 URL",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    CHECK_FAILED: "检测失败，请稍后重试",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Uptime Pulse · Monthly",
    description: "Unlimited uptime monitors, alerts & status pages.",
  },
  zh: {
    name: "Uptime Pulse · 月付",
    description: "无限 uptime 监控、告警与状态页。",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getMonitorCopy(locale: Locale) {
  return monitorCopy[locale];
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
