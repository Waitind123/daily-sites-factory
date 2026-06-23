import Link from "next/link";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string; session_id?: string }>;
}) {
  const params = await searchParams;
  const isDemo = params.demo === "true";

  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl font-bold">欢迎加入！</h1>
      <p className="text-stone-600 mt-4">
        {isDemo ? "演示支付成功。" : "支付成功，"}你已是 AI 证件照年费会员。
      </p>
      {params.session_id && (
        <p className="text-xs text-stone-400 mt-2 font-mono break-all">
          订单: {params.session_id}
        </p>
      )}
      <div className="mt-8 space-y-3">
        <Link
          href="/"
          className="block w-full bg-brand-600 text-white py-4 rounded-xl font-semibold hover:bg-brand-700 transition-colors"
        >
          开始生成证件照
        </Link>
        <p className="text-sm text-stone-500">上传功能将在会员验证后解锁</p>
      </div>
    </div>
  );
}
