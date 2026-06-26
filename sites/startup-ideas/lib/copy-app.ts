import type { Locale } from "./i18n-shared";

export const ideasCopy = {
  en: {
    title: "Startup Ideas Library",
    subtitle:
      "Click「Deep analysis」for market size, competitor pricing, and MVP roadmap. 5 free views.",
    trialBanner: (remaining: number, limit: number) =>
      `${remaining}/${limit} free deep analyses left`,
    subscribeCta: "Subscribe · $9.9/mo →",
    memberBadge: "✓ Member active · unlimited deep analyses",
    allCategory: "All",
    deepAnalysis: "Deep analysis →",
    loading: "Loading deep analysis…",
    subscribeNow: "Subscribe now · $9.9/mo",
    subscribePrompt: (count: number) =>
      `Like this analysis? Subscribe to unlock all ${count}+ ideas`,
    sections: {
      problem: "🎯 Problem validation",
      marketSize: "📈 Market size",
      competitors: "🏁 Competitor analysis",
      monetization: "💰 Monetization",
      channels: "📣 Acquisition channels",
      mvp: "🛠️ MVP roadmap",
      risks: "⚠️ Risks",
    },
    table: {
      name: "Competitor",
      pricing: "Pricing",
      gap: "Gap",
    },
    mrrLabel: (mrr: string, buildTime: string) => `MRR ${mrr} · ${buildTime}`,
    loadFailed: "Failed to load",
  },
  zh: {
    title: "创业点子库",
    subtitle: "点击「深度分析」查看市场规模、竞品定价、MVP 路线图。免费体验 5 次。",
    trialBanner: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费深度分析`,
    subscribeCta: "订阅 $9.9/月 →",
    memberBadge: "✓ 会员已激活 · 无限阅读深度分析",
    allCategory: "全部",
    deepAnalysis: "深度分析 →",
    loading: "加载深度分析中…",
    subscribeNow: "立即订阅 $9.9/月",
    subscribePrompt: (count: number) => `喜欢这种分析？订阅解锁全部 ${count}+ 个点子`,
    sections: {
      problem: "🎯 痛点验证",
      marketSize: "📈 市场规模",
      competitors: "🏁 竞品分析",
      monetization: "💰 变现模型",
      channels: "📣 获客渠道",
      mvp: "🛠️ MVP 路线图",
      risks: "⚠️ 风险",
    },
    table: {
      name: "竞品",
      pricing: "定价",
      gap: "缺口",
    },
    mrrLabel: (mrr: string, buildTime: string) => `MRR ${mrr} · ${buildTime}`,
    loadFailed: "加载失败",
  },
} as const;

export const apiErrorCopy = {
  en: {
    GENERIC: "Something went wrong. Please try again.",
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    MISSING_IDEA_ID: "Missing idea ID.",
    IDEA_NOT_FOUND: "Idea not found.",
    CHECKOUT_FAILED: "Checkout failed. Please try again.",
    FEEDBACK_FAILED: "Failed to submit feedback.",
    FEEDBACK_EMPTY: "Message cannot be empty.",
  },
  zh: {
    GENERIC: "出错了，请稍后再试",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅 $9.9/月",
    MISSING_IDEA_ID: "缺少 ideaId",
    IDEA_NOT_FOUND: "点子不存在",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    FEEDBACK_FAILED: "留言提交失败",
    FEEDBACK_EMPTY: "留言不能为空",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export function getIdeasCopy(locale: Locale) {
  return ideasCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  if (code && code in apiErrorCopy[locale]) {
    return apiErrorCopy[locale][code as ApiErrorCode];
  }
  return apiErrorCopy[locale].GENERIC;
}
