import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://s8u.github.io/minechat-site/";
const socialImage = `${siteUrl}og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "MineChat — Java chat, made for mobile", template: "%s — MineChat" },
  description: "A lightweight Minecraft Java Edition client built around chat, designed natively for mobile.",
  openGraph: {
    title: "MineChat — Java chat, made for mobile",
    description: "Your Minecraft Java server, in your pocket.",
    url: siteUrl,
    siteName: "MineChat",
    images: [{ url: socialImage, width: 1718, height: 910, alt: "MineChat app preview" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "MineChat", description: "Java chat, made for mobile.", images: [socialImage] },
  alternates: {
    canonical: siteUrl,
    languages: { "en-US": siteUrl, "ko-KR": `${siteUrl}ko/` },
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
