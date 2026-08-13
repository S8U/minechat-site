import Link from "next/link";
import type { ReactNode } from "react";

type Locale = "en" | "ko";

const copy = {
  en: {
    languageName: "한국어",
    navLabel: "Main navigation",
    homeLabel: "MineChat home",
    features: "Features",
    support: "Support",
    privacy: "Privacy",
    development: "In development",
    description: <>A lightweight Minecraft Java Edition client<br />designed for mobile.</>,
    product: "Product",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    contact: "Contact",
    disclaimer: "Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.",
  },
  ko: {
    languageName: "English",
    navLabel: "주요 메뉴",
    homeLabel: "MineChat 홈",
    features: "기능",
    support: "지원",
    privacy: "개인정보",
    development: "개발 중",
    description: <>모바일을 위해 설계된<br />경량 Minecraft Java Edition 클라이언트</>,
    product: "제품",
    legal: "정책",
    privacyPolicy: "개인정보 처리방침",
    contact: "문의",
    disclaimer: "MineChat은 공식 Minecraft 제품이 아니며 Mojang 또는 Microsoft의 승인·제휴를 받지 않았습니다.",
  },
} as const;

function Brand({ locale }: { locale: Locale }) {
  const homeHref = locale === "ko" ? "/ko/" : "/";
  return <Link className="brand" href={homeHref} aria-label={copy[locale].homeLabel}><span className="brand-mark"><i /><i /><i /></span><span>MineChat</span></Link>;
}

export default function SiteFrame({ locale, alternateHref, children }: { locale: Locale; alternateHref: string; children: ReactNode }) {
  const text = copy[locale];
  const prefix = locale === "ko" ? "/ko" : "";

  return (
    <div lang={locale === "ko" ? "ko" : "en-US"}>
      <header className="site-header">
        <div className="shell header-inner">
          <Brand locale={locale} />
          <nav aria-label={text.navLabel}>
            <Link href={`${prefix}/#features`}>{text.features}</Link>
            <Link href={`${prefix}/support`}>{text.support}</Link>
            <Link href={`${prefix}/privacy`}>{text.privacy}</Link>
          </nav>
          <div className="header-tools">
            <Link className="language-link" href={alternateHref}>{text.languageName}</Link>
            <span className="development-pill"><i />{text.development}</span>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="shell footer-main">
          <div><Brand locale={locale} /><p>{text.description}</p></div>
          <div className="footer-links"><div><strong>{text.product}</strong><Link href={`${prefix}/#features`}>{text.features}</Link><Link href={`${prefix}/support`}>{text.support}</Link></div><div><strong>{text.legal}</strong><Link href={`${prefix}/privacy`}>{text.privacyPolicy}</Link><a href="mailto:0uh1004@gmail.com">{text.contact}</a></div></div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 MineChat</span>
          <span>{text.disclaimer}</span>
        </div>
      </footer>
    </div>
  );
}
