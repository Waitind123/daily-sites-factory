"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  templateOptions,
  type OgTemplate,
  type GeneratedOg,
} from "@/lib/og-generator";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function OgStudio() {
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<GeneratedOg | null>(null);
  const [activeTab, setActiveTab] = useState<"preview" | "meta" | "nextjs" | "svg">("preview");

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    author: "",
    badge: "SaaS",
    accentColor: "#7c3aed",
    template: "minimal" as OgTemplate,
  });

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/og/generate", {
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

      setResult(data.og);
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
      case "meta":
        return result.metaTagsHtml;
      case "nextjs":
        return result.nextJsSnippet;
      case "svg":
        return result.svg;
      case "preview":
        return result.htmlImgTag;
    }
  }

  function downloadSvg() {
    if (!result) return;
    const blob = new Blob([result.svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "og-image.svg";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">生成 OG 分享图</h1>
          <p className="text-muted mt-1">输入标题，选择模板，一键导出 1200×630 社交分享图</p>
        </div>
        {trial && (
          <div className="text-sm rounded-lg bg-brand-600/10 text-brand-500 px-4 py-2 font-medium">
            {trial.isMember
              ? "✓ 会员 · 无限生成"
              : `剩余 ${trial.remaining}/${trial.limit} 次免费体验`}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-semibold text-lg mb-4">内容</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                主标题 *
              </label>
              <input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="例：我的 SaaS 产品发布了"
                className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                副标题
              </label>
              <input
                value={form.subtitle}
                onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                placeholder="例：帮助 indie hacker 快速 ship 产品"
                className="w-full rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  产品标签
                </label>
                <input
                  value={form.badge}
                  onChange={(e) => setForm({ ...form, badge: e.target.value })}
                  placeholder="SaaS"
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  作者
                </label>
                <input
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  placeholder="你的名字"
                  className="w-full rounded-lg border border-border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  品牌色
                </label>
                <input
                  type="color"
                  value={form.accentColor}
                  onChange={(e) => setForm({ ...form, accentColor: e.target.value })}
                  className="w-full h-10 rounded-lg border border-border cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-semibold text-lg mb-4">模板</h2>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {templateOptions.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setForm({ ...form, template: t.id })}
                className={`rounded-xl border-2 p-4 text-left transition-colors ${
                  form.template === t.id
                    ? "border-brand-600 bg-brand-600/10"
                    : "border-border hover:border-border"
                }`}
              >
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted mt-1">{t.desc}</p>
              </button>
            ))}
          </div>
        </section>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">{error}</p>
        )}

        {showPaywall && (
          <div className="rounded-xl border-2 border-brand-600 bg-brand-600/10 p-6 text-center">
            <p className="font-semibold text-brand-800">免费体验已用完</p>
            <p className="text-sm text-brand-500 mt-1">
              订阅 $9.9/月，无限生成 OG 图和 meta 标签
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
          {loading ? "生成中…" : "生成 OG 图"}
        </button>
      </form>

      {result && (
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">生成结果</h2>

          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            <div className="aspect-[1200/630] bg-surface-muted flex items-center justify-center p-4">
              <img
                src={result.dataUrl}
                alt="OG preview"
                className="max-w-full max-h-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={downloadSvg}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background"
            >
              下载 SVG
            </button>
            <button
              type="button"
              onClick={() => copyText(result.dataUrl)}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-background"
            >
              复制 Data URL
            </button>
          </div>

          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border flex overflow-x-auto">
              {(
                [
                  { tab: "preview" as const, label: "HTML" },
                  { tab: "meta" as const, label: "Meta 标签" },
                  { tab: "nextjs" as const, label: "Next.js" },
                  { tab: "svg" as const, label: "SVG 源码" },
                ]
              ).map(({ tab, label }) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab
                      ? "text-brand-500 border-b-2 border-brand-600"
                      : "text-muted"
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
                className="mt-3 text-sm text-brand-500 hover:text-brand-500 font-medium"
              >
                复制到剪贴板
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
