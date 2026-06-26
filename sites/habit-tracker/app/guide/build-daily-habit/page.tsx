import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata } from "@/lib/site-seo";
import { getSiteConfig } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getGuideCopy } from "@/lib/copy-guide";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const g = getGuideCopy(locale);
  const cfg = getSiteConfig(locale);
  return buildSiteMetadata({ ...cfg, keywords: [...cfg.keywords] }, {
    title: g.metaTitle,
    description: g.metaDescription,
  });
}

function ParagraphWithLinks({
  text,
  links,
}: {
  text: string;
  links?: readonly { href: string; label: string }[];
}) {
  if (!links?.length) return <p>{text}</p>;

  const parts = text.split(/(\{link\d+\})/);
  return (
    <p>
      {parts.map((part, i) => {
        const match = part.match(/\{link(\d+)\}/);
        if (match) {
          const link = links[Number(match[1])];
          if (!link) return null;
          return (
            <Link key={i} href={link.href} className="text-brand-500 hover:underline">
              {link.label}
            </Link>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

export default async function GuidePage() {
  const locale = await getLocale();
  const g = getGuideCopy(locale);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 prose prose-stone">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground not-prose mb-4">{g.title}</h1>
      <p className="text-muted not-prose mb-8">{g.updated}</p>

      {g.sections.map((section, i) => {
        if (section.type === "h2") {
          return <h2 key={i}>{section.text}</h2>;
        }
        if (section.type === "p") {
          return (
            <ParagraphWithLinks
              key={i}
              text={section.text}
              links={"links" in section ? section.links : undefined}
            />
          );
        }
        if (section.type === "ul" && "items" in section) {
          return (
            <ul key={i}>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (section.type === "ol" && "items" in section) {
          return (
            <ol key={i}>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }
        if (section.type === "table" && "rows" in section) {
          return (
            <table key={i} className="w-full text-sm border-collapse not-prose my-6">
              <thead>
                <tr className="bg-surface-muted">
                  {("headers" in section ? section.headers : ["Mistake", "Better approach"]).map(
                    (h) => (
                      <th key={h} className="border border-border px-3 py-2 text-left">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr key={row[0]}>
                    <td className="border border-border px-3 py-2">{row[0]}</td>
                    <td className="border border-border px-3 py-2">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }
        return null;
      })}

      <div className="not-prose mt-10 rounded-xl bg-brand-600/10 border border-brand-200 p-6 text-center">
        <p className="font-semibold text-brand-800 mb-4">{g.ctaTitle}</p>
        <Link
          href="/track"
          className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
        >
          {g.ctaButton}
        </Link>
      </div>
    </article>
  );
}
