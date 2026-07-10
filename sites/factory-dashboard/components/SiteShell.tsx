import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getUiCopy, type Locale } from "@/lib/i18n-shared";
import { OWNER_CONTACT_EMAIL } from "@/lib/site-owner";
import { siteMeta } from "@/lib/site-meta";

type SiteMeta = typeof siteMeta;

export function SiteHeader({ meta, locale }: { meta: SiteMeta; locale: Locale }) {
  const t = getUiCopy(locale);
  const name = meta.name[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-semibold text-foreground">
          <span className="text-xl">{meta.emoji}</span>
          <span className="truncate">{name}</span>
        </Link>
        <nav className="flex shrink-0 items-center gap-2 sm:gap-4 text-sm">
          {meta.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden text-muted hover:text-foreground sm:inline"
            >
              {item.label[locale]}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} labels={{ en: t.langEn, zh: t.langZh }} />
          <Link
            href="/join"
            className="rounded-full bg-brand-600 px-3 py-1.5 font-medium text-white hover:bg-brand-700 transition-colors sm:px-4"
          >
            {(meta as { joinLabel?: { en: string; zh: string } }).joinLabel?.[locale] ??
              t.joinCta}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({
  meta,
  locale,
  guideHref,
}: {
  meta: SiteMeta;
  locale: Locale;
  guideHref?: string;
}) {
  const t = getUiCopy(locale);
  const name = meta.name[locale];

  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      <p>
        {name} · {t.footerBuilt}
      </p>
      <p className="mt-2">
        {guideHref && (
          <>
            <Link href={guideHref} className="text-brand-500 hover:underline">
              {t.guide}
            </Link>
            {" · "}
          </>
        )}
        <Link href="/sitemap.xml" className="hover:underline">
          {t.sitemap}
        </Link>
      </p>
      <p className="mt-2">
        <a href={`mailto:${OWNER_CONTACT_EMAIL}`} className="hover:underline">
          {OWNER_CONTACT_EMAIL}
        </a>
      </p>
    </footer>
  );
}
