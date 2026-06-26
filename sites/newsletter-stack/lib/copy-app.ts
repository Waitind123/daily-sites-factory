import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Newsletter Stack",
    subtitle: "One price, unlimited deep comparisons. No per-tool fees.",
    recommended: "Only plan",
    monthly: "Monthly member",
    perMonth: "/mo",
    vsCanny: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited newsletter tool deep comparisons",
      "Pricing history + feature matrix + migration guides",
      "True cost analysis (incl. platform cuts)",
      "Pricing change email alerts",
      "Affiliate codes & referral bonuses",
      "Request new tool comparisons",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free comparisons, then subscribe?",
    whyItems: [
      "Each report needs ongoing pricing & feature updates",
      "Migration guides and cost math are exclusive deep content",
      "Solo-maintained — $9.9/mo funds tracking 6+ platforms",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入 Newsletter 工具对比",
    subtitle: "一个价格，无限对比。没有按工具收费，没有隐藏费用。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCanny: "约 $0.33/天 · 随时取消",
    perks: [
      "无限 Newsletter 工具深度对比",
      "定价历史 + 功能矩阵 + 迁移指南",
      "真实成本计算（含平台抽成）",
      "定价变动邮件提醒",
      "联盟优惠码和推荐奖励",
      "新工具对比请求",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "每个工具对比报告需要持续更新定价和功能变动",
      "迁移指南和成本计算是独家深度内容",
      "一人维护，$9.9 才能持续追踪 6+ 平台变化",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const compareCopy = {
  en: {
    title: "Newsletter tool deep compare",
    subtitle: "Pick a tool for pricing, feature matrix, migration guide & true cost analysis",
    trialRemaining: "free deep comparisons left",
    subscribeCta: "Subscribe · $9.9/mo →",
    memberBadge: "✓ Member active · unlimited compares + affiliate codes + price alerts",
    allCategories: "All",
    deepCompare: "Deep compare →",
    loading: "Loading comparison report…",
    subscribeNow: "Subscribe · $9.9/mo",
    subscribeUnlock: "Subscribe for unlimited compares on all tools + affiliate codes",
    summaryTitle: "Comparison summary",
    updated: "Updated",
    model: "Model",
    fees: "Fees",
    prosTitle: "Pros",
    consTitle: "Cons",
    bestForTitle: "Best for",
    pricingHistoryTitle: "Pricing history",
    featureMatrixTitle: "Feature matrix",
    featureCol: "Feature",
    supportCol: "Support",
    noteCol: "Note",
    migrationTitle: "Migration guide",
    competitorsTitle: "Competitor notes",
    affiliateTitle: "Affiliate offer",
    migrationEasy: "Easy migrate",
    migrationMedium: "Medium",
    migrationHard: "Hard migrate",
  },
  zh: {
    title: "Newsletter 工具深度对比",
    subtitle: "选择工具查看定价、功能矩阵、迁移指南和真实成本分析",
    trialRemaining: "次免费深度对比",
    subscribeCta: "订阅 $9.9/月 →",
    memberBadge: "✓ 会员已激活 · 无限对比 + 联盟优惠码 + 定价变动提醒",
    allCategories: "全部",
    trialPrefix: "剩余",
    deepCompare: "深度对比 →",
    loading: "加载深度对比报告中...",
    subscribeNow: "订阅 $9.9/月",
    subscribeUnlock: "订阅解锁全部工具无限对比 + 联盟优惠码",
    summaryTitle: "对比摘要",
    updated: "更新",
    model: "模式",
    fees: "交易费",
    prosTitle: "优点",
    consTitle: "缺点",
    bestForTitle: "最适合",
    pricingHistoryTitle: "定价历史",
    featureMatrixTitle: "功能矩阵",
    featureCol: "功能",
    supportCol: "支持",
    noteCol: "备注",
    migrationTitle: "迁移指南",
    competitorsTitle: "竞品对比",
    affiliateTitle: "联盟优惠",
    migrationEasy: "易迁移",
    migrationMedium: "中等",
    migrationHard: "较难",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Newsletter Stack!",
    demoPaid: "Demo payment successful.",
    paidBody: "You're now a monthly member with unlimited deep comparisons.",
    order: "Order:",
    openCompare: "Start comparing",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入 Newsletter 工具对比！",
    demoPaid: "演示支付成功。",
    paidBody: "你已是月度会员，可无限深度对比全部工具。",
    order: "订单:",
    openCompare: "开始对比工具",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    TOOL_ID_REQUIRED: "Tool ID is required",
    TOOL_NOT_FOUND: "Tool not found",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe · $9.9/mo",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    TOOL_ID_REQUIRED: "缺少工具 ID",
    TOOL_NOT_FOUND: "工具不存在",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅 $9.9/月",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Newsletter Stack · Monthly",
    description: "Unlimited deep comparisons, migration guides, price alerts & affiliate codes.",
  },
  zh: {
    name: "Newsletter 工具对比 · 月付",
    description: "无限深度对比、迁移指南、定价变动提醒、联盟优惠码",
  },
} as const;

export const categoryLabels = {
  en: {
    all: "All",
    creator: "Creator platform",
    growth: "Growth platform",
    automation: "Marketing automation",
    legacy: "Legacy email",
    minimal: "Minimal writing",
    blog: "Blog + newsletter",
  },
  zh: {
    all: "全部",
    creator: "创作者平台",
    growth: "增长型平台",
    automation: "营销自动化",
    legacy: "传统邮件营销",
    minimal: "极简写作",
    blog: "博客+Newsletter",
  },
} as const;

export const categoryKeys = [
  "all",
  "creator",
  "growth",
  "automation",
  "legacy",
  "minimal",
  "blog",
] as const;

export const categoryKeyByZh: Record<string, (typeof categoryKeys)[number]> = {
  全部: "all",
  创作者平台: "creator",
  增长型平台: "growth",
  营销自动化: "automation",
  传统邮件营销: "legacy",
  极简写作: "minimal",
  "博客+Newsletter": "blog",
};

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getCompareCopy(locale: Locale) {
  return compareCopy[locale];
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

export function getCategoryLabel(locale: Locale, key: (typeof categoryKeys)[number]): string {
  return categoryLabels[locale][key];
}

export function getCategories(locale: Locale): string[] {
  return categoryKeys.map((k) => categoryLabels[locale][k]);
}
