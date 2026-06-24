import { VisaBrowser } from "@/components/VisaBrowser";

export default function VisasPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">数字游民签证数据库</h1>
        <p className="mt-2 text-stone-500">
          对比收入门槛、停留时长、税务政策。点击「查看完整详情」获取材料清单和实操建议。
        </p>
      </div>
      <VisaBrowser />
    </div>
  );
}
