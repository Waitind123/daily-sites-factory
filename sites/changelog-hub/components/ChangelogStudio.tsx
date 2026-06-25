"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  sampleEntries,
  type ChangelogEntry,
  type GeneratedChangelog,
} from "@/lib/changelog";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function ChangelogStudio() {
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<GeneratedChangelog | null>(null);
  const [activeTab, setActiveTab] = useState<"page" | "widget" | "status" | "rss">("page");

  const [form, setForm] = useState({
    productName: "",
    tagline: "产品更新日志",
    accentColor: "#2563eb",
    includeStatusPage: true,
    entries: sampleEntries.map((e) => ({ ...e })),
  });

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  function updateEntry(
    index: number,
    field: keyof ChangelogEntry,
    value: string
  ) {
    setForm((f) => {
      const next = [...f.entries];
      next[index] = { ...next[index], [field]: value };
      return { ...f, entries: next };
    });
  }

  function addEntry() {
    setForm((f) => ({
      ...f,
      entries: [
        ...f.entries,
        {
          version: `v1.${f.entries.length}.0`,
          title: "",
          description: "",
          tag: "feature" as const,
          date: new Date().toISOString().slice(0, 10),
        },
      ],
    }));
  }

  function removeEntry(index: number) {
    setForm((f) => ({
      ...f,
      entries: f.entries.filter((_, i) => i !== index),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/changelog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((t) => (t ? { ...t, remaining: 0, canUse: false } : t));
          return;
        }
        throw new Error(data.error || "生成失败");
      }

      setResult(data.changelog);
      if (data.trial) setTrial(data.trial);
    } catch (err) {
      setError(err instanceof Error ? err.message : "生成失败");
    } finally {
      setLoading(false);
    }
  }

  function copyText(text: string) {
    navigator.clipboard.writeText(text);
  }

  function getActiveContent() {
    if (!result) return "";
    switch (activeTab) {
      case "page":
        return result.publicPageHtml;
      case "widget":
        return result.embedWidgetHtml;
      case "status":
        return result.statusPageHtml;
      case "rss":
        return result.rssXml;
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">发布 Changelog</h1>
          <p className="text-stone-500 mt-1">输入版本更新，一键生成公开页 + 嵌入 Widget + RSS</p>
        </div>
        {trial && (
          <div className="text-sm rounded-lg bg-brand-50 text-brand-700 px-4 py-2 font-medium">
            {trial.isMember
              ? "✓ 会员 · 无限生成"
              : `剩余 ${trial.remaining}/${trial.limit} 次免费体验`}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="font-semibold text-lg mb-4">产品信息</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                产品名称 *
              </label>
              <input
                required
                value={form.productName}
                onChange={(e) => setForm({ ...form, productName: e.target.value })}
                placeholder="例：我的 SaaS"
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                标语
              </label>
              <input
                value={form.tagline}
                onChange={(e) => setForm({ ...form, tagline: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                主题色
              </label>
              <input
                type="color"
                value={form.accentColor}
                onChange={(e) => setForm({ ...form, accentColor: e.target.value })}
                className="w-full h-10 rounded-lg border border-stone-300 cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="statusPage"
                checked={form.includeStatusPage}
                onChange={(e) =>
                  setForm({ ...form, includeStatusPage: e.target.checked })
                }
                className="rounded border-stone-300"
              />
              <label htmlFor="statusPage" className="text-sm text-stone-700">
                同时生成状态页片段
              </label>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">版本更新</h2>
            <button
              type="button"
              onClick={addEntry}
              className="text-sm text-brand-600 hover:text-brand-700 font-medium"
            >
              + 添加版本
            </button>
          </div>
          <div className="space-y-4">
            {form.entries.map((entry, i) => (
              <div
                key={i}
                className="rounded-xl border border-stone-100 bg-stone-50 p-4 space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-500">
                    版本 #{i + 1}
                  </span>
                  {form.entries.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEntry(i)}
                      className="text-xs text-stone-400 hover:text-red-500"
                    >
                      删除
                    </button>
                  )}
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <input
                    required
                    value={entry.version}
                    onChange={(e) => updateEntry(i, "version", e.target.value)}
                    placeholder="v1.0.0"
                    className="rounded-lg border border-stone-300 px-3 py-2 text-sm font-mono"
                  />
                  <select
                    value={entry.tag}
                    onChange={(e) => updateEntry(i, "tag", e.target.value)}
                    className="rounded-lg border border-stone-300 px-3 py-2 text-sm"
                  >
                    <option value="feature">新功能</option>
                    <option value="fix">修复</option>
                    <option value="improvement">优化</option>
                    <option value="breaking">破坏性变更</option>
                  </select>
                  <input
                    type="date"
                    value={entry.date}
                    onChange={(e) => updateEntry(i, "date", e.target.value)}
                    className="rounded-lg border border-stone-300 px-3 py-2 text-sm"
                  />
                </div>
                <input
                  required
                  value={entry.title}
                  onChange={(e) => updateEntry(i, "title", e.target.value)}
                  placeholder="更新标题"
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
                />
                <textarea
                  required
                  value={entry.description}
                  onChange={(e) => updateEntry(i, "description", e.target.value)}
                  placeholder="更新详情描述"
                  rows={2}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
                />
              </div>
            ))}
          </div>
        </section>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">{error}</p>
        )}

        {showPaywall && (
          <div className="rounded-xl border-2 border-brand-600 bg-brand-50 p-6 text-center">
            <p className="font-semibold text-brand-800">免费体验已用完</p>
            <p className="text-sm text-brand-700 mt-1">
              订阅 $9.9/月，无限生成 Changelog 页、Widget 和 RSS
            </p>
            <Link
              href="/join"
              className="inline-block mt-4 bg-brand-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-brand-700"
            >
              立即订阅
            </Link>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-700 disabled:opacity-50 transition-colors"
        >
          {loading ? "生成中…" : "生成 Changelog"}
        </button>
      </form>

      {result && (
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">生成结果</h2>

          <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
            <div className="border-b border-stone-200 flex overflow-x-auto">
              {(
                [
                  { tab: "page" as const, label: "公开页 HTML" },
                  { tab: "widget" as const, label: "嵌入 Widget" },
                  ...(result.statusPageHtml
                    ? [{ tab: "status" as const, label: "状态页" }]
                    : []),
                  { tab: "rss" as const, label: "RSS Feed" },
                ]
              ).map(({ tab, label }) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab
                      ? "text-brand-600 border-b-2 border-brand-600"
                      : "text-stone-500"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="p-4">
              <pre className="text-xs bg-stone-900 text-stone-100 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap max-h-64">
                {getActiveContent()}
              </pre>
              <button
                type="button"
                onClick={() => copyText(getActiveContent())}
                className="mt-3 text-sm text-brand-600 hover:text-brand-700 font-medium"
              >
                复制到剪贴板
              </button>
            </div>
          </div>

          {activeTab === "page" && (
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <h3 className="font-semibold mb-4">公开页预览</h3>
              <iframe
                srcDoc={result.publicPageHtml}
                title="Changelog preview"
                className="w-full h-96 rounded-xl border border-stone-100"
                sandbox=""
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
