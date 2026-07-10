import type { Locale } from "./i18n-shared";

export const homeCopy = {
  en: {
    badge: "RelocateMe 2026 · Nomad List 18mo stale · $29/mo",
    title: "Real-time digital nomad visa policy tracking",
    subtitle:
      "Policy changes, expiry reminders, and renewal alerts for 35+ programs. 5 free tracks, then $29/mo.",
    ctaPrimary: "Start tracking free",
    ctaPrimaryHref: "/track",
    ctaSecondary: "Subscribe · $29/mo",
    ctaSecondaryHref: "/join",
    note: "5 free tracks · then $29/mo",
    stats: [
      { stat: "35+", label: "visa programs monitored" },
      { stat: "<24h", label: "policy change alerts" },
      { stat: "30d", label: "expiry reminder window" },
    ],
    previewTitle: "Live tracking dashboard",
    previewNote: "Full expiry tracking and policy diffs require",
    previewLink: "open tracking dashboard",
    lowestLabel: "Latest policy change",
    fastestLabel: "Next expiry alert",
    perMonth: "/mo",
    howItWorks: {
      title: "Never miss a deadline or policy update",
      steps: [
        { step: "1", title: "Add your visas", desc: "Portugal D8, Thailand DTV, Spain — track expiry dates and policy watches" },
        { step: "2", title: "Get real-time alerts", desc: "Income thresholds, duration rules, and tax changes pushed within 24 hours" },
        { step: "3", title: "Renew on time", desc: "30-day and 7-day expiry reminders — no more accidental overstays" },
      ],
    },
    featuresTitle: "Member features",
    features: [
      { icon: "📡", title: "Real-time policy feed", desc: "All policy updates across 35+ programs in one live chronological feed" },
      { icon: "⏰", title: "Expiry reminders", desc: "Email alerts 30 and 7 days before your visa expires" },
      { icon: "📊", title: "Change diff view", desc: "See exactly what changed — €2,800 → €3,280, 20 → 45 days processing" },
      { icon: "🌍", title: "35+ program coverage", desc: "Europe, Asia, Americas — every major digital nomad visa program" },
      { icon: "📋", title: "Renewal checklists", desc: "Auto-generated renewal prep based on latest policy requirements" },
      { icon: "⏱️", title: "Weekly digest", desc: "One email with all changes — no need to check 35 government sites" },
    ],
    testimonialsTitle: "What nomads say",
    testimonials: [
      { name: "Marco", role: "Remote PM", text: "Thailand DTV expires in 8 days — got the urgent alert here. Nomad List doesn't even track expiry." },
      { name: "Yuki", role: "Freelance dev", text: "Portugal D8 income changed to €3,280. I saw the diff here before my renewal application." },
      { name: "Elena", role: "Indie hacker", text: "$29/mo for real-time tracking vs $300/hr immigration lawyer. The expiry countdown alone is worth it." },
    ],
    closing: {
      title: "Stop relying on 18-month-old visa data",
      subtitle: "$29/mo flat. Real-time policy tracking + expiry reminders for 35+ digital nomad visa programs.",
      ctaPrimary: "Subscribe · $29/mo",
      ctaSecondary: "Start tracking free",
    },
    productDemo: {
      title: "Live visa tracking dashboard",
      caption: "Expiry countdown · policy diffs · change alerts",
      preview: "📡 Visa Live — Tracking dashboard           Updated 1h ago\n─────────────────────────────────────────────────────\n  🇹🇭 Thailand DTV       🔴 8 days left\n     └ Expires Jul 5 · Renewal checklist ready\n  🇵🇹 Portugal D8        🟢 79 days left\n     └ Mar 2026: income €2,800 → €3,280\n  🇪🇸 Spain remote       🟢 Alert active\n     └ Jun 2026: processing 20 → 45 days\n─────────────────────────────────────────────────────\n  Policy changes (7 days): 5\n  · 🇱🇰 Sri Lanka — new DNV launched (Jul 1)\n  · 🇨🇴 Colombia — fee $177→$230 (Jun 28)\n─────────────────────────────────────────────────────\n  [ + Track visa ]    [ View feed ]    [ Subscribe ]",
    },
  },
  zh: {
    badge: "RelocateMe 2026 · Nomad List 数据过时 18 个月 · $29/月",
    title: "数字游民签证政策实时追踪",
    subtitle: "政策变更、到期提醒与续签告警，覆盖 35+ 签证项目。免费体验 5 次，之后 $29/月。",
    ctaPrimary: "免费开始追踪",
    ctaPrimaryHref: "/track",
    ctaSecondary: "订阅 · $29/月",
    ctaSecondaryHref: "/join",
    note: "免费体验 5 次 · 之后 $29/月",
    stats: [
      { stat: "35+", label: "监控签证项目" },
      { stat: "<24h", label: "政策变更告警" },
      { stat: "30天", label: "到期提醒窗口" },
    ],
    previewTitle: "实时追踪面板",
    previewNote: "完整到期追踪与政策对比需",
    previewLink: "打开追踪面板",
    lowestLabel: "最新政策变更",
    fastestLabel: "最近到期提醒",
    perMonth: "/月",
    howItWorks: {
      title: "再也不错过截止日期或政策更新",
      steps: [
        { step: "1", title: "添加你的签证", desc: "葡萄牙 D8、泰国 DTV、西班牙 — 追踪到期日与政策关注" },
        { step: "2", title: "接收实时告警", desc: "收入门槛、停留规则、税务变更 — 24 小时内推送" },
        { step: "3", title: "按时续签", desc: "30 天和 7 天到期提醒 — 不再意外逾期停留" },
      ],
    },
    featuresTitle: "会员功能",
    features: [
      { icon: "📡", title: "实时政策流", desc: "35+ 项目所有政策更新，按时间线实时汇总" },
      { icon: "⏰", title: "到期提醒", desc: "签证到期前 30 天和 7 天邮件通知" },
      { icon: "📊", title: "变更对比视图", desc: "精确看到变化 — €2,800 → €3,280，审批 20 → 45 天" },
      { icon: "🌍", title: "35+ 项目覆盖", desc: "欧洲、亚洲、美洲 — 所有主流数字游民签证" },
      { icon: "📋", title: "续签清单", desc: "根据最新政策要求自动生成续签准备清单" },
      { icon: "⏱️", title: "每周摘要", desc: "一封邮件汇总所有变更 — 不用逐个查 35 个政府网站" },
    ],
    testimonialsTitle: "用户怎么说",
    testimonials: [
      { name: "马可", role: "远程产品经理", text: "泰国 DTV 还有 8 天到期 — 在这里收到紧急提醒。Nomad List 根本不追踪到期日。" },
      { name: "Yuki", role: "自由开发者", text: "葡萄牙 D8 收入改为 €3,280。续签申请前在这里看到了变更对比。" },
      { name: "Elena", role: "独立开发者", text: "$29/月实时追踪对比 $300/小时移民律师。到期倒计时就值回票价。" },
    ],
    closing: {
      title: "别再依赖 18 个月前的签证数据",
      subtitle: "$29/月一口价。35+ 数字游民签证实时政策追踪 + 到期提醒。",
      ctaPrimary: "立即订阅 $29/月",
      ctaSecondary: "免费开始追踪",
    },
    productDemo: {
      title: "实时签证追踪面板",
      caption: "到期倒计时 · 政策对比 · 变更告警",
      preview: "📡 签证政策实时追踪 — 追踪面板           1 小时前更新\n─────────────────────────────────────────────────────\n  🇹🇭 泰国 DTV         🔴 剩余 8 天\n     └ 7月5日到期 · 续签清单已就绪\n  🇵🇹 葡萄牙 D8        🟢 剩余 79 天\n     └ 2026年3月：收入 €2,800 → €3,280\n  🇪🇸 西班牙远程       🟢 告警已开启\n     └ 2026年6月：审批 20 → 45 天\n─────────────────────────────────────────────────────\n  政策变更（7 天内）：5 条\n  · 🇱🇰 斯里兰卡 — 新 DNV 上线（7月1日）\n  · 🇨🇴 哥伦比亚 — 费用 $177→$230（6月28日）\n─────────────────────────────────────────────────────\n  [ + 添加签证 ]    [ 查看变更流 ]    [ 订阅 ]",
    },
  },
} as const;

export function getHomeCopy(locale: Locale) {
  return homeCopy[locale];
}
