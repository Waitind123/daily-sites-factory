import type { Locale } from "./i18n-shared";

export const studioCopy = {
  en: {
    title: "Create testimonial wall",
    subtitle: "Input praise, get embeddable Wall of Love in one click",
    memberBadge: "✓ Member · unlimited generation",
    freeRemaining: (remaining: number, limit: number) =>
      `${remaining}/${limit} free tries left`,
    paywallTitle: "Free trial used up",
    paywallBody: "Subscribe $29/mo for unlimited walls and embed code",
    paywallCta: "Subscribe now",
    productInfo: "Product info",
    productName: "Product name *",
    productNamePlaceholder: "e.g. My SaaS",
    tagline: "Tagline",
    taglineDefault: "What users say",
    layout: "Layout",
    layoutGrid: "Grid",
    layoutCarousel: "Carousel",
    layoutMasonry: "Masonry",
    accentColor: "Accent color",
    testimonials: "Testimonials",
    addTestimonial: "+ Add one",
    testimonialN: (n: number) => `Testimonial #${n}`,
    remove: "Remove",
    namePlaceholder: "Name",
    rolePlaceholder: "Role / title",
    textPlaceholder: "Testimonial text",
    rating: "Rating",
    generating: "Generating…",
    generateCta: "Generate wall",
    resultTitle: "Result",
    tabEmbed: "Embed code",
    tabEmail: "Collection email",
    copyClipboard: "Copy to clipboard",
    previewTitle: "Preview",
    generateFailed: "Generation failed",
    sampleTestimonials: [
      {
        name: "Ming Z.",
        role: "Indie developer · SaaS",
        text: "Got my landing social proof in 10 minutes — 4× cheaper than Testimonial.to.",
        rating: 5,
      },
      {
        name: "Sarah Chen",
        role: "Indie Hacker",
        text: "Finally a testimonial tool that doesn't charge $40/mo just to remove branding.",
        rating: 5,
      },
      {
        name: "Alex Kim",
        role: "Bootstrapped founder",
        text: "Two lines of embed code, fast page load, conversion rate went up.",
        rating: 5,
      },
    ],
  },
  zh: {
    title: "创建证言墙",
    subtitle: "输入好评，一键生成可嵌入的 Wall of Love",
    memberBadge: "✓ 会员 · 无限生成",
    freeRemaining: (remaining: number, limit: number) =>
      `剩余 ${remaining}/${limit} 次免费体验`,
    paywallTitle: "免费体验已用完",
    paywallBody: "订阅 $29/月，无限生成证言墙和嵌入代码",
    paywallCta: "立即订阅",
    productInfo: "产品信息",
    productName: "产品名称 *",
    productNamePlaceholder: "例：我的 SaaS",
    tagline: "标语",
    taglineDefault: "用户真实好评",
    layout: "布局",
    layoutGrid: "网格",
    layoutCarousel: "轮播",
    layoutMasonry: "瀑布流",
    accentColor: "主题色",
    testimonials: "用户好评",
    addTestimonial: "+ 添加一条",
    testimonialN: (n: number) => `好评 #${n}`,
    remove: "删除",
    namePlaceholder: "姓名",
    rolePlaceholder: "职位 / 角色",
    textPlaceholder: "用户好评内容",
    rating: "评分",
    generating: "生成中…",
    generateCta: "生成证言墙",
    resultTitle: "生成结果",
    tabEmbed: "嵌入代码",
    tabEmail: "收集邮件模板",
    copyClipboard: "复制到剪贴板",
    previewTitle: "预览",
    generateFailed: "生成失败",
    sampleTestimonials: [
      {
        name: "李明",
        role: "独立开发者 · SaaS",
        text: "证言墙帮我 10 分钟搞定落地页社交证明，比 Testimonial.to 便宜 4 倍。",
        rating: 5,
      },
      {
        name: "Sarah Chen",
        role: "Indie Hacker",
        text: "终于有个不用付 $40/月 去品牌的证言工具。",
        rating: 5,
      },
      {
        name: "王芳",
        role: "产品经理",
        text: "嵌入代码两行搞定，页面加载快，客户好评转化率明显提升。",
        rating: 5,
      },
    ],
  },
} as const;

export const apiErrorMessages: Record<string, Record<Locale, string>> = {
  product_name_required: {
    en: "Product name is required",
    zh: "请填写产品名称",
  },
  trial_exhausted: {
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
    title: "Welcome to Testimonial Wall!",
    demoPaid: "Demo payment successful. You're now a member with unlimited wall generation.",
    paidBody: "Payment successful. You're now a member with unlimited wall generation and embed code.",
    order: "Order:",
    openStudio: "Create testimonial wall",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入证言墙！",
    demoPaid: "演示支付成功。你已是会员，可无限生成证言墙和嵌入代码。",
    paidBody: "支付成功，你已是会员，可无限生成证言墙和嵌入代码。",
    order: "订单:",
    openStudio: "创建证言墙",
    backHome: "返回首页",
  },
} as const;

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export const stripeProductCopy = {
  en: {
    name: "Testimonial Wall · Monthly",
    description: "Unlimited wall generation + embed code + collection email template",
  },
  zh: {
    name: "证言墙 · 月度会员",
    description: "无限生成证言墙 + 嵌入代码 + 收集邮件模板",
  },
} as const;

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
