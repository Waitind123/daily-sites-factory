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
      <div className="text-6xl mb-6">📊</div>
      <h1 className="text-3xl font-bold">欢迎加入 SaaS 价格追踪！</h1>
      <p className="text-muted mt-4">
        {isDemo ? "演示支付成功。" : "支付成功，"}你已是月度会员，可无限追踪竞品定价变动。
      </p>
      {sessionId && (
        <p className="text-xs text-muted mt-2 font-mono break-all">
          订单: {sessionId}
        </p>
      )}
      <div className="mt-8 space-y-3">
        <Link
          href="/track"
          className="block w-full bg-brand-600 text-white py-4 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
        >
          开始追踪竞品
        </Link>
        <Link href="/" className="block text-sm text-muted hover:underline">
          返回首页
        </Link>
      </div>
    </div>
  );
}
