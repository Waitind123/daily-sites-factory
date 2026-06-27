"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { EmailTemplate, EmailBlock } from "@/lib/emails";
import type { Locale } from "@/lib/i18n-shared";
import { getApiErrorMessage, getTemplatesCopy } from "@/lib/copy-app";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function EmailDashboard({ locale }: { locale: Locale }) {
  const t = getTemplatesCopy(locale);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [preheader, setPreheader] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState<EmailTemplate | null>(null);
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [selected, setSelected] = useState<EmailTemplate | null>(null);
  const [html, setHtml] = useState("");
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
    fetch("/api/templates")
      .then((r) => r.json())
      .then((d) => setTemplates(d.templates ?? []))
      .catch(() => null);
  }, []);

  async function loadPreview(template: EmailTemplate) {
    setSelected(template);
    const res = await fetch(`/api/templates/${template.id}/preview`);
    const data = await res.json();
    setHtml(data.html ?? "");
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setCreated(null);

    try {
      const res = await fetch("/api/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, subject, preheader }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((prev) => (prev ? { ...prev, remaining: 0, canUse: false } : prev));
          return;
        }
        throw new Error(getApiErrorMessage(data.code, locale));
      }

      setCreated(data.template);
      setTemplates((list) => [data.template, ...list]);
      setName("");
      setSubject("");
      setPreheader("");
      if (data.trial) setTrial(data.trial);
      await loadPreview(data.template);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("TEMPLATE_CREATE_FAILED", locale));
    } finally {
      setLoading(false);
    }
  }

  async function updateBlock(blockId: string, content: string) {
    if (!selected) return;
    const blocks = selected.blocks.map((b) => (b.id === blockId ? { ...b, content } : b));
    const next = { ...selected, blocks };
    setSelected(next);
    setSaved(false);
    const res = await fetch(`/api/templates/${selected.id}/preview`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blocks }),
    });
    const data = await res.json();
    setHtml(data.html ?? "");
  }

  async function saveBlocks() {
    if (!selected) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/templates/${selected.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blocks: selected.blocks }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(getApiErrorMessage(data.code, locale));
      setTemplates((list) => list.map((t) => (t.id === selected.id ? data.template : t)));
      setSelected(data.template);
      setSaved(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : getApiErrorMessage("TEMPLATE_UPDATE_FAILED", locale));
    } finally {
      setSaving(false);
    }
  }

  async function copyHtml() {
    await navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-2 text-muted">{t.subtitle}</p>
        {trial && (
          <p className="mt-3 text-sm text-brand-400">
            {trial.isMember ? t.memberBadge : `${t.freeTemplates} ${trial.remaining}/${trial.limit}`}
          </p>
        )}
      </div>

      {showPaywall && (
        <div className="mb-8 rounded-xl border border-brand-600/40 bg-brand-950/40 p-6">
          <h2 className="text-lg font-semibold text-foreground">{t.paywallTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.paywallBody}</p>
          <Link href="/join" className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600/100">
            {t.paywallCta}
          </Link>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <form onSubmit={handleCreate} className="rounded-xl border border-border bg-surface p-6">
            <h2 className="text-lg font-semibold text-foreground">{t.formTitle}</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground">{t.templateName}</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.templateNamePlaceholder}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground">{t.subject}</label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={t.subjectPlaceholder}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground">{t.preheader}</label>
                <input
                  value={preheader}
                  onChange={(e) => setPreheader(e.target.value)}
                  placeholder={t.preheaderPlaceholder}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
            </div>
            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white hover:bg-brand-600/100 disabled:opacity-50"
            >
              {loading ? t.creating : t.createTemplate}
            </button>
          </form>

          {created && (
            <div className="mt-4 rounded-xl border border-green-600/30 bg-green-950/20 p-4">
              <p className="font-medium text-foreground">{t.createdTitle}</p>
              <p className="mt-1 text-sm text-muted">{t.createdHint}</p>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-foreground">{t.yourTemplates}</h3>
            {templates.length === 0 ? (
              <p className="mt-2 text-sm text-muted">{t.noTemplates}</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {templates.map((template) => (
                  <li key={template.id}>
                    <button
                      type="button"
                      onClick={() => loadPreview(template)}
                      className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition ${
                        selected?.id === template.id
                          ? "border-brand-500 bg-brand-950/30 text-foreground"
                          : "border-border bg-surface text-muted hover:border-brand-600/40"
                      }`}
                    >
                      <span className="font-medium text-foreground">{template.name}</span>
                      <span className="mt-1 block text-xs">{template.subject}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-foreground">{t.preview}</h2>
            {html && (
              <button
                type="button"
                onClick={copyHtml}
                className="rounded-lg border border-brand-600/40 px-3 py-1.5 text-xs font-medium text-brand-400 hover:bg-brand-950/40"
              >
                {copied ? t.copied : t.copyHtml}
              </button>
            )}
          </div>

          {selected && (
            <div className="mt-4 space-y-3">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">{t.blocks}</p>
              {selected.blocks.map((block: EmailBlock) =>
                block.type === "divider" ? (
                  <div key={block.id} className="border-t border-border pt-2 text-xs text-muted">—</div>
                ) : (
                  <div key={block.id}>
                    <label className="text-xs text-muted">{block.type}</label>
                    <input
                      value={block.content}
                      onChange={(e) => updateBlock(block.id, e.target.value)}
                      className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                    />
                  </div>
                )
              )}
              <button
                type="button"
                onClick={saveBlocks}
                disabled={saving}
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600/100 disabled:opacity-50"
              >
                {saving ? t.saving : saved ? t.saved : t.saveBlocks}
              </button>
            </div>
          )}

          <div className="mt-6 overflow-hidden rounded-lg border border-border bg-surface">
            {html ? (
              <iframe title="email-preview" srcDoc={html} className="h-[420px] w-full bg-surface" />
            ) : (
              <div className="flex h-[420px] items-center justify-center text-sm text-muted">
                {t.preview}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
