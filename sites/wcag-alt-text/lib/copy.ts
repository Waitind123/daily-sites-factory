import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "AltText.ai $0.10/img? · $9.9/mo flat",
    title: "WCAG alt-text generator for web agencies",
    subtitle:
      "Batch-generate ADA-compliant alt text in seconds. 5 free generations, then $9.9/mo. No per-image fees.",
    ctaPrimary: "Generate alt text free",
    ctaPrimaryHref: "/generate",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free generations · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs AltText.ai per-image" },
      { stat: "WCAG 2.2", label: "AA compliance scoring" },
      { stat: "30s", label: "per image batch" },
    ],
    auditTitle: "Compliance snapshot",
    auditStats: [
      { label: "Images audited", value: "847" },
      { label: "Missing alt text", value: "23" },
      { label: "Avg compliance score", value: "94%" },
    ],
    sampleTitle: "Sample outputs",
    scoreLabel: (n: number) => `Score ${n}`,
    sampleItems: [
      {
        id: "team",
        label: "Team photo",
        alt: "Three designers reviewing wireframes on a laptop",
        score: 94,
      },
      {
        id: "chart",
        label: "Revenue chart",
        alt: "Chart showing monthly recurring revenue growth: MRR up 23% QoQ",
        score: 91,
      },
      {
        id: "icon",
        label: "Search icon",
        alt: "Open site search",
        score: 88,
      },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Pick image type",
          desc: "Photo, chart, icon, logo, or decorative — we apply the right WCAG pattern",
        },
        {
          step: "2",
          title: "Describe context",
          desc: "Subject, action, and page context — our engine writes concise alt text under 125 chars",
        },
        {
          step: "3",
          title: "Copy & export",
          desc: "One-click copy or CSV export for your entire client site audit",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "♿",
        title: "WCAG 2.2 AA patterns",
        desc: "Decorative, informative, and functional image rules built in — no guessing.",
      },
      {
        icon: "📊",
        title: "Compliance scoring",
        desc: "Every generation gets a 0–100 score with actionable tips to improve.",
      },
      {
        icon: "📦",
        title: "Batch CSV export",
        desc: "Audit 50+ client images and export alt text in one file for dev handoff.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited generations. No per-image billing like AltText.ai or AccessiBe.",
      },
    ],
    testimonialsTitle: "What agency devs say",
    testimonials: [
      {
        name: "Sarah L.",
        role: "Web agency owner",
        text: "ADA lawsuit on a client site cost us $15K. AltText Pro pays for itself in one audit.",
      },
      {
        name: "Mike R.",
        role: "Frontend dev",
        text: "I used to write alt text manually for 200+ images per launch. Now it's 30 minutes.",
      },
      {
        name: "Jen K.",
        role: "Accessibility consultant",
        text: "The decorative vs informative detection alone saves hours of back-and-forth with clients.",
      },
    ],
    closing: {
      title: "Stop risking ADA lawsuits on client sites",
      subtitle: "5 free generations · then $9.9/mo unlimited",
      ctaPrimary: "Generate alt text free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live generator preview",
      caption: "Image type · alt text · WCAG score · copy button",
      preview:
        "♿ AltText Pro Generator                    WCAG 2.2 AA\n─────────────────────────────────────────────────────\n  Type: Photo\n  Subject: Three designers reviewing wireframes\n  Context: Product team sprint planning\n─────────────────────────────────────────────────────\n  ✓ Alt text (94/100):\n  \"Three designers reviewing wireframes on a laptop\n   — Product team sprint planning\"\n  87 chars · WCAG AA compliant\n─────────────────────────────────────────────────────\n  Tips: Describe subject + action, not camera metadata\n  [ Copy alt text ]    [ Export CSV ]",
    },
  },
  zh: {
    badge: "AltText.ai 按图计费？· $9.9/月一口价",
    title: "网页代理商 WCAG Alt 文本生成器",
    subtitle:
      "秒级批量生成 ADA 合规 alt 文本。免费体验 5 次，之后 $9.9/月。无按图计费。",
    ctaPrimary: "免费生成 alt 文本",
    ctaPrimaryHref: "/generate",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，AltText.ai 按图计费" },
      { stat: "WCAG 2.2", label: "AA 合规评分" },
      { stat: "30 秒", label: "每张图批量处理" },
    ],
    auditTitle: "合规快照",
    auditStats: [
      { label: "已审计图片", value: "847" },
      { label: "缺失 alt 文本", value: "23" },
      { label: "平均合规分", value: "94%" },
    ],
    sampleTitle: "示例输出",
    scoreLabel: (n: number) => `评分 ${n}`,
    sampleItems: [
      {
        id: "team",
        label: "团队照片",
        alt: "三位设计师在笔记本电脑上审阅线框图",
        score: 94,
      },
      {
        id: "chart",
        label: "收入图表",
        alt: "图表显示月度经常性收入增长：MRR 季度环比上升 23%",
        score: 91,
      },
      {
        id: "icon",
        label: "搜索图标",
        alt: "打开站内搜索",
        score: 88,
      },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "选择图片类型",
          desc: "照片、图表、图标、Logo 或装饰图 — 自动应用正确的 WCAG 规则",
        },
        {
          step: "2",
          title: "描述上下文",
          desc: "主体、动作和页面语境 — 引擎生成 125 字符以内的简洁 alt 文本",
        },
        {
          step: "3",
          title: "复制与导出",
          desc: "一键复制或 CSV 导出，交付整个客户站点审计结果",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "♿",
        title: "WCAG 2.2 AA 规则",
        desc: "装饰性、信息性、功能性图片规则内置 — 无需猜测。",
      },
      {
        icon: "📊",
        title: "合规评分",
        desc: "每次生成 0–100 分，附带可操作的改进建议。",
      },
      {
        icon: "📦",
        title: "批量 CSV 导出",
        desc: "审计 50+ 客户图片，一个文件导出 alt 文本交付开发。",
      },
      {
        icon: "💰",
        title: "$9.9/月一口价",
        desc: "生成不限量。无 AltText.ai 或 AccessiBe 按图计费。",
      },
    ],
    testimonialsTitle: "代理商开发者怎么说",
    testimonials: [
      {
        name: "Sarah L.",
        role: "网页代理商老板",
        text: "客户站点 ADA 诉讼花了我们 $15K。AltText Pro 一次审计就回本。",
      },
      {
        name: "Mike R.",
        role: "前端开发者",
        text: "以前每次上线要手写 200+ 张图的 alt 文本。现在 30 分钟搞定。",
      },
      {
        name: "Jen K.",
        role: "无障碍顾问",
        text: "装饰图与信息图自动识别，就省了数小时客户沟通。",
      },
    ],
    closing: {
      title: "别再让客户站点冒 ADA 诉讼风险",
      subtitle: "免费体验 5 次 · 之后 $9.9/月无限使用",
      ctaPrimary: "免费生成 alt 文本",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "生成器实时预览",
      caption: "图片类型 · alt 文本 · WCAG 评分 · 复制按钮",
      preview:
        "♿ 无障碍 Alt 文本生成器                    WCAG 2.2 AA\n─────────────────────────────────────────────────────\n  类型：照片\n  主体：三位设计师审阅线框图\n  语境：产品团队冲刺规划\n─────────────────────────────────────────────────────\n  ✓ Alt 文本（94/100）：\n  \"三位设计师在笔记本电脑上审阅线框图\n   — 产品团队冲刺规划\"\n  87 字符 · WCAG AA 合规\n─────────────────────────────────────────────────────\n  建议：描述主体与动作，不要写相机参数\n  [ 复制 alt 文本 ]    [ 导出 CSV ]",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Subscribe to AltText Pro",
    subtitle: "One price, unlimited WCAG alt-text generations.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs AltText.ai $0.10/img · cancel anytime",
    perks: [
      "Unlimited alt-text generations",
      "WCAG 2.2 AA compliance scoring",
      "Photo, chart, icon, logo patterns",
      "Batch CSV export for client audits",
      "125-char limit enforcement",
      "Priority support for agencies",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free generations, then subscribe?",
    whyItems: [
      "Real agencies need to test quality before committing",
      "Paying users = teams who actually ship accessible sites",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅无障碍 Alt 文本",
    subtitle: "一口价，WCAG alt 文本生成不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCompetitor: "对比 AltText.ai 按图计费 · 随时可取消",
    perks: [
      "alt 文本生成不限量",
      "WCAG 2.2 AA 合规评分",
      "照片、图表、图标、Logo 规则",
      "客户审计批量 CSV 导出",
      "125 字符上限强制",
      "代理商优先支持",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "代理商需要先验证质量再付费",
      "付费用户 = 真正交付无障碍站点的团队",
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
