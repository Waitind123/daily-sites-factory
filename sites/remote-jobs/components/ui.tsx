import { features, jobs } from "@/lib/data";

export function CheckoutButton({ className = "" }: { className?: string }) {
  return (
    <form action="/api/checkout" method="POST">
      <button
        type="submit"
        className={`w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors active:scale-[0.98] ${className}`}
      >
        立即加入 · ¥699/年
      </button>
    </form>
  );
}

export function FeatureGrid() {
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

export function JobPreviewTable() {
  const preview = jobs.slice(0, 5);

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-background text-left text-muted">
            <th className="px-4 py-3 font-medium">职位</th>
            <th className="px-4 py-3 font-medium hidden sm:table-cell">地点</th>
            <th className="px-4 py-3 font-medium hidden md:table-cell">类型</th>
            <th className="px-4 py-3 font-medium text-right">薪资</th>
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
