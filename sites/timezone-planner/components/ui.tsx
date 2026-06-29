import type { Locale } from "@/lib/i18n-shared";

type Feature = {
  icon: string;
  title: string;
  desc: string;
};

export { CheckoutButton } from "./CheckoutButton";

export function FeatureGrid({ features }: { features: readonly Feature[] }) {
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

import { sampleTeam } from "@/lib/data";
import { getUtcOffset } from "@/lib/timezone";
import { getOverlapPreviewCopy } from "@/lib/copy-app";

export function OverlapPreview({
  locale,
  overlapSlot,
  note,
}: {
  locale: Locale;
  overlapSlot: string;
  note: string;
}) {
  const preview = getOverlapPreviewCopy(locale);

  return (
    <div className="space-y-3">
      {sampleTeam.map((city) => (
        <div key={city.name} className="flex items-center gap-3">
          <span className="w-16 text-sm font-medium text-foreground">{city.name}</span>
          <div className="flex-1 h-8 bg-surface-muted rounded-lg relative overflow-hidden">
            <div
              className="absolute top-0 bottom-0 bg-brand-600/100/80 rounded"
              style={{ left: "37.5%", width: "37.5%" }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-xs text-muted">
              {city.workHours} · {getUtcOffset(city.timezone)}
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-3">
        <span className="w-16 text-sm font-medium text-brand-500">{preview.overlapLabel}</span>
        <div className="flex-1 h-8 bg-brand-100 border-2 border-brand-500 border-dashed rounded-lg flex items-center justify-center text-xs font-medium text-brand-500">
          {overlapSlot}
        </div>
      </div>
      <p className="text-xs text-muted">{note}</p>
    </div>
  );
}
