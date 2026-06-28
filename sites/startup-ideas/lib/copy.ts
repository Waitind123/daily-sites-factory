import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "BigIdeasDB $9/mo · IdeaProof $49/mo · $9.9/mo",
    title: "Curated startup ideas with deep market analysis",
    subtitle:
      "8+ validated micro-SaaS directions. 5 free deep analyses, then $9.9/mo unlimited.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/ideas",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free deep analyses · then $9.9/mo",
    stats: [
      { stat: "8+", label: "curated ideas & growing" },
      { stat: "$9.9", label: "flat/mo vs IdeaProof $49+" },
      { stat: "1 weekend", label: "MVP per idea" },
    ],
    todayPick: "Today's pick",
    viewAnalysis: "View deep analysis →",
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Browse ideas",
          desc: "8+ verticals — DevTools, SaaS, Marketing filters",
        },
        {
          step: "2",
          title: "Read deep analysis",
          desc: "Competitor pricing, market size, channels — validate before coding",
        },
        {
          step: "3",
          title: "Ship MVP this weekend",
          desc: "Each idea includes a 4-step MVP checklist, levelsio-style",
        },
      ],
    },
    featuresTitle: "Member features",
    features: [
      {
        icon: "💡",
        title: "Daily curated ideas",
        desc: "Distilled from HN, Reddit, IH — actionable, not vague inspiration",
      },
      {
        icon: "📊",
        title: "Deep market analysis",
        desc: "Market size, competitor pricing, differentiation gaps — validate before coding",
      },
      {
        icon: "🛠️",
        title: "MVP roadmap",
        desc: "4-step MVP checklist per idea — ship in a weekend",
      },
      {
        icon: "💰",
        title: "Monetization model",
        desc: "Concrete pricing + MRR range — day-one revenue design",
      },
      {
        icon: "📣",
        title: "Acquisition channels",
        desc: "Show HN, Reddit, PH — real channels, not generic SEO",
      },
      {
        icon: "⚠️",
        title: "Risk checklist",
        desc: "Honest pitfalls per idea — avoid 6-month builds nobody wants",
      },
    ],
    testimonialsTitle: "What founders say",
    testimonials: [
      {
        name: "Alex K.",
        role: "Full-stack indie dev",
        text: "3 deep analyses in and I found a weekend-shippable direction — 100× better than Twitter inspiration.",
      },
      {
        name: "Lisa M.",
        role: "Ex-PM turned indie",
        text: "Copied competitor pricing tables straight into my landing page test — saved 2 days of research.",
      },
      {
        name: "Jay W.",
        role: "Side project explorer",
        text: "$9.9 pays for itself with one idea. Already shipped an API usage tracker MVP.",
      },
    ],
    closing: {
      title: "BigIdeasDB is too expensive. Twitter inspiration is too scattered.",
      subtitle:
        "Just $9.9/mo. Curated ideas + deep analysis to ship the right thing. Day-one pricing because research has real costs.",
      ctaPrimary: "Browse ideas",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Deep analysis preview",
      caption: "Pick idea · read analysis · ship MVP this weekend",
      preview:
        "💡 API Usage Tracker — DevTools\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎯 Problem: Indie devs get surprise $200 OpenAI bills\n📈 Market: 500K+ indie devs, 30% use paid APIs\n🏁 Gap: Helicone $20/mo — no Stripe/Vercel aggregation\n💰 Model: $9/mo Pro · 5 API connections\n🛠️ MVP: OpenAI + Stripe keys → 7-day chart → alert\n\nFree analyses left: 4/5",
    },
    todayIdea: {
      title: "API Usage Tracker",
      tagline: "Monitor OpenAI / Stripe / Replicate bills for indie devs",
      preview:
        "Indie devs run projects on Vercel + multiple APIs and discover a $200 OpenAI bill at month-end. A read-only dashboard connecting common API keys with real-time usage and cost estimates.",
      mrrPotential: "$3K–$12K",
      buildTime: "1 weekend",
    },
  },
  zh: {
    badge: "BigIdeasDB $9/月 · IdeaProof $49/月 · $9.9/月",
    title: "精选创业点子 + 深度市场分析",
    subtitle: "8+ 可落地微 SaaS 方向。免费体验 5 次深度分析，之后 $9.9/月无限阅读。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/ideas",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "8+", label: "精选点子持续增长" },
      { stat: "$9.9", label: "一口价/月，IdeaProof 要 $49+" },
      { stat: "1 周末", label: "每个点子可 ship MVP" },
    ],
    todayPick: "今日精选",
    viewAnalysis: "查看深度分析 →",
    howItWorks: {
      title: "三步找到方向",
      steps: [
        {
          step: "1",
          title: "浏览点子",
          desc: "8+ 垂直方向，DevTools、SaaS、Marketing 等分类筛选",
        },
        {
          step: "2",
          title: "读深度分析",
          desc: "竞品定价、市场规模、获客渠道，写代码前先验证",
        },
        {
          step: "3",
          title: "周末 ship MVP",
          desc: "每个点子含 4 步 MVP 清单，levelsio 式快速上线",
        },
      ],
    },
    featuresTitle: "会员功能",
    features: [
      {
        icon: "💡",
        title: "每日精选点子",
        desc: "从 HN、Reddit、IH 提炼可落地方向，不是空洞灵感",
      },
      {
        icon: "📊",
        title: "深度市场分析",
        desc: "市场规模、竞品定价、差异化缺口，帮你在写代码前验证",
      },
      {
        icon: "🛠️",
        title: "MVP 路线图",
        desc: "每个点子含 4 步 MVP 清单，周末可 ship",
      },
      {
        icon: "💰",
        title: "变现模型",
        desc: "具体定价建议 + MRR 预估区间，第一天就设计收费点",
      },
      {
        icon: "📣",
        title: "获客渠道",
        desc: "Show HN、Reddit、PH 等实战渠道，不是泛泛 SEO",
      },
      {
        icon: "⚠️",
        title: "风险清单",
        desc: "诚实标注每个点子的坑，避免 build 六个月没人要",
      },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      {
        name: "阿凯",
        role: "全栈独立开发者",
        text: "看了 3 个深度分析就找到一个周末能做完的方向，比刷 Twitter 灵感强一百倍。",
      },
      {
        name: "Lisa",
        role: "前 PM 转 indie",
        text: "竞品定价表格直接抄去做 landing page 定价测试，省了 2 天 research。",
      },
      {
        name: "大刘",
        role: "副业探索者",
        text: "$9.9 不贵，一个点子回本。已经 ship 了 API 用量追踪器的 MVP。",
      },
    ],
    closing: {
      title: "BigIdeasDB 太贵，Twitter 灵感太散",
      subtitle:
        "只要 $9.9/月。精选点子 + 深度分析，帮你 ship 对的 thing。第一天收费，因为 research 也有成本。",
      ctaPrimary: "浏览点子",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "深度分析预览",
      caption: "选点子 · 读分析 · 周末 ship MVP",
      preview:
        "💡 API 用量追踪器 — DevTools\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎯 痛点：独立开发者月底才发现 OpenAI 账单爆了\n📈 市场：500 万+ indie dev，30% 用付费 API\n🏁 缺口：Helicone $20/月 — 不支持 Stripe/Vercel 聚合\n💰 模型：$9/月 Pro · 5 个 API 连接\n🛠️ MVP：OpenAI + Stripe key → 7 天图表 → 告警\n\n剩余免费次数：4/5",
    },
    todayIdea: {
      title: "API 用量追踪器",
      tagline: "帮 indie dev 监控 OpenAI / Stripe / Replicate 账单，超阈值告警",
      preview:
        "独立开发者常在 Vercel + 多个 API 上跑项目，月底才发现 OpenAI 账单爆了。做一个只读 dashboard，连接常见 API key，实时显示用量和预估费用。",
      mrrPotential: "$3K–$12K",
      buildTime: "1 周末",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Startup Ideas",
    subtitle: "One price, all deep analyses. No free tier, no hidden fees.",
    recommended: "Only plan",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited deep market analyses",
      "8+ curated startup ideas (growing)",
      "Competitor pricing + differentiation gaps",
      "MRR estimates + monetization models",
      "MVP roadmap + acquisition channels",
      "Honest risk checklist per idea",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free analyses, then subscribe?",
    whyItems: [
      "Each deep analysis takes 2–4 hours of market research",
      "Paying users = founders serious about direction, not tire-kickers",
      "Solo-maintained — $9.9 keeps new ideas coming",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入创业点子库",
    subtitle: "一个价格，全部深度分析。没有免费档，没有隐藏费用。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限深度市场分析",
      "8+ 精选创业点子（持续增长）",
      "竞品定价 + 差异化缺口",
      "MRR 预估 + 变现模型",
      "MVP 路线图 + 获客渠道",
      "风险清单（诚实标注坑）",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置 Stripe 密钥，点击支付将模拟成功",
    checkoutNote: "Stripe 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "每个深度分析需要 2-4 小时市场调研",
      "付费用户 = 认真找方向的 founder，不是随便看看",
      "一人维护，$9.9 才能持续更新新点子",
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
