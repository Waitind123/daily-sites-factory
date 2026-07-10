import type { Locale } from "./i18n-shared";
import { WEEKLY_TARGET } from "./copy";

export const trackCopy = {
  en: {
    title: "This week's habits",
    subtitle: "Aim for 4/7 days — miss one, keep going",
    todayHabits: "Today's habits",
    completed: (done: number, total: number) => `Checked in ${done}/${total} today`,
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free check-ins left`,
    subscribeCta: "Subscribe · $29/mo →",
    memberBadge: "✓ Member active · unlimited check-ins",
    checkIn: "Check in",
    done: "Done ✓",
    loading: "…",
    subscribeNow: "Subscribe now",
    weeklyLabel: (done: number) => `${done}/7 this week`,
    weeklyGoalShort: "Weekly goal",
    onTrack: (done: number) =>
      done >= WEEKLY_TARGET ? "✓ Weekly goal met" : `${WEEKLY_TARGET - done} more to hit 4/7`,
  },
  zh: {
    title: "本周习惯",
    subtitle: "目标每周 4/7 天 — 错过一天，继续前进",
    todayHabits: "今日习惯",
    completed: (done: number, total: number) => `今日已打卡 ${done}/${total}`,
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    subscribeCta: "订阅 $29/月 →",
    memberBadge: "✓ 会员已激活 · 无限打卡",
    checkIn: "打卡",
    done: "已完成 ✓",
    loading: "…",
    subscribeNow: "立即订阅",
    weeklyLabel: (done: number) => `本周 ${done}/7`,
    weeklyGoalShort: "周目标",
    onTrack: (done: number) =>
      done >= WEEKLY_TARGET ? "✓ 本周已达标" : `还差 ${WEEKLY_TARGET - done} 天达 4/7`,
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Guilt-Free Habits!",
    demoPaid: "Demo payment successful.",
    paidBody: "Payment successful — unlimited habits and weekly reports are now active.",
    order: "Order:",
    openTrack: "Start tracking",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入无罪恶感习惯！",
    demoPaid: "演示支付成功。",
    paidBody: "支付成功，你已是月度会员，可无限打卡与查看周报表。",
    order: "订单号：",
    openTrack: "开始追踪",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Guilt-Free Habits · Monthly",
    description: "Unlimited habits, weekly 4/7 goals, gentle reports — no streak anxiety.",
  },
  zh: {
    name: "无罪恶感习惯 · 月付",
    description: "无限习惯、每周 4/7 目标、温和报表，告别连续天数焦虑。",
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
