import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Baremetrics $50+/mo? · $29/mo flat",
    title: "Customer health scores for indie SaaS",
    subtitle:
      "Spot churn before it happens. Health scores, at-risk alerts, Stripe-only — connect in 2 minutes. 5 free scans, then $29/mo.",
    ctaPrimary: "Scan customers free",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free scans · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Baremetrics $50+" },
      { stat: "8", label: "health signals per customer" },
      { stat: "2 min", label: "to connect Stripe & see at-risk" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Connect Stripe",
          desc: "Paste your restricted API key — read-only, subscriptions only",
        },
        {
          step: "2",
          title: "Get health scores",
          desc: "Each customer gets a 0–100 score based on activity, payments, and engagement",
        },
        {
          step: "3",
          title: "Act on alerts",
          desc: "Critical and at-risk customers flagged — reach out before they cancel",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "💚",
        title: "Customer health scores",
        desc: "0–100 score per subscriber. See who's thriving and who's about to churn.",
      },
      {
        icon: "🚨",
        title: "Churn risk alerts",
        desc: "Critical and at-risk customers surfaced instantly. No digging through Stripe exports.",
      },
      {
        icon: "🔒",
        title: "Stripe subscriptions only",
        desc: "Read-only key. We analyze subscription data — no CRM bloat or enterprise setup.",
      },
      {
        icon: "💰",
        title: "Flat $29/mo",
        desc: "Unlimited scans, unlimited customers. No per-seat fees like Baremetrics.",
      },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      {
        name: "Sarah M.",
        role: "Solo SaaS founder",
        text: "Baremetrics wanted $50/mo when I had 60 customers. Churn Pulse flagged 3 at-risk accounts I saved personally.",
      },
      {
        name: "Alex T.",
        role: "Indie hacker",
        text: "I used to discover churn in my MRR drop. Now I see health scores drop 2 weeks before cancellation.",
      },
      {
        name: "Kevin L.",
        role: "Bootstrapped dev",
        text: "Customer success tools are built for 50-person teams. I just need to know who to email this week.",
      },
    ],
    closing: {
      title: "Save customers before they cancel",
      subtitle: "5 free scans · then $29/mo for unlimited health monitoring",
      ctaPrimary: "Scan customers free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Live health dashboard preview",
      caption: "Health scores · churn alerts · at-risk customers — updated on scan",
      preview:
        "💚 Customer Health Dashboard           Last scan: 3 min ago\n─────────────────────────────────────────────────────\n  Avg Score    Healthy    At-Risk    Critical\n  72           5          2          1\n─────────────────────────────────────────────────────\n  🚨 CHURN ALERTS\n  ⚠ Design Studio      Score: 38  MRR: $89   21d inactive\n  ⚠ Pixel Works        Score: 42  MRR: $49   12d inactive\n  🔴 Cloud Nine         Score: 28  MRR: $199  2 payment fails\n─────────────────────────────────────────────────────\n  [ Scan now ]    [ Export CSV ]    [ Email alerts ]",
    },
  },
  zh: {
    badge: "Baremetrics 要 $50+/月？· $29/月一口价",
    title: "独立开发者客户健康分",
    subtitle:
      "在流失发生前预警。健康分、风险告警、仅连 Stripe — 2 分钟接入。免费体验 5 次扫描，之后 $29/月。",
    ctaPrimary: "免费扫描客户",
    ctaPrimaryHref: "/dashboard",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Baremetrics 要 $50+" },
      { stat: "8", label: "每位客户的健康信号" },
      { stat: "2 分钟", label: "连接 Stripe 查看风险客户" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        {
          step: "1",
          title: "连接 Stripe",
          desc: "粘贴只读 API 密钥 — 仅订阅数据，无需写入权限",
        },
        {
          step: "2",
          title: "获取健康分",
          desc: "每位客户根据活跃度、付款和参与度获得 0–100 分",
        },
        {
          step: "3",
          title: "处理告警",
          desc: "高危和中危客户即时标记 — 在取消前主动联系",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "💚",
        title: "客户健康分",
        desc: "每位订阅者 0–100 分。看清谁状态良好、谁即将流失。",
      },
      {
        icon: "🚨",
        title: "流失风险告警",
        desc: "高危和中危客户即时呈现，无需翻 Stripe 导出表。",
      },
      {
        icon: "🔒",
        title: "仅 Stripe 订阅数据",
        desc: "只读密钥。分析订阅数据 — 无 CRM 臃肿或企业级配置。",
      },
      {
        icon: "💰",
        title: "$29/月一口价",
        desc: "无限扫描、无限客户数。无 Baremetrics 式按席位收费。",
      },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      {
        name: "Sarah M.",
        role: "独立 SaaS 创始人",
        text: "我只有 60 个客户时 Baremetrics 要 $50/月。Churn Pulse 标记了 3 个风险账户，我亲自挽回。",
      },
      {
        name: "Alex T.",
        role: "独立开发者",
        text: "以前从 MRR 下跌才发现流失。现在取消前两周就能看到健康分下降。",
      },
      {
        name: "Kevin L.",
        role: "自举开发者",
        text: "客户成功工具为 50 人团队设计。我只需要知道这周该邮件联系谁。",
      },
    ],
    closing: {
      title: "在客户取消前挽回他们",
      subtitle: "免费体验 5 次扫描 · 之后 $29/月无限健康监控",
      ctaPrimary: "免费扫描客户",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "健康仪表盘实时预览",
      caption: "健康分 · 流失告警 · 风险客户 — 扫描即更新",
      preview:
        "💚 客户健康仪表盘                    上次扫描：3 分钟前\n─────────────────────────────────────────────────────\n  平均分      健康      中危      高危\n  72          5         2         1\n─────────────────────────────────────────────────────\n  🚨 流失告警\n  ⚠ 设计工作室      分数：38  MRR：$89   21 天未活跃\n  ⚠ 像素工坊        分数：42  MRR：$49   12 天未活跃\n  🔴 云端九号        分数：28  MRR：$199  2 次付款失败\n─────────────────────────────────────────────────────\n  [ 立即扫描 ]    [ 导出 CSV ]    [ 邮件告警 ]",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Churn Pulse",
    subtitle: "One price, unlimited health scans. No per-customer fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Baremetrics $50+/mo · cancel anytime",
    perks: [
      "Unlimited health scans",
      "Customer health scores 0–100",
      "Churn risk alerts (critical + at-risk)",
      "Stripe subscription data only",
      "CSV export of at-risk customers",
      "Read-only Stripe key (secure)",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free scans, then subscribe?",
    whyItems: [
      "Stripe API calls and health scoring need real infrastructure",
      "Paying users = founders who actually monitor customer health weekly",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅客户健康分",
    subtitle: "一口价，健康扫描不限量。不按客户数收费。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Baremetrics $50+/月 · 随时可取消",
    perks: [
      "无限健康扫描",
      "客户健康分 0–100",
      "流失风险告警（高危 + 中危）",
      "仅 Stripe 订阅数据",
      "风险客户 CSV 导出",
      "只读 Stripe 密钥（安全）",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次扫描，之后订阅？",
    whyItems: [
      "Stripe API 调用与健康评分有真实基础设施成本",
      "付费用户 = 真正每周监控客户健康的创始人",
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
