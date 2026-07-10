"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Quote } from "@/lib/quotes";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getQuotesCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function QuoteDashboard({ locale }: { locale: Locale }) {
  const t = getQuotesCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState<string | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<Quote | null>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/quotes")
      .then((r) => r.json())
      .then((d) => setQuotes(d.quotes ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setCreated(null);

    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          clientEmail,
          projectTitle,
          description,
          amount: parseFloat(amount),
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((prev) => (prev ? { ...prev, remaining: 0, canUse: false } : prev));
          return;
        }
        throw new Error(getApiErrorMessage(data.code, locale));
      }

      setCreated(data.quote);
      setQuotes((list) => [data.quote, ...list]);
      setClientName("");
      setClientEmail("");
      setProjectTitle("");
      setDescription("");
      setAmount("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("QUOTE_CREATE_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  async function handleContract(quoteId: string) {
    setGenerating(`contract-${quoteId}`);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch(`/api/quotes/${quoteId}/contract`, { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((prev) => (prev ? { ...prev, remaining: 0, canUse: false } : prev));
          return;
        }
        throw new Error(getApiErrorMessage(data.code, locale));
      }

      setQuotes((list) =>
        list.map((q) =>
          q.id === quoteId ? { ...q, contractText: data.contractText, status: "sent" as const } : q
        )
      );
      if (created?.id === quoteId) {
        setCreated((c) => (c ? { ...c, contractText: data.contractText, status: "sent" } : c));
      }
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("CONTRACT_FAILED", locale));
    } finally {
      setGenerating(null);
    }
  }

  async function handleInvoice(quoteId: string) {
    setGenerating(`invoice-${quoteId}`);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch(`/api/quotes/${quoteId}/invoice`, { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((prev) => (prev ? { ...prev, remaining: 0, canUse: false } : prev));
          return;
        }
        throw new Error(getApiErrorMessage(data.code, locale));
      }

      setQuotes((list) =>
        list.map((q) => (q.id === quoteId ? { ...q, invoiceText: data.invoiceText } : q))
      );
      if (created?.id === quoteId) {
        setCreated((c) => (c ? { ...c, invoiceText: data.invoiceText } : c));
      }
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("INVOICE_FAILED", locale));
    } finally {
      setGenerating(null);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-emerald-400 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeTries}{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </p>
        )}
      </div>

      {showPaywall && (
        <div className="rounded-xl border border-amber-600/40 bg-amber-950/30 p-6 mb-8">
          <h2 className="font-semibold text-lg text-amber-200">{t.paywallTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">{t.newQuote}</h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.clientName}</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={t.clientNamePlaceholder}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.clientEmail}</label>
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.projectTitle}</label>
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              placeholder={t.projectPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.description}</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t.descriptionPlaceholder}
              rows={4}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.amount}</label>
            <input
              type="number"
              min="1"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={t.amountPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.creating : t.createQuote}
          </button>
        </div>
      </form>

      {created && (
        <div className="rounded-xl border border-emerald-600/40 bg-emerald-950/20 p-6 mb-8">
          <h2 className="font-semibold text-lg text-emerald-300">{t.createdTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.createdHint}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => handleContract(created.id)}
              disabled={generating === `contract-${created.id}`}
              className="rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
            >
              {generating === `contract-${created.id}` ? t.generating : t.genContract}
            </button>
            <button
              type="button"
              onClick={() => handleInvoice(created.id)}
              disabled={generating === `invoice-${created.id}`}
              className="rounded-lg border border-border px-6 py-2.5 font-semibold text-foreground hover:bg-surface disabled:opacity-50"
            >
              {generating === `invoice-${created.id}` ? t.generating : t.genInvoice}
            </button>
          </div>
        </div>
      )}

      {quotes.length > 0 && (
        <section>
          <h2 className="font-semibold text-lg mb-4">{t.yourQuotes}</h2>
          <div className="space-y-4">
            {quotes.map((q) => (
              <div key={q.id} className="rounded-xl border border-border bg-surface p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-foreground">{q.projectTitle}</p>
                    <p className="text-sm text-muted mt-0.5">
                      {q.clientName} · {q.clientEmail}
                    </p>
                    <p className="text-sm text-brand-400 mt-1 font-mono">
                      {q.quoteNumber} · ${q.amount.toFixed(2)} {q.currency}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${
                      q.status === "draft"
                        ? "bg-brand-600/20 text-brand-400"
                        : q.status === "sent"
                          ? "bg-amber-600/20 text-amber-400"
                          : "bg-emerald-600/20 text-emerald-400"
                    }`}
                  >
                    {t.status[q.status]}
                  </span>
                </div>
                {q.contractText ? (
                  <div className="mt-4 rounded-lg bg-background border border-border p-4">
                    <p className="text-xs font-medium text-brand-400 mb-2">{t.contractLabel}</p>
                    <pre className="whitespace-pre-wrap text-sm text-muted font-sans max-h-48 overflow-y-auto">
                      {q.contractText}
                    </pre>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleContract(q.id)}
                    disabled={generating === `contract-${q.id}`}
                    className="mt-4 text-sm font-medium text-brand-500 hover:text-brand-400 disabled:opacity-50"
                  >
                    {generating === `contract-${q.id}` ? t.generating : t.genContract}
                  </button>
                )}
                {q.invoiceText ? (
                  <div className="mt-4 rounded-lg bg-background border border-border p-4">
                    <p className="text-xs font-medium text-brand-400 mb-2">{t.invoiceLabel}</p>
                    <pre className="whitespace-pre-wrap text-sm text-muted font-sans max-h-48 overflow-y-auto">
                      {q.invoiceText}
                    </pre>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleInvoice(q.id)}
                    disabled={generating === `invoice-${q.id}`}
                    className="mt-2 text-sm font-medium text-brand-500 hover:text-brand-400 disabled:opacity-50"
                  >
                    {generating === `invoice-${q.id}` ? t.generating : t.genInvoice}
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
