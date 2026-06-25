import Link from "next/link";

export function CtaSection({
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  description?: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-zinc-400">{description}</p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryCta.href}
            className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#0A0A0F] transition-colors hover:bg-zinc-100"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
