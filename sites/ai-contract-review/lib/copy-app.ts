import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Contract Review Pulse",
    subtitle: "One price, unlimited contract reviews. Sign with confidence, not anxiety.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs lawyer $300+/hr · cancel anytime",
    perks: [
      "Unlimited AI contract risk scans",
      "15+ clause category detection",
      "Missing protection alerts",
      "Negotiation email drafts",
      "Risk score dashboard",
      "Version comparison (coming soon)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free reviews, then subscribe?",
    whyItems: [
      "One contract review proves the value — 5 reviews covers your client pipeline",
      "Paying users = freelancers signing client contracts who can't afford $300/hr lawyers",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅合同审查助手",
    subtitle: "一口价，合同审查不限量。自信签约，不再焦虑。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比律师 $300+/小时 · 随时可取消",
    perks: [
      "无限 AI 合同风险扫描",
      "15+ 条款类别检测",
      "缺失保护项提醒",
      "谈判邮件草稿",
      "风险评分看板",
      "版本对比（即将推出）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "一次合同审查就能证明价值 — 5 次覆盖你的客户管线",
      "付费用户 = 签客户合同却请不起 $300/小时律师的自由职业者",
      "一人维护 — 一口价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const dashboardCopy = {
  en: {
    title: "Contract Review Dashboard",
    subtitle: "Paste your contract text and get AI risk analysis in seconds.",
    memberBadge: "✓ Member · unlimited reviews",
    freeSyncs: "Free reviews remaining:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've reviewed 5 contracts. Subscribe for unlimited scans, negotiation emails, and risk dashboards.",
    paywallCta: "Subscribe · $9.9/mo",
    createTitle: "Review contract",
    titleLabel: "Contract title",
    titlePlaceholder: "e.g. Acme Corp Freelance SOW",
    contractLabel: "Contract text",
    contractPlaceholder:
      "Paste your full contract text here...\n\nPayment terms: Net-90 from invoice date.\nAll work product shall be work-for-hire and belong to Client.\nContractor's liability shall be unlimited for any breach.",
    contractHint: "Copy from PDF, Word, or email. NDAs, SOWs, MSAs, freelance agreements supported.",
    creating: "Scanning…",
    reviewContract: "Review contract",
    yourRecords: "Your reviewed contracts",
    totalReviews: "Reviews",
    avgRisk: "Avg risk score",
    totalHigh: "High risks found",
    findingsTitle: "Flagged clauses",
    missingTitle: "Missing protections",
    emailTitle: "Negotiation email",
    copyEmail: "Copy email",
    copied: "Copied!",
    riskScore: "Risk score",
    tipsTitle: "Quick tips",
    tips: [
      "Review every client contract before signing — even 'standard' templates have traps",
      "Focus on high-risk items first: payment terms, IP, and liability caps",
      "Send the negotiation email within 24 hours while the deal is warm",
      "Build a personal clause library from accepted redlines over time",
    ],
  },
  zh: {
    title: "合同审查控制台",
    subtitle: "粘贴合同文本，几秒内获得 AI 风险分析。",
    memberBadge: "✓ 会员 · 审查不限量",
    freeSyncs: "剩余免费次数：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已审查 5 份合同。订阅后可无限扫描、谈判邮件与风险看板。",
    paywallCta: "订阅 · $9.9/月",
    createTitle: "审查合同",
    titleLabel: "合同标题",
    titlePlaceholder: "例如：Acme 公司自由职业工作说明书",
    contractLabel: "合同文本",
    contractPlaceholder:
      "在此粘贴完整合同文本...\n\n付款条件：发票日起 Net-90。\n所有工作成果为雇佣作品，归客户所有。\n承包商违约责任不设上限。",
    contractHint: "从 PDF、Word 或邮件复制。支持保密协议、工作说明书、主合同、自由职业协议。",
    creating: "扫描中…",
    reviewContract: "审查合同",
    yourRecords: "已审查合同",
    totalReviews: "审查数",
    avgRisk: "平均风险分",
    totalHigh: "发现高危项",
    findingsTitle: "问题条款",
    missingTitle: "缺失保护项",
    emailTitle: "谈判邮件",
    copyEmail: "复制邮件",
    copied: "已复制！",
    riskScore: "风险评分",
    tipsTitle: "快速提示",
    tips: [
      "签约前审查每份客户合同 — 即使是「标准」模板也有陷阱",
      "优先处理高危项：付款条件、知识产权和责任上限",
      "交易热度还在时 24 小时内发送谈判邮件",
      "从已接受的修改条款逐步建立个人条款库",
    ],
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Contract Review Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited contract reviews, negotiation emails, and risk dashboards.",
    order: "Order:",
    openDashboard: "Open dashboard",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用合同审查助手！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限审查合同、生成谈判邮件并使用风险看板。",
    order: "订单号：",
    openDashboard: "打开控制台",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    TITLE_REQUIRED: "Contract title is required",
    CONTRACT_REQUIRED: "Please paste your contract text",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CONTRACT_NOT_FOUND: "Contract review not found",
    CONTRACT_REVIEW_FAILED: "Failed to review contract",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    TITLE_REQUIRED: "请填写合同标题",
    CONTRACT_REQUIRED: "请粘贴合同文本",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    CONTRACT_NOT_FOUND: "合同审查记录不存在",
    CONTRACT_REVIEW_FAILED: "合同审查失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Contract Review Pulse · Monthly",
    description: "Unlimited AI contract risk scans & negotiation emails.",
  },
  zh: {
    name: "合同审查助手 · 月付",
    description: "无限 AI 合同风险扫描与谈判邮件。",
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
