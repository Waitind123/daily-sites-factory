import type { Locale } from "./i18n-shared";

export const studioCopy = {
  en: {
    title: "Publish changelog",
    subtitle: "Input release notes, get public page + embed widget + RSS in one click",
    memberBadge: "✓ Member · unlimited generation",
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free tries left`,
    paywallTitle: "Free trial used up",
    paywallBody: "Subscribe $29/mo for unlimited changelog pages, widgets, and RSS",
    paywallCta: "Subscribe now",
    productInfo: "Product info",
    productName: "Product name *",
    productNamePlaceholder: "e.g. My SaaS",
    tagline: "Tagline",
    taglineDefault: "What's new",
    accentColor: "Accent color",
    includeStatusPage: "Also generate status page snippet",
    releases: "Release notes",
    addRelease: "+ Add release",
    releaseN: (n: number) => `Release #${n}`,
    remove: "Remove",
    versionPlaceholder: "v1.0.0",
    titlePlaceholder: "Release title",
    descPlaceholder: "Release description",
    tagFeature: "New feature",
    tagFix: "Fix",
    tagImprovement: "Improvement",
    tagBreaking: "Breaking change",
    generating: "Generating…",
    generateCta: "Generate changelog",
    resultTitle: "Result",
    tabPage: "Public page HTML",
    tabWidget: "Embed widget",
    tabStatus: "Status page",
    tabRss: "RSS feed",
    copyClipboard: "Copy to clipboard",
    previewTitle: "Public page preview",
    generateFailed: "Generation failed",
    sampleEntries: [
      {
        version: "v1.2.0",
        title: "Dark mode support",
        description: "System-level dark theme toggle. Switch manually in settings.",
        tag: "feature" as const,
        date: "2026-06-20",
      },
      {
        version: "v1.1.3",
        title: "Fixed PDF export garbling",
        description: "Fixed Chinese fonts showing as boxes in PDF exports.",
        tag: "fix" as const,
        date: "2026-06-15",
      },
      {
        version: "v1.1.0",
        title: "Performance improvements",
        description: "40% faster first paint, API response down to 120ms.",
        tag: "improvement" as const,
        date: "2026-06-10",
      },
    ],
  },
  zh: {
    title: "发布 Changelog",
    subtitle: "输入版本更新，一键生成公开页 + 嵌入 Widget + RSS",
    memberBadge: "✓ 会员 · 无限生成",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    paywallTitle: "免费体验已用完",
    paywallBody: "订阅 $29/月，无限生成 Changelog 页、Widget 和 RSS",
    paywallCta: "立即订阅",
    productInfo: "产品信息",
    productName: "产品名称 *",
    productNamePlaceholder: "例：我的 SaaS",
    tagline: "标语",
    taglineDefault: "产品更新日志",
    accentColor: "主题色",
    includeStatusPage: "同时生成状态页片段",
    releases: "版本更新",
    addRelease: "+ 添加版本",
    releaseN: (n: number) => `版本 #${n}`,
    remove: "删除",
    versionPlaceholder: "v1.0.0",
    titlePlaceholder: "更新标题",
    descPlaceholder: "更新详情描述",
    tagFeature: "新功能",
    tagFix: "修复",
    tagImprovement: "优化",
    tagBreaking: "破坏性变更",
    generating: "生成中…",
    generateCta: "生成 Changelog",
    resultTitle: "生成结果",
    tabPage: "公开页 HTML",
    tabWidget: "嵌入 Widget",
    tabStatus: "状态页",
    tabRss: "RSS Feed",
    copyClipboard: "复制到剪贴板",
    previewTitle: "公开页预览",
    generateFailed: "生成失败",
    sampleEntries: [
      {
        version: "v1.2.0",
        title: "新增暗色模式",
        description: "支持系统级暗色主题切换，护眼更舒适。可在设置中手动切换。",
        tag: "feature" as const,
        date: "2026-06-20",
      },
      {
        version: "v1.1.3",
        title: "修复导出 PDF 乱码",
        description: "修复部分中文字体在 PDF 导出时显示为方框的问题。",
        tag: "fix" as const,
        date: "2026-06-15",
      },
      {
        version: "v1.1.0",
        title: "性能优化",
        description: "首屏加载速度提升 40%，API 响应时间降低至 120ms。",
        tag: "improvement" as const,
        date: "2026-06-10",
      },
    ],
  },
} as const;

export const apiErrorMessages: Record<string, Record<Locale, string>> = {
  product_name_required: {
    en: "Product name is required",
    zh: "请填写产品名称",
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
    title: "Welcome to Indie Changelog!",
    demoPaid: "Demo payment successful. You're now a member with unlimited changelog generation.",
    paidBody: "Payment successful. You're now a member with unlimited changelog pages and embed code.",
    order: "Order:",
    openStudio: "Publish changelog",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入 Indie Changelog！",
    demoPaid: "演示支付成功。你已是会员，可无限生成 Changelog 页和嵌入代码。",
    paidBody: "支付成功，你已是会员，可无限生成 Changelog 页和嵌入代码。",
    order: "订单:",
    openStudio: "发布 Changelog",
    backHome: "返回首页",
  },
} as const;

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export const stripeProductCopy = {
  en: {
    name: "Indie Changelog · Monthly",
    description: "Unlimited changelog pages + embed widget + status snippet + RSS",
  },
  zh: {
    name: "Indie Changelog · 月度会员",
    description: "无限生成 Changelog 页 + 嵌入 Widget + 状态页 + RSS",
  },
} as const;

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
