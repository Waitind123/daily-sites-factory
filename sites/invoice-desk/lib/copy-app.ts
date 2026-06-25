import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Invoice Desk",
    subtitle: "One price, unlimited invoices and receipts.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs HoneyBook $66+/mo · cancel anytime",
    perks: [
      "Unlimited invoices",
      "Auto receipt generation",
      "Outstanding vs paid tracker",
      "Line item tables with due dates",
      "Markdown export for email/Slack",
      "Client payment status dashboard",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free invoices, then subscribe?",
    whyItems: [
      "Invoice storage and receipt generation cost real infrastructure",
      "Paying users = freelancers who actually bill clients",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅发票收据管理",
    subtitle: "一口价，发票与收据不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 HoneyBook $66+/月 · 随时可取消",
    perks: [
      "无限发票",
      "自动生成收据",
      "待收与已收追踪",
      "带到期日的明细表格",
      "Markdown 导出到邮件/Slack",
      "客户付款状态面板",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 张发票，之后订阅？",
    whyItems: [
      "发票存储与收据生成有真实基础设施成本",
      "付费用户 = 真正向客户开账单的自由职业者",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const invoicesCopy = {
  en: {
    title: "Invoice Dashboard",
    subtitle: "Create invoices, track outstanding payments, generate receipts.",
    memberBadge: "✓ Member · unlimited invoices",
    freeSyncs: "Free invoices remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 free invoices. Subscribe for unlimited invoices, receipts, and payment tracking.",
    paywallCta: "Subscribe · $9.9/mo",
    createTitle: "New invoice",
    clientName: "Client name",
    clientNamePlaceholder: "Acme Corp",
    clientEmail: "Client email",
    clientEmailPlaceholder: "billing@acme.com",
    projectTitle: "Project title",
    projectTitlePlaceholder: "Website redesign",
    lineItemDesc: "Line item description",
    lineItemDescPlaceholder: "Design & development",
    quantity: "Qty",
    unitPrice: "Unit price",
    currency: "Currency",
    notes: "Notes (optional)",
    notesPlaceholder: "Payment via bank transfer within 15 days",
    creating: "Creating…",
    createInvoice: "Create invoice",
    createdTitle: "Invoice created!",
    createdHint: "Copy the markdown below and send to your client.",
    viewMarkdown: "Invoice preview",
    markPaid: "Mark paid",
    markingPaid: "Processing…",
    paidTitle: "Payment recorded!",
    paidHint: "Receipt generated — share with your client.",
    yourInvoices: "Your invoices",
    notPaid: "Unpaid",
    paid: "Paid",
    sent: "Sent",
    copyMarkdown: "Copy invoice",
    copied: "Copied!",
    outstanding: "Outstanding",
    paidTotal: "Paid total",
    invoiceCount: "Invoices",
    dueDate: "Due",
    total: "Total",
    addLineItem: "+ Add line item",
    removeLineItem: "Remove",
    statusPaid: "Paid",
    statusSent: "Sent",
  },
  zh: {
    title: "发票控制台",
    subtitle: "创建发票、追踪待收款、生成收据。",
    memberBadge: "✓ 会员 · 发票不限量",
    freeSyncs: "剩余免费发票：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 张免费发票。订阅后可无限创建发票、收据与付款追踪。",
    paywallCta: "订阅 · $9.9/月",
    createTitle: "新建发票",
    clientName: "客户名称",
    clientNamePlaceholder: "Acme 公司",
    clientEmail: "客户邮箱",
    clientEmailPlaceholder: "billing@acme.com",
    projectTitle: "项目名称",
    projectTitlePlaceholder: "网站改版",
    lineItemDesc: "明细描述",
    lineItemDescPlaceholder: "设计与开发",
    quantity: "数量",
    unitPrice: "单价",
    currency: "币种",
    notes: "备注（可选）",
    notesPlaceholder: "请在 15 天内通过银行转账付款",
    creating: "创建中…",
    createInvoice: "创建发票",
    createdTitle: "发票已创建！",
    createdHint: "复制下方 Markdown 发送给客户。",
    viewMarkdown: "发票预览",
    markPaid: "标记已付",
    markingPaid: "处理中…",
    paidTitle: "已记录收款！",
    paidHint: "收据已生成 — 可分享给客户。",
    yourInvoices: "你的发票",
    notPaid: "未付款",
    paid: "已付款",
    sent: "已发送",
    copyMarkdown: "复制发票",
    copied: "已复制！",
    outstanding: "待收总额",
    paidTotal: "已收总额",
    invoiceCount: "发票数",
    dueDate: "到期",
    total: "合计",
    addLineItem: "+ 添加明细",
    removeLineItem: "删除",
    statusPaid: "已付款",
    statusSent: "已发送",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Invoice Desk!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited invoices, receipts, and payment tracking.",
    order: "Order:",
    openDashboard: "Open invoices",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用发票收据管理！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建发票、收据与付款追踪。",
    order: "订单号：",
    openDashboard: "打开发票",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    CLIENT_NAME_REQUIRED: "Client name is required",
    CLIENT_EMAIL_REQUIRED: "Client email is required",
    CLIENT_EMAIL_INVALID: "Please enter a valid email address",
    PROJECT_TITLE_REQUIRED: "Project title is required",
    LINE_ITEMS_REQUIRED: "At least one line item is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    INVOICE_NOT_FOUND: "Invoice not found",
    INVOICE_CREATE_FAILED: "Failed to create invoice",
    INVOICE_UPDATE_FAILED: "Failed to update invoice",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    CLIENT_NAME_REQUIRED: "请填写客户名称",
    CLIENT_EMAIL_REQUIRED: "请填写客户邮箱",
    CLIENT_EMAIL_INVALID: "请输入有效的邮箱地址",
    PROJECT_TITLE_REQUIRED: "请填写项目名称",
    LINE_ITEMS_REQUIRED: "至少添加一条明细",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    INVOICE_NOT_FOUND: "发票不存在",
    INVOICE_CREATE_FAILED: "创建发票失败",
    INVOICE_UPDATE_FAILED: "更新发票失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Invoice Desk · Monthly",
    description: "Unlimited invoices, receipts & payment tracking.",
  },
  zh: {
    name: "发票收据管理 · 月付",
    description: "无限发票、收据与付款追踪。",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getInvoicesCopy(locale: Locale) {
  return invoicesCopy[locale];
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
