import { InviteReferralCard } from "@/components/InviteReferralCard";
import { CheckoutButton, FeatureGrid } from "@/components/ui";
import { SharePromoKit } from "@/components/SharePromoKit";
import { getJoinCopy, getHomeCopy } from "@/lib/copy";
import { getLocale } from "@/lib/locale";
import { siteMeta } from "@/lib/site-meta";
import { getPaymentMode, isDemoMode } from "@/lib/payments";

export default async function JoinPage() {
  const locale = await getLocale();
  const c = getJoinCopy(locale);
  const home = getHomeCopy(locale);
  const demo = isDemoMode();
  const mode = getPaymentMode();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-8 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-center text-sm text-amber-900">
        <strong>{locale === "zh" ? "⏰ 7/13 Cursor 续费前" : "⏰ Before 7/13 Cursor renewal"}:</strong>{" "}
        {locale === "zh"
          ? "仅需 2 人订阅即可赚够 $20。5 次免费试用 → 满意立刻付款。"
          : "Just 2 subscribers = $20 goal. 5 free tries → pay if you like it."}
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{c.title}</h1>
        <p className="mt-3 text-muted">{c.subtitle}</p>
      </div>

      <div className="rounded-2xl border-2 border-brand-600 bg-surface p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-xl">
          {c.recommended}
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-brand-500 mb-2">{c.monthly}</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-foreground">
              {locale === "zh" ? "¥199" : "$29"}
            </span>
            <span className="text-muted">{c.perMonth}</span>
          </div>
          {locale === "zh" ? (
            <p className="mt-1 text-xs text-muted">
              {mode === "stripe"
                ? "Stripe · 信用卡 / 支付宝 / 微信"
                : "或美元 $29/月 · Polar 收款"}
            </p>
          ) : (
            <p className="mt-1 text-xs text-muted">
              {mode === "stripe"
                ? "Stripe · card / Alipay / WeChat"
                : "Or ¥69/mo in CNY via Alipay / WeChat"}
            </p>
          )}
          <p className="mt-2 text-sm text-muted">{c.vsPhotoAI}</p>
        </div>

        <ul className="mt-8 space-y-3 text-sm">
          {c.perks.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-brand-500 mt-0.5">✓</span>
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-3">
          <CheckoutButton label={c.subscribe} currency="usd" />
          <CheckoutButton
            label={c.subscribeCny}
            currency="cny"
            className="!bg-emerald-600 hover:!bg-emerald-700"
          />
        </div>

        {mode === "stripe" && (
          <p className="mt-4 text-center text-xs text-green-700 bg-green-50 rounded-lg py-2 px-3">
            ✅ 已连接 Stripe 收款
          </p>
        )}

        {mode === "polar" && (
          <p className="mt-4 text-center text-xs text-green-700 bg-green-50 rounded-lg py-2 px-3">
            {c.polarConnected}
          </p>
        )}

        {demo && (
          <p className="mt-4 text-center text-xs text-amber-600 bg-amber-50 rounded-lg py-2 px-3">
            {c.demoNote}
          </p>
        )}

        <p className="mt-4 text-center text-xs text-muted">
          {mode === "stripe"
            ? locale === "zh"
              ? "支付由 Stripe 处理 · 支持信用卡 / 支付宝 / 微信"
              : "Powered by Stripe · card / Alipay / WeChat"
            : c.checkoutNote}
        </p>
      </div>

      <div className="mt-8">
        <InviteReferralCard siteId={siteMeta.id} locale={locale} />
      </div>

      <div className="mt-8">
        <SharePromoKit locale={locale} />
      </div>

      <div className="mt-8 rounded-xl border border-border bg-background p-6">
        <h3 className="font-semibold text-foreground mb-3">{c.whyTitle}</h3>
        <ul className="space-y-2 text-sm text-muted">
          {c.whyItems.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-foreground mb-6 text-center">{c.includedTitle}</h2>
        <FeatureGrid features={home.features} />
      </div>
    </div>
  );
}
