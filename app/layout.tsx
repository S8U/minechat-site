import type { Metadata } from "next";
import Link from "next/link";
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
};

function Brand() {
  return <Link className="brand" href="/" aria-label="MineChat home"><span className="brand-mark"><i /><i /><i /></span><span>MineChat</span></Link>;
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="shell header-inner">
            <Brand />
            <nav aria-label="Main navigation">
              <Link href="/#features">Features</Link>
              <Link href="/support">Support</Link>
              <Link href="/privacy">Privacy</Link>
            </nav>
            <span className="development-pill"><i />In development</span>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="shell footer-main">
            <div><Brand /><p>A lightweight Minecraft Java Edition client<br />designed for mobile.</p></div>
            <div className="footer-links"><div><strong>Product</strong><Link href="/#features">Features</Link><Link href="/support">Support</Link></div><div><strong>Legal</strong><Link href="/privacy">Privacy Policy</Link><a href="mailto:0uh1004@gmail.com">Contact</a></div></div>
          </div>
          <div className="shell footer-bottom">
            <span>© 2026 MineChat</span>
            <span>Not affiliated with Mojang Studios or Microsoft.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
