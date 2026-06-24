import Link from "next/link";
import { FeatureGrid, PassPreviewTable } from "@/components/ui";
import { venues, testimonials } from "@/lib/data";

export default function HomePage() {
  const featured = venues.filter((v) => v.featured);

  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            已有 847 位出差数字游民当日订到工位
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            落地新城市，
            <span className="text-brand-600"> 10 分钟订到今日日票</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            实时库存、WiFi 实测、视频会议友好筛选。不用盲找咖啡馆，不用扑空满座。$9.9/月无限预订。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/passes"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              查看今日可订日票
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              订阅 · $9.9/月
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone-400">免费体验 5 次日票预订 · 之后 $9.9/月</p>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold mb-6 text-center">今日热门日票</h2>
          <PassPreviewTable />
          <p className="text-center text-sm text-stone-400 mt-4">
            完整库存和预订确认单需{" "}
            <Link href="/passes" className="text-brand-600 hover:underline">
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
                <div className="mx-auto w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-bold text-lg flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-stone-500 mt-1 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {featured.map((venue) => (
              <div key={venue.id} className="rounded-xl border border-stone-200 p-5 bg-stone-50">
                <span className="text-3xl">{venue.logo}</span>
                <h3 className="font-semibold mt-2">{venue.name}</h3>
                <p className="text-sm text-stone-500">{venue.city}, {venue.country}</p>
                <p className="text-sm text-brand-700 font-medium mt-2">
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
              <blockquote key={t.name} className="rounded-xl border border-stone-200 p-5 bg-white">
                <p className="text-stone-700 text-sm">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-3 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-stone-400"> · {t.role}</span>
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
            className="inline-block mt-8 bg-white text-brand-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            立即订阅 $9.9/月
          </Link>
        </div>
      </section>
    </div>
  );
}
