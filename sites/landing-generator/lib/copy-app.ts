import type { Locale } from "./i18n-shared";
import type { LandingStyle } from "./generator";

export const joinCopy = {
  en: {
    title: "Join Landing Generator",
    subtitle: "One price, unlimited generations. No per-page fees, no hidden costs.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited landing page generations",
      "4 style templates (minimal / bold / dark / gradient)",
      "One-click HTML copy + download",
      "Auto-generated SEO meta tags",
      "Optimization tips + deployment guide",
      "Mobile-responsive layouts",
    ],
    subscribe: "Subscribe · $9.9/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe secure checkout · credit cards accepted",
    whyTitle: "Why 5 free tries, then subscribe?",
    whyItems: [
      "Carrd Pro $19/yr locks you to one template — we offer 4 styles unlimited",
      "Webflow free tier can't bind custom domains — we export HTML you deploy anywhere",
      "Solo-maintained — $9.9 keeps templates and SEO optimization updated",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入 Landing 生成器",
    subtitle: "一个价格，无限生成。没有按次收费，没有隐藏费用。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限 Landing Page 生成",
      "4 种风格模板（极简/醒目/暗色/渐变）",
      "HTML 一键导出 + 下载",
      "SEO meta 标签自动生成",
      "优化建议 + 部署指南",
      "移动端响应式布局",
    ],
    subscribe: "立即订阅 · $9.9/月",
    demoNote: "演示模式：未配置 Stripe 密钥，点击支付将模拟成功",
    checkoutNote: "Stripe 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次，之后订阅，因为：",
    whyItems: [
      "Carrd Pro $19/年 只能用一个模板，我们 4 种风格无限切换",
      "Webflow 免费版不能绑自定义域名，我们导出 HTML 随便部署",
      "一人维护，$9.9 才能持续更新模板和 SEO 优化",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const studioCopy = {
  en: {
    pageTitle: "Landing page generator",
    pageSubtitle: "Fill in product info, generate deployable HTML landing pages",
    trialRemaining: "free generations remaining",
    subscribeUnlock: "Subscribe $9.9/mo →",
    memberActive: "✓ Member active · unlimited generations + HTML export",
    examplePrefix: "Example:",
    productName: "Product name *",
    productNamePlaceholder: "TaskFlow",
    tagline: "One-line tagline *",
    taglinePlaceholder: "Minimal project management for indie devs",
    description: "Product description *",
    descriptionPlaceholder: "What problem does it solve, who is it for...",
    features: "Core features (one per line)",
    featuresPlaceholder: "Unlimited projects\nGitHub sync\nTime tracking",
    ctaText: "CTA button text",
    audience: "Target audience",
    styleLabel: "Page style",
    generate: "Generate landing page",
    generating: "Generating...",
    emptyTitle: "Fill in the form on the left and click generate",
    emptySubtitle: "Or pick an example above for a quick try",
    loading: "Generating landing page...",
    copyHtml: "Copy HTML",
    copied: "Copied ✓",
    downloadHtml: "Download HTML",
    seoMeta: "SEO Meta",
    tipsTitle: "💡 Optimization tips",
    subscribeUpsell: "Subscribe to unlock unlimited generations + hosting",
    subscribeButton: "Subscribe $9.9/mo",
    subscribeNow: "Subscribe $9.9/mo now",
    defaultCta: "Get started",
    defaultAudience: "Indie developers",
    styleOptions: {
      minimal: { label: "Minimal", desc: "levelsio / Nomad List vibe, white + blue accent" },
      bold: { label: "Bold", desc: "Warm background, great for limited-time promos" },
      dark: { label: "Dark", desc: "Developer tools standard" },
      gradient: { label: "Gradient", desc: "Modern SaaS feel, purple gradient" },
    } as Record<LandingStyle, { label: string; desc: string }>,
    styleBadge: {
      minimal: "Minimal",
      bold: "Bold",
      dark: "Dark",
      gradient: "Gradient",
    } as Record<LandingStyle, string>,
    stats: {
      styles: "Style templates",
      avgTime: "Avg generation",
      exports: "Export format",
    },
  },
  zh: {
    pageTitle: "Landing Page 生成器",
    pageSubtitle: "填写产品信息，一键生成可部署的 HTML 落地页",
    trialRemaining: "次免费生成",
    subscribeUnlock: "订阅 $9.9/月 →",
    memberActive: "✓ 会员已激活 · 无限生成 + HTML 导出",
    examplePrefix: "示例：",
    productName: "产品名称 *",
    productNamePlaceholder: "TaskFlow",
    tagline: "一句话标语 *",
    taglinePlaceholder: "独立开发者的极简项目管理",
    description: "产品描述 *",
    descriptionPlaceholder: "解决什么问题，目标用户是谁...",
    features: "核心功能（每行一个）",
    featuresPlaceholder: "无限项目\nGitHub 同步\n时间追踪",
    ctaText: "CTA 按钮文案",
    audience: "目标用户",
    styleLabel: "页面风格",
    generate: "生成 Landing Page",
    generating: "生成中...",
    emptyTitle: "填写左侧表单，点击生成",
    emptySubtitle: "或选择上方示例快速体验",
    loading: "正在生成 landing page...",
    copyHtml: "复制 HTML",
    copied: "已复制 ✓",
    downloadHtml: "下载 HTML",
    seoMeta: "SEO Meta",
    tipsTitle: "💡 优化建议",
    subscribeUpsell: "订阅解锁无限生成 + 托管部署",
    subscribeButton: "订阅 $9.9/月",
    subscribeNow: "立即订阅 $9.9/月",
    defaultCta: "立即开始",
    defaultAudience: "独立开发者",
    styleOptions: {
      minimal: { label: "极简", desc: "levelsio / Nomad List 风，白底蓝 accent" },
      bold: { label: "醒目", desc: "暖色背景，适合限时促销" },
      dark: { label: "暗色", desc: "开发者工具标配" },
      gradient: { label: "渐变", desc: "SaaS 现代感，紫色渐变" },
    } as Record<LandingStyle, { label: string; desc: string }>,
    styleBadge: {
      minimal: "极简",
      bold: "醒目",
      dark: "暗色",
      gradient: "渐变",
    } as Record<LandingStyle, string>,
    stats: {
      styles: "风格模板",
      avgTime: "平均生成时间",
      exports: "导出格式",
    },
  },
} as const;

export const apiErrorCopy = {
  en: {
    MISSING_FIELDS: "Please fill in product name, tagline, and description",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    MISSING_FIELDS: "请填写产品名称、标语和描述",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const successCopy = {
  en: {
    title: "Welcome to Landing Generator!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited landing page generations.",
    order: "Order:",
    openStudio: "Start generating",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入 Landing 生成器！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是月度会员，可无限生成落地页并导出 HTML。",
    order: "订单:",
    openStudio: "开始生成 Landing Page",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Landing Generator · Monthly",
    description: "Unlimited landing page generations, 4 styles, HTML export, SEO meta.",
  },
  zh: {
    name: "Landing 生成器 · 月度会员",
    description: "无限落地页生成、4 种风格、HTML 导出、SEO meta",
  },
} as const;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getStudioCopy(locale: Locale) {
  return studioCopy[locale];
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
