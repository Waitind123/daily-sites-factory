import type { Locale } from "./i18n-shared";

export const jobsCopy = {
  en: {
    title: "Remote jobs",
    openCount: "open roles",
    memberBadge: "✓ Member · unlimited views",
    freeViews: "Free views:",
    searchPlaceholder: "Search jobs, companies, skills…",
    paywallTitle: "Free trial used up",
    paywallBody: "Subscribe for unlimited job views and unlimited company posts.",
    paywallCta: "Subscribe · $29/mo",
    jobTitle: "Role",
    location: "Location",
    type: "Type",
    salary: "Salary",
    description: "Description",
    requirements: "Requirements",
    applyNow: "Apply now →",
    selectJob: "Click a job on the left to see full details",
    freeTrialNote: "5 free detail views for non-members",
    loadFailed: "Failed to load",
  },
  zh: {
    title: "远程职位",
    openCount: "个开放岗位",
    memberBadge: "✓ 会员 · 无限查看",
    freeViews: "剩余免费次数：",
    searchPlaceholder: "搜索职位、公司、技能…",
    paywallTitle: "免费体验已用完",
    paywallBody: "订阅后可无限查看职位详情，企业无限发帖。",
    paywallCta: "订阅 · $29/月",
    jobTitle: "职位",
    location: "地点",
    type: "类型",
    salary: "薪资",
    description: "职位描述",
    requirements: "要求",
    applyNow: "立即申请 →",
    selectJob: "点击左侧职位查看完整详情",
    freeTrialNote: "非会员免费体验 5 次",
    loadFailed: "加载失败",
  },
} as const;

export const postCopy = {
  en: {
    lockedTitle: "Posting requires membership",
    lockedBody: "$29/mo for unlimited remote job posts — reach quality candidates directly.",
    lockedCta: "Join · $29/mo",
    title: "Post a remote job",
    subtitle: "Unlimited posts for members · reviewed within 24h",
    jobTitle: "Job title",
    jobTitlePlaceholder: "Senior Frontend Engineer",
    company: "Company name",
    companyPlaceholder: "Your Company",
    salary: "Salary range",
    salaryPlaceholder: "$100k–$150k",
    description: "Job description",
    descriptionPlaceholder: "Describe responsibilities, requirements, and benefits…",
    applyUrl: "Apply link",
    applyUrlPlaceholder: "https://…",
    submit: "Submit (demo)",
    mvpNote: "MVP demo: full posting flow ships in the next release",
  },
  zh: {
    lockedTitle: "发布职位需要会员",
    lockedBody: "$29/月可无限发布远程职位，直达高质量求职者。",
    lockedCta: "加入会员 · $29/月",
    title: "发布远程职位",
    subtitle: "会员无限发帖，24 小时内审核上线",
    jobTitle: "职位名称",
    jobTitlePlaceholder: "高级前端工程师",
    company: "公司名称",
    companyPlaceholder: "你的公司",
    salary: "薪资范围",
    salaryPlaceholder: "$100k–$150k 或 ¥30k–¥50k/月",
    description: "职位描述",
    descriptionPlaceholder: "描述岗位职责、要求和福利…",
    applyUrl: "申请链接",
    applyUrlPlaceholder: "https://…",
    submit: "提交发布（演示）",
    mvpNote: "MVP 演示：完整发帖功能将在下一版上线",
  },
} as const;

export const successCopy = {
  en: {
    title: "Welcome to Remote Jobs!",
    demoPaid: "Demo payment successful.",
    paidPrefix: "Payment successful —",
    paidBody: "you can now view unlimited job details and post jobs.",
    order: "Order:",
    browseJobs: "Browse remote jobs",
    postJob: "Post a job",
    backHome: "Back to home",
  },
  zh: {
    title: "欢迎加入远程工作板！",
    demoPaid: "演示支付成功。",
    paidPrefix: "支付成功，",
    paidBody: "你已是会员，可无限查看职位详情并发布招聘。",
    order: "订单号：",
    browseJobs: "浏览远程职位",
    postJob: "发布招聘职位",
    backHome: "返回首页",
  },
} as const;

export const stripeProductCopy = {
  en: {
    name: "Remote Jobs · Monthly",
    description: "Unlimited job views + unlimited company posts. 200+ curated remote roles.",
  },
  zh: {
    name: "远程工作板 · 月付",
    description: "无限查看职位 + 企业无限发帖。200+ 精选远程岗位。",
  },
} as const;

export const apiErrors = {
  en: {
    TRIAL_EXHAUSTED: "Free trial used up. Please subscribe.",
    JOB_NOT_FOUND: "Job not found.",
    MISSING_JOB_ID: "Missing job ID.",
    LOAD_FAILED: "Failed to load. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again.",
    FEEDBACK_FAILED: "Failed to submit feedback.",
    FEEDBACK_EMPTY: "Message cannot be empty.",
  },
  zh: {
    TRIAL_EXHAUSTED: "免费体验已用完，请订阅。",
    JOB_NOT_FOUND: "职位不存在。",
    MISSING_JOB_ID: "缺少职位 ID。",
    LOAD_FAILED: "加载失败，请重试。",
    CHECKOUT_FAILED: "结账失败，请重试。",
    FEEDBACK_FAILED: "留言提交失败。",
    FEEDBACK_EMPTY: "留言不能为空。",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrors.en;

export function getJobsCopy(locale: Locale) {
  return jobsCopy[locale];
}

export function getPostCopy(locale: Locale) {
  return postCopy[locale];
}

export function getSuccessCopy(locale: Locale) {
  return successCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  const errors = apiErrors[locale];
  if (code && code in errors) {
    return errors[code as ApiErrorCode];
  }
  return errors.LOAD_FAILED;
}

export function getStripeProductCopy(locale: Locale) {
  return stripeProductCopy[locale];
}
