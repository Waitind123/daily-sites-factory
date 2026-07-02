"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { QuestionnaireRecord } from "@/lib/sec-quest";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getDashboardCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

type QuestStats = {
  totalQuestionnaires: number;
  totalQuestions: number;
  totalFilled: number;
  avgCompletion: number;
};

export function SecQuestDashboard({ locale }: { locale: Locale }) {
  const t = getDashboardCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState("");
  const [answerBank, setAnswerBank] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [records, setRecords] = useState<QuestionnaireRecord[]>([]);
  const [stats, setStats] = useState<QuestStats | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    refreshRecords();
  }, []);

  async function refreshRecords() {
    try {
      const res = await fetch("/api/questionnaires");
      const data = await res.json();
      setRecords(data.records ?? []);
      setStats(data.stats ?? null);
    } catch {
      /* ignore */
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);

    try {
      const res = await fetch("/api/questionnaires", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, questions, answerBank }),
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

      if (data.trial) setTrial(data.trial);
      if (data.stats) setStats(data.stats);
      setRecords((prev) => [data.record, ...prev]);
      setExpandedId(data.record.id);
      setTitle("");
      setQuestions("");
    } catch {
      setError(getApiErrorMessage("GENERIC", locale));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">{t.title}</h1>
        <p className="text-muted mt-2">{t.subtitle}</p>
      </div>

      {trial && (
        <div className="mb-6 rounded-xl border border-border bg-surface p-4 flex flex-wrap items-center justify-between gap-3">
          {trial.isMember ? (
            <span className="text-sm font-medium text-brand-500">{t.memberBadge}</span>
          ) : (
            <span className="text-sm text-muted">
              {t.freeSyncs}{" "}
              <strong className="text-foreground">
                {trial.remaining}/{trial.limit}
              </strong>
            </span>
          )}
          {!trial.isMember && (
            <Link
              href="/join"
              className="text-sm text-brand-500 hover:underline font-medium"
            >
              {t.paywallCta}
            </Link>
          )}
        </div>
      )}

      {showPaywall && (
        <div className="mb-6 rounded-xl border border-brand-600/40 bg-brand-600/10 p-6">
          <h3 className="font-semibold text-lg">{t.paywallTitle}</h3>
          <p className="text-muted text-sm mt-2">{t.paywallBody}</p>
          <Link
            href="/join"
            className="mt-4 inline-block rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.paywallCta}
          </Link>
        </div>
      )}

      <form onSubmit={handleCreate} className="rounded-2xl border border-border bg-surface p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">{t.createTitle}</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t.titleLabel}</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t.titlePlaceholder}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t.questionsLabel}</label>
            <textarea
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
              placeholder={t.questionsPlaceholder}
              rows={6}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono"
              required
            />
            <p className="text-xs text-muted mt-1">{t.questionsHint}</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t.answerBankLabel}</label>
            <textarea
              value={answerBank}
              onChange={(e) => setAnswerBank(e.target.value)}
              placeholder={t.answerBankPlaceholder}
              rows={5}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-mono"
              required
            />
            <p className="text-xs text-muted mt-1">{t.answerBankHint}</p>
          </div>
        </div>

        {error && <p className="text-red-400 text-sm mt-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
        >
          {loading ? t.creating : t.fillQuestionnaire}
        </button>
      </form>

      {stats && stats.totalQuestionnaires > 0 && (
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-2xl font-bold text-brand-500">{stats.totalQuestionnaires}</p>
            <p className="text-xs text-muted mt-1">{t.totalQuestionnaires}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-2xl font-bold text-brand-500">{stats.totalQuestions}</p>
            <p className="text-xs text-muted mt-1">{t.totalQuestions}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-2xl font-bold text-brand-500">{stats.avgCompletion}%</p>
            <p className="text-xs text-muted mt-1">{t.avgCompletion}</p>
          </div>
        </div>
      )}

      {records.length > 0 && (
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-4">{t.yourRecords}</h2>
          <div className="space-y-3">
            {records.map((r) => (
              <div key={r.id} className="rounded-xl border border-border bg-surface overflow-hidden">
                <button
                  type="button"
                  onClick={() => setExpandedId(expandedId === r.id ? null : r.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-background/50"
                >
                  <div>
                    <p className="font-medium">{r.title}</p>
                    <p className="text-xs text-muted mt-1">
                      {r.filledCount}/{r.questionCount} · {r.completionRate}%
                    </p>
                  </div>
                  <span className="text-muted text-sm">{expandedId === r.id ? "▲" : "▼"}</span>
                </button>
                {expandedId === r.id && (
                  <div className="border-t border-border px-5 py-4 space-y-3">
                    <p className="text-sm font-medium">{t.answersTitle}</p>
                    {r.answers.map((a, i) => (
                      <div key={i} className="rounded-lg bg-background border border-border p-3">
                        <p className="text-xs text-muted">Q: {a.question}</p>
                        <p className="text-sm mt-1">A: {a.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border bg-surface p-6">
        <h3 className="font-semibold mb-3">{t.tipsTitle}</h3>
        <ul className="space-y-2">
          {t.tips.map((tip) => (
            <li key={tip} className="text-sm text-muted flex gap-2">
              <span className="text-brand-500">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
