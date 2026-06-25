import Link from "next/link";
import { RotatingText } from "./RotatingText";
import { cn } from "@/lib/cn";

export function Hero({
  badge,
  title,
  titleAccent,
  rotatingItems,
  description,
  primaryCta,
  secondaryCta,
  footnote,
  children,
  className,
}: {
  badge?: string;
  title: string;
  titleAccent?: string;
  rotatingItems?: string[];
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  footnote?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-nuwa-gradient", className)}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {badge && (
              <p className="nuwa-label mb-4 text-indigo-400">{badge}</p>
            )}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className="text-gradient">{titleAccent}</span>
                </>
              )}
              {rotatingItems && rotatingItems.length > 0 && (
                <>
                  <br />
                  <RotatingText items={rotatingItems} />
                </>
              )}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-400 text-balance">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="rounded-xl bg-indigo-600 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                {primaryCta.label}
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="rounded-xl border border-white/15 px-8 py-3.5 text-center text-base font-semibold text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
            {footnote && (
              <p className="mt-4 text-sm text-zinc-600">{footnote}</p>
            )}
          </div>
          {children && <div>{children}</div>}
        </div>
      </div>
    </section>
  );
}
