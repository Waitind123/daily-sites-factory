import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Watershed $50k/yr · Excel chaos · $9.9/mo",
    title: "Remote work carbon footprint calculator",
    subtitle:
      "Compare full office vs hybrid vs fully remote emissions. 5 free calculations, then $9.9/mo flat.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/calculate",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free calculations · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Watershed $50k+" },
      { stat: "5 min", label: "to baseline a team" },
      { stat: "3", label: "scenarios compared instantly" },
    ],
    comparisonTitle: "Three-scenario preview",
    audienceTitle: "Who uses it?",
    audiences: [
      { icon: "🏢", title: "HR / People Ops", desc: "Data-backed hybrid work policies" },
      { icon: "📋", title: "CSO / ESG lead", desc: "Carbon Reduction Plans for tenders" },
      { icon: "💻", title: "Remote team lead", desc: "Prove remote work environmental value" },
      { icon: "🌱", title: "Individuals", desc: "Understand your commute's real cost" },
    ],
    sampleNote: "Sample: 15km subway · 2 office days/week · China grid",
    sampleComparison: [
      { label: "Full office", kg: 2840 },
      { label: "Current hybrid", kg: 1680 },
      { label: "Fully remote", kg: 820 },
    ],
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Enter parameters",
          desc: "Commute distance, office days, transport mode, grid region",
        },
        {
          step: "2",
          title: "See comparison",
          desc: "Full office vs current vs fully remote — savings % at a glance",
        },
        {
          step: "3",
          title: "Export report",
          desc: "Members export PDF/CSV for ESG disclosure",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🚗",
        title: "Commute emissions",
        desc: "Round-trip CO₂e by distance, mode, and office days",
      },
      {
        icon: "🏠",
        title: "Home office energy",
        desc: "Laptop, lighting, HVAC allocation per GHG Protocol",
      },
      {
        icon: "📊",
        title: "Three scenarios",
        desc: "Hybrid vs full office vs fully remote — spot savings",
      },
      {
        icon: "🌍",
        title: "Multi-grid factors",
        desc: "China, US, EU, and global average grid emission factors",
      },
      {
        icon: "📄",
        title: "ESG report export",
        desc: "PDF/CSV for Scope 3 baselines and B2B tenders",
      },
      {
        icon: "👥",
        title: "Team rollup",
        desc: "Batch up to 50 employees — one-click team baseline",
      },
    ],
    testimonialsTitle: "What users say",
    testimonials: [
      {
        name: "Vivian C.",
        role: "HR Director · 120-person team",
        text: "Government tender required a Carbon Reduction Plan — baseline in 10 minutes, saved $50k vs consultants.",
      },
      {
        name: "Tom",
        role: "Remote team lead",
        text: "Hybrid policy debate lasted 6 months. Data settled it: 2 fewer days/week = 34% team reduction.",
      },
      {
        name: "Jay",
        role: "Indie developer",
        text: "Finally a non-corporate carbon calc. 5 free runs for personal use, subscribe when the company needs reports.",
      },
    ],
    closing: {
      title: "Watershed is too expensive. Excel is too messy.",
      subtitle:
        "Just $9.9/mo. Baseline in 5 minutes — day-one pricing because ESG data needs ongoing maintenance.",
      ctaPrimary: "Start calculating",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Calculation preview",
      caption: "Enter params · compare 3 scenarios · savings % instantly",
      preview:
        "🚇 Subway · 15 km · 2 days/week · China grid\n\n全勤 Full office    2,840 kg/yr  ████████████\n混合 Hybrid         1,680 kg/yr  ███████\n远程 Fully remote      820 kg/yr  ███\n\nSavings vs office: 1,160 kg/yr (41%)\n≈ 55 trees · Free trials left: 4/5",
    },
  },
  zh: {
    badge: "Watershed 年费 5 万+ · Excel 太乱 · $9.9/月",
    title: "远程办公碳足迹计算器",
    subtitle: "对比全勤、混合、完全远程碳排放。免费体验 5 次，之后 $9.9/月一口价。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/calculate",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Watershed 年费 5 万+" },
      { stat: "5 分钟", label: "出团队基线" },
      { stat: "3", label: "场景即时对比" },
    ],
    comparisonTitle: "三场景对比示例",
    audienceTitle: "谁在用？",
    audiences: [
      { icon: "🏢", title: "HR / 人力运营", desc: "混合办公政策需要数据支撑" },
      { icon: "📋", title: "CSO / ESG 负责人", desc: "政府招标要求 Carbon Reduction Plan" },
      { icon: "💻", title: "远程团队负责人", desc: "向管理层证明远程办公的环保价值" },
      { icon: "🌱", title: "个人用户", desc: "了解自己通勤的真实环境代价" },
    ],
    sampleNote: "示例：15km 地铁通勤 · 每周到岗 2 天 · 中国电网",
    sampleComparison: [
      { label: "全勤通勤", kg: 2840 },
      { label: "当前混合", kg: 1680 },
      { label: "完全远程", kg: 820 },
    ],
    howItWorks: {
      title: "三步出报告",
      steps: [
        {
          step: "1",
          title: "输入参数",
          desc: "通勤距离、到岗天数、交通方式、电网区域",
        },
        {
          step: "2",
          title: "看对比",
          desc: "全勤 vs 当前 vs 完全远程，减排百分比一目了然",
        },
        {
          step: "3",
          title: "导出报告",
          desc: "会员导出 PDF/CSV，直接用于 ESG 披露",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "🚗",
        title: "通勤碳排",
        desc: "按距离、交通方式、到岗天数，精确计算往返通勤 CO₂e",
      },
      {
        icon: "🏠",
        title: "居家办公能耗",
        desc: "计入笔记本、照明、空调分摊，基于 GHG Protocol 居家办公方法论",
      },
      {
        icon: "📊",
        title: "三场景对比",
        desc: "当前混合 vs 全勤 vs 完全远程，一眼看出减排空间",
      },
      {
        icon: "🌍",
        title: "多电网因子",
        desc: "中国、美国、欧盟、全球平均电网排放因子可选",
      },
      {
        icon: "📄",
        title: "ESG 报告导出",
        desc: "会员可导出 PDF/CSV，直接用于 B 端招标与 Scope 3 披露",
      },
      {
        icon: "👥",
        title: "团队批量计算",
        desc: "会员支持多人汇总，HR/CSO 一键生成团队碳足迹基线",
      },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      {
        name: "陈薇",
        role: "HR 总监 · 120 人团队",
        text: "政府招标要求 Carbon Reduction Plan，用这个 10 分钟出基线数据，比找咨询公司省 5 万。",
      },
      {
        name: "Tom",
        role: "远程团队负责人",
        text: "混合办公政策争论了半年，用数据说话：每周少来 2 天，团队减排 34%。",
      },
      {
        name: "小李",
        role: "独立开发者",
        text: "终于有个不 corporate 的碳排计算器，5 次免费够个人用，公司用再订阅。",
      },
    ],
    closing: {
      title: "Watershed 太贵，Excel 太乱",
      subtitle: "我们只要 $9.9/月。5 分钟出基线，第一天就设计收费点——因为 ESG 数据也需要持续维护。",
      ctaPrimary: "开始计算",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "计算预览",
      caption: "输入参数 · 三场景对比 · 减排百分比即时显示",
      preview:
        "🚇 地铁 · 15 km · 每周 2 天 · 中国电网\n\n全勤通勤    2,840 kg/年  ████████████\n当前混合    1,680 kg/年  ███████\n完全远程      820 kg/年  ███\n\n相比全勤减排：1,160 kg/年（41%）\n≈ 55 棵树 · 剩余免费次数：4/5",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Carbon Calculator",
    subtitle: "One price, all features. Unlimited calculations + team rollup + report export.",
    recommended: "Only plan",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "≈ $0.33/day · cancel anytime",
    perks: [
      "Unlimited carbon calculations",
      "Three-scenario comparison + savings %",
      "Team rollup (up to 50 people)",
      "PDF / CSV report export",
      "ESG disclosure templates",
      "Multi-grid emission factors",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free calculations, then subscribe?",
    whyItems: [
      "ESG methodology requires ongoing emission factor updates",
      "Paying users = teams that need real reports, not casual curiosity",
      "Solo-maintained — $9.9 keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入远程碳足迹",
    subtitle: "一个价格，全部功能。无限计算 + 团队汇总 + 报告导出。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限碳足迹计算",
      "三场景对比 + 减排百分比",
      "团队批量汇总（最多 50 人）",
      "PDF / CSV 报告导出",
      "ESG 披露模板",
      "多电网区域因子",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 次，之后订阅？",
    whyItems: [
      "ESG 方法论需要持续更新排放因子",
      "付费用户 = 真正需要出报告的团队，不是随便算算",
      "一人维护，$9.9 才能持续运营",
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
