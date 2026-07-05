import type { Locale } from "./i18n-shared";

export const roomCopy = {
  en: {
    title: "Virtual library room",
    subtitle: "Pick a mode and ambient sound — focus alongside remote workers worldwide.",
    memberBadge: "✓ Member · unlimited library sessions",
    freeSessions: "Free sessions:",
    breakTime: "Break time",
    silentMode: "Silent mode",
    ambientSuffix: "ambient",
    coworkingNow: "reading now",
    endSession: "End session",
    sessionDone: "Focus complete!",
    sessionDoneBody: (duration: number, roomName: string) =>
      `You finished a ${duration}-minute ${roomName} session. Keep the momentum!`,
    startNew: "Start new session",
    chooseMode: "Choose desk mode",
    online: "online",
    minutes: "min",
    ambientSounds: "Ambient sound",
    roomOnline: "Readers in this hall",
    entering: "Entering…",
    startSession: (duration: number) => `Start ${duration}-min session →`,
    subscribeCta: "Subscribe · $9.9/mo →",
    subscribeNow: "Subscribe now",
    trialLowTitle: "Only {remaining} free sessions left",
    trialLowBody: "Subscribe for unlimited cowork sessions — most remote workers upgrade after session #3.",
    trialLowCta: "View pricing",
    sessionDoneUpsell: "Loved the focus? Subscribe for unlimited library sessions.",
    sessionDoneUpsellCta: "Subscribe · $9.9/mo",
    liveStats: {
      active: "Active sessions",
      focusHours: "Focus hours today",
      avgMin: "Avg min/session",
    },
  },
  zh: {
    title: "虚拟图书馆阅览室",
    subtitle: "选择模式和环境音，和全球远程工作者一起专注。",
    memberBadge: "✓ 会员 · 无限阅览室会话",
    freeSessions: "免费额度：",
    breakTime: "休息时间",
    silentMode: "静音模式",
    ambientSuffix: "环境音",
    coworkingNow: "人正在阅读",
    endSession: "结束会话",
    sessionDone: "专注完成！",
    sessionDoneBody: (duration: number, roomName: string) =>
      `你完成了 ${duration} 分钟的 ${roomName} 会话。继续保持！`,
    startNew: "开始新会话",
    chooseMode: "选择座位模式",
    online: "人在线",
    minutes: "分钟",
    ambientSounds: "环境音",
    roomOnline: "当前阅览室在线",
    entering: "进入中…",
    startSession: (duration: number) => `开始 ${duration} 分钟共工 →`,
    subscribeCta: "订阅 · $9.9/月 →",
    subscribeNow: "立即订阅",
    trialLowTitle: "仅剩 {remaining} 次免费会话",
    trialLowBody: "订阅解锁无限共工 — 多数远程工作者在第 3 场后升级。",
    trialLowCta: "查看定价",
    sessionDoneUpsell: "专注感觉不错？订阅解锁无限会话。",
    sessionDoneUpsellCta: "订阅 · $9.9/月",
    liveStats: {
      active: "正在共工",
      focusHours: "今日专注小时",
      avgMin: "平均分钟/场",
    },
  },
} as const;

export const roomTypesCopy = {
  en: [
    {
      id: "deep-focus",
      name: "Deep focus",
      description: "90 min uninterrupted deep work — coding, writing",
    },
    {
      id: "pomodoro",
      name: "Pomodoro",
      description: "25 min focus + 5 min break — classic technique",
    },
    {
      id: "creative",
      name: "Creative sprint",
      description: "45 min for design, brainstorming, ideation",
    },
    {
      id: "morning-sync",
      name: "Morning sync",
      description: "60 min morning kickoff with global remote workers",
    },
  ],
  zh: [
    {
      id: "deep-focus",
      name: "深度专注",
      description: "90 分钟无打扰深度工作，适合写代码、写文章",
    },
    {
      id: "pomodoro",
      name: "番茄钟",
      description: "25 分钟专注 + 5 分钟休息，经典番茄工作法",
    },
    {
      id: "creative",
      name: "创意发散",
      description: "45 分钟创意时间，适合设计、头脑风暴",
    },
    {
      id: "morning-sync",
      name: "晨间共工",
      description: "60 分钟晨间启动，和全球远程工作者一起开工",
    },
  ],
} as const;

export const ambientSoundsCopy = {
  en: [
    { id: "cafe", name: "Café" },
    { id: "rain", name: "Rain" },
    { id: "library", name: "Library" },
    { id: "forest", name: "Forest" },
    { id: "none", name: "Silent" },
  ],
  zh: [
    { id: "cafe", name: "咖啡馆" },
    { id: "rain", name: "雨声" },
    { id: "library", name: "图书馆" },
    { id: "forest", name: "森林" },
    { id: "none", name: "静音" },
  ],
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Library Cowork!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "unlimited cowork sessions are now active.",
    order: "Order:",
    openRoom: "Enter library room",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入虚拟图书馆共工！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "共工会话已解锁，次数不限。",
    order: "订单号：",
    openRoom: "进入阅览室",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Library Cowork · Monthly",
    description: "Unlimited cowork sessions, pomodoro, ambient sounds & virtual companions.",
  },
  zh: {
    name: "虚拟图书馆共工 · 月付",
    description: "共工会话不限次数，番茄钟、白噪音、虚拟同伴陪伴。",
  },
} as const;

export const apiErrors = {
  en: {
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    INVALID_ROOM: "Invalid cowork mode.",
    CHECKOUT_FAILED: "Checkout failed. Please try again.",
    FEEDBACK_FAILED: "Failed to submit feedback.",
    FEEDBACK_EMPTY: "Message cannot be empty.",
  },
  zh: {
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅。",
    INVALID_ROOM: "无效的共工模式。",
    CHECKOUT_FAILED: "结账失败，请重试。",
    FEEDBACK_FAILED: "留言提交失败。",
    FEEDBACK_EMPTY: "留言不能为空。",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrors.en;

export function getRoomCopy(locale: Locale) {
  return roomCopy[locale];
}

export function getRoomTypesCopy(locale: Locale) {
  return roomTypesCopy[locale];
}

export function getAmbientSoundsCopy(locale: Locale) {
  return ambientSoundsCopy[locale];
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
