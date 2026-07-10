import type { Locale } from "./i18n-shared";

export const inboxCopy = {
  en: {
    title: "Chat Inbox",
    subtitle: "Manage live chat conversations, get AI reply suggestions from your help center.",
    memberBadge: "✓ Member · unlimited conversations",
    freeTries: "Free tries:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've used 5 free conversation actions. Subscribe for unlimited chat, AI agent, and help center.",
    paywallCta: "Subscribe · $29/mo",
    newTicket: "New conversation",
    subject: "Topic",
    subjectPlaceholder: "e.g. Cancel subscription",
    customerEmail: "Visitor email",
    emailPlaceholder: "visitor@email.com",
    message: "Message",
    messagePlaceholder: "Paste the visitor message here…",
    creating: "Creating…",
    createTicket: "Start conversation",
    createdTitle: "Conversation started!",
    createdHint: "Generate an AI reply from your help center:",
    aiSuggest: "✨ AI suggest reply",
    generating: "Generating…",
    yourTickets: "Your conversations",
    suggestedReply: "AI suggested reply",
    status: {
      open: "Open",
      pending: "Pending",
      resolved: "Resolved",
    },
  },
  zh: {
    title: "聊天收件箱",
    subtitle: "管理在线对话，基于帮助中心获取 AI 回复建议。",
    memberBadge: "✓ 会员 · 对话不限量",
    freeTries: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费额度。订阅后可无限使用聊天、AI 客服与帮助中心。",
    paywallCta: "订阅 · $29/月",
    newTicket: "新建对话",
    subject: "主题",
    subjectPlaceholder: "例如：取消订阅",
    customerEmail: "访客邮箱",
    emailPlaceholder: "visitor@email.com",
    message: "消息内容",
    messagePlaceholder: "在此粘贴访客消息…",
    creating: "创建中…",
    createTicket: "开始对话",
    createdTitle: "对话已创建！",
    createdHint: "基于帮助中心生成 AI 回复：",
    aiSuggest: "✨ AI 建议回复",
    generating: "生成中…",
    yourTickets: "你的对话",
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
    title: "Welcome to Intercom Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited chat, AI agent, shared inbox, and help center.",
    order: "Order:",
    openInbox: "Open inbox",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 Intercom 平替！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限使用聊天、AI 客服、共享收件箱与帮助中心。",
    order: "订单号：",
    openInbox: "打开收件箱",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    TICKET_SUBJECT_REQUIRED: "Topic is required",
    EMAIL_REQUIRED: "Visitor email is required",
    MESSAGE_REQUIRED: "Message is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    TICKET_CREATE_FAILED: "Failed to start conversation",
    TICKET_NOT_FOUND: "Conversation not found",
    SUGGEST_FAILED: "Failed to generate reply suggestion",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    TICKET_SUBJECT_REQUIRED: "请填写主题",
    EMAIL_REQUIRED: "请填写访客邮箱",
    MESSAGE_REQUIRED: "请填写消息内容",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    TICKET_CREATE_FAILED: "创建对话失败",
    TICKET_NOT_FOUND: "对话不存在",
    SUGGEST_FAILED: "生成回复建议失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Intercom Pulse · Monthly",
    description: "Unlimited chat, AI agent, shared inbox & help center.",
  },
  zh: {
    name: "Intercom 平替 · 月付",
    description: "无限对话、AI 客服、共享收件箱与帮助中心。",
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
