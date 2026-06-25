import { CheckoutButton, FeatureGrid } from "@/components/ui";
import { isDemoMode } from "@/lib/stripe";

export default function JoinPage() {
  const demo = isDemoMode();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">加入证言墙</h1>
        <p className="mt-3 text-stone-500">
          一个价格，全部功能。Testimonial.to 去品牌的 1/4 价格。
        </p>
      </div>

      <div className="rounded-2xl border-2 border-brand-600 bg-white p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-xl">
          推荐
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-brand-600 mb-2">月度会员</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-stone-900">$9.9</span>
            <span className="text-stone-500">/月</span>
          </div>
          <p className="mt-2 text-sm text-stone-400">
            vs Testimonial.to $40/月去品牌 · 随时取消
          </p>
        </div>

        <ul className="mt-8 space-y-3 text-sm">
          {[
            "无限生成证言墙",
            "三种布局（网格/轮播/瀑布流）",
            "嵌入 HTML 代码导出",
            "收集好评邮件模板",
            "自定义主题色",
            "无第三方 JS，极速加载",
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
            演示模式：未配置支付密钥，点击支付将模拟成功
          </p>
        )}

        <p className="mt-4 text-center text-xs text-stone-400">
          Stripe / Polar 安全支付 · 支持信用卡
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-stone-200 bg-stone-50 p-6">
        <h3 className="font-semibold text-stone-700 mb-3">免费体验 5 次，之后订阅，因为：</h3>
        <ul className="space-y-2 text-sm text-stone-500">
          <li>· 嵌入代码需要持续维护和布局优化</li>
          <li>· 付费用户 = 认真做产品的 indie hacker</li>
          <li>· 一人维护，简单定价才能持续运营</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6 text-center">包含功能</h2>
        <FeatureGrid />
      </div>
    </div>
  );
}
