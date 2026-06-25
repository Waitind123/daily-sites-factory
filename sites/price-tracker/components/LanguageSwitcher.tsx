"use client";

import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n-shared";

export function LanguageSwitcher({
  locale,
  labels,
}: {
  locale: Locale;
  labels: { en: string; zh: string };
}) {
  const router = useRouter();

  function setLocale(next: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;SameSite=Lax`;
    router.refresh();
  }

  return (
    <div className="flex items-center rounded-lg border border-border bg-surface p-0.5 text-xs font-medium">
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          locale === "en" ? "bg-brand-600 text-white" : "text-muted hover:text-foreground"
        }`}
        aria-pressed={locale === "en"}
      >
        {labels.en}
      </button>
      <button
        type="button"
        onClick={() => setLocale("zh")}
        className={`rounded-md px-2.5 py-1 transition-colors ${
          locale === "zh" ? "bg-brand-600 text-white" : "text-muted hover:text-foreground"
        }`}
        aria-pressed={locale === "zh"}
      >
        {labels.zh}
      </button>
    </div>
  );
}
