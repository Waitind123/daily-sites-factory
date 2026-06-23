import Link from "next/link";
import { CityTable, CheckoutButton, FeatureGrid } from "@/components/ui";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 text-center">
        <p className="mb-4 text-sm font-medium text-brand-600">
          已有 1,247 位数字游民在用
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl text-balance">
          选下一个基地城市，
          <br />
          <span className="text-brand-600">用数据说话</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-500 text-balance">
          生活成本、网速、安全、签证友好度——200+ 城市实时排名。
          不再靠 Reddit 帖子猜，一天搞定选址决策。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/join"
            className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
          >
            加入会员 ¥699/年
          </Link>
          <a
            href="#rankings"
            className="text-stone-600 hover:text-stone-900 text-sm font-medium"
          >
            先看免费排名 ↓
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-px bg-stone-200">
          {[
            { label: "覆盖城市", value: "200+" },
            { label: "数据维度", value: "12 项" },
            { label: "更新频率", value: "每日" },
            { label: "会员价格", value: "¥699/年" },
          ].map((s) => (
            <div key={s.label} className="bg-white px-4 py-6 text-center">
              <div className="text-2xl font-bold text-stone-900">{s.value}</div>
              <div className="mt-1 text-sm text-stone-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rankings */}
      <section id="rankings" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">2026 年 6 月城市榜</h2>
            <p className="mt-1 text-stone-500">前 10 名免费查看，完整榜单需会员</p>
          </div>
          <Link
            href="/join"
            className="text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            解锁全部 200+ 城市 →
          </Link>
        </div>
        <CityTable />
      </section>

      {/* Features */}
      <section className="bg-stone-100/50 border-t border-stone-200">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">
            会员能做什么
          </h2>
          <FeatureGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-stone-900">
          一天 ¥1.9，省下数周调研时间
        </h2>
        <p className="mt-3 text-stone-500">
          无免费档。付费即完整访问，支持支付宝/微信/信用卡。
        </p>
        <div className="mt-8 max-w-sm mx-auto">
          <CheckoutButton />
        </div>
      </section>
    </div>
  );
}
