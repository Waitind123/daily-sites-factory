import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join SecQuest Pulse",
    subtitle: "One price, unlimited security questionnaire fills. Close enterprise deals faster.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Vanta $5k+/yr · cancel anytime",
    perks: [
      "Unlimited questionnaire auto-fills",
      "AI answer matching from your security docs",
      "250+ question Excel import support",
      "Completion rate dashboard",
      "CSV export for buyer submissions",
      "Answer bank reuse across questionnaires",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free fills, then subscribe?",
    whyItems: [
      "One enterprise questionnaire proves the value — 5 fills covers your pipeline",
      "Paying users = founders closing B2B deals who hit security questionnaires",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅安全问卷自动填写",
    subtitle: "一口价，问卷填写不限量。更快拿下企业大单。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Vanta $5k+/年 · 随时可取消",
    perks: [
      "无限问卷自动填写",
      "从安全文档 AI 匹配答案",
      "支持 250+ 题 Excel 导入",
      "完成率看板",
      "CSV 导出供买家提交",
      "答案库跨问卷复用",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "一份企业问卷就能证明价值 — 5 次覆盖你的销售管线",
      "付费用户 = 正在签 B2B 大单、被安全问卷卡住的创始人",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Security Questionnaire Dashboard",
    subtitle: "Paste questions, add your answer bank, and get AI-filled answers in seconds.",
    memberBadge: "✓ Member · unlimited fills",
    freeSyncs: "Free fills remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've filled 5 free questionnaires. Subscribe for unlimited auto-fill, CSV export, and answer bank reuse.",
    paywallCta: "Subscribe · $9.9/mo",
    createTitle: "Fill questionnaire",
    titleLabel: "Questionnaire title",
    titlePlaceholder: "e.g. Acme Corp Vendor Security Assessment",
    questionsLabel: "Questions (one per line)",
    questionsPlaceholder:
      "1. Do you encrypt data at rest?\n2. SOC 2 Type II certified?\n3. Penetration testing frequency?\n4. GDPR data retention policy?",
    questionsHint: "Paste from Excel, vendor portal, or procurement email.",
    answerBankLabel: "Answer bank / security docs",
    answerBankPlaceholder:
      "encrypt: All data encrypted at rest (AES-256) and in transit (TLS 1.3).\nsoc: SOC 2 Type II audit in progress.\npenetration: Annual third-party pen test.",
    answerBankHint: "Paste security policy or keyword:answer pairs for AI matching.",
    creating: "Filling…",
    fillQuestionnaire: "Fill questionnaire",
    yourRecords: "Your filled questionnaires",
    totalQuestionnaires: "Questionnaires",
    totalQuestions: "Questions",
    avgCompletion: "Avg completion",
    answersTitle: "Filled answers",
    tipsTitle: "Quick tips",
    tips: [
      "Build your answer bank once — reuse across all buyer questionnaires",
      "Review AI answers before submitting — add edge cases to your bank",
      "Export CSV and paste directly into buyer Excel templates",
      "Enterprise deals stall on security questionnaires — speed wins",
    ],
  },
  zh: {
    title: "安全问卷控制台",
    subtitle: "粘贴题目、添加答案库，几秒内获得 AI 填写结果。",
    memberBadge: "✓ 会员 · 填写不限量",
    freeSyncs: "剩余免费次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已填写 5 份问卷。订阅后可无限自动填写、CSV 导出与答案库复用。",
    paywallCta: "订阅 · $9.9/月",
    createTitle: "填写问卷",
    titleLabel: "问卷标题",
    titlePlaceholder: "例如：Acme 公司供应商安全评估",
    questionsLabel: "题目（每行一题）",
    questionsPlaceholder:
      "1. 数据是否静态加密？\n2. 是否通过 SOC 2 Type II？\n3. 渗透测试频率？\n4. GDPR 数据保留政策？",
    questionsHint: "从 Excel、采购门户或邮件粘贴。",
    answerBankLabel: "答案库 / 安全文档",
    answerBankPlaceholder:
      "加密: 所有数据静态加密（AES-256）与传输加密（TLS 1.3）。\nsoc: SOC 2 Type II 审计进行中。\n渗透: 每年第三方渗透测试。",
    answerBankHint: "粘贴安全政策或「关键词:答案」对照表供 AI 匹配。",
    creating: "填写中…",
    fillQuestionnaire: "填写问卷",
    yourRecords: "已填写问卷",
    totalQuestionnaires: "问卷数",
    totalQuestions: "题目数",
    avgCompletion: "平均完成率",
    answersTitle: "填写结果",
    tipsTitle: "快速提示",
    tips: [
      "答案库建一次 — 所有买家问卷复用",
      "提交前复核 AI 答案 — 把边缘情况加入答案库",
      "导出 CSV 直接粘贴到买家 Excel 模板",
      "企业大单常卡在安全问卷 — 速度就是优势",
    ],
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to SecQuest Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited questionnaire fills, CSV export, and answer bank reuse.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用安全问卷自动填写！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限填写问卷、CSV 导出并复用答案库。",
    order: "订单号：",
    openDashboard: "打开控制台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    TITLE_REQUIRED: "Questionnaire title is required",
    QUESTIONS_REQUIRED: "Please paste at least one question",
    ANSWER_BANK_REQUIRED: "Please paste your answer bank or security docs",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    QUESTIONNAIRE_NOT_FOUND: "Questionnaire not found",
    QUESTIONNAIRE_CREATE_FAILED: "Failed to fill questionnaire",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    TITLE_REQUIRED: "请填写问卷标题",
    QUESTIONS_REQUIRED: "请粘贴至少一道题目",
    ANSWER_BANK_REQUIRED: "请粘贴答案库或安全文档",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    QUESTIONNAIRE_NOT_FOUND: "问卷不存在",
    QUESTIONNAIRE_CREATE_FAILED: "填写问卷失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "SecQuest Pulse · Monthly",
    description: "Unlimited security questionnaire auto-fill & CSV export.",
  },
  zh: {
    name: "安全问卷自动填写 · 月付",
    description: "无限问卷自动填写与 CSV 导出。",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

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
