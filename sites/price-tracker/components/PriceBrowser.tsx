"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { categories, getPublicProducts, type SaasProduct } from "@/lib/data";
import { ChangeBadge, ImpactBadge } from "@/components/ui";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type ProductListItem = Omit<SaasProduct, "tracking">;

export function PriceBrowser() {
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [filter, setFilter] = useState("全部");
  const [selected, setSelected] = useState<ProductListItem | null>(null);
  const [tracking, setTracking] = useState<SaasProduct["tracking"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const products = getPublicProducts().filter(
    (p) => filter === "全部" || p.category === filter
  );

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  async function viewTracking(product: ProductListItem) {
    setSelected(product);
    setTracking(null);
    setError(null);
    setLoading(true);

    const res = await fetch("/api/prices/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "加载失败");
      setLoading(false);
      await loadTrial();
      return;
    }

    setTracking(data.tracking);
    await loadTrial();
    setLoading(false);
  }

  function closeModal() {
    setSelected(null);
    setTracking(null);
    setError(null);
  }

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次免费深度追踪
          </span>
          <Link href="/join" className="font-semibold text-brand-500 hover:underline">
            订阅 $9.9/月 →
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800">
          ✓ 会员已激活 · 无限追踪 + 邮件变动提醒
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
        {products.map((product) => (
          <article
            key={product.id}
            className="rounded-xl border border-border bg-surface p-5 hover:border-brand-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-xs font-medium text-brand-500 bg-brand-600/10 px-2 py-0.5 rounded">
                {product.category}
              </span>
              <span className="text-xs text-muted">{product.billingModel}</span>
            </div>
            <h3 className="font-bold text-lg text-foreground">{product.name}</h3>
            <p className="text-sm text-muted mt-1">{product.website}</p>
            <p className="text-sm text-muted mt-3 line-clamp-2">{product.preview}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {product.currentPricing
                .filter((t) => t.monthly !== null && t.monthly > 0)
                .slice(0, 2)
                .map((tier) => (
                  <span
                    key={tier.name}
                    className="text-xs bg-surface-muted text-muted px-2 py-0.5 rounded"
                  >
                    {tier.name} ${tier.monthly}/月
                  </span>
                ))}
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
              <span className="text-xs text-muted">{product.pricingUrl}</span>
              <button
                type="button"
                onClick={() => viewTracking(product)}
                className="text-sm font-semibold text-brand-500 hover:text-brand-500"
              >
                查看变动历史 →
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
                <p className="text-muted mt-1">{selected.website} · {selected.billingModel}</p>
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
              <div className="text-center py-12 text-muted">加载定价变动历史中...</div>
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

            {tracking && (
              <div className="space-y-6 text-sm">
                <section className="rounded-xl bg-brand-600/10 border border-brand-200 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base">📊 追踪摘要</h3>
                    <ChangeBadge count={tracking.changesLast90Days} />
                  </div>
                  <p className="text-foreground">{tracking.summary}</p>
                  <p className="text-xs text-muted mt-2">
                    上次检查: {tracking.lastChecked} · 频率: {tracking.checkFrequency}
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-3">📈 变动历史</h3>
                  <div className="space-y-3">
                    {tracking.history.map((change) => (
                      <div
                        key={change.date + change.summary}
                        className="rounded-lg border border-border p-4"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs text-muted">{change.date}</span>
                          <ImpactBadge impact={change.impact} />
                        </div>
                        <p className="font-medium text-foreground">{change.summary}</p>
                        {change.before && change.after && (
                          <p className="text-xs text-muted mt-1">
                            {change.before} → {change.after}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">💰 当前定价</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-2 pr-4 font-medium">计划</th>
                          <th className="py-2 pr-4 font-medium">月费</th>
                          <th className="py-2 font-medium">核心功能</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selected.currentPricing.map((tier) => (
                          <tr key={tier.name} className="border-b border-border">
                            <td className="py-2 pr-4 font-medium">{tier.name}</td>
                            <td className="py-2 pr-4 text-brand-500">
                              {tier.monthly === null
                                ? "联系销售"
                                : tier.monthly === 0
                                  ? "免费"
                                  : `$${tier.monthly}/月`}
                            </td>
                            <td className="py-2 text-muted">
                              {tier.features.slice(0, 2).join("、")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">🎯 竞争分析</h3>
                  <ul className="space-y-1 text-muted">
                    {tracking.competitiveNotes.map((note) => (
                      <li key={note}>· {note}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-base mb-2">💡 策略建议</h3>
                  <ul className="space-y-1 text-muted">
                    {tracking.alertRecommendations.map((rec) => (
                      <li key={rec}>· {rec}</li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-xl bg-background border border-border p-4">
                  <h3 className="font-bold text-base mb-2">🏆 市场定位</h3>
                  <p className="text-foreground">{tracking.marketPosition}</p>
                </section>
              </div>
            )}

            {!trial?.isMember && tracking && (
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted mb-3">
                  订阅解锁全部 {products.length}+ 个产品无限追踪 + 邮件提醒
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
