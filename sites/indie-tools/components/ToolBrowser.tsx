"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  categoryKeys,
  getPublicTools,
  type IndieTool,
  type ToolCategory,
} from "@/lib/data";
import type { Locale } from "@/lib/i18n-shared";
import {
  getApiErrorMessage,
  getCategoryLabel,
  getToolsCopy,
} from "@/lib/copy-app";
import { IndieScoreBadge } from "@/components/ui";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type ToolListItem = Omit<IndieTool, "review">;

export function ToolBrowser({ locale }: { locale: Locale }) {
  const c = getToolsCopy(locale);
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [filter, setFilter] = useState<ToolCategory | "all">("all");
  const [selected, setSelected] = useState<ToolListItem | null>(null);
  const [review, setReview] = useState<IndieTool["review"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorCode, setErrorCode] = useState<string | null>(null);

  const tools = getPublicTools(locale).filter(
    (t) => filter === "all" || t.category === filter
  );

  const filterOptions: (ToolCategory | "all")[] = ["all", ...categoryKeys];

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  async function viewReview(tool: ToolListItem) {
    setSelected(tool);
    setReview(null);
    setErrorCode(null);
    setLoading(true);

    const res = await fetch("/api/tools/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ toolId: tool.id }),
    });

    const data = await res.json();

    if (!res.ok) {
      setErrorCode(data.code || c.loadFailed);
      setLoading(false);
      await loadTrial();
      return;
    }

    setReview(data.review);
    await loadTrial();
    setLoading(false);
  }

  function closeModal() {
    setSelected(null);
    setReview(null);
    setErrorCode(null);
  }

  const errorMessage = errorCode ? getApiErrorMessage(errorCode, locale) : null;

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            <strong>
              {trial.remaining}/{trial.limit}
            </strong>{" "}
            {c.trialRemaining}
          </span>
          <Link href="/join" className="font-semibold text-brand-500 hover:underline">
            {c.subscribeUnlock}
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800">
          {c.memberActive}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {filterOptions.map((cat) => (
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
            {getCategoryLabel(locale, cat)}
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
                {getCategoryLabel(locale, tool.category)}
              </span>
              <IndieScoreBadge score={tool.indieScore} label={c.indieScore} />
            </div>
            <h3 className="font-bold text-lg text-foreground">{tool.name}</h3>
            <p className="text-sm text-muted mt-1">{tool.tagline}</p>
            <p className="text-sm text-muted mt-3 line-clamp-2">{tool.preview}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
              <div className="text-xs text-muted">
                {tool.pricing} · {tool.website}
              </div>
              <button
                type="button"
                onClick={() => viewReview(tool)}
                className="text-sm font-semibold text-brand-500 hover:text-brand-500"
              >
                {c.deepReview}
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
                <span className="text-xs font-medium text-brand-500">
                  {getCategoryLabel(locale, selected.category)}
                </span>
                <h2 className="text-2xl font-bold mt-1">{selected.name}</h2>
                <p className="text-muted mt-1">{selected.tagline}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-muted hover:text-muted text-2xl leading-none"
                aria-label={c.close}
              >
                {c.close}
              </button>
            </div>

            <p className="text-muted mb-6">{selected.preview}</p>

            {loading && (
              <div className="text-center py-12 text-muted">{c.loading}</div>
            )}

            {errorMessage && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
                {errorMessage}
                {errorCode === "TRIAL_EXHAUSTED" && (
                  <Link href="/join" className="block mt-2 font-semibold underline">
                    {c.subscribeCta}
                  </Link>
                )}
              </div>
            )}

            {review && (
              <div className="space-y-6 text-sm">
                <section>
                  <h3 className="font-bold text-base mb-2">📝 {c.reviewSummary}</h3>
                  <p className="text-muted">{review.summary}</p>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">🎯 {c.reviewBestFor}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {review.bestFor.map((item) => (
                      <li
                        key={item}
                        className="bg-brand-600/10 text-brand-500 px-2 py-1 rounded text-xs"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">💰 {c.reviewPricing}</h3>
                  <p className="text-muted">{review.pricingDetail}</p>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">🔄 {c.reviewAlternatives}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-2 pr-4 font-medium">{c.altTool}</th>
                          <th className="py-2 pr-4 font-medium">{c.altPricing}</th>
                          <th className="py-2 font-medium">{c.altWhen}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {review.alternatives.map((alt) => (
                          <tr key={alt.name} className="border-b border-border">
                            <td className="py-2 pr-4">{alt.name}</td>
                            <td className="py-2 pr-4 text-brand-500">{alt.pricing}</td>
                            <td className="py-2 text-muted">{alt.when}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
                <section className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold text-base mb-2">✅ {c.reviewPros}</h3>
                    <ul className="space-y-1 text-muted">
                      {review.pros.map((p) => (
                        <li key={p}>· {p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2">⚠️ {c.reviewCons}</h3>
                    <ul className="space-y-1 text-muted">
                      {review.cons.map((item) => (
                        <li key={item}>· {item}</li>
                      ))}
                    </ul>
                  </div>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">⚡ {c.reviewSetup}</h3>
                  <ol className="list-decimal list-inside space-y-1 text-muted">
                    {review.setupTips.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </section>
                <section className="rounded-xl bg-brand-600/10 border border-brand-200 p-4">
                  <h3 className="font-bold text-base mb-2">🏆 {c.reviewVerdict}</h3>
                  <p className="text-foreground">{review.verdict}</p>
                </section>
              </div>
            )}

            {!trial?.isMember && review && (
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted mb-3">
                  {c.subscribeUpsell} {tools.length}+
                </p>
                <Link
                  href="/join"
                  className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
                >
                  {c.subscribeButton}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
