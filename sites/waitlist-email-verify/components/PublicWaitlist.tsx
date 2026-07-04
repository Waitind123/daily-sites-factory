"use client";

import { useState, useEffect } from "react";
import type { Waitlist } from "@/lib/waitlists";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getPublicWaitlistCopy } from "@/lib/copy-app";

export function PublicWaitlist({ waitlist, locale }: { waitlist: Waitlist; locale: Locale }) {
  const t = getPublicWaitlistCopy(locale);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [signupCount, setSignupCount] = useState(waitlist.signupCount);
  const [position, setPosition] = useState<number | null>(null);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [leadGrade, setLeadGrade] = useState<string | null>(null);
  const [joined, setJoined] = useState(false);
  const [typoSuggestion, setTypoSuggestion] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/signups?slug=${waitlist.slug}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.waitlist) setSignupCount(d.waitlist.signupCount);
      })
      .catch(() => null);
  }, [waitlist.slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setJoined(false);
    setLeadGrade(null);
    setTypoSuggestion(null);

    try {
      const res = await fetch("/api/signups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: waitlist.slug, email, useSuggestion: false }),
      });
      const data = await res.json();
      if (res.status === 422 && data.typoSuggestion) {
        setTypoSuggestion(data.typoSuggestion);
        return;
      }
      if (!res.ok) throw new Error(getApiErrorMessage(data.code, locale));
      setPosition(data.signup.position);
      setReferralCode(data.signup.referralCode);
      setLeadGrade(data.signup.grade ?? null);
      setSignupCount(data.waitlist.signupCount);
      setJoined(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("SIGNUP_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <div className="text-4xl mb-4">✉️</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{waitlist.name}</h1>
        {waitlist.description && <p className="mt-3 text-muted">{waitlist.description}</p>}
        <p className="mt-4 text-2xl font-bold text-brand-500">
          🔥 {signupCount} {t.totalSignups}
        </p>
        <p className="mt-2 text-xs text-muted">{t.poweredBy}</p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-6 shadow-xl">
        <h2 className="font-semibold text-lg mb-4 text-center">{t.joinTitle}</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-600"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50 whitespace-nowrap"
          >
            {loading ? t.submitting : t.joinCta}
          </button>
        </div>
        {typoSuggestion && (
          <div className="mt-3 rounded-lg border border-amber-600/40 bg-amber-950/30 p-4 text-center">
            <p className="text-sm text-amber-200">
              {t.typoHint}: <strong>{typoSuggestion}</strong>?
            </p>
            <button
              type="button"
              onClick={async () => {
                setLoading(true);
                setError("");
                try {
                  const res = await fetch("/api/signups", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ slug: waitlist.slug, email, useSuggestion: true }),
                  });
                  const data = await res.json();
                  if (!res.ok) throw new Error(getApiErrorMessage(data.code, locale));
                  setPosition(data.signup.position);
                  setReferralCode(data.signup.referralCode);
                  setLeadGrade(data.signup.grade ?? null);
                  setSignupCount(data.waitlist.signupCount);
                  setJoined(true);
                  setTypoSuggestion(null);
                  setEmail("");
                } catch (err) {
                  setError(err instanceof Error ? err.message : getApiErrorMessage("SIGNUP_FAILED", locale));
                } finally {
                  setLoading(false);
                }
              }}
              className="mt-2 text-sm font-medium text-brand-400 hover:text-brand-300"
            >
              {t.typoFix}
            </button>
          </div>
        )}
        {error && <p className="mt-3 text-sm text-red-400 text-center">{error}</p>}
        {joined && position && (
          <div className="mt-4 rounded-lg bg-emerald-950/30 border border-emerald-600/30 p-4 text-center">
            <p className="text-sm text-emerald-300">{t.joined}</p>
            <p className="mt-2 text-lg font-bold text-foreground">
              {t.position}: #{position}
            </p>
            {leadGrade && (
              <p className="mt-2 text-sm text-brand-400">
                {t.aiScore}: <strong>{leadGrade}</strong>
              </p>
            )}
            {referralCode && (
              <p className="mt-2 text-xs text-muted break-all">
                {t.referralHint} ?ref={referralCode}
              </p>
            )}
          </div>
        )}
      </form>

      {signupCount === 0 && !joined && (
        <p className="text-center text-muted mt-8">{t.empty}</p>
      )}
    </div>
  );
}
