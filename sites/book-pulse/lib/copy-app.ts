import type { Locale } from "./i18n-shared";

export const dashboardCopy = {
  en: {
    title: "Booking Page Dashboard",
    subtitle: "Create indie scheduling pages, publish your /b/slug link, share on your homepage.",
    memberBadge: "✓ Member · unlimited publishes",
    freePublishes: "Free publishes remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free publishes. Subscribe for unlimited booking pages, embed widgets, and custom slugs.",
    paywallCta: "Subscribe · $29/mo",
    createTitle: "New booking page",
    displayName: "Your name",
    displayNamePlaceholder: "e.g. Alex Chen",
    projectLabel: "Current project",
    projectPlaceholder: "e.g. Building a Stripe metrics tool",
    bioLabel: "Short bio",
    bioPlaceholder: "What should visitors know before booking?",
    timezoneLabel: "Time zone",
    timezonePlaceholder: "e.g. UTC+8 or America/Los_Angeles",
    creating: "Creating…",
    createPage: "Create draft page",
    draftTitle: "Draft ready — publish to go live",
    draftHint: "Publishing uses one free trial credit. Your public link will be /b/your-slug.",
    buildingLabel: "Building:",
    slotsPreview: "Default slots",
    publishNow: "Publish page",
    publishing: "Publishing…",
    liveBadge: "Live booking page",
    publicLink: "Public link",
    previewPage: "Preview page",
    yourPages: "Your pages",
    statusLive: "Live",
    statusDraft: "Draft — not published",
  },
  zh: {
    title: "预约页仪表盘",
    subtitle: "创建独立开发者预约页，发布 /b/链接，嵌入首页分享。",
    memberBadge: "✓ 会员 · 发布不限量",
    freePublishes: "剩余免费发布次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费发布。订阅后可无限预约页、嵌入小部件和自定义链接。",
    paywallCta: "订阅 · $29/月",
    createTitle: "新建预约页",
    displayName: "你的名字",
    displayNamePlaceholder: "例如：陈伟",
    projectLabel: "当前项目",
    projectPlaceholder: "例如：正在做 Stripe 指标工具",
    bioLabel: "简短简介",
    bioPlaceholder: "访客预约前需要了解什么？",
    timezoneLabel: "时区",
    timezonePlaceholder: "例如：UTC+8 或 America/Los_Angeles",
    creating: "创建中…",
    createPage: "创建草稿",
    draftTitle: "草稿就绪 — 发布即可上线",
    draftHint: "发布消耗 1 次免费额度。公开链接为 /b/你的别名。",
    buildingLabel: "正在做：",
    slotsPreview: "默认时段",
    publishNow: "发布预约页",
    publishing: "发布中…",
    liveBadge: "预约页已上线",
    publicLink: "公开链接",
    previewPage: "预览页面",
    yourPages: "你的预约页",
    statusLive: "已上线",
    statusDraft: "草稿 — 未发布",
  },
} as const;

export const publicBookingCopy = {
  en: {
    notFound: "Booking page not found",
    notFoundHint: "This link may be expired or not published yet.",
    backDashboard: "Create your own page",
    buildingLabel: "Building:",
    duration: "min coffee chat",
    timezone: "Timezone",
    available: "available",
    bookSlot: "Book",
    booked: "Request sent!",
    bookedHint: "Demo mode — in production you'd receive a calendar invite.",
  },
  zh: {
    notFound: "预约页不存在",
    notFoundHint: "链接可能已过期或尚未发布。",
    backDashboard: "创建你自己的预约页",
    buildingLabel: "正在做：",
    duration: "分钟咖啡聊",
    timezone: "时区",
    available: "可预约",
    bookSlot: "预约",
    booked: "预约请求已发送！",
    bookedHint: "演示模式 — 生产环境你会收到日历邀请。",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Book Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited booking page publishes and embed widgets.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Book Pulse！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限发布预约页并使用嵌入小部件。",
    order: "订单号：",
    openDashboard: "打开仪表盘",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    PAGE_NAME_REQUIRED: "Name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    PAGE_NOT_FOUND: "Booking page not found",
    BOOKING_PUBLISH_FAILED: "Failed to publish booking page",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    PAGE_NAME_REQUIRED: "请填写姓名",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    PAGE_NOT_FOUND: "预约页不存在",
    BOOKING_PUBLISH_FAILED: "发布预约页失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Book Pulse · Monthly",
    description: "Unlimited booking pages, time zone sync & embed widgets.",
  },
  zh: {
    name: "Book Pulse · 月付",
    description: "无限预约页、时区同步与嵌入小部件。",
  },
} as const;

export function getDashboardCopy(locale: Locale) {
  return dashboardCopy[locale];
}

export function getPublicBookingCopy(locale: Locale) {
  return publicBookingCopy[locale];
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
