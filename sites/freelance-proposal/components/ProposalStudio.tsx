"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { templates, type GeneratedProposal } from "@/lib/generator";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function ProposalStudio() {
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<GeneratedProposal | null>(null);

  const [form, setForm] = useState({
    freelancerName: "",
    freelancerEmail: "",
    clientName: "",
    clientEmail: "",
    projectTitle: "",
    deliverables: "",
    timeline: "2-4 周",
    amount: 3000,
    currency: "USD",
    paymentTerms: "50% 预付，50% 交付后 7 天内",
    includeContract: true,
  });

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  function applyTemplate(templateId: string) {
    const tpl = templates.find((t) => t.id === templateId);
    if (!tpl) return;
    setForm((f) => ({
      ...f,
      projectTitle: tpl.defaults.projectTitle,
      deliverables: tpl.defaults.deliverables,
      timeline: tpl.defaults.timeline,
      paymentTerms: tpl.defaults.paymentTerms,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/proposals/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((t) => (t ? { ...t, remaining: 0, canUse: false } : t));
          return;
        }
        throw new Error(data.error || "生成失败");
      }

      setResult(data.proposal);
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : "生成失败");
    } finally {
      setLoading(false);
    }
  }

  function copyMarkdown() {
    if (!result) return;
    navigator.clipboard.writeText(result.markdown);
  }

  const currencySymbol =
    form.currency === "CNY" ? "¥" : form.currency === "EUR" ? "€" : "$";

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">创建报价单</h1>
          <p className="text-stone-500 mt-1">30 秒生成专业报价 + 合同 + 发票</p>
        </div>
        {trial && (
          <div className="text-sm rounded-lg bg-brand-50 text-brand-700 px-4 py-2 font-medium">
            {trial.isMember
              ? "✓ 会员 · 无限生成"
              : `剩余 ${trial.remaining}/${trial.limit} 次免费体验`}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            type="button"
            onClick={() => applyTemplate(tpl.id)}
            className="rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm font-medium text-stone-600 hover:border-brand-400 hover:bg-brand-50 transition-colors"
          >
            {tpl.icon} {tpl.name}
          </button>
        ))}
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-amber-900">免费体验已用完</p>
            <p className="text-sm text-amber-700 mt-1">
              订阅 $9.9/月，无限生成报价单 · 比 HoneyBook 便宜 70%
            </p>
          </div>
          <Link
            href="/join"
            className="shrink-0 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            立即订阅
          </Link>
        </div>
      )}

      {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">{error}</p>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-4">
            <h2 className="font-semibold text-stone-900">你的信息</h2>
            <input
              required
              placeholder="你的姓名"
              value={form.freelancerName}
              onChange={(e) => setForm({ ...form, freelancerName: e.target.value })}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <input
              required
              type="email"
              placeholder="你的邮箱"
              value={form.freelancerEmail}
              onChange={(e) => setForm({ ...form, freelancerEmail: e.target.value })}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-4">
            <h2 className="font-semibold text-stone-900">客户信息</h2>
            <input
              required
              placeholder="客户公司/姓名"
              value={form.clientName}
              onChange={(e) => setForm({ ...form, clientName: e.target.value })}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <input
              required
              type="email"
              placeholder="客户邮箱"
              value={form.clientEmail}
              onChange={(e) => setForm({ ...form, clientEmail: e.target.value })}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-4">
            <h2 className="font-semibold text-stone-900">项目详情</h2>
            <input
              required
              placeholder="项目标题"
              value={form.projectTitle}
              onChange={(e) => setForm({ ...form, projectTitle: e.target.value })}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <textarea
              required
              rows={4}
              placeholder="交付物（每行一项）"
              value={form.deliverables}
              onChange={(e) => setForm({ ...form, deliverables: e.target.value })}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <input
              placeholder="项目周期"
              value={form.timeline}
              onChange={(e) => setForm({ ...form, timeline: e.target.value })}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <div className="flex gap-3">
              <select
                value={form.currency}
                onChange={(e) => setForm({ ...form, currency: e.target.value })}
                className="rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="USD">USD $</option>
                <option value="CNY">CNY ¥</option>
                <option value="EUR">EUR €</option>
              </select>
              <input
                required
                type="number"
                min={1}
                placeholder="报价金额"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
                className="flex-1 rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <input
              placeholder="付款条款"
              value={form.paymentTerms}
              onChange={(e) => setForm({ ...form, paymentTerms: e.target.value })}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <label className="flex items-center gap-2 text-sm text-stone-600">
              <input
                type="checkbox"
                checked={form.includeContract}
                onChange={(e) => setForm({ ...form, includeContract: e.target.checked })}
                className="rounded border-stone-300"
              />
              包含标准合同条款
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors disabled:opacity-50"
          >
            {loading ? "生成中…" : `生成报价单 · ${currencySymbol}${form.amount.toLocaleString()}`}
          </button>
        </form>

        <div>
          {result ? (
            <div className="rounded-xl border border-brand-200 bg-white p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-brand-600 font-medium">报价单已生成</p>
                  <p className="text-lg font-bold text-brand-800">{result.id}</p>
                </div>
                <button
                  type="button"
                  onClick={copyMarkdown}
                  className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 hover:bg-stone-50"
                >
                  复制 Markdown
                </button>
              </div>

              <div className="rounded-lg bg-stone-50 border border-stone-200 p-4 max-h-[500px] overflow-y-auto">
                <pre className="text-xs text-stone-700 whitespace-pre-wrap font-sans leading-relaxed">
                  {result.markdown}
                </pre>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-brand-50 p-3">
                  <p className="text-brand-600 text-xs">报价金额</p>
                  <p className="font-bold text-brand-800">
                    {currencySymbol}
                    {result.project.amount.toLocaleString()} {result.project.currency}
                  </p>
                </div>
                <div className="rounded-lg bg-brand-50 p-3">
                  <p className="text-brand-600 text-xs">发票号</p>
                  <p className="font-bold text-brand-800">{result.invoice.number}</p>
                </div>
              </div>

              {result.contractClauses.length > 0 && (
                <p className="mt-3 text-xs text-stone-500">
                  ✓ 已包含 {result.contractClauses.length} 条合同条款
                </p>
              )}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 p-12 text-center text-stone-400 sticky top-24">
              <p className="text-4xl mb-3">📄</p>
              <p>填写左侧表单，一键生成报价单</p>
              <p className="text-sm mt-1">非会员免费体验 5 次</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
