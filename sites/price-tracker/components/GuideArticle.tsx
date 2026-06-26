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
          {"after" in section &&
            section.after?.map((p) => (
              <p key={p.slice(0, 48)}>
                {p}
                {"link" in section && section.link && (
                  <>
                    {" "}
                    <Link href={section.link.href} className="text-brand-500 hover:underline">
                      {section.link.text}
                    </Link>
                    {section.link.suffix}
                  </>
                )}
              </p>
            ))}
        </div>
      ))}

      <div className="not-prose mt-12 rounded-xl border border-brand-600/30 bg-brand-600/10 p-6 text-center">
        <p className="font-semibold text-foreground">{g.cta.title}</p>
        <p className="mt-2 text-sm text-muted">{g.cta.body}</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/join"
            className="inline-block rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {g.cta.primary}
          </Link>
          <Link
            href="/track"
            className="inline-block rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-surface"
          >
            {g.cta.secondary}
          </Link>
        </div>
      </div>
    </article>
  );
}
