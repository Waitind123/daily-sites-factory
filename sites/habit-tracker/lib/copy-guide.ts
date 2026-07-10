import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    metaTitle: "How to Build Daily Habits — Does the 21-Day Rule Work?",
    metaDescription:
      "From psychology to practice: build reading, exercise, and meditation habits with a minimal check-in tool. Streak strategies and pitfalls included.",
    title: "How to Build Daily Habits: Does the 21-Day Rule Work?",
    updated: "Updated June 2026 · 9 min read",
    ctaTitle: "Ready to build your first habit?",
    ctaButton: "Try 5 free check-ins",
    sections: [
      {
        type: "p" as const,
        text: 'The "21 days to form a habit" myth is everywhere, but research shows it takes an average of 66 days — complex habits can take 254. The good news: you do not need to wait 66 days to benefit. Habit power comes from repetition and visible progress. This guide shows you a minimal method to start today.',
      },
      {
        type: "h2" as const,
        text: "Why most habit apps make you fail",
      },
      {
        type: "p" as const,
        text: "Search the App Store for \"habit\" and you will find hundreds of options: Habitica turns check-ins into an RPG, Notion lets you build complex templates, Apple Health integrates with the system but lacks focus. The problem is not missing features — it is too much friction.",
      },
      {
        type: "p" as const,
        text: "The first rule of habit building: lower the activation cost. If checking in takes 5 steps, you will quit by day 3. A successful tracker should be: open → tap → close, 3 seconds total.",
      },
      {
        type: "ul" as const,
        items: [
          "Too many habits: tracking 10 at once, any break feels like failure",
          "Goals too big: \"run 5 km daily\" beats \"put on running shoes\"",
          "No feedback: without streak visibility, no instant reward",
          "Tool too complex: 30 minutes setting up before your first check-in",
        ],
      },
      {
        type: "h2" as const,
        text: "Pick 1–3 anchor habits",
      },
      {
        type: "p" as const,
        text: 'James Clear\'s "habit stacking" binds new habits to existing ones: after brushing teeth → meditate 2 minutes; after first coffee → write 3 journal lines; before lunch → read 10 pages.',
      },
      {
        type: "p" as const,
        text: "Start with one habit, add a second after 2 weeks. Our {link0} offers reading, exercise, meditation, water, and journal templates. Non-members get 5 free check-ins, then {link1} for unlimited habits.",
        links: [
          { href: "/track", label: "check-in page" },
          { href: "/join", label: "$9.9/mo" },
        ],
      },
      {
        type: "h2" as const,
        text: "Streak psychology: why consecutive days work",
      },
      {
        type: "p" as const,
        text: "Duolingo's streak feature is their retention secret. Consecutive days create loss aversion — after 15 days, skipping means starting over. That push beats any motivational quote.",
      },
      {
        type: "ol" as const,
        items: [
          "Allow freezes: travel or illness? Members can pause streaks (coming soon)",
          "Celebrate milestones: 7, 21, 66, 100 days each deserve recognition",
          "Do not chase perfection: broke the streak? Start fresh, guilt kills momentum",
          "Public commitment: tell friends what you are building — free accountability",
        ],
      },
      {
        type: "h2" as const,
        text: "Weekly review: the power of completion reports",
      },
      {
        type: "p" as const,
        text: "Spend 5 minutes every Sunday reviewing your completion rate. Ask: which days slipped and why? Which habit is easiest? Which always gets skipped — is the goal too big?",
      },
      {
        type: "p" as const,
        text: "Our weekly/monthly reports auto-calculate trends. Members can export CSV for deeper analysis. If Wednesday completion is 40% for 3 weeks straight, there is a structural blocker — adjust strategy, not willpower.",
      },
      {
        type: "h2" as const,
        text: "Common mistakes",
      },
      {
        type: "table" as const,
        rows: [
          ["Set 10 New Year goals", "Start with 1, add #2 after 21 days"],
          ["Break streak → \"start tomorrow\"", "Check in today or accept reset"],
          ["Buy courses instead of acting", "3-second check-in > 300-page book"],
          ["Wait for motivation", "Action creates motivation, not the reverse"],
        ],
      },
      {
        type: "h2" as const,
        text: "Start today",
      },
      {
        type: "p" as const,
        text: "There is no perfect moment. Open the {link0}, pick the smallest habit, tap once. That is day 1. Try 5 free check-ins, feel the streak pull, then {link1} — less than a coffee, but it might change your next 365 days.",
        links: [
          { href: "/track", label: "check-in page" },
          { href: "/join", label: "subscribe at $9.9/mo" },
        ],
      },
    ],
  },
  zh: {
    metaTitle: "如何养成每日习惯 — 21 天法则真的有用吗？",
    metaDescription:
      "从心理学到实操：手把手教你用极简打卡工具养成阅读、运动、冥想等每日习惯。含连续天数策略和避坑指南。",
    title: "如何养成每日习惯：21 天法则真的有用吗？",
    updated: "更新于 2026 年 6 月 · 阅读约 9 分钟",
    ctaTitle: "准备好养成第一个习惯了吗？",
    ctaButton: "免费体验 5 次打卡",
    sections: [
      {
        type: "p" as const,
        text: "「21 天养成习惯」这个说法流传很广，但心理学研究告诉我们：养成一个习惯平均需要 66 天，复杂习惯甚至需要 254 天。好消息是，你不需要等 66 天才能受益——习惯的力量来自重复和可见的进度。这篇指南帮你用极简方法，从今天开始养成每日习惯。",
      },
      {
        type: "h2" as const,
        text: "为什么大多数习惯 App 让你失败？",
      },
      {
        type: "p" as const,
        text: "打开 App Store 搜「习惯」，你会看到几百个选择：Habitica 把打卡变成 RPG 游戏，Notion 让你自建复杂模板，Apple 健康整合在系统里但缺乏专注感。问题不是功能不够，而是摩擦太大。",
      },
      {
        type: "p" as const,
        text: "习惯养成的第一原则是：降低启动成本。如果你打开 App 需要 5 步操作才能完成打卡，你会在第 3 天放弃。成功的习惯追踪工具应该做到：打开 → 点一下 → 关闭，全程 3 秒。",
      },
      {
        type: "ul" as const,
        items: [
          "习惯太多：同时追踪 10 个习惯，任何一个断了都会产生挫败感",
          "目标太大：「每天跑步 5 公里」不如「穿上跑鞋出门」",
          "没有反馈：看不到连续天数，缺乏即时奖励",
          "工具太复杂：设置提醒、分类、标签花了 30 分钟，还没开始打卡",
        ],
      },
      {
        type: "h2" as const,
        text: "选择 1-3 个「锚定习惯」",
      },
      {
        type: "p" as const,
        text: "James Clear 在《Atomic Habits》里提出「习惯堆叠」：把新习惯绑在一个已有习惯后面。例如：刷完牙 → 冥想 2 分钟；喝完第一杯咖啡 → 写 3 行日记；午饭前 → 阅读 10 页。",
      },
      {
        type: "p" as const,
        text: "先从 1 个习惯开始，坚持 2 周再加第二个。我们的{link0}默认提供阅读、运动、冥想、喝水、日记 5 个模板。非会员可免费体验 5 次打卡，之后{link1}无限习惯。",
        links: [
          { href: "/track", label: "打卡页面" },
          { href: "/join", label: "$9.9/月" },
        ],
      },
      {
        type: "h2" as const,
        text: "连续天数的心理学：为什么有效？",
      },
      {
        type: "p" as const,
        text: "Duolingo 的连续天数功能是其留存率的核心武器。连续天数创造了一种「损失厌恶」——你已经坚持了 15 天，今天不打卡就意味着归零，这种心理推力比任何励志语录都强。",
      },
      {
        type: "ol" as const,
        items: [
          "允许「冻结」：旅行或生病时，会员可以暂停连续天数（即将推出）",
          "庆祝里程碑：7 天、21 天、66 天、100 天，每个节点都值得认可",
          "不要追求完美：断了就重来，自责只会让你彻底放弃",
          "公开承诺：告诉朋友你在坚持什么，社交压力是免费的 accountability",
        ],
      },
      {
        type: "h2" as const,
        text: "数据回顾：周报表的力量",
      },
      {
        type: "p" as const,
        text: "每周日花 5 分钟看完成率报表，问自己三个问题：哪几天完成率最低？为什么？哪个习惯最容易坚持？哪个习惯总是跳过？目标是否太大，需要拆分？",
      },
      {
        type: "p" as const,
        text: "我们的周/月报表会自动计算完成率趋势，会员还可以导出 CSV 做更深入分析。数据不会说谎——如果你连续 3 周周三完成率都是 40%，说明周三有结构性障碍，需要调整策略而不是靠意志力硬撑。",
      },
      {
        type: "h2" as const,
        text: "常见误区与避坑",
      },
      {
        type: "table" as const,
        headers: ["误区", "正确做法"],
        rows: [
          ["新年一口气定 10 个目标", "从 1 个开始，21 天后加第 2 个"],
          ["断了就「从明天重新开始」", "断了立刻当天补打卡或接受归零"],
          ["买课程/书代替行动", "3 秒打卡 > 300 页自律书"],
          ["等「有动力了」再开始", "动力来自行动，不是等待"],
        ],
      },
      {
        type: "h2" as const,
        text: "今天就开始",
      },
      {
        type: "p" as const,
        text: "习惯养成没有完美时机。你不需要等周一、等月初、等买了新 App。现在打开{link0}，选一个最小的习惯，点一下。这就是第 1 天。免费体验 5 次，感受连续天数的推力。觉得有用就{link1}——比一杯咖啡还便宜，但可能改变接下来 365 天的你。",
        links: [
          { href: "/track", label: "习惯打卡" },
          { href: "/join", label: "订阅 $9.9/月" },
        ],
      },
    ],
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
