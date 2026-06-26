import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Habitica too gamified · Notion too complex · $9.9/mo",
    title: "Minimal habit tracker for indie hackers",
    subtitle:
      "One tap check-in, streak tracking, weekly reports. 5 free check-ins, then $9.9/mo flat.",
    ctaPrimary: "Try free",
    ctaPrimaryHref: "/track",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free check-ins · then $9.9/mo",
    stats: [
      { stat: "$9.9", label: "flat/mo vs Habitica $8+" },
      { stat: "3 sec", label: "to check in daily" },
      { stat: "0", label: "social feeds or RPG quests" },
    ],
    weekChartTitle: "This week's completion",
    popularHabitsTitle: "Popular habits",
    howItWorks: {
      title: "How it works",
      steps: [
        {
          step: "1",
          title: "Pick habits",
          desc: "Choose from templates or custom — up to 3 free, unlimited as member",
        },
        {
          step: "2",
          title: "Tap to check in",
          desc: "Open the page, tap once — done in 3 seconds",
        },
        {
          step: "3",
          title: "Watch your streak",
          desc: "Visual streak counter — break it and start fresh",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "✅",
        title: "One-tap check-in",
        desc: "Minimal UI — record today's habits in 3 seconds, no friction",
      },
      {
        icon: "🔥",
        title: "Streak tracking",
        desc: "See consecutive days at a glance — loss aversion keeps you going",
      },
      {
        icon: "📊",
        title: "Weekly reports",
        desc: "Completion rate trends — spot which weeks you slipped",
      },
      {
        icon: "🔔",
        title: "Daily reminders",
        desc: "Custom reminder times so you never forget to check in",
      },
      {
        icon: "📤",
        title: "Data export",
        desc: "CSV/JSON export — your data always belongs to you",
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
        name: "Alex K.",
        role: "Indie developer",
        text: "47 days in, reading streak hit 30. Simpler than any Notion template.",
      },
      {
        name: "Amy L.",
        role: "Product manager",
        text: "Open, tap, close. No social feed, no RPG quests — exactly what I needed.",
      },
      {
        name: "Jay W.",
        role: "Freelancer",
        text: "$9.9 is less than a self-help book I'll never finish. Streaks actually work.",
      },
    ],
    closing: {
      title: "Habitica is too gamified. Notion is too complex.",
      subtitle: "Just $9.9/mo. Open → tap → close. Day-one pricing because simple still needs maintenance.",
      ctaPrimary: "Start checking in",
      ctaSecondary: "View pricing",
    },
    productDemo: {
      title: "Check-in preview",
      caption: "Pick habits · tap once · streak updates instantly",
      preview:
        "📚 Read 30 min        🔥 12 days   [✓ Done]\n🏃 Exercise 20 min     🔥 8 days    [ Check in ]\n🧘 Meditate 10 min     🔥 5 days    [ Check in ]\n\nToday: 1/3 complete · 33%\nFree trials left: 4/5",
    },
    weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    weekStats: [
      { done: 4, total: 5 },
      { done: 5, total: 5 },
      { done: 3, total: 5 },
      { done: 5, total: 5 },
      { done: 4, total: 5 },
      { done: 2, total: 5 },
      { done: 5, total: 5 },
    ],
    defaultHabits: [
      { id: "read", name: "Read 30 min", icon: "📚", streak: 12 },
      { id: "exercise", name: "Exercise 20 min", icon: "🏃", streak: 8 },
      { id: "meditate", name: "Meditate 10 min", icon: "🧘", streak: 5 },
      { id: "water", name: "Drink 8 glasses", icon: "💧", streak: 21 },
      { id: "journal", name: "Journal", icon: "✍️", streak: 3 },
    ],
    streakDays: (n: number) => `${n} day streak`,
  },
  zh: {
    badge: "Habitica 太游戏化 · Notion 太复杂 · $9.9/月",
    title: "独立开发者的极简习惯打卡",
    subtitle: "一键打卡、连续天数、周报表。免费体验 5 次，之后 $9.9/月一口价。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/track",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "$9.9", label: "一口价/月，Habitica 要 $8+" },
      { stat: "3 秒", label: "完成每日打卡" },
      { stat: "0", label: "条社交动态或 RPG 任务" },
    ],
    weekChartTitle: "本周完成率",
    popularHabitsTitle: "热门习惯",
    howItWorks: {
      title: "三步开始",
      steps: [
        {
          step: "1",
          title: "选习惯",
          desc: "从模板选或自定义，免费最多 3 个，会员无限",
        },
        {
          step: "2",
          title: "每日打卡",
          desc: "打开页面点一下，3 秒完成",
        },
        {
          step: "3",
          title: "看连续天数",
          desc: "连续天数可视化，断了就重来",
        },
      ],
    },
    featuresTitle: "会员功能",
    features: [
      {
        icon: "✅",
        title: "一键打卡",
        desc: "极简界面，3 秒完成今日习惯记录，不拖泥带水",
      },
      {
        icon: "🔥",
        title: "连续天数",
        desc: "连续打卡天数可视化，看到进度就有动力",
      },
      {
        icon: "📊",
        title: "周/月报表",
        desc: "完成率趋势图，知道自己哪周掉链子",
      },
      {
        icon: "🔔",
        title: "每日提醒",
        desc: "自定义提醒时间，再也不会忘记打卡",
      },
      {
        icon: "📤",
        title: "数据导出",
        desc: "CSV/JSON 导出，你的数据永远属于你",
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
        name: "小林",
        role: "独立开发者",
        text: "用了 47 天，阅读连续天数到了 30。比 Notion 模板简单一百倍。",
      },
      {
        name: "Amy",
        role: "产品经理",
        text: "每天打开就点一下，没有社交功能干扰，这才是我要的打卡工具。",
      },
      {
        name: "老王",
        role: "自由职业",
        text: "$9.9 不贵，比买一本不会看的自律书有用多了。",
      },
    ],
    closing: {
      title: "Habitica 太游戏化，Notion 太复杂",
      subtitle: "只要 $9.9/月。打开 → 打卡 → 关闭。第一天收费，因为简单也需要持续维护。",
      ctaPrimary: "开始打卡",
      ctaSecondary: "查看定价",
    },
    productDemo: {
      title: "打卡预览",
      caption: "选习惯 · 点一下 · 连续天数即时更新",
      preview:
        "📚 阅读 30 分钟        🔥 12 天   [✓ 已完成]\n🏃 运动 20 分钟        🔥 8 天    [ 打卡 ]\n🧘 冥想 10 分钟        🔥 5 天    [ 打卡 ]\n\n今日：1/3 完成 · 33%\n剩余免费次数：4/5",
    },
    weekDays: ["一", "二", "三", "四", "五", "六", "日"],
    weekStats: [
      { done: 4, total: 5 },
      { done: 5, total: 5 },
      { done: 3, total: 5 },
      { done: 5, total: 5 },
      { done: 4, total: 5 },
      { done: 2, total: 5 },
      { done: 5, total: 5 },
    ],
    defaultHabits: [
      { id: "read", name: "阅读 30 分钟", icon: "📚", streak: 12 },
      { id: "exercise", name: "运动 20 分钟", icon: "🏃", streak: 8 },
      { id: "meditate", name: "冥想 10 分钟", icon: "🧘", streak: 5 },
      { id: "water", name: "喝 8 杯水", icon: "💧", streak: 21 },
      { id: "journal", name: "写日记", icon: "✍️", streak: 3 },
    ],
    streakDays: (n: number) => `连续 ${n} 天`,
  },
} as const;

export const joinCopy = {
  en: {
    title: "Join Habit Tracker",
    subtitle: "One price, all features. No free tier, no hidden fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "vs Habitica $8+/mo · cancel anytime",
    perks: [
      "Unlimited habits",
      "Streak tracking & milestones",
      "Weekly & monthly completion reports",
      "Custom daily reminders",
      "CSV/JSON data export",
      "Cross-device sync (coming soon)",
    ],
    subscribe: "Subscribe · $9.9/mo",
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
    title: "加入习惯打卡",
    subtitle: "一个价格，全部功能。没有免费档，没有隐藏费用。",
    recommended: "推荐",
    monthly: "月付",
    perMonth: "/月",
    vsCompetitor: "对比 Habitica $8+/月 · 随时可取消",
    perks: [
      "无限习惯数量",
      "连续天数与里程碑追踪",
      "周/月完成率报表",
      "每日自定义提醒",
      "CSV/JSON 数据导出",
      "跨设备同步（即将推出）",
    ],
    subscribe: "订阅 · $9.9/月",
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
