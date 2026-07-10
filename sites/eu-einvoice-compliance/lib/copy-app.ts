import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join EU E-Invoice Compliance",
    subtitle: "One price, unlimited UBL exports and compliance checks.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs enterprise tax suites $50+/mo · cancel anytime",
    perks: [
      "Unlimited UBL 2.1 XML exports",
      "Live EN16931 compliance scoring",
      "Multi-currency EUR/PLN/USD/GBP",
      "VAT ID validation for seller & buyer",
      "KSeF-ready Peppol billing profile",
      "Browser-side — your data stays local",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free invoices, then subscribe?",
    whyItems: [
      "UBL generation and compliance validation cost real infrastructure",
      "Paying users = EU freelancers facing 2026 e-invoice deadlines",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅欧盟电子发票合规",
    subtitle: "一口价，UBL 导出与合规检查不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比企业税务套件 $50+/月 · 随时可取消",
    perks: [
      "无限 UBL 2.1 XML 导出",
      "实时 EN16931 合规评分",
      "多币种欧元/兹罗提/美元/英镑",
      "买卖双方增值税号校验",
      "KSeF 就绪 Peppol 账单配置",
      "浏览器端运行 — 数据留在本地",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 张，之后订阅？",
    whyItems: [
      "UBL 生成与合规校验有真实基础设施成本",
      "付费用户 = 面临 2026 电子发票截止的欧盟自由职业者",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const invoicesCopy = {
  en: {
    title: "E-Invoice Generator",
    subtitle: "Create UBL 2.1 compliant invoices with live VAT validation.",
    memberBadge: "✓ Member · unlimited UBL exports",
    freeSyncs: "Free invoices remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 free invoices. Subscribe for unlimited UBL exports and compliance checks.",
    paywallCta: "Subscribe · $9.9/mo",
    sellerTitle: "Your business (seller)",
    sellerName: "Company / your name",
    sellerNamePlaceholder: "Anna Kowalska Consulting",
    sellerVat: "VAT ID",
    sellerVatPlaceholder: "PL1234567890",
    sellerCountry: "Country (ISO)",
    sellerCountryPlaceholder: "PL",
    sellerAddress: "Street address",
    sellerCity: "City",
    sellerPostal: "Postal code",
    buyerTitle: "Buyer details",
    createTitle: "New e-invoice",
    clientName: "Buyer legal name",
    clientNamePlaceholder: "Acme GmbH",
    clientEmail: "Buyer email",
    clientEmailPlaceholder: "billing@acme.de",
    buyerVat: "Buyer VAT ID",
    buyerVatPlaceholder: "DE9876543210",
    projectTitle: "Invoice description",
    projectTitlePlaceholder: "Consulting services Q2 2026",
    lineItemDesc: "Line item description",
    lineItemDescPlaceholder: "Software development",
    quantity: "Qty",
    unitPrice: "Unit price",
    currency: "Currency",
    vatRate: "VAT %",
    notes: "Notes (optional)",
    notesPlaceholder: "Payment within 15 days via SEPA transfer",
    creating: "Generating…",
    createInvoice: "Generate UBL invoice",
    createdTitle: "E-invoice created!",
    createdHint: "Download UBL XML or copy the invoice preview below.",
    viewMarkdown: "Invoice preview",
    downloadUbl: "Download UBL XML",
    ublDownloaded: "UBL XML downloaded!",
    complianceTitle: "Compliance score",
    compliancePassed: "passed",
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
    title: "电子发票生成器",
    subtitle: "创建 UBL 2.1 合规发票，实时增值税校验。",
    memberBadge: "✓ 会员 · UBL 导出不限量",
    freeSyncs: "剩余免费发票：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 张免费发票。订阅后可无限 UBL 导出与合规检查。",
    paywallCta: "订阅 · $9.9/月",
    sellerTitle: "你的企业（卖方）",
    sellerName: "公司/姓名",
    sellerNamePlaceholder: "Anna Kowalska 咨询",
    sellerVat: "增值税号",
    sellerVatPlaceholder: "PL1234567890",
    sellerCountry: "国家（ISO）",
    sellerCountryPlaceholder: "PL",
    sellerAddress: "街道地址",
    sellerCity: "城市",
    sellerPostal: "邮编",
    buyerTitle: "买方信息",
    createTitle: "新建电子发票",
    clientName: "买方法定名称",
    clientNamePlaceholder: "Acme GmbH",
    clientEmail: "买方邮箱",
    clientEmailPlaceholder: "billing@acme.de",
    buyerVat: "买方增值税号",
    buyerVatPlaceholder: "DE9876543210",
    projectTitle: "发票描述",
    projectTitlePlaceholder: "2026 年第二季度咨询服务",
    lineItemDesc: "明细描述",
    lineItemDescPlaceholder: "软件开发",
    quantity: "数量",
    unitPrice: "单价",
    currency: "币种",
    vatRate: "增值税 %",
    notes: "备注（可选）",
    notesPlaceholder: "请在 15 天内通过 SEPA 转账付款",
    creating: "生成中…",
    createInvoice: "生成 UBL 发票",
    createdTitle: "电子发票已创建！",
    createdHint: "下载 UBL XML 或复制下方发票预览。",
    viewMarkdown: "发票预览",
    downloadUbl: "下载 UBL XML",
    ublDownloaded: "UBL XML 已下载！",
    complianceTitle: "合规评分",
    compliancePassed: "项通过",
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
    title: "Welcome to EU E-Invoice Compliance!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited UBL exports and compliance checks.",
    order: "Order:",
    openDashboard: "Open invoices",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用欧盟电子发票合规！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限 UBL 导出与合规检查。",
    order: "订单号：",
    openDashboard: "打开发票",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    CLIENT_NAME_REQUIRED: "Buyer legal name is required",
    CLIENT_EMAIL_REQUIRED: "Buyer email is required",
    CLIENT_EMAIL_INVALID: "Please enter a valid email address",
    PROJECT_TITLE_REQUIRED: "Invoice description is required",
    LINE_ITEMS_REQUIRED: "At least one line item is required",
    SELLER_VAT_REQUIRED: "Seller VAT ID is required",
    SELLER_COUNTRY_REQUIRED: "Seller country code is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    INVOICE_NOT_FOUND: "Invoice not found",
    INVOICE_CREATE_FAILED: "Failed to create invoice",
    INVOICE_UPDATE_FAILED: "Failed to update invoice",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    CLIENT_NAME_REQUIRED: "请填写买方法定名称",
    CLIENT_EMAIL_REQUIRED: "请填写买方邮箱",
    CLIENT_EMAIL_INVALID: "请输入有效的邮箱地址",
    PROJECT_TITLE_REQUIRED: "请填写发票描述",
    LINE_ITEMS_REQUIRED: "至少添加一条明细",
    SELLER_VAT_REQUIRED: "请填写卖方增值税号",
    SELLER_COUNTRY_REQUIRED: "请填写卖方国家代码",
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
    name: "EU E-Invoice Compliance · Monthly",
    description: "Unlimited UBL exports & compliance checks.",
  },
  zh: {
    name: "欧盟电子发票合规 · 月付",
    description: "无限 UBL 导出与合规检查。",
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
