import Link from "next/link";
import { getLegalCopy, privacyPolicyBody } from "@/lib/legal";
import { getLocale } from "@/lib/locale";
import { siteMeta } from "@/lib/site-meta";

export default async function PrivacyPage() {
  const locale = await getLocale();
  const legal = getLegalCopy(locale);
  const name = siteMeta.name[locale];
  const body = privacyPolicyBody(locale, name);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 prose prose-invert prose-sm sm:prose-base">
      <p className="not-prose text-sm text-muted mb-6">
        <Link href="/" className="text-brand-500 hover:underline">
          ← {name}
        </Link>
      </p>
      <h1 className="text-3xl font-bold text-foreground not-prose">{legal.privacyTitle}</h1>
      <p className="text-muted not-prose mt-2">{legal.privacyMeta}</p>
      <p className="text-sm text-amber-200/90 not-prose mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3">
        {legal.complianceNote}
      </p>
      <div className="mt-8 whitespace-pre-wrap text-foreground/90 leading-relaxed">
        {body.split("\n").map((line, i) => {
          if (line.startsWith("## ")) {
            return (
              <h2 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3 not-prose">
                {line.slice(3)}
              </h2>
            );
          }
          if (line.trim() === "") return <br key={i} />;
          return (
            <p key={i} className="mb-2">
              {line}
            </p>
          );
        })}
      </div>
      <p className="not-prose mt-10 text-sm text-muted">{legal.contactLine}</p>
    </article>
  );
}
