import type { Locale } from "./i18n-shared";
import type { ToolCategory } from "./data";

export const joinCopy = {
  en: {
    title: "Join Indie Tools",
    subtitle: "One price, all deep reviews. No free tier, no hidden fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited deep tool reviews",
      "40+ curated indie tools (growing)",
      "Pricing comparison + alternatives",
      "Indie score + scenario-based picks",
      "5-minute setup checklists",
      "Organized by stack category",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free reviews, then subscribe?",
    whyItems: [
      "Each deep review takes 1–2 hours of hands-on testing and pricing verification",
      "Paying users = serious builders picking a stack, not bookmark hoarders",
      "Solo-maintained — $9.9 keeps updates sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入独立开发者工具箱",
    subtitle: "一个价格，全部深度评测。没有免费档，没有隐藏费用。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限深度工具评测",
      "40+ 精选 indie 工具（持续增长）",
      "定价对比 + 替代方案",
      "Indie 评分 + 选型建议",
      "5 分钟接入 checklist",
      "按场景分类（支付/邮件/托管等）",
    ],
    subscribe: "立即订阅 · $9.9/月",
    demoNote: "演示模式：未配置 Stripe 密钥，点击支付将模拟成功",
    checkoutNote: "Stripe 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "每个深度评测需要 1-2 小时实测和定价核实",
      "付费用户 = 认真选技术栈的 builder，不是随便收藏",
      "一人维护，$9.9 才能持续更新新工具",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const toolsCopy = {
  en: {
    title: "Indie developer tool directory",
    subtitle:
      'Click "Deep review" for pricing comparisons, alternatives & setup guides. 5 free tries.',
    trialRemaining: "free deep reviews remaining",
    subscribeUnlock: "Subscribe $9.9/mo →",
    memberActive: "✓ Member active · unlimited deep reviews",
    deepReview: "Deep review →",
    loading: "Loading deep review...",
    loadFailed: "load_failed",
    subscribeCta: "Subscribe $9.9/mo now",
    subscribeUpsell: "Like these reviews? Subscribe to unlock all",
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
    statsTools: "Curated tools",
    statsCategories: "Categories",
    statsAvgScore: "Avg score",
    indieScore: "Indie",
  },
  zh: {
    title: "独立开发者工具目录",
    subtitle: "点击「深度评测」查看定价对比、替代方案、接入指南。免费体验 5 次。",
    trialRemaining: "次免费深度评测",
    subscribeUnlock: "订阅 $9.9/月 →",
    memberActive: "✓ 会员已激活 · 无限查阅深度评测",
    deepReview: "深度评测 →",
    loading: "加载深度评测中...",
    loadFailed: "load_failed",
    subscribeCta: "立即订阅 $9.9/月",
    subscribeUpsell: "喜欢这种评测？订阅解锁全部",
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
    reviewSetup: "接入步骤",
    reviewVerdict: "结论",
    statsTools: "精选工具",
    statsCategories: "分类",
    statsAvgScore: "平均评分",
    indieScore: "Indie",
  },
} as const;

export const categoryLabels: Record<Locale, Record<ToolCategory | "all", string>> = {
  en: {
    all: "All",
    payments: "Payments",
    email: "Email",
    hosting: "Hosting",
    auth: "Auth",
    analytics: "Analytics",
    database: "Database",
  },
  zh: {
    all: "全部",
    payments: "支付",
    email: "邮件",
    hosting: "托管",
    auth: "认证",
    analytics: "分析",
    database: "数据库",
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
    title: "Welcome to Indie Tools!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited deep reviews.",
    order: "Order:",
    openTools: "Browse tool directory",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入独立开发者工具箱！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是月度会员，可无限查阅全部深度评测。",
    order: "订单:",
    openTools: "浏览工具目录",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Indie Tools · Monthly",
    description: "Curated indie tool reviews, pricing comparisons & setup guides.",
  },
  zh: {
    name: "独立开发者工具箱 · 月度会员",
    description: "精选 indie 工具深度评测、定价对比、替代方案与选型建议",
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
