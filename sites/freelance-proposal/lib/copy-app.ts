import type { Locale } from "./i18n-shared";

export const studioCopy = {
  en: {
    title: "Create proposal",
    subtitle: "Generate quote + contract + invoice in 30 seconds",
    memberBadge: "✓ Member · unlimited proposals",
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free proposals left`,
    paywallTitle: "Free trial used up",
    paywallBody: "Subscribe $29/mo for unlimited proposals · 70% cheaper than HoneyBook",
    paywallCta: "Subscribe now",
    yourInfo: "Your info",
    clientInfo: "Client info",
    projectDetails: "Project details",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    clientNamePlaceholder: "Client company / name",
    clientEmailPlaceholder: "Client email",
    projectTitlePlaceholder: "Project title",
    deliverablesPlaceholder: "Deliverables (one per line)",
    timelinePlaceholder: "Timeline",
    amountPlaceholder: "Quote amount",
    paymentTermsPlaceholder: "Payment terms",
    includeContract: "Include standard contract clauses",
    generating: "Generating…",
    generateCta: (symbol: string, amount: string) => `Generate proposal · ${symbol}${amount}`,
    generated: "Proposal ready",
    copyMarkdown: "Copy Markdown",
    amountLabel: "Quote amount",
    invoiceLabel: "Invoice #",
    clausesIncluded: (n: number) => `✓ ${n} contract clauses included`,
    emptyTitle: "Fill the form to generate",
    emptyHint: "5 free tries for non-members",
    trialLowTitle: "Only {remaining} free proposals left",
    trialLowBody: "Subscribe for unlimited proposals — most freelancers upgrade after proposal #3.",
    trialLowCta: "View pricing",
    postGenerateTitle: "Proposal ready — keep the momentum",
    postGenerateBody: "Unlimited proposals + contract templates for $29/mo — 70% less than HoneyBook.",
    postGenerateCta: "Subscribe now",
    generateFailed: "Generation failed",
    currencies: { USD: "USD $", CNY: "CNY ¥", EUR: "EUR €" },
    defaultTimeline: "2-4 weeks",
    defaultPayment: "50% upfront, 50% on delivery",
  },
  zh: {
    title: "创建报价单",
    subtitle: "30 秒生成报价 + 合同 + 发票",
    memberBadge: "✓ 会员 · 无限生成",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    paywallTitle: "免费体验已用完",
    paywallBody: "订阅 $29/月，无限生成报价单 · 比 HoneyBook 便宜 70%",
    paywallCta: "立即订阅",
    yourInfo: "你的信息",
    clientInfo: "客户信息",
    projectDetails: "项目详情",
    namePlaceholder: "你的姓名",
    emailPlaceholder: "你的邮箱",
    clientNamePlaceholder: "客户公司/姓名",
    clientEmailPlaceholder: "客户邮箱",
    projectTitlePlaceholder: "项目标题",
    deliverablesPlaceholder: "交付物（每行一项）",
    timelinePlaceholder: "项目周期",
    amountPlaceholder: "报价金额",
    paymentTermsPlaceholder: "付款条款",
    includeContract: "包含标准合同条款",
    generating: "生成中…",
    generateCta: (symbol: string, amount: string) => `生成报价单 · ${symbol}${amount}`,
    generated: "报价单已生成",
    copyMarkdown: "复制 Markdown",
    amountLabel: "报价金额",
    invoiceLabel: "发票号",
    clausesIncluded: (n: number) => `✓ 已包含 ${n} 条合同条款`,
    emptyTitle: "填写左侧表单，一键生成报价单",
    emptyHint: "非会员免费体验 5 次",
    trialLowTitle: "仅剩 {remaining} 次免费报价",
    trialLowBody: "订阅解锁无限生成 — 多数自由职业者在第 3 份报价后升级。",
    trialLowCta: "查看定价",
    postGenerateTitle: "报价已生成 — 趁热打铁",
    postGenerateBody: "无限报价 + 合同模板，$29/月 — 比 HoneyBook 便宜 70%。",
    postGenerateCta: "立即订阅",
    generateFailed: "生成失败",
    currencies: { USD: "美元 $", CNY: "人民币 ¥", EUR: "欧元 €" },
    defaultTimeline: "2-4 周",
    defaultPayment: "50% 预付，50% 交付后 7 天内",
  },
} as const;

export const templateCopy = {
  en: [
    {
      id: "web-dev",
      name: "Web development",
      icon: "💻",
      defaults: {
        projectTitle: "Website design & development",
        deliverables: "Responsive UI design\nNext.js frontend\nCMS integration\n2 revision rounds",
        timeline: "4-6 weeks",
        paymentTerms: "50% upfront, 50% within 7 days of delivery",
      },
    },
    {
      id: "design",
      name: "UI/UX design",
      icon: "🎨",
      defaults: {
        projectTitle: "UI/UX design project",
        deliverables: "User research\nWireframes\nHigh-fidelity mockups\nDesign system doc",
        timeline: "2-3 weeks",
        paymentTerms: "100% upfront",
      },
    },
    {
      id: "consulting",
      name: "Consulting",
      icon: "🧠",
      defaults: {
        projectTitle: "Technical consulting",
        deliverables: "Architecture review\nTechnical spec document\n2 video calls\n30-day email support",
        timeline: "~20 hours estimated",
        paymentTerms: "Monthly, Net 15",
      },
    },
    {
      id: "content",
      name: "Content writing",
      icon: "✍️",
      defaults: {
        projectTitle: "Content writing services",
        deliverables: "10 SEO articles (800+ words)\nKeyword research\n1 revision round",
        timeline: "3 weeks",
        paymentTerms: "50% upfront, 50% on delivery",
      },
    },
  ],
  zh: [
    {
      id: "web-dev",
      name: "网站开发",
      icon: "💻",
      defaults: {
        projectTitle: "网站设计与开发",
        deliverables: "响应式网站设计\n前端开发（Next.js）\nCMS 集成\n2 轮修改",
        timeline: "4-6 周",
        paymentTerms: "50% 预付，50% 交付后 7 天内",
      },
    },
    {
      id: "design",
      name: "UI/UX 设计",
      icon: "🎨",
      defaults: {
        projectTitle: "UI/UX 设计项目",
        deliverables: "用户调研\n线框图\n高保真设计稿\n设计规范文档",
        timeline: "2-3 周",
        paymentTerms: "100% 预付",
      },
    },
    {
      id: "consulting",
      name: "技术咨询",
      icon: "🧠",
      defaults: {
        projectTitle: "技术咨询服务",
        deliverables: "架构评审\n技术方案文档\n2 次线上会议\n邮件支持 30 天",
        timeline: "按小时计费，预计 20 小时",
        paymentTerms: "月结，Net 15",
      },
    },
    {
      id: "content",
      name: "内容创作",
      icon: "✍️",
      defaults: {
        projectTitle: "内容创作服务",
        deliverables: "10 篇 SEO 文章（800+ 字）\n关键词研究\n1 轮修改",
        timeline: "3 周",
        paymentTerms: "50% 预付，50% 交付后",
      },
    },
  ],
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Freelance Proposal!",
    demoPaid: "Demo payment successful.",
    paidBody: "Payment successful — unlimited proposals and all templates are active.",
    order: "Order:",
    openStudio: "Create proposal",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入自由职业报价单！",
    demoPaid: "演示支付成功。",
    paidBody: "支付成功，你已是月度会员，可无限生成报价单。",
    order: "订单号：",
    openStudio: "创建报价单",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Freelance Proposal · Monthly",
    description: "Unlimited proposals, contract templates, invoice blocks.",
  },
  zh: {
    name: "自由职业报价单 · 月付",
    description: "无限报价单、合同模板、发票区块。",
  },
} as const;

export const apiErrors = {
  en: {
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    VALIDATION_FAILED: "Please complete all required project fields.",
    GENERATE_FAILED: "Proposal generation failed. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again.",
    FEEDBACK_FAILED: "Failed to submit feedback.",
    FEEDBACK_EMPTY: "Message cannot be empty.",
  },
  zh: {
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅 $29/月",
    VALIDATION_FAILED: "请填写完整项目信息",
    GENERATE_FAILED: "生成失败，请稍后重试",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    FEEDBACK_FAILED: "留言提交失败",
    FEEDBACK_EMPTY: "留言不能为空",
  },
} as const;

export type ApiErrorCode = keyof (typeof apiErrors)["en"];

export function getStudioCopy(locale: Locale) {
  return studioCopy[locale];
}

export function getTemplates(locale: Locale) {
  return templateCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}

export function getApiErrorMessage(locale: Locale, code: ApiErrorCode) {
  return apiErrors[locale][code];
}
