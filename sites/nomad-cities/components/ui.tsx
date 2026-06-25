import Link from "next/link";
import { cities, localizeCity } from "@/lib/data";
import type { Locale } from "@/lib/i18n-shared";
import { getDashboardCopy } from "@/lib/copy-app";

type FeatureItem = {
  readonly icon: string;
  readonly title: string;
  readonly desc: string;
};

export function CheckoutButton({
  className = "",
  label = "Subscribe · $9.9/mo",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <form action="/api/checkout" method="POST">
      <button
        type="submit"
        className={`w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors active:scale-[0.98] ${className}`}
      >
        {label}
      </button>
    </form>
  );
}

export function FeatureGrid({ features }: { features: readonly FeatureItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {features.map((f) => (
        <div key={f.title} className="rounded-xl border border-border bg-surface p-5">
          <div className="text-2xl mb-2">{f.icon}</div>
          <h3 className="font-semibold text-foreground">{f.title}</h3>
          <p className="mt-1 text-sm text-muted">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function CityTablePreview({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const preview = cities.slice(0, 10).map((c) => localizeCity(c, locale));

  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-background text-left text-muted">
              <th className="px-4 py-3 font-medium">{t.tableRank}</th>
              <th className="px-4 py-3 font-medium">{t.tableCity}</th>
              <th className="px-4 py-3 font-medium hidden sm:table-cell">{t.tableCost}</th>
              <th className="px-4 py-3 font-medium hidden md:table-cell">{t.tableSpeed}</th>
              <th className="px-4 py-3 font-medium hidden md:table-cell">{t.tableSafety}</th>
              <th className="px-4 py-3 font-medium hidden lg:table-cell">{t.tableVisa}</th>
              <th className="px-4 py-3 font-medium text-right">{t.tableScore}</th>
            </tr>
          </thead>
          <tbody>
            {preview.map((city) => (
              <tr key={city.rank} className="border-b border-border hover:bg-background/50">
                <td className="px-4 py-3 text-muted">{city.rank}</td>
                <td className="px-4 py-3">
                  <span className="mr-1.5">{city.flag}</span>
                  <span className="font-medium">{city.name}</span>
                  <span className="ml-1 text-muted">{city.country}</span>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell text-muted">{city.costLabel}</td>
                <td className="px-4 py-3 hidden md:table-cell text-muted">{city.internet} Mbps</td>
                <td className="px-4 py-3 hidden md:table-cell text-muted">{city.safety}</td>
                <td className="px-4 py-3 hidden lg:table-cell text-muted">{city.visa}</td>
                <td className="px-4 py-3 text-right">
                  <span className="inline-flex items-center rounded-full bg-brand-600/10 px-2.5 py-0.5 font-semibold text-brand-500">
                    {city.score}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/rankings"
          className="inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
        >
          {locale === "zh" ? "查看完整排名并解锁" : "View full rankings & unlock"}
        </Link>
      </div>
    </div>
  );
}
