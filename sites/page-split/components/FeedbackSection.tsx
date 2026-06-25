"use client";

import { useState } from "react";
import type { FeedbackMessage } from "@/lib/feedback-store";
import type { Locale } from "@/lib/i18n-shared";
import { getUiCopy } from "@/lib/i18n-shared";

export function FeedbackSection({
  siteId,
  locale,
  initialMessages,
}: {
  siteId: string;
  locale: Locale;
  initialMessages: FeedbackMessage[];
}) {
  const t = getUiCopy(locale);
  const [messages, setMessages] = useState(initialMessages);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim() || loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error("failed");
      const data = await res.json();
      setMessages((prev) => [data.message, ...prev]);
      setText("");
      setDone(true);
    } catch {
      alert(t.feedbackFailed);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="border-t border-border bg-surface-muted py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold text-foreground">{t.feedbackTitle}</h2>
        <p className="mt-1 text-sm text-muted">{t.feedbackSubtitle}</p>

        <form onSubmit={submit} className="mt-6 space-y-3">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t.feedbackPlaceholder}
            rows={3}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
          />
          <button
            type="submit"
            disabled={loading || !text.trim()}
            className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.feedbackSending : t.feedbackSubmit}
          </button>
          {done && <p className="text-sm text-brand-500">{t.feedbackThanks}</p>}
        </form>

        <div className="mt-8 space-y-4">
          {messages.length === 0 ? (
            <p className="text-sm text-muted">{t.feedbackEmpty}</p>
          ) : (
            messages.map((m) => (
              <article
                key={m.id}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <p className="text-sm text-foreground whitespace-pre-wrap">{m.text}</p>
                <p className="mt-2 text-xs text-muted">
                  {new Date(m.createdAt).toLocaleString(locale === "zh" ? "zh-CN" : "en-US")}
                </p>
                {m.reply && (
                  <div className="mt-3 rounded-lg border border-brand-600/30 bg-brand-600/10 p-3">
                    <p className="text-xs font-medium text-brand-500">{t.feedbackReply}</p>
                    <p className="mt-1 text-sm text-foreground whitespace-pre-wrap">{m.reply}</p>
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
