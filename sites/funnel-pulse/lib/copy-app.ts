import type { Locale } from "./i18n-shared";

export const sampleFunnelsCopy = {
  en: [
    { name: "SaaS signup", steps: ["Landing", "Signup", "Activation", "Paid"], counts: [2400, 1680, 840, 336], leak: 1 },
    { name: "Onboarding", steps: ["Welcome", "Profile", "First action", "Invite"], counts: [1200, 960, 480, 192], leak: 2 },
    { name: "Checkout", steps: ["Cart", "Shipping", "Payment", "Confirm"], counts: [800, 720, 540, 486], leak: 2 },
  ],
  zh: [
    { name: "SaaS 注册", steps: ["落地页", "注册", "激活", "付费"], counts: [2400, 1680, 840, 336], leak: 1 },
    { name: "新手引导", steps: ["欢迎页", "完善资料", "首次操作", "邀请好友"], counts: [1200, 960, 480, 192], leak: 2 },
    { name: "结账流程", steps: ["购物车", "填写地址", "支付", "确认"], counts: [800, 720, 540, 486], leak: 2 },
  ],
};

export const funnelsCopy = {
  en: {
    title: "Funnel Analytics",
    subtitle: "Define steps, track events, see where users drop off.",
    memberBadge: "✓ Member · unlimited funnels",
    freeFunnels: "Free funnels:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 funnels. Subscribe for unlimited funnels, drop-off charts, and leak detection.",
    paywallCta: "Subscribe · $9.9/mo",
    formTitle: "New funnel",
    funnelName: "Funnel name",
    funnelNamePlaceholder: "e.g. SaaS signup flow",
    steps: "Steps (comma-separated)",
    stepsPlaceholder: "e.g. Landing, Signup, Activation, Payment",
    creating: "Creating…",
    createFunnel: "Create funnel",
    createdTitle: "Funnel created!",
    createdHint: "Share this dashboard link and track events with:",
    snippetLabel: "Event tracking (POST to /api/events):",
    openFunnel: "Open dashboard →",
    yourFunnels: "Your funnels",
    exampleTitle: "Example funnel results",
    leakBadge: "Biggest leak",
    users: "users",
    dropOff: "drop-off",
    overallConv: "Overall conv.",
  },
  zh: {
    title: "漏斗分析",
    subtitle: "定义步骤、追踪事件、看清用户在哪一步流失。",
    memberBadge: "✓ 会员 · 漏斗不限量",
    freeFunnels: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 个漏斗。订阅后可无限创建、流失图表与漏洞检测。",
    paywallCta: "订阅 · $9.9/月",
    formTitle: "新建漏斗",
    funnelName: "漏斗名称",
    funnelNamePlaceholder: "例如：SaaS 注册流程",
    steps: "步骤（逗号分隔）",
    stepsPlaceholder: "例如：落地页, 注册, 激活, 付费",
    creating: "创建中…",
    createFunnel: "创建漏斗",
    createdTitle: "漏斗已创建！",
    createdHint: "分享以下看板链接，并用以下方式追踪事件：",
    snippetLabel: "事件追踪（POST 到 /api/events）：",
    openFunnel: "打开看板 →",
    yourFunnels: "你的漏斗",
    exampleTitle: "示例漏斗结果",
    leakBadge: "最大漏洞",
    users: "用户",
    dropOff: "流失",
    overallConv: "总转化率",
  },
} as const;

export const publicFunnelCopy = {
  en: {
    poweredBy: "Powered by Funnel Pulse · funnel analytics for indie hackers",
    step: "Step",
    users: "Users",
    rate: "Conv. rate",
    dropOff: "Drop-off",
    recordEvent: "Simulate event",
    biggestLeak: "Biggest leak",
    noLeak: "Not enough data yet",
    overallConv: "Overall conversion",
    steps: "Steps",
  },
  zh: {
    poweredBy: "由 Funnel Pulse 提供 · 独立开发者漏斗分析",
    step: "步骤",
    users: "用户数",
    rate: "转化率",
    dropOff: "流失率",
    recordEvent: "模拟事件",
    biggestLeak: "最大漏洞",
    noLeak: "数据不足",
    overallConv: "总转化率",
    steps: "步骤",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Funnel Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited funnels and drop-off analytics.",
    order: "Order:",
    openFunnels: "Open funnels",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Funnel Pulse！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建漏斗并分析流失。",
    order: "订单号：",
    openFunnels: "打开漏斗看板",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    FUNNEL_NAME_REQUIRED: "Funnel name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    FUNNEL_CREATE_FAILED: "Failed to create funnel",
    FUNNEL_NOT_FOUND: "Funnel not found",
    STEPS_REQUIRED: "At least 2 steps are required",
    EVENT_RECORD_FAILED: "Failed to record event",
    INVALID_STEP: "Invalid step index",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    FUNNEL_NAME_REQUIRED: "请填写漏斗名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    FUNNEL_CREATE_FAILED: "创建漏斗失败",
    FUNNEL_NOT_FOUND: "漏斗不存在",
    STEPS_REQUIRED: "至少需要 2 个步骤",
    EVENT_RECORD_FAILED: "记录事件失败",
    INVALID_STEP: "无效的步骤索引",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Funnel Pulse · Monthly",
    description: "Unlimited funnels, drop-off charts & leak detection.",
  },
  zh: {
    name: "Funnel Pulse · 月付",
    description: "无限漏斗、流失图表与漏洞检测。",
  },
} as const;

export function getFunnelsCopy(locale: Locale) {
  return funnelsCopy[locale];
}

export function getPublicFunnelCopy(locale: Locale) {
  return publicFunnelCopy[locale];
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

export function getSampleFunnels(locale: Locale) {
  return sampleFunnelsCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
