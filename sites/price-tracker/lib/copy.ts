import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Intercom +90% in 90d · CostPeek $9/mo · we track for $9.9/mo",
    title: "Auto-track SaaS competitor pricing changes",
    subtitle:
      "90-day history, trend analysis, email alerts within 24h. 5 free deep-dives, then $9.9/mo. Built for indie founders who ship fast.",
    ctaPrimary: "Try tracking free",
    ctaPrimaryHref: "/track",
    ctaSecondary: "Subscribe · $9.9/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tries · then $9.9/mo",
    stats: [
      { stat: "8", label: "products tracked" },
      { stat: "2", label: "avg changes/90d" },
      { stat: "7", label: "categories" },
    ],
    compareTitle: "Why auto-track?",
    previewTitle: "Recent pricing changes",
    changesIn90d: "changes in 90 days",
    howItWorks: {
      title: "Track competitors in 3 steps",
      steps: [
        {
          step: "1",
          title: "Pick competitors",
          desc: "Notion, Linear, Cursor, Figma — or paste any SaaS pricing URL",
        },
        {
          step: "2",
          title: "Get daily checks",
          desc: "We snapshot pricing pages daily — price hikes, tier changes, feature gating",
        },
        {
          step: "3",
          title: "Act on alerts",
          desc: "Email within 24h + strategy tips — no more finding out from sales calls",
        },
      ],
    },
    featuresTitle: "Core features",
    features: [
      {
        icon: "📊",
        title: "Pricing history",
        desc: "Auto-log every price hike, cut, new tier & feature gate change",
      },
      {
        icon: "🔔",
        title: "Change alerts",
        desc: "Email summary within 24h — stop learning about cuts 3 weeks late",
      },
      {
        icon: "📈",
        title: "Trend analysis",
        desc: "90-day change count, market position & competitive notes at a glance",
      },
      {
        icon: "🎯",
        title: "Competitive compare",
        desc: "Side-by-side pricing in the same category — find your sweet spot",
      },
      {
        icon: "⚡",
        title: "Daily auto-checks",
        desc: "No more opening 5 tabs every Monday to screenshot pricing pages",
      },
      {
        icon: "💡",
        title: "Strategy tips",
        desc: "Every change ships with actionable advice on what to do next",
      },
    ],
    testimonialsTitle: "What founders say",
    testimonials: [
      {
        name: "Jay",
        role: "SaaS founder",
        text: "Competitor cut prices 3 weeks before I knew — lost a deal. Now tracked daily for $9.9/mo.",
      },
      {
        name: "Mia",
        role: "Product lead",
        text: "No more manual screenshots before pricing meetings. 90-day history, instant answers.",
      },
      {
        name: "Kevin",
        role: "Indie Hacker",
        text: "RivalPeek $49/mo with 0 customers. This does the job at $9.9. levelsio was right.",
      },
    ],
    closing: {
      title: "Stop screenshotting pricing pages every Monday",
      subtitle:
        "$9.9/mo flat. Daily checks, 90-day history, email alerts. Built for indie founders, not enterprise CI teams.",
      ctaPrimary: "Subscribe · $9.9/mo",
      ctaSecondary: "Try tracking free",
    },
    productDemo: {
      title: "Live pricing change preview",
      caption: "History · alerts · competitive notes · strategy tips",
      preview:
        "📊 SaaS Price Tracker — Intercom\n─────────────────────────────────────────────────────\n  📈 90-day     3 changes · Essential $39→$74/seat (+90%)\n  🔔 Alert      Free tier removed for new signups\n  🎯 Compete    Crisp $25/mo · desk-pulse $9.9/mo flat\n  💡 Strategy   Pitch「we didn't 2x in 90 days」now\n─────────────────────────────────────────────────────\n  [ View history ]    [ Set alert ]    [ Compare ]",
    },
    emailAlertDemo: {
      title: "Email alert within 24h",
      subtitle: "No more finding out from a sales call — get actionable diffs in your inbox",
      inbox: "Inbox · SaaS Price Tracker",
      subject: "🔔 Intercom Essential +25% — $59→$74/seat",
      time: "2h ago",
      headline: "Hi — we detected a pricing change on a product you track:",
      changeTitle: "Intercom Essential increased 25%",
      changeDetail: "Per-seat price moved from $59 to $74. Free tier removed for new accounts last month.",
      beforeAfter: "Before: $59/seat · After: $74/seat · Impact: High",
      strategyTitle: "💡 What to do",
      strategyDetail: "If you're an Intercom competitor, now is the time to run「we didn't 2x」campaigns. Watch Advanced tier next.",
      ctaView: "View full history",
      ctaDismiss: "Snooze 7 days",
    },
  },
  zh: {
    badge: "Intercom 90 天涨 90% · CostPeek $9/月 · 我们 $9.9/月自动追踪",
    title: "自动追踪 SaaS 竞品定价变动",
    subtitle:
      "90 天历史、趋势分析、24h 内邮件提醒。免费体验 5 次深度追踪，之后 $9.9/月。为快速 ship 的 indie 创始人而生。",
    ctaPrimary: "免费体验",
    ctaPrimaryHref: "/track",
    ctaSecondary: "订阅 · $9.9/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $9.9/月",
    stats: [
      { stat: "8", label: "追踪产品" },
      { stat: "2", label: "平均变动/90天" },
      { stat: "7", label: "覆盖品类" },
    ],
    compareTitle: "为什么需要自动追踪？",
    previewTitle: "近期定价变动",
    changesIn90d: "天内变动",
    howItWorks: {
      title: "三步追踪竞品定价",
      steps: [
        {
          step: "1",
          title: "选择竞品",
          desc: "Notion、Linear、Cursor、Figma — 或粘贴任意 SaaS 定价页 URL",
        },
        {
          step: "2",
          title: "每日自动检查",
          desc: "每天快照定价页 — 涨价、套餐变动、功能门控一目了然",
        },
        {
          step: "3",
          title: "收到提醒后行动",
          desc: "24h 内邮件 + 策略建议 — 不再从销售电话才知道竞品调价",
        },
      ],
    },
    featuresTitle: "核心功能",
    features: [
      {
        icon: "📊",
        title: "定价历史追踪",
        desc: "自动记录竞品每次涨价、降价、新套餐、功能门控变动",
      },
      {
        icon: "🔔",
        title: "变动邮件提醒",
        desc: "竞品调价后 24h 内收到摘要，不再靠销售电话才知道",
      },
      {
        icon: "📈",
        title: "趋势分析",
        desc: "90 天变动次数、市场定位、竞争建议一目了然",
      },
      {
        icon: "🎯",
        title: "竞品对比",
        desc: "同品类工具定价并排对比，找甜蜜价位",
      },
      {
        icon: "⚡",
        title: "每日自动检查",
        desc: "不用每周手动开 5 个标签页截图对比",
      },
      {
        icon: "💡",
        title: "策略建议",
        desc: "每次变动附带「你应该怎么做」的可执行建议",
      },
    ],
    testimonialsTitle: "创始人怎么说",
    testimonials: [
      {
        name: "阿杰",
        role: "SaaS 创始人",
        text: "竞品降价 3 周后我才知道，丢了一单。现在每天自动追踪，$9.9/月太值了。",
      },
      {
        name: "Mia",
        role: "产品负责人",
        text: "定价会议前不用手动截图了。打开就有 90 天历史，老板问「他们涨了多少」秒答。",
      },
      {
        name: "Kevin",
        role: "Indie Hacker",
        text: "RivalPeek $49/月 0 客户，这个 $9.9/月 功能够用。levelsio 思路对了。",
      },
    ],
    closing: {
      title: "每周开 5 个标签页截图？该停了",
      subtitle:
        "只要 $9.9/月。每日检查、90 天历史、邮件提醒。为 indie 创始人而生，不是企业 CI 团队。",
      ctaPrimary: "立即订阅 $9.9/月",
      ctaSecondary: "免费体验",
    },
    productDemo: {
      title: "定价变动实时预览",
      caption: "历史 · 提醒 · 竞争分析 · 策略建议",
      preview:
        "📊 SaaS 价格追踪 — Intercom\n─────────────────────────────────────────────────────\n  📈 90 天     3 次变动 · Essential $39→$74/席位（+90%）\n  🔔 提醒      新账号取消免费层\n  🎯 竞争      Crisp $25/月 · desk-pulse $9.9/月固定价\n  💡 策略      现在推「我们 90 天没涨 2 倍」\n─────────────────────────────────────────────────────\n  [ 查看历史 ]    [ 设置提醒 ]    [ 对比 ]",
    },
    emailAlertDemo: {
      title: "24 小时内邮件提醒",
      subtitle: "不再从销售电话才知道 — 收件箱收到可执行的定价差异",
      inbox: "收件箱 · SaaS 价格追踪",
      subject: "🔔 Intercom Essential 涨 25% — $59→$74/席位",
      time: "2 小时前",
      headline: "你好 — 我们检测到你追踪的产品有定价变动：",
      changeTitle: "Intercom Essential 涨价 25%",
      changeDetail: "按席位价格从 $59 涨至 $74。上月新账号已取消免费层。",
      beforeAfter: "变动前：$59/席位 · 变动后：$74/席位 · 影响：高",
      strategyTitle: "💡 建议行动",
      strategyDetail: "若你是 Intercom 竞品，现在是推「我们没涨 2 倍」营销的好时机。关注 Advanced 套餐下一步。",
      ctaView: "查看完整历史",
      ctaDismiss: "7 天后再提醒",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
