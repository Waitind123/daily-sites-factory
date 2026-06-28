import type { Locale } from "./i18n-shared";

export const quotesCopy = {
  en: {
    title: "Quote Builder",
    subtitle: "Create proposals, generate contracts and invoices for your freelance clients.",
    memberBadge: "✓ Member · unlimited quotes",
    freeTries: "Free tries:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free quote actions. Subscribe for unlimited quotes, contracts, and invoices.",
    paywallCta: "Subscribe · $9.9/mo",
    newQuote: "New quote",
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
    createQuote: "Create quote",
    createdTitle: "Quote created!",
    createdHint: "Generate a freelance contract from this quote:",
    genContract: "📝 Generate contract",
    genInvoice: "💵 Generate invoice",
    generating: "Generating…",
    yourQuotes: "Your quotes",
    contractLabel: "Contract",
    invoiceLabel: "Invoice",
    status: {
      draft: "Draft",
      sent: "Sent",
      paid: "Paid",
    },
  },
  zh: {
    title: "报价生成器",
    subtitle: "为自由职业客户创建提案，生成合同与发票。",
    memberBadge: "✓ 会员 · 报价不限量",
    freeTries: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费额度。订阅后可无限使用报价、合同与发票。",
    paywallCta: "订阅 · $9.9/月",
    newQuote: "新建报价",
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
    createQuote: "创建报价",
    createdTitle: "报价已创建！",
    createdHint: "根据此报价生成自由职业合同：",
    genContract: "📝 生成合同",
    genInvoice: "💵 生成发票",
    generating: "生成中…",
    yourQuotes: "你的报价",
    contractLabel: "合同",
    invoiceLabel: "发票",
    status: {
      draft: "草稿",
      sent: "已发送",
      paid: "已付款",
    },
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Quote Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited quotes, contracts, and invoices.",
    order: "Order:",
    openQuotes: "Open quotes",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用极简报价单！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限使用报价、合同与发票。",
    order: "订单号：",
    openQuotes: "打开报价",
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
    QUOTE_CREATE_FAILED: "Failed to create quote",
    QUOTE_NOT_FOUND: "Quote not found",
    CONTRACT_FAILED: "Failed to generate contract",
    INVOICE_FAILED: "Failed to generate invoice",
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
    QUOTE_CREATE_FAILED: "创建报价失败",
    QUOTE_NOT_FOUND: "报价不存在",
    CONTRACT_FAILED: "生成合同失败",
    INVOICE_FAILED: "生成发票失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Quote Pulse · Monthly",
    description: "Unlimited quotes, contracts & invoices for freelancers.",
  },
  zh: {
    name: "极简报价单 · 月付",
    description: "自由职业者无限报价、合同与发票。",
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
