import { CheckoutButton, FeatureGrid } from "@/components/ui";
import { isDemoMode } from "@/lib/stripe";

export default function JoinPage() {
  const demo = isDemoMode();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-10 text-center">
        <p className="nuwa-label mb-3 text-indigo-400">定价</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">加入游民城市榜</h1>
        <p className="mt-3 text-zinc-400">一个价格，全部功能。没有免费档，没有隐藏费用。</p>
      </div>

      <div className="card-glow relative overflow-hidden border-indigo-500/30 p-8">
        <div className="absolute right-0 top-0 rounded-bl-xl bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
          唯一方案
        </div>

        <div className="text-center">
          <p className="mb-2 text-sm font-medium text-indigo-400">年度会员</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-white">¥699</span>
            <span className="text-zinc-400">/年</span>
          </div>
          <p className="mt-2 text-sm text-zinc-500">约 ¥1.9/天 · 无自动续费</p>
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
              <span className="mt-0.5 text-indigo-400">✓</span>
              <span className="text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CheckoutButton />
        </div>

        {demo && (
          <p className="mt-4 rounded-lg bg-amber-500/10 px-3 py-2 text-center text-xs text-amber-400">
            演示模式：未配置 Stripe 密钥，点击支付将模拟成功
          </p>
        )}

        <p className="mt-4 text-center text-xs text-zinc-600">
          支持信用卡 · 支付宝 · 微信支付
        </p>
      </div>

      <div className="card-glow mt-8 p-6">
        <h3 className="mb-3 font-semibold text-zinc-200">我们没有免费档，因为：</h3>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li>· 数据采集和更新需要真实成本</li>
          <li>· 付费用户 = 高质量社区，没有广告和垃圾信息</li>
          <li>· 一人维护，简单定价模型才能持续运营</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-center text-xl font-bold text-white">包含功能</h2>
        <FeatureGrid />
      </div>
    </div>
  );
}
