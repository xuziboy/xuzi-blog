import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const siteUrl = new URL(protocol + "://" + host);
  const socialImage = new URL("/og-v2.png", siteUrl).toString();

  return {
    metadataBase: siteUrl,
    title: "旭子｜把复杂的事，写得简单一点",
    description: "开发工程师旭子关于产品、技术与生活的长期笔记。",
    openGraph: {
      title: "旭子｜把复杂的事，写得简单一点",
      description: "关于产品、技术与生活的长期笔记。",
      type: "website",
      url: siteUrl,
      images: [{ url: socialImage, width: 1792, height: 928, alt: "旭子的个人博客" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "旭子｜把复杂的事，写得简单一点",
      description: "关于产品、技术与生活的长期笔记。",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
