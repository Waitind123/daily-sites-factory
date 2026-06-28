"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Ticket } from "@/lib/tickets";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getInboxCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function TicketDashboard({ locale }: { locale: Locale }) {
  const t = getInboxCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [subject, setSubject] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggesting, setSuggesting] = useState<string | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<Ticket | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/tickets")
      .then((r) => r.json())
      .then((d) => setTickets(d.tickets ?? []))
      .catch(() => null);
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setCreated(null);

    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, customerEmail, message }),
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

      setCreated(data.ticket);
      setTickets((list) => [data.ticket, ...list]);
      setSubject("");
      setCustomerEmail("");
      setMessage("");
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("TICKET_CREATE_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  async function handleSuggest(ticketId: string) {
    setSuggesting(ticketId);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch(`/api/tickets/${ticketId}/suggest`, { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((prev) => (prev ? { ...prev, remaining: 0, canUse: false } : prev));
          return;
        }
        throw new Error(getApiErrorMessage(data.code, locale));
      }

      setTickets((list) =>
        list.map((tk) =>
          tk.id === ticketId
            ? { ...tk, suggestedReply: data.reply, status: "pending" as const }
            : tk
        )
      );
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("SUGGEST_FAILED", locale));
    } finally {
      setSuggesting(null);
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
        <h2 className="font-semibold text-lg mb-4">{t.newTicket}</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.subject}</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={t.subjectPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.customerEmail}</label>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.message}</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              rows={4}
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
            {loading ? t.creating : t.createTicket}
          </button>
        </div>
      </form>

      {created && (
        <div className="rounded-xl border border-emerald-600/40 bg-emerald-950/20 p-6 mb-8">
          <h2 className="font-semibold text-lg text-emerald-300">{t.createdTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.createdHint}</p>
          <button
            type="button"
            onClick={() => handleSuggest(created.id)}
            disabled={suggesting === created.id}
            className="mt-4 rounded-lg bg-brand-600 px-6 py-2.5 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {suggesting === created.id ? t.generating : t.aiSuggest}
          </button>
        </div>
      )}

      {tickets.length > 0 && (
        <section>
          <h2 className="font-semibold text-lg mb-4">{t.yourTickets}</h2>
          <div className="space-y-4">
            {tickets.map((tk) => (
              <div
                key={tk.id}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-foreground">{tk.subject}</p>
                    <p className="text-sm text-muted mt-0.5">{tk.customerEmail}</p>
                    <p className="text-sm text-muted mt-2 line-clamp-2">{tk.message}</p>
                  </div>
                  <span
                    className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${
                      tk.status === "open"
                        ? "bg-brand-600/20 text-brand-400"
                        : tk.status === "pending"
                          ? "bg-amber-600/20 text-amber-400"
                          : "bg-emerald-600/20 text-emerald-400"
                    }`}
                  >
                    {t.status[tk.status]}
                  </span>
                </div>
                {tk.suggestedReply ? (
                  <div className="mt-4 rounded-lg bg-background border border-border p-4">
                    <p className="text-xs font-medium text-brand-400 mb-2">{t.suggestedReply}</p>
                    <pre className="whitespace-pre-wrap text-sm text-muted font-sans">{tk.suggestedReply}</pre>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleSuggest(tk.id)}
                    disabled={suggesting === tk.id}
                    className="mt-4 text-sm font-medium text-brand-500 hover:text-brand-400 disabled:opacity-50"
                  >
                    {suggesting === tk.id ? t.generating : t.aiSuggest}
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
