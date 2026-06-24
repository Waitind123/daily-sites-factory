import { IdeaBrowser } from "@/components/IdeaBrowser";

export default function IdeasPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900">创业点子库</h1>
        <p className="text-stone-500 mt-2">
          点击「深度分析」查看市场规模、竞品定价、MVP 路线图。免费体验 5 次。
        </p>
      </div>
      <IdeaBrowser />
    </div>
  );
}
