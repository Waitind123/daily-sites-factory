import type { Locale } from "./i18n-shared";

export const dashboardCopy = {
  en: {
    title: "Revenue Dashboard",
    subtitle: "Connect Stripe, sync MRR/ARR/churn, track customer movements weekly.",
    memberBadge: "✓ Member · unlimited syncs",
    freeSyncs: "Free syncs remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free syncs. Subscribe for unlimited Stripe syncs, full history, and CSV export.",
    paywallCta: "Subscribe · $9.9/mo",
    createTitle: "New dashboard",
    productName: "Product name",
    productNamePlaceholder: "e.g. My SaaS App",
    stripeKey: "Stripe secret key (optional)",
    stripeKeyPlaceholder: "sk_live_… or sk_test_…",
    stripeKeyHint: "Leave empty for demo data. Use a restricted read-only key in production.",
    creating: "Creating…",
    createDashboard: "Create dashboard",
    createdTitle: "Dashboard created!",
    createdHint: "Click sync to pull your MRR, ARR, and churn metrics.",
    syncNow: "Sync now",
    syncing: "Syncing…",
    yourDashboards: "Your dashboards",
    notSynced: "Not synced yet",
    mrr: "MRR",
    arr: "ARR",
    churn: "Churn",
    customers: "Customers",
    newCustomers: "New",
    churned: "Churned",
    expansion: "Expansion",
    contraction: "Contraction",
    syncedAt: "Synced at",
  },
  zh: {
    title: "收入仪表盘",
    subtitle: "连接 Stripe，同步 MRR/ARR/流失率，每周追踪客户变动。",
    memberBadge: "✓ 会员 · 同步不限量",
    freeSyncs: "剩余免费同步次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费同步。订阅后可无限同步 Stripe 数据、查看完整历史并导出 CSV。",
    paywallCta: "订阅 · $9.9/月",
    createTitle: "新建仪表盘",
    productName: "产品名称",
    productNamePlaceholder: "例如：我的 SaaS 应用",
    stripeKey: "Stripe 密钥（可选）",
    stripeKeyPlaceholder: "sk_live_… 或 sk_test_…",
    stripeKeyHint: "留空使用演示数据。生产环境请使用只读受限密钥。",
    creating: "创建中…",
    createDashboard: "创建仪表盘",
    createdTitle: "仪表盘已创建！",
    createdHint: "点击同步拉取 MRR、ARR 和流失率数据。",
    syncNow: "立即同步",
    syncing: "同步中…",
    yourDashboards: "你的仪表盘",
    notSynced: "尚未同步",
    mrr: "MRR",
    arr: "ARR",
    churn: "流失率",
    customers: "客户数",
    newCustomers: "新增",
    churned: "流失",
    expansion: "扩展",
    contraction: "收缩",
    syncedAt: "同步时间",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Stripe Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited Stripe syncs, full history, and CSV export.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Stripe 收入仪表盘！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限同步 Stripe 数据、查看完整历史并导出 CSV。",
    order: "订单号：",
    openDashboard: "打开仪表盘",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    DASHBOARD_NAME_REQUIRED: "Product name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    DASHBOARD_NOT_FOUND: "Dashboard not found",
    METRICS_SYNC_FAILED: "Failed to sync metrics",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    DASHBOARD_NAME_REQUIRED: "请填写产品名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    DASHBOARD_NOT_FOUND: "仪表盘不存在",
    METRICS_SYNC_FAILED: "同步数据失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Stripe Pulse · Monthly",
    description: "Unlimited Stripe syncs, MRR/ARR/churn dashboard & CSV export.",
  },
  zh: {
    name: "Stripe 收入仪表盘 · 月付",
    description: "无限 Stripe 同步、MRR/ARR/流失仪表盘与 CSV 导出。",
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
