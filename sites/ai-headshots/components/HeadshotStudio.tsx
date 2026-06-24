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
        <Link href="/" className="text-sm text-zinc-500 transition-colors hover:text-zinc-300">
          ← 返回首页
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">AI 证件照工作室</h1>
        <p className="mt-1 text-zinc-400">上传自拍 → 选风格 → 30 秒出图</p>
      </div>

      {trial && !trial.isMember && (
        <div className="mb-4 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-3 text-center text-sm text-indigo-300">
          免费体验剩余 <strong>{trial.remaining}/{trial.limit}</strong> 次 · 用尽后需订阅 $9.9/月
        </div>
      )}

      {showPaywall && (
        <div className="mb-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-center">
          <p className="font-medium text-amber-200">免费 5 次已用完 🎉</p>
          <p className="mt-1 text-sm text-amber-300/80">喜欢的话订阅继续无限生成</p>
          <Link
            href="/join"
            className="mt-3 inline-block rounded-lg bg-indigo-600 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            订阅 $9.9/月
          </Link>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div
          className="card-glow cursor-pointer border-2 border-dashed border-white/15 p-6 text-center transition-colors hover:border-indigo-500/40"
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
              <div className="mb-3 text-4xl">📷</div>
              <p className="font-medium text-zinc-200">点击或拖拽上传自拍</p>
              <p className="mt-1 text-sm text-zinc-500">JPG / PNG，最大 4MB</p>
            </>
          )}
        </div>

        <div className="card-glow flex min-h-[280px] flex-col items-center justify-center p-6">
          {loading ? (
            <div className="text-center">
              <div className="mb-3 animate-spin text-4xl">⚡</div>
              <p className="font-medium text-white">AI 生成中…</p>
              <p className="mt-1 text-sm text-zinc-500">约 15–30 秒</p>
            </div>
          ) : result ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={result}
                alt="生成结果"
                className="max-h-64 rounded-xl object-cover shadow-lg shadow-indigo-500/20"
              />
              {demo && (
                <p className="mt-3 rounded-lg bg-amber-500/10 px-3 py-1 text-xs text-amber-400">
                  演示模式 · 配置 REPLICATE_API_TOKEN 生成真实头像
                </p>
              )}
              <a
                href={result}
                download="headshot.png"
                className="mt-4 text-sm text-indigo-400 hover:text-indigo-300"
              >
                下载图片
              </a>
            </>
          ) : (
            <p className="text-sm text-zinc-600">生成结果将显示在这里</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-medium text-zinc-300">选择风格</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {styles.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStyle(s.id)}
              className={`rounded-xl border p-3 text-left transition-colors ${
                style === s.id
                  ? "border-indigo-500 bg-indigo-500/10"
                  : "border-white/10 hover:border-indigo-500/30"
              }`}
            >
              <span className="text-xl">{s.preview}</span>
              <p className="mt-1 text-sm font-medium text-zinc-200">{s.name}</p>
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="mt-4 text-center text-sm text-red-400">{error}</p>
      )}

      <button
        type="button"
        onClick={handleGenerate}
        disabled={loading || !preview || (trial !== null && !trial.canUse && !trial.isMember)}
        className="mt-6 w-full rounded-xl bg-indigo-600 py-4 text-lg font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "生成中…" : "生成专业证件照"}
      </button>
    </div>
  );
}
