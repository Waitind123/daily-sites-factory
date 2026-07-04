"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Document, DocType } from "@/lib/documents";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getWorkspaceCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type LineItemInput = {
  description: string;
  quantity: number;
  unitPrice: number;
};

type Summary = {
  totalDocuments: number;
  invoiceCount: number;
  proposalCount: number;
  contractCount: number;
  expenseCount: number;
  projectCount: number;
};

const DOC_TYPES: DocType[] = ["invoice", "proposal", "contract", "expense", "project"];

function calcTotal(items: { quantity: number; unitPrice: number }[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

function formatMoney(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

export function SuiteDashboard({ locale }: { locale: Locale }) {
  const t = getWorkspaceCopy(locale);
  const [activeType, setActiveType] = useState<DocType>("invoice");
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [title, setTitle] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [notes, setNotes] = useState("");
  const [category, setCategory] = useState("");
  const [lineItems, setLineItems] = useState<LineItemInput[]>([
    { description: "", quantity: 1, unitPrice: 0 },
  ]);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<Document | null>(null);
  const [markdown, setMarkdown] = useState("");
  const [documents, setDocuments] = useState<Document[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    refreshDocs();
    refreshSummary();
  }, []);

  async function refreshDocs() {
    const res = await fetch("/api/documents");
    const data = await res.json();
    if (data.documents) setDocuments(data.documents);
  }

  async function refreshSummary() {
    const res = await fetch("/api/documents?summary=1");
    const data = await res.json();
    if (data.summary) setSummary(data.summary);
  }

  function updateLineItem(index: number, field: keyof LineItemInput, value: string | number) {
    setLineItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    const needsLineItems = activeType !== "project";
    const items = needsLineItems ? lineItems : [];

    try {
      const res = await fetch("/api/documents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: activeType,
          title,
          clientName,
          clientEmail,
          lineItems: items,
          currency,
          notes,
          meta: activeType === "expense" ? { category } : undefined,
        }),
      });
      const data = await res.json();

      if (res.status === 403 && data.code === "TRIAL_EXHAUSTED") {
        setShowPaywall(true);
        return;
      }

      if (!res.ok) {
        setError(getApiErrorMessage(data.code, locale));
        return;
      }

      setCreated(data.document);
      setMarkdown(data.markdown);
      if (data.trial) setTrial(data.trial);
      setClientName("");
      setClientEmail("");
      setTitle("");
      setNotes("");
      setCategory("");
      setLineItems([{ description: "", quantity: 1, unitPrice: 0 }]);
      refreshDocs();
      refreshSummary();
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
    }
  }

  async function copyMarkdown(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  async function loadMarkdown(id: string) {
    const res = await fetch(`/api/documents?id=${encodeURIComponent(id)}`);
    const data = await res.json();
    if (res.ok) {
      setCreated(data.document);
      setMarkdown(data.markdown);
    }
  }

  async function exportJson() {
    const res = await fetch("/api/documents?export=json");
    const data = await res.json();
    if (data.data) await copyMarkdown(data.data);
  }

  const typeLabel = (type: DocType) => t.types[type];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeDocs}{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </p>
        )}
      </div>

      {summary && (
        <div className="mb-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {DOC_TYPES.map((type) => (
            <div key={type} className="rounded-xl border border-border bg-surface p-3 text-center">
              <p className="text-xs text-muted">{typeLabel(type)}</p>
              <p className="text-xl font-bold text-brand-500">
                {summary[`${type}Count` as keyof Summary] ?? 0}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-2">
        {DOC_TYPES.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setActiveType(type)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              activeType === type
                ? "bg-brand-600 text-white"
                : "border border-border text-muted hover:text-foreground"
            }`}
          >
            {typeLabel(type)}
          </button>
        ))}
      </div>

      {trial && !trial.isMember && trial.remaining > 0 && trial.remaining <= 2 && (
        <div className="mb-6 rounded-xl border border-brand-600/30 bg-brand-600/10 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">
              {t.trialLowTitle.replace("{remaining}", String(trial.remaining))}
            </p>
            <p className="text-sm text-muted mt-1">{t.trialLowBody}</p>
          </div>
          <Link
            href="/join?utm_source=freelance-local-kit&utm_medium=trial_low"
            className="shrink-0 rounded-xl border border-brand-600 px-6 py-2.5 text-sm font-semibold text-brand-500 hover:bg-brand-600/10"
          >
            {t.trialLowCta}
          </Link>
        </div>
      )}

      {showPaywall && (
        <div className="mb-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">{t.paywallTitle}</h2>
            <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          </div>
          <Link
            href="/join"
            className="shrink-0 inline-block rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleCreate} className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {t.createTitle} — {typeLabel(activeType)}
          </h2>

          <label className="block text-sm font-medium text-foreground mb-1">{t.docTitle}</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t.docTitlePlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
            required
          />

          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.clientName}</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder={t.clientNamePlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
            required
          />

          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.clientEmail}</label>
          <input
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            placeholder={t.clientEmailPlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
          />

          {activeType === "expense" && (
            <>
              <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.category}</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder={t.categoryPlaceholder}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </>
          )}

          {activeType !== "project" && (
            <div className="mt-4 space-y-3">
              {lineItems.map((item, index) => (
                <div key={index} className="rounded-xl border border-border bg-background p-3">
                  <label className="block text-xs font-medium text-muted mb-1">{t.lineItemDesc}</label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateLineItem(index, "description", e.target.value)}
                    placeholder={t.lineItemDescPlaceholder}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
                    required
                  />
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs text-muted mb-1">{t.quantity}</label>
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) => updateLineItem(index, "quantity", Number(e.target.value))}
                        className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted mb-1">{t.unitPrice}</label>
                      <input
                        type="number"
                        min={0}
                        step={0.01}
                        value={item.unitPrice}
                        onChange={(e) => updateLineItem(index, "unitPrice", Number(e.target.value))}
                        className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeType !== "project" && (
            <>
              <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.currency}</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CNY">CNY</option>
              </select>
            </>
          )}

          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.notes}</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t.notesPlaceholder}
            rows={2}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
          />

          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
          >
            {loading ? t.creating : t.createDoc}
          </button>
        </form>

        <div>
          {created && markdown && (
            <div className="rounded-2xl border border-brand-600/30 bg-surface p-6">
              <h3 className="font-semibold text-foreground">{t.createdTitle}</h3>
              <p className="mt-1 text-sm text-muted">{t.createdHint}</p>
              <p className="mt-2 text-xs text-muted font-mono">{created.number}</p>
              <pre className="mt-3 whitespace-pre-wrap rounded-lg bg-background border border-border p-4 text-xs text-foreground leading-relaxed max-h-64 overflow-y-auto">
                {markdown}
              </pre>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => copyMarkdown(markdown)}
                  className="rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-background"
                >
                  {copied ? t.copied : t.copyMarkdown}
                </button>
              </div>
              {trial && !trial.isMember && (
                <div className="mt-4 rounded-xl border border-brand-600/30 bg-brand-600/5 p-4">
                  <p className="text-sm font-semibold text-foreground">{t.postGenerateTitle}</p>
                  <p className="text-xs text-muted mt-1">{t.postGenerateBody}</p>
                  <Link
                    href="/join?utm_source=freelance-local-kit&utm_medium=post_generate"
                    className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700"
                  >
                    {t.postGenerateCta}
                  </Link>
                </div>
              )}
            </div>
          )}
          <button
            type="button"
            onClick={exportJson}
            className="mt-4 w-full rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted hover:text-foreground hover:bg-surface"
          >
            {t.exportJson}
          </button>
        </div>
      </div>

      {documents.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-foreground mb-4">{t.yourDocs}</h2>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <div className="min-w-0">
                  <p className="font-mono text-sm text-brand-500">
                    {doc.number} · {typeLabel(doc.type)}
                  </p>
                  <p className="text-sm text-foreground mt-1">
                    {doc.title} · {doc.clientName}
                  </p>
                  {doc.lineItems.length > 0 && (
                    <p className="text-xs text-muted mt-1">
                      {formatMoney(calcTotal(doc.lineItems), doc.currency)}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => loadMarkdown(doc.id)}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-background shrink-0"
                >
                  {t.viewMarkdown}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
