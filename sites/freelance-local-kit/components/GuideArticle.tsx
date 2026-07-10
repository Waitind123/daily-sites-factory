import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import { getGuideCopy } from "@/lib/copy-guide";

export function GuideArticle({ locale }: { locale: Locale }) {
  const g = getGuideCopy(locale);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone prose-invert">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">{g.h1}</h1>
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
          {"tools" in section &&
            section.tools?.map((tool) => (
              <div key={tool.h3}>
                <h3>{tool.h3}</h3>
                <p>{tool.p}</p>
              </div>
            ))}
        </div>
      ))}

      <div className="not-prose mt-12 rounded-xl border border-brand-600/30 bg-brand-600/10 p-6 text-center">
        <p className="font-semibold text-foreground">{g.cta.title}</p>
        <p className="mt-2 text-sm text-muted">{g.cta.subtitle}</p>
        <Link
          href="/workspace"
          className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          {g.cta.button}
        </Link>
      </div>
    </article>
  );
}
