import { LandingStudio } from "@/components/LandingStudio";

export default function StudioPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Landing Page 生成器</h1>
        <p className="mt-2 text-muted">
          填写产品信息，一键生成可部署的 HTML 落地页
        </p>
      </div>
      <LandingStudio />
    </div>
  );
}
