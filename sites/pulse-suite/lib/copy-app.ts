import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Pulse Suite",
    subtitle: "One price — uptime monitoring and status pages together.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Statuspage $29 + UptimeRobot $7 · cancel anytime",
    perks: [
      "Unlimited URL uptime checks",
      "1-minute HTTP monitoring",
      "Public status pages with components",
      "Incident management & timeline",
      "Email subscriber notifications",
      "Single dashboard — no tool juggling",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free actions, then subscribe?",
    whyItems: [
      "HTTP checks and status page hosting cost real infrastructure",
      "Paying users = founders who ship products customers depend on",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅监控状态一体",
    subtitle: "一口价 — Uptime 监控与状态页合二为一。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Statuspage $29 + UptimeRobot $7 · 随时可取消",
    perks: [
      "无限 URL Uptime 检测",
      "1 分钟 HTTP 监控",
      "带组件的公开状态页",
      "事件管理与时间线",
      "邮件订阅者通知",
      "单一控制台 — 不用切换工具",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "HTTP 检测与状态页托管有真实基础设施成本",
      "付费用户 = 交付客户依赖产品的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Pulse Suite Dashboard",
    subtitle: "Monitor URLs and publish status pages — all in one place.",
    memberBadge: "✓ Member · unlimited actions",
    freeActions: "Free actions remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free actions. Subscribe for unlimited monitoring and status pages.",
    paywallCta: "Subscribe · $9.9/mo",
    tabMonitor: "Uptime Monitor",
    tabStatus: "Status Page",
    urlLabel: "URL to check",
    urlPlaceholder: "https://your-app.vercel.app",
    nameLabel: "Label (optional)",
    namePlaceholder: "API health check",
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
    sessionHistory: "Session history",
    emptyHistory: "Run a check above to see results here.",
    checkFailed: "Check failed",
    ms: "ms",
    pageName: "Product name",
    pageNamePlaceholder: "My SaaS",
    pageDesc: "Description (optional)",
    pageDescPlaceholder: "API, web app, and database status",
    creating: "Creating…",
    createPage: "Create status page",
    createdTitle: "Status page created!",
    yourPages: "Your status pages",
    postIncident: "Post incident",
    incidentTitle: "Incident title",
    incidentTitlePlaceholder: "API latency spike",
    incidentMessage: "Update message",
    incidentMessagePlaceholder: "We are investigating increased API response times.",
    posting: "Posting…",
    postUpdate: "Post update",
    resolve: "Resolve",
    investigating: "Investigating",
    resolved: "Resolved",
    noIncidents: "No incidents reported.",
    components: "Component status",
    operational: "Operational",
    degraded: "Degraded",
    down: "Down",
    subscribers: "subscribers",
    publicUrl: "Public URL",
  },
  zh: {
    title: "监控状态一体控制台",
    subtitle: "检测 URL 并发布状态页 — 一站搞定。",
    memberBadge: "✓ 会员 · 操作不限量",
    freeActions: "剩余免费次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费操作。订阅后可无限监控与创建状态页。",
    paywallCta: "订阅 · $9.9/月",
    tabMonitor: "Uptime 监控",
    tabStatus: "状态页",
    urlLabel: "要检测的 URL",
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
    checkFailed: "检测失败",
    ms: "毫秒",
    pageName: "产品名称",
    pageNamePlaceholder: "我的 SaaS",
    pageDesc: "描述（可选）",
    pageDescPlaceholder: "API、Web 应用与数据库状态",
    creating: "创建中…",
    createPage: "创建状态页",
    createdTitle: "状态页已创建！",
    yourPages: "你的状态页",
    postIncident: "发布事件",
    incidentTitle: "事件标题",
    incidentTitlePlaceholder: "API 延迟升高",
    incidentMessage: "更新说明",
    incidentMessagePlaceholder: "我们正在调查 API 响应时间升高的问题。",
    posting: "发布中…",
    postUpdate: "发布更新",
    resolve: "标记已解决",
    investigating: "调查中",
    resolved: "已解决",
    noIncidents: "暂无事件报告。",
    components: "组件状态",
    operational: "正常",
    degraded: "降级",
    down: "故障",
    subscribers: "位订阅者",
    publicUrl: "公开链接",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Pulse Suite!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited monitoring and status pages.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用监控状态一体！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限监控与创建状态页。",
    order: "订单号：",
    openDashboard: "打开控制台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    URL_REQUIRED: "URL is required",
    PAGE_NAME_REQUIRED: "Product name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CHECK_FAILED: "Check failed, please retry",
    PAGE_CREATE_FAILED: "Failed to create status page",
    PAGE_NOT_FOUND: "Status page not found",
    INCIDENT_TITLE_REQUIRED: "Incident title is required",
    INCIDENT_CREATE_FAILED: "Failed to post incident",
    INCIDENT_NOT_FOUND: "Incident not found",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    URL_REQUIRED: "请填写 URL",
    PAGE_NAME_REQUIRED: "请填写产品名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    CHECK_FAILED: "检测失败，请稍后重试",
    PAGE_CREATE_FAILED: "创建状态页失败",
    PAGE_NOT_FOUND: "状态页不存在",
    INCIDENT_TITLE_REQUIRED: "请填写事件标题",
    INCIDENT_CREATE_FAILED: "发布事件失败",
    INCIDENT_NOT_FOUND: "事件不存在",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Pulse Suite · Monthly",
    description: "Unlimited uptime monitoring, status pages & incident management.",
  },
  zh: {
    name: "监控状态一体 · 月付",
    description: "无限 Uptime 监控、状态页与事件管理。",
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
