import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "HN AppGaps trend · $29/mo flat",
    title: "Turn App Store 1-star reviews into your next SaaS",
    subtitle:
      "Cluster negative reviews into market gaps and startup ideas. Validate before you build. 5 free scans, then $29/mo.",
    ctaPrimary: "Scan reviews free",
    ctaPrimaryHref: "/mine",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free scans · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs agency reports $500+" },
      { stat: "12 sec", label: "to cluster pain themes" },
      { stat: "5 types", label: "missing · broken · overpriced · gap · opportunity" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Enter a category",
          desc: "Type a niche: invoice, habit, booking, fitness, notes…",
        },
        {
          step: "2",
          title: "Cluster 1-star reviews",
          desc: "We group negative reviews by pain theme with intensity scores",
        },
        {
          step: "3",
          title: "Ship the gap",
          desc: "Build a $29/mo micro-SaaS solving the top complaint cluster",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📱",
        title: "1-star review clustering",
        desc: "Auto-group App Store complaints into missing features, bugs, pricing rage, and market gaps.",
      },
      {
        icon: "📊",
        title: "Pain intensity scoring",
        desc: "Rank complaint clusters so you build the highest-value opportunity first.",
      },
      {
        icon: "🎯",
        title: "App + category context",
        desc: "See which competitor app each quote came from — know exactly what to beat.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited category scans. No $89 one-off market study fees.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Alex M.",
        role: "Solo founder",
        text: "Found 6 invoice-app complaints in one scan. Shipped a Stripe-first invoicing tool in a weekend.",
      },
      {
        name: "Priya S.",
        role: "Indie hacker",
        text: "HN AppGaps thread inspired this. Way faster than manually reading 200 App Store reviews.",
      },
      {
        name: "Chris L.",
        role: "Bootstrapped dev",
        text: "Clustered 'no offline mode' across 4 travel apps. That's my wedge for a nomad notes app.",
      },
    ],
    closing: {
      title: "Stop guessing what to build next",
      subtitle: "5 free scans · then $29/mo for unlimited review mining",
      ctaPrimary: "Scan reviews free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live review clustering",
      caption: "Category: invoice · 8 pain clusters in 4.1s",
      preview:
        "📱 Scanning App Store 1★ reviews…\n─────────────────────────────────\n★ BROKEN · intensity 10/10\n\"Crashes every PDF export. Waiting 6 months for a fix.\"\n  — Invoice Maker Pro · App Store\n\n★ MISSING FEATURE · intensity 9/10\n\"No Stripe integration — copy-paste amounts manually.\"\n  — BillEasy · App Store\n\n★ OVERPRICED · intensity 10/10\n\"$14.99/mo for basic tracking. Streaks does more for $4.99.\"\n  — HabitStack · App Store\n─────────────────────────────────\n8 clusters · 3 market gaps · Build now →",
    },
  },
  zh: {
    badge: "HN AppGaps 热议 · $29/月一口价",
    title: "把应用商店 1 星差评变成你的下一个 SaaS",
    subtitle:
      "将差评聚类为市场空白和创业点子，先验证再开发。免费体验 5 次扫描，之后 $29/月。",
    ctaPrimary: "免费扫描差评",
    ctaPrimaryHref: "/mine",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，机构报告要 $500+" },
      { stat: "12 秒", label: "聚类痛点主题" },
      { stat: "5 类", label: "缺失 · 故障 · 贵 · 空白 · 机会" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "输入品类关键词",
          desc: "输入细分领域：发票、习惯、预约、健身、笔记…",
        },
        {
          step: "2",
          title: "聚类 1 星差评",
          desc: "按痛点主题分组并标注强度分数",
        },
        {
          step: "3",
          title: "填补空白上线",
          desc: "针对最高分投诉簇，快速上线 $29/月 微 SaaS",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📱",
        title: "1 星差评聚类",
        desc: "自动将应用商店投诉分为功能缺失、严重故障、定价过高和市场空白。",
      },
      {
        icon: "📊",
        title: "痛点强度评分",
        desc: "按强度排序投诉簇，优先做最高价值的机会。",
      },
      {
        icon: "🎯",
        title: "应用与品类来源",
        desc: "显示每条引用来自哪个竞品应用 — 清楚知道要打败谁。",
      },
      {
        icon: "💰",
        title: "$29/月 一口价",
        desc: "品类扫描不限量，不像市场调研报告收 $89 一次性费用。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Alex M.",
        role: "一人创始人",
        text: "一次扫描找到 6 条发票类投诉。周末就上线了 Stripe 直连发票工具。",
      },
      {
        name: "Priya S.",
        role: "独立开发者",
        text: "HN AppGaps 帖子启发了我。比手动读 200 条应用商店评论快多了。",
      },
      {
        name: "Chris L.",
        role: "自举创业者",
        text: "聚类出 4 个旅行应用的「无离线模式」投诉。这就是我游民笔记应用的切入点。",
      },
    ],
    closing: {
      title: "别再猜下一个该做什么产品",
      subtitle: "免费 5 次扫描 · 之后 $29/月 不限量挖掘",
      ctaPrimary: "免费扫描差评",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "差评聚类实时预览",
      caption: "品类：invoice · 4.1 秒内聚类 8 个痛点主题",
      preview:
        "📱 正在扫描应用商店 1★ 差评…\n─────────────────────────────────\n★ 严重故障 · 强度 10/10\n「每次导出 PDF 都崩溃，等了 6 个月还没修。」\n  — Invoice Maker Pro · 应用商店\n\n★ 功能缺失 · 强度 9/10\n「没有 Stripe 集成，金额只能手动复制粘贴。」\n  — BillEasy · 应用商店\n\n★ 定价过高 · 强度 10/10\n「基础习惯追踪要 $14.99/月，Streaks $4.99 功能更多。」\n  — HabitStack · 应用商店\n─────────────────────────────────\n8 个主题 · 3 个市场空白 · 立即开做 →",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join AppGap Pulse",
    subtitle: "One price, unlimited App Store review mining. No per-scan fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs $89 market study reports · cancel anytime",
    perks: [
      "Unlimited category scans",
      "1-star review clustering",
      "Pain intensity scoring",
      "Competitor app tracking",
      "Export opportunity lists",
      "Custom branding (no badge)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free scans, then subscribe?",
    whyItems: [
      "Clustering and scoring reviews costs real compute",
      "Paying users = founders who actually ship products",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅应用商店差评挖痛点",
    subtitle: "一口价，差评挖掘不限量。不按扫描次数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 $89 市场调研报告 · 随时可取消",
    perks: [
      "品类扫描不限量",
      "1 星差评聚类",
      "痛点强度评分",
      "竞品应用追踪",
      "机会列表导出",
      "自定义品牌（无角标）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次扫描，之后订阅？",
    whyItems: [
      "差评聚类与评分有真实计算成本",
      "付费用户 = 真正会 ship 产品的创始人",
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
