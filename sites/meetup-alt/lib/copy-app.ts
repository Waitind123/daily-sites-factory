import type { Locale } from "./i18n-shared";

export const joinCopy = {
  en: {
    title: "Join MeetupAlt",
    subtitle: "One flat price. Your data, your brand, your RSVP widget. No per-seat fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime · export included",
    perks: [
      "Unlimited branded event pages",
      "Embeddable RSVP widget for your site",
      "CSV attendee export anytime (Meetup charges extra)",
      "Waitlist queue + auto notifications",
      "Reminder email templates (T-24h / T-2h)",
      "No platform lock-in — cancel and keep your data",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Meetup.com organizer fee is $25-45/mo — we flat $29 with export included",
      "Past events vanish on Meetup when you cancel — here your data stays yours",
      "Solo-maintained — $29 keeps embed widget & export features updated",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入 Meetup 替代品",
    subtitle: "一个固定价格。你的数据、你的品牌、你的 RSVP 组件。无按人头收费。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消 · 含数据导出",
    perks: [
      "无限品牌活动页",
      "可嵌入网站的 RSVP 组件",
      "随时 CSV 参与者导出（Meetup 额外收费）",
      "候补队列 + 自动通知",
      "提醒邮件模板（T-24h / T-2h）",
      "无平台锁定 — 取消也能带走数据",
    ],
    subscribe: "立即订阅 · $29/月",
    demoNote: "演示模式：未配置 Stripe 密钥，点击支付将模拟成功",
    checkoutNote: "Stripe 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "Meetup.com 组织者费用 $25-45/月 — 我们 $29/月固定价含导出",
      "Meetup 取消后历史活动消失 — 这里数据永远归你",
      "一人维护，$29 才能持续迭代嵌入组件与导出功能",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const eventsCopy = {
  en: {
    title: "Community event management",
    subtitle:
      "Branded RSVP pages, waitlist, embed widget & CSV export. 5 free tries, then $29/mo.",
    trialRemaining: "free event manages remaining",
    subscribeUnlock: "Subscribe $29/mo →",
    memberActive: "✓ Member active · unlimited events + data export",
    manageRsvp: "Manage RSVP →",
    loading: "Loading RSVP panel...",
    loadFailed: "load_failed",
    subscribeCta: "Subscribe $29/mo now",
    subscribeUpsell: "Like this panel? Subscribe for unlimited events + export",
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
    compareMeetup: "Meetup.com",
    compareHeylo: "Heylo",
    compareUs: "MeetupAlt",
    comparePrice: "Organizer price",
    compareExport: "Data export",
    compareEmbed: "Embed widget",
    compareLockIn: "Lock-in",
    compareMeetupPrice: "$25-45/mo",
    compareHeyloPrice: "Free + fees",
    compareUsPrice: "$29/mo flat",
    compareMeetupExport: "Paid add-on",
    compareHeyloExport: "Limited",
    compareUsExport: "Included",
    compareMeetupEmbed: "No",
    compareHeyloEmbed: "No",
    compareUsEmbed: "Yes",
    compareMeetupLockIn: "High",
    compareHeyloLockIn: "Medium",
    compareUsLockIn: "None",
  },
  zh: {
    title: "社区活动管理",
    subtitle: "品牌 RSVP 页面、候补、嵌入组件与 CSV 导出。免费体验 5 次，之后 $29/月。",
    trialRemaining: "次免费活动管理",
    subscribeUnlock: "订阅 $29/月 →",
    memberActive: "✓ 会员已激活 · 无限活动 + 数据导出",
    manageRsvp: "管理 RSVP →",
    loading: "加载 RSVP 管理面板...",
    loadFailed: "load_failed",
    subscribeCta: "立即订阅 $29/月",
    subscribeUpsell: "喜欢这种管理面板？订阅解锁无限活动 + 导出",
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
    compareMeetup: "Meetup.com",
    compareHeylo: "Heylo",
    compareUs: "Meetup 替代品",
    comparePrice: "组织者价格",
    compareExport: "数据导出",
    compareEmbed: "嵌入组件",
    compareLockIn: "平台锁定",
    compareMeetupPrice: "$25-45/月",
    compareHeyloPrice: "免费+手续费",
    compareUsPrice: "$29/月固定",
    compareMeetupExport: "额外付费",
    compareHeyloExport: "有限",
    compareUsExport: "包含",
    compareMeetupEmbed: "无",
    compareHeyloEmbed: "无",
    compareUsEmbed: "有",
    compareMeetupLockIn: "高",
    compareHeyloLockIn: "中",
    compareUsLockIn: "无",
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
    title: "Welcome to MeetupAlt!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited events and data export.",
    order: "Order:",
    openEvents: "Manage events",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入 Meetup 替代品！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是月度会员，可无限管理活动并导出数据。",
    order: "订单:",
    openEvents: "管理活动",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "MeetupAlt · Monthly",
    description: "Branded events, embed RSVP widget, CSV export, waitlist & reminders.",
  },
  zh: {
    name: "Meetup 替代品 · 月度会员",
    description: "品牌活动页、嵌入 RSVP 组件、CSV 导出、候补与提醒",
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
