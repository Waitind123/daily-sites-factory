import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join Meetup Host",
    subtitle: "One price, unlimited events. No per-seat fees, no hidden costs.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited event creation & management",
      "Auto RSVP capacity control",
      "Waitlist queue + auto notifications",
      "Check-in view + attendance tracking",
      "Reminder email templates (T-24h / T-2h)",
      "Event clone for recurring meetups",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Meetup.com Pro costs $170/yr — we cover core RSVP at $29/mo",
      "Waitlist auto-notify saves organizers 2+ hours/week",
      "Solo-maintained — $29 keeps reminders & check-in features updated",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入 Meetup 组织助手",
    subtitle: "一个价格，无限活动。没有按人头收费，没有隐藏费用。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限活动创建与管理",
      "自动 RSVP 容量控制",
      "候补队列 + 自动通知",
      "签到视图 + 出席率追踪",
      "提醒邮件模板（T-24h / T-2h）",
      "活动克隆（周期性聚会）",
    ],
    subscribe: "立即订阅 · $29/月",
    demoNote: "演示模式：未配置 Stripe 密钥，点击支付将模拟成功",
    checkoutNote: "Stripe 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "Meetup.com Pro 一年 $170，我们 $29/月覆盖核心 RSVP 需求",
      "候补自动通知节省组织者每周 2+ 小时",
      "一人维护，$29 才能持续迭代提醒和签到功能",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const eventsCopy = {
  en: {
    title: "Event RSVP management",
    subtitle:
      "View attendee lists, waitlist queues, reminder templates & check-in guides. 5 free tries, then $29/mo.",
    trialRemaining: "free event manages remaining",
    subscribeUnlock: "Subscribe $29/mo →",
    memberActive: "✓ Member active · unlimited event & RSVP management",
    manageRsvp: "Manage RSVP →",
    loading: "Loading RSVP panel...",
    loadFailed: "load_failed",
    subscribeCta: "Subscribe $29/mo now",
    subscribeUpsell: "Like this panel? Subscribe for unlimited events",
    subscribeButton: "Subscribe $29/mo",
    close: "×",
    organizer: "Organizer",
    overview: "Overview",
    confirmed: "Confirmed",
    waitlist: "Waitlist",
    noShow: "No-show",
    attendees: "Attendee list",
    name: "Name",
    status: "Status",
    notes: "Notes",
    statusConfirmed: "Confirmed",
    statusWaitlist: "Waitlist",
    waitlistTips: "Waitlist tips",
    reminderTemplate: "Reminder template",
    checkInNotes: "Check-in guide",
    capacityAdvice: "Capacity advice",
    people: "people",
    all: "All",
    cities: ["All", "Shanghai", "Beijing", "Shenzhen", "Hangzhou", "Chengdu"],
    categories: ["All", "Social", "Startup", "Business", "Design", "Cowork"],
    statsEvents: "Sample events",
    statsCities: "Cities",
    statsCapacity: "Avg capacity",
  },
  zh: {
    title: "活动 RSVP 管理",
    subtitle: "查看参与者名单、候补队列、提醒模板和签到指南。免费体验 5 次，之后 $29/月。",
    trialRemaining: "次免费活动管理",
    subscribeUnlock: "订阅 $29/月 →",
    memberActive: "✓ 会员已激活 · 无限管理活动和 RSVP",
    manageRsvp: "管理 RSVP →",
    loading: "加载 RSVP 管理面板...",
    loadFailed: "load_failed",
    subscribeCta: "立即订阅 $29/月",
    subscribeUpsell: "喜欢这种管理面板？订阅解锁无限活动",
    subscribeButton: "订阅 $29/月",
    close: "×",
    organizer: "组织者",
    overview: "概览",
    confirmed: "已确认",
    waitlist: "候补",
    noShow: "缺席",
    attendees: "参与者名单",
    name: "姓名",
    status: "状态",
    notes: "备注",
    statusConfirmed: "已确认",
    statusWaitlist: "候补",
    waitlistTips: "候补管理建议",
    reminderTemplate: "提醒模板",
    checkInNotes: "签到指南",
    capacityAdvice: "容量建议",
    people: "人",
    all: "全部",
    cities: ["全部", "上海", "北京", "深圳", "杭州", "成都"],
    categories: ["全部", "社交", "创业", "商业", "设计", "共工"],
    statsEvents: "示例活动",
    statsCities: "覆盖城市",
    statsCapacity: "平均容量",
  },
} as const;

export const apiErrorCopy = {
  en: {
    MISSING_EVENT_ID: "Missing eventId",
    EVENT_NOT_FOUND: "Event not found",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    MISSING_EVENT_ID: "缺少 eventId",
    EVENT_NOT_FOUND: "活动不存在",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const successCopy = {
  en: {
    title: "Welcome to Meetup Host!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited event management.",
    order: "Order:",
    openEvents: "Manage events",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入 Meetup 组织助手！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是月度会员，可无限管理活动和 RSVP。",
    order: "订单:",
    openEvents: "管理活动",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Meetup Host · Monthly",
    description: "Unlimited events, RSVP waitlist, check-in view & reminder templates.",
  },
  zh: {
    name: "Meetup 组织助手 · 月度会员",
    description: "无限活动管理、RSVP 候补队列、签到视图、提醒邮件模板",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getEventsCopy(locale: Locale) {
  return eventsCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  if (code && code in apiErrorCopy[locale]) {
    return apiErrorCopy[locale][code as ApiErrorCode];
  }
  return apiErrorCopy[locale].GENERIC;
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
