import Link from "next/link";
import { FeatureGrid } from "@/components/ui";
import { getPricing, isDemoMode } from "@/lib/payments";

export default function JoinPage() {
  const demo = isDemoMode();
  const pricing = getPricing();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">加入 AI 证件照</h1>
        <p className="mt-3 text-stone-500">一个价格，无限生成。没有免费档。</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {/* CNY */}
        <div className="rounded-2xl border-2 border-brand-600 bg-white p-6 shadow-lg relative">
          <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl">
            人民币
          </div>
          <div className="text-center mt-2">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold">¥699</span>
              <span className="text-stone-500">/年</span>
            </div>
            <p className="text-sm text-stone-400 mt-1">支付宝 / 微信 / 信用卡</p>
          </div>
          <form action="/api/checkout" method="POST" className="mt-6">
            <input type="hidden" name="currency" value="cny" />
            <button
              type="submit"
              className="w-full rounded-xl bg-brand-600 py-3.5 font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              人民币支付 ¥699
            </button>
          </form>
          {pricing.mode !== "stripe" && (
            <p className="text-xs text-amber-600 mt-2 text-center">
              需 Stripe 海外主体；无公司请用美元方案
            </p>
          )}
        </div>

        {/* USD */}
        <div className="rounded-2xl border-2 border-stone-300 bg-white p-6 shadow-lg relative">
          <div className="absolute top-0 right-0 bg-stone-700 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl">
            美元 · 推荐
          </div>
          <div className="text-center mt-2">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-stone-500">/年</span>
            </div>
            <p className="text-sm text-stone-400 mt-1">Polar / Stripe · 个人可注册</p>
          </div>
          <form action="/api/checkout" method="POST" className="mt-6">
            <input type="hidden" name="currency" value="usd" />
            <button
              type="submit"
              className="w-full rounded-xl bg-stone-800 py-3.5 font-semibold text-white hover:bg-stone-900 transition-colors"
            >
              美元支付 $99
            </button>
          </form>
          <p className="text-xs text-stone-400 mt-2 text-center">
            无公司用 Polar.sh 收款
          </p>
        </div>
      </div>

      <ul className="rounded-xl border border-stone-200 bg-stone-50 p-6 space-y-2 text-sm">
        {[
          "无限次 AI 头像生成",
          "全部 4 种风格 + 自定义背景",
          "高清 PNG 下载",
          "优先 GPU 队列",
          "照片 24h 自动删除",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-brand-600">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {demo && (
        <p className="mt-4 text-center text-xs text-amber-600 bg-amber-50 rounded-lg py-2 px-3">
          演示模式：点击支付将模拟成功并解锁 /studio
        </p>
      )}

      <div className="mt-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6 text-center">包含功能</h2>
        <FeatureGrid />
      </div>

      <p className="mt-8 text-center text-sm text-stone-500">
        支付说明见{" "}
        <a
          href="https://github.com/Waitind123/daily-sites-factory/blob/main/docs/PAYMENTS-NO-COMPANY.md"
          className="text-brand-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          无公司收款指南
        </a>
      </p>
    </div>
  );
}
