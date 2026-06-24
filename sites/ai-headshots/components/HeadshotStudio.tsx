"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { styles } from "@/lib/data";

export function HeadshotStudio() {
  const [preview, setPreview] = useState<string | null>(null);
  const [style, setStyle] = useState("corporate");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [demo, setDemo] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: preview, style }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.code === "NOT_MEMBER") {
          setError("请先加入会员");
          return;
        }
        throw new Error(data.error || "生成失败");
      }
      setResult(data.url);
      setDemo(data.demo);
    } catch (e) {
      setError(e instanceof Error ? e.message : "未知错误");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <div className="mb-6">
        <Link href="/" className="text-sm text-stone-500 hover:text-stone-700">
          ← 返回首页
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold mt-2">AI 证件照工作室</h1>
        <p className="text-stone-500 mt-1">上传自拍 → 选风格 → 30 秒出图</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* 上传区 */}
        <div
          className="rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 p-6 text-center cursor-pointer hover:border-brand-400 transition-colors"
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
              <p className="text-sm text-stone-500 mt-1">JPG / PNG，最大 4MB</p>
            </>
          )}
        </div>

        {/* 结果区 */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 flex flex-col items-center justify-center min-h-[280px]">
          {loading ? (
            <div className="text-center">
              <div className="animate-spin text-4xl mb-3">⚡</div>
              <p className="font-medium">AI 生成中…</p>
              <p className="text-sm text-stone-500 mt-1">约 15–30 秒</p>
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
                className="mt-4 text-sm text-brand-600 hover:underline"
              >
                下载图片
              </a>
            </>
          ) : (
            <p className="text-stone-400 text-sm">生成结果将显示在这里</p>
          )}
        </div>
      </div>

      {/* 风格选择 */}
      <div className="mt-6">
        <p className="text-sm font-medium text-stone-700 mb-3">选择风格</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {styles.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStyle(s.id)}
              className={`rounded-xl border p-3 text-left transition-colors ${
                style === s.id
                  ? "border-brand-600 bg-brand-50"
                  : "border-stone-200 hover:border-brand-300"
              }`}
            >
              <span className="text-xl">{s.preview}</span>
              <p className="text-sm font-medium mt-1">{s.name}</p>
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="mt-4 text-red-600 text-sm text-center">
          {error}
          {error.includes("会员") && (
            <>
              {" "}
              <Link href="/join" className="underline">
                立即加入
              </Link>
            </>
          )}
        </p>
      )}

      <button
        type="button"
        onClick={handleGenerate}
        disabled={loading || !preview}
        className="mt-6 w-full rounded-xl bg-brand-600 py-4 text-lg font-semibold text-white hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? "生成中…" : "生成专业证件照"}
      </button>
    </div>
  );
}
