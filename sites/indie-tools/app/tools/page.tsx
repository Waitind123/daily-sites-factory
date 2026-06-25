import { ToolBrowser } from "@/components/ToolBrowser";

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">独立开发者工具目录</h1>
        <p className="text-muted mt-2">
          点击「深度评测」查看定价对比、替代方案、接入指南。免费体验 5 次。
        </p>
      </div>
      <ToolBrowser />
    </div>
  );
}
