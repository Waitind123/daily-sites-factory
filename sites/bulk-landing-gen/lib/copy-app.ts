import type { Locale } from "./i18n-shared";
import type { LandingStyle } from "./generator";

export const joinCopy = {
  en: {
    title: "Join Bulk Landing Gen",
    subtitle: "One price, unlimited batch generations. No per-page fees.",
    recommended: "Recommended",
    monthly: "Monthly",
    perMonth: "/mo",
    vsCompetitor: "~$0.33/day · cancel anytime",
    perks: [
      "Unlimited batch generations (up to 20 keywords each)",
      "Keyword-optimized headlines + SEO meta per page",
      "4 style templates (minimal / bold / dark / gradient)",
      "HTML copy + download for every page",
      "Google Ads deployment tips + UTM guide",
      "Mobile-responsive layouts",
    ],
    subscribe: "Subscribe · $29/mo",
    demoNote: "Demo mode: no payment keys configured — checkout simulates success",
    checkoutNote: "Stripe secure checkout · credit cards accepted",
    whyTitle: "Why 5 free batch runs, then subscribe?",
    whyItems: [
      "Dynares $99/mo is overkill for indie ad budgets — we do 80% for $29",
      "Manual Webflow pages take 2 hours per ad group — we batch in 60 seconds",
      "Solo-maintained — $29 keeps keyword templates and SEO rules updated",
    ],
    includedTitle: "Included",
  },
  zh: {
    title: "加入批量落地页生成",
    subtitle: "一个价格，无限批量生成。没有按页收费。",
    recommended: "唯一方案",
    monthly: "月度会员",
    perMonth: "/月",
    vsCompetitor: "约 $0.33/天 · 随时取消",
    perks: [
      "无限批量生成（每批最多 20 个关键词）",
      "每页关键词优化标题 + SEO meta",
      "4 种风格模板（极简/醒目/暗色/渐变）",
      "每页 HTML 复制 + 下载",
      "Google Ads 部署建议 + UTM 指南",
      "移动端响应式布局",
    ],
    subscribe: "立即订阅 · $29/月",
    demoNote: "演示模式：未配置 Stripe 密钥，点击支付将模拟成功",
    checkoutNote: "Stripe 安全支付 · 支持信用卡",
    whyTitle: "免费体验 5 次批量生成，之后订阅，因为：",
    whyItems: [
      "Dynares $99/月对 indie 广告预算太贵 — 我们 $29 做到 80%",
      "Webflow 手动做每广告组要 2 小时 — 我们 60 秒批量完成",
      "一人维护，$29 才能持续更新关键词模板和 SEO 规则",
    ],
    includedTitle: "包含功能",
  },
} as const;

export const studioCopy = {
  en: {
    pageTitle: "Batch landing page generator",
    pageSubtitle: "Paste Google Ads keywords, generate customized pages per keyword",
    trialRemaining: "free batch runs remaining",
    subscribeUnlock: "Subscribe $29/mo →",
    memberActive: "✓ Member active · unlimited batch generations",
    examplePrefix: "Example:",
    productName: "Product name *",
    productNamePlaceholder: "TaskFlow",
    tagline: "Base tagline *",
    taglinePlaceholder: "Minimal project management for indie devs",
    description: "Product description *",
    descriptionPlaceholder: "What problem does it solve, who is it for...",
    features: "Core features (one per line)",
    featuresPlaceholder: "Unlimited projects\nGitHub sync\nTime tracking",
    keywords: "Google Ads keywords (one per line) *",
    keywordsPlaceholder: "indie project management tool\nsimple kanban for developers\ngithub project tracker",
    ctaText: "CTA button text",
    audience: "Target audience",
    styleLabel: "Page style",
    generate: "Generate batch",
    generating: "Generating batch...",
    emptyTitle: "Fill in the form and click generate batch",
    emptySubtitle: "Or pick the example above for a quick try",
    loading: "Generating keyword pages...",
    copyHtml: "Copy HTML",
    copied: "Copied ✓",
    downloadHtml: "Download HTML",
    downloadAll: "Download all HTML",
    seoMeta: "SEO Meta",
    tipsTitle: "💡 Ads deployment tips",
    subscribeUpsell: "Subscribe to unlock unlimited batch generations",
    subscribeButton: "Subscribe $29/mo",
    subscribeNow: "Subscribe $29/mo now",
    defaultCta: "Get started",
    defaultAudience: "Indie developers",
    pagesGenerated: "pages generated",
    styleOptions: {
      minimal: { label: "Minimal", desc: "levelsio / Nomad List vibe" },
      bold: { label: "Bold", desc: "Warm background, promos" },
      dark: { label: "Dark", desc: "Developer tools" },
      gradient: { label: "Gradient", desc: "Modern SaaS" },
    } as Record<LandingStyle, { label: string; desc: string }>,
    styleBadge: {
      minimal: "Minimal",
      bold: "Bold",
      dark: "Dark",
      gradient: "Gradient",
    } as Record<LandingStyle, string>,
    stats: {
      styles: "Keywords per batch",
      avgTime: "Avg batch time",
      exports: "Export format",
    },
  },
  zh: {
    pageTitle: "批量落地页生成器",
    pageSubtitle: "粘贴 Google Ads 关键词，每个关键词生成定制落地页",
    trialRemaining: "次免费批量生成",
    subscribeUnlock: "订阅 $29/月 →",
    memberActive: "✓ 会员已激活 · 无限批量生成",
    examplePrefix: "示例：",
    productName: "产品名称 *",
    productNamePlaceholder: "TaskFlow",
    tagline: "基础标语 *",
    taglinePlaceholder: "独立开发者的极简项目管理",
    description: "产品描述 *",
    descriptionPlaceholder: "解决什么问题，目标用户是谁...",
    features: "核心功能（每行一个）",
    featuresPlaceholder: "无限项目\nGitHub 同步\n时间追踪",
    keywords: "Google Ads 关键词（每行一个）*",
    keywordsPlaceholder: "独立开发者项目管理\n极简看板工具\nGitHub 项目追踪",
    ctaText: "CTA 按钮文案",
    audience: "目标用户",
    styleLabel: "页面风格",
    generate: "批量生成",
    generating: "批量生成中...",
    emptyTitle: "填写表单，点击批量生成",
    emptySubtitle: "或选择上方示例快速体验",
    loading: "正在生成关键词页面...",
    copyHtml: "复制 HTML",
    copied: "已复制 ✓",
    downloadHtml: "下载 HTML",
    downloadAll: "下载全部 HTML",
    seoMeta: "SEO Meta",
    tipsTitle: "💡 广告投放建议",
    subscribeUpsell: "订阅解锁无限批量生成",
    subscribeButton: "订阅 $29/月",
    subscribeNow: "立即订阅 $29/月",
    defaultCta: "立即开始",
    defaultAudience: "独立开发者",
    pagesGenerated: "页已生成",
    styleOptions: {
      minimal: { label: "极简", desc: "levelsio / Nomad List 风" },
      bold: { label: "醒目", desc: "暖色背景，促销" },
      dark: { label: "暗色", desc: "开发者工具" },
      gradient: { label: "渐变", desc: "SaaS 现代感" },
    } as Record<LandingStyle, { label: string; desc: string }>,
    styleBadge: {
      minimal: "极简",
      bold: "醒目",
      dark: "暗色",
      gradient: "渐变",
    } as Record<LandingStyle, string>,
    stats: {
      styles: "每批关键词数",
      avgTime: "平均批量时间",
      exports: "导出格式",
    },
  },
} as const;

export const apiErrorCopy = {
  en: {
    MISSING_FIELDS: "Please fill in product name, tagline, description, and keywords",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    MISSING_FIELDS: "请填写产品名称、标语、描述和关键词",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const successCopy = {
  en: {
    title: "Welcome to Bulk Landing Gen!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you're now a member with unlimited batch generations.",
    order: "Order:",
    openStudio: "Start batch generating",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入批量落地页生成！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是月度会员，可无限批量生成关键词落地页。",
    order: "订单:",
    openStudio: "开始批量生成",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Bulk Landing Gen · Monthly",
    description: "Unlimited batch generations, keyword-optimized pages, HTML export.",
  },
  zh: {
    name: "批量落地页生成 · 月度会员",
    description: "无限批量生成、关键词优化页面、HTML 导出",
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
