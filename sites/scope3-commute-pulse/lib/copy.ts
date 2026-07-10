import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "CSRD 2026 · Watershed $50k/yr · $29/mo",
    title: "Scope 3 employee commuting baseline",
    subtitle:
      "Collect team commute data, calculate Cat.7 emissions, export CSRD-ready reports. 5 free team baselines, then $29/mo.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/survey",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free team baselines · then $29/mo",
    stats: [
      { stat: "$29", label: "flat/mo vs Watershed $50k+" },
      { stat: "15 min", label: "to baseline 50 employees" },
      { stat: "Cat.7", label: "GHG Protocol compliant" },
    ],
    comparisonTitle: "Team baseline preview",
    audienceTitle: "Who uses it?",
    audiences: [
      { icon: "📋", title: "CSO / ESG lead", desc: "CSRD Scope 3 Cat.7 disclosure without enterprise spend" },
      { icon: "🏢", title: "HR / People Ops", desc: "Hybrid policy backed by commute emission data" },
      { icon: "🏭", title: "SME sustainability", desc: "VSME-ready baseline without Watershed budget" },
      { icon: "🔍", title: "B2B SaaS vendors", desc: "Security questionnaire + carbon baseline in one sprint" },
    ],
    sampleNote: "Sample: 12-person hybrid team · EU grid · mixed transport",
    sampleComparison: [
      { label: "Full office", kg: 28400 },
      { label: "Current hybrid", kg: 16800 },
      { label: "Fully remote", kg: 8200 },
    ],
    howItWorks: {
      title: "Workflow",
      steps: [
        { step: "1", title: "Add employees", desc: "Commute distance, office days, transport mode per employee" },
        { step: "2", title: "Team rollup", desc: "Instant Scope 3 Cat.7 total with transport breakdown" },
        { step: "3", title: "Export CSRD report", desc: "Members export CSV/PDF for VSME and CSRD filings" },
      ],
    },
    featuresTitle: "Features",
    features: [
      { icon: "📊", title: "Team aggregate", desc: "Roll up 50 employees — total kg CO₂e, avg per head, by transport mode" },
      { icon: "📝", title: "Employee survey", desc: "Quick per-employee form: distance, days, mode, grid region" },
      { icon: "📋", title: "CSRD Cat.7 ready", desc: "GHG Protocol Category 7 methodology with audit trail notes" },
      { icon: "🏠", title: "Remote work included", desc: "Home office energy allocation per EcoAct methodology" },
      { icon: "📄", title: "Report export", desc: "CSV/PDF for CSRD, VSME, and BCorp submissions" },
      { icon: "💰", title: "SME pricing", desc: "$29/mo flat — no per-seat fees like enterprise platforms" },
    ],
    testimonialsTitle: "What users say",
    testimonials: [
      { name: "Elena M.", role: "CSO · 85-person SaaS", text: "CSRD deadline in 8 weeks. Watershed quoted €40k. We baselined Cat.7 in one afternoon for $29/mo." },
      { name: "James K.", role: "HR Director · manufacturing SME", text: "Hybrid policy debate needed numbers. Team survey showed 28% reduction vs full office — board approved." },
      { name: "Priya S.", role: "Indie consultant", text: "Client needed Scope 3 baseline for tender. Exported CSV, auditor accepted methodology notes." },
    ],
    closing: {
      title: "Watershed is for Fortune 500. You need Cat.7 today.",
      subtitle: "$29/mo. Baseline your team in 15 minutes — day-one pricing because CSRD data needs ongoing updates.",
      ctaPrimary: "Start team survey",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Team baseline preview",
      caption: "Add employees · instant rollup · transport breakdown",
      preview:
        "Team: 12 employees · EU grid · hybrid mix\n\nFull office     28,400 kg/yr  ████████████\nCurrent hybrid  16,800 kg/yr  ███████\nFully remote     8,200 kg/yr  ███\n\nCat.7 savings vs office: 11,600 kg/yr (41%)\nBy transport: Car 52% · Subway 31% · Remote 17%\nFree baselines left: 4/5",
    },
  },
  zh: {
    badge: "CSRD 2026 · Watershed 年费 5 万+ · $29/月",
    title: "Scope 3 员工通勤排放基线",
    subtitle: "收集团队通勤数据，计算第 7 类排放，导出 CSRD 合规报告。免费体验 5 次团队基线，之后 $29/月。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/survey",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次团队基线 · 之后 $29/月",
    stats: [
      { stat: "$29", label: "一口价/月，Watershed 年费 5 万+" },
      { stat: "15 分钟", label: "完成 50 人基线" },
      { stat: "第 7 类", label: "符合 GHG Protocol" },
    ],
    comparisonTitle: "团队基线示例",
    audienceTitle: "谁在用？",
    audiences: [
      { icon: "📋", title: "CSO / ESG 负责人", desc: "CSRD Scope 3 第 7 类披露，无需企业级预算" },
      { icon: "🏢", title: "HR / 人力运营", desc: "混合办公政策有通勤排放数据支撑" },
      { icon: "🏭", title: "中小企业可持续", desc: "VSME 合规基线，替代 Watershed" },
      { icon: "🔍", title: "B2B SaaS 供应商", desc: "安全问卷 + 碳基线一个冲刺搞定" },
    ],
    sampleNote: "示例：12 人混合办公团队 · 欧盟电网 · 多种交通方式",
    sampleComparison: [
      { label: "全勤通勤", kg: 28400 },
      { label: "当前混合", kg: 16800 },
      { label: "完全远程", kg: 8200 },
    ],
    howItWorks: {
      title: "三步出基线",
      steps: [
        { step: "1", title: "添加员工", desc: "每位员工填写通勤距离、到岗天数、交通方式" },
        { step: "2", title: "团队汇总", desc: "即时计算 Scope 3 第 7 类总量，按交通方式拆分" },
        { step: "3", title: "导出 CSRD 报告", desc: "会员导出 CSV/PDF，直接用于 VSME 和 CSRD 申报" },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      { icon: "📊", title: "团队汇总", desc: "最多 50 人汇总 — 总 kg CO₂e、人均、按交通方式拆分" },
      { icon: "📝", title: "员工调研", desc: "快速表单：距离、到岗天数、交通方式、电网区域" },
      { icon: "📋", title: "CSRD 第 7 类", desc: "GHG Protocol 第 7 类方法论，含审计说明" },
      { icon: "🏠", title: "含远程办公", desc: "居家办公能耗分摊，基于 EcoAct 方法论" },
      { icon: "📄", title: "报告导出", desc: "CSV/PDF 用于 CSRD、VSME、BCorp 申报" },
      { icon: "💰", title: "中小企业定价", desc: "$29/月一口价 — 无企业平台按人头收费" },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      { name: "Elena M.", role: "CSO · 85 人 SaaS", text: "CSRD 截止还有 8 周。Watershed 报价 €4 万。我们一个下午出完第 7 类基线，$29/月。" },
      { name: "James K.", role: "HR 总监 · 制造业中小企业", text: "混合办公政策需要数据。团队调研显示比全勤减排 28% — 董事会通过了。" },
      { name: "Priya S.", role: "独立顾问", text: "客户招标需要 Scope 3 基线。导出 CSV，审计师认可了方法论说明。" },
    ],
    closing: {
      title: "Watershed 是给财富 500 强的。你今天就需要第 7 类数据。",
      subtitle: "$29/月。15 分钟出团队基线，第一天就设计收费点 — CSRD 数据需要持续更新。",
      ctaPrimary: "开始团队调研",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "团队基线预览",
      caption: "添加员工 · 即时汇总 · 交通方式拆分",
      preview:
        "团队：12 人 · 欧盟电网 · 混合办公\n\n全勤通勤    28,400 kg/年  ████████████\n当前混合    16,800 kg/年  ███████\n完全远程     8,200 kg/年  ███\n\n第 7 类相比全勤减排：11,600 kg/年（41%）\n按交通：私家车 52% · 地铁 31% · 远程 17%\n剩余免费次数：4/5",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Scope3 Commute Pulse",
    subtitle: "One price, all features. Unlimited team baselines + CSRD export.",
    recommended: "Only plan",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "≈ $0.33/day · cancel anytime",
    perks: [
      "Unlimited team baselines (up to 50 employees)",
      "Scope 3 Cat.7 rollup + transport breakdown",
      "CSV / PDF CSRD report export",
      "GHG Protocol methodology notes",
      "Hybrid vs full office comparison",
      "Multi-grid emission factors",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free baselines, then subscribe?",
    whyItems: [
      "CSRD emission factors update annually — ongoing access matters",
      "Paying users = teams filing real reports, not one-off curiosity",
      "Solo-maintained — $29 keeps it sustainable vs Watershed $50k",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入 Scope 3 员工通勤",
    subtitle: "一个价格，全部功能。无限团队基线 + CSRD 报告导出。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限团队基线（最多 50 人）",
      "Scope 3 第 7 类汇总 + 交通方式拆分",
      "CSV / PDF CSRD 报告导出",
      "GHG Protocol 方法论说明",
      "混合 vs 全勤对比",
      "多电网区域因子",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 次，之后订阅？",
    whyItems: [
      "CSRD 排放因子每年更新 — 持续访问才有价值",
      "付费用户 = 真正需要申报的团队，不是随便算算",
      "一人维护，$29 才能持续运营，Watershed 要 5 万+",
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
