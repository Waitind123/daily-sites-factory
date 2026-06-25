"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { styles } from "@/lib/data";

type TrialInfo = {
  limit: number;
  used: number;
  remaining: number;
  isMember: boolean;
  canUse: boolean;
};

export function HeadshotStudio() {
  const [preview, setPreview] = useState<string | null>(null);
  const [style, setStyle] = useState("corporate");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [demo, setDemo] = useState(false);
  const [trial, setTrial] = useState<TrialInfo | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/trial")
      .then((r) => r.json())
      .then(setTrial)
      .catch(() => null);
  }, []);

  function handleFile(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("请上传 JPG / PNG 图片");
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setError("图片不能超过 4MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
      setResult(null);
      setError("");
      setShowPaywall(false);
    };
    reader.readAsDataURL(file);
  }

  async function handleGenerate() {
    if (!preview) {
      setError("请先上传自拍");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    setShowPaywall(false);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: preview, style }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.code === "TRIAL_EXHAUSTED") {
          setShowPaywall(true);
          setTrial((t) =>
            t ? { ...t, remaining: 0, canUse: false } : t
          );
          return;
        }
        throw new Error(data.error || "生成失败");
      }
      setResult(data.url);
      setDemo(data.demo);
      if (typeof data.remaining === "number") {
        setTrial((t) =>
          t
            ? {
                ...t,
                remaining: data.remaining,
                used: t.limit - data.remaining,
                canUse: data.remaining > 0,
              }
            : t
        );
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "未知错误");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <div className="mb-6">
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          ← 返回首页
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold mt-2">AI 证件照工作室</h1>
        <p className="text-muted mt-1">上传自拍 → 选风格 → 30 秒出图</p>
      </div>

      {trial && !trial.isMember && (
        <div className="mb-4 rounded-xl bg-brand-600/10 border border-brand-200 px-4 py-3 text-sm text-brand-800 text-center">
          免费体验剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次 · 用尽后需订阅 $9.9/月
        </div>
      )}

      {showPaywall && (
        <div className="mb-4 rounded-xl bg-amber-50 border border-amber-200 p-4 text-center">
          <p className="font-medium text-amber-900">免费 5 次已用完 🎉</p>
          <p className="text-sm text-amber-700 mt-1">喜欢的话订阅继续无限生成</p>
          <Link
            href="/join"
            className="inline-block mt-3 rounded-lg bg-brand-600 text-white px-6 py-2 text-sm font-semibold hover:bg-brand-700"
          >
            订阅 $9.9/月
          </Link>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div
          className="rounded-2xl border-2 border-dashed border-border bg-background p-6 text-center cursor-pointer hover:border-brand-400 transition-colors"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const f = e.dataTransfer.files[0];
            if (f) handleFile(f);
          }}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt="预览"
              className="mx-auto max-h-64 rounded-xl object-cover"
            />
          ) : (
            <>
              <div className="text-4xl mb-3">📷</div>
              <p className="font-medium">点击或拖拽上传自拍</p>
              <p className="text-sm text-muted mt-1">JPG / PNG，最大 4MB</p>
            </>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 flex flex-col items-center justify-center min-h-[280px]">
          {loading ? (
            <div className="text-center">
              <div className="animate-spin text-4xl mb-3">⚡</div>
              <p className="font-medium">AI 生成中…</p>
              <p className="text-sm text-muted mt-1">约 15–30 秒</p>
            </div>
          ) : result ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={result}
                alt="生成结果"
                className="max-h-64 rounded-xl object-cover shadow-lg"
              />
              {demo && (
                <p className="text-xs text-amber-600 mt-3 bg-amber-50 px-3 py-1 rounded-lg">
                  演示模式 · 配置 REPLICATE_API_TOKEN 生成真实头像
                </p>
              )}
              <a
                href={result}
                download="headshot.png"
                className="mt-4 text-sm text-brand-500 hover:underline"
              >
                下载图片
              </a>
            </>
          ) : (
            <p className="text-muted text-sm">生成结果将显示在这里</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-foreground mb-3">选择风格</p>
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

      <button
        type="button"
        onClick={handleGenerate}
        disabled={loading || !preview || (trial !== null && !trial.canUse && !trial.isMember)}
        className="mt-6 w-full rounded-xl bg-brand-600 py-4 text-lg font-semibold text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? "生成中…" : "生成专业证件照"}
      </button>
    </div>
  );
}
