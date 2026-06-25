import { CheckoutButton, FeatureGrid } from "@/components/ui";
import { isDemoMode } from "@/lib/stripe";

export default function JoinPage() {
  const demo = isDemoMode();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">加入报价单通</h1>
        <p className="mt-3 text-muted">
          一个价格，全部功能。HoneyBook 功能的 1/4 价格。
        </p>
      </div>

      <div className="rounded-2xl border-2 border-brand-600 bg-surface p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-xl">
          推荐
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-brand-500 mb-2">月度会员</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-foreground">$9.9</span>
            <span className="text-muted">/月</span>
          </div>
          <p className="mt-2 text-sm text-muted">
            vs HoneyBook $36/月 · 随时取消
          </p>
        </div>

        <ul className="mt-8 space-y-3 text-sm">
          {[
            "无限生成报价单",
            "标准合同条款模板",
            "自动发票生成",
            "多币种 USD/CNY/EUR",
            "4 种行业模板（开发/设计/咨询/内容）",
            "Markdown 导出，随时复制",
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
            演示模式：未配置支付密钥，点击支付将模拟成功
          </p>
        )}

        <p className="mt-4 text-center text-xs text-muted">
          Stripe / Polar 安全支付 · 支持信用卡
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-background p-6">
        <h3 className="font-semibold text-foreground mb-3">免费体验 5 次，之后订阅，因为：</h3>
        <ul className="space-y-2 text-sm text-muted">
          <li>· 合同模板需要法律审核和维护</li>
          <li>· 付费用户 = 认真做业务的自由职业者</li>
          <li>· 一人维护，简单定价才能持续运营</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-foreground mb-6 text-center">包含功能</h2>
        <FeatureGrid />
      </div>
    </div>
  );
}
