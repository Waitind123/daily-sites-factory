import { features, styles } from "@/lib/data";

export function StyleGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {styles.map((s) => (
        <div
          key={s.id}
          className="card-glow card-glow-hover p-5"
        >
          <div className="mb-2 text-3xl">{s.preview}</div>
          <h3 className="font-semibold text-white">{s.name}</h3>
          <p className="mt-1 text-sm text-zinc-400">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((f) => (
        <div key={f.title} className="card-glow card-glow-hover p-5">
          <div className="mb-2 text-2xl">{f.icon}</div>
          <h3 className="font-semibold text-white">{f.title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{f.desc}</p>
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
        className={`w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-indigo-500 active:scale-[0.98] ${className}`}
      >
        立即订阅 · $9.9/月
      </button>
    </form>
  );
}

export function UploadDemo() {
  return (
    <div className="card-glow border-2 border-dashed border-white/15 p-8 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/20 text-3xl">
        📷
      </div>
      <p className="font-medium text-zinc-200">上传一张正面自拍</p>
      <p className="mt-1 text-sm text-zinc-500">JPG / PNG，光线充足，面部清晰</p>
      <a
        href="/studio"
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
      >
        进入 AI 工作室 →
      </a>
    </div>
  );
}
