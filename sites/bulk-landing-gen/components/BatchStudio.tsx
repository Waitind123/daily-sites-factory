"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { batchExample, type BatchResult } from "@/lib/batch-generator";
import { type LandingStyle } from "@/lib/generator";
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

export function BatchStudio({ locale }: { locale: Locale }) {
  const c = getStudioCopy(locale);
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [productName, setProductName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [keywords, setKeywords] = useState("");
  const [ctaText, setCtaText] = useState<string>(c.defaultCta);
  const [style, setStyle] = useState<LandingStyle>("minimal");
  const [audience, setAudience] = useState<string>(c.defaultAudience);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<BatchResult[] | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  function fillExample() {
    const ex = batchExample;
    setProductName(ex.productName);
    setTagline(ex.tagline);
    setDescription(ex.description);
    setFeatures(ex.features.join("\n"));
    setKeywords(ex.keywords.join("\n"));
    setCtaText(ex.ctaText);
    setStyle(ex.style);
    setAudience(ex.audience);
    setResults(null);
    setError(null);
  }

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults(null);

    const res = await fetch("/api/batch/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName,
        tagline,
        description,
        features: features.split("\n").map((f) => f.trim()).filter(Boolean),
        keywords: keywords.split("\n").map((k) => k.trim()).filter(Boolean),
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

    setResults(data.results);
    setSelectedIdx(0);
    await loadTrial();
    setLoading(false);
  }

  async function copyHtml(id: string, html: string) {
    await navigator.clipboard.writeText(html);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  function downloadHtml(item: BatchResult) {
    const blob = new Blob([item.landing.html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${item.id}-landing.html`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function downloadAll() {
    if (!results) return;
    for (const item of results) {
      downloadHtml(item);
    }
  }

  const selected = results?.[selectedIdx];
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
        <button
          type="button"
          onClick={fillExample}
          className="rounded-full px-3 py-1.5 text-sm font-medium bg-surface border border-border text-muted hover:bg-background transition-colors"
        >
          {c.examplePrefix}TaskFlow × 5 keywords
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{c.keywords}</label>
            <textarea
              required
              rows={5}
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder={c.keywordsPlaceholder}
              className="w-full rounded-lg border border-border px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>
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
              rows={3}
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

          {!results && !loading && !error && (
            <div className="rounded-xl border border-dashed border-border bg-background p-12 text-center text-muted">
              <p className="text-4xl mb-4">📦</p>
              <p>{c.emptyTitle}</p>
              <p className="text-sm mt-2">{c.emptySubtitle}</p>
            </div>
          )}

          {loading && (
            <div className="rounded-xl border border-border bg-surface p-12 text-center text-muted">
              {c.loading}
            </div>
          )}

          {results && results.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">
                  {results.length} {c.pagesGenerated}
                </p>
                <button
                  type="button"
                  onClick={downloadAll}
                  className="text-sm font-medium text-brand-500 hover:underline"
                >
                  {c.downloadAll}
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {results.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedIdx(i)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors ${
                      selectedIdx === i
                        ? "border-brand-600 bg-brand-600/10 text-brand-500"
                        : "border-border text-muted hover:bg-background"
                    }`}
                  >
                    {item.keyword.slice(0, 24)}
                  </button>
                ))}
              </div>

              {selected && (
                <>
                  <div
                    className="rounded-xl border border-border overflow-hidden"
                    style={{
                      background:
                        selected.landing.preview.style === "dark"
                          ? "#0c0a09"
                          : selected.landing.preview.style === "gradient"
                            ? "linear-gradient(135deg, #f5f3ff, #ede9fe)"
                            : selected.landing.preview.style === "bold"
                              ? "#fffbeb"
                              : "#fafaf9",
                    }}
                  >
                    <div className="p-6 text-center">
                      <StyleBadge style={selected.landing.preview.style} locale={locale} />
                      <h2
                        className="text-xl font-bold mt-3"
                        style={{
                          color: selected.landing.preview.style === "dark" ? "#fafaf9" : "#1c1917",
                        }}
                      >
                        {selected.landing.preview.hero}
                      </h2>
                      <p
                        className="mt-2 text-sm"
                        style={{
                          color: selected.landing.preview.style === "dark" ? "#a8a29e" : "#78716c",
                        }}
                      >
                        {selected.landing.preview.subhead}
                      </p>
                      <button
                        type="button"
                        className="mt-4 px-6 py-2 rounded-lg text-white text-sm font-semibold"
                        style={{ background: selected.landing.preview.accentColor }}
                      >
                        {selected.landing.preview.cta}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => copyHtml(selected.id, selected.landing.html)}
                      className="flex-1 min-w-[120px] rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background"
                    >
                      {copiedId === selected.id ? c.copied : c.copyHtml}
                    </button>
                    <button
                      type="button"
                      onClick={() => downloadHtml(selected)}
                      className="flex-1 min-w-[120px] rounded-lg bg-brand-600 text-white px-4 py-2 text-sm font-medium hover:bg-brand-700"
                    >
                      {c.downloadHtml}
                    </button>
                  </div>

                  <div className="rounded-xl border border-border bg-surface p-4 text-sm">
                    <h3 className="font-semibold mb-2">{c.seoMeta}</h3>
                    <p className="text-muted"><strong>Title:</strong> {selected.landing.meta.title}</p>
                    <p className="text-muted mt-1"><strong>Description:</strong> {selected.landing.meta.description}</p>
                  </div>

                  <div className="rounded-xl border border-brand-200 bg-brand-600/10 p-4 text-sm">
                    <h3 className="font-semibold text-brand-800 mb-2">{c.tipsTitle}</h3>
                    <ul className="space-y-1 text-brand-500">
                      {selected.landing.tips.map((tip) => (
                        <li key={tip}>· {tip}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

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
