import Link from "next/link";
import { isMember } from "@/lib/member";

export default async function PostPage() {
  const member = await isMember();

  if (!member) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-2xl font-bold">发布职位需要会员</h1>
        <p className="text-stone-500 mt-3">
          ¥699/年可无限发布远程职位，直达高质量求职者。
        </p>
        <Link
          href="/join"
          className="inline-block mt-8 bg-brand-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-700"
        >
          加入会员 ¥699/年
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold mb-2">发布远程职位</h1>
      <p className="text-stone-500 mb-8">会员无限发帖，24h 内审核上线</p>

      <form className="space-y-5 rounded-xl border border-stone-200 bg-white p-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">职位名称</label>
          <input
            type="text"
            placeholder="Senior Frontend Engineer"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">公司名称</label>
          <input
            type="text"
            placeholder="Your Company"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">薪资范围</label>
          <input
            type="text"
            placeholder="$100k–$150k 或 ¥30k–¥50k/月"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">职位描述</label>
          <textarea
            rows={5}
            placeholder="描述岗位职责、要求和福利…"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">申请链接</label>
          <input
            type="url"
            placeholder="https://..."
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
        <button
          type="button"
          className="w-full rounded-xl bg-brand-600 py-3.5 font-semibold text-white hover:bg-brand-700 transition-colors"
        >
          提交发布（演示）
        </button>
        <p className="text-xs text-stone-400 text-center">
          MVP 演示：完整发帖功能将在下一版上线
        </p>
      </form>
    </div>
  );
}
