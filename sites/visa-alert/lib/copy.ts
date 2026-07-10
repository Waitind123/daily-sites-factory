import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "Nomad List data 18mo stale · $29/mo alerts",
    title: "Get notified when nomad visa policies change",
    subtitle:
      "Income thresholds, processing times, tax rules — instant alerts for 35+ programs. 5 free watches, then $29/mo.",
    ctaPrimary: "Start watching free",
    ctaPrimaryHref: "/alerts",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free watches · then $29/mo",
    stats: [
      { stat: "35+", label: "visa programs monitored" },
      { stat: "<24h", label: "alert after policy change" },
      { stat: "7d", label: "change history feed" },
    ],
    previewTitle: "Latest policy changes",
    previewNote: "Full change diff and email alerts require",
    previewLink: "open alert dashboard",
    lowestLabel: "Latest policy change",
    fastestLabel: "Most watched program",
    perMonth: "/mo",
    howItWorks: {
      title: "Never miss a policy update",
      steps: [
        {
          step: "1",
          title: "Pick your visas",
          desc: "Portugal D8, Thailand DTV, Spain — watch the programs that matter to you",
        },
        {
          step: "2",
          title: "Get change alerts",
          desc: "Income thresholds, duration rules, and tax changes pushed within 24 hours",
        },
        {
          step: "3",
          title: "See what changed",
          desc: "Side-by-side diff — old vs new policy, not a full re-read of government sites",
        },
      ],
    },
    featuresTitle: "Member features",
    features: [
      {
        icon: "🔔",
        title: "Instant policy alerts",
        desc: "Email when income, duration, or tax rules change for watched programs",
      },
      {
        icon: "📡",
        title: "7-day change feed",
        desc: "All policy updates across 35+ programs in one chronological feed",
      },
      {
        icon: "📊",
        title: "Change diff view",
        desc: "See exactly what changed — €2,800 → €3,280, 20 → 45 days processing",
      },
      {
        icon: "🌍",
        title: "35+ program coverage",
        desc: "Europe, Asia, Americas — every major digital nomad visa program",
      },
      {
        icon: "📋",
        title: "Impact summary",
        desc: "Plain-language note on how each change affects your application",
      },
      {
        icon: "⏱️",
        title: "Weekly digest",
        desc: "One email with all changes — no need to check 35 government sites",
      },
    ],
    testimonialsTitle: "What nomads say",
    testimonials: [
      {
        name: "Marco",
        role: "Remote PM",
        text: "Nomad List still shows Portugal D8 at €2,800. Got an alert here when it changed to €3,280 in March.",
      },
      {
        name: "Yuki",
        role: "Freelance dev",
        text: "Spain processing went from 20 to 45 days — I rescheduled my move because of the alert.",
      },
      {
        name: "Elena",
        role: "Indie hacker",
        text: "$29/mo vs checking 35 embassy sites weekly. The diff view alone saves hours.",
      },
    ],
    closing: {
      title: "Stop relying on 18-month-old visa data",
      subtitle:
        "$29/mo flat. Real-time policy change alerts for 35+ digital nomad visa programs.",
      ctaPrimary: "Subscribe · $29/mo",
      ctaSecondary: "Start watching free",
    },
    productDemo: {
      title: "Live policy alert feed",
      caption: "Change diffs · watch list · email alerts",
      preview:
        "🔔 Visa Alert — Policy watches              Updated 2h ago\n─────────────────────────────────────────────────────\n  🇵🇹 Portugal D8        🟢 Alert active\n     └ Mar 2026: income €2,800 → €3,280\n  🇹🇭 Thailand DTV       🟢 Alert active\n     └ Jun 2026: bank proof $13,800 → $15,000\n  🇪🇸 Spain remote       🟢 Alert active\n     └ Jun 2026: processing 20 → 45 days\n─────────────────────────────────────────────────────\n  Unread changes (7 days): 5\n  · 🇬🇪 Georgia — income $2k→$2.4k (Jun 20)\n  · 🇦🇪 UAE — 2-year renewal extended (Jun 5)\n─────────────────────────────────────────────────────\n  [ + Watch policy ]    [ View feed ]    [ Subscribe ]",
    },
  },
  zh: {
    badge: "Nomad List 数据过时 18 个月 · $29/月告警",
    title: "数字游民签证政策变更，即时通知",
    subtitle:
      "收入门槛、审批时长、税务规则 — 35+ 签证项目变更告警。免费体验 5 次，之后 $29/月。",
    ctaPrimary: "免费开始关注",
    ctaPrimaryHref: "/alerts",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "35+", label: "监控签证项目" },
      { stat: "<24h", label: "变更后推送告警" },
      { stat: "7天", label: "变更历史流" },
    ],
    previewTitle: "最新政策变更",
    previewNote: "完整变更对比与邮件告警需",
    previewLink: "打开告警面板",
    lowestLabel: "最新政策变更",
    fastestLabel: "最多关注项目",
    perMonth: "/月",
    howItWorks: {
      title: "再也不错过政策更新",
      steps: [
        {
          step: "1",
          title: "选择关注的签证",
          desc: "葡萄牙 D8、泰国 DTV、西班牙 — 关注对你重要的项目",
        },
        {
          step: "2",
          title: "接收变更告警",
          desc: "收入门槛、停留规则、税务变更 — 24 小时内推送",
        },
        {
          step: "3",
          title: "看清改了什么",
          desc: "新旧政策并排对比 — 不用重读政府官网全文",
        },
      ],
    },
    featuresTitle: "会员功能",
    features: [
      {
        icon: "🔔",
        title: "即时政策告警",
        desc: "关注项目的收入、停留、税务规则变更时邮件通知",
      },
      {
        icon: "📡",
        title: "7 天变更流",
        desc: "35+ 项目所有政策更新，按时间线汇总",
      },
      {
        icon: "📊",
        title: "变更对比视图",
        desc: "精确看到变化 — €2,800 → €3,280，审批 20 → 45 天",
      },
      {
        icon: "🌍",
        title: "35+ 项目覆盖",
        desc: "欧洲、亚洲、美洲 — 所有主流数字游民签证",
      },
      {
        icon: "📋",
        title: "影响摘要",
        desc: "每条变更对申请的实际影响，白话说明",
      },
      {
        icon: "⏱️",
        title: "每周摘要",
        desc: "一封邮件汇总所有变更 — 不用逐个查 35 个政府网站",
      },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      {
        name: "马可",
        role: "远程产品经理",
        text: "Nomad List 仍显示葡萄牙 D8 收入 €2,800。3 月改为 €3,280 时在这里收到告警。",
      },
      {
        name: "Yuki",
        role: "自由开发者",
        text: "西班牙审批从 20 天变 45 天 — 因告警调整了搬迁计划。",
      },
      {
        name: "Elena",
        role: "独立开发者",
        text: "$29/月对比每周查 35 个使馆网站。变更对比视图就值回票价。",
      },
    ],
    closing: {
      title: "别再依赖 18 个月前的签证数据",
      subtitle: "$29/月一口价。35+ 数字游民签证实时政策变更告警。",
      ctaPrimary: "立即订阅 $29/月",
      ctaSecondary: "免费开始关注",
    },
    productDemo: {
      title: "实时政策告警流",
      caption: "变更对比 · 关注列表 · 邮件告警",
      preview:
        "🔔 签证政策提醒 — 政策关注              2 小时前更新\n─────────────────────────────────────────────────────\n  🇵🇹 葡萄牙 D8        🟢 告警已开启\n     └ 2026年3月：收入 €2,800 → €3,280\n  🇹🇭 泰国 DTV         🟢 告警已开启\n     └ 2026年6月：银行证明 $13,800 → $15,000\n  🇪🇸 西班牙远程       🟢 告警已开启\n     └ 2026年6月：审批 20 → 45 天\n─────────────────────────────────────────────────────\n  未读变更（7 天内）：5 条\n  · 🇬🇪 格鲁吉亚 — 收入 $2k→$2.4k（6月20日）\n  · 🇦🇪 阿联酋 — 2 年续签延长（6月5日）\n─────────────────────────────────────────────────────\n  [ + 关注政策 ]    [ 查看变更流 ]    [ 订阅 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
