import Link from "next/link";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string; session_id?: string }>;
}) {
  const params = await searchParams;
  const isDemo = params.demo === "true";

  return (
    <div className="mx-auto max-w-lg px-4 py-20 sm:px-6 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl font-bold text-foreground">欢迎加入！</h1>
      <p className="mt-4 text-muted">
        {isDemo
          ? "演示支付成功。配置 STRIPE_SECRET_KEY 后即可接入真实收款。"
          : "支付成功！会员邀请邮件将在 5 分钟内发送到你的邮箱。"}
      </p>

      {params.session_id && !isDemo && (
        <p className="mt-2 text-xs text-muted font-mono">
          订单号：{params.session_id}
        </p>
      )}

      <div className="mt-10 space-y-3">
        <Link
          href="/"
          className="block w-full rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white hover:bg-brand-700 transition-colors"
        >
          查看完整城市榜
        </Link>
        <p className="text-sm text-muted">
          社区邀请链接已发送至你的注册邮箱
        </p>
      </div>
    </div>
  );
}
