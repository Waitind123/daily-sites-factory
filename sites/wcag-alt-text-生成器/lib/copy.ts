import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "AltText.ai $49/mo · ShiftView $79/mo · $9.9/mo flat",
    title: "WCAG alt-text generator for web agencies",
    subtitle:
      "Batch-generate ADA-compliant alt text in seconds. 5 free generations, then $9.9/mo for unlimited client sites.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/generate",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free generations · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs AltText.ai $49+" },
      { stat: "450+", label: "ADA lawsuits in H1 2025" },
      { stat: "125", label: "char WCAG alt-text limit" },
    ],
    auditTitle: "Client audit preview",
    sampleTitle: "Recent generations",
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste image context",
          desc: "Describe subject, chart data, or icon purpose — no upload needed",
        },
        {
          step: "2",
          title: "Get WCAG alt text",
          desc: "AI-style rules engine outputs AA-compliant descriptions instantly",
        },
        {
          step: "3",
          title: "Export for clients",
          desc: "Copy, CSV batch export, or embed in your agency workflow",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "♿",
        title: "WCAG 2.2 AA compliant",
        desc: "Follows W3C alt-text best practices — decorative, informative, functional",
      },
      {
        icon: "📦",
        title: "Batch CSV processing",
        desc: "Upload 100+ image rows — generate alt text for entire client sites",
      },
      {
        icon: "⚖️",
        title: "ADA lawsuit shield",
        desc: "Documented compliance reports for client legal teams",
      },
      {
        icon: "🌐",
        title: "130+ language ready",
        desc: "English + Chinese output today, more locales coming",
      },
      {
        icon: "📊",
        title: "Compliance score",
        desc: "Each alt text gets a 0–100 score with improvement tips",
      },
      {
        icon: "🔗",
        title: "Agency white-label",
        desc: "Branded PDF reports under your agency name (Pro tier)",
      },
    ],
    testimonialsTitle: "What agencies say",
    testimonials: [
      {
        name: "Marcus T.",
        role: "Web agency owner",
        text: "Saved 150 hours on a 2,000-image client site. $9.9 beats manual alt-text writing every time.",
      },
      {
        name: "Sarah K.",
        role: "Accessibility consultant",
        text: "Clients ask for ADA compliance proof — this generates audit-ready alt text in bulk.",
      },
      {
        name: "David L.",
        role: "Freelance developer",
        text: "450+ overlay lawsuits in 2025. Real alt text, not widget overlays. Worth every penny.",
      },
    ],
    closing: {
      title: "AltText.ai is $49/mo. ShiftView is $79/mo.",
      subtitle: "Just $9.9/mo. Paste context → get WCAG alt text → ship compliant sites. Day-one pricing.",
      ctaPrimary: "Generate alt text",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Generation preview",
      caption: "Paste context · get WCAG alt text · copy to client CMS",
      preview:
        "Input: photo · \"Team reviewing wireframes on laptop\"\n\n✓ Alt text (94/100):\n\"Three designers reviewing wireframes on a laptop — product team sprint planning\"\n\n125 chars · WCAG 2.2 AA · Copy ✓\nFree trials left: 4/5",
    },
    sampleItems: [
      { id: "1", label: "Team photo", score: 94, alt: "Three designers reviewing wireframes on a laptop" },
      { id: "2", label: "Revenue chart", score: 91, alt: "Chart showing MRR up 23% quarter over quarter" },
      { id: "3", label: "Search icon", score: 88, alt: "Open site search" },
      { id: "4", label: "Decorative bg", score: 100, alt: 'alt="" (decorative)' },
    ],
    scoreLabel: (n: number) => `${n}/100`,
    auditStats: [
      { label: "Images scanned", value: 847 },
      { label: "Missing alt", value: 124 },
      { label: "Fixed today", value: 89 },
    ],
  },
  zh: {
    badge: "AltText.ai $49/月 · ShiftView $79/月 · $9.9/月一口价",
    title: "网页代理商的 WCAG Alt 文本生成器",
    subtitle:
      "批量生成 ADA 合规 alt 文本，秒级完成。免费体验 5 次，之后 $9.9/月无限客户站点。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/generate",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，AltText.ai 要 $49+" },
      { stat: "450+", label: "2025 上半年 ADA 诉讼" },
      { stat: "125", label: "字符 WCAG alt 上限" },
    ],
    auditTitle: "客户审计预览",
    sampleTitle: "最近生成",
    howItWorks: {
      title: "三步开始",
      steps: [
        {
          step: "1",
          title: "粘贴图片上下文",
          desc: "描述主体、图表数据或图标用途 — 无需上传图片",
        },
        {
          step: "2",
          title: "获取 WCAG alt 文本",
          desc: "规则引擎即时输出 AA 级合规描述",
        },
        {
          step: "3",
          title: "导出给客户",
          desc: "复制、CSV 批量导出，或嵌入代理商工作流",
        },
      ],
    },
    featuresTitle: "会员功能",
    features: [
      {
        icon: "♿",
        title: "WCAG 2.2 AA 合规",
        desc: "遵循 W3C alt 文本最佳实践 — 装饰性、信息性、功能性",
      },
      {
        icon: "📦",
        title: "CSV 批量处理",
        desc: "上传 100+ 行图片数据 — 为整个客户站点生成 alt 文本",
      },
      {
        icon: "⚖️",
        title: "ADA 诉讼防护",
        desc: "为客户法务团队提供合规文档报告",
      },
      {
        icon: "🌐",
        title: "130+ 语言就绪",
        desc: "今日支持中英文输出，更多语言即将推出",
      },
      {
        icon: "📊",
        title: "合规评分",
        desc: "每条 alt 文本获得 0–100 分及改进建议",
      },
      {
        icon: "🔗",
        title: "代理商白标",
        desc: "以你的代理商品牌出具 PDF 报告（专业版）",
      },
    ],
    testimonialsTitle: "代理商怎么说",
    testimonials: [
      {
        name: "马老师",
        role: "网页代理商老板",
        text: "2000 张图的客户站点省了 150 小时。$9.9 比手动写 alt 文本划算太多。",
      },
      {
        name: "Sarah",
        role: "无障碍顾问",
        text: "客户要 ADA 合规证明 — 这个工具批量生成审计级 alt 文本。",
      },
      {
        name: "小李",
        role: "自由开发者",
        text: "2025 年 450+ 起 overlay 诉讼。真 alt 文本，不是 widget 遮罩。值这个价。",
      },
    ],
    closing: {
      title: "AltText.ai 要 $49/月，ShiftView 要 $79/月",
      subtitle: "只要 $9.9/月。粘贴上下文 → 获取 WCAG alt 文本 → 交付合规站点。第一天收费。",
      ctaPrimary: "生成 alt 文本",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "生成预览",
      caption: "粘贴上下文 · 获取 WCAG alt 文本 · 复制到客户 CMS",
      preview:
        "输入：照片 · \"团队在笔记本前评审线框图\"\n\n✓ Alt 文本 (94/100)：\n\"三位设计师在笔记本前评审线框图 — 产品团队冲刺规划\"\n\n125 字符 · WCAG 2.2 AA · 复制 ✓\n剩余免费次数：4/5",
    },
    sampleItems: [
      { id: "1", label: "团队照片", score: 94, alt: "三位设计师在笔记本前评审线框图" },
      { id: "2", label: "收入图表", score: 91, alt: "图表显示 MRR 季度环比增长 23%" },
      { id: "3", label: "搜索图标", score: 88, alt: "打开站点搜索" },
      { id: "4", label: "装饰背景", score: 100, alt: 'alt=""（装饰性）' },
    ],
    scoreLabel: (n: number) => `${n}/100`,
    auditStats: [
      { label: "已扫描图片", value: 847 },
      { label: "缺失 alt", value: 124 },
      { label: "今日修复", value: 89 },
    ],
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join AltText Pro",
    subtitle: "One price, unlimited alt-text generations. No per-image fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs AltText.ai $49/mo · cancel anytime",
    perks: [
      "Unlimited alt-text generations",
      "Batch CSV processing (100+ rows)",
      "WCAG 2.2 AA compliance scoring",
      "Decorative / informative / functional modes",
      "CSV & JSON export for client handoff",
      "Agency white-label reports (coming soon)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free generations, then subscribe?",
    whyItems: [
      "AI-style generation and batch processing have real compute costs",
      "Paying users = agencies serious about ADA compliance",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入无障碍 Alt 文本",
    subtitle: "一个价格，无限 alt 文本生成。没有按张计费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCompetitor: "对比 AltText.ai $49/月 · 随时可取消",
    perks: [
      "无限 alt 文本生成",
      "CSV 批量处理（100+ 行）",
      "WCAG 2.2 AA 合规评分",
      "装饰性 / 信息性 / 功能性模式",
      "CSV 与 JSON 导出交付客户",
      "代理商白标报告（即将推出）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 次，之后订阅？",
    whyItems: [
      "批量生成和处理有真实计算成本",
      "付费用户 = 认真做 ADA 合规的代理商",
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
