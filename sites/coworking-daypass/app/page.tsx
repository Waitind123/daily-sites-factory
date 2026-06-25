import Link from "next/link";
import { FeatureGrid, PassPreviewTable } from "@/components/ui";
import { venues, testimonials } from "@/lib/data";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  const featured = venues.filter((v) => v.featured);

  return (
    <div>
      <HomeHero />

<section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold mb-6 text-center">今日热门日票</h2>
          <PassPreviewTable />
          <p className="text-center text-sm text-muted mt-4">
            完整库存和预订确认单需{" "}
            <Link href="/passes" className="text-brand-500 hover:underline">
              立即预订
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">三步订到靠谱工位</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "选城市", desc: "40+ 城市，查看今日实时库存和 WiFi 数据" },
              { step: "2", title: "订日票", desc: "一键生成预订确认单，含地址、价格和入场贴士" },
              { step: "3", title: "直接去", desc: "即时预订场地 walk-in 入场，提前预约场地按指引操作" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-brand-100 text-brand-500 font-bold text-lg flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-muted mt-1 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {featured.map((venue) => (
              <div key={venue.id} className="rounded-xl border border-border p-5 bg-background">
                <span className="text-3xl">{venue.logo}</span>
                <h3 className="font-semibold mt-2">{venue.name}</h3>
                <p className="text-sm text-muted">{venue.city}, {venue.country}</p>
                <p className="text-sm text-brand-500 font-medium mt-2">
                  {venue.dayPassPrice} · 今日余 {venue.spotsLeftToday} 位
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">用户怎么说</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-border p-5 bg-surface">
                <p className="text-foreground text-sm">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-3 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-muted"> · {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">会员功能</h2>
          <FeatureGrid />
        </div>
      </section>

      <section className="bg-brand-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Deskpass 覆盖有限，酒店会议室太贵</h2>
          <p className="mt-4 text-brand-100 text-lg">
            我们只要 $9.9/月。实时库存 + WiFi 实测 + 预订确认单，帮你落地 10 分钟找到工位。第一天收费，因为数据验证有成本。
          </p>
          <Link
            href="/join"
            className="inline-block mt-8 bg-surface text-brand-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-600/10 transition-colors"
          >
            立即订阅 $9.9/月
          </Link>
        </div>
      </section>
    </div>
  );
}
