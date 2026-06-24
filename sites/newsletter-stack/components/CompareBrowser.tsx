"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { categories, getPublicTools, type NewsletterTool } from "@/lib/data";
import { MigrationBadge } from "@/components/ui";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type ToolListItem = Omit<NewsletterTool, "comparison">;

export function CompareBrowser() {
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [filter, setFilter] = useState("全部");
  const [selected, setSelected] = useState<ToolListItem | null>(null);
  const [comparison, setComparison] = useState<NewsletterTool["comparison"] | null>(null);
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

  async function viewComparison(tool: ToolListItem) {
    setSelected(tool);
    setComparison(null);
    setError(null);
    setLoading(true);

    const res = await fetch("/api/tools/compare", {
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
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次免费深度对比
          </span>
          <Link href="/join" className="font-semibold text-brand-700 hover:underline">
            订阅 $9.9/月 →
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          ✓ 会员已激活 · 无限对比 + 联盟优惠码 + 定价变动提醒
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
              <span className="text-xs text-stone-400">{tool.freeTier}</span>
            </div>
            <h3 className="font-bold text-lg text-stone-900">{tool.name}</h3>
            <p className="text-sm text-stone-500 mt-1">{tool.website}</p>
            <p className="text-sm text-stone-600 mt-3 line-clamp-2">{tool.preview}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                {tool.startingPrice}
              </span>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-stone-100">
              <span className="text-xs text-stone-400">{tool.affiliateUrl.replace("https://", "")}</span>
              <button
                type="button"
                onClick={() => viewComparison(tool)}
                className="text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                深度对比 →
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
                <p className="text-stone-500 mt-1">{selected.website} · {selected.startingPrice}</p>
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
              <div className="text-center py-12 text-stone-400">加载深度对比报告中...</div>
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

            {comparison && (
              <div className="space-y-6 text-sm">
                <section className="rounded-xl bg-brand-50 border border-brand-200 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base">📊 对比摘要</h3>
                    <MigrationBadge difficulty={comparison.migrationDifficulty} />
                  </div>
                  <p className="text-stone-700">{comparison.summary}</p>
                  <p className="text-xs text-stone-500 mt-2">
                    更新: {comparison.lastUpdated} · 模式: {comparison.pricingModel} · 交易费: {comparison.transactionFee}
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">✅ 优点</h3>
                  <ul className="space-y-1 text-stone-600">
                    {comparison.pros.map((pro) => (
                      <li key={pro}>· {pro}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">❌ 缺点</h3>
                  <ul className="space-y-1 text-stone-600">
                    {comparison.cons.map((con) => (
                      <li key={con}>· {con}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">🎯 最适合</h3>
                  <div className="flex flex-wrap gap-2">
                    {comparison.bestFor.map((item) => (
                      <span key={item} className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-3">📈 定价历史</h3>
                  <div className="space-y-2">
                    {comparison.pricingHistory.map((item) => (
                      <div key={item.date + item.change} className="rounded-lg border border-stone-200 p-3">
                        <span className="text-xs text-stone-400">{item.date}</span>
                        <p className="font-medium text-stone-800 mt-0.5">{item.change}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">💰 功能矩阵</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-stone-200">
                          <th className="py-2 pr-4 font-medium">功能</th>
                          <th className="py-2 pr-4 font-medium">支持</th>
                          <th className="py-2 font-medium">备注</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparison.featureMatrix.map((row) => (
                          <tr key={row.feature} className="border-b border-stone-100">
                            <td className="py-2 pr-4 font-medium">{row.feature}</td>
                            <td className="py-2 pr-4 text-brand-600">{row.value}</td>
                            <td className="py-2 text-stone-500">{row.note || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">🔄 迁移指南</h3>
                  <ul className="space-y-1 text-stone-600">
                    {comparison.migrationTips.map((tip) => (
                      <li key={tip}>· {tip}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">🏆 竞品对比</h3>
                  <ul className="space-y-1 text-stone-600">
                    {comparison.competitorNotes.map((note) => (
                      <li key={note}>· {note}</li>
                    ))}
                  </ul>
                </section>

                {comparison.affiliateOffer && (
                  <section className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                    <h3 className="font-bold text-base mb-2">🏷️ 联盟优惠</h3>
                    <p className="text-stone-700">{comparison.affiliateOffer}</p>
                  </section>
                )}
              </div>
            )}

            {!trial?.isMember && comparison && (
              <div className="mt-6 pt-6 border-t border-stone-200 text-center">
                <p className="text-sm text-stone-500 mb-3">
                  订阅解锁全部 {tools.length} 个工具无限对比 + 联盟优惠码
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
