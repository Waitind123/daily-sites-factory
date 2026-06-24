"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { categories, getPublicTools, type IndieTool } from "@/lib/data";
import { IndieScoreBadge } from "@/components/ui";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type ToolListItem = Omit<IndieTool, "review">;

export function ToolBrowser() {
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [filter, setFilter] = useState("全部");
  const [selected, setSelected] = useState<ToolListItem | null>(null);
  const [review, setReview] = useState<IndieTool["review"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tools = getPublicTools().filter(
    (t) => filter === "全部" || t.category === filter
  );

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
    setError(null);
    setLoading(true);

    const res = await fetch("/api/tools/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ toolId: tool.id }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "加载失败");
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
    setError(null);
  }

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次免费深度评测
          </span>
          <Link href="/join" className="font-semibold text-brand-700 hover:underline">
            订阅 $9.9/月 →
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          ✓ 会员已激活 · 无限查阅深度评测
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
                : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
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
            className="rounded-xl border border-stone-200 bg-white p-5 hover:border-brand-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                {tool.category}
              </span>
              <IndieScoreBadge score={tool.indieScore} />
            </div>
            <h3 className="font-bold text-lg text-stone-900">{tool.name}</h3>
            <p className="text-sm text-stone-500 mt-1">{tool.tagline}</p>
            <p className="text-sm text-stone-600 mt-3 line-clamp-2">{tool.preview}</p>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-stone-100">
              <div className="text-xs text-stone-400">
                {tool.pricing} · {tool.website}
              </div>
              <button
                type="button"
                onClick={() => viewReview(tool)}
                className="text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                深度评测 →
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
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-medium text-brand-600">{selected.category}</span>
                <h2 className="text-2xl font-bold mt-1">{selected.name}</h2>
                <p className="text-stone-500 mt-1">{selected.tagline}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-stone-400 hover:text-stone-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <p className="text-stone-600 mb-6">{selected.preview}</p>

            {loading && (
              <div className="text-center py-12 text-stone-400">加载深度评测中...</div>
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

            {review && (
              <div className="space-y-6 text-sm">
                <section>
                  <h3 className="font-bold text-base mb-2">📝 综述</h3>
                  <p className="text-stone-600">{review.summary}</p>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">🎯 最适合</h3>
                  <ul className="flex flex-wrap gap-2">
                    {review.bestFor.map((item) => (
                      <li
                        key={item}
                        className="bg-brand-50 text-brand-700 px-2 py-1 rounded text-xs"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">💰 定价详情</h3>
                  <p className="text-stone-600">{review.pricingDetail}</p>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">🔄 替代方案</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-stone-200">
                          <th className="py-2 pr-4 font-medium">工具</th>
                          <th className="py-2 pr-4 font-medium">定价</th>
                          <th className="py-2 font-medium">何时选择</th>
                        </tr>
                      </thead>
                      <tbody>
                        {review.alternatives.map((alt) => (
                          <tr key={alt.name} className="border-b border-stone-100">
                            <td className="py-2 pr-4">{alt.name}</td>
                            <td className="py-2 pr-4 text-brand-600">{alt.pricing}</td>
                            <td className="py-2 text-stone-500">{alt.when}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
                <section className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold text-base mb-2">✅ 优点</h3>
                    <ul className="space-y-1 text-stone-600">
                      {review.pros.map((p) => (
                        <li key={p}>· {p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2">⚠️ 缺点</h3>
                    <ul className="space-y-1 text-stone-600">
                      {review.cons.map((c) => (
                        <li key={c}>· {c}</li>
                      ))}
                    </ul>
                  </div>
                </section>
                <section>
                  <h3 className="font-bold text-base mb-2">⚡ 接入步骤</h3>
                  <ol className="list-decimal list-inside space-y-1 text-stone-600">
                    {review.setupTips.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </section>
                <section className="rounded-xl bg-brand-50 border border-brand-200 p-4">
                  <h3 className="font-bold text-base mb-2">🏆 结论</h3>
                  <p className="text-stone-700">{review.verdict}</p>
                </section>
              </div>
            )}

            {!trial?.isMember && review && (
              <div className="mt-6 pt-6 border-t border-stone-200 text-center">
                <p className="text-sm text-stone-500 mb-3">
                  喜欢这种评测？订阅解锁全部 {tools.length}+ 个工具
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
