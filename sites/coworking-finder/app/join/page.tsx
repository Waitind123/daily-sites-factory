import { CheckoutButton, FeatureGrid } from "@/components/ui";
import { isDemoMode } from "@/lib/stripe";

export default function JoinPage() {
  const demo = isDemoMode();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">加入联合办公 Finder</h1>
        <p className="mt-3 text-stone-500">
          一个价格，全部功能。没有免费档，没有隐藏费用。
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
          <p className="mt-2 text-sm text-stone-400">约 $0.33/天 · 随时取消</p>
        </div>

        <ul className="mt-8 space-y-3 text-sm">
          {[
            "无限查看空间详情与预订链接",
            "120+ 全球联合办公空间",
            "WiFi 实测数据 + 视频会议友好筛选",
            "内部贴士：最佳时段、隐藏福利",
            "按城市/价格/设施智能筛选",
            "新空间上线邮件提醒",
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
          <li>· 每个空间的 WiFi 数据和价格需要实地验证</li>
          <li>· 付费用户 = 高质量社区，没有 spam 空间</li>
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
