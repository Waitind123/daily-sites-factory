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
      <h1 className="text-3xl font-bold">欢迎加入远程工作板！</h1>
      <p className="text-muted mt-4">
        {isDemo ? "演示支付成功。" : "支付成功，"}你已是年度会员，可无限查看职位详情并发布招聘。
      </p>
      {sessionId && (
        <p className="text-xs text-muted mt-2 font-mono break-all">
          订单: {sessionId}
        </p>
      )}
      <div className="mt-8 space-y-3">
        <Link
          href="/jobs"
          className="block w-full bg-brand-600 text-white py-4 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
        >
          浏览远程职位
        </Link>
        <Link
          href="/post"
          className="block w-full border border-border text-foreground py-4 rounded-xl font-semibold hover:bg-background transition-colors"
        >
          发布招聘职位
        </Link>
        <Link href="/" className="block text-sm text-muted hover:underline">
          返回首页
        </Link>
      </div>
    </div>
  );
}
