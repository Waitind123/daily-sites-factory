import type { Locale } from "./i18n-shared";

export const WEEKLY_TARGET = 4;

export const homeCopy = {
  en: {
    badge: "Streaks resets to zero · Habitica too gamified · $29/mo",
    title: "Habit tracker without streak anxiety",
    subtitle:
      "Weekly 4/7 goals — miss a day, keep your progress. 5 free check-ins, then $29/mo flat.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/track",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free check-ins · then $29/mo",
    stats: [
      { stat: "4/7", label: "weekly goal — no all-or-nothing" },
      { stat: "$29", label: "flat/mo vs Streaks $5+" },
      { stat: "0", label: "red X marks or guilt screens" },
    ],
    weekChartTitle: "This week's rhythm",
    popularHabitsTitle: "Sample habits",
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Set weekly target",
          desc: "Aim for 4 out of 7 days — rest days are built in, not failures",
        },
        {
          step: "2",
          title: "Tap to check in",
          desc: "Open the page, tap once — done in 3 seconds",
        },
        {
          step: "3",
          title: "Miss without guilt",
          desc: "One missed day does not reset your week — progress bends, never crashes",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "🌱",
        title: "Weekly goals (4/7)",
        desc: "Hit 4 days a week and you win — no fragile streak counter",
      },
      {
        icon: "💚",
        title: "No guilt mechanics",
        desc: "No red marks, no shame notifications, no \"you broke your chain\"",
      },
      {
        icon: "📈",
        title: "Progress curve",
        desc: "See your weekly rhythm trend — based on Lally 2010 habit research",
      },
      {
        icon: "✅",
        title: "One-tap check-in",
        desc: "Minimal UI — record today's habits in 3 seconds",
      },
      {
        icon: "📊",
        title: "Weekly reports",
        desc: "Completion rate trends without streak obsession",
      },
      {
        icon: "♾️",
        title: "Unlimited habits",
        desc: "Members create any number of habits — no 3-habit cap",
      },
    ],
    testimonialsTitle: "What users say",
    testimonials: [
      {
        name: "Maya R.",
        role: "Designer",
        text: "I deleted Streaks after a 47-day chain broke. Weekly 4/7 finally feels sustainable.",
      },
      {
        name: "Tom K.",
        role: "Indie developer",
        text: "Habitica's RPG was fun for a week. I just need check-in without the guilt loop.",
      },
      {
        name: "Sarah L.",
        role: "Remote PM",
        text: "$29 is less than therapy copay. Missing Tuesday no longer ruins my month.",
      },
    ],
    closing: {
      title: "Streaks punishes one bad day. We don't.",
      subtitle: "Just $29/mo. Weekly goals, gentle progress, zero shame screens.",
      ctaPrimary: "Start tracking",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Weekly goal preview",
      caption: "4/7 days wins · miss a day · progress stays",
      preview:
        "📚 Read 30 min        3/7 this week   [✓ Done]\n🏃 Exercise 20 min     4/7 ✓ on track  [ Check in ]\n🧘 Meditate 10 min     2/7 gentle pace [ Check in ]\n\nWeek goal: 4/7 days · no streak reset\nFree trials left: 4/5",
    },
    weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    weekStats: [
      { done: 1, total: 1 },
      { done: 0, total: 1 },
      { done: 1, total: 1 },
      { done: 1, total: 1 },
      { done: 0, total: 1 },
      { done: 1, total: 1 },
      { done: 0, total: 1 },
    ],
    defaultHabits: [
      { id: "read", name: "Read 30 min", icon: "📚", weekDone: 3 },
      { id: "exercise", name: "Exercise 20 min", icon: "🏃", weekDone: 4 },
      { id: "meditate", name: "Meditate 10 min", icon: "🧘", weekDone: 2 },
      { id: "water", name: "Drink 8 glasses", icon: "💧", weekDone: 5 },
      { id: "journal", name: "Journal", icon: "✍️", weekDone: 1 },
    ],
    weeklyGoalLabel: (done: number) => `${done}/7 this week`,
  },
  zh: {
    badge: "连续天数断链归零 · Habitica 太游戏化 · $29/月",
    title: "告别连续天数焦虑的习惯打卡",
    subtitle: "每周 4/7 天达标即可，错过一天不重置进度。免费体验 5 次，之后 $29/月一口价。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/track",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "4/7", label: "周目标制 — 不必天天完美" },
      { stat: "$29", label: "一口价/月，Streaks 要 $5+" },
      { stat: "0", label: "个红色叉号或罪恶感弹窗" },
    ],
    weekChartTitle: "本周节奏",
    popularHabitsTitle: "示例习惯",
    howItWorks: {
      title: "三步开始",
      steps: [
        {
          step: "1",
          title: "设周目标",
          desc: "每周完成 4 天即达标，休息日是设计的一部分，不是失败",
        },
        {
          step: "2",
          title: "每日打卡",
          desc: "打开页面点一下，3 秒完成",
        },
        {
          step: "3",
          title: "错过不内疚",
          desc: "错过一天不会归零整周进度，曲线弯曲但不会崩盘",
        },
      ],
    },
    featuresTitle: "会员功能",
    features: [
      {
        icon: "🌱",
        title: "周目标制（4/7）",
        desc: "每周完成 4 天即胜利，没有脆弱的连续天数计数器",
      },
      {
        icon: "💚",
        title: "零罪恶感机制",
        desc: "没有红色标记、没有羞辱通知、没有「你断了连续记录」",
      },
      {
        icon: "📈",
        title: "进度曲线",
        desc: "查看每周节奏趋势，基于 Lally 2010 习惯研究",
      },
      {
        icon: "✅",
        title: "一键打卡",
        desc: "极简界面，3 秒完成今日习惯记录",
      },
      {
        icon: "📊",
        title: "周报表",
        desc: "完成率趋势，不再被连续天数绑架",
      },
      {
        icon: "♾️",
        title: "无限习惯",
        desc: "会员可创建任意数量习惯，不再受 3 个限制",
      },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      {
        name: "小美",
        role: "设计师",
        text: "连续 47 天断了之后删了 Streaks。每周 4/7 终于让我觉得可持续。",
      },
      {
        name: "阿汤",
        role: "独立开发者",
        text: "Habitica 的 RPG 玩了一周就腻了。我只想要没有罪恶感循环的打卡。",
      },
      {
        name: "Sarah",
        role: "远程产品经理",
        text: "$29 比一次咨询便宜。周二没打卡不再毁掉我整个月。",
      },
    ],
    closing: {
      title: "连续天数 App 惩罚你错过一天，我们不会",
      subtitle: "只要 $29/月。周目标、温和进度、零羞辱界面。",
      ctaPrimary: "开始追踪",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "周目标预览",
      caption: "4/7 天即达标 · 错过一天 · 进度保留",
      preview:
        "📚 阅读 30 分钟        本周 3/7   [✓ 已完成]\n🏃 运动 20 分钟        本周 4/7 ✓ 达标  [ 打卡 ]\n🧘 冥想 10 分钟        本周 2/7 温和节奏 [ 打卡 ]\n\n周目标：4/7 天 · 不会连续天数归零\n剩余免费次数：4/5",
    },
    weekDays: ["一", "二", "三", "四", "五", "六", "日"],
    weekStats: [
      { done: 1, total: 1 },
      { done: 0, total: 1 },
      { done: 1, total: 1 },
      { done: 1, total: 1 },
      { done: 0, total: 1 },
      { done: 1, total: 1 },
      { done: 0, total: 1 },
    ],
    defaultHabits: [
      { id: "read", name: "阅读 30 分钟", icon: "📚", weekDone: 3 },
      { id: "exercise", name: "运动 20 分钟", icon: "🏃", weekDone: 4 },
      { id: "meditate", name: "冥想 10 分钟", icon: "🧘", weekDone: 2 },
      { id: "water", name: "喝 8 杯水", icon: "💧", weekDone: 5 },
      { id: "journal", name: "写日记", icon: "✍️", weekDone: 1 },
    ],
    weeklyGoalLabel: (done: number) => `本周 ${done}/7`,
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Guilt-Free Habits",
    subtitle: "One price, all features. No free tier, no hidden fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs Streaks $5+/mo · cancel anytime",
    perks: [
      "Unlimited habits",
      "Weekly 4/7 goals — no streak resets",
      "Gentle progress curve & weekly reports",
      "No guilt screens or shame notifications",
      "CSV/JSON data export",
      "Rest days built into every habit",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe / Polar secure checkout · credit cards accepted",
    whyTitle: "Why 5 free check-ins, then subscribe?",
    whyItems: [
      "Servers and data storage have real costs",
      "Paying users = people serious about habits, not tire-kickers",
      "Solo-maintained — flat pricing keeps it sustainable",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入无罪恶感习惯",
    subtitle: "一个价格，全部功能。没有免费档，没有隐藏费用。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCompetitor: "对比 Streaks $5+/月 · 随时可取消",
    perks: [
      "无限习惯数量",
      "每周 4/7 天目标 — 不会连续天数归零",
      "温和进度曲线与周报表",
      "零罪恶感界面，没有羞辱通知",
      "CSV/JSON 数据导出",
      "每个习惯内置休息日",
    ],
    subscribe: "订阅 · $29/月",
    demoNote: "演示模式：未配置支付密钥，结账将模拟成功",
    checkoutNote: "Stripe / Polar 安全结账 · 支持信用卡",
    whyTitle: "为什么免费体验 5 次，之后订阅？",
    whyItems: [
      "服务器和数据存储有真实成本",
      "付费用户 = 认真养成习惯的人，不是随便试试",
      "一人维护，简单定价才能持续运营",
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
