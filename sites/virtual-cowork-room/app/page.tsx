import Link from "next/link";
import { FeatureGrid, LiveStats, CoworkerAvatars } from "@/components/ui";
import { testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4 text-sm font-medium text-brand-600">
            今日已有 217 场共工会话正在进行
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            远程办公不孤独，
            <span className="text-brand-600"> 虚拟共工室陪你专注</span>
          </h1>
          <p className="mt-6 text-lg text-stone-500 text-balance">
            安静虚拟环境 + 番茄钟 + 白噪音 + 全球远程工作者在线陪伴。不用开摄像头，不用聊天，只要一起专注。$9.9/月无限使用。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/room"
              className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              进入共工室
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
            >
              订阅 · $9.9/月
            </Link>
          </div>
          <p className="mt-4 text-sm text-stone-400">免费体验 5 次共工会话 · 之后 $9.9/月</p>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold mb-6 text-center">实时共工数据</h2>
          <LiveStats />
          <div className="mt-8">
            <CoworkerAvatars />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">三步开始共工</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "选模式", desc: "深度专注 90 分钟、番茄钟 25 分钟、创意 45 分钟" },
              { step: "2", title: "开环境音", desc: "咖啡馆、雨声、图书馆、森林，营造专注氛围" },
              { step: "3", title: "一起专注", desc: "看到全球远程工作者在线，body doubling 提升效率" },
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
              <blockquote
                key={t.name}
                className="rounded-xl border border-stone-200 p-5 bg-stone-50"
              >
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
          <h2 className="text-3xl sm:text-4xl font-bold">
            Focusmate 要预约视频，咖啡馆太吵
          </h2>
          <p className="mt-4 text-brand-100 text-lg">
            我们只要 $9.9/月。打开 → 选模式 → 专注。没有摄像头，没有社交压力，只有安静的虚拟陪伴。第一天收费，因为服务器和带宽有成本。
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
