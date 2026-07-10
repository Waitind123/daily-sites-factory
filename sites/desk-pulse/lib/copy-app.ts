import type { Locale } from "./i18n-shared";

export const inboxCopy = {
  en: {
    title: "Support Inbox",
    subtitle: "Create tickets, get AI reply suggestions from your knowledge base.",
    memberBadge: "✓ Member · unlimited tickets",
    freeTries: "Free tries:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free ticket actions. Subscribe for unlimited inbox, AI suggestions, and knowledge base.",
    paywallCta: "Subscribe · $29/mo",
    newTicket: "New ticket",
    subject: "Subject",
    subjectPlaceholder: "e.g. Refund request",
    customerEmail: "Customer email",
    emailPlaceholder: "customer@email.com",
    message: "Message",
    messagePlaceholder: "Paste the customer message here…",
    creating: "Creating…",
    createTicket: "Create ticket",
    createdTitle: "Ticket created!",
    createdHint: "Generate an AI reply suggestion based on your knowledge base:",
    aiSuggest: "✨ AI suggest reply",
    generating: "Generating…",
    yourTickets: "Your tickets",
    suggestedReply: "AI suggested reply",
    status: {
      open: "Open",
      pending: "Pending",
      resolved: "Resolved",
    },
  },
  zh: {
    title: "客服收件箱",
    subtitle: "创建工单，基于知识库获取 AI 回复建议。",
    memberBadge: "✓ 会员 · 工单不限量",
    freeTries: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费额度。订阅后可无限使用收件箱、AI 建议与知识库。",
    paywallCta: "订阅 · $29/月",
    newTicket: "新建工单",
    subject: "主题",
    subjectPlaceholder: "例如：退款申请",
    customerEmail: "客户邮箱",
    emailPlaceholder: "customer@email.com",
    message: "消息内容",
    messagePlaceholder: "在此粘贴客户消息…",
    creating: "创建中…",
    createTicket: "创建工单",
    createdTitle: "工单已创建！",
    createdHint: "基于知识库生成 AI 回复建议：",
    aiSuggest: "✨ AI 建议回复",
    generating: "生成中…",
    yourTickets: "你的工单",
    suggestedReply: "AI 建议回复",
    status: {
      open: "待处理",
      pending: "跟进中",
      resolved: "已解决",
    },
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Desk Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited tickets, AI suggestions, and knowledge base.",
    order: "Order:",
    openInbox: "Open inbox",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用极简客服工单！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限使用工单、AI 建议与知识库。",
    order: "订单号：",
    openInbox: "打开收件箱",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    TICKET_SUBJECT_REQUIRED: "Subject is required",
    EMAIL_REQUIRED: "Customer email is required",
    MESSAGE_REQUIRED: "Message is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    TICKET_CREATE_FAILED: "Failed to create ticket",
    TICKET_NOT_FOUND: "Ticket not found",
    SUGGEST_FAILED: "Failed to generate reply suggestion",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    TICKET_SUBJECT_REQUIRED: "请填写主题",
    EMAIL_REQUIRED: "请填写客户邮箱",
    MESSAGE_REQUIRED: "请填写消息内容",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    TICKET_CREATE_FAILED: "创建工单失败",
    TICKET_NOT_FOUND: "工单不存在",
    SUGGEST_FAILED: "生成回复建议失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Desk Pulse · Monthly",
    description: "Unlimited tickets, AI reply suggestions & knowledge base.",
  },
  zh: {
    name: "极简客服工单 · 月付",
    description: "无限工单、AI 回复建议与知识库。",
  },
} as const;

export function getInboxCopy(locale: Locale) {
  return inboxCopy[locale];
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
