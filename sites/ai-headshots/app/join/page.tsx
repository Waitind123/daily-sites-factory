import { FeatureGrid } from "@/components/ui";
import { getPricing, isDemoMode } from "@/lib/payments";

export default function JoinPage() {
  const demo = isDemoMode();
  const { usd, mode } = getPricing();

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">加入 AI 证件照</h1>
        <p className="mt-3 text-stone-500">免费体验 5 次，之后 $9.9/月订阅。</p>
      </div>

      <div className="rounded-2xl border-2 border-brand-600 bg-white p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-xl">
          月订阅
        </div>

        <div className="text-center mt-4">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-stone-900">${usd.amount}</span>
            <span className="text-stone-500 text-lg">/月</span>
          </div>
          <p className="mt-2 text-sm text-stone-400">Polar 安全支付 · 信用卡</p>
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
              <span className="text-brand-600 mt-0.5">✓</span>
              <span className="text-stone-700">{item}</span>
            </li>
          ))}
        </ul>

        <form action="/api/checkout" method="POST" className="mt-8">
          <input type="hidden" name="currency" value="usd" />
          <button
            type="submit"
            className="w-full rounded-xl bg-brand-600 py-4 text-lg font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            订阅 {usd.label}
          </button>
        </form>

        {mode === "polar" && (
          <p className="mt-4 text-center text-xs text-green-700 bg-green-50 rounded-lg py-2 px-3">
            ✅ 已连接 Polar 收款
          </p>
        )}

        {demo && (
          <p className="mt-4 text-center text-xs text-amber-600 bg-amber-50 rounded-lg py-2 px-3">
            演示模式：点击将模拟支付成功
          </p>
        )}

        <p className="mt-4 text-center text-xs text-stone-400">
          支付由 Polar 处理 · 个人开发者可收款
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6 text-center">包含功能</h2>
        <FeatureGrid />
      </div>
    </div>
  );
}
