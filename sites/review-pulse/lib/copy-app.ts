import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Review Pulse",
    subtitle: "One price, unlimited SMS review campaigns.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Podium $399+/mo · cancel anytime",
    perks: [
      "Unlimited SMS review requests",
      "Direct Google review link builder",
      "2-hour post-service auto-schedule",
      "Follow-up reminders for non-responders",
      "Campaign dashboard with conversion stats",
      "TCPA-compliant message templates",
    ],
    subscribe: "Subscribe · $19/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free sends, then subscribe?",
    whyItems: [
      "SMS delivery and campaign tracking cost real infrastructure",
      "Paying users = businesses that actually serve customers daily",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 Google 评价自动索取",
    subtitle: "一口价，短信评价活动不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Podium $399+/月 · 随时可取消",
    perks: [
      "无限短信评价请求",
      "Google 评价直达链接生成",
      "服务后 2 小时自动排期",
      "未回复客户跟进提醒",
      "带转化数据的活动控制台",
      "符合 TCPA 的短信模板",
    ],
    subscribe: "订阅 · $19/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次发送，之后订阅？",
    whyItems: [
      "短信发送与活动追踪有真实基础设施成本",
      "付费用户 = 每天真正服务客户的本地商家",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const campaignsCopy = {
  en: {
    title: "Review Campaigns",
    subtitle: "Send SMS review requests with direct Google links after every job.",
    memberBadge: "✓ Member · unlimited sends",
    freeSyncs: "Free SMS sends remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've sent 5 free SMS review requests. Subscribe for unlimited campaigns, follow-ups, and tracking.",
    paywallCta: "Subscribe · $19/mo",
    createTitle: "New review request",
    businessName: "Business name",
    businessNamePlaceholder: "Mike's Auto Detail",
    customerName: "Customer name",
    customerNamePlaceholder: "John Smith",
    customerPhone: "Customer phone",
    customerPhonePlaceholder: "+1 (555) 123-4567",
    googleReviewUrl: "Google review link",
    googleReviewUrlPlaceholder: "https://g.page/r/.../review",
    serviceName: "Service performed (optional)",
    serviceNamePlaceholder: "Full detail wash",
    creating: "Sending…",
    sendSms: "Send SMS review request",
    createdTitle: "SMS sent!",
    createdHint: "Review request delivered. Customer can tap the link to leave a Google review.",
    smsPreview: "SMS preview",
    yourCampaigns: "Your campaigns",
    statusSent: "Sent",
    statusReviewed: "Reviewed",
    statusPending: "Pending",
    copySms: "Copy SMS text",
    copied: "Copied!",
    sentCount: "Sent",
    reviewedCount: "Reviewed",
    conversionRate: "Conversion",
    totalCampaigns: "Campaigns",
    markReviewed: "Mark reviewed",
    markingReviewed: "Processing…",
    reviewedTitle: "Review recorded!",
    reviewedHint: "Great — this customer left a Google review.",
  },
  zh: {
    title: "评价活动控制台",
    subtitle: "每次服务后发送带 Google 直达链接的短信评价请求。",
    memberBadge: "✓ 会员 · 发送不限量",
    freeSyncs: "剩余免费发送次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已发送 5 次免费短信评价请求。订阅后可无限发送、跟进与追踪。",
    paywallCta: "订阅 · $19/月",
    createTitle: "新建评价请求",
    businessName: "商家名称",
    businessNamePlaceholder: "Mike 汽车美容",
    customerName: "客户姓名",
    customerNamePlaceholder: "张三",
    customerPhone: "客户手机",
    customerPhonePlaceholder: "+86 138 0000 0000",
    googleReviewUrl: "Google 评价链接",
    googleReviewUrlPlaceholder: "https://g.page/r/.../review",
    serviceName: "服务项目（可选）",
    serviceNamePlaceholder: "全车精洗",
    creating: "发送中…",
    sendSms: "发送短信评价请求",
    createdTitle: "短信已发送！",
    createdHint: "评价请求已送达。客户可点击链接留下 Google 评价。",
    smsPreview: "短信预览",
    yourCampaigns: "你的活动",
    statusSent: "已发送",
    statusReviewed: "已评价",
    statusPending: "待评价",
    copySms: "复制短信内容",
    copied: "已复制！",
    sentCount: "已发送",
    reviewedCount: "已评价",
    conversionRate: "转化率",
    totalCampaigns: "活动数",
    markReviewed: "标记已评价",
    markingReviewed: "处理中…",
    reviewedTitle: "已记录评价！",
    reviewedHint: "太好了 — 这位客户已留下 Google 评价。",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Review Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited SMS review campaigns and tracking.",
    order: "Order:",
    openDashboard: "Open campaigns",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Google 评价自动索取！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限发送短信评价活动并追踪转化。",
    order: "订单号：",
    openDashboard: "打开活动",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    BUSINESS_NAME_REQUIRED: "Business name is required",
    CUSTOMER_NAME_REQUIRED: "Customer name is required",
    CUSTOMER_PHONE_REQUIRED: "Customer phone is required",
    CUSTOMER_PHONE_INVALID: "Please enter a valid phone number",
    GOOGLE_URL_REQUIRED: "Google review link is required",
    GOOGLE_URL_INVALID: "Please enter a valid Google review URL",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    REQUEST_NOT_FOUND: "Campaign not found",
    REQUEST_CREATE_FAILED: "Failed to send review request",
    REQUEST_UPDATE_FAILED: "Failed to update campaign",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    BUSINESS_NAME_REQUIRED: "请填写商家名称",
    CUSTOMER_NAME_REQUIRED: "请填写客户姓名",
    CUSTOMER_PHONE_REQUIRED: "请填写客户手机",
    CUSTOMER_PHONE_INVALID: "请输入有效的手机号码",
    GOOGLE_URL_REQUIRED: "请填写 Google 评价链接",
    GOOGLE_URL_INVALID: "请输入有效的 Google 评价链接",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    REQUEST_NOT_FOUND: "活动不存在",
    REQUEST_CREATE_FAILED: "发送评价请求失败",
    REQUEST_UPDATE_FAILED: "更新活动失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Review Pulse · Monthly",
    description: "Unlimited SMS Google review campaigns & tracking.",
  },
  zh: {
    name: "Google 评价自动索取 · 月付",
    description: "无限短信 Google 评价活动与转化追踪。",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getCampaignsCopy(locale: Locale) {
  return campaignsCopy[locale];
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
