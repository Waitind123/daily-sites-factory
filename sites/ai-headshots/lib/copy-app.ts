import type { Locale } from "./i18n-shared";

export const studioCopy = {
  en: {
    backHome: "← Back to home",
    title: "AI Headshot Studio",
    subtitle: "Upload selfie → pick style → 30 sec output",
    trialRemaining: "Free tries remaining",
    trialSuffix: "· subscribe at $9.9/mo when used up",
    paywallTitle: "5 free tries used up 🎉",
    paywallBody: "Like the results? Subscribe for unlimited generations",
    paywallCta: "Subscribe · $9.9/mo",
    uploadTitle: "Click or drag to upload selfie",
    uploadHint: "JPG / PNG, max 4MB",
    previewAlt: "Preview",
    resultAlt: "Generated result",
    generating: "AI generating…",
    generatingHint: "About 15–30 seconds",
    resultPlaceholder: "Generated result appears here",
    demoNote: "Demo mode · set REPLICATE_API_TOKEN for real AI headshots",
    download: "Download image",
    styleLabel: "Choose style",
    generate: "Generate professional headshot",
    generatingBtn: "Generating…",
    invalidType: "Please upload a JPG or PNG image",
    tooLarge: "Image must be under 4MB",
    uploadFirst: "Please upload a selfie first",
  },
  zh: {
    backHome: "← 返回首页",
    title: "AI 证件照工作室",
    subtitle: "上传自拍 → 选风格 → 30 秒出图",
    trialRemaining: "免费体验剩余",
    trialSuffix: "· 用尽后需订阅 $9.9/月",
    paywallTitle: "免费 5 次已用完 🎉",
    paywallBody: "喜欢的话订阅继续无限生成",
    paywallCta: "订阅 $9.9/月",
    uploadTitle: "点击或拖拽上传自拍",
    uploadHint: "JPG / PNG，最大 4MB",
    previewAlt: "预览",
    resultAlt: "生成结果",
    generating: "AI 生成中…",
    generatingHint: "约 15–30 秒",
    resultPlaceholder: "生成结果将显示在这里",
    demoNote: "演示模式 · 配置 REPLICATE_API_TOKEN 生成真实头像",
    download: "下载图片",
    styleLabel: "选择风格",
    generate: "生成专业证件照",
    generatingBtn: "生成中…",
    invalidType: "请上传 JPG / PNG 图片",
    tooLarge: "图片不能超过 4MB",
    uploadFirst: "请先上传自拍",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to AI Headshots!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited AI headshot generations.",
    currency: "Currency:",
    order: "Order:",
    openStudio: "Open AI studio",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入 AI 证件照！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限生成 AI 专业证件照。",
    currency: "币种：",
    order: "订单号：",
    openStudio: "进入 AI 工作室生成证件照",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    IMAGE_REQUIRED: "Please upload an image",
    IMAGE_INVALID: "Invalid image format",
    IMAGE_TOO_LARGE: "Image too large — please compress and retry",
    GENERATE_FAILED: "Generation failed. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    TRIAL_EXHAUSTED: "免费体验 5 次已用完，请订阅继续使用",
    IMAGE_REQUIRED: "请上传图片",
    IMAGE_INVALID: "图片格式无效",
    IMAGE_TOO_LARGE: "图片过大，请压缩后重试",
    GENERATE_FAILED: "生成失败，请稍后重试",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "AI Headshots · Monthly",
    description: "Unlimited AI headshot generations, all styles, HD download.",
  },
  zh: {
    name: "AI 证件照 · 月付",
    description: "无限 AI 头像生成、全部风格、高清下载。",
  },
} as const;

export function getStudioCopy(locale: Locale) {
  return studioCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  if (code && code in apiErrorCopy[locale]) {
    return apiErrorCopy[locale][code as ApiErrorCode];
  }
  return apiErrorCopy[locale].GENERIC;
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
