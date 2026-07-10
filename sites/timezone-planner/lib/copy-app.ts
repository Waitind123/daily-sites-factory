import type { Locale } from "./i18n-shared";

export const plannerCopy = {
  en: {
    title: "Timezone meeting planner",
    subtitle:
      "Add team cities, scan 7 days of overlap, and get fair slot recommendations with misery scores.",
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free plans left`,
    subscribeCta: "Subscribe · $29/mo →",
    memberBadge: "✓ Member active · unlimited plans + ICS export + team templates",
    teamLabel: "Team members",
    namePlaceholder: "Name",
    localHours: "local",
    nowLabel: (time: string) => `now ${time}`,
    durationLabel: "Meeting duration",
    scanning: "Scanning…",
    findSlots: "Find best meeting times",
    planFailed: "Planning failed",
    icsMemberOnly: "ICS export requires membership — subscribe $29/mo",
    subscribeNow: "Subscribe now",
    scanSummary: (days: number, slots: number, hours: number) =>
      `Scanned ${days} days · found ${slots} slots · ~${hours}h overlap/day`,
    noSlotsTitle: "No slots where everyone is available",
    noSlotsHint:
      "Try widening work hours or fewer participants. Teams spanning 12+ hours may need async-first.",
    miseryScore: (score: number, label: string) => `Misery ${score} · ${label}`,
    exportIcs: "Export ICS",
    miseryLabels: {
      comfortable: "Comfortable",
      acceptable: "Acceptable",
      tough: "Tough",
      rotate: "Rotate next",
    },
    defaultMemberName: (i: number) => `Member ${i}`,
    icsSummary: "Cross-timezone team meeting",
  },
  zh: {
    title: "跨时区会议规划器",
    subtitle: "添加团队成员，自动扫描未来 7 天工作时段重叠，推荐最公平的会议时间。",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    subscribeCta: "订阅 $29/月 →",
    memberBadge: "✓ 会员已激活 · 无限规划 + ICS 导出 + 团队模板",
    teamLabel: "团队成员",
    namePlaceholder: "名称",
    localHours: "本地",
    nowLabel: (time: string) => `现在 ${time}`,
    durationLabel: "会议时长",
    scanning: "扫描中…",
    findSlots: "找出最佳会议时间",
    planFailed: "规划失败",
    icsMemberOnly: "ICS 导出需要会员，请订阅 $29/月",
    subscribeNow: "立即订阅",
    scanSummary: (days: number, slots: number, hours: number) =>
      `扫描未来 ${days} 天 · 找到 ${slots} 个推荐时段 · 日均重叠约 ${hours} 小时`,
    noSlotsTitle: "未找到全员可用的时段",
    noSlotsHint:
      "尝试放宽工作时间，或减少参与人数。跨 12+ 小时时区的团队建议 async-first。",
    miseryScore: (score: number, label: string) => `痛苦指数 ${score} · ${label}`,
    exportIcs: "导出 ICS",
    miseryLabels: {
      comfortable: "舒适",
      acceptable: "可接受",
      tough: "稍辛苦",
      rotate: "需轮换",
    },
    defaultMemberName: (i: number) => `成员${i}`,
    icsSummary: "跨时区团队会议",
  },
} as const;

export const durationOptions = {
  en: [
    { value: 30, label: "30 min" },
    { value: 60, label: "60 min" },
    { value: 90, label: "90 min" },
  ],
  zh: [
    { value: 30, label: "30 分钟" },
    { value: 60, label: "60 分钟" },
    { value: 90, label: "90 分钟" },
  ],
} as const;

export const overlapPreviewCopy = {
  en: {
    title: "Three-city overlap preview",
    overlapLabel: "Overlap",
    overlapSlot: "14:00–17:00 UTC · ~3h/day",
    note: "Example: Shanghai + London + New York",
  },
  zh: {
    title: "三地团队重叠示例",
    overlapLabel: "重叠",
    overlapSlot: "14:00–17:00 UTC · 约 3 小时/天",
    note: "示例：上海 + 伦敦 + 纽约三地团队",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Timezone Planner!",
    demoPaid: "Demo payment successful.",
    paidBody: "Payment successful — unlimited planning, ICS export, and team templates are active.",
    order: "Order:",
    openPlanner: "Open planner",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入跨时区会议！",
    demoPaid: "演示支付成功。",
    paidBody: "支付成功，你已是月度会员，可无限规划并导出 ICS。",
    order: "订单号：",
    openPlanner: "开始规划",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Timezone Planner · Monthly",
    description: "Unlimited planning, misery scores, ICS export, team templates.",
  },
  zh: {
    name: "跨时区会议 · 月付",
    description: "无限规划、痛苦指数、ICS 导出、团队模板。",
  },
} as const;

export const apiErrors = {
  en: {
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    MIN_PARTICIPANTS: "At least 2 team members required.",
    MAX_PARTICIPANTS: "Maximum 10 members supported.",
    INVALID_WORK_HOURS: "Invalid work hours for participant.",
    CHECKOUT_FAILED: "Checkout failed. Please try again.",
    FEEDBACK_FAILED: "Failed to submit feedback.",
    FEEDBACK_EMPTY: "Message cannot be empty.",
  },
  zh: {
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅 $29/月",
    MIN_PARTICIPANTS: "至少需要 2 名团队成员",
    MAX_PARTICIPANTS: "最多支持 10 名成员",
    INVALID_WORK_HOURS: "的工作时间无效",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    FEEDBACK_FAILED: "留言提交失败",
    FEEDBACK_EMPTY: "留言不能为空",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrors.en;

export function getPlannerCopy(locale: Locale) {
  return plannerCopy[locale];
}

export function getDurationOptions(locale: Locale) {
  return durationOptions[locale];
}

export function getOverlapPreviewCopy(locale: Locale) {
  return overlapPreviewCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}

export function getApiErrorMessage(
  code: string | undefined,
  locale: Locale,
  extra?: { name?: string }
): string {
  const errors = apiErrors[locale];
  if (code === "INVALID_WORK_HOURS" && extra?.name) {
    return locale === "zh" ? `${extra.name}${errors.INVALID_WORK_HOURS}` : errors.INVALID_WORK_HOURS;
  }
  if (code && code in errors) {
    return errors[code as ApiErrorCode];
  }
  return errors.CHECKOUT_FAILED;
}

export function getMiseryLabel(
  score: number,
  locale: Locale
): { text: string; color: string } {
  const labels = plannerCopy[locale].miseryLabels;
  if (score === 0) return { text: labels.comfortable, color: "text-green-700 bg-green-50 border-green-200" };
  if (score <= 3) return { text: labels.acceptable, color: "text-blue-700 bg-blue-50 border-blue-200" };
  if (score <= 6) return { text: labels.tough, color: "text-amber-700 bg-amber-50 border-amber-200" };
  return { text: labels.rotate, color: "text-red-700 bg-red-50 border-red-200" };
}
