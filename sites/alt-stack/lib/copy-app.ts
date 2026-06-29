import type { Locale } from "./i18n-shared";
import type { ToolCategory } from "./data";

export const joinCopy = {
  en: {
    title: "Join Alt Stack",
    subtitle: "One price, all deep dives + Docker configs. No free tier, no hidden fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited deep alternative reviews",
      "50+ curated open-source tools (growing)",
      "Docker Compose deployment configs",
      "Savings vs proprietary SaaS breakdown",
      "Sovereignty score + migration guides",
      "Pre-built stack bundles (Bootstrapper, Privacy, etc.)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free dives, then subscribe?",
    whyItems: [
      "Each deep dive takes 2+ hours of self-host testing and Docker config verification",
      "Paying users = serious builders migrating their stack, not bookmark hoarders",
      "Solo-maintained — $9.9 keeps the directory updated as tools evolve",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入 Alt Stack",
    subtitle: "一个价格，全部深度查阅 + Docker 配置。没有免费档，没有隐藏费用。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限深度替代品查阅",
      "50+ 精选开源工具（持续增长）",
      "Docker Compose 部署配置",
      "对比闭源 SaaS 节省计算",
      "主权评分 + 迁移指南",
      "预置技术栈（Bootstrapper、隐私栈等）",
    ],
    subscribe: "立即订阅 · $9.9/月",
    demoNote: "演示模式：未配置 Stripe 密钥，点击支付将模拟成功",
    checkoutNote: "Stripe 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "每个深度查阅需要 2+ 小时自托管实测和 Docker 配置验证",
      "付费用户 = 认真迁移技术栈的 builder，不是随便收藏",
      "一人维护，$9.9 才能持续更新目录",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const toolsCopy = {
  en: {
    title: "Open-source SaaS alternatives directory",
    subtitle:
      'Click "Deep dive" for Docker configs, savings vs proprietary & self-host guides. 5 free tries.',
    trialRemaining: "free deep dives remaining",
    subscribeUnlock: "Subscribe $9.9/mo →",
    memberActive: "✓ Member active · unlimited deep dives",
    deepReview: "Deep dive →",
    loading: "Loading deep dive...",
    loadFailed: "load_failed",
    subscribeCta: "Subscribe $9.9/mo now",
    subscribeUpsell: "Like these guides? Subscribe to unlock all",
    subscribeButton: "Subscribe $9.9/mo",
    close: "×",
    reviewSummary: "Summary",
    reviewBestFor: "Best for",
    reviewPricing: "Pricing & savings",
    reviewAlternatives: "Proprietary alternatives",
    altTool: "Tool",
    altPricing: "Pricing",
    altWhen: "When to pick",
    reviewPros: "Pros",
    reviewCons: "Cons",
    reviewSetup: "Self-host steps",
    reviewVerdict: "Verdict",
    statsTools: "Alternatives",
    statsCategories: "Categories",
    statsAvgScore: "Avg score",
    indieScore: "Score",
  },
  zh: {
    title: "开源 SaaS 替代品目录",
    subtitle: "点击「深度查阅」查看 Docker 配置、对比闭源节省、自托管指南。免费体验 5 次。",
    trialRemaining: "次免费深度查阅",
    subscribeUnlock: "订阅 $9.9/月 →",
    memberActive: "✓ 会员已激活 · 无限查阅",
    deepReview: "深度查阅 →",
    loading: "加载深度查阅中...",
    loadFailed: "load_failed",
    subscribeCta: "立即订阅 $9.9/月",
    subscribeUpsell: "喜欢这些指南？订阅解锁全部",
    subscribeButton: "订阅 $9.9/月",
    close: "×",
    reviewSummary: "综述",
    reviewBestFor: "最适合",
    reviewPricing: "定价与节省",
    reviewAlternatives: "闭源替代品",
    altTool: "工具",
    altPricing: "定价",
    altWhen: "何时选择",
    reviewPros: "优点",
    reviewCons: "缺点",
    reviewSetup: "自托管步骤",
    reviewVerdict: "结论",
    statsTools: "替代品",
    statsCategories: "分类",
    statsAvgScore: "平均评分",
    indieScore: "评分",
  },
} as const;

export const categoryLabels: Record<Locale, Record<ToolCategory | "all", string>> = {
  en: {
    all: "All",
    analytics: "Analytics",
    chat: "Chat",
    project: "Project Mgmt",
    database: "Database",
    productivity: "Productivity",
    automation: "Automation",
    publishing: "Publishing",
    auth: "Auth",
  },
  zh: {
    all: "全部",
    analytics: "分析",
    chat: "聊天",
    project: "项目管理",
    database: "数据库",
    productivity: "效率",
    automation: "自动化",
    publishing: "出版",
    auth: "认证",
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
    title: "Welcome to Alt Stack!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited deep dives.",
    order: "Order:",
    openTools: "Browse alternatives",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入 Alt Stack！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是月度会员，可无限查阅全部深度指南。",
    order: "订单:",
    openTools: "浏览替代品目录",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Alt Stack · Monthly",
    description: "Open-source SaaS alternatives, Docker configs & self-host guides.",
  },
  zh: {
    name: "Alt Stack · 月度会员",
    description: "开源 SaaS 替代品目录、Docker 配置与自托管指南",
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
