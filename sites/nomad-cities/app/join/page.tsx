import { CheckoutButton, FeatureGrid } from "@/components/ui";
import { isDemoMode } from "@/lib/stripe";

export default function JoinPage() {
  const demo = isDemoMode();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">
          加入游民城市榜
        </h1>
        <p className="mt-3 text-stone-500">
          一个价格，全部功能。没有免费档，没有隐藏费用。
        </p>
      </div>

      {/* Pricing card */}
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
          <p className="mt-2 text-sm text-stone-400">约 ¥1.9/天 · 无自动续费</p>
        </div>

        <ul className="mt-8 space-y-3 text-sm">
          {[
            "200+ 城市完整排名与历史趋势",
            "生活成本、网速、安全、签证详情",
            "会员专属社区（Slack 邀请）",
            "目标城市价格变动邮件提醒",
            "每月新增城市深度报告",
            "数据 CSV 导出",
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

        {demo ? (
          <p className="mt-4 text-center text-xs text-amber-600 bg-amber-50 rounded-lg py-2 px-3">
            演示模式：未配置 Stripe 密钥，点击支付将模拟成功
          </p>
        ) : (
          <p className="mt-4 text-center text-xs text-green-700 bg-green-50 rounded-lg py-2 px-3">
            ✅ 已连接 Stripe 收款
          </p>
        )}

        <p className="mt-4 text-center text-xs text-stone-400">
          支持信用卡 · 支付宝 · 微信支付
        </p>
      </div>

      {/* What's NOT included */}
      <div className="mt-8 rounded-xl border border-stone-200 bg-stone-50 p-6">
        <h3 className="font-semibold text-stone-700 mb-3">我们没有免费档，因为：</h3>
        <ul className="space-y-2 text-sm text-stone-500">
          <li>· 数据采集和更新需要真实成本</li>
          <li>· 付费用户 = 高质量社区，没有广告和垃圾信息</li>
          <li>· 一人维护，简单定价模型才能持续运营</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6 text-center">包含功能</h2>
        <FeatureGrid />
      </div>
    </div>
  );
}
