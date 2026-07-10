import type { Locale } from "./i18n-shared";

export const quotesCopy = {
  en: {
    title: "Document Builder",
    subtitle: "Create proposals, generate contracts, and collect e-signatures for your clients.",
    memberBadge: "✓ Member · unlimited documents",
    freeTries: "Free tries:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free document actions. Subscribe for unlimited proposals, contracts, and e-signatures.",
    paywallCta: "Subscribe · $29/mo",
    newQuote: "New document",
    clientName: "Client name",
    clientNamePlaceholder: "e.g. Sarah Chen",
    clientEmail: "Client email",
    emailPlaceholder: "client@email.com",
    projectTitle: "Project title",
    projectPlaceholder: "e.g. Website redesign",
    description: "Scope of work",
    descriptionPlaceholder: "Describe deliverables, timeline, revisions…",
    amount: "Amount (USD)",
    amountPlaceholder: "4500",
    creating: "Creating…",
    createQuote: "Create document",
    createdTitle: "Document created!",
    createdHint: "Generate a contract and collect e-signature:",
    genContract: "📝 Generate contract",
    genInvoice: "💵 Generate invoice",
    genSign: "✍️ Collect e-signature",
    generating: "Generating…",
    signing: "Signing…",
    yourQuotes: "Your documents",
    contractLabel: "Contract",
    invoiceLabel: "Invoice",
    signedLabel: "E-signature",
    signedAt: "Signed",
    status: {
      draft: "Draft",
      sent: "Sent",
      paid: "Signed",
    },
  },
  zh: {
    title: "文档生成器",
    subtitle: "为客户创建提案，生成合同并收集电子签名。",
    memberBadge: "✓ 会员 · 文档不限量",
    freeTries: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费额度。订阅后可无限使用提案、合同与电子签名。",
    paywallCta: "订阅 · $29/月",
    newQuote: "新建文档",
    clientName: "客户名称",
    clientNamePlaceholder: "例如：陈莎拉",
    clientEmail: "客户邮箱",
    emailPlaceholder: "client@email.com",
    projectTitle: "项目标题",
    projectPlaceholder: "例如：网站改版",
    description: "工作范围",
    descriptionPlaceholder: "描述交付物、时间线、修改次数…",
    amount: "金额（美元）",
    amountPlaceholder: "4500",
    creating: "创建中…",
    createQuote: "创建文档",
    createdTitle: "文档已创建！",
    createdHint: "生成合同并收集电子签名：",
    genContract: "📝 生成合同",
    genInvoice: "💵 生成发票",
    genSign: "✍️ 收集电子签名",
    generating: "生成中…",
    signing: "签署中…",
    yourQuotes: "你的文档",
    contractLabel: "合同",
    invoiceLabel: "发票",
    signedLabel: "电子签名",
    signedAt: "已签署",
    status: {
      draft: "草稿",
      sent: "已发送",
      paid: "已签署",
    },
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Sign Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited proposals, contracts, and e-signatures.",
    order: "Order:",
    openQuotes: "Open documents",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用极简签署台！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限使用提案、合同与电子签名。",
    order: "订单号：",
    openQuotes: "打开文档",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    CLIENT_NAME_REQUIRED: "Client name is required",
    EMAIL_REQUIRED: "Client email is required",
    PROJECT_TITLE_REQUIRED: "Project title is required",
    DESCRIPTION_REQUIRED: "Scope of work is required",
    AMOUNT_REQUIRED: "Valid amount is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    QUOTE_CREATE_FAILED: "Failed to create document",
    QUOTE_NOT_FOUND: "Document not found",
    CONTRACT_FAILED: "Failed to generate contract",
    INVOICE_FAILED: "Failed to generate invoice",
    SIGN_FAILED: "Failed to collect e-signature",
    CONTRACT_REQUIRED: "Generate contract before collecting signature",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    CLIENT_NAME_REQUIRED: "请填写客户名称",
    EMAIL_REQUIRED: "请填写客户邮箱",
    PROJECT_TITLE_REQUIRED: "请填写项目标题",
    DESCRIPTION_REQUIRED: "请填写工作范围",
    AMOUNT_REQUIRED: "请填写有效金额",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    QUOTE_CREATE_FAILED: "创建文档失败",
    QUOTE_NOT_FOUND: "文档不存在",
    CONTRACT_FAILED: "生成合同失败",
    INVOICE_FAILED: "生成发票失败",
    SIGN_FAILED: "收集电子签名失败",
    CONTRACT_REQUIRED: "请先生成合同再收集签名",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Sign Pulse · Monthly",
    description: "Unlimited proposals, e-signatures & contracts for small teams.",
  },
  zh: {
    name: "极简签署台 · 月付",
    description: "小团队无限提案、电子签名与合同。",
  },
} as const;

export function getQuotesCopy(locale: Locale) {
  return quotesCopy[locale];
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
