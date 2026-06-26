"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { GeneratedWall } from "@/lib/generator";
import type { Locale } from "@/lib/i18n-shared";
import { getStudioCopy, getApiErrorMessage } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type TestimonialForm = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export function WallStudio({ locale }: { locale: Locale }) {
  const c = getStudioCopy(locale);

  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<GeneratedWall | null>(null);
  const [activeTab, setActiveTab] = useState<"embed" | "email">("embed");

  const [form, setForm] = useState<{
    productName: string;
    tagline: string;
    layout: "grid" | "carousel" | "masonry";
    accentColor: string;
    testimonials: TestimonialForm[];
  }>({
    productName: "",
    tagline: c.taglineDefault,
    layout: "grid",
    accentColor: "#e11d48",
    testimonials: c.sampleTestimonials.map((t) => ({ ...t })),
  });

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  function updateTestimonial(
    index: number,
    field: keyof TestimonialForm,
    value: string | number
  ) {
    setForm((f) => {
      const next = [...f.testimonials];
      next[index] = { ...next[index], [field]: value };
      return { ...f, testimonials: next };
    });
  }

  function addTestimonial() {
    setForm((f) => ({
      ...f,
      testimonials: [...f.testimonials, { name: "", role: "", text: "", rating: 5 }],
    }));
  }

  function removeTestimonial(index: number) {
    setForm((f) => ({
      ...f,
      testimonials: f.testimonials.filter((_, i) => i !== index),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/walls/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED" || data.code === "trial_exhausted") {
          setShowPaywall(true);
          setTrial((t) => (t ? { ...t, remaining: 0, canUse: false } : t));
          return;
        }
        const msg =
          data.code && getApiErrorMessage(data.code, locale) !== data.code
            ? getApiErrorMessage(data.code, locale)
            : data.error || c.generateFailed;
        throw new Error(msg);
      }

      setResult(data.wall);
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : c.generateFailed);
    } finally {
      setLoading(false);
    }
  }

  function copyText(text: string) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">{c.title}</h1>
          <p className="text-muted mt-1">{c.subtitle}</p>
        </div>
        {trial && (
          <div className="text-sm rounded-lg bg-brand-600/10 text-brand-500 px-4 py-2 font-medium">
            {trial.isMember
              ? c.memberBadge
              : c.freeRemaining(trial.remaining, trial.limit)}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-semibold text-lg mb-4">{c.productInfo}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {c.productName}
              </label>
              <input
                required
                value={form.productName}
                onChange={(e) => setForm({ ...form, productName: e.target.value })}
                placeholder={c.productNamePlaceholder}
                className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {c.tagline}
              </label>
              <input
                value={form.tagline}
                onChange={(e) => setForm({ ...form, tagline: e.target.value })}
                className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {c.layout}
              </label>
              <select
                value={form.layout}
                onChange={(e) =>
                  setForm({
                    ...form,
                    layout: e.target.value as "grid" | "carousel" | "masonry",
                  })
                }
                className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="grid">{c.layoutGrid}</option>
                <option value="carousel">{c.layoutCarousel}</option>
                <option value="masonry">{c.layoutMasonry}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {c.accentColor}
              </label>
              <input
                type="color"
                value={form.accentColor}
                onChange={(e) => setForm({ ...form, accentColor: e.target.value })}
                className="w-full h-10 rounded-lg border border-border cursor-pointer"
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">{c.testimonials}</h2>
            <button
              type="button"
              onClick={addTestimonial}
              className="text-sm text-brand-500 hover:text-brand-500 font-medium"
            >
              {c.addTestimonial}
            </button>
          </div>
          <div className="space-y-4">
            {form.testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-background p-4 space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted">
                    {c.testimonialN(i + 1)}
                  </span>
                  {form.testimonials.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTestimonial(i)}
                      className="text-xs text-muted hover:text-red-500"
                    >
                      {c.remove}
                    </button>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    required
                    value={t.name}
                    onChange={(e) => updateTestimonial(i, "name", e.target.value)}
                    placeholder={c.namePlaceholder}
                    className="rounded-lg border border-border px-3 py-2 text-sm"
                  />
                  <input
                    value={t.role}
                    onChange={(e) => updateTestimonial(i, "role", e.target.value)}
                    placeholder={c.rolePlaceholder}
                    className="rounded-lg border border-border px-3 py-2 text-sm"
                  />
                </div>
                <textarea
                  required
                  value={t.text}
                  onChange={(e) => updateTestimonial(i, "text", e.target.value)}
                  placeholder={c.textPlaceholder}
                  rows={2}
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted">{c.rating}</span>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => updateTestimonial(i, "rating", n)}
                      className={`text-lg ${t.rating >= n ? "text-brand-500" : "text-muted/60"}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">{error}</p>
        )}

        {showPaywall && (
          <div className="rounded-xl border-2 border-brand-600 bg-brand-600/10 p-6 text-center">
            <p className="font-semibold text-brand-800">{c.paywallTitle}</p>
            <p className="text-sm text-brand-500 mt-1">{c.paywallBody}</p>
            <Link
              href="/join"
              className="inline-block mt-4 bg-brand-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-brand-700"
            >
              {c.paywallCta}
            </Link>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-700 disabled:opacity-50 transition-colors"
        >
          {loading ? c.generating : c.generateCta}
        </button>
      </form>

      {result && (
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">{c.resultTitle}</h2>

          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border flex">
              <button
                type="button"
                onClick={() => setActiveTab("embed")}
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "embed"
                    ? "text-brand-500 border-b-2 border-brand-600"
                    : "text-muted"
                }`}
              >
                {c.tabEmbed}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("email")}
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "email"
                    ? "text-brand-500 border-b-2 border-brand-600"
                    : "text-muted"
                }`}
              >
                {c.tabEmail}
              </button>
            </div>
            <div className="p-4">
              <pre className="text-xs bg-stone-900 text-stone-100 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap max-h-64">
                {activeTab === "embed" ? result.embedHtml : result.collectionEmailTemplate}
              </pre>
              <button
                type="button"
                onClick={() =>
                  copyText(
                    activeTab === "embed"
                      ? result.embedHtml
                      : result.collectionEmailTemplate
                  )
                }
                className="mt-3 text-sm text-brand-500 hover:text-brand-500 font-medium"
              >
                {c.copyClipboard}
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-semibold mb-4">{c.previewTitle}</h3>
            <div
              className="rounded-xl border border-border overflow-hidden"
              dangerouslySetInnerHTML={{ __html: result.embedHtml }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
