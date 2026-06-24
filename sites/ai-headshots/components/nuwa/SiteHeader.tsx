import Link from "next/link";
import { cn } from "@/lib/cn";

type NavItem = { href: string; label: string; hidden?: boolean };

export function SiteHeader({
  logo,
  siteName,
  navItems = [],
  ctaHref,
  ctaLabel,
}: {
  logo?: React.ReactNode;
  siteName: string;
  navItems?: NavItem[];
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0F]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-white">
          {logo ?? <span className="text-xl">◆</span>}
          <span>{siteName}</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-zinc-400 transition-colors hover:text-white",
                item.hidden && "hidden sm:inline"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-500"
          >
            {ctaLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
