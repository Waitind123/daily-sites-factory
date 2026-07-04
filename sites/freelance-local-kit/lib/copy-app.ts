import type { Locale } from "./i18n-shared";
import type { DocType } from "./documents";

export const joinCopy = {
  en: {
    title: "Join Local Freelance Kit",
    subtitle: "One price, unlimited documents across all 5 tools.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs HoneyBook $66+/mo stack · cancel anytime",
    perks: [
      "Unlimited invoices, proposals & contracts",
      "Expense reports & project roadmaps",
      "JSON + markdown local export",
      "Auto contract terms with IP clauses",
      "No per-client or per-seat fees",
      "Replace 5 SaaS subscriptions with one",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free docs, then subscribe?",
    whyItems: [
      "Document generation and export cost real infrastructure",
      "Paying users = freelancers who actually bill clients",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅自由职业本地套件",
    subtitle: "一口价，5 种工具文档不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 HoneyBook $66+/月工具栈 · 随时可取消",
    perks: [
      "发票、报价、合同不限量",
      "费用报销与项目路线图",
      "JSON + Markdown 本地导出",
      "自动合同条款含知识产权",
      "无按客户或按席位收费",
      "一个订阅替代 5 个 SaaS",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 份，之后订阅？",
    whyItems: [
      "文档生成与导出有真实基础设施成本",
      "付费用户 = 真正向客户收费的自由职业者",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const workspaceCopy = {
  en: {
    title: "Freelance Workspace",
    subtitle: "Create invoices, proposals, contracts, expenses & project roadmaps.",
    memberBadge: "✓ Member · unlimited documents",
    freeDocs: "Free documents remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 free documents. Subscribe for unlimited access to all 5 tools plus JSON export.",
    paywallCta: "Subscribe · $9.9/mo",
    trialLowTitle: "Only {remaining} free documents left",
    trialLowBody:
      "Subscribe for unlimited invoices & contracts — most freelancers upgrade after document #3.",
    trialLowCta: "View pricing",
    postGenerateTitle: "Document ready — keep billing",
    postGenerateBody:
      "Unlimited docs across 5 tools for $9.9/mo — replace HoneyBook + Bonsai + PandaDoc.",
    postGenerateCta: "Subscribe now",
    createTitle: "New document",
    docTitle: "Title",
    docTitlePlaceholder: "Website redesign project",
    clientName: "Client name",
    clientNamePlaceholder: "Acme Corp",
    clientEmail: "Client email",
    clientEmailPlaceholder: "billing@acme.com",
    lineItemDesc: "Line item",
    lineItemDescPlaceholder: "Design & development",
    quantity: "Qty",
    unitPrice: "Unit price",
    currency: "Currency",
    category: "Expense category",
    categoryPlaceholder: "Software subscriptions",
    notes: "Notes (optional)",
    notesPlaceholder: "Payment via bank transfer within 15 days",
    creating: "Creating…",
    createDoc: "Create document",
    createdTitle: "Document created!",
    createdHint: "Copy the markdown below and send to your client.",
    viewMarkdown: "View preview",
    yourDocs: "Your documents",
    copyMarkdown: "Copy markdown",
    copied: "Copied!",
    exportJson: "Export all as JSON",
    types: {
      invoice: "Invoice",
      proposal: "Proposal",
      contract: "Contract",
      expense: "Expense",
      project: "Project",
    } as Record<DocType, string>,
  },
  zh: {
    title: "自由职业工作台",
    subtitle: "创建发票、报价、合同、费用报销与项目路线图。",
    memberBadge: "✓ 会员 · 文档不限量",
    freeDocs: "剩余免费文档：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 份免费文档。订阅后可无限使用 5 种工具并导出 JSON。",
    paywallCta: "订阅 · $9.9/月",
    trialLowTitle: "仅剩 {remaining} 份免费文档",
    trialLowBody: "订阅解锁无限生成 — 多数自由职业者在第 3 份文档后升级。",
    trialLowCta: "查看定价",
    postGenerateTitle: "文档已生成 — 趁热打铁",
    postGenerateBody: "5 种工具无限文档，$9.9/月 — 替代 HoneyBook + Bonsai + PandaDoc。",
    postGenerateCta: "立即订阅",
    createTitle: "新建文档",
    docTitle: "标题",
    docTitlePlaceholder: "网站改版项目",
    clientName: "客户名称",
    clientNamePlaceholder: "Acme 公司",
    clientEmail: "客户邮箱",
    clientEmailPlaceholder: "billing@acme.com",
    lineItemDesc: "明细",
    lineItemDescPlaceholder: "设计与开发",
    quantity: "数量",
    unitPrice: "单价",
    currency: "币种",
    category: "费用类别",
    categoryPlaceholder: "软件订阅",
    notes: "备注（可选）",
    notesPlaceholder: "请在 15 天内通过银行转账付款",
    creating: "创建中…",
    createDoc: "创建文档",
    createdTitle: "文档已创建！",
    createdHint: "复制下方 Markdown 发送给客户。",
    viewMarkdown: "查看预览",
    yourDocs: "你的文档",
    copyMarkdown: "复制 Markdown",
    copied: "已复制！",
    exportJson: "导出全部为 JSON",
    types: {
      invoice: "发票",
      proposal: "报价",
      contract: "合同",
      expense: "报销",
      project: "项目",
    } as Record<DocType, string>,
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Local Freelance Kit!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited documents across all 5 tools.",
    order: "Order:",
    openDashboard: "Open workspace",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用自由职业本地套件！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限使用 5 种工具创建文档。",
    order: "订单号：",
    openDashboard: "打开工作台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    INVALID_INPUT: "Please fill in required fields",
    INVALID_TYPE: "Invalid document type",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    DOC_NOT_FOUND: "Document not found",
    UPDATE_FAILED: "Failed to update document",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    INVALID_INPUT: "请填写必填项",
    INVALID_TYPE: "无效的文档类型",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    DOC_NOT_FOUND: "文档不存在",
    UPDATE_FAILED: "更新文档失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Local Freelance Kit · Monthly",
    description: "Unlimited invoices, proposals, contracts, expenses & projects.",
  },
  zh: {
    name: "自由职业本地套件 · 月付",
    description: "发票、报价、合同、报销与项目路线图不限量。",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getWorkspaceCopy(locale: Locale) {
  return workspaceCopy[locale];
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
