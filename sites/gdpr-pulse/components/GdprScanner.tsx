"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n-shared";
import type { Processor } from "@/lib/gdpr-engine";
import { getGenerateCopy, getApiErrorMessage } from "@/lib/copy-app";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type ScanResult = {
  score: number;
  grade: string;
  checks: Array<{
    id: string;
    title: string;
    status: string;
    article: string;
    detail: string;
    fix: string;
  }>;
  policySnippet: string;
  summary: string;
};

const PROCESSORS: Processor[] = [
  "stripe",
  "google-analytics",
  "posthog",
  "supabase",
  "vercel",
  "mailchimp",
  "intercom",
];

export function GdprScanner({ locale }: { locale: Locale }) {
  const t = getGenerateCopy(locale);
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [productName, setProductName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [targetsEuUsers, setTargetsEuUsers] = useState(true);
  const [collectsEmail, setCollectsEmail] = useState(true);
  const [collectsPayment, setCollectsPayment] = useState(true);
  const [usesAnalytics, setUsesAnalytics] = useState(true);
  const [usesCookies, setUsesCookies] = useState(true);
  const [hasPrivacyPolicy, setHasPrivacyPolicy] = useState(false);
  const [hasCookieBanner, setHasCookieBanner] = useState(false);
  const [hasDpaWithProcessors, setHasDpaWithProcessors] = useState(false);
  const [processors, setProcessors] = useState<Processor[]>(["stripe", "vercel"]);
  const [result, setResult] = useState<ScanResult | null>(null);
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

  function toggleProcessor(p: Processor) {
    setProcessors((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  }

  async function handleScan(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    setCopied(false);

    const res = await fetch("/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName,
        websiteUrl,
        targetsEuUsers,
        collectsEmail,
        collectsPayment,
        usesAnalytics,
        usesCookies,
        hasPrivacyPolicy,
        hasCookieBanner,
        hasDpaWithProcessors,
        processors,
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

  async function copyPolicy() {
    if (!result) return;
    await navigator.clipboard.writeText(result.policySnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const statusColor = (status: string) => {
    if (status === "pass") return "text-green-500 bg-green-600/10 border-green-600/30";
    if (status === "warn") return "text-amber-500 bg-amber-600/10 border-amber-600/30";
    return "text-red-500 bg-red-600/10 border-red-600/30";
  };

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

      <form onSubmit={handleScan} className="space-y-4">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium mb-1">
            {t.productName}
          </label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder={t.productNamePlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            required
          />
        </div>

        <div>
          <label htmlFor="websiteUrl" className="block text-sm font-medium mb-1">
            {t.websiteUrl}
          </label>
          <input
            id="websiteUrl"
            type="url"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder={t.websiteUrlPlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>

        <div>
          <p className="block text-sm font-medium mb-2">{t.processors}</p>
          <div className="flex flex-wrap gap-2">
            {PROCESSORS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => toggleProcessor(p)}
                className={`rounded-lg border px-3 py-1.5 text-xs transition-colors ${
                  processors.includes(p)
                    ? "border-brand-500 bg-brand-600/10 text-brand-500"
                    : "border-border bg-surface hover:border-brand-300"
                }`}
              >
                {t.processorLabels[p as keyof typeof t.processorLabels]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {[
            [targetsEuUsers, setTargetsEuUsers, t.euUsers],
            [collectsEmail, setCollectsEmail, t.collectsEmail],
            [collectsPayment, setCollectsPayment, t.collectsPayment],
            [usesAnalytics, setUsesAnalytics, t.usesAnalytics],
            [usesCookies, setUsesCookies, t.usesCookies],
            [hasPrivacyPolicy, setHasPrivacyPolicy, t.hasPrivacyPolicy],
            [hasCookieBanner, setHasCookieBanner, t.hasCookieBanner],
            [hasDpaWithProcessors, setHasDpaWithProcessors, t.hasDpa],
          ].map(([checked, setter, label]) => (
            <label
              key={String(label)}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={checked as boolean}
                onChange={(e) => (setter as (v: boolean) => void)(e.target.checked)}
                className="rounded border-border text-brand-500 focus:ring-brand-500"
              />
              {label as string}
            </label>
          ))}
        </div>

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
          {loading ? t.scanning : t.scan}
        </button>
      </form>

      {result && (
        <div className="rounded-2xl border border-brand-600/30 bg-surface p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{t.resultTitle}</h3>
            <span className="text-2xl font-bold text-brand-500">
              {result.grade} · {result.score}/100
            </span>
          </div>
          <p className="text-sm text-muted">{result.summary}</p>

          <div className="space-y-3">
            {result.checks.map((check) => (
              <div
                key={check.id}
                className={`rounded-xl border p-4 ${statusColor(check.status)}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium text-sm">{check.title}</p>
                  <span className="text-xs font-mono shrink-0">{check.article}</span>
                </div>
                <p className="text-xs mt-1 opacity-90">{check.detail}</p>
                <p className="text-xs mt-2 font-medium">{t.fixLabel}: {check.fix}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm font-medium mb-2">{t.policyTitle}</p>
            <pre className="whitespace-pre-wrap rounded-xl bg-background border border-border p-4 font-mono text-xs leading-relaxed max-h-64 overflow-y-auto">
              {result.policySnippet}
            </pre>
            <button
              type="button"
              onClick={copyPolicy}
              className="mt-3 rounded-lg border border-brand-500 px-4 py-2 text-sm font-medium text-brand-500 hover:bg-brand-600/10 transition-colors"
            >
              {copied ? t.copied : t.copyPolicy}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
