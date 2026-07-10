"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { ReviewRequest } from "@/lib/review-requests";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getCampaignsCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type Summary = {
  totalCampaigns: number;
  sentCount: number;
  reviewedCount: number;
  conversionRate: number;
};

export function ReviewDashboard({ locale }: { locale: Locale }) {
  const t = getCampaignsCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [businessName, setBusinessName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [googleReviewUrl, setGoogleReviewUrl] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [loading, setLoading] = useState(false);
  const [markingReviewed, setMarkingReviewed] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [createdRequest, setCreatedRequest] = useState<ReviewRequest | null>(null);
  const [requests, setRequests] = useState<ReviewRequest[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/requests")
      .then((r) => r.json())
      .then((d) => setRequests(d.requests ?? []))
      .catch(() => null);
    fetch("/api/requests?summary=1")
      .then((r) => r.json())
      .then((d) => setSummary(d.summary ?? null))
      .catch(() => null);
  }, []);

  async function refreshSummary() {
    const res = await fetch("/api/requests?summary=1");
    const data = await res.json();
    if (data.summary) setSummary(data.summary);
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          customerName,
          customerPhone,
          googleReviewUrl,
          serviceName,
        }),
      });
      const data = await res.json();

      if (res.status === 403 && data.code === "TRIAL_EXHAUSTED") {
        setShowPaywall(true);
        return;
      }

      if (!res.ok) {
        setError(getApiErrorMessage(data.code, locale));
        return;
      }

      setCreatedRequest(data.request);
      if (data.trial) setTrial(data.trial);
      setRequests((prev) => [data.request, ...prev]);
      setCustomerName("");
      setCustomerPhone("");
      setServiceName("");
      refreshSummary();
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
    }
  }

  async function handleMarkReviewed(id: string) {
    setMarkingReviewed(true);
    setError("");
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "mark-reviewed", id }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(getApiErrorMessage(data.code, locale));
        return;
      }
      setRequests((prev) => prev.map((r) => (r.id === id ? data.request : r)));
      if (createdRequest?.id === id) setCreatedRequest(data.request);
      refreshSummary();
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setMarkingReviewed(false);
    }
  }

  function copySms(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm">
            {trial.isMember ? (
              <span className="text-brand-500 font-medium">{t.memberBadge}</span>
            ) : (
              <span className="text-muted">
                {t.freeSyncs}{" "}
                <strong className="text-foreground">
                  {trial.remaining}/{trial.limit}
                </strong>
              </span>
            )}
          </p>
        )}
      </div>

      {summary && summary.totalCampaigns > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-xs text-muted uppercase">{t.totalCampaigns}</p>
            <p className="text-2xl font-bold text-brand-500">{summary.totalCampaigns}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-xs text-muted uppercase">{t.sentCount}</p>
            <p className="text-2xl font-bold text-foreground">{summary.sentCount}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-xs text-muted uppercase">{t.reviewedCount}</p>
            <p className="text-2xl font-bold text-brand-500">{summary.reviewedCount}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-xs text-muted uppercase">{t.conversionRate}</p>
            <p className="text-2xl font-bold text-foreground">{summary.conversionRate}%</p>
          </div>
        </div>
      )}

      {showPaywall && (
        <div className="mb-8 rounded-2xl border-2 border-brand-600 bg-surface p-6 text-center">
          <h2 className="text-xl font-bold text-foreground">{t.paywallTitle}</h2>
          <p className="mt-2 text-muted text-sm">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={handleSend} className="rounded-2xl border border-border bg-surface p-6 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">{t.createTitle}</h2>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.businessName}</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder={t.businessNamePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.customerName}</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder={t.customerNamePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.customerPhone}</label>
            <input
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder={t.customerPhonePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.googleReviewUrl}</label>
            <input
              type="url"
              value={googleReviewUrl}
              onChange={(e) => setGoogleReviewUrl(e.target.value)}
              placeholder={t.googleReviewUrlPlaceholder}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t.serviceName}</label>
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder={t.serviceNamePlaceholder}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-600 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? t.creating : t.sendSms}
          </button>
        </form>

        <div className="space-y-6">
          {createdRequest && (
            <div className="rounded-2xl border border-brand-600/30 bg-surface p-6">
              <h3 className="font-semibold text-brand-500">{t.createdTitle}</h3>
              <p className="text-sm text-muted mt-1">{t.createdHint}</p>
              <p className="text-xs text-muted mt-4 uppercase tracking-wide">{t.smsPreview}</p>
              <pre className="mt-2 whitespace-pre-wrap rounded-xl bg-background border border-border p-4 text-sm text-foreground">
                {createdRequest.smsText}
              </pre>
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => copySms(createdRequest.smsText)}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background"
                >
                  {copied ? t.copied : t.copySms}
                </button>
                {createdRequest.status !== "reviewed" && (
                  <button
                    type="button"
                    onClick={() => handleMarkReviewed(createdRequest.id)}
                    disabled={markingReviewed}
                    className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
                  >
                    {markingReviewed ? t.markingReviewed : t.markReviewed}
                  </button>
                )}
              </div>
            </div>
          )}

          {requests.length > 0 && (
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-foreground mb-4">{t.yourCampaigns}</h3>
              <ul className="space-y-3">
                {requests.map((r) => (
                  <li
                    key={r.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-background p-3 text-sm"
                  >
                    <div>
                      <p className="font-medium text-foreground">{r.customerName}</p>
                      <p className="text-muted text-xs">{r.customerPhone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          r.status === "reviewed"
                            ? "bg-brand-100 text-brand-500"
                            : "bg-surface-muted text-muted"
                        }`}
                      >
                        {r.status === "reviewed" ? t.statusReviewed : t.statusPending}
                      </span>
                      {r.status !== "reviewed" && (
                        <button
                          type="button"
                          onClick={() => handleMarkReviewed(r.id)}
                          className="text-xs text-brand-500 hover:underline"
                        >
                          {t.markReviewed}
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
