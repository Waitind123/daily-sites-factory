import type { Locale } from "@/lib/i18n-shared";
import { getJobsCopy } from "@/lib/copy-app";
import { jobs } from "@/lib/data";

type FeatureItem = {
  readonly icon: string;
  readonly title: string;
  readonly desc: string;
};

export { CheckoutButton } from "./CheckoutButton";

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

export function JobPreviewTable({ locale }: { locale: Locale }) {
  const t = getJobsCopy(locale);
  const preview = jobs.slice(0, 5);

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-background text-left text-muted">
            <th className="px-4 py-3 font-medium">{t.jobTitle}</th>
            <th className="px-4 py-3 font-medium hidden sm:table-cell">{t.location}</th>
            <th className="px-4 py-3 font-medium hidden md:table-cell">{t.type}</th>
            <th className="px-4 py-3 font-medium text-right">{t.salary}</th>
          </tr>
        </thead>
        <tbody>
          {preview.map((job) => (
            <tr key={job.id} className="border-b border-stone-50 hover:bg-background/50">
              <td className="px-4 py-3">
                <span className="mr-2">{job.logo}</span>
                <span className="font-medium">{job.title}</span>
                <span className="block text-muted text-xs mt-0.5">{job.company}</span>
              </td>
              <td className="px-4 py-3 hidden sm:table-cell text-muted">{job.location}</td>
              <td className="px-4 py-3 hidden md:table-cell text-muted">{job.type}</td>
              <td className="px-4 py-3 text-right font-medium text-brand-500">{job.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
