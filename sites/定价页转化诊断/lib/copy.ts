import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Hotjar $39/mo? · $9.9/mo flat",
    title: "Pricing page conversion audit for indie hackers",
    subtitle:
      "Paste your /pricing URL, get heatmap zones, drop-off points, and A/B test ideas. 85% of visitors leave without buying — fix that. 5 free scans, then $9.9/mo.",
    ctaPrimary: "Audit my pricing page",
    ctaPrimaryHref: "/analyze",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free audits · then $9.9/mo",
    stats: [
      { stat: "85%", label: "visitors leave pricing without buying" },
      { stat: "$9.9", label: "flat/mo vs Hotjar $39+" },
      { stat: "2 min", label: "to get your first audit report" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Paste pricing page URL",
          desc: "Enter your /pricing or /join page — we scan layout, CTAs, and tier structure",
        },
        {
          step: "2",
          title: "Get heatmap + drop-off report",
          desc: "See which sections lose attention, where visitors bounce, and your conversion score",
        },
        {
          step: "3",
          title: "Ship A/B test ideas",
          desc: "Actionable copy and layout suggestions with expected lift — test with Page Split or your stack",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🔥",
        title: "Attention heatmap zones",
        desc: "Hero, pricing tiers, FAQ, CTA — see which blocks get eyeballs and which bleed visitors.",
      },
      {
        icon: "📉",
        title: "Drop-off funnel analysis",
        desc: "Pinpoint where 38–71% of visitors leave: scroll depth, tier selection, checkout click.",
      },
      {
        icon: "🧪",
        title: "A/B test suggestions",
        desc: "Concrete copy swaps for CTA, annual pricing, and social proof with expected lift ranges.",
      },
      {
        icon: "💰",
        title: "Flat $9.9/mo",
        desc: "Unlimited pricing page audits. No per-session fees like enterprise heatmap tools.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex K.",
        role: "Solo SaaS founder",
        text: "Hotjar wanted $39/mo just to see where people click on my pricing page. PriceLens gives me the audit in 2 minutes for $9.9.",
      },
      {
        name: "Mia T.",
        role: "Indie hacker",
        text: "Found out 52% drop at tier selection. Changed the recommended badge, conversion up 19% in a week.",
      },
      {
        name: "Chris P.",
        role: "Bootstrapped dev",
        text: "No SDK install, no session replay bloat. Paste URL, get fixes. Exactly what a solo founder needs.",
      },
    ],
    closing: {
      title: "Stop losing 85% of pricing page visitors",
      subtitle: "5 free audits · then $9.9/mo for unlimited scans",
      ctaPrimary: "Audit my pricing page",
      ctaSecondary: "See pricing",
    },
    productDemo: {
      title: "Sample pricing page audit",
      caption: "Heatmap zones · drop-off points · A/B suggestions",
      preview:
        "Audit: yoursaas.com/pricing\n─────────────────────────────────\nScore: 67/100  │  Est. conversion: 2.8%\n─────────────────────────────────\nHero headline      ████████████░░  78%  low risk\nPricing tiers      ██████░░░░░░░░  52%  HIGH drop-off\nCTA button         █████████░░░░░  71%  medium risk\n─────────────────────────────────\nFix #1: Add recommended badge on middle tier (+12–18%)\nFix #2: Change CTA to \"Start free — no card\" (+8–14%)",
    },
  },
  zh: {
    badge: "Hotjar $39/月？· $9.9/月一口价",
    title: "独立开发者的定价页转化诊断",
    subtitle:
      "粘贴 /pricing 链接，获取热力图分区、流失节点与 A/B 测试建议。85% 访客看完定价页不买 — 找到原因。免费体验 5 次，之后 $9.9/月。",
    ctaPrimary: "诊断我的定价页",
    ctaPrimaryHref: "/analyze",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "85%", label: "访客离开定价页未购买" },
      { stat: "$9.9", label: "一口价/月，Hotjar 要 $39+" },
      { stat: "2 分钟", label: "拿到第一份诊断报告" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "粘贴定价页链接",
          desc: "输入 /pricing 或 /join 页面 — 扫描布局、行动按钮与档位结构",
        },
        {
          step: "2",
          title: "获取热力图与流失报告",
          desc: "看清哪些区块失去注意力、访客在哪里跳出、你的转化评分",
        },
        {
          step: "3",
          title: "落地 A/B 测试建议",
          desc: "可执行的文案与布局优化建议，附带预期提升幅度",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🔥",
        title: "注意力热力图分区",
        desc: "首屏、定价档位、常见问题、行动按钮 — 看清哪些区块吸引目光、哪些流失访客。",
      },
      {
        icon: "📉",
        title: "流失漏斗分析",
        desc: "定位 38–71% 访客离开的位置：滚动深度、档位选择、结账点击。",
      },
      {
        icon: "🧪",
        title: "A/B 测试建议",
        desc: "行动按钮、年付定价、社会证明的具体文案替换方案，附带预期提升区间。",
      },
      {
        icon: "💰",
        title: "$9.9/月 一口价",
        desc: "定价页诊断不限次数，不像企业热力图工具按会话收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex K.",
        role: "一人 SaaS 创始人",
        text: "Hotjar 只看定价页点击就要 $39/月。PriceLens 两分钟出报告，$9.9 刚好够用。",
      },
      {
        name: "Mia T.",
        role: "独立开发者",
        text: "发现 52% 在选档位时流失。加了推荐角标，一周转化率涨 19%。",
      },
      {
        name: "Chris P.",
        role: "自举创业者",
        text: "不用装 SDK，没有会话回放臃肿功能。贴链接、拿方案，一人公司刚好。",
      },
    ],
    closing: {
      title: "别再流失 85% 的定价页访客",
      subtitle: "免费 5 次诊断 · 之后 $9.9/月 不限次数",
      ctaPrimary: "诊断我的定价页",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "定价页诊断报告示例",
      caption: "热力图分区 · 流失节点 · A/B 建议",
      preview:
        "诊断：你的saas.com/pricing\n─────────────────────────────────\n评分：67/100  │  预估转化：2.8%\n─────────────────────────────────\n首屏标题      ████████████░░  78%  低风险\n定价档位      ██████░░░░░░░░  52%  高流失\n行动按钮      █████████░░░░░  71%  中风险\n─────────────────────────────────\n建议 #1：中间档位加推荐角标（+12–18%）\n建议 #2：按钮改为「免费开始 — 无需信用卡」（+8–14%）",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join PriceLens",
    subtitle: "One price, unlimited pricing page audits. No per-session fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Hotjar $39+/mo · cancel anytime",
    perks: [
      "Unlimited pricing page audits",
      "Heatmap zone analysis",
      "Drop-off funnel reports",
      "A/B test copy suggestions",
      "Conversion score tracking",
      "Export reports (PDF)",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free audits, then subscribe?",
    whyItems: [
      "Page analysis and report generation costs real compute",
      "Paying users = founders who actually optimize pricing conversion",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 PriceLens",
    subtitle: "一口价，定价页诊断不限次数。不按会话收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Hotjar $39+/月 · 随时可取消",
    perks: [
      "定价页诊断不限次数",
      "热力图分区分析",
      "流失漏斗报告",
      "A/B 测试文案建议",
      "转化评分追踪",
      "报告导出（PDF）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次，之后订阅？",
    whyItems: [
      "页面分析与报告生成有真实算力成本",
      "付费用户 = 真正优化定价转化的创始人",
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
