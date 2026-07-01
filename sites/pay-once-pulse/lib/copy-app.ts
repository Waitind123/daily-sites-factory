import type { Locale } from "./i18n-shared";
import type { ToolCategory } from "./data";

export const joinCopy = {
  en: {
    title: "Join PayOnce Pulse",
    subtitle: "One price, all pay-once alternatives. No free tier, no hidden fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited deep lookups",
      "12+ pay-once & self-hostable tools (growing)",
      "Annual savings calculator vs subscriptions",
      "Migration guides + Docker setup steps",
      "Lifetime deal alerts",
      "Organized by SaaS category",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free lookups, then subscribe?",
    whyItems: [
      "Each deep lookup includes hands-on migration research and savings math",
      "Paying users = serious builders escaping subscriptions, not bookmark hoarders",
      "Solo-maintained — $9.9 keeps the directory updated with new LTDs",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入一次性买断工具目录",
    subtitle: "一个价格，全部买断替代品。没有免费档，没有隐藏费用。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限深度查询",
      "12+ 买断与自托管工具（持续增长）",
      "年订阅费用对比与省钱计算",
      "迁移指南 + Docker 部署步骤",
      "终身 Deal 上新提醒",
      "按 SaaS 分类整理",
    ],
    subscribe: "立即订阅 · $9.9/月",
    demoNote: "演示模式：未配置 Stripe 密钥，点击支付将模拟成功",
    checkoutNote: "Stripe 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "每次深度查询需要实测迁移方案和省钱计算",
      "付费用户 = 认真逃离订阅的 builder，不是随便收藏",
      "一人维护，$9.9 才能持续更新新 LTD 和买断产品",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const toolsCopy = {
  en: {
    title: "Pay-once SaaS alternatives directory",
    subtitle:
      'Click "Deep lookup" for savings math, migration guides & setup steps. 5 free tries.',
    trialRemaining: "free deep lookups remaining",
    subscribeUnlock: "Subscribe $9.9/mo →",
    memberActive: "✓ Member active · unlimited deep lookups",
    deepReview: "Deep lookup →",
    loading: "Loading deep lookup...",
    loadFailed: "load_failed",
    subscribeCta: "Subscribe $9.9/mo now",
    subscribeUpsell: "Like these lookups? Subscribe to unlock all",
    subscribeButton: "Subscribe $9.9/mo",
    close: "×",
    reviewSummary: "Summary",
    reviewBestFor: "Best for",
    reviewPricing: "Pricing details",
    reviewAlternatives: "Alternatives",
    altTool: "Tool",
    altPricing: "Pricing",
    altWhen: "When to pick",
    reviewPros: "Pros",
    reviewCons: "Cons",
    reviewSetup: "Setup steps",
    reviewVerdict: "Verdict",
    statsTools: "Pay-once tools",
    statsCategories: "Categories",
    statsAvgScore: "Avg score",
    indieScore: "Save",
  },
  zh: {
    title: "一次性买断 SaaS 替代品目录",
    subtitle: "点击「深度查询」查看省钱计算、迁移指南、部署步骤。免费体验 5 次。",
    trialRemaining: "次免费深度查询",
    subscribeUnlock: "订阅 $9.9/月 →",
    memberActive: "✓ 会员已激活 · 无限查阅深度查询",
    deepReview: "深度查询 →",
    loading: "加载深度查询中...",
    loadFailed: "load_failed",
    subscribeCta: "立即订阅 $9.9/月",
    subscribeUpsell: "喜欢这些查询？订阅解锁全部",
    subscribeButton: "订阅 $9.9/月",
    close: "×",
    reviewSummary: "综述",
    reviewBestFor: "最适合",
    reviewPricing: "定价详情",
    reviewAlternatives: "替代方案",
    altTool: "工具",
    altPricing: "定价",
    altWhen: "何时选择",
    reviewPros: "优点",
    reviewCons: "缺点",
    reviewSetup: "部署步骤",
    reviewVerdict: "结论",
    statsTools: "买断工具",
    statsCategories: "分类",
    statsAvgScore: "平均评分",
    indieScore: "省钱",
  },
} as const;

export const categoryLabels: Record<Locale, Record<ToolCategory | "all", string>> = {
  en: {
    all: "All",
    "project-management": "Project Mgmt",
    forms: "Forms",
    feedback: "Feedback",
    analytics: "Analytics",
    invoicing: "Invoicing",
    docs: "Docs",
    monitoring: "Monitoring",
  },
  zh: {
    all: "全部",
    "project-management": "项目管理",
    forms: "表单",
    feedback: "反馈",
    analytics: "分析",
    invoicing: "发票/预约",
    docs: "文档",
    monitoring: "监控",
  },
};

export const apiErrorCopy = {
  en: {
    MISSING_TOOL_ID: "Missing toolId",
    TOOL_NOT_FOUND: "Tool not found",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    MISSING_TOOL_ID: "缺少 toolId",
    TOOL_NOT_FOUND: "工具不存在",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const successCopy = {
  en: {
    title: "Welcome to PayOnce Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited deep lookups.",
    order: "Order:",
    openTools: "Browse directory",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入一次性买断工具目录！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是月度会员，可无限查阅全部深度查询。",
    order: "订单:",
    openTools: "浏览买断目录",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "PayOnce Pulse · Monthly",
    description: "Pay-once SaaS alternatives directory with savings math & migration guides.",
  },
  zh: {
    name: "一次性买断工具目录 · 月度会员",
    description: "订阅制 SaaS 买断替代品目录，含省钱计算与迁移指南",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getToolsCopy(locale: Locale) {
  return toolsCopy[locale];
}

export function getCategoryLabel(locale: Locale, key: ToolCategory | "all") {
  return categoryLabels[locale][key];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  if (code && code in apiErrorCopy[locale]) {
    return apiErrorCopy[locale][code as ApiErrorCode];
  }
  return apiErrorCopy[locale].GENERIC;
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
