import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Prefinery $99/mo? · AI validates every signup",
    title: "AI waitlist validation for indie launches",
    subtitle:
      "Score signup quality, filter junk leads, get launch recommendations. Referral boost + public counter. 5 free analyses, then $29/mo.",
    ctaPrimary: "Create a waitlist free",
    ctaPrimaryHref: "/lists",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free AI analyses · then $29/mo",
    stats: [
      { stat: "A–F", label: "lead quality grades per signup" },
      { stat: "$29", label: "flat/mo vs Prefinery $99+" },
      { stat: "2 min", label: "to launch + AI score your list" },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        { step: "1", title: "Create a waitlist", desc: "Name your product, get a public signup page with live counter" },
        { step: "2", title: "Collect signups", desc: "Share on Twitter, Indie Hackers, or embed on your teaser page" },
        { step: "3", title: "AI validates quality", desc: "Score each lead A–F, see health grade, get launch recommendations" },
      ],
    },
    featuresTitle: "Core features",
    features: [
      { icon: "🤖", title: "AI lead scoring", desc: "Every signup gets an A–F grade. Corporate domains, disposable emails, and intent signals scored instantly." },
      { icon: "📊", title: "Waitlist health analysis", desc: "One-click analysis: quality breakdown, top signals, and actionable launch recommendations." },
      { icon: "🔗", title: "Referral boost", desc: "Each signup gets a referral link. Share to move up the queue — viral loops built in." },
      { icon: "💰", title: "Flat $29/mo", desc: "Unlimited waitlists, AI analyses, and signups. No per-email fees like Prefinery." },
    ],
    testimonialsTitle: "What indie hackers say",
    testimonials: [
      { name: "Alex M.", role: "Solo founder", text: "40% of my signups were disposable emails. AI Waitlist flagged them before I wasted a launch email." },
      { name: "Priya S.", role: "Indie hacker", text: "The health score told me to wait — only 23 signups with C-grade leads. Saved me from a premature launch." },
      { name: "Chris L.", role: "Bootstrapped dev", text: "Corporate domain detection showed 35% B2B interest. Priced my launch at $29/mo instead of $9." },
    ],
    closing: {
      title: "Launch smarter with AI validation",
      subtitle: "5 free AI analyses · then $29/mo for unlimited",
      ctaPrimary: "Create a waitlist free",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "AI waitlist analysis preview",
      caption: "Lead scoring · health grade · launch recommendations",
      preview:
        "🤖 AI Waitlist Analysis — My SaaS Launch\n─────────────────────────────────\n   Health Score: 72/100  Grade: GOOD\n   Total signups: 127\n\n   Quality breakdown:\n   A ████████░░  32%  (corporate, high intent)\n   B ██████░░░░  28%\n   C ████░░░░░░  22%\n   D ██░░░░░░░░  12%\n   F █░░░░░░░░░   6%  (disposable filtered)\n\n   💡 Recommendations:\n   → 35% corporate domains — consider B2B pricing\n   → Send launch survey to top A/B leads first\n   → Enable email verification to cut F-grade signups",
    },
  },
  zh: {
    badge: "Prefinery $99/月？· AI 验证每个报名",
    title: "AI 驱动的等候名单验证",
    subtitle: "为每个报名评分、过滤无效线索、获取上线建议。推荐裂变 + 公开计数。免费体验 5 次 AI 分析，之后 $29/月。",
    ctaPrimary: "免费创建等候名单",
    ctaPrimaryHref: "/lists",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 AI 分析 · 之后 $29/月",
    stats: [
      { stat: "A–F", label: "每个报名的线索质量分级" },
      { stat: "$29", label: "一口价/月，Prefinery 要 $99+" },
      { stat: "2 分钟", label: "上线并对名单 AI 评分" },
    ],
    howItWorks: {
      title: "如何使用",
      steps: [
        { step: "1", title: "创建等候名单", desc: "输入产品名称，几秒内生成带实时计数的公开报名页" },
        { step: "2", title: "收集报名", desc: "分享到推特、Indie Hackers，或嵌入预告落地页" },
        { step: "3", title: "AI 验证质量", desc: "每个线索 A–F 评分，查看健康等级，获取上线建议" },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      { icon: "🤖", title: "AI 线索评分", desc: "每个报名获得 A–F 等级。企业域名、一次性邮箱、意向信号即时评分。" },
      { icon: "📊", title: "名单健康分析", desc: "一键分析：质量分布、主要信号、可执行的上线建议。" },
      { icon: "🔗", title: "推荐裂变", desc: "每位报名者获得专属推荐链接。分享可提升排队位置，自带传播闭环。" },
      { icon: "💰", title: "$29/月 一口价", desc: "等候名单、AI 分析、报名不限量。不像 Prefinery 按邮箱收费。" },
    ],
    testimonialsTitle: "独立开发者怎么说",
    testimonials: [
      { name: "Alex M.", role: "一人创始人", text: "40% 的报名是一次性邮箱。AI 等候名单在发上线邮件前就帮我标记出来了。" },
      { name: "Priya S.", role: "独立开发者", text: "健康分告诉我该再等等——只有 23 个报名且大多是 C 级线索。避免了一次过早上线。" },
      { name: "Chris L.", role: "自举创业者", text: "企业域名检测显示 35% B2B 兴趣。我把上线定价从 $9 调到了 $29/月。" },
    ],
    closing: {
      title: "用 AI 验证更聪明地上线",
      subtitle: "免费 5 次 AI 分析 · 之后 $29/月 不限量",
      ctaPrimary: "免费创建等候名单",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "AI 名单分析预览",
      caption: "线索评分 · 健康等级 · 上线建议",
      preview:
        "🤖 AI 名单分析 — 我的 SaaS 上线\n─────────────────────────────────\n   健康分：72/100  等级：良好\n   总报名：127 人\n\n   质量分布：\n   A ████████░░  32%  （企业邮箱，高意向）\n   B ██████░░░░  28%\n   C ████░░░░░░  22%\n   D ██░░░░░░░░  12%\n   F █░░░░░░░░░   6%  （一次性邮箱已标记）\n\n   💡 建议：\n   → 35% 企业域名 — 考虑 B2B 定价\n   → 优先向 A/B 级线索发送上线调研\n   → 开启邮箱验证以减少 F 级报名",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join AI Waitlist",
    subtitle: "One price, unlimited waitlists, AI analyses, and signups.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCanny: "vs Prefinery $99+/mo · cancel anytime",
    perks: [
      "Unlimited product waitlists",
      "Unlimited AI lead scoring & analysis",
      "A–F grade per signup",
      "Waitlist health recommendations",
      "Referral boost & leaderboard",
      "CSV email export",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free analyses, then subscribe?",
    whyItems: [
      "AI scoring and hosting signup pages costs real infrastructure",
      "Paying users = founders who actually launch products",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "订阅 AI 等候名单验证",
    subtitle: "一口价，等候名单、AI 分析、报名不限量。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCanny: "对比 Prefinery $99+/月 · 随时可取消",
    perks: [
      "不限产品等候名单数量",
      "不限 AI 线索评分与分析",
      "每个报名 A–F 等级",
      "名单健康度上线建议",
      "推荐裂变与排行榜",
      "邮箱 CSV 导出",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费 5 次分析，之后订阅？",
    whyItems: [
      "AI 评分与托管报名页有真实基础设施成本",
      "付费用户 = 真正会发布产品的创始人",
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
