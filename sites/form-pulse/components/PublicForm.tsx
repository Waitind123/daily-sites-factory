"use client";

import { useState, useEffect } from "react";
import type { Form } from "@/lib/forms";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getPublicFormCopy } from "@/lib/copy-app";

export function PublicForm({ form, locale }: { form: Form; locale: Locale }) {
  const t = getPublicFormCopy(locale);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentValue, setCurrentValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);

  const questions = form.questions;
  const current = questions[step];
  const progress = Math.round(((step + (completed ? 1 : 0)) / questions.length) * 100);

  useEffect(() => {
    fetch("/api/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: form.slug, action: "start", step }),
    }).catch(() => null);
  }, [form.slug, step]);

  async function handleNext(e: React.FormEvent) {
    e.preventDefault();
    if (!current) return;

    const value = currentValue.trim();
    if (!value) return;

    setLoading(true);
    setError("");

    const newAnswers = { ...answers, [current.id]: value };
    setAnswers(newAnswers);

    const isLast = step >= questions.length - 1;

    try {
      if (isLast) {
        const res = await fetch("/api/responses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            slug: form.slug,
            answers: newAnswers,
            step: step + 1,
            completed: true,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(getApiErrorMessage(data.code, locale));
        setCompleted(true);
      } else {
        setStep(step + 1);
        setCurrentValue("");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("RESPONSE_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  if (completed) {
    return (
      <div className="mx-auto max-w-lg px-4 py-12 sm:px-6 sm:py-20 text-center">
        <div className="text-5xl mb-6">✅</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.thankYou}</h1>
        <p className="mt-3 text-muted">{t.thankYouBody}</p>
        <p className="mt-6 text-xs text-muted">{t.poweredBy}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6 sm:py-20 min-h-[70vh] flex flex-col justify-center">
      <div className="mb-8">
        <div className="h-1.5 rounded-full bg-border overflow-hidden">
          <div
            className="h-full bg-brand-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-muted text-right">
          {step + 1} / {questions.length}
        </p>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold text-brand-400">{form.name}</h1>
        {form.description && step === 0 && <p className="mt-2 text-sm text-muted">{form.description}</p>}
      </div>

      <form onSubmit={handleNext} className="rounded-2xl border border-border bg-surface p-8 shadow-xl">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">{current?.text}</h2>

        {current?.type === "textarea" ? (
          <textarea
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            placeholder={t.answerPlaceholder}
            rows={4}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600 resize-none"
            required
          />
        ) : (
          <input
            type={current?.type === "email" ? "email" : "text"}
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            placeholder={current?.type === "email" ? t.emailPlaceholder : t.answerPlaceholder}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            required
            autoFocus
          />
        )}

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
        >
          {loading ? t.submitting : step >= questions.length - 1 ? t.submitCta : t.nextCta}
        </button>
      </form>

      <p className="text-center text-xs text-muted mt-8">{t.poweredBy}</p>
    </div>
  );
}
