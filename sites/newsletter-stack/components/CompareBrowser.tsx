"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { getPublicTools, type NewsletterTool } from "@/lib/data";
import { MigrationBadge } from "@/components/ui";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getCategories, getCompareCopy } from "@/lib/copy-app";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type ToolListItem = Omit<NewsletterTool, "comparison">;

export function CompareBrowser({ locale }: { locale: Locale }) {
  const c = getCompareCopy(locale);
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [filter, setFilter] = useState<string>(c.allCategories);
  const [selected, setSelected] = useState<ToolListItem | null>(null);
  const [comparison, setComparison] = useState<NewsletterTool["comparison"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categories = getCategories(locale);
  const tools = getPublicTools(locale).filter(
    (t) => filter === c.allCategories || t.category === filter
  );

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  useEffect(() => {
    setFilter(c.allCategories);
  }, [c.allCategories]);

  async function viewComparison(tool: ToolListItem) {
    setSelected(tool);
    setComparison(null);
    setError(null);
    setLoading(true);

    const res = await fetch("/api/tools/compare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ toolId: tool.id, locale }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(getApiErrorMessage(data.code ?? data.error, locale));
      setLoading(false);
      await loadTrial();
      return;
    }

    setComparison(data.comparison);
    await loadTrial();
    setLoading(false);
  }

  function closeModal() {
    setSelected(null);
    setComparison(null);
    setError(null);
  }

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            {locale === "zh" ? (
              <>
                剩余 <strong>{trial.remaining}/{trial.limit}</strong> {c.trialRemaining}
              </>
            ) : (
              <>
                <strong>{trial.remaining}/{trial.limit}</strong> {c.trialRemaining}
              </>
            )}
          </span>
          <Link href="/join" className="font-semibold text-brand-500 hover:underline">
            {c.subscribeCta}
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800">
          {c.memberBadge}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-brand-600 text-white"
                : "bg-surface border border-border text-muted hover:bg-background"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <article
            key={tool.id}
            className="rounded-xl border border-border bg-surface p-5 hover:border-brand-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-xs font-medium text-brand-500 bg-brand-600/10 px-2 py-0.5 rounded">
                {tool.category}
              </span>
              <span className="text-xs text-muted">{tool.freeTier}</span>
            </div>
            <h3 className="font-bold text-lg text-foreground">{tool.name}</h3>
            <p className="text-sm text-muted mt-1">{tool.website}</p>
            <p className="text-sm text-muted mt-3 line-clamp-2">{tool.preview}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs bg-surface-muted text-muted px-2 py-0.5 rounded">
                {tool.startingPrice}
              </span>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
              <span className="text-xs text-muted">{tool.affiliateUrl.replace("https://", "")}</span>
              <button
                type="button"
                onClick={() => viewComparison(tool)}
                className="text-sm font-semibold text-brand-500 hover:text-brand-500"
              >
                {c.deepCompare}
              </button>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-surface rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-medium text-brand-500">{selected.category}</span>
                <h2 className="text-2xl font-bold mt-1">{selected.name}</h2>
                <p className="text-muted mt-1">
                  {selected.website} · {selected.startingPrice}
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-muted hover:text-muted text-2xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <p className="text-muted mb-6">{selected.preview}</p>

            {loading && <div className="text-center py-12 text-muted">{c.loading}</div>}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
                {error}
                {(error.includes("订阅") || error.toLowerCase().includes("subscribe")) && (
                  <Link href="/join" className="block mt-2 font-semibold underline">
                    {c.subscribeNow}
                  </Link>
                )}
              </div>
            )}

            {comparison && (
              <div className="space-y-6 text-sm">
                <section className="rounded-xl bg-brand-600/10 border border-brand-200 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base">{c.summaryTitle}</h3>
                    <MigrationBadge difficulty={comparison.migrationDifficulty} locale={locale} />
                  </div>
                  <p className="text-foreground">{comparison.summary}</p>
                  <p className="text-xs text-muted mt-2">
                    {c.updated}: {comparison.lastUpdated} · {c.model}: {comparison.pricingModel} ·{" "}
                    {c.fees}: {comparison.transactionFee}
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">{c.prosTitle}</h3>
                  <ul className="space-y-1 text-muted">
                    {comparison.pros.map((pro) => (
                      <li key={pro}>· {pro}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">{c.consTitle}</h3>
                  <ul className="space-y-1 text-muted">
                    {comparison.cons.map((con) => (
                      <li key={con}>· {con}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">{c.bestForTitle}</h3>
                  <div className="flex flex-wrap gap-2">
                    {comparison.bestFor.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-brand-600/10 text-brand-500 px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-3">{c.pricingHistoryTitle}</h3>
                  <div className="space-y-2">
                    {comparison.pricingHistory.map((item) => (
                      <div key={item.date + item.change} className="rounded-lg border border-border p-3">
                        <span className="text-xs text-muted">{item.date}</span>
                        <p className="font-medium text-foreground mt-0.5">{item.change}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">{c.featureMatrixTitle}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-2 pr-4 font-medium">{c.featureCol}</th>
                          <th className="py-2 pr-4 font-medium">{c.supportCol}</th>
                          <th className="py-2 font-medium">{c.noteCol}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparison.featureMatrix.map((row) => (
                          <tr key={row.feature} className="border-b border-border">
                            <td className="py-2 pr-4 font-medium">{row.feature}</td>
                            <td className="py-2 pr-4 text-brand-500">{row.value}</td>
                            <td className="py-2 text-muted">{row.note || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">{c.migrationTitle}</h3>
                  <ul className="space-y-1 text-muted">
                    {comparison.migrationTips.map((tip) => (
                      <li key={tip}>· {tip}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">{c.competitorsTitle}</h3>
                  <ul className="space-y-1 text-muted">
                    {comparison.competitorNotes.map((note) => (
                      <li key={note}>· {note}</li>
                    ))}
                  </ul>
                </section>

                {comparison.affiliateOffer && (
                  <section className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                    <h3 className="font-bold text-base mb-2">{c.affiliateTitle}</h3>
                    <p className="text-foreground">{comparison.affiliateOffer}</p>
                  </section>
                )}
              </div>
            )}

            {!trial?.isMember && comparison && (
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted mb-3">{c.subscribeUnlock}</p>
                <Link
                  href="/join"
                  className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
                >
                  {c.subscribeNow}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
