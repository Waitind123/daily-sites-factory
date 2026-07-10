import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import { getGuideCopy } from "@/lib/copy-guide";

export function GuideArticle({ locale }: { locale: Locale }) {
  const g = getGuideCopy(locale);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone prose-invert">
      <Link href="/" className="text-sm text-brand-500 no-underline not-prose">
        {g.backHome}
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4 mt-4">{g.h1}</h1>
      <p className="text-muted not-prose mb-8">{g.updated}</p>

      {g.intro.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}

      {g.sections.map((section) => (
        <div key={section.h2}>
          <h2>{section.h2}</h2>
          {"paragraphs" in section &&
            section.paragraphs?.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
          {"list" in section && section.list && (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {"ordered" in section && section.ordered && (
            <ol>
              {section.ordered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          )}
          {"tools" in section &&
            section.tools?.map((tool) => (
              <div key={tool.h3}>
                <h3>{tool.h3}</h3>
                <p>
                  {tool.p}
                  {"link" in tool && tool.link && (
                    <>
                      {" "}
                      <Link href={tool.link.href} className="text-brand-500 no-underline">
                        {tool.link.text}
                      </Link>
                      {tool.link.suffix}
                    </>
                  )}
                </p>
              </div>
            ))}
          {"after" in section &&
            section.after?.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
        </div>
      ))}

      <div className="not-prose mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href={g.ctaPrimaryHref}
          className="rounded-xl bg-brand-600 px-6 py-3 text-white font-semibold text-center hover:bg-brand-700"
        >
          {g.ctaPrimary}
        </Link>
        <Link
          href={g.ctaSecondaryHref}
          className="rounded-xl border border-border px-6 py-3 font-semibold text-center hover:bg-background"
        >
          {g.ctaSecondary}
        </Link>
      </div>
    </article>
  );
}
