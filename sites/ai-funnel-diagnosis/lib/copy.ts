import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Mixpanel $500/mo? · AI tells you why users drop off",
    title: "AI Funnel Diagnosis — fix conversion leaks in 60 seconds",
    subtitle:
      "Paste your funnel data. Get AI-powered drop-off analysis + actionable fix suggestions. No $500/mo analytics bill. 5 free diagnoses, then $9.9/mo.",
    ctaPrimary: "Diagnose my funnel free",
    ctaPrimaryHref: "/diagnose",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free AI diagnoses · then $9.9/mo",
    stats: [
      { stat: "60s", label: "from data to fix plan" },
      { stat: "$9.9", label: "flat/mo vs Mixpanel $500+" },
      { stat: "5 fixes", label: "prioritized by revenue impact" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste funnel data",
          desc: "Enter step names and user counts — from Mixpanel, GA, or a spreadsheet",
        },
        {
          step: "2",
          title: "AI finds the leak",
          desc: "Instant analysis identifies your biggest drop-off step and root causes",
        },
        {
          step: "3",
          title: "Get fix suggestions",
          desc: "Prioritized action plan with estimated uplift — ship fixes this week",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🤖",
        title: "AI drop-off diagnosis",
        desc: "Pattern matching analyzes your funnel and explains why users leave at each step.",
      },
      {
        icon: "🎯",
        title: "Prioritized fix plan",
        desc: "Get 5 actionable suggestions ranked by revenue impact — not generic dashboards.",
      },
      {
        icon: "📊",
        title: "Step-by-step breakdown",
        desc: "Conversion rates, drop-off percentages, and leak highlighting for every step.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited AI diagnoses. No per-MAU pricing like Mixpanel or Amplitude.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex K.",
        role: "Solo SaaS founder",
        text: "Mixpanel showed me the drop-off chart but not what to fix. AI Funnel Diagnosis told me to switch to magic-link auth — conversion doubled.",
      },
      {
        name: "Mia T.",
        role: "Indie hacker",
        text: "62% leak at email verification. The AI suggested resend + reminder emails. Fixed in one afternoon, MRR up 40%.",
      },
      {
        name: "Chris P.",
        role: "Bootstrapped dev",
        text: "I paste funnel data from my spreadsheet every Monday. Five fix suggestions, one shipped per week. Best $9.9 I spend.",
      },
    ],
    closing: {
      title: "Stop staring at charts — start fixing leaks",
      subtitle: "5 free AI diagnoses · then $9.9/mo for unlimited",
      ctaPrimary: "Diagnose my funnel free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live AI diagnosis preview",
      caption: "SaaS signup funnel · AI-generated fix plan",
      preview:
        "🔍 AI Diagnosis: SaaS signup flow\n─────────────────────────────────\nLanding page     │ 2,400 users  │ 100.0%\nSignup started   │ 1,680 users  │  70.0%  │ ▼ 30.0%\nEmail verified   │   840 users  │  50.0%  │ ▼ 50.0% ★ LEAK\nActivated        │   672 users  │  80.0%  │ ▼ 20.0%\nPaid             │   336 users  │  50.0%  │ ▼ 50.0%\n─────────────────────────────────\nOverall conv: 14.0%\n\n🤖 AI Summary:\nCritical leak at Email verified (50% drop-off).\nFix this before optimizing other steps.\n\n✅ Top fixes (prioritized):\n1. [HIGH] Switch to magic-link auth → 25–45% fewer drop-offs\n2. [HIGH] Add resend + 10min reminder email → 15–25% recovery\n3. [MED]  A/B test simplified verify flow → 10–30% overall lift",
    },
  },
  zh: {
    badge: "Mixpanel $500/月？ · AI 告诉你用户为何流失",
    title: "AI 漏斗诊断 — 60 秒定位转化漏洞",
    subtitle:
      "粘贴漏斗数据，获得 AI 流失分析 + 可执行的修复建议。无需 $500/月 分析账单。免费体验 5 次诊断，之后 $9.9/月。",
    ctaPrimary: "免费诊断我的漏斗",
    ctaPrimaryHref: "/diagnose",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 AI 诊断 · 之后 $9.9/月",
    stats: [
      { stat: "60 秒", label: "从数据到修复方案" },
      { stat: "$9.9", label: "一口价/月，Mixpanel 要 $500+" },
      { stat: "5 条", label: "按收入影响排序的修复建议" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "粘贴漏斗数据",
          desc: "输入步骤名称和用户数量 — 来自 Mixpanel、GA 或表格",
        },
        {
          step: "2",
          title: "AI 定位漏洞",
          desc: "即时分析找出最大流失步骤及根本原因",
        },
        {
          step: "3",
          title: "获取修复建议",
          desc: "按优先级排列的行动计划，含预估提升 — 本周即可上线修复",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🤖",
        title: "AI 流失诊断",
        desc: "模式匹配分析漏斗，解释用户在哪一步、为何离开。",
      },
      {
        icon: "🎯",
        title: "优先级修复方案",
        desc: "获得 5 条按收入影响排序的可执行建议 — 不是泛泛的分析仪表盘。",
      },
      {
        icon: "📊",
        title: "逐步拆解",
        desc: "每个漏斗步骤的转化率、流失率和漏洞高亮。",
      },
      {
        icon: "💰",
        title: "$9.9/月 一口价",
        desc: "无限 AI 诊断。无 Mixpanel/Amplitude 式按 MAU 计费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex K.",
        role: "独立 SaaS 创始人",
        text: "Mixpanel 只给我看流失图，不告诉我怎么修。AI 漏斗诊断建议改用 Magic Link — 转化率翻倍。",
      },
      {
        name: "Mia T.",
        role: "独立开发者",
        text: "邮件验证步骤流失 62%。AI 建议加重发 + 提醒邮件。一个下午搞定，MRR 涨 40%。",
      },
      {
        name: "Chris P.",
        role: "自举开发者",
        text: "每周一从表格粘贴漏斗数据。五条修复建议，每周上线一条。最值的 $9.9。",
      },
    ],
    closing: {
      title: "别只盯着图表 — 开始修复漏洞",
      subtitle: "免费体验 5 次 AI 诊断 · 之后 $9.9/月无限次",
      ctaPrimary: "免费诊断我的漏斗",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "AI 诊断实时预览",
      caption: "SaaS 注册漏斗 · AI 生成的修复方案",
      preview:
        "🔍 AI 诊断：SaaS 注册流程\n─────────────────────────────────\n落地页         │ 2,400 用户  │ 100.0%\n开始注册       │ 1,680 用户  │  70.0%  │ ▼ 30.0%\n邮件验证       │   840 用户  │  50.0%  │ ▼ 50.0% ★ 漏洞\n激活           │   672 用户  │  80.0%  │ ▼ 20.0%\n付费           │   336 用户  │  50.0%  │ ▼ 50.0%\n─────────────────────────────────\n总转化率：14.0%\n\n🤖 AI 摘要：\n邮件验证步骤严重流失（50%）。\n请优先修复此步骤，再优化其他环节。\n\n✅ 优先修复（按影响排序）：\n1. [高] 改用 Magic Link 无密码登录 → 流失减少 25–45%\n2. [高] 添加重发 + 10 分钟提醒邮件 → 恢复 15–25%\n3. [中] A/B 测试简化验证流程 → 整体提升 10–30%",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join AI Funnel Diagnosis",
    subtitle: "One price, unlimited AI diagnoses. No per-MAU fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Mixpanel $500+/mo · cancel anytime",
    perks: [
      "Unlimited AI funnel diagnoses",
      "Prioritized fix plans with uplift estimates",
      "Step-by-step drop-off breakdown",
      "Leak detection & AI summaries",
      "Export diagnosis reports",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free diagnoses, then subscribe?",
    whyItems: [
      "AI diagnosis engine and report storage have real infrastructure costs",
      "Paying users = founders who actually optimize conversion",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 AI 漏斗诊断",
    subtitle: "一口价，AI 诊断不限量。不按 MAU 收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Mixpanel $500+/月 · 随时可取消",
    perks: [
      "AI 漏斗诊断不限量",
      "带预估提升的优先级修复方案",
      "逐步流失拆解",
      "漏洞检测与 AI 摘要",
      "导出诊断报告",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次诊断，之后订阅？",
    whyItems: [
      "AI 诊断引擎与报告存储有真实基础设施成本",
      "付费用户 = 真正优化转化的创始人",
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
