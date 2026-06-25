"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sampleTestimonials, type GeneratedWall } from "@/lib/generator";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function WallStudio() {
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<GeneratedWall | null>(null);
  const [activeTab, setActiveTab] = useState<"embed" | "email">("embed");

  const [form, setForm] = useState({
    productName: "",
    tagline: "用户真实好评",
    layout: "grid" as "grid" | "carousel" | "masonry",
    accentColor: "#e11d48",
    testimonials: sampleTestimonials.map((t) => ({ ...t })),
  });

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  function updateTestimonial(
    index: number,
    field: "name" | "role" | "text" | "rating",
    value: string | number
  ) {
    setForm((f) => {
      const next = [...f.testimonials];
      next[index] = { ...next[index], [field]: value };
      return { ...f, testimonials: next };
    });
  }

  function addTestimonial() {
    setForm((f) => ({
      ...f,
      testimonials: [
        ...f.testimonials,
        { name: "", role: "", text: "", rating: 5 },
      ],
    }));
  }

  function removeTestimonial(index: number) {
    setForm((f) => ({
      ...f,
      testimonials: f.testimonials.filter((_, i) => i !== index),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShowPaywall(false);
    setResult(null);

    try {
      const res = await fetch("/api/walls/generate", {
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

      setResult(data.wall);
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

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">创建证言墙</h1>
          <p className="text-stone-500 mt-1">输入好评，一键生成可嵌入的 Wall of Love</p>
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
                布局
              </label>
              <select
                value={form.layout}
                onChange={(e) =>
                  setForm({
                    ...form,
                    layout: e.target.value as "grid" | "carousel" | "masonry",
                  })
                }
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="grid">网格</option>
                <option value="carousel">轮播</option>
                <option value="masonry">瀑布流</option>
              </select>
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
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">用户好评</h2>
            <button
              type="button"
              onClick={addTestimonial}
              className="text-sm text-brand-600 hover:text-brand-700 font-medium"
            >
              + 添加一条
            </button>
          </div>
          <div className="space-y-4">
            {form.testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-stone-100 bg-stone-50 p-4 space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-stone-500">
                    好评 #{i + 1}
                  </span>
                  {form.testimonials.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTestimonial(i)}
                      className="text-xs text-stone-400 hover:text-red-500"
                    >
                      删除
                    </button>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    required
                    value={t.name}
                    onChange={(e) => updateTestimonial(i, "name", e.target.value)}
                    placeholder="姓名"
                    className="rounded-lg border border-stone-300 px-3 py-2 text-sm"
                  />
                  <input
                    value={t.role}
                    onChange={(e) => updateTestimonial(i, "role", e.target.value)}
                    placeholder="职位 / 角色"
                    className="rounded-lg border border-stone-300 px-3 py-2 text-sm"
                  />
                </div>
                <textarea
                  required
                  value={t.text}
                  onChange={(e) => updateTestimonial(i, "text", e.target.value)}
                  placeholder="用户好评内容"
                  rows={2}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone-500">评分</span>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => updateTestimonial(i, "rating", n)}
                      className={`text-lg ${t.rating >= n ? "text-brand-600" : "text-stone-300"}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
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
              订阅 $9.9/月，无限生成证言墙和嵌入代码
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
          {loading ? "生成中…" : "生成证言墙"}
        </button>
      </form>

      {result && (
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">生成结果</h2>

          <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
            <div className="border-b border-stone-200 flex">
              <button
                type="button"
                onClick={() => setActiveTab("embed")}
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "embed"
                    ? "text-brand-600 border-b-2 border-brand-600"
                    : "text-stone-500"
                }`}
              >
                嵌入代码
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("email")}
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "email"
                    ? "text-brand-600 border-b-2 border-brand-600"
                    : "text-stone-500"
                }`}
              >
                收集邮件模板
              </button>
            </div>
            <div className="p-4">
              <pre className="text-xs bg-stone-900 text-stone-100 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap max-h-64">
                {activeTab === "embed" ? result.embedHtml : result.collectionEmailTemplate}
              </pre>
              <button
                type="button"
                onClick={() =>
                  copyText(
                    activeTab === "embed"
                      ? result.embedHtml
                      : result.collectionEmailTemplate
                  )
                }
                className="mt-3 text-sm text-brand-600 hover:text-brand-700 font-medium"
              >
                复制到剪贴板
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="font-semibold mb-4">预览</h3>
            <div
              className="rounded-xl border border-stone-100 overflow-hidden"
              dangerouslySetInnerHTML={{ __html: result.embedHtml }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
