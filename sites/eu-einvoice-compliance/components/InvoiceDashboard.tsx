"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Invoice } from "@/lib/invoices";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getInvoicesCopy } from "@/lib/copy-app";

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
  totalInvoices: number;
  paidCount: number;
  outstandingCount: number;
  totalOutstanding: number;
  totalPaid: number;
};

type ComplianceCheck = {
  id: string;
  label: { en: string; zh: string };
  passed: boolean;
  required: boolean;
};

type ComplianceResult = {
  score: number;
  checks: ComplianceCheck[];
};

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

export function InvoiceDashboard({ locale }: { locale: Locale }) {
  const t = getInvoicesCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [sellerName, setSellerName] = useState("");
  const [sellerVat, setSellerVat] = useState("");
  const [sellerCountry, setSellerCountry] = useState("PL");
  const [sellerAddress, setSellerAddress] = useState("");
  const [sellerCity, setSellerCity] = useState("");
  const [sellerPostal, setSellerPostal] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [buyerVatId, setBuyerVatId] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [vatRate, setVatRate] = useState(23);
  const [notes, setNotes] = useState("");
  const [lineItems, setLineItems] = useState<LineItemInput[]>([
    { description: "", quantity: 1, unitPrice: 0 },
  ]);
  const [loading, setLoading] = useState(false);
  const [markingPaid, setMarkingPaid] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [createdInvoice, setCreatedInvoice] = useState<Invoice | null>(null);
  const [markdown, setMarkdown] = useState("");
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [copied, setCopied] = useState(false);
  const [ublXml, setUblXml] = useState("");
  const [compliance, setCompliance] = useState<ComplianceResult | null>(null);
  const [ublDownloaded, setUblDownloaded] = useState(false);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/invoices")
      .then((r) => r.json())
      .then((d) => setInvoices(d.invoices ?? []))
      .catch(() => null);
    fetch("/api/invoices?summary=1")
      .then((r) => r.json())
      .then((d) => setSummary(d.summary ?? null))
      .catch(() => null);
  }, []);

  function updateLineItem(index: number, field: keyof LineItemInput, value: string | number) {
    setLineItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  }

  function addLineItem() {
    setLineItems((prev) => [...prev, { description: "", quantity: 1, unitPrice: 0 }]);
  }

  function removeLineItem(index: number) {
    if (lineItems.length <= 1) return;
    setLineItems((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          clientEmail,
          buyerVatId,
          projectTitle,
          lineItems,
          currency,
          vatRate,
          notes,
          sellerName,
          sellerVat,
          sellerCountry,
          sellerAddress,
          sellerCity,
          sellerPostal,
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

      setCreatedInvoice(data.invoice);
      setMarkdown(data.markdown);
      setUblXml(data.ubl ?? "");
      setCompliance(data.compliance ?? null);
      if (data.trial) setTrial(data.trial);
      setInvoices((prev) => [data.invoice, ...prev]);
      setClientName("");
      setClientEmail("");
      setProjectTitle("");
      setNotes("");
      setLineItems([{ description: "", quantity: 1, unitPrice: 0 }]);
      refreshSummary();
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
    }
  }

  async function refreshSummary() {
    const res = await fetch("/api/invoices?summary=1");
    const data = await res.json();
    if (data.summary) setSummary(data.summary);
  }

  async function handleMarkPaid(id: string) {
    setMarkingPaid(true);
    setError("");
    try {
      const res = await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "mark-paid", id }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(getApiErrorMessage(data.code, locale));
        return;
      }
      setCreatedInvoice(data.invoice);
      setMarkdown(data.markdown);
      setInvoices((prev) => prev.map((inv) => (inv.id === id ? data.invoice : inv)));
      refreshSummary();
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setMarkingPaid(false);
    }
  }

  function downloadUbl() {
    if (!ublXml || !createdInvoice) return;
    const blob = new Blob([ublXml], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${createdInvoice.number}.xml`;
    a.click();
    URL.revokeObjectURL(url);
    setUblDownloaded(true);
    setTimeout(() => setUblDownloaded(false), 2000);
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
    const res = await fetch(`/api/invoices?id=${encodeURIComponent(id)}`);
    const data = await res.json();
    if (res.ok) {
      setCreatedInvoice(data.invoice);
      setMarkdown(data.markdown);
    }
  }

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
                {t.freeSyncs}{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </p>
        )}
      </div>

      {summary && (
        <div className="mb-8 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-xs text-muted uppercase">{t.invoiceCount}</p>
            <p className="text-2xl font-bold text-brand-500">{summary.totalInvoices}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-xs text-muted uppercase">{t.outstanding}</p>
            <p className="text-2xl font-bold text-amber-500">
              {formatMoney(summary.totalOutstanding, currency)}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-xs text-muted uppercase">{t.paidTotal}</p>
            <p className="text-2xl font-bold text-emerald-500">
              {formatMoney(summary.totalPaid, currency)}
            </p>
          </div>
        </div>
      )}

      {showPaywall && (
        <div className="mb-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6">
          <h2 className="text-lg font-semibold text-foreground">{t.paywallTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleCreate} className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t.sellerTitle}</h2>

          <label className="block text-sm font-medium text-foreground mb-1">{t.sellerName}</label>
          <input
            type="text"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            placeholder={t.sellerNamePlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
            required
          />

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.sellerVat}</label>
              <input
                type="text"
                value={sellerVat}
                onChange={(e) => setSellerVat(e.target.value)}
                placeholder={t.sellerVatPlaceholder}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.sellerCountry}</label>
              <input
                type="text"
                value={sellerCountry}
                onChange={(e) => setSellerCountry(e.target.value.toUpperCase())}
                placeholder={t.sellerCountryPlaceholder}
                maxLength={2}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
            </div>
          </div>

          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.sellerAddress}</label>
          <input
            type="text"
            value={sellerAddress}
            onChange={(e) => setSellerAddress(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
          />

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.sellerCity}</label>
              <input
                type="text"
                value={sellerCity}
                onChange={(e) => setSellerCity(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.sellerPostal}</label>
              <input
                type="text"
                value={sellerPostal}
                onChange={(e) => setSellerPostal(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-4">{t.buyerTitle}</h2>
          <h3 className="sr-only">{t.createTitle}</h3>

          <label className="block text-sm font-medium text-foreground mb-1">{t.clientName}</label>
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
            required
          />

          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.buyerVat}</label>
          <input
            type="text"
            value={buyerVatId}
            onChange={(e) => setBuyerVatId(e.target.value)}
            placeholder={t.buyerVatPlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
          />

          <label className="block text-sm font-medium text-foreground mt-4 mb-1">{t.projectTitle}</label>
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            placeholder={t.projectTitlePlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500"
            required
          />

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
                {lineItems.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeLineItem(index)}
                    className="mt-2 text-xs text-red-400 hover:underline"
                  >
                    {t.removeLineItem}
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addLineItem}
              className="text-sm text-brand-500 hover:underline"
            >
              {t.addLineItem}
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.currency}</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="EUR">EUR</option>
                <option value="PLN">PLN</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{t.vatRate}</label>
              <input
                type="number"
                min={0}
                max={100}
                value={vatRate}
                onChange={(e) => setVatRate(Number(e.target.value))}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

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
            {loading ? t.creating : t.createInvoice}
          </button>
        </form>

        <div>
          {createdInvoice && markdown && (
            <div className="rounded-2xl border border-brand-600/30 bg-surface p-6">
              <h3 className="font-semibold text-foreground">
                {createdInvoice.status === "paid" ? t.paidTitle : t.createdTitle}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {createdInvoice.status === "paid" ? t.paidHint : t.createdHint}
              </p>
              <p className="mt-2 text-xs text-muted font-mono">{createdInvoice.number}</p>
              {compliance && (
                <div className="mt-3 rounded-lg border border-border bg-background p-3">
                  <p className="text-sm font-medium text-foreground">
                    {t.complianceTitle}:{" "}
                    <span className={compliance.score === 100 ? "text-emerald-500" : "text-amber-500"}>
                      {compliance.score}%
                    </span>
                  </p>
                  <ul className="mt-2 space-y-1">
                    {compliance.checks.map((c) => (
                      <li key={c.id} className="text-xs text-muted flex items-center gap-2">
                        <span className={c.passed ? "text-emerald-500" : "text-red-400"}>
                          {c.passed ? "✓" : "✗"}
                        </span>
                        {c.label[locale]}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <pre className="mt-3 whitespace-pre-wrap rounded-lg bg-background border border-border p-4 text-xs text-foreground leading-relaxed max-h-64 overflow-y-auto">
                {markdown}
              </pre>
              <div className="mt-4 flex flex-wrap gap-3">
                {ublXml && (
                  <button
                    type="button"
                    onClick={downloadUbl}
                    className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
                  >
                    {ublDownloaded ? t.ublDownloaded : t.downloadUbl}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => copyMarkdown(markdown)}
                  className="rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-background"
                >
                  {copied ? t.copied : t.copyMarkdown}
                </button>
                {createdInvoice.status !== "paid" && (
                  <button
                    type="button"
                    onClick={() => handleMarkPaid(createdInvoice.id)}
                    disabled={markingPaid}
                    className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
                  >
                    {markingPaid ? t.markingPaid : t.markPaid}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {invoices.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-foreground mb-4">{t.yourInvoices}</h2>
          <div className="space-y-3">
            {invoices.map((inv) => (
              <div
                key={inv.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <div className="min-w-0">
                  <p className="font-mono text-sm text-brand-500">{inv.number}</p>
                  <p className="text-sm text-foreground mt-1">
                    {inv.projectTitle} · {inv.clientName}
                  </p>
                  <p className="text-xs text-muted mt-1">
                    {t.total}: {formatMoney(calcTotal(inv.lineItems), inv.currency)} ·{" "}
                    {inv.status === "paid" ? t.statusPaid : t.statusSent}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => loadMarkdown(inv.id)}
                    className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-background"
                  >
                    {t.viewMarkdown}
                  </button>
                  {inv.status !== "paid" && (
                    <button
                      type="button"
                      onClick={() => handleMarkPaid(inv.id)}
                      className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
                    >
                      {t.markPaid}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
