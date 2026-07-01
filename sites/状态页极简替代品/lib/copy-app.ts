import type { Locale } from "./i18n-shared";

export const pagesCopy = {
  en: {
    title: "Status Pages",
    subtitle: "Create a public status page, post incidents, notify subscribers when things break.",
    memberBadge: "✓ Member · unlimited status pages",
    freePages: "Free status pages:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 status pages. Subscribe for unlimited pages, incidents, and email subscribers.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "New status page",
    pageName: "Product name",
    pageNamePlaceholder: "e.g. My SaaS",
    description: "Tagline",
    descriptionPlaceholder: "What does your product do? (optional)",
    creating: "Creating…",
    createPage: "Create status page",
    createdTitle: "Status page created!",
    createdHint: "Share this public status page:",
    openPage: "Open status page →",
    yourPages: "Your status pages",
    subscribers: "subscribers",
    postIncident: "Post incident",
    incidentTitle: "Incident title",
    incidentTitlePlaceholder: "e.g. API latency spike",
    incidentMessage: "Update message",
    incidentMessagePlaceholder: "We're investigating elevated API response times…",
    posting: "Posting…",
    postUpdate: "Post update",
    resolve: "Mark resolved",
    activeIncidents: "Active incidents",
    noIncidents: "No active incidents — all systems operational",
  },
  zh: {
    title: "状态页管理",
    subtitle: "创建公开状态页，发布事件，故障时通知订阅者。",
    memberBadge: "✓ 会员 · 状态页不限量",
    freePages: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 个状态页。订阅后可无限创建、发布事件并通知邮件订阅者。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "新建状态页",
    pageName: "产品名称",
    pageNamePlaceholder: "例如：我的 SaaS",
    description: "一句话介绍",
    descriptionPlaceholder: "你的产品做什么？（可选）",
    creating: "创建中…",
    createPage: "创建状态页",
    createdTitle: "状态页已创建！",
    createdHint: "分享以下公开状态页：",
    openPage: "打开状态页 →",
    yourPages: "你的状态页",
    subscribers: "位订阅者",
    postIncident: "发布事件",
    incidentTitle: "事件标题",
    incidentTitlePlaceholder: "例如：API 延迟升高",
    incidentMessage: "更新说明",
    incidentMessagePlaceholder: "我们正在调查 API 响应时间升高的问题…",
    posting: "发布中…",
    postUpdate: "发布更新",
    resolve: "标记已解决",
    activeIncidents: "进行中的事件",
    noIncidents: "无进行中事件 — 所有系统正常",
  },
} as const;

export const publicStatusCopy = {
  en: {
    poweredBy: "Powered by Status Lite · subscribe for updates",
    allOperational: "All Systems Operational",
    degraded: "Partial System Outage",
    down: "Major System Outage",
    subscribeTitle: "Get email updates",
    emailPlaceholder: "you@email.com",
    submitting: "Subscribing…",
    subscribeCta: "Subscribe",
    subscribed: "You're subscribed! We'll email you when status changes.",
    alreadySubscribed: "You're already subscribed.",
    components: "Components",
    operational: "Operational",
    degradedStatus: "Degraded",
    downStatus: "Down",
    incidents: "Recent incidents",
    resolved: "Resolved",
    investigating: "Investigating",
    noIncidents: "No incidents reported.",
  },
  zh: {
    poweredBy: "由极简状态页提供 · 订阅状态更新",
    allOperational: "所有系统运行正常",
    degraded: "部分系统异常",
    down: "重大系统故障",
    subscribeTitle: "订阅邮件更新",
    emailPlaceholder: "you@email.com",
    submitting: "订阅中…",
    subscribeCta: "订阅",
    subscribed: "订阅成功！状态变化时我们会发邮件通知你。",
    alreadySubscribed: "你已订阅此状态页。",
    components: "组件状态",
    operational: "正常",
    degradedStatus: "降级",
    downStatus: "故障",
    incidents: "近期事件",
    resolved: "已解决",
    investigating: "调查中",
    noIncidents: "暂无事件报告。",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Status Lite!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited status pages, incidents, and email subscribers.",
    order: "Order:",
    openPages: "Open status pages",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用极简状态页！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建状态页、发布事件并通知邮件订阅者。",
    order: "订单号：",
    openPages: "打开状态页",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    PAGE_NAME_REQUIRED: "Product name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    PAGE_CREATE_FAILED: "Failed to create status page",
    PAGE_NOT_FOUND: "Status page not found",
    EMAIL_REQUIRED: "Email is required",
    SUBSCRIBE_FAILED: "Failed to subscribe",
    INCIDENT_TITLE_REQUIRED: "Incident title is required",
    INCIDENT_CREATE_FAILED: "Failed to post incident",
    INCIDENT_NOT_FOUND: "Incident not found",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    PAGE_NAME_REQUIRED: "请填写产品名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    PAGE_CREATE_FAILED: "创建状态页失败",
    PAGE_NOT_FOUND: "状态页不存在",
    EMAIL_REQUIRED: "请填写邮箱",
    SUBSCRIBE_FAILED: "订阅失败",
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
    name: "Status Lite · Monthly",
    description: "Unlimited status pages, incidents & email subscribers. Public status pages.",
  },
  zh: {
    name: "极简状态页 · 月付",
    description: "无限状态页、事件与邮件订阅者。公开状态页。",
  },
} as const;

export function getPagesCopy(locale: Locale) {
  return pagesCopy[locale];
}

export function getPublicStatusCopy(locale: Locale) {
  return publicStatusCopy[locale];
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
