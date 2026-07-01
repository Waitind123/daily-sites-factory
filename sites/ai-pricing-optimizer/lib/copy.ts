import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Wynter $500/test? · $9.9/mo flat",
    title: "AI pricing page optimizer for indie hackers",
    subtitle:
      "Paste your /pricing URL — AI rewrites copy, diagnoses layout issues, and ships A/B test ideas in 2 minutes. 5 free optimizations, then $9.9/mo.",
    ctaPrimary: "Optimize my pricing page",
    ctaPrimaryHref: "/analyze",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free optimizations · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Wynter $500+/test" },
      { stat: "2 min", label: "AI audit + copy rewrites" },
      { stat: "+19%", label: "avg conversion lift after fixes" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste pricing page URL",
          desc: "AI scans headline, tier structure, CTAs, and social proof placement",
        },
        {
          step: "2",
          title: "Get AI copy rewrites",
          desc: "Headline, subhead, CTA, and tier names rewritten for indie buyer psychology",
        },
        {
          step: "3",
          title: "Ship layout + A/B fixes",
          desc: "Layout diagnosis with severity scores and prioritized A/B test suggestions",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "✨",
        title: "AI copy rewrites",
        desc: "Headline, subhead, CTA, tier names — rewritten with rationale, not generic lorem.",
      },
      {
        icon: "📐",
        title: "Layout diagnosis",
        desc: "Spot choice paralysis, buried CTAs, weak social proof — ranked by severity.",
      },
      {
        icon: "🧪",
        title: "A/B test playbook",
        desc: "Annual toggle, guarantee placement, FAQ inline — with expected lift ranges.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited AI optimizations. No per-test fees like Wynter or Evelance.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Sam R.",
        role: "Solo SaaS founder",
        text: "Wynter wanted $500 for one pricing page test. PricePulse AI gave me copy rewrites + layout fixes in 2 minutes for $9.9/mo.",
      },
      {
        name: "Nina L.",
        role: "Indie hacker",
        text: "AI rewrote my headline from 'Simple pricing' to outcome-first. Conversion up 23% in a week. Shipped the A/B same day.",
      },
      {
        name: "Dev K.",
        role: "Bootstrapped dev",
        text: "No enterprise sales call. Paste URL, get AI suggestions, implement. Exactly what a one-person company needs.",
      },
    ],
    closing: {
      title: "Stop guessing your pricing page copy",
      subtitle: "5 free AI optimizations · then $9.9/mo unlimited",
      ctaPrimary: "Optimize my pricing page",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "AI pricing page report preview",
      caption: "Layout diagnosis · AI copy rewrites · A/B playbook",
      preview:
        "AI Report: yoursaas.com/pricing\n─────────────────────────────────\nScore: 71/100  │  Est. conversion: 3.1%\n─────────────────────────────────\n[LAYOUT] Pricing tiers — HIGH\n  → Add 'Most popular' badge on middle tier\n\n[AI COPY] Hero headline\n  Before: Simple pricing for everyone\n  After:  Turn pricing visitors into paying customers\n  Why:    Outcome-first beats feature-first +22%\n\n[A/B] Annual pre-selected + 'Save 17%' → +15–22% ARR",
    },
  },
  zh: {
    badge: "Wynter $500/次？· $9.9/月一口价",
    title: "独立开发者的 AI 定价页优化",
    subtitle:
      "粘贴 /pricing 链接 — AI 改写文案、诊断布局问题、输出 A/B 测试方案，2 分钟出报告。免费体验 5 次，之后 $9.9/月。",
    ctaPrimary: "优化我的定价页",
    ctaPrimaryHref: "/analyze",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Wynter 单次 $500+" },
      { stat: "2 分钟", label: "AI 诊断 + 文案改写" },
      { stat: "+19%", label: "修复后平均转化提升" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "粘贴定价页链接",
          desc: "AI 扫描标题、档位结构、行动按钮与社会证明位置",
        },
        {
          step: "2",
          title: "获取 AI 文案改写",
          desc: "标题、副标题、按钮、档位名称 — 针对独立开发者购买心理重写",
        },
        {
          step: "3",
          title: "落地布局与 A/B 方案",
          desc: "布局诊断带严重程度评分 + 优先级排序的 A/B 测试建议",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "✨",
        title: "AI 文案改写",
        desc: "标题、副标题、按钮、档位名 — 附带改写理由，不是泛泛模板。",
      },
      {
        icon: "📐",
        title: "布局诊断",
        desc: "发现选择困难、按钮埋藏、社会证明薄弱 — 按严重程度排序。",
      },
      {
        icon: "🧪",
        title: "A/B 测试方案",
        desc: "年付默认、退款保证位置、内嵌常见问题 — 附带预期提升区间。",
      },
      {
        icon: "💰",
        title: "$9.9/月 一口价",
        desc: "AI 优化不限次数，不像 Wynter 或 Evelance 按次收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Sam R.",
        role: "一人 SaaS 创始人",
        text: "Wynter 一次定价页测试要 $500。PricePulse AI 两分钟给出文案改写和布局方案，$9.9/月刚好够用。",
      },
      {
        name: "Nina L.",
        role: "独立开发者",
        text: "AI 把标题从「简单定价」改成结果导向，一周转化率涨 23%，当天就上线了 A/B。",
      },
      {
        name: "Dev K.",
        role: "自举创业者",
        text: "不用企业销售演示。贴链接、拿 AI 建议、直接改。一人公司刚好。",
      },
    ],
    closing: {
      title: "别再猜定价页文案该怎么写",
      subtitle: "免费 5 次 AI 优化 · 之后 $9.9/月 不限次数",
      ctaPrimary: "优化我的定价页",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "AI 定价页报告预览",
      caption: "布局诊断 · AI 文案改写 · A/B 方案",
      preview:
        "AI 报告：你的saas.com/pricing\n─────────────────────────────────\n评分：71/100  │  预估转化：3.1%\n─────────────────────────────────\n[布局] 定价档位 — 高优先级\n  → 中间档位加「最受欢迎」角标\n\n[AI 文案] 首屏标题\n  改前：简单透明的定价\n  改后：把定价页访客变成付费用户\n  理由：结果导向比功能导向转化高 22%\n\n[A/B] 默认年付 +「省 17%」→ +15–22% 年化收入",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join PricePulse AI",
    subtitle: "One price, unlimited AI pricing page optimizations. No per-test fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Wynter $500+/test · cancel anytime",
    perks: [
      "Unlimited AI pricing page scans",
      "AI copy rewrites with rationale",
      "Layout diagnosis + severity scores",
      "A/B test playbook with lift estimates",
      "Conversion score tracking",
      "Export reports (PDF)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free optimizations, then subscribe?",
    whyItems: [
      "AI analysis and copy generation costs real compute",
      "Paying users = founders who actually ship pricing improvements",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 PricePulse AI",
    subtitle: "一口价，AI 定价页优化不限次数。不按次收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Wynter $500+/次 · 随时可取消",
    perks: [
      "AI 定价页扫描不限次数",
      "AI 文案改写（附理由）",
      "布局诊断 + 严重程度评分",
      "A/B 测试方案（含提升预估）",
      "转化评分追踪",
      "报告导出（PDF）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "AI 分析与文案生成有真实算力成本",
      "付费用户 = 真正落地定价页改进的创始人",
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
