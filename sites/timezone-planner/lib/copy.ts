import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "No more Slack ping-pong · fair meetings in 30s",
    title: "Timezone meetings without the pain",
    subtitle:
      "Add team cities, visualize overlap, get fair slot recommendations with pain scores and rotation hints.",
    ctaPrimary: "Plan free",
    ctaPrimaryHref: "/planner",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs World Time Buddy Pro" },
      { stat: "30s", label: "to 3 fair slots" },
      { stat: "16", label: "timezones with DST handled" },
    ],
    comparisonTitle: "Three-city overlap preview",
    audienceTitle: "Who uses it?",
    audiences: [
      { icon: "👥", title: "Remote team lead", desc: "Shanghai–Berlin–NYC standups, save 20 min/week" },
      { icon: "🏢", title: "Agency PM", desc: "Clients in 4 timezones — 3 fair slots in seconds" },
      { icon: "💼", title: "HR / People Ops", desc: "Global hiring without 5am candidate calls" },
      { icon: "🚀", title: "Indie developer", desc: "Outsourced teams — misery scores at a glance" },
    ],
    sampleNote: "Example: Shanghai + London + New York",
    sampleOverlap: "14:00–17:00 UTC · ~3h/day",
    howItWorks: {
      title: "Three steps to a fair meeting",
      steps: [
        { step: "1", title: "Add members", desc: "Pick cities + work hours, 16 common timezones" },
        { step: "2", title: "Scan overlap", desc: "Auto-scan 7 days, DST handled automatically" },
        { step: "3", title: "Pick the fairest", desc: "Sorted by misery score with rotation hints" },
      ],
    },
    featuresTitle: "Core features",
    features: [
      { icon: "🌍", title: "Multi-timezone overlap", desc: "See work-hour intersections without manual UTC math" },
      { icon: "🎯", title: "Best slot recommendations", desc: "Scan 7 days, rank 12 slots by misery score" },
      { icon: "⚖️", title: "Fair rotation hints", desc: "Flag who suffers early/late — rotate next time" },
      { icon: "📅", title: "DST auto-handled", desc: "Daylight saving switches won't leave everyone waiting" },
      { icon: "📤", title: "ICS calendar export", desc: "Members export .ics to Google Calendar / Outlook" },
      { icon: "👥", title: "Team templates", desc: "Save up to 10 team configs — weekly standup in 3s" },
    ],
    testimonialsTitle: "What users say",
    testimonials: [
      {
        name: "Ming Z.",
        role: "Remote lead · Shanghai-Berlin-NYC",
        text: "Weekly standups used to be 20 Slack messages. Now 30 seconds to 3 fair slots with misery scores.",
      },
      {
        name: "Sarah",
        role: "Agency PM",
        text: "Better than World Time Buddy — it tells you who's suffering, not just what time it is.",
      },
      {
        name: "Jay",
        role: "Indie developer",
        text: "5 free runs for occasional use. Subscribed for weekly syncs — $9.9 beats wasted coordination time.",
      },
    ],
    closing: {
      title: "World Time Buddy shows time. We show who's suffering.",
      subtitle:
        "Cross-timezone meetings waste 31 minutes on average. $9.9/mo — day-one pricing because fair scheduling is worth paying for.",
      ctaPrimary: "Start planning",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Planner preview",
      caption: "Add cities · scan overlap · misery-ranked slots",
      preview:
        "🌍 Shanghai · London · New York · 60 min\n\n#1 Misery 2 · Acceptable\nTue 14:00 UTC · Shanghai 22:00 · London 15:00 · NYC 10:00\n\n#2 Misery 4 · Tough\nWed 15:00 UTC · Rotate NYC next time\n\nOverlap ~3h/day · Free trials left: 4/5",
    },
  },
  zh: {
    badge: "告别 Slack「什么时候方便？」· 30 秒出公平时段",
    title: "跨时区会议，不再折磨任何人",
    subtitle: "添加团队成员城市，可视化工作时段重叠，自动推荐最公平的会议时间。含痛苦指数和轮换建议。",
    ctaPrimary: "免费规划",
    ctaPrimaryHref: "/planner",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，World Time Buddy Pro 更贵" },
      { stat: "30 秒", label: "出 3 个公平时段" },
      { stat: "16", label: "常用时区 DST 自动处理" },
    ],
    comparisonTitle: "三地团队重叠示例",
    audienceTitle: "谁在用？",
    audiences: [
      { icon: "👥", title: "远程团队 Lead", desc: "上海-柏林-纽约三地站会，每周省 20 分钟协调" },
      { icon: "🏢", title: "Agency PM", desc: "客户分布在 4 个时区，快速出 3 个公平时段" },
      { icon: "💼", title: "HR / People Ops", desc: "全球招聘面试，避免候选人凌晨 5 点参会" },
      { icon: "🚀", title: "独立开发者", desc: "外包团队跨时区协作，痛苦指数一目了然" },
    ],
    sampleNote: "示例：上海 + 伦敦 + 纽约三地团队",
    sampleOverlap: "14:00–17:00 UTC · 约 3 小时/天",
    howItWorks: {
      title: "三步定会议",
      steps: [
        { step: "1", title: "添加成员", desc: "选城市 + 工作时间，支持 16 个常用时区" },
        { step: "2", title: "扫描重叠", desc: "自动找未来 7 天全员可用时段，DST 自动处理" },
        { step: "3", title: "选最公平", desc: "按痛苦指数排序，提示谁该下次轮换" },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      { icon: "🌍", title: "多时区重叠可视化", desc: "添加团队成员城市，一眼看出工作时段交集，不用手算 UTC 偏移" },
      { icon: "🎯", title: "最佳会议推荐", desc: "自动扫描未来 7 天，按痛苦指数排序，推荐最公平的 12 个时段" },
      { icon: "⚖️", title: "公平轮换建议", desc: "标记谁要在早/晚时段参会，提示下次轮换，避免同一人总吃亏" },
      { icon: "📅", title: "DST 自动处理", desc: "夏令时切换自动适配，不会出现全员空等的尴尬" },
      { icon: "📤", title: "ICS 日历导出", desc: "会员一键导出 .ics 文件，直接拖进 Google Calendar / Outlook" },
      { icon: "👥", title: "团队模板保存", desc: "会员保存常用团队配置，每周站会 3 秒出方案" },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      {
        name: "张明",
        role: "远程团队 Lead · 上海-柏林-纽约",
        text: "以前排个周会要在 Slack 来回 20 条消息，现在 30 秒出 3 个公平时段，痛苦指数一目了然。",
      },
      {
        name: "Sarah",
        role: "Agency PM",
        text: "客户分布在 4 个时区，这个工具比 World Time Buddy 好用——因为它会告诉你谁最惨。",
      },
      {
        name: "阿杰",
        role: "独立开发者",
        text: "5 次免费够偶尔用，每周固定站会就订阅了，$9.9 比浪费的协调时间便宜太多。",
      },
    ],
    closing: {
      title: "World Time Buddy 只显示时间，我们告诉你谁最惨",
      subtitle: "协调一次跨时区会议平均浪费 31 分钟。$9.9/月，第一天就设计收费点——因为公平调度值得付费。",
      ctaPrimary: "开始规划",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "规划器预览",
      caption: "添加城市 · 扫描重叠 · 痛苦指数排序",
      preview:
        "🌍 上海 · 伦敦 · 纽约 · 60 分钟\n\n#1 痛苦指数 2 · 可接受\n周二 14:00 UTC · 上海 22:00 · 伦敦 15:00 · 纽约 10:00\n\n#2 痛苦指数 4 · 稍辛苦\n周三 15:00 UTC · 下次轮换纽约\n\n日均重叠约 3 小时 · 剩余免费次数：4/5",
    },
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Timezone Planner",
    subtitle: "One price, all features. Unlimited planning + ICS export + team templates.",
    recommended: "Only plan",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "≈ $0.33/day · cancel anytime",
    perks: [
      "Unlimited meeting planning",
      "Misery scores + fair rotation hints",
      "ICS calendar export",
      "Team templates (up to 10)",
      "14-day scan (free tier: 7 days)",
      "Priority support for new timezones",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Timezone data and DST rules need ongoing maintenance",
      "Paying users = teams that actually schedule weekly, not casual curiosity",
      "Solo-maintained — $9.9 keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入跨时区会议",
    subtitle: "一个价格，全部功能。无限规划 + ICS 导出 + 团队模板。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限会议时间规划",
      "痛苦指数 + 公平轮换建议",
      "ICS 日历文件导出",
      "团队模板保存（最多 10 个）",
      "未来 14 天扫描（免费版 7 天）",
      "优先支持新时区",
    ],
    subscribe: "订阅 · $9.9/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 次，之后订阅？",
    whyItems: [
      "时区数据和 DST 规则需要持续维护",
      "付费用户 = 真正每周要排会的团队，不是随便试试",
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
