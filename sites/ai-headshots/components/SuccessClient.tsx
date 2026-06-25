"use client";

import { useEffect } from "react";
import Link from "next/link";

export function SuccessClient({
  isDemo,
  sessionId,
  currency,
}: {
  isDemo: boolean;
  sessionId?: string;
  currency?: string;
}) {
  useEffect(() => {
    fetch("/api/member/activate", { method: "POST" });
  }, []);

  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <div className="mb-6 text-6xl">🎉</div>
      <h1 className="text-3xl font-bold text-white">欢迎加入！</h1>
      <p className="mt-4 text-zinc-400">
        {isDemo ? "演示支付成功。" : "支付成功，"}你已是 AI 证件照年费会员。
      </p>
      {currency && (
        <p className="mt-1 text-sm text-zinc-500">币种：{currency.toUpperCase()}</p>
      )}
      {sessionId && (
        <p className="mt-2 break-all font-mono text-xs text-zinc-600">
          订单: {sessionId}
        </p>
      )}
      <div className="mt-8 space-y-3">
        <Link
          href="/studio"
          className="block w-full rounded-xl bg-indigo-600 py-4 font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          进入 AI 工作室生成证件照
        </Link>
        <Link href="/" className="block text-sm text-zinc-500 hover:text-zinc-300">
          返回首页
        </Link>
      </div>
    </div>
  );
}
