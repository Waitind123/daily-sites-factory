import Link from "next/link";

type FooterLink = { href: string; label: string };

export function SiteFooter({
  siteName,
  tagline,
  links = [],
}: {
  siteName: string;
  tagline?: string;
  links?: FooterLink[];
}) {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} {siteName}
            {tagline ? ` · ${tagline}` : ""}
          </p>
          {links.length > 0 && (
            <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              {links.map((link, i) => (
                <span key={link.href} className="inline-flex items-center gap-3">
                  {i > 0 && <span className="text-zinc-700">·</span>}
                  <Link href={link.href} className="text-indigo-400 hover:text-indigo-300">
                    {link.label}
                  </Link>
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
