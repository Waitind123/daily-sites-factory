import type { Locale } from "./i18n-shared";

export const dashboardCopy = {
  en: {
    title: "Customer Health Dashboard",
    subtitle: "Connect Stripe, scan subscriber health scores, catch churn before it happens.",
    memberBadge: "✓ Member · unlimited scans",
    freeScans: "Free scans remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free scans. Subscribe for unlimited health monitoring, churn alerts, and CSV export.",
    paywallCta: "Subscribe · $9.9/mo",
    createTitle: "New workspace",
    productName: "Product name",
    productNamePlaceholder: "e.g. My SaaS App",
    stripeKey: "Stripe secret key (optional)",
    stripeKeyPlaceholder: "sk_live_… or sk_test_…",
    stripeKeyHint: "Leave empty for demo data. Use a restricted read-only key in production.",
    creating: "Creating…",
    createWorkspace: "Create workspace",
    createdTitle: "Workspace created!",
    createdHint: "Click scan to analyze customer health scores and churn risk.",
    scanNow: "Scan now",
    scanning: "Scanning…",
    yourWorkspaces: "Your workspaces",
    notScanned: "Not scanned yet",
    avgScore: "Avg score",
    healthy: "Healthy",
    atRisk: "At-risk",
    critical: "Critical",
    churnRisk: "Churn risk",
    healthScore: "Score",
    mrr: "MRR",
    inactiveDays: "Inactive",
    churnAlerts: "Churn alerts",
    allCustomers: "All customers",
    riskHealthy: "Healthy",
    riskAtRisk: "At-risk",
    riskCritical: "Critical",
    syncedAt: "Scanned at",
  },
  zh: {
    title: "客户健康仪表盘",
    subtitle: "连接 Stripe，扫描订阅者健康分，在流失发生前预警。",
    memberBadge: "✓ 会员 · 扫描不限量",
    freeScans: "剩余免费扫描次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费扫描。订阅后可无限健康监控、流失告警并导出 CSV。",
    paywallCta: "订阅 · $9.9/月",
    createTitle: "新建工作区",
    productName: "产品名称",
    productNamePlaceholder: "例如：我的 SaaS 应用",
    stripeKey: "Stripe 密钥（可选）",
    stripeKeyPlaceholder: "sk_live_… 或 sk_test_…",
    stripeKeyHint: "留空使用演示数据。生产环境请使用只读受限密钥。",
    creating: "创建中…",
    createWorkspace: "创建工作区",
    createdTitle: "工作区已创建！",
    createdHint: "点击扫描分析客户健康分与流失风险。",
    scanNow: "立即扫描",
    scanning: "扫描中…",
    yourWorkspaces: "你的工作区",
    notScanned: "尚未扫描",
    avgScore: "平均分",
    healthy: "健康",
    atRisk: "中危",
    critical: "高危",
    churnRisk: "流失风险",
    healthScore: "分数",
    mrr: "MRR",
    inactiveDays: "未活跃",
    churnAlerts: "流失告警",
    allCustomers: "全部客户",
    riskHealthy: "健康",
    riskAtRisk: "中危",
    riskCritical: "高危",
    syncedAt: "扫描时间",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Churn Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited health scans, churn alerts, and CSV export.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用客户健康分！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限健康扫描、流失告警并导出 CSV。",
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
    HEALTH_SYNC_FAILED: "Failed to scan customer health",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    WORKSPACE_NAME_REQUIRED: "请填写产品名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    WORKSPACE_NOT_FOUND: "工作区不存在",
    HEALTH_SYNC_FAILED: "扫描客户健康分失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Churn Pulse · Monthly",
    description: "Unlimited health scans, churn alerts & customer health scores.",
  },
  zh: {
    name: "客户健康分 · 月付",
    description: "无限健康扫描、流失告警与客户健康分。",
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
