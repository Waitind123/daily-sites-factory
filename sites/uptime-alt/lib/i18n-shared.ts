export type Locale = "en" | "zh";

export const LOCALE_COOKIE = "site_locale";

export const uiCopy = {
  en: {
    guide: "Guide",
    pricing: "Pricing",
    join: "Subscribe",
    joinCta: "Subscribe · $29/mo",
    sitemap: "Sitemap",
    feedbackTitle: "Feedback",
    feedbackSubtitle: "Tell us what to improve — we read every message.",
    feedbackPlaceholder: "What feature or fix do you need?",
    feedbackSubmit: "Send feedback",
    feedbackSending: "Sending…",
    feedbackThanks: "Thanks! We'll reply here soon.",
    feedbackEmpty: "No feedback yet. Be the first!",
    feedbackReply: "Our reply",
    langEn: "EN",
    langZh: "中文",
    footerBuilt: "Ship fast · indie maintained",
    privacy: "Privacy",
    terms: "Terms",
    legalCompliance: "Compliant with PRC laws",
  },
  zh: {
    guide: "指南",
    pricing: "定价",
    join: "加入会员",
    joinCta: "订阅 · $29/月",
    sitemap: "网站地图",
    feedbackTitle: "用户留言",
    feedbackSubtitle: "告诉我们需要改进什么，每条留言都会看。",
    feedbackPlaceholder: "你希望增加什么功能或修复什么问题？",
    feedbackSubmit: "发送留言",
    feedbackSending: "发送中…",
    feedbackThanks: "感谢留言！我们会尽快在此回复。",
    feedbackEmpty: "暂无留言，欢迎第一个反馈。",
    feedbackReply: "我们的回复",
    langEn: "EN",
    langZh: "中文",
    footerBuilt: "快速迭代 · 一人维护",
    privacy: "隐私政策",
    terms: "用户协议",
    legalCompliance: "遵守中国法律法规",
  },
} as const;

export function getUiCopy(locale: Locale) {
  return uiCopy[locale];
}
