"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
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

export function IdeaBrowser() {
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [filter, setFilter] = useState("全部");
  const [selected, setSelected] = useState<IdeaListItem | null>(null);
  const [analysis, setAnalysis] = useState<StartupIdea["analysis"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ideas = getPublicIdeas().filter(
    (i) => filter === "全部" || i.category === filter
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
      setError(data.error || "加载失败");
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

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次免费深度分析
          </span>
          <Link href="/join" className="font-semibold text-brand-500 hover:underline">
            订阅 $9.9/月 →
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800">
          ✓ 会员已激活 · 无限阅读深度分析
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
        {ideas.map((idea) => (
          <article
            key={idea.id}
            className="rounded-xl border border-border bg-surface p-5 hover:border-brand-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-xs font-medium text-brand-500 bg-brand-600/10 px-2 py-0.5 rounded">
                {idea.category}
              </span>
              <DifficultyBadge difficulty={idea.difficulty} />
            </div>
            <h3 className="font-bold text-lg text-foreground">{idea.title}</h3>
            <p className="text-sm text-muted mt-1">{idea.tagline}</p>
            <p className="text-sm text-muted mt-3 line-clamp-2">{idea.preview}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
              <div className="text-xs text-muted">
                MRR {idea.mrrPotential} · {idea.buildTime}
              </div>
              <button
                type="button"
                onClick={() => viewAnalysis(idea)}
                className="text-sm font-semibold text-brand-500 hover:text-brand-500"
              >
                深度分析 →
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
              <div className="text-center py-12 text-muted">加载深度分析中...</div>
            )}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
                {error}
                {error.includes("订阅") && (
                  <Link href="/join" className="block mt-2 font-semibold underline">
                    立即订阅 $9.9/月
                  </Link>
                )}
              </div>
            )}

            {analysis && (
              <div className="space-y-6 text-sm">
                <section>
                  <h3 className="font-bold text-base mb-2">🎯 痛点验证</h3>
                  <p className="text-muted">{analysis.problem}</p>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">📈 市场规模</h3>
                  <p className="text-muted">{analysis.marketSize}</p>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">🏁 竞品分析</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-2 pr-4 font-medium">竞品</th>
                          <th className="py-2 pr-4 font-medium">定价</th>
                          <th className="py-2 font-medium">缺口</th>
                        </tr>
                      </thead>
                      <tbody>
                        {analysis.competitors.map((c) => (
                          <tr key={c.name} className="border-b border-border">
                            <td className="py-2 pr-4">{c.name}</td>
                            <td className="py-2 pr-4 text-brand-500">{c.pricing}</td>
                            <td className="py-2 text-muted">{c.gap}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">💰 变现模型</h3>
                  <p className="text-muted">{analysis.monetization}</p>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">📣 获客渠道</h3>
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
                  <h3 className="font-bold text-base mb-2">🛠️ MVP 路线图</h3>
                  <ol className="list-decimal list-inside space-y-1 text-muted">
                    {analysis.mvp.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">⚠️ 风险</h3>
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
                <p className="text-sm text-muted mb-3">
                  喜欢这种分析？订阅解锁全部 {ideas.length}+ 个点子
                </p>
                <Link
                  href="/join"
                  className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
                >
                  订阅 $9.9/月
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
