import type { Locale } from "./i18n-shared";

export const guideCopy = {
  en: {
    metaTitle:
      "Streak Anxiety Habit Tracker Alternative — Why Missing One Day Should Not Reset Progress",
    metaDescription:
      "Streaks and Habitica punish missed days. Learn Lally 2010 habit research, weekly 4/7 goals, and a guilt-free tracker at $9.9/mo.",
    title: "Streak Anxiety Habit Tracker Alternative: Why Missing One Day Should Not Reset Progress",
    updated: "Updated June 2026 · 10 min read",
    ctaTitle: "Ready to try weekly goals instead of streaks?",
    ctaButton: "Try 5 free check-ins",
    sections: [
      {
        type: "p" as const,
        text: "You open your habit app on a Tuesday. You see a 47-day streak. You feel proud. Wednesday you get sick and skip. Thursday the counter shows zero. You close the app and do not open it for three months. If this sounds familiar, you are not lazy — the product design is working against you.",
      },
      {
        type: "h2" as const,
        text: "The streak trap: why apps like Streaks and Habitica burn users out",
      },
      {
        type: "p" as const,
        text: "Streaks ($4.99), Habitica (gamified quests), and Duolingo-style counters all use the same retention loop: build a number, threaten to destroy it, trigger loss aversion. It works for a week. Then one travel day, one burnout day, or one sick day collapses months of effort into a shame screen.",
      },
      {
        type: "ul" as const,
        items: [
          "All-or-nothing: one miss = total reset, no partial credit",
          "Guilt notifications: \"You broke your chain\" pushes users away",
          "RPG overhead: Habitica adds quests when you just wanted a tap",
          "Perfection pressure: 7/7 daily targets ignore real life",
        ],
      },
      {
        type: "h2" as const,
        text: "What Lally 2010 actually says (and streak apps ignore)",
      },
      {
        type: "p" as const,
        text: "The most cited habit paper — Lally et al. 2010 from UCL — followed 96 people for 12 weeks. Two findings contradict streak culture: habit formation follows a curve averaging 66 days (range 18–254), and missing a single day had no statistically significant effect on the final outcome. Your progress bends; it does not crash to zero.",
      },
      {
        type: "p" as const,
        text: "Indie builders like the author of Moto and Nudge rebuilt trackers around rolling windows and forgiving streaks. The guilt-free model: measure weekly rhythm, celebrate 4/7 days, treat rest as design — not failure.",
      },
      {
        type: "h2" as const,
        text: "Weekly 4/7 goals: a practical alternative",
      },
      {
        type: "p" as const,
        text: "Instead of \"did you do it today or lose everything\", ask \"did you show up 4 times this week?\" That matches how real humans live: travel Tuesdays, low-energy Fridays, recovery Sundays. Our {link0} defaults to weekly targets. Non-members get 5 free check-ins, then {link1} for unlimited habits and reports.",
        links: [
          { href: "/track", label: "tracking page" },
          { href: "/join", label: "$9.9/mo" },
        ],
      },
      {
        type: "ol" as const,
        items: [
          "Pick 1–3 anchor habits — reading, movement, meditation",
          "Check in with one tap when you show up, skip when you do not",
          "Watch weekly progress bend upward without a fragile counter",
          "Review Sundays: which days slip? Adjust goals, not self-worth",
        ],
      },
      {
        type: "h2" as const,
        text: "Streaks vs weekly goals: comparison",
      },
      {
        type: "table" as const,
        rows: [
          ["Miss one day → streak resets", "Miss one day → week continues"],
          ["Red X and guilt screens", "Neutral progress curve"],
          ["Habitica RPG quests", "3-second tap check-in"],
          ["$5–12/mo for anxiety", "$9.9/mo flat, cancel anytime"],
        ],
      },
      {
        type: "h2" as const,
        text: "Who this is for",
      },
      {
        type: "p" as const,
        text: "ADHD-friendly consistency (see Nudge, HabitQuest), anxiety and depression gentler tracking (see Mostly), and indie hackers who deleted Streaks after a long chain broke — all point to the same insight: retention without shame beats retention through shame.",
      },
      {
        type: "h2" as const,
        text: "Start without the guilt loop",
      },
      {
        type: "p" as const,
        text: "You do not need another 100-day streak photo. Open the {link0}, pick the smallest habit, tap once. That is day 1 of a weekly rhythm. Try 5 free check-ins. If 4/7 feels kinder than 47→0, {link1} — less than a coffee, sustainable for the builder maintaining it.",
        links: [
          { href: "/track", label: "guilt-free tracker" },
          { href: "/join", label: "subscribe at $9.9/mo" },
        ],
      },
    ],
  },
  zh: {
    metaTitle: "连续天数焦虑的习惯 App 替代品 — 为什么错过一天不该归零进度",
    metaDescription:
      "Streaks 和 Habitica 惩罚错过的一天。了解 Lally 2010 习惯研究、每周 4/7 目标制，以及 $9.9/月的无罪恶感打卡工具。",
    title: "连续天数焦虑的习惯 App 替代品：为什么错过一天不该归零你的进度",
    updated: "更新于 2026 年 6 月 · 阅读约 10 分钟",
    ctaTitle: "准备好用周目标替代连续天数了吗？",
    ctaButton: "免费体验 5 次打卡",
    sections: [
      {
        type: "p" as const,
        text: "周二你打开习惯 App，看到连续 47 天，心里一阵骄傲。周三生病了没打卡。周四计数器显示归零。你关掉 App，三个月没再打开。如果这听起来很熟悉——你不是懒，是产品设计在跟你作对。",
      },
      {
        type: "h2" as const,
        text: "连续天数陷阱：Streaks 和 Habitica 如何让用户 burnout",
      },
      {
        type: "p" as const,
        text: "Streaks（$4.99）、Habitica（RPG 任务）和多邻国式计数器都用同一套留存循环：堆一个数字，威胁摧毁它，触发损失厌恶。第一周有效。然后一次出差、一次 burnout、一次生病，就把几个月的努力压成一块羞辱屏幕。",
      },
      {
        type: "ul" as const,
        items: [
          "全有或全无：错过一天 = 全部归零，没有部分积分",
          "罪恶感通知：「你断了连续记录」反而把用户推走",
          "RPG 负担：Habitica 加任务，而你只想点一下",
          "完美主义压力：7/7 每日目标忽略真实生活",
        ],
      },
      {
        type: "h2" as const,
        text: "Lally 2010 论文真正说了什么（连续天数 App 忽略了）",
      },
      {
        type: "p" as const,
        text: "被引用最多的习惯论文——UCL 的 Lally 等人 2010 年研究——跟踪了 96 人 12 周。两个发现与连续天数文化矛盾：习惯养成遵循平均 66 天的曲线（范围 18–254 天），而错过单独一天对最终结果没有统计学显著影响。你的进度会弯曲，但不会崩盘归零。",
      },
      {
        type: "p" as const,
        text: "Moto、Nudge 等独立开发者的产品围绕滚动窗口和宽容连续天数重建。无罪恶感模型：衡量每周节奏，庆祝 4/7 天达标，把休息视为设计——而非失败。",
      },
      {
        type: "h2" as const,
        text: "每周 4/7 目标：可落地的替代方案",
      },
      {
        type: "p" as const,
        text: "不再问「今天做了没，否则一切归零」，而是问「这周出现了 4 次吗？」这符合真实生活：周二出差、周五低能量、周日恢复。我们的{link0}默认周目标制。非会员可免费体验 5 次打卡，之后{link1}无限习惯与报表。",
        links: [
          { href: "/track", label: "习惯追踪页" },
          { href: "/join", label: "$9.9/月" },
        ],
      },
      {
        type: "ol" as const,
        items: [
          "选 1–3 个锚定习惯——阅读、运动、冥想",
          "出现时点一下打卡，没出现就跳过",
          "看每周进度温和上升，没有脆弱的计数器",
          "每周日回顾：哪几天容易滑？调整目标，不攻击自我价值",
        ],
      },
      {
        type: "h2" as const,
        text: "连续天数 vs 周目标：对比",
      },
      {
        type: "table" as const,
        headers: ["连续天数模式", "周目标模式"],
        rows: [
          ["错过一天 → 连续归零", "错过一天 → 本周继续"],
          ["红色叉号与罪恶感弹窗", "中性进度曲线"],
          ["Habitica RPG 任务", "3 秒一键打卡"],
          ["$5–12/月买来焦虑", "$9.9/月一口价，随时取消"],
        ],
      },
      {
        type: "h2" as const,
        text: "适合谁？",
      },
      {
        type: "p" as const,
        text: "ADHD 友好型一致性（Nudge、HabitQuest）、焦虑抑郁更温和的追踪（Mostly）、以及删掉 Streaks 的独立开发者——都指向同一结论：不靠羞辱的留存，胜过靠羞辱的留存。",
      },
      {
        type: "h2" as const,
        text: "今天开始，告别罪恶感循环",
      },
      {
        type: "p" as const,
        text: "你不需要又一张 100 天连续打卡截图。现在打开{link0}，选最小的习惯，点一下。这是每周节奏的第 1 天。免费体验 5 次。如果 4/7 比 47→0 更温柔，就{link1}——比一杯咖啡便宜，也能让维护它的开发者持续运营。",
        links: [
          { href: "/track", label: "无罪恶感习惯打卡" },
          { href: "/join", label: "订阅 $9.9/月" },
        ],
      },
    ],
  },
} as const;

export function getGuideCopy(locale: Locale) {
  return guideCopy[locale];
}
