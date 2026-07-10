import Link from "next/link";
import { isMember } from "@/lib/member";
import { getLocale } from "@/lib/locale";
import { getPostCopy } from "@/lib/copy-app";

export default async function PostPage() {
  const locale = await getLocale();
  const c = getPostCopy(locale);
  const member = await isMember();

  if (!member) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-2xl font-bold">{c.lockedTitle}</h1>
        <p className="text-muted mt-3">{c.lockedBody}</p>
        <Link
          href="/join"
          className="inline-block mt-8 bg-brand-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-700"
        >
          {c.lockedCta}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold mb-2">{c.title}</h1>
      <p className="text-muted mb-8">{c.subtitle}</p>

      <form className="space-y-5 rounded-xl border border-border bg-surface p-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{c.jobTitle}</label>
          <input
            type="text"
            placeholder={c.jobTitlePlaceholder}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{c.company}</label>
          <input
            type="text"
            placeholder={c.companyPlaceholder}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{c.salary}</label>
          <input
            type="text"
            placeholder={c.salaryPlaceholder}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{c.description}</label>
          <textarea
            rows={5}
            placeholder={c.descriptionPlaceholder}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{c.applyUrl}</label>
          <input
            type="url"
            placeholder={c.applyUrlPlaceholder}
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <button
          type="button"
          className="w-full rounded-xl bg-brand-600 py-3.5 font-semibold text-white hover:bg-brand-700 transition-colors"
        >
          {c.submit}
        </button>
        <p className="text-xs text-muted text-center">{c.mvpNote}</p>
      </form>
    </div>
  );
}
