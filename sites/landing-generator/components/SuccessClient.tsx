"use client";

import { useEffect } from "react";
import Link from "next/link";

export function SuccessClient({
  isDemo,
  sessionId,
}: {
  isDemo: boolean;
  sessionId?: string;
}) {
  useEffect(() => {
    fetch("/api/member/activate", { method: "POST" });
  }, []);

  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <div className="text-6xl mb-6">🚀</div>
      <h1 className="text-3xl font-bold">欢迎加入 Landing 生成器！</h1>
      <p className="text-stone-600 mt-4">
        {isDemo ? "演示支付成功。" : "支付成功，"}你已是月度会员，可无限生成落地页并导出 HTML。
      </p>
      {sessionId && (
        <p className="text-xs text-stone-400 mt-2 font-mono break-all">
          订单: {sessionId}
        </p>
      )}
      <div className="mt-8 space-y-3">
        <Link
          href="/studio"
          className="block w-full bg-brand-600 text-white py-4 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
        >
          开始生成 Landing Page
        </Link>
        <Link href="/" className="block text-sm text-stone-500 hover:underline">
          返回首页
        </Link>
      </div>
    </div>
  );
}
