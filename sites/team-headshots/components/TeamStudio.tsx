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

type TeamMember = {
  id: string;
  name: string;
  preview: string | null;
  result: string | null;
  demo: boolean;
};

export function TeamStudio({ locale }: { locale: Locale }) {
  const t = getStudioCopy(locale);
  const styles = getHomeCopy(locale).styles;
  const [members, setMembers] = useState<TeamMember[]>([
    { id: "1", name: "", preview: null, result: null, demo: false },
  ]);
  const [style, setStyle] = useState("corporate");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [batchIndex, setBatchIndex] = useState(0);
  const fileRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  const readyMembers = members.filter((m) => m.preview);

  function addMember() {
    if (members.length >= 10) return;
    setMembers((prev) => [
      ...prev,
      { id: String(Date.now()), name: "", preview: null, result: null, demo: false },
    ]);
  }

  function removeMember(id: string) {
    if (members.length <= 1) return;
    setMembers((prev) => prev.filter((m) => m.id !== id));
  }

  function updateName(id: string, name: string) {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, name } : m)));
  }

  function handleFile(id: string, file: File) {
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
      setMembers((prev) =>
        prev.map((m) =>
          m.id === id
            ? { ...m, preview: reader.result as string, result: null, demo: false }
            : m
        )
      );
      setError("");
      setShowPaywall(false);
    };
    reader.readAsDataURL(file);
  }

  async function handleBatchGenerate() {
    if (readyMembers.length === 0) {
      setError(t.uploadFirst);
      return;
    }
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setBatchIndex(0);

    let remaining = trial?.remaining ?? 5;

    for (let i = 0; i < readyMembers.length; i++) {
      const member = readyMembers[i];
      setBatchIndex(i + 1);

      try {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: member.preview, style }),
        });
        const data = await res.json();

        if (!res.ok) {
          if (data.code === "TRIAL_EXHAUSTED") {
            setShowPaywall(true);
            setTrial((prev) =>
              prev ? { ...prev, remaining: 0, canUse: false } : prev
            );
            break;
          }
          throw new Error(getApiErrorMessage(data.code, locale));
        }

        setMembers((prev) =>
          prev.map((m) =>
            m.id === member.id
              ? { ...m, result: data.url, demo: data.demo }
              : m
          )
        );

        if (typeof data.remaining === "number") {
          remaining = data.remaining;
          setTrial((prev) =>
            prev
              ? {
                  ...prev,
                  remaining,
                  used: prev.limit - remaining,
                  canUse: remaining > 0,
                }
              : prev
          );
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : getApiErrorMessage(undefined, locale));
        break;
      }
    }

    setLoading(false);
    setBatchIndex(0);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
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

      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-muted">
          <strong className="text-foreground">{readyMembers.length}</strong> {t.membersCount}
        </p>
        {members.length < 10 && (
          <button
            type="button"
            onClick={addMember}
            className="text-sm text-brand-500 hover:underline"
          >
            + {t.addMember}
          </button>
        )}
      </div>

      <div className="space-y-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="rounded-2xl border border-border bg-surface p-4 sm:p-5"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 min-w-0">
                <label className="text-xs font-medium text-muted">{t.memberName}</label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => updateName(member.id, e.target.value)}
                  placeholder={t.memberNamePlaceholder}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </div>
              <div
                className="flex-1 rounded-xl border-2 border-dashed border-border bg-background p-4 text-center cursor-pointer hover:border-brand-400 transition-colors min-h-[120px] flex flex-col items-center justify-center"
                onClick={() => fileRefs.current[member.id]?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const f = e.dataTransfer.files[0];
                  if (f) handleFile(member.id, f);
                }}
              >
                <input
                  ref={(el) => {
                    fileRefs.current[member.id] = el;
                  }}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFile(member.id, f);
                  }}
                />
                {member.preview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.preview}
                    alt={t.previewAlt}
                    className="max-h-24 rounded-lg object-cover"
                  />
                ) : (
                  <>
                    <div className="text-2xl mb-1">📷</div>
                    <p className="text-xs text-muted">{t.noPhoto}</p>
                  </>
                )}
              </div>
              {member.result && (
                <div className="flex-1 flex flex-col items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.result}
                    alt={t.resultAlt}
                    className="max-h-24 rounded-lg object-cover shadow-md"
                  />
                  {member.demo && (
                    <p className="text-xs text-amber-600 mt-1">{t.demoNote}</p>
                  )}
                  <a
                    href={member.result}
                    download={`${member.name || "headshot"}.png`}
                    className="mt-2 text-xs text-brand-500 hover:underline"
                  >
                    {t.download}
                  </a>
                </div>
              )}
              {members.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeMember(member.id)}
                  className="self-start text-xs text-muted hover:text-red-500 sm:mt-6"
                >
                  {t.removeMember}
                </button>
              )}
            </div>
          </div>
        ))}
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

      {loading && batchIndex > 0 && (
        <p className="mt-4 text-sm text-center text-muted">
          {t.batchProgress} {batchIndex} {t.of} {readyMembers.length}…
        </p>
      )}

      <button
        type="button"
        onClick={handleBatchGenerate}
        disabled={
          loading ||
          readyMembers.length === 0 ||
          (trial !== null && !trial.canUse && !trial.isMember)
        }
        className="mt-6 w-full rounded-xl bg-brand-600 py-4 text-lg font-semibold text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? t.generatingBtn : t.generate}
      </button>
    </div>
  );
}
