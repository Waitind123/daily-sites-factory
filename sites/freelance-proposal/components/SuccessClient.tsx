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
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl font-bold">欢迎加入报价单通！</h1>
      <p className="text-muted mt-4">
        {isDemo ? "演示支付成功。" : "支付成功，"}你已是会员，可无限生成报价单、合同和发票。
      </p>
      {sessionId && (
        <p className="text-xs text-muted mt-2 font-mono break-all">
          订单: {sessionId}
        </p>
      )}
      <div className="mt-8 space-y-3">
        <Link
          href="/create"
          className="block w-full bg-brand-600 text-white py-4 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
        >
          创建报价单
        </Link>
        <Link href="/" className="block text-sm text-muted hover:underline">
          返回首页
        </Link>
      </div>
    </div>
  );
}
