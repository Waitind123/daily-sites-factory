import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getLocale } from "@/lib/locale";
import { buildLocaleMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildLocaleMetadata(locale);
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
