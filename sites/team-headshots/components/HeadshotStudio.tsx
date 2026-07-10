"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import { getHomeCopy } from "@/lib/copy";
import { getApiErrorMessage, getStudioCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function HeadshotStudio({ locale }: { locale: Locale }) {
  const t = getStudioCopy(locale);
  const styles = getHomeCopy(locale).styles;
  const [preview, setPreview] = useState<string | null>(null);
  const [style, setStyle] = useState("corporate");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [demo, setDemo] = useState(false);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  function handleFile(file: File) {
    if (!file.type.startsWith("image/")) {
      setError(t.invalidType);
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setError(t.tooLarge);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
      setResult(null);
      setError("");
      setShowPaywall(false);
    };
    reader.readAsDataURL(file);
  }

  async function handleGenerate() {
    if (!preview) {
      setError(t.uploadFirst);
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    setShowPaywall(false);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: preview, style }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((prev) =>
            prev ? { ...prev, remaining: 0, canUse: false } : prev
          );
          return;
        }
        throw new Error(getApiErrorMessage(data.code, locale));
      }
      setResult(data.url);
      setDemo(data.demo);
      if (typeof data.remaining === "number") {
        setTrial((prev) =>
          prev
            ? {
                ...prev,
                remaining: data.remaining,
                used: prev.limit - data.remaining,
                canUse: data.remaining > 0,
              }
            : prev
        );
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : getApiErrorMessage(undefined, locale));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <div className="mb-6">
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          {t.backHome}
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold mt-2">{t.title}</h1>
        <p className="text-muted mt-1">{t.subtitle}</p>
      </div>

      {trial && !trial.isMember && (
        <div className="mb-4 rounded-xl bg-brand-600/10 border border-brand-200 px-4 py-3 text-sm text-brand-800 text-center">
          {t.trialRemaining}{" "}
          <strong>
            {trial.remaining}/{trial.limit}
          </strong>{" "}
          {t.trialSuffix}
        </div>
      )}

      {showPaywall && (
        <div className="mb-4 rounded-xl bg-amber-50 border border-amber-200 p-4 text-center">
          <p className="font-medium text-amber-900">{t.paywallTitle}</p>
          <p className="text-sm text-amber-700 mt-1">{t.paywallBody}</p>
          <Link
            href="/join"
            className="inline-block mt-3 rounded-lg bg-brand-600 text-white px-6 py-2 text-sm font-semibold hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div
          className="rounded-2xl border-2 border-dashed border-border bg-background p-6 text-center cursor-pointer hover:border-brand-400 transition-colors"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const f = e.dataTransfer.files[0];
            if (f) handleFile(f);
          }}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt={t.previewAlt}
              className="mx-auto max-h-64 rounded-xl object-cover"
            />
          ) : (
            <>
              <div className="text-4xl mb-3">📷</div>
              <p className="font-medium">{t.uploadTitle}</p>
              <p className="text-sm text-muted mt-1">{t.uploadHint}</p>
            </>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 flex flex-col items-center justify-center min-h-[280px]">
          {loading ? (
            <div className="text-center">
              <div className="animate-spin text-4xl mb-3">⚡</div>
              <p className="font-medium">{t.generating}</p>
              <p className="text-sm text-muted mt-1">{t.generatingHint}</p>
            </div>
          ) : result ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={result}
                alt={t.resultAlt}
                className="max-h-64 rounded-xl object-cover shadow-lg"
              />
              {demo && (
                <p className="text-xs text-amber-600 mt-3 bg-amber-50 px-3 py-1 rounded-lg">
                  {t.demoNote}
                </p>
              )}
              <a
                href={result}
                download="headshot.png"
                className="mt-4 text-sm text-brand-500 hover:underline"
              >
                {t.download}
              </a>
            </>
          ) : (
            <p className="text-muted text-sm">{t.resultPlaceholder}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-foreground mb-3">{t.styleLabel}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {styles.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStyle(s.id)}
              className={`rounded-xl border p-3 text-left transition-colors ${
                style === s.id
                  ? "border-brand-600 bg-brand-600/10"
                  : "border-border hover:border-brand-300"
              }`}
            >
              <span className="text-xl">{s.preview}</span>
              <p className="text-sm font-medium mt-1">{s.name}</p>
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
      )}

      <button
        type="button"
        onClick={handleGenerate}
        disabled={loading || !preview || (trial !== null && !trial.canUse && !trial.isMember)}
        className="mt-6 w-full rounded-xl bg-brand-600 py-4 text-lg font-semibold text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? t.generatingBtn : t.generate}
      </button>
    </div>
  );
}
