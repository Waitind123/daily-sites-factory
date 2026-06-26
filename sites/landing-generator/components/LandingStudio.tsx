"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  examplePrompts,
  type GeneratedLanding,
  type LandingStyle,
} from "@/lib/generator";
import { StyleBadge } from "@/components/ui";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getStudioCopy } from "@/lib/copy-app";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

const STYLE_IDS: LandingStyle[] = ["minimal", "bold", "dark", "gradient"];

export function LandingStudio({ locale }: { locale: Locale }) {
  const c = getStudioCopy(locale);
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [productName, setProductName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [ctaText, setCtaText] = useState<string>(c.defaultCta);
  const [style, setStyle] = useState<LandingStyle>("minimal");
  const [audience, setAudience] = useState<string>(c.defaultAudience);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GeneratedLanding | null>(null);
  const [copied, setCopied] = useState(false);

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  function fillExample(index: number) {
    const ex = examplePrompts[index];
    setProductName(ex.productName);
    setTagline(ex.tagline);
    setDescription(ex.description);
    setFeatures(ex.features.join("\n"));
    setCtaText(ex.ctaText);
    setStyle(ex.style);
    setAudience(ex.audience);
    setResult(null);
    setError(null);
  }

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const res = await fetch("/api/landing/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName,
        tagline,
        description,
        features: features.split("\n").map((f) => f.trim()).filter(Boolean),
        ctaText,
        style,
        audience,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(getApiErrorMessage(data.code, locale));
      setLoading(false);
      await loadTrial();
      return;
    }

    setResult(data.landing);
    await loadTrial();
    setLoading(false);
  }

  async function copyHtml() {
    if (!result) return;
    await navigator.clipboard.writeText(result.html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function downloadHtml() {
    if (!result) return;
    const blob = new Blob([result.html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${result.id}-landing.html`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const trialExhausted = error === getApiErrorMessage("TRIAL_EXHAUSTED", locale);

  return (
    <div className="space-y-8">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            <strong>{trial.remaining}/{trial.limit}</strong> {c.trialRemaining}
          </span>
          <Link href="/join" className="font-semibold text-brand-500 hover:underline">
            {c.subscribeUnlock}
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800">
          {c.memberActive}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {examplePrompts.map((ex, i) => (
          <button
            key={ex.name}
            type="button"
            onClick={() => fillExample(i)}
            className="rounded-full px-3 py-1.5 text-sm font-medium bg-surface border border-border text-muted hover:bg-background transition-colors"
          >
            {c.examplePrefix}{ex.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{c.productName}</label>
            <input
              required
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder={c.productNamePlaceholder}
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{c.tagline}</label>
            <input
              required
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder={c.taglinePlaceholder}
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{c.description}</label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={c.descriptionPlaceholder}
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{c.features}</label>
            <textarea
              rows={4}
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              placeholder={c.featuresPlaceholder}
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{c.ctaText}</label>
              <input
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">{c.audience}</label>
              <input
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{c.styleLabel}</label>
            <div className="grid grid-cols-2 gap-2">
              {STYLE_IDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setStyle(id)}
                  className={`rounded-lg border p-3 text-left text-sm transition-colors ${
                    style === id
                      ? "border-brand-600 bg-brand-600/10 ring-1 ring-brand-600"
                      : "border-border hover:bg-background"
                  }`}
                >
                  <span className="font-semibold">{c.styleOptions[id].label}</span>
                  <p className="text-xs text-muted mt-0.5">{c.styleOptions[id].desc}</p>
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-brand-700 transition-colors disabled:opacity-50"
          >
            {loading ? c.generating : c.generate}
          </button>
        </form>

        <div className="space-y-4">
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
              {error}
              {trialExhausted && (
                <Link href="/join" className="block mt-2 font-semibold underline">
                  {c.subscribeNow}
                </Link>
              )}
            </div>
          )}

          {!result && !loading && !error && (
            <div className="rounded-xl border border-dashed border-border bg-background p-12 text-center text-muted">
              <p className="text-4xl mb-4">🎨</p>
              <p>{c.emptyTitle}</p>
              <p className="text-sm mt-2">{c.emptySubtitle}</p>
            </div>
          )}

          {loading && (
            <div className="rounded-xl border border-border bg-surface p-12 text-center text-muted">
              {c.loading}
            </div>
          )}

          {result && (
            <div className="space-y-4">
              <div
                className="rounded-xl border border-border overflow-hidden"
                style={{
                  background:
                    result.preview.style === "dark"
                      ? "#0c0a09"
                      : result.preview.style === "gradient"
                        ? "linear-gradient(135deg, #f5f3ff, #ede9fe)"
                        : result.preview.style === "bold"
                          ? "#fffbeb"
                          : "#fafaf9",
                }}
              >
                <div className="p-8 text-center">
                  <StyleBadge style={result.preview.style} locale={locale} />
                  <h2
                    className="text-2xl font-bold mt-3"
                    style={{
                      color: result.preview.style === "dark" ? "#fafaf9" : "#1c1917",
                    }}
                  >
                    {result.preview.hero}
                  </h2>
                  <p
                    className="mt-2 text-sm"
                    style={{
                      color: result.preview.style === "dark" ? "#a8a29e" : "#78716c",
                    }}
                  >
                    {result.preview.subhead}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {result.preview.features.slice(0, 4).map((f) => (
                      <div
                        key={f}
                        className="text-xs rounded-lg p-2"
                        style={{
                          background:
                            result.preview.style === "dark" ? "#1c1917" : "white",
                          color: result.preview.style === "dark" ? "#d6d3d1" : "#57534e",
                        }}
                      >
                        ✓ {f}
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="mt-4 px-6 py-2 rounded-lg text-white text-sm font-semibold"
                    style={{ background: result.preview.accentColor }}
                  >
                    {result.preview.cta}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={copyHtml}
                  className="flex-1 min-w-[120px] rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background"
                >
                  {copied ? c.copied : c.copyHtml}
                </button>
                <button
                  type="button"
                  onClick={downloadHtml}
                  className="flex-1 min-w-[120px] rounded-lg bg-brand-600 text-white px-4 py-2 text-sm font-medium hover:bg-brand-700"
                >
                  {c.downloadHtml}
                </button>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 text-sm">
                <h3 className="font-semibold mb-2">{c.seoMeta}</h3>
                <p className="text-muted"><strong>Title:</strong> {result.meta.title}</p>
                <p className="text-muted mt-1"><strong>Description:</strong> {result.meta.description}</p>
              </div>

              <div className="rounded-xl border border-brand-200 bg-brand-600/10 p-4 text-sm">
                <h3 className="font-semibold text-brand-800 mb-2">{c.tipsTitle}</h3>
                <ul className="space-y-1 text-brand-500">
                  {result.tips.map((tip) => (
                    <li key={tip}>· {tip}</li>
                  ))}
                </ul>
              </div>

              {!trial?.isMember && (
                <div className="text-center pt-2">
                  <p className="text-sm text-muted mb-2">{c.subscribeUpsell}</p>
                  <Link
                    href="/join"
                    className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
                  >
                    {c.subscribeButton}
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
