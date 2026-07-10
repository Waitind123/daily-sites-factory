import type { Locale } from "./i18n-shared";

/** 除 homeCopy 外，所有页面/表单/错误文案放这里 */
export const joinCopy = {
  en: {
    title: "Subscribe",
    subtitle: "One price, all features.",
    subscribe: "Subscribe · $29/mo",
  },
  zh: {
    title: "订阅",
    subtitle: "一口价，全功能。",
    subscribe: "订阅 · $29/月",
  },
} as const;

export const apiErrorCopy = {
  en: {
    GENERIC: "Something went wrong. Please try again.",
    CHECKOUT_FAILED: "Checkout failed. Please try again later.",
  },
  zh: {
    GENERIC: "出错了，请稍后再试",
    CHECKOUT_FAILED: "支付创建失败，请稍后重试",
  },
} as const;

export type ApiErrorCode = keyof typeof apiErrorCopy.en;

export function getJoinCopy(locale: Locale) {
  return joinCopy[locale];
}

export function getApiErrorMessage(code: string | undefined, locale: Locale): string {
  if (code && code in apiErrorCopy[locale]) {
    return apiErrorCopy[locale][code as ApiErrorCode];
  }
  return apiErrorCopy[locale].GENERIC;
}
