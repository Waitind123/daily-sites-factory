import type { Locale } from "./i18n-shared";
import type { OgTemplate } from "./og-generator";

export const studioCopy = {
  en: {
    title: "Generate OG share image",
    subtitle: "Enter title, pick template, export 1200×630 social share image",
    memberBadge: "✓ Member · unlimited generation",
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free tries left`,
    paywallTitle: "Free trial used up",
    paywallBody: "Subscribe $29/mo for unlimited OG images and meta tag export",
    paywallCta: "Subscribe now",
    contentSection: "Content",
    titleLabel: "Headline *",
    titlePlaceholder: "e.g. My SaaS just launched",
    subtitleLabel: "Subtitle",
    subtitlePlaceholder: "e.g. Help indie hackers ship faster",
    badgeLabel: "Product badge",
    badgePlaceholder: "SaaS",
    authorLabel: "Author",
    authorPlaceholder: "Your name",
    accentColorLabel: "Brand color",
    templateSection: "Template",
    generating: "Generating…",
    generateCta: "Generate OG image",
    resultTitle: "Result",
    tabHtml: "HTML",
    tabMeta: "Meta tags",
    tabNextjs: "Next.js",
    tabSvg: "SVG source",
    downloadSvg: "Download SVG",
    copyDataUrl: "Copy Data URL",
    copyClipboard: "Copy to clipboard",
    generateFailed: "Generation failed",
    previewAlt: "OG preview",
    templates: [
      { id: "minimal" as OgTemplate, name: "Minimal", desc: "Clean whitespace, great for SaaS landing pages" },
      { id: "product" as OgTemplate, name: "Product", desc: "Product badge, ideal for Product Hunt launches" },
      { id: "blog" as OgTemplate, name: "Blog", desc: "Article card style for technical blogs" },
      { id: "gradient" as OgTemplate, name: "Gradient", desc: "Brand gradient for social media" },
      { id: "dark" as OgTemplate, name: "Dark", desc: "Developer style for dev tools" },
    ],
  },
  zh: {
    title: "生成 OG 分享图",
    subtitle: "输入标题，选择模板，一键导出 1200×630 社交分享图",
    memberBadge: "✓ 会员 · 无限生成",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    paywallTitle: "免费体验已用完",
    paywallBody: "订阅 $29/月，无限生成 OG 图和 meta 标签",
    paywallCta: "立即订阅",
    contentSection: "内容",
    titleLabel: "主标题 *",
    titlePlaceholder: "例：我的 SaaS 产品发布了",
    subtitleLabel: "副标题",
    subtitlePlaceholder: "例：帮助 indie hacker 快速 ship 产品",
    badgeLabel: "产品标签",
    badgePlaceholder: "SaaS",
    authorLabel: "作者",
    authorPlaceholder: "你的名字",
    accentColorLabel: "品牌色",
    templateSection: "模板",
    generating: "生成中…",
    generateCta: "生成 OG 图",
    resultTitle: "生成结果",
    tabHtml: "HTML",
    tabMeta: "Meta 标签",
    tabNextjs: "Next.js",
    tabSvg: "SVG 源码",
    downloadSvg: "下载 SVG",
    copyDataUrl: "复制 Data URL",
    copyClipboard: "复制到剪贴板",
    generateFailed: "生成失败",
    previewAlt: "OG 预览",
    templates: [
      { id: "minimal" as OgTemplate, name: "极简", desc: "干净留白，适合 SaaS 落地页" },
      { id: "product" as OgTemplate, name: "产品", desc: "带产品标签，适合 Product Hunt 发布" },
      { id: "blog" as OgTemplate, name: "博客", desc: "文章卡片风格，适合技术博客" },
      { id: "gradient" as OgTemplate, name: "渐变", desc: "品牌色渐变，适合社交媒体" },
      { id: "dark" as OgTemplate, name: "暗色", desc: "开发者风格，适合 dev tools" },
    ],
  },
} as const;

export const apiErrorMessages: Record<string, Record<Locale, string>> = {
  title_required: {
    en: "Headline is required",
    zh: "请填写标题",
  },
  TRIAL_EXHAUSTED: {
    en: "Free trial used up — please subscribe",
    zh: "免费体验已用完，请订阅",
  },
  generate_failed: {
    en: "Generation failed — please try again",
    zh: "生成失败，请稍后重试",
  },
  CHECKOUT_FAILED: {
    en: "Checkout failed — please try again",
    zh: "支付创建失败，请稍后重试",
  },
};

export function getStudioCopy(locale: Locale) {
  return studioCopy[locale];
}

export function getApiErrorMessage(code: string, locale: Locale): string {
  return apiErrorMessages[code]?.[locale] ?? code;
}

export const successCopy = {
  en: {
    title: "Welcome to OG Image Studio!",
    demoPaid: "Demo payment successful. You're now a member with unlimited OG generation.",
    paidBody: "Payment successful. You're now a member with unlimited OG share images.",
    order: "Order:",
    openStudio: "Generate OG image",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入 OG Image Studio！",
    demoPaid: "演示支付成功。你已是会员，可无限生成 OG 分享图。",
    paidBody: "支付成功，你已是会员，可无限生成 OG 分享图。",
    order: "订单:",
    openStudio: "生成 OG 图",
    backHome: "返回首页",
  },
} as const;

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export const stripeProductCopy = {
  en: {
    name: "OG Image Studio · Monthly",
    description: "Unlimited OG share images + meta tag export",
  },
  zh: {
    name: "OG Image Studio · 月度会员",
    description: "无限生成 OG 社交分享图 + Meta 标签导出",
  },
} as const;

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
