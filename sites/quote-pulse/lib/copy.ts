import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "HoneyBook $36/mo? · $9.9/mo flat",
    title: "Freelance quotes, contracts & invoices — without the HoneyBook tax",
    subtitle:
      "Create proposals, auto-generate contracts and invoices. 5 free quotes, then $9.9/mo unlimited.",
    ctaPrimary: "Create quote free",
    ctaPrimaryHref: "/quotes",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs HoneyBook $36+/mo" },
      { stat: "3-in-1", label: "quote + contract + invoice" },
      { stat: "2 min", label: "to send your first proposal" },
    ],
    howItWorks: {
      title: "Workflow",
      steps: [
        {
          step: "1",
          title: "Fill project details",
          desc: "Client name, project scope, and amount — no bloated CRM setup",
        },
        {
          step: "2",
          title: "Generate contract",
          desc: "One-click freelance agreement with scope, payment terms, and IP clause",
        },
        {
          step: "3",
          title: "Send invoice",
          desc: "Professional invoice PDF-ready text — track draft, sent, paid status",
        },
      ],
    },
    featuresTitle: "Built for solo freelancers",
    features: [
      {
        icon: "📋",
        title: "Quote builder",
        desc: "Clean proposals with line items and totals. No 20-field onboarding wizard.",
      },
      {
        icon: "📝",
        title: "Contract templates",
        desc: "Freelance service agreement auto-filled from your quote. Edit and e-sign ready.",
      },
      {
        icon: "💵",
        title: "Invoice generator",
        desc: "Turn accepted quotes into invoices with due dates and payment notes.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited quotes, contracts, and invoices. No 89% price hike surprises.",
      },
    ],
    testimonialsTitle: "What freelancers say",
    testimonials: [
      {
        name: "Lisa M.",
        role: "Brand designer",
        text: "HoneyBook jumped to $36/mo. Quote Pulse does quotes + contracts for $9.9.",
      },
      {
        name: "James K.",
        role: "Dev consultant",
        text: "I only used HoneyBook for proposals. This is exactly that — minus the bloat.",
      },
      {
        name: "Ana R.",
        role: "Copywriter",
        text: "Sent my first client quote in 2 minutes. Contract text was ready to copy-paste.",
      },
    ],
    closing: {
      title: "Stop overpaying for client management",
      subtitle: "5 free quotes · then $9.9/mo for unlimited proposals + contracts + invoices",
      ctaPrimary: "Create quote free",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Quote preview",
      caption: "Proposal · contract · invoice — all from one form",
      preview:
        "📋 Quote Pulse\n─────────────────────────────────\n   DRAFT (1)  ·  SENT (3)  ·  PAID (8)\n\n   QP-2026-4821  Website redesign\n   Client: Sarah Chen · sarah@startup.io\n   Amount: $4,500 USD\n\n   ┌─ Contract (auto-generated) ────────┐\n   │ FREELANCE SERVICE AGREEMENT        │\n   │ Scope: Homepage + 5 landing pages  │\n   │ 50% deposit, 50% on delivery       │\n   │ IP transfers upon full payment     │\n   └────────────────────────────────────┘\n   [ Generate Invoice ]  [ Mark Sent ]\n\n   QP-2026-4819  Logo package · $1,200\n   Status: Paid · Invoice #INV-2026-4819",
    },
  },
  zh: {
    badge: "HoneyBook $36/月？· $9.9/月一口价",
    title: "自由职业报价、合同与发票 — 不交 HoneyBook 税",
    subtitle:
      "创建报价单，自动生成合同与发票。免费体验 5 次，之后 $9.9/月不限量。",
    ctaPrimary: "免费创建报价",
    ctaPrimaryHref: "/quotes",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，HoneyBook 要 $36+/月" },
      { stat: "三合一", label: "报价 + 合同 + 发票" },
      { stat: "2 分钟", label: "发出第一份提案" },
    ],
    howItWorks: {
      title: "使用流程",
      steps: [
        {
          step: "1",
          title: "填写项目信息",
          desc: "客户名称、项目范围、金额 — 无需臃肿的 CRM 配置",
        },
        {
          step: "2",
          title: "生成合同",
          desc: "一键生成自由职业服务协议，含范围、付款条款与知识产权条款",
        },
        {
          step: "3",
          title: "发送发票",
          desc: "专业发票文本可直接复制 — 追踪草稿、已发送、已付款状态",
        },
      ],
    },
    featuresTitle: "为独立自由职业者设计",
    features: [
      {
        icon: "📋",
        title: "报价生成器",
        desc: "清晰的提案含明细与总额。无需 20 个字段的入职向导。",
      },
      {
        icon: "📝",
        title: "合同模板",
        desc: "根据报价自动填充服务协议。可编辑，支持电子签名。",
      },
      {
        icon: "💵",
        title: "发票生成",
        desc: "将已接受的报价转为带到期日与付款说明的发票。",
      },
      {
        icon: "💰",
        title: "$9.9/月 一口价",
        desc: "报价、合同、发票不限量。不怕 89% 涨价突袭。",
      },
    ],
    testimonialsTitle: "自由职业者怎么说",
    testimonials: [
      {
        name: "Lisa M.",
        role: "品牌设计师",
        text: "HoneyBook 涨到 $36/月。极简报价单报价+合同只要 $9.9。",
      },
      {
        name: "James K.",
        role: "开发顾问",
        text: "我只用 HoneyBook 做提案。这就是那个功能 — 没有多余包袱。",
      },
      {
        name: "Ana R.",
        role: "文案撰稿人",
        text: "2 分钟发出第一份客户报价。合同文本直接复制就能用。",
      },
    ],
    closing: {
      title: "别再为客户管理多付钱",
      subtitle: "免费 5 次 · 之后 $9.9/月 无限报价 + 合同 + 发票",
      ctaPrimary: "免费创建报价",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "报价预览",
      caption: "一份表单 · 提案、合同、发票一次搞定",
      preview:
        "📋 极简报价单\n─────────────────────────────────\n   草稿 (1)  ·  已发送 (3)  ·  已付款 (8)\n\n   QP-2026-4821  网站改版\n   客户：陈莎拉 · sarah@startup.io\n   金额：$4,500 美元\n\n   ┌─ 合同（自动生成）───────────────┐\n   │ 自由职业服务协议               │\n   │ 范围：首页 + 5 个落地页        │\n   │ 50% 定金，50% 交付后付清       │\n   │ 全款到账后知识产权转移         │\n   └──────────────────────────────┘\n   [ 生成发票 ]  [ 标记已发送 ]\n\n   QP-2026-4819  Logo 套餐 · $1,200\n   状态：已付款 · 发票号 INV-2026-4819",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Quote Pulse",
    subtitle: "One price, unlimited quotes, contracts, and invoices.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs HoneyBook $36+/mo · cancel anytime",
    perks: [
      "Unlimited quotes & proposals",
      "Auto-generated contracts",
      "Invoice generator",
      "Draft / sent / paid tracking",
      "Client & project history",
      "No per-client fees",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Document generation and storage cost real infrastructure",
      "Paying users = freelancers who actually bill clients",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅极简报价单",
    subtitle: "一口价，报价、合同、发票不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 HoneyBook $36+/月 · 随时可取消",
    perks: [
      "报价与提案不限量",
      "自动生成合同",
      "发票生成器",
      "草稿 / 已发送 / 已付款追踪",
      "客户与项目历史",
      "不按客户数收费",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "文档生成与存储有真实基础设施成本",
      "付费用户 = 真正在向客户收费的自由职业者",
      "一人维护 — 一口价才能持续运营",
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
