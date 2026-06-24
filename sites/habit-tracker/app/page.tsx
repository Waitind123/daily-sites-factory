import Link from "next/link";
import { FeatureGrid, WeekChart } from "@/components/ui";
import { defaultHabits, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            已有 2,341 人在这里坚持打卡
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            养成习惯，
            <span className="text-brand-600"> 不用复杂 App</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            极简打卡界面，连续天数可视化，每日提醒。$29.9/月无限习惯，无免费档——因为专注才能坚持。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/track"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              开始打卡
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              订阅 · $29.9/月
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone-400">免费体验 5 次 · 之后 $29.9/月</p>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-bold mb-4">本周完成率</h2>
              <WeekChart />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">热门习惯</h2>
              <div className="space-y-2">
                {defaultHabits.slice(0, 4).map((h) => (
                  <div
                    key={h.id}
                    className="flex items-center justify-between rounded-lg border border-stone-200 px-4 py-3 bg-stone-50"
                  >
                    <span>
                      {h.icon} {h.name}
                    </span>
                    <span className="text-sm text-brand-600 font-medium">🔥 {h.streak} 天</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">三步开始</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "选习惯", desc: "从模板选或自定义，最多 3 个（会员无限）" },
              { step: "2", title: "每日打卡", desc: "打开页面点一下，3 秒完成" },
              { step: "3", title: "看 Streak", desc: "连续天数可视化，断了就重来" },
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

      <section className="bg-white border-y border-stone-200 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">用户怎么说</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-stone-200 p-5 bg-stone-50">
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
          <h2 className="text-3xl sm:text-4xl font-bold">Habitica 太游戏化，Notion 太复杂</h2>
          <p className="mt-4 text-brand-100 text-lg">
            我们只要 $29.9/月。打开 → 打卡 → 关闭。第一天收费，因为简单也需要持续维护。
          </p>
          <Link
            href="/join"
            className="inline-block mt-8 bg-white text-brand-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            立即订阅 $29.9/月
          </Link>
        </div>
      </section>
    </div>
  );
}
