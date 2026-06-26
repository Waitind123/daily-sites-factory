"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import { getIdeasCopy, getApiErrorMessage } from "@/lib/copy-app";
import { categories, getPublicIdeas, type StartupIdea } from "@/lib/data";
import { DifficultyBadge } from "@/components/ui";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type IdeaListItem = Omit<StartupIdea, "analysis">;

export function IdeaBrowser({ locale }: { locale: Locale }) {
  const c = getIdeasCopy(locale);
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [filter, setFilter] = useState<string>(c.allCategory);
  const [selected, setSelected] = useState<IdeaListItem | null>(null);
  const [analysis, setAnalysis] = useState<StartupIdea["analysis"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ideas = getPublicIdeas().filter(
    (i) => filter === c.allCategory || i.category === filter
  );

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  async function viewAnalysis(idea: IdeaListItem) {
    setSelected(idea);
    setAnalysis(null);
    setError(null);
    setLoading(true);

    const res = await fetch("/api/ideas/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ideaId: idea.id }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(getApiErrorMessage(data.code, locale) || c.loadFailed);
      setLoading(false);
      await loadTrial();
      return;
    }

    setAnalysis(data.analysis);
    await loadTrial();
    setLoading(false);
  }

  function closeModal() {
    setSelected(null);
    setAnalysis(null);
    setError(null);
  }

  const categoryFilters = [c.allCategory, ...categories.filter((cat) => cat !== "全部")];

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            <strong>{c.trialBanner(trial.remaining, trial.limit)}</strong>
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
        {categoryFilters.map((cat) => (
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
        {ideas.map((idea) => (
          <article
            key={idea.id}
            className="rounded-xl border border-border bg-surface p-5 hover:border-brand-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-xs font-medium text-brand-500 bg-brand-600/10 px-2 py-0.5 rounded">
                {idea.category}
              </span>
              <DifficultyBadge difficulty={idea.difficulty} locale={locale} />
            </div>
            <h3 className="font-bold text-lg text-foreground">{idea.title}</h3>
            <p className="text-sm text-muted mt-1">{idea.tagline}</p>
            <p className="text-sm text-muted mt-3 line-clamp-2">{idea.preview}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
              <div className="text-xs text-muted">
                {c.mrrLabel(idea.mrrPotential, idea.buildTime)}
              </div>
              <button
                type="button"
                onClick={() => viewAnalysis(idea)}
                className="text-sm font-semibold text-brand-500 hover:text-brand-500"
              >
                {c.deepAnalysis}
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
                <h2 className="text-2xl font-bold mt-1">{selected.title}</h2>
                <p className="text-muted mt-1">{selected.tagline}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-muted hover:text-muted text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <p className="text-muted mb-6">{selected.preview}</p>

            {loading && (
              <div className="text-center py-12 text-muted">{c.loading}</div>
            )}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
                {error}
                <Link href="/join" className="block mt-2 font-semibold underline">
                  {c.subscribeNow}
                </Link>
              </div>
            )}

            {analysis && (
              <div className="space-y-6 text-sm">
                <section>
                  <h3 className="font-bold text-base mb-2">{c.sections.problem}</h3>
                  <p className="text-muted">{analysis.problem}</p>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">{c.sections.marketSize}</h3>
                  <p className="text-muted">{analysis.marketSize}</p>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">{c.sections.competitors}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-2 pr-4 font-medium">{c.table.name}</th>
                          <th className="py-2 pr-4 font-medium">{c.table.pricing}</th>
                          <th className="py-2 font-medium">{c.table.gap}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {analysis.competitors.map((comp) => (
                          <tr key={comp.name} className="border-b border-border">
                            <td className="py-2 pr-4">{comp.name}</td>
                            <td className="py-2 pr-4 text-brand-500">{comp.pricing}</td>
                            <td className="py-2 text-muted">{comp.gap}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">{c.sections.monetization}</h3>
                  <p className="text-muted">{analysis.monetization}</p>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">{c.sections.channels}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {analysis.channels.map((ch) => (
                      <li
                        key={ch}
                        className="bg-surface-muted text-foreground px-2 py-1 rounded text-xs"
                      >
                        {ch}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">{c.sections.mvp}</h3>
                  <ol className="list-decimal list-inside space-y-1 text-muted">
                    {analysis.mvp.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">{c.sections.risks}</h3>
                  <ul className="space-y-1 text-muted">
                    {analysis.risks.map((r) => (
                      <li key={r}>· {r}</li>
                    ))}
                  </ul>
                </section>
              </div>
            )}

            {!trial?.isMember && analysis && (
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted mb-3">{c.subscribePrompt(ideas.length)}</p>
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
