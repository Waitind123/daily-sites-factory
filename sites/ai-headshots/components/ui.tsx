import { features, styles } from "@/lib/data";

export function StyleGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {styles.map((s) => (
        <div
          key={s.id}
          className="rounded-xl border border-stone-200 bg-white p-5 hover:border-brand-300 transition-colors"
        >
          <div className="text-3xl mb-2">{s.preview}</div>
          <h3 className="font-semibold text-stone-900">{s.name}</h3>
          <p className="mt-1 text-sm text-stone-500">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function FeatureGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {features.map((f) => (
        <div key={f.title} className="rounded-xl border border-stone-200 bg-white p-5">
          <div className="text-2xl mb-2">{f.icon}</div>
          <h3 className="font-semibold text-stone-900">{f.title}</h3>
          <p className="mt-1 text-sm text-stone-500">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function CheckoutButton({ className = "" }: { className?: string }) {
  return (
    <form action="/api/checkout" method="POST">
      <button
        type="submit"
        className={`w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors active:scale-[0.98] ${className}`}
      >
        立即订阅 · $9.9/月
      </button>
    </form>
  );
}

export function UploadDemo() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 p-8 text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-3xl mb-4">
        📷
      </div>
      <p className="font-medium text-stone-700">上传一张正面自拍</p>
      <p className="text-sm text-stone-500 mt-1">JPG / PNG，光线充足，面部清晰</p>
      <a
        href="/studio"
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-brand-700 transition-colors"
      >
        进入 AI 工作室 →
      </a>
    </div>
  );
}
