import { CheckoutButton, FeatureGrid } from "@/components/ui";
import { isDemoMode } from "@/lib/stripe";

export default function JoinPage() {
  const demo = isDemoMode();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">加入 AI 证件照</h1>
        <p className="mt-3 text-stone-500">一个价格，无限生成。没有免费档。</p>
      </div>

      <div className="rounded-2xl border-2 border-brand-600 bg-white p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-xl">
          唯一方案
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-brand-600 mb-2">年度会员</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-stone-900">¥699</span>
            <span className="text-stone-500">/年</span>
          </div>
          <p className="mt-2 text-sm text-stone-400">约 ¥1.9/天 · 无限生成</p>
        </div>

        <ul className="mt-8 space-y-3 text-sm">
          {[
            "无限次 AI 头像生成",
            "全部 4 种风格 + 自定义背景",
            "高清 PNG 下载（1:1 / 4:5 / 证件照）",
            "批量生成 20+ 张供挑选",
            "优先 GPU 队列（30 秒出图）",
            "照片 24h 自动删除，隐私保障",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-brand-600 mt-0.5">✓</span>
              <span className="text-stone-700">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CheckoutButton />
        </div>

        {demo && (
          <p className="mt-4 text-center text-xs text-amber-600 bg-amber-50 rounded-lg py-2 px-3">
            演示模式：未配置 Stripe 密钥，点击支付将模拟成功
          </p>
        )}

        <p className="mt-4 text-center text-xs text-stone-400">
          支持信用卡 · 支付宝 · 微信支付
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-stone-200 bg-stone-50 p-6">
        <h3 className="font-semibold text-stone-700 mb-3">对比照相馆：</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-stone-500">传统照相馆</p>
            <ul className="mt-2 space-y-1 text-stone-400">
              <li>· ¥199-399 / 次</li>
              <li>· 预约排队 1-2 小时</li>
              <li>· 只给 4-8 张</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-brand-600">AI 证件照会员</p>
            <ul className="mt-2 space-y-1 text-stone-600">
              <li>· ¥699 / 年无限次</li>
              <li>· 30 秒出图</li>
              <li>· 每次 20+ 张可选</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6 text-center">包含功能</h2>
        <FeatureGrid />
      </div>
    </div>
  );
}
