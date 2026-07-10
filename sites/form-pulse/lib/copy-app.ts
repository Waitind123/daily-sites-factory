import type { Locale } from "./i18n-shared";

export const formsCopy = {
  en: {
    title: "Your Forms",
    subtitle: "Create Typeform-style forms, share links, track drop-off analytics.",
    memberBadge: "✓ Member · unlimited forms",
    freeForms: "Free forms:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 forms. Subscribe for unlimited forms, drop-off analytics, and embed widgets.",
    paywallCta: "Subscribe · $29/mo",
    formTitle: "New form",
    formName: "Form name",
    formNamePlaceholder: "e.g. Customer Feedback Survey",
    description: "Description",
    descriptionPlaceholder: "What is this form for? (optional)",
    creating: "Creating…",
    createForm: "Create form",
    createdTitle: "Form created!",
    createdHint: "Share this public form link:",
    openForm: "Open form →",
    yourForms: "Your forms",
    responses: "responses",
  },
  zh: {
    title: "你的表单",
    subtitle: "创建 Typeform 风格表单、分享链接、追踪放弃率分析。",
    memberBadge: "✓ 会员 · 表单不限量",
    freeForms: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 个表单。订阅后可无限创建、查看放弃率分析并使用嵌入组件。",
    paywallCta: "订阅 · $29/月",
    formTitle: "新建表单",
    formName: "表单名称",
    formNamePlaceholder: "例如：客户反馈问卷",
    description: "描述",
    descriptionPlaceholder: "这个表单用于什么？（可选）",
    creating: "创建中…",
    createForm: "创建表单",
    createdTitle: "表单已创建！",
    createdHint: "分享以下公开表单链接：",
    openForm: "打开表单 →",
    yourForms: "你的表单",
    responses: "条回复",
  },
} as const;

export const publicFormCopy = {
  en: {
    poweredBy: "Powered by Form Pulse · create your own form",
    answerPlaceholder: "Type your answer…",
    emailPlaceholder: "you@email.com",
    submitting: "Submitting…",
    nextCta: "Next →",
    submitCta: "Submit",
    thankYou: "Thanks for your response!",
    thankYouBody: "Your answers have been recorded. We appreciate your time.",
  },
  zh: {
    poweredBy: "由极简表单构建器提供 · 创建你自己的表单",
    answerPlaceholder: "输入你的回答…",
    emailPlaceholder: "you@email.com",
    submitting: "提交中…",
    nextCta: "下一题 →",
    submitCta: "提交",
    thankYou: "感谢你的回复！",
    thankYouBody: "你的回答已记录，感谢花时间填写。",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Form Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited forms, drop-off analytics, and embed widgets.",
    order: "Order:",
    openForms: "Open forms",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用极简表单构建器！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建表单、查看放弃率分析并使用嵌入组件。",
    order: "订单号：",
    openForms: "打开表单",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    FORM_NAME_REQUIRED: "Form name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    FORM_CREATE_FAILED: "Failed to create form",
    FORM_NOT_FOUND: "Form not found",
    EMAIL_REQUIRED: "Email is required",
    ANSWERS_REQUIRED: "Answers are required",
    RESPONSE_FAILED: "Failed to submit response",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    FORM_NAME_REQUIRED: "请填写表单名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    FORM_CREATE_FAILED: "创建表单失败",
    FORM_NOT_FOUND: "表单不存在",
    EMAIL_REQUIRED: "请填写邮箱",
    ANSWERS_REQUIRED: "请填写回答",
    RESPONSE_FAILED: "提交失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Form Pulse · Monthly",
    description: "Unlimited forms, drop-off analytics & embed widgets.",
  },
  zh: {
    name: "极简表单构建器 · 月付",
    description: "无限表单、放弃率分析与嵌入组件。",
  },
} as const;

export function getFormsCopy(locale: Locale) {
  return formsCopy[locale];
}

export function getPublicFormCopy(locale: Locale) {
  return publicFormCopy[locale];
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
