import type { Locale } from "./i18n-shared";

export const statusLabels = {
  en: {
    open: "Open",
    planned: "Planned",
    in_progress: "In Progress",
    shipped: "Shipped",
  },
  zh: {
    open: "待讨论",
    planned: "计划中",
    in_progress: "开发中",
    shipped: "已上线",
  },
} as const;

export const sampleIdeasCopy = {
  en: [
    { title: "Dark mode for dashboard", votes: 47, status: "planned" as const },
    { title: "Webhook on status change", votes: 32, status: "in_progress" as const },
    { title: "CSV export for ideas", votes: 28, status: "open" as const },
  ],
  zh: [
    { title: "仪表盘深色模式", votes: 47, status: "planned" as const },
    { title: "状态变更 Webhook", votes: 32, status: "in_progress" as const },
    { title: "想法 CSV 导出", votes: 28, status: "open" as const },
  ],
};

export const boardsCopy = {
  en: {
    title: "Feedback Boards",
    subtitle: "Create a board, share the link, let users vote on what to build next.",
    memberBadge: "✓ Member · unlimited boards",
    freeBoards: "Free boards:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 boards. Subscribe for unlimited boards, embed widgets, and voter notifications.",
    paywallCta: "Subscribe · $9.9/mo",
    trialLowTitle: "Only {remaining} free boards left",
    trialLowBody: "Subscribe now for unlimited boards — most founders upgrade after board #3.",
    trialLowCta: "View pricing",
    formTitle: "New feedback board",
    boardName: "Board name",
    boardNamePlaceholder: "e.g. My SaaS Feedback",
    description: "Description",
    descriptionPlaceholder: "What kind of feedback are you collecting?",
    creating: "Creating…",
    createBoard: "Create board",
    createdTitle: "Board created!",
    createdHint: "Share this public link with your users:",
    openBoard: "Open board →",
    yourBoards: "Your boards",
    exampleTitle: "Example ideas on a board",
  },
  zh: {
    title: "反馈投票板",
    subtitle: "创建投票板、分享链接，让用户投票决定你下一步做什么。",
    memberBadge: "✓ 会员 · 投票板不限量",
    freeBoards: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 个投票板。订阅后可无限创建、嵌入组件并通知投票者。",
    paywallCta: "订阅 · $9.9/月",
    trialLowTitle: "仅剩 {remaining} 个免费投票板",
    trialLowBody: "立即订阅解锁无限投票板 — 多数创始人在第 3 个板后升级。",
    trialLowCta: "查看定价",
    formTitle: "新建反馈投票板",
    boardName: "投票板名称",
    boardNamePlaceholder: "例如：我的 SaaS 反馈",
    description: "描述",
    descriptionPlaceholder: "你在收集哪类反馈？",
    creating: "创建中…",
    createBoard: "创建投票板",
    createdTitle: "投票板已创建！",
    createdHint: "把以下公开链接分享给用户：",
    openBoard: "打开投票板 →",
    yourBoards: "你的投票板",
    exampleTitle: "投票板上的示例想法",
  },
} as const;

export const publicBoardCopy = {
  en: {
    poweredBy: "Powered by Feature Vote · vote on what matters",
    suggestTitle: "Suggest a feature",
    titlePlaceholder: "Feature title",
    descPlaceholder: "Why do you need this? (optional)",
    submitting: "Submitting…",
    submitIdea: "Submit idea",
    submitted: "Idea submitted! Others can now upvote it.",
    empty: "No ideas yet. Be the first to suggest one!",
  },
  zh: {
    poweredBy: "由功能投票板提供 · 为重要需求投票",
    suggestTitle: "提交功能建议",
    titlePlaceholder: "功能标题",
    descPlaceholder: "为什么需要这个功能？（可选）",
    submitting: "提交中…",
    submitIdea: "提交想法",
    submitted: "已提交！其他人现在可以为你投票。",
    empty: "还没有想法，来做第一个提交的人吧！",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Feature Vote!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited boards, voters, and roadmap features.",
    order: "Order:",
    openBoards: "Open boards",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用功能投票板！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建投票板、接收投票并管理公开路线图。",
    order: "订单号：",
    openBoards: "打开投票板",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    BOARD_NAME_REQUIRED: "Board name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    BOARD_CREATE_FAILED: "Failed to create board",
    BOARD_NOT_FOUND: "Board not found",
    IDEA_TITLE_REQUIRED: "Title is required",
    IDEA_SUBMIT_FAILED: "Failed to submit idea",
    IDEA_NOT_FOUND: "Idea not found",
    UPVOTE_FAILED: "Failed to upvote",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    BOARD_NAME_REQUIRED: "请填写投票板名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    BOARD_CREATE_FAILED: "创建投票板失败",
    BOARD_NOT_FOUND: "投票板不存在",
    IDEA_TITLE_REQUIRED: "请填写想法标题",
    IDEA_SUBMIT_FAILED: "提交想法失败",
    IDEA_NOT_FOUND: "想法不存在",
    UPVOTE_FAILED: "投票失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Feature Vote · Monthly",
    description: "Unlimited boards, voters & ideas. Public roadmap & embed widget.",
    annualName: "Feature Vote · Annual",
    annualDescription: "Unlimited boards for 12 months. Save vs monthly billing.",
  },
  zh: {
    name: "功能投票板 · 月付",
    description: "无限投票板、投票者与想法。公开路线图与可嵌入组件。",
    annualName: "功能投票板 · 年付",
    annualDescription: "12 个月无限投票板，比月付更省。",
  },
} as const;

export function getStatusLabel(status: keyof typeof statusLabels.en, locale: Locale) {
  return statusLabels[locale][status];
}

export function getBoardsCopy(locale: Locale) {
  return boardsCopy[locale];
}

export function getPublicBoardCopy(locale: Locale) {
  return publicBoardCopy[locale];
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

export function getSampleIdeas(locale: Locale) {
  return sampleIdeasCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
