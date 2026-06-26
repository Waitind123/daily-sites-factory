import type { Locale } from "./i18n-shared";

export const trackCopy = {
  en: {
    title: "Today's check-in",
    subtitle: "Tap once to complete — streak auto-increments",
    todayHabits: "Today's habits",
    completed: (done: number, total: number) => `Completed ${done}/${total}`,
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free check-ins left`,
    subscribeCta: "Subscribe · $9.9/mo →",
    memberBadge: "✓ Member active · unlimited check-ins",
    checkIn: "Check in",
    done: "Done ✓",
    loading: "…",
    subscribeNow: "Subscribe now",
    streakLabel: (n: number) => `🔥 ${n} day streak`,
  },
  zh: {
    title: "今日打卡",
    subtitle: "点一下就算完成，连续天数自动 +1",
    todayHabits: "今日习惯",
    completed: (done: number, total: number) => `已完成 ${done}/${total}`,
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    subscribeCta: "订阅 $9.9/月 →",
    memberBadge: "✓ 会员已激活 · 无限打卡",
    checkIn: "打卡",
    done: "已完成 ✓",
    loading: "…",
    subscribeNow: "立即订阅",
    streakLabel: (n: number) => `🔥 连续 ${n} 天`,
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Habit Tracker!",
    demoPaid: "Demo payment successful.",
    paidBody: "Payment successful — unlimited check-ins and exports are now active.",
    order: "Order:",
    openTrack: "Start checking in",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入习惯打卡！",
    demoPaid: "演示支付成功。",
    paidBody: "支付成功，你已是月度会员，可无限打卡与导出数据。",
    order: "订单号：",
    openTrack: "开始打卡",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Habit Tracker · Monthly",
    description: "Unlimited habits, streak tracking, reports, reminders & data export.",
  },
  zh: {
    name: "习惯打卡 · 月付",
    description: "无限习惯、连续天数统计、报表、提醒与数据导出。",
  },
} as const;

export const apiErrors = {
  en: {
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    MISSING_HABIT_ID: "Missing habit ID.",
    CHECKOUT_FAILED: "Checkout failed. Please try again.",
    FEEDBACK_FAILED: "Failed to submit feedback.",
    FEEDBACK_EMPTY: "Message cannot be empty.",
  },
  zh: {
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅。",
    MISSING_HABIT_ID: "缺少习惯 ID。",
    CHECKOUT_FAILED: "结账失败，请重试。",
    FEEDBACK_FAILED: "留言提交失败。",
    FEEDBACK_EMPTY: "留言不能为空。",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrors.en;

export function getTrackCopy(locale: Locale) {
  return trackCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  const errors = apiErrors[locale];
  if (code && code in errors) {
    return errors[code as ApiErrorCode];
  }
  return errors.CHECKOUT_FAILED;
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
