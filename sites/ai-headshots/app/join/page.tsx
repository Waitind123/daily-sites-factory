import { FeatureGrid } from "@/components/ui";
import { getPricing, isDemoMode } from "@/lib/payments";

export default function JoinPage() {
  const demo = isDemoMode();
  const { usd, mode } = getPricing();

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10 text-center">
        <p className="nuwa-label mb-3 text-indigo-400">定价</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">加入 AI 证件照</h1>
        <p className="mt-3 text-zinc-400">免费体验 5 次，之后 $9.9/月订阅。</p>
      </div>

      <div className="card-glow relative overflow-hidden border-indigo-500/30 p-8">
        <div className="absolute right-0 top-0 rounded-bl-xl bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
          月订阅
        </div>

        <div className="mt-4 text-center">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-white">${usd.amount}</span>
            <span className="text-lg text-zinc-400">/月</span>
          </div>
          <p className="mt-2 text-sm text-zinc-500">Polar 安全支付 · 信用卡</p>
        </div>

        <ul className="mt-8 space-y-3 text-sm">
          {[
            "无限次 AI 头像生成",
            "全部 4 种风格",
            "高清 PNG 下载",
            "优先 GPU 队列",
            "随时取消订阅",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 text-indigo-400">✓</span>
              <span className="text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>

        <form action="/api/checkout" method="POST" className="mt-8">
          <input type="hidden" name="currency" value="usd" />
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-4 text-lg font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            订阅 {usd.label}
          </button>
        </form>

        {mode === "polar" && (
          <p className="mt-4 rounded-lg bg-emerald-500/10 px-3 py-2 text-center text-xs text-emerald-400">
            ✅ 已连接 Polar 收款
          </p>
        )}

        {demo && (
          <p className="mt-4 rounded-lg bg-amber-500/10 px-3 py-2 text-center text-xs text-amber-400">
            演示模式：点击将模拟支付成功
          </p>
        )}

        <p className="mt-4 text-center text-xs text-zinc-600">
          支付由 Polar 处理 · 个人开发者可收款
        </p>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-center text-xl font-bold text-white">包含功能</h2>
        <FeatureGrid />
      </div>
    </div>
  );
}
