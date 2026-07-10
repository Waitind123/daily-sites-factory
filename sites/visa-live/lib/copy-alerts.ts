import type { Locale } from "./i18n-shared";

export const alertsCopy = {
  en: {
    title: "Policy change alert dashboard",
    subtitle: "Watch visa programs and get notified when income, duration, or tax rules change.",
    trialRemaining: "free watches remaining",
    subscribeUnlock: "Subscribe for unlimited alerts →",
    subscribeNow: "Subscribe · $29/mo",
    addVisa: "+ Watch a policy",
    addVisaTitle: "Add policy watch",
    selectVisa: "Select visa program",
    addBtn: "Start watching",
    adding: "Adding…",
    yourVisas: "Your watched policies",
    demoNote: "Demo watches shown — add your own to get alerts",
    policyChanges: "Recent policy changes (7 days)",
    viewPolicy: "View all policies",
    paywallTitle: "Free trial used up",
    paywallBody: "You've used 5 free watches. Subscribe for unlimited policy change alerts.",
    paywallCta: "Subscribe · $29/mo",
    memberBadge: "✓ Member · unlimited alerts",
    alertActive: "Alert active",
    lastChange: "Last change",
  },
  zh: {
    title: "政策变更告警面板",
    subtitle: "关注签证项目，收入、停留、税务规则变更时即时通知。",
    trialRemaining: "次免费关注剩余",
    subscribeUnlock: "订阅解锁无限告警 →",
    subscribeNow: "订阅 · $29/月",
    addVisa: "+ 关注政策",
    addVisaTitle: "添加政策关注",
    selectVisa: "选择签证项目",
    addBtn: "开始关注",
    adding: "添加中…",
    yourVisas: "你关注的政策",
    demoNote: "以下为演示关注 — 添加你自己的开始接收告警",
    policyChanges: "近期政策变更（7 天内）",
    viewPolicy: "查看全部政策",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已使用 5 次免费关注。订阅后可无限接收政策变更告警。",
    paywallCta: "订阅 · $29/月",
    memberBadge: "✓ 会员 · 无限告警",
    alertActive: "告警已开启",
    lastChange: "最近变更",
  },
} as const;

export function getAlertsCopy(locale: Locale) {
  return alertsCopy[locale];
}
