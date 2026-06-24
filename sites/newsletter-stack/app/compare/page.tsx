import { CompareBrowser } from "@/components/CompareBrowser";

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900">Newsletter 工具深度对比</h1>
        <p className="mt-2 text-stone-500">
          选择工具查看定价、功能矩阵、迁移指南和真实成本分析
        </p>
      </div>
      <CompareBrowser />
    </div>
  );
}
