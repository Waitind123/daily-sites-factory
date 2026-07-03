import { venues } from "@/lib/data";

export { CheckoutButton } from "./CheckoutButton";

type Feature = {
  icon: string;
  title: string;
  desc: string;
};

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

type PreviewLabels = {
  venue: string;
  city: string;
  spots: string;
  price: string;
};

export function PassPreviewTable({ labels }: { labels: PreviewLabels }) {
  const preview = venues.filter((v) => v.featured).slice(0, 5);

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-background text-left text-muted">
            <th className="px-4 py-3 font-medium">{labels.venue}</th>
            <th className="px-4 py-3 font-medium hidden sm:table-cell">{labels.city}</th>
            <th className="px-4 py-3 font-medium hidden md:table-cell">{labels.spots}</th>
            <th className="px-4 py-3 font-medium text-right">{labels.price}</th>
          </tr>
        </thead>
        <tbody>
          {preview.map((venue) => (
            <tr key={venue.id} className="border-b border-stone-50 hover:bg-background/50">
              <td className="px-4 py-3">
                <span className="mr-2">{venue.logo}</span>
                <span className="font-medium">{venue.name}</span>
                <span className="block text-muted text-xs mt-0.5">{venue.neighborhood}</span>
              </td>
              <td className="px-4 py-3 hidden sm:table-cell text-muted">
                {venue.city}, {venue.country}
              </td>
              <td className="px-4 py-3 hidden md:table-cell text-muted">
                {venue.spotsLeftToday}/{venue.totalSpots}
              </td>
              <td className="px-4 py-3 text-right font-medium text-brand-500">{venue.dayPassPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
