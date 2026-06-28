"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import type { ImageType } from "@/lib/alt-text-engine";
import { getGenerateCopy, getApiErrorMessage, translateTip } from "@/lib/copy-app";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type GenerateResult = {
  altText: string;
  charCount: number;
  wcagLevel: string;
  score: number;
  tips: string[];
};

export function AltTextGenerator({ locale }: { locale: Locale }) {
  const t = getGenerateCopy(locale);
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [imageType, setImageType] = useState<ImageType>("photo");
  const [subject, setSubject] = useState("");
  const [context, setContext] = useState("");
  const [action, setAction] = useState("");
  const [isDecorative, setIsDecorative] = useState(false);
  const [result, setResult] = useState<GenerateResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    setCopied(false);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageType: isDecorative ? "decorative" : imageType,
        subject,
        context,
        action,
        isDecorative,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(getApiErrorMessage(data.code || data.error, locale));
      setLoading(false);
      return;
    }

    setResult(data);
    await loadTrial();
    setLoading(false);
  }

  async function copyAltText() {
    if (!result) return;
    await navigator.clipboard.writeText(result.altText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-6">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-600/10 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>{t.freeRemaining(trial.remaining, trial.limit)}</span>
          {!trial.canUse && (
            <Link href="/join" className="font-semibold text-brand-500 hover:underline">
              {t.subscribeNow}
            </Link>
          )}
        </div>
      )}
      {trial?.isMember && (
        <div className="rounded-xl border border-green-200 bg-green-600/10 px-4 py-3 text-sm text-green-800">
          {t.memberBadge}
        </div>
      )}

      <form onSubmit={handleGenerate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">{t.imageType}</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {(Object.keys(t.types) as ImageType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setImageType(type);
                  setIsDecorative(type === "decorative");
                }}
                className={`rounded-lg border px-3 py-2 text-xs sm:text-sm transition-colors ${
                  (isDecorative && type === "decorative") ||
                  (!isDecorative && imageType === type)
                    ? "border-brand-500 bg-brand-600/10 text-brand-500"
                    : "border-border bg-surface hover:border-brand-300"
                }`}
              >
                {t.types[type]}
              </button>
            ))}
          </div>
        </div>

        {!isDecorative && imageType !== "decorative" && (
          <>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                {t.subject}
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={t.subjectPlaceholder}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                required
              />
            </div>

            {imageType !== "icon" && (
              <div>
                <label htmlFor="context" className="block text-sm font-medium mb-1">
                  {t.context}
                </label>
                <input
                  id="context"
                  type="text"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder={t.contextPlaceholder}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>
            )}

            {imageType === "icon" && (
              <div>
                <label htmlFor="action" className="block text-sm font-medium mb-1">
                  {t.action}
                </label>
                <input
                  id="action"
                  type="text"
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  placeholder={t.actionPlaceholder}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>
            )}
          </>
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-600/10 px-4 py-3 text-sm text-red-800">
            {error}
            {!trial?.canUse && !trial?.isMember && (
              <Link href="/join" className="ml-2 font-semibold underline">
                {t.subscribeCta}
              </Link>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-brand-700 transition-colors disabled:opacity-60"
        >
          {loading ? t.generating : t.generate}
        </button>
      </form>

      {result && (
        <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{t.resultTitle}</h3>
            <span className="text-sm text-brand-500 font-medium">{t.score(result.score)}</span>
          </div>

          {result.wcagLevel === "decorative" ? (
            <p className="font-mono text-sm bg-background border border-border rounded-xl p-4">
              {t.decorativeResult}
            </p>
          ) : (
            <p className="font-mono text-sm bg-background border border-border rounded-xl p-4">
              {result.altText}
            </p>
          )}

          <div className="flex flex-wrap gap-3 text-xs text-muted">
            <span>{t.chars(result.charCount)}</span>
            <span>{t.wcag}</span>
          </div>

          {result.tips.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-2">{t.tips}</p>
              <ul className="text-sm text-muted space-y-1 list-disc list-inside">
                {result.tips.map((tip) => (
                  <li key={tip}>{translateTip(tip, locale)}</li>
                ))}
              </ul>
            </div>
          )}

          {result.altText && (
            <button
              type="button"
              onClick={copyAltText}
              className="rounded-lg border border-brand-500 px-4 py-2 text-sm font-medium text-brand-500 hover:bg-brand-600/10 transition-colors"
            >
              {copied ? t.copied : t.copy}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
