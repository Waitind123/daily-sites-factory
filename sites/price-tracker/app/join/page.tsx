import { CheckoutButton, FeatureGrid } from "@/components/ui";
import { isDemoMode } from "@/lib/stripe";

export default function JoinPage() {
  const demo = isDemoMode();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">加入 SaaS 价格追踪</h1>
        <p className="mt-3 text-muted">
          一个价格，无限追踪。没有按产品收费，没有隐藏费用。
        </p>
      </div>

      <div className="rounded-2xl border-2 border-brand-600 bg-surface p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-xl">
          唯一方案
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-brand-500 mb-2">月度会员</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-foreground">$9.9</span>
            <span className="text-muted">/月</span>
          </div>
          <p className="mt-2 text-sm text-muted">约 $0.33/天 · 随时取消</p>
        </div>

        <ul className="mt-8 space-y-3 text-sm">
          {[
            "无限竞品定价深度追踪",
            "90 天变动历史 + 趋势分析",
            "定价变动邮件提醒（24h 内）",
            "竞争分析 + 策略建议",
            "每日自动检查定价页",
            "新增产品追踪请求",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-brand-500 mt-0.5">✓</span>
              <span className="text-foreground">{item}</span>
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

        <p className="mt-4 text-center text-xs text-muted">
          Stripe 安全支付 · 支持信用卡
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-background p-6">
        <h3 className="font-semibold text-foreground mb-3">免费体验 5 次，之后订阅，因为：</h3>
        <ul className="space-y-2 text-sm text-muted">
          <li>· RivalPeek $49/月 0 客户，我们 $9.9/月 功能够 indie 用</li>
          <li>· 每日自动检查定价页需要服务器成本</li>
          <li>· 一人维护，$9.9 才能持续更新追踪数据</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-foreground mb-6 text-center">包含功能</h2>
        <FeatureGrid />
      </div>
    </div>
  );
}
