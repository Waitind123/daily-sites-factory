import { getLocale } from "@/lib/locale";
import { getHomeCopy } from "@/lib/copy";
import Link from "next/link";

export async function HomeHero() {
  const locale = await getLocale();
  const c = getHomeCopy(locale);

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        {c.badge && (
          <p className="mb-4 text-sm font-medium text-brand-500">{c.badge}</p>
        )}
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {c.title}
        </h1>
        <p className="mt-6 text-balance text-lg text-muted">{c.subtitle}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          {c.ctaPrimaryHref && (
            <Link
              href={c.ctaPrimaryHref}
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              {c.ctaPrimary}
            </Link>
          )}
          <Link
            href={c.ctaSecondaryHref || "/join"}
            className="rounded-xl border border-border px-8 py-3.5 text-base font-semibold text-foreground hover:bg-surface-muted transition-colors"
          >
            {c.ctaSecondary}
          </Link>
        </div>
        {c.note && <p className="mt-4 text-sm text-muted">{c.note}</p>}
      </div>
    </section>
  );
}
