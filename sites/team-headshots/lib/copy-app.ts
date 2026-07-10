import type { Locale } from "./i18n-shared";

export const studioCopy = {
  en: {
    backHome: "← Back to home",
    title: "Team Headshot Studio",
    subtitle: "Add members → pick unified style → batch generate",
    trialRemaining: "Free tries remaining",
    trialSuffix: "· subscribe at $29/mo when used up",
    paywallTitle: "5 free tries used up 🎉",
    paywallBody: "Like the team results? Subscribe for unlimited batch generations",
    paywallCta: "Subscribe · $29/mo",
    uploadTitle: "Click to upload selfie",
    uploadHint: "JPG / PNG, max 4MB",
    previewAlt: "Preview",
    resultAlt: "Generated result",
    generating: "AI generating team headshots…",
    generatingHint: "About 15–30 seconds per member",
    resultPlaceholder: "Generated headshots appear here",
    demoNote: "Demo mode · set REPLICATE_API_TOKEN for real AI headshots",
    download: "Download image",
    styleLabel: "Unified team style",
    generate: "Generate all uploaded members",
    generatingBtn: "Generating…",
    invalidType: "Please upload a JPG or PNG image",
    tooLarge: "Image must be under 4MB",
    uploadFirst: "Please upload at least one team member photo",
    addMember: "Add team member",
    memberName: "Member name",
    memberNamePlaceholder: "e.g. Alex",
    removeMember: "Remove",
    noPhoto: "No photo yet",
    membersCount: "members ready",
    batchProgress: "Generating member",
    of: "of",
  },
  zh: {
    backHome: "← 返回首页",
    title: "团队证件照工作室",
    subtitle: "添加成员 → 选统一风格 → 批量生成",
    trialRemaining: "免费体验剩余",
    trialSuffix: "· 用尽后需订阅 $29/月",
    paywallTitle: "免费 5 次已用完 🎉",
    paywallBody: "喜欢团队效果？订阅继续无限批量生成",
    paywallCta: "订阅 $29/月",
    uploadTitle: "点击上传自拍",
    uploadHint: "JPG / PNG，最大 4MB",
    previewAlt: "预览",
    resultAlt: "生成结果",
    generating: "AI 批量生成团队证件照…",
    generatingHint: "每位成员约 15–30 秒",
    resultPlaceholder: "生成的证件照将显示在这里",
    demoNote: "演示模式 · 配置 REPLICATE_API_TOKEN 生成真实头像",
    download: "下载图片",
    styleLabel: "团队统一风格",
    generate: "批量生成已上传成员",
    generatingBtn: "生成中…",
    invalidType: "请上传 JPG / PNG 图片",
    tooLarge: "图片不能超过 4MB",
    uploadFirst: "请至少上传一名团队成员照片",
    addMember: "添加团队成员",
    memberName: "成员姓名",
    memberNamePlaceholder: "例如：张明",
    removeMember: "移除",
    noPhoto: "尚未上传",
    membersCount: "名成员已就绪",
    batchProgress: "正在生成第",
    of: "/",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Team Headshots!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited batch team headshot generations for up to 10 members.",
    currency: "Currency:",
    order: "Order:",
    openStudio: "Open team studio",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入团队 AI 头像！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以为最多 10 名成员无限批量生成 AI 专业证件照。",
    currency: "币种：",
    order: "订单号：",
    openStudio: "进入团队工作室",
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
    name: "Team Headshots · Monthly",
    description: "Up to 10 team members, unlimited batch AI headshot generations.",
  },
  zh: {
    name: "团队 AI 头像 · 月付",
    description: "最多 10 名成员，无限批量 AI 证件照生成。",
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
