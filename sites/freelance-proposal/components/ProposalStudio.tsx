"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { GeneratedProposal } from "@/lib/generator";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getStudioCopy, getTemplates } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function ProposalStudio({ locale }: { locale: Locale }) {
  const t = getStudioCopy(locale);
  const templates = getTemplates(locale);

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
    timeline: t.defaultTimeline as string,
    amount: 3000,
    currency: "USD",
    paymentTerms: t.defaultPayment as string,
    includeContract: true,
  });

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  function applyTemplate(templateId: string) {
    const tpl = templates.find((item) => item.id === templateId);
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
        body: JSON.stringify({ ...form, locale }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((prev) => (prev ? { ...prev, remaining: 0, canUse: false } : prev));
          return;
        }
        throw new Error(data.error || getApiErrorMessage(locale, "GENERATE_FAILED"));
      }

      setResult(data.proposal);
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage(locale, "GENERATE_FAILED"));
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
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <p className="text-muted mt-1">{t.subtitle}</p>
        </div>
        {trial && (
          <div className="text-sm rounded-lg bg-brand-600/10 text-brand-500 px-4 py-2 font-medium">
            {trial.isMember
              ? t.memberBadge
              : t.freeRemaining(trial.remaining, trial.limit)}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            type="button"
            onClick={() => applyTemplate(tpl.id)}
            className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted hover:border-brand-400 hover:bg-brand-600/10 transition-colors"
          >
            {tpl.icon} {tpl.name}
          </button>
        ))}
      </div>

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-amber-900">{t.paywallTitle}</p>
            <p className="text-sm text-amber-700 mt-1">{t.paywallBody}</p>
          </div>
          <Link
            href="/join"
            className="shrink-0 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2">{error}</p>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-xl border border-border bg-surface p-5 space-y-4">
            <h2 className="font-semibold text-foreground">{t.yourInfo}</h2>
            <input
              required
              placeholder={t.namePlaceholder}
              value={form.freelancerName}
              onChange={(e) => setForm({ ...form, freelancerName: e.target.value })}
              className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <input
              required
              type="email"
              placeholder={t.emailPlaceholder}
              value={form.freelancerEmail}
              onChange={(e) => setForm({ ...form, freelancerEmail: e.target.value })}
              className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 space-y-4">
            <h2 className="font-semibold text-foreground">{t.clientInfo}</h2>
            <input
              required
              placeholder={t.clientNamePlaceholder}
              value={form.clientName}
              onChange={(e) => setForm({ ...form, clientName: e.target.value })}
              className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <input
              required
              type="email"
              placeholder={t.clientEmailPlaceholder}
              value={form.clientEmail}
              onChange={(e) => setForm({ ...form, clientEmail: e.target.value })}
              className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 space-y-4">
            <h2 className="font-semibold text-foreground">{t.projectDetails}</h2>
            <input
              required
              placeholder={t.projectTitlePlaceholder}
              value={form.projectTitle}
              onChange={(e) => setForm({ ...form, projectTitle: e.target.value })}
              className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <textarea
              required
              rows={4}
              placeholder={t.deliverablesPlaceholder}
              value={form.deliverables}
              onChange={(e) => setForm({ ...form, deliverables: e.target.value })}
              className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <input
              placeholder={t.timelinePlaceholder}
              value={form.timeline}
              onChange={(e) => setForm({ ...form, timeline: e.target.value })}
              className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <div className="flex gap-3">
              <select
                value={form.currency}
                onChange={(e) => setForm({ ...form, currency: e.target.value })}
                className="rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="USD">{t.currencies.USD}</option>
                <option value="CNY">{t.currencies.CNY}</option>
                <option value="EUR">{t.currencies.EUR}</option>
              </select>
              <input
                required
                type="number"
                min={1}
                placeholder={t.amountPlaceholder}
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
                className="flex-1 rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <input
              placeholder={t.paymentTermsPlaceholder}
              value={form.paymentTerms}
              onChange={(e) => setForm({ ...form, paymentTerms: e.target.value })}
              className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <label className="flex items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                checked={form.includeContract}
                onChange={(e) => setForm({ ...form, includeContract: e.target.checked })}
                className="rounded border-border"
              />
              {t.includeContract}
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors disabled:opacity-50"
          >
            {loading
              ? t.generating
              : t.generateCta(currencySymbol, form.amount.toLocaleString())}
          </button>
        </form>

        <div>
          {result ? (
            <div className="rounded-xl border border-brand-200 bg-surface p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-brand-500 font-medium">{t.generated}</p>
                  <p className="text-lg font-bold text-brand-800">{result.id}</p>
                </div>
                <button
                  type="button"
                  onClick={copyMarkdown}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted hover:bg-background"
                >
                  {t.copyMarkdown}
                </button>
              </div>

              <div className="rounded-lg bg-background border border-border p-4 max-h-[500px] overflow-y-auto">
                <pre className="text-xs text-foreground whitespace-pre-wrap font-sans leading-relaxed">
                  {result.markdown}
                </pre>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-brand-600/10 p-3">
                  <p className="text-brand-500 text-xs">{t.amountLabel}</p>
                  <p className="font-bold text-brand-800">
                    {currencySymbol}
                    {result.project.amount.toLocaleString()} {result.project.currency}
                  </p>
                </div>
                <div className="rounded-lg bg-brand-600/10 p-3">
                  <p className="text-brand-500 text-xs">{t.invoiceLabel}</p>
                  <p className="font-bold text-brand-800">{result.invoice.number}</p>
                </div>
              </div>

              {result.contractClauses.length > 0 && (
                <p className="mt-3 text-xs text-muted">
                  {t.clausesIncluded(result.contractClauses.length)}
                </p>
              )}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-background p-12 text-center text-muted sticky top-24">
              <p className="text-4xl mb-3">📄</p>
              <p>{t.emptyTitle}</p>
              <p className="text-sm mt-1">{t.emptyHint}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
