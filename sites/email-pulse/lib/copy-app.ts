import type { Locale } from "./i18n-shared";

export const templatesCopy = {
  en: {
    title: "Your email templates",
    subtitle: "Build product emails, preview live, copy HTML for your ESP.",
    memberBadge: "✓ Member · unlimited templates",
    freeTemplates: "Free templates:",
    paywallTitle: "Free trial used up",
    paywallBody:
      "You've created 5 templates. Subscribe for unlimited templates, live preview, and HTML export.",
    paywallCta: "Subscribe · $29/mo",
    formTitle: "New template",
    templateName: "Template name",
    templateNamePlaceholder: "e.g. Product launch v2",
    subject: "Email subject",
    subjectPlaceholder: "e.g. We just shipped dark mode",
    preheader: "Preheader",
    preheaderPlaceholder: "Preview text in inbox (optional)",
    creating: "Creating…",
    createTemplate: "Create template",
    createdTitle: "Template created!",
    createdHint: "Open the editor to customize blocks and copy HTML:",
    openEditor: "Open editor →",
    yourTemplates: "Your templates",
    copyHtml: "Copy HTML",
    copied: "Copied!",
    preview: "Preview",
    blocks: "Blocks",
    addBlock: "Add text block",
    saveBlocks: "Save changes",
    saving: "Saving…",
    saved: "Saved",
    noTemplates: "No templates yet. Create your first one above.",
  },
  zh: {
    title: "你的邮件模板",
    subtitle: "搭建产品邮件、实时预览、复制 HTML 用于邮件服务商。",
    memberBadge: "✓ 会员 · 模板不限量",
    freeTemplates: "免费额度：",
    paywallTitle: "免费体验已用完",
    paywallBody: "你已创建 5 个模板。订阅后可无限创建、实时预览并导出 HTML。",
    paywallCta: "订阅 · $29/月",
    formTitle: "新建模板",
    templateName: "模板名称",
    templateNamePlaceholder: "例如：产品 v2 上线",
    subject: "邮件主题",
    subjectPlaceholder: "例如：深色模式已上线",
    preheader: "预览摘要",
    preheaderPlaceholder: "收件箱预览文字（可选）",
    creating: "创建中…",
    createTemplate: "创建模板",
    createdTitle: "模板已创建！",
    createdHint: "打开编辑器自定义区块并复制 HTML：",
    openEditor: "打开编辑器 →",
    yourTemplates: "你的模板",
    copyHtml: "复制 HTML",
    copied: "已复制！",
    preview: "预览",
    blocks: "区块",
    addBlock: "添加正文区块",
    saveBlocks: "保存修改",
    saving: "保存中…",
    saved: "已保存",
    noTemplates: "还没有模板，在上方创建第一个。",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Email Pulse!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you now have unlimited templates, live preview, and HTML export.",
    order: "Order:",
    openTemplates: "Open templates",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎使用 HTML 邮件构建器！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功 —",
    paidBody: "你现在可以无限创建模板、实时预览并导出 HTML。",
    order: "订单号：",
    openTemplates: "打开模板",
    backHome: "返回首页",
  },
} as const;

export const apiErrorCopy = {
  en: {
    TEMPLATE_NAME_REQUIRED: "Template name is required",
    TRIAL_EXHAUSTED: "Free trial exhausted. Please subscribe.",
    TEMPLATE_CREATE_FAILED: "Failed to create template",
    TEMPLATE_NOT_FOUND: "Template not found",
    TEMPLATE_UPDATE_FAILED: "Failed to update template",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
    GENERIC: "Something went wrong. Please try again.",
  },
  zh: {
    TEMPLATE_NAME_REQUIRED: "请填写模板名称",
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅后继续。",
    TEMPLATE_CREATE_FAILED: "创建模板失败",
    TEMPLATE_NOT_FOUND: "模板不存在",
    TEMPLATE_UPDATE_FAILED: "更新模板失败",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
    GENERIC: "出错了，请稍后再试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export const stripeProductCopy = {
  en: {
    name: "Email Pulse Pro",
    description: "Unlimited email templates, live preview, HTML export",
  },
  zh: {
    name: "HTML 邮件构建器专业版",
    description: "模板不限量、实时预览、HTML 导出",
  },
} as const;

export function getTemplatesCopy(locale: Locale) {
  return templatesCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  const key = (code ?? "GENERIC") as ApiErrorCode;
  return apiErrorCopy[locale][key] ?? apiErrorCopy[locale].GENERIC;
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
