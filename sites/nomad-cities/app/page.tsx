import Link from "next/link";
import { CityTable, CheckoutButton, FeatureGrid } from "@/components/ui";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <HomeHero />

{/* Stats bar */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-px bg-stone-200">
          {[
            { label: "覆盖城市", value: "200+" },
            { label: "数据维度", value: "12 项" },
            { label: "更新频率", value: "每日" },
            { label: "会员价格", value: "¥699/年" },
          ].map((s) => (
            <div key={s.label} className="bg-surface px-4 py-6 text-center">
              <div className="text-2xl font-bold text-foreground">{s.value}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rankings */}
      <section id="rankings" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">2026 年 6 月城市榜</h2>
            <p className="mt-1 text-muted">前 10 名免费查看，完整榜单需会员</p>
          </div>
          <Link
            href="/join"
            className="text-sm font-medium text-brand-500 hover:text-brand-500"
          >
            解锁全部 200+ 城市 →
          </Link>
        </div>
        <CityTable />
      </section>

      {/* Features */}
      <section className="bg-surface-muted/50 border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            会员能做什么
          </h2>
          <FeatureGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-foreground">
          一天 ¥1.9，省下数周调研时间
        </h2>
        <p className="mt-3 text-muted">
          无免费档。付费即完整访问，支持支付宝/微信/信用卡。
        </p>
        <div className="mt-8 max-w-sm mx-auto">
          <CheckoutButton />
        </div>
      </section>
    </div>
  );
}
