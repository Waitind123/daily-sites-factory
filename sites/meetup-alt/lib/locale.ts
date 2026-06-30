import { cookies } from "next/headers";
import type { Locale } from "./i18n-shared";
import { LOCALE_COOKIE } from "./i18n-shared";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  const value = jar.get(LOCALE_COOKIE)?.value;
  return value === "zh" ? "zh" : "en";
}
