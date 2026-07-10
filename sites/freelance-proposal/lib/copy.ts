import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "HoneyBook +89% · ship proposals in 30s",
    title: "Freelance proposals without the bloat",
    subtitle:
      "Quote + contract clauses + invoice in one flow. Built for solo freelancers who only need proposals — not a $36/mo CRM.",
    ctaPrimary: "Create free",
    ctaPrimaryHref: "/proposal",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free proposals · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs HoneyBook $36+" },
      { stat: "30s", label: "full proposal ready" },
      { stat: "3-in-1", label: "quote + contract + invoice" },
    ],
    comparisonTitle: "What you get in one doc",
    audienceTitle: "Who uses it?",
    audiences: [
      { icon: "💻", title: "Web developer", desc: "Scope, milestones, deposit terms — client-ready in minutes" },
      { icon: "🎨", title: "Designer", desc: "Deliverables list + revision policy without a 50-page template" },
      { icon: "🧠", title: "Consultant", desc: "Hourly or fixed — payment terms that close deals" },
      { icon: "✍️", title: "Content writer", desc: "Per-article pricing with clear revision rounds" },
    ],
    sampleNote: "Example: $3,000 web redesign · 50% upfront",
    sampleDeliverable: "Responsive UI · Next.js build · CMS handoff",
    howItWorks: {
      title: "Three steps to a signed deal",
      steps: [
        { step: "1", title: "Fill project info", desc: "Client, deliverables, amount, payment terms" },
        { step: "2", title: "Generate", desc: "Quote + contract clauses + invoice number in one click" },
        { step: "3", title: "Send to client", desc: "Copy Markdown or share — e-sign ready structure" },
      ],
    },
    featuresTitle: "Core features",
    features: [
      { icon: "📄", title: "One-click proposals", desc: "Professional quote doc in 30 seconds, not 2 hours" },
      { icon: "📋", title: "Contract clauses", desc: "Standard freelancer terms: IP, revisions, cancellation" },
      { icon: "🧾", title: "Auto invoice block", desc: "Invoice number + line items + due date included" },
      { icon: "💰", title: "Multi-currency", desc: "USD / CNY / EUR for domestic and overseas clients" },
      { icon: "⚡", title: "10× faster than HoneyBook", desc: "No CRM setup — open, fill, send" },
      { icon: "🔒", title: "Generated on demand", desc: "Proposal built when you click generate — no long-term storage" },
    ],
    testimonialsTitle: "What freelancers say",
    testimonials: [
      {
        name: "Ming Z.",
        role: "Indie developer · full-stack",
        text: "HoneyBook hit $36/mo — I only need quotes. $29 here does exactly that. Five minutes per proposal.",
      },
      {
        name: "Sarah Lin",
        role: "Freelance designer",
        text: "Finally a tool that does proposals without 50 features I'll never use. Clean and fast.",
      },
      {
        name: "Jay",
        role: "Tech consultant",
        text: "Contract clause templates saved me a lawyer consult. Client sign-off rate went up.",
      },
    ],
    closing: {
      title: "Bonsai sold to Zoom. HoneyBook raised 89%.",
      subtitle:
        "Solo freelancers need quotes, contracts, invoices — not enterprise CRM. $29/mo day-one pricing because good tools are worth paying for.",
      ctaPrimary: "Create proposal",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Proposal preview",
      caption: "Fill form · generate quote + contract + invoice",
      preview:
        "📄 PROP-A1B2C3 · Valid 14 days\n\n## Web Redesign — Acme Corp\n\nDeliverables:\n· Responsive UI design\n· Next.js frontend build\n· CMS integration\n\nAmount: $3,000 USD\nTerms: 50% upfront, 50% on delivery\n\n✓ 5 contract clauses included\n✓ Invoice INV-X9Y8Z7 · Due in 15 days\n\nFree trials left: 4/5",
    },
  },
  zh: {
    badge: "HoneyBook 涨价 89% · 30 秒出报价单",
    title: "自由职业报价单，不要臃肿 CRM",
    subtitle:
      "报价 + 合同条款 + 发票一次生成。专为只用报价功能的自由职业者打造，不必为 $36/月 的 CRM 买单。",
    ctaPrimary: "免费创建",
    ctaPrimaryHref: "/proposal",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，HoneyBook $36 起" },
      { stat: "30 秒", label: "完整报价单就绪" },
      { stat: "三合一", label: "报价 + 合同 + 发票" },
    ],
    comparisonTitle: "一份文档包含全部",
    audienceTitle: "谁在用？",
    audiences: [
      { icon: "💻", title: "网站开发者", desc: "范围、里程碑、预付条款 — 几分钟出客户级报价" },
      { icon: "🎨", title: "设计师", desc: "交付物清单 + 修改政策，不用 50 页模板" },
      { icon: "🧠", title: "技术顾问", desc: "按小时或固定价 — 能成交的付款条款" },
      { icon: "✍️", title: "内容创作者", desc: "按篇定价，修改轮次写清楚" },
    ],
    sampleNote: "示例：$3,000 网站改版 · 50% 预付",
    sampleDeliverable: "响应式 UI · Next.js 开发 · CMS 交接",
    howItWorks: {
      title: "三步搞定客户报价",
      steps: [
        { step: "1", title: "填项目信息", desc: "客户、交付物、金额、付款条款" },
        { step: "2", title: "一键生成", desc: "报价 + 合同条款 + 发票号一次出齐" },
        { step: "3", title: "发给客户", desc: "复制 Markdown 或分享 — 电子签结构就绪" },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      { icon: "📄", title: "一键生成报价单", desc: "30 秒出专业报价文档，不用花 2 小时" },
      { icon: "📋", title: "内置合同条款", desc: "标准自由职业条款：知识产权、修改、取消" },
      { icon: "🧾", title: "自动发票区块", desc: "发票号 + 明细行 + 到期日一并生成" },
      { icon: "💰", title: "多币种", desc: "美元 / 人民币 / 欧元，国内外客户都适用" },
      { icon: "⚡", title: "比 HoneyBook 快 10 倍", desc: "无需 CRM 配置 — 打开、填写、发送" },
      { icon: "🔒", title: "按需生成", desc: "点击生成时即时构建报价，不长期存储客户信息" },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      {
        name: "张明",
        role: "独立开发者 · 全栈",
        text: "HoneyBook 涨到 $36/月，我只用报价功能。这里 $29 完全够用，5 分钟出一份报价。",
      },
      {
        name: "Sarah Lin",
        role: "自由设计师",
        text: "终于有个只做报价的工具，没有 50 个永远用不到的功能。干净、快。",
      },
      {
        name: "阿杰",
        role: "技术顾问",
        text: "合同条款模板省了我找律师的时间，客户签字率明显提高了。",
      },
    ],
    closing: {
      title: "Bonsai 被 Zoom 收购，HoneyBook 涨价 89%",
      subtitle:
        "自由职业者只需要报价、合同、发票 — 不需要企业 CRM。$29/月，第一天收费，因为好工具值得付费。",
      ctaPrimary: "创建报价单",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "报价单预览",
      caption: "填写表单 · 生成报价 + 合同 + 发票",
      preview:
        "📄 PROP-A1B2C3 · 有效期 14 天\n\n## 网站改版 — Acme 公司\n\n交付物：\n· 响应式 UI 设计\n· Next.js 前端开发\n· CMS 集成\n\n金额：$3,000 美元\n条款：50% 预付，50% 交付后\n\n✓ 含 5 条合同条款\n✓ 发票 INV-X9Y8Z7 · 15 天内到期\n\n剩余免费次数：4/5",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Freelance Proposal",
    subtitle: "One price, all features. Unlimited proposals at 1/4 of HoneyBook.",
    recommended: "Only plan",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs HoneyBook $36+/mo · cancel anytime",
    perks: [
      "Unlimited proposal generation",
      "Standard contract clause templates",
      "Auto invoice block",
      "Multi-currency USD/CNY/EUR",
      "4 industry templates (dev/design/consulting/content)",
      "Markdown export — copy anytime",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Contract templates need legal review and maintenance",
      "Paying users = freelancers running real client work",
      "Solo-maintained — $29 keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入自由职业报价单",
    subtitle: "一个价格，全部功能。HoneyBook 功能的 1/4 价格。",
    recommended: "推荐",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "对比 HoneyBook $36/月 · 随时取消",
    perks: [
      "无限生成报价单",
      "标准合同条款模板",
      "自动发票区块",
      "多币种 美元/人民币/欧元",
      "4 种行业模板（开发/设计/咨询/内容）",
      "Markdown 导出，随时复制",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 次，之后订阅？",
    whyItems: [
      "合同模板需要法律审核和维护",
      "付费用户 = 认真做业务的自由职业者",
      "一人维护，简单定价才能持续运营",
    ],
    includedTitle: "包含功能",
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}
