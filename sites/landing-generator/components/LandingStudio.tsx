"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  examplePrompts,
  styleOptions,
  type GeneratedLanding,
  type LandingStyle,
} from "@/lib/generator";
import { StyleBadge } from "@/components/ui";

type TrialStatus = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function LandingStudio() {
  const [trial, setTrial] = useState<TrialStatus | null>(null);
  const [productName, setProductName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [ctaText, setCtaText] = useState("立即开始");
  const [style, setStyle] = useState<LandingStyle>("minimal");
  const [audience, setAudience] = useState("独立开发者");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GeneratedLanding | null>(null);
  const [copied, setCopied] = useState(false);

  const loadTrial = useCallback(async () => {
    const res = await fetch("/api/trial");
    setTrial(await res.json());
  }, []);

  useEffect(() => {
    loadTrial();
  }, [loadTrial]);

  function fillExample(index: number) {
    const ex = examplePrompts[index];
    setProductName(ex.productName);
    setTagline(ex.tagline);
    setDescription(ex.description);
    setFeatures(ex.features.join("\n"));
    setCtaText(ex.ctaText);
    setStyle(ex.style);
    setAudience(ex.audience);
    setResult(null);
    setError(null);
  }

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const res = await fetch("/api/landing/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName,
        tagline,
        description,
        features: features.split("\n").map((f) => f.trim()).filter(Boolean),
        ctaText,
        style,
        audience,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "生成失败");
      setLoading(false);
      await loadTrial();
      return;
    }

    setResult(data.landing);
    await loadTrial();
    setLoading(false);
  }

  async function copyHtml() {
    if (!result) return;
    await navigator.clipboard.writeText(result.html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function downloadHtml() {
    if (!result) return;
    const blob = new Blob([result.html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${result.id}-landing.html`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-8">
      {trial && !trial.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次免费生成
          </span>
          <Link href="/join" className="font-semibold text-brand-700 hover:underline">
            订阅 $9.9/月 无限生成 →
          </Link>
        </div>
      )}

      {trial?.isMember && (
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          ✓ 会员已激活 · 无限生成 + HTML 导出
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {examplePrompts.map((ex, i) => (
          <button
            key={ex.name}
            type="button"
            onClick={() => fillExample(i)}
            className="rounded-full px-3 py-1.5 text-sm font-medium bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
          >
            示例：{ex.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">产品名称 *</label>
            <input
              required
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="TaskFlow"
              className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">一句话标语 *</label>
            <input
              required
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="独立开发者的极简项目管理"
              className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">产品描述 *</label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="解决什么问题，目标用户是谁..."
              className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">核心功能（每行一个）</label>
            <textarea
              rows={4}
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              placeholder={"无限项目\nGitHub 同步\n时间追踪"}
              className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">CTA 按钮文案</label>
              <input
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">目标用户</label>
              <input
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">页面风格</label>
            <div className="grid grid-cols-2 gap-2">
              {styleOptions.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStyle(s.id)}
                  className={`rounded-lg border p-3 text-left text-sm transition-colors ${
                    style === s.id
                      ? "border-brand-600 bg-brand-50 ring-1 ring-brand-600"
                      : "border-stone-200 hover:bg-stone-50"
                  }`}
                >
                  <span className="font-semibold">{s.label}</span>
                  <p className="text-xs text-stone-500 mt-0.5">{s.desc}</p>
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-brand-700 transition-colors disabled:opacity-50"
          >
            {loading ? "生成中..." : "生成 Landing Page"}
          </button>
        </form>

        <div className="space-y-4">
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
              {error}
              {error.includes("订阅") && (
                <Link href="/join" className="block mt-2 font-semibold underline">
                  立即订阅 $9.9/月
                </Link>
              )}
            </div>
          )}

          {!result && !loading && !error && (
            <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 p-12 text-center text-stone-400">
              <p className="text-4xl mb-4">🎨</p>
              <p>填写左侧表单，点击生成</p>
              <p className="text-sm mt-2">或选择上方示例快速体验</p>
            </div>
          )}

          {loading && (
            <div className="rounded-xl border border-stone-200 bg-white p-12 text-center text-stone-400">
              正在生成 landing page...
            </div>
          )}

          {result && (
            <div className="space-y-4">
              <div
                className="rounded-xl border border-stone-200 overflow-hidden"
                style={{
                  background:
                    result.preview.style === "dark"
                      ? "#0c0a09"
                      : result.preview.style === "gradient"
                        ? "linear-gradient(135deg, #f5f3ff, #ede9fe)"
                        : result.preview.style === "bold"
                          ? "#fffbeb"
                          : "#fafaf9",
                }}
              >
                <div className="p-8 text-center">
                  <StyleBadge style={result.preview.style} />
                  <h2
                    className="text-2xl font-bold mt-3"
                    style={{
                      color: result.preview.style === "dark" ? "#fafaf9" : "#1c1917",
                    }}
                  >
                    {result.preview.hero}
                  </h2>
                  <p
                    className="mt-2 text-sm"
                    style={{
                      color: result.preview.style === "dark" ? "#a8a29e" : "#78716c",
                    }}
                  >
                    {result.preview.subhead}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {result.preview.features.slice(0, 4).map((f) => (
                      <div
                        key={f}
                        className="text-xs rounded-lg p-2"
                        style={{
                          background:
                            result.preview.style === "dark" ? "#1c1917" : "white",
                          color: result.preview.style === "dark" ? "#d6d3d1" : "#57534e",
                        }}
                      >
                        ✓ {f}
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="mt-4 px-6 py-2 rounded-lg text-white text-sm font-semibold"
                    style={{ background: result.preview.accentColor }}
                  >
                    {result.preview.cta}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={copyHtml}
                  className="flex-1 min-w-[120px] rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium hover:bg-stone-50"
                >
                  {copied ? "已复制 ✓" : "复制 HTML"}
                </button>
                <button
                  type="button"
                  onClick={downloadHtml}
                  className="flex-1 min-w-[120px] rounded-lg bg-brand-600 text-white px-4 py-2 text-sm font-medium hover:bg-brand-700"
                >
                  下载 HTML
                </button>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-4 text-sm">
                <h3 className="font-semibold mb-2">SEO Meta</h3>
                <p className="text-stone-600"><strong>Title:</strong> {result.meta.title}</p>
                <p className="text-stone-600 mt-1"><strong>Description:</strong> {result.meta.description}</p>
              </div>

              <div className="rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm">
                <h3 className="font-semibold text-brand-800 mb-2">💡 优化建议</h3>
                <ul className="space-y-1 text-brand-700">
                  {result.tips.map((tip) => (
                    <li key={tip}>· {tip}</li>
                  ))}
                </ul>
              </div>

              {!trial?.isMember && (
                <div className="text-center pt-2">
                  <p className="text-sm text-stone-500 mb-2">订阅解锁无限生成 + 托管部署</p>
                  <Link
                    href="/join"
                    className="inline-block bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700"
                  >
                    订阅 $9.9/月
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
