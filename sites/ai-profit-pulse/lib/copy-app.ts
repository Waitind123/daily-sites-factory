import type { Locale } from "./i18n-shared";

export const dashboardCopy = {
  en: {
    title: "AI Profit Dashboard",
    subtitle: "Connect Stripe, analyze per-customer profit: revenue vs AI API cost.",
    memberBadge: "✓ Member · unlimited analyses",
    freeAnalyses: "Free analyses remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free analyses. Subscribe for unlimited profit tracking, alerts, and CSV export.",
    paywallCta: "Subscribe · $29/mo",
    createTitle: "New workspace",
    productName: "Product name",
    productNamePlaceholder: "e.g. My AI SaaS",
    stripeKey: "Stripe secret key (optional)",
    stripeKeyPlaceholder: "sk_live_… or sk_test_…",
    stripeKeyHint: "Leave empty for demo data. Use a restricted read-only key in production.",
    aiBudget: "Monthly AI budget ($)",
    aiBudgetHint: "Your total OpenAI/Anthropic spend cap for alerts.",
    creating: "Creating…",
    createWorkspace: "Create workspace",
    createdTitle: "Workspace created!",
    createdHint: "Click analyze to see per-customer profit margins.",
    analyzeNow: "Analyze now",
    syncing: "Analyzing…",
    yourWorkspaces: "Your workspaces",
    notSynced: "Not analyzed yet",
    avgMarginLabel: "avg margin",
    totalRevenue: "Total Revenue",
    totalAiCost: "Total AI Cost",
    grossProfit: "Gross Profit",
    avgMargin: "Avg Margin",
    customerTable: "Per-customer profit",
    profitable: "profitable",
    unprofitable: "unprofitable",
    customer: "Customer",
    revenue: "Revenue",
    aiCost: "AI Cost",
    profit: "Profit",
    margin: "Margin",
    model: "Model",
    syncedAt: "Synced at",
  },
  zh: {
    title: "AI 利润仪表盘",
    subtitle: "连接 Stripe，按客户分析利润：收入对比 AI API 成本。",
    memberBadge: "✓ 会员 · 分析不限量",
    freeAnalyses: "剩余免费分析次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费分析。订阅后可无限追踪利润、设置预警并导出 CSV。",
    paywallCta: "订阅 · $29/月",
    createTitle: "新建工作区",
    productName: "产品名称",
    productNamePlaceholder: "例如：我的 AI SaaS",
    stripeKey: "Stripe 密钥（可选）",
    stripeKeyPlaceholder: "sk_live_… 或 sk_test_…",
    stripeKeyHint: "留空使用演示数据。生产环境请使用只读受限密钥。",
    aiBudget: "月度 AI 预算（美元）",
    aiBudgetHint: "你的 OpenAI/Anthropic 总支出上限，用于预警。",
    creating: "创建中…",
    createWorkspace: "创建工作区",
    createdTitle: "工作区已创建！",
    createdHint: "点击分析查看按客户利润率。",
    analyzeNow: "立即分析",
    syncing: "分析中…",
    yourWorkspaces: "你的工作区",
    notSynced: "尚未分析",
    avgMarginLabel: "平均利润率",
    totalRevenue: "总收入",
    totalAiCost: "AI 总成本",
    grossProfit: "毛利润",
    avgMargin: "平均利润率",
    customerTable: "按客户利润",
    profitable: "盈利",
    unprofitable: "亏损",
    customer: "客户",
    revenue: "收入",
    aiCost: "AI 成本",
    profit: "利润",
    margin: "利润率",
    model: "模型",
    syncedAt: "同步时间",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to AI Profit Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited profit analyses, alerts, and CSV export.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 AI 客户利润追踪！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限分析利润、设置预警并导出 CSV。",
    order: "订单号：",
    openDashboard: "打开仪表盘",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    WORKSPACE_NAME_REQUIRED: "Product name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    WORKSPACE_NOT_FOUND: "Workspace not found",
    PROFIT_SYNC_FAILED: "Failed to analyze profit",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    WORKSPACE_NAME_REQUIRED: "请填写产品名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    WORKSPACE_NOT_FOUND: "工作区不存在",
    PROFIT_SYNC_FAILED: "利润分析失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "AI Profit Pulse · Monthly",
    description: "Unlimited per-customer profit analyses, margin alerts & CSV export.",
  },
  zh: {
    name: "AI 客户利润追踪 · 月付",
    description: "无限次按客户利润分析、利润率预警与 CSV 导出。",
  },
} as const;

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
