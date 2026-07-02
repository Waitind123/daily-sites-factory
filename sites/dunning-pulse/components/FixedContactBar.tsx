import { OWNER_CONTACT_EMAIL } from "@/lib/site-owner";
import type { Locale } from "@/lib/i18n-shared";

/** Always-visible contact strip fixed to the viewport bottom. */
export function FixedContactBar({ locale }: { locale: Locale }) {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[70] border-t border-border/80 bg-zinc-950 px-3 py-2.5 text-center text-xs sm:text-sm text-zinc-200 shadow-[0_-4px_20px_rgba(0,0,0,0.35)]"
      role="contentinfo"
      aria-label={locale === "zh" ? "联系方式" : "Contact"}
    >
      <span className="text-zinc-300">
        {locale === "zh" ? "有任何问题请联系：" : "Questions? Contact us at "}
      </span>{" "}
      <a
        href={`mailto:${OWNER_CONTACT_EMAIL}`}
        className="font-semibold text-brand-400 hover:text-brand-300 hover:underline"
      >
        {OWNER_CONTACT_EMAIL}
      </a>
    </div>
  );
}
