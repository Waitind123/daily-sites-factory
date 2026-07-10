"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { OgTemplate, GeneratedOg } from "@/lib/og-generator";
import type { Locale } from "@/lib/i18n-shared";
import { getStudioCopy, getApiErrorMessage } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function OgStudio({ locale }: { locale: Locale }) {
  const c = getStudioCopy(locale);

  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<GeneratedOg | null>(null);
  const [activeTab, setActiveTab] = useState<"preview" | "meta" | "nextjs" | "svg">("preview");

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    author: "",
    badge: "SaaS",
    accentColor: "#7c3aed",
    template: "minimal" as OgTemplate,
  });

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/og/generate", {
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
        throw new Error(
          getApiErrorMessage(data.code || data.error, locale) || c.generateFailed
        );
      }

      setResult(data.og);
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

  function getActiveContent() {
    if (!result) return "";
    switch (activeTab) {
      case "meta":
        return result.metaTagsHtml;
      case "nextjs":
        return result.nextJsSnippet;
      case "svg":
        return result.svg;
      case "preview":
        return result.htmlImgTag;
    }
  }

  function downloadSvg() {
    if (!result) return;
    const blob = new Blob([result.svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "og-image.svg";
    a.click();
    URL.revokeObjectURL(url);
  }

  const tabs = [
    { tab: "preview" as const, label: c.tabHtml },
    { tab: "meta" as const, label: c.tabMeta },
    { tab: "nextjs" as const, label: c.tabNextjs },
    { tab: "svg" as const, label: c.tabSvg },
  ];

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
          <h2 className="font-semibold text-lg mb-4">{c.contentSection}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {c.titleLabel}
              </label>
              <input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder={c.titlePlaceholder}
                className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                {c.subtitleLabel}
              </label>
              <input
                value={form.subtitle}
                onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                placeholder={c.subtitlePlaceholder}
                className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  {c.badgeLabel}
                </label>
                <input
                  value={form.badge}
                  onChange={(e) => setForm({ ...form, badge: e.target.value })}
                  placeholder={c.badgePlaceholder}
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  {c.authorLabel}
                </label>
                <input
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  placeholder={c.authorPlaceholder}
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  {c.accentColorLabel}
                </label>
                <input
                  type="color"
                  value={form.accentColor}
                  onChange={(e) => setForm({ ...form, accentColor: e.target.value })}
                  className="w-full h-10 rounded-lg border border-border cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-semibold text-lg mb-4">{c.templateSection}</h2>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {c.templates.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setForm({ ...form, template: t.id })}
                className={`rounded-xl border-2 p-4 text-left transition-colors ${
                  form.template === t.id
                    ? "border-brand-600 bg-brand-600/10"
                    : "border-border hover:border-border"
                }`}
              >
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted mt-1">{t.desc}</p>
              </button>
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
            <div className="aspect-[1200/630] bg-surface-muted flex items-center justify-center p-4">
              <img
                src={result.dataUrl}
                alt={c.previewAlt}
                className="max-w-full max-h-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={downloadSvg}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background"
            >
              {c.downloadSvg}
            </button>
            <button
              type="button"
              onClick={() => copyText(result.dataUrl)}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background"
            >
              {c.copyDataUrl}
            </button>
          </div>

          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border flex overflow-x-auto">
              {tabs.map(({ tab, label }) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab
                      ? "text-brand-500 border-b-2 border-brand-600"
                      : "text-muted"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="p-4">
              <pre className="text-xs bg-stone-900 text-stone-100 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap max-h-64">
                {getActiveContent()}
              </pre>
              <button
                type="button"
                onClick={() => copyText(getActiveContent())}
                className="mt-3 text-sm text-brand-500 hover:text-brand-500 font-medium"
              >
                {c.copyClipboard}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
