import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "../components/SiteFrame";

export const metadata: Metadata = {
  title: { absolute: "MineChat — 모바일을 위한 Java 채팅" },
  description: "채팅을 중심으로 만든 비공식 경량 Minecraft Java Edition 모바일 클라이언트입니다.",
  alternates: {
    canonical: "https://s8u.github.io/minechat-site/ko/",
    languages: {
      "en-US": "https://s8u.github.io/minechat-site/",
      "ko-KR": "https://s8u.github.io/minechat-site/ko/",
    },
  },
};

const features = [
  {
    number: "01",
    title: "접속 전에 상태 확인",
    body: "서버 상태, 지연 시간, 접속 인원과 MOTD를 한눈에 확인하세요. 버전 자동 감지가 설정을 간편하게 해줍니다.",
  },
  {
    number: "02",
    title: "채팅에만 집중",
    body: "빠른 입력과 명령어, 타임스탬프, 글꼴 설정을 갖춘 간결한 채팅 화면을 제공합니다.",
  },
  {
    number: "03",
    title: "채팅 그 이상의 기능",
    body: "체력과 배고픔을 확인하고, 인벤토리를 살펴보며, 필요할 때 기본적인 이동 조작을 사용할 수 있습니다.",
  },
];

const languages = [
  "English (US)",
  "한국어",
  "日本語",
  "Deutsch",
  "Français",
  "Español",
  "Português (Brasil)",
  "Italiano",
  "Nederlands",
  "Polski",
  "Türkçe",
  "Bahasa Indonesia",
  "繁體中文",
  "简体中文",
  "Русский",
];

export default function KoreanHome() {
  return (
    <SiteFrame locale="ko" alternateHref="/">
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" />iOS 버전 개발 중</div>
          <h1>내 서버를.<br /><span>내 손안에.</span></h1>
          <p className="hero-lead">채팅에 집중한 비공식 경량 Minecraft Java Edition 클라이언트. 모바일에 자연스럽게 설계했습니다.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#features">MineChat 살펴보기</a>
            <Link className="button button-secondary" href="/ko/support">지원</Link>
          </div>
          <p className="platform-note">iOS 네이티브 우선. Android 개발 예정.</p>
        </div>

        <div className="phone-stage" aria-label="MineChat 앱 미리보기">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="phone">
            <div className="dynamic-island" />
            <div className="phone-screen">
              <div className="phone-top">
                <span>9:41</span>
                <span className="phone-signals">● ◒ ▰</span>
              </div>
              <div className="app-title-row">
                <div>
                  <p className="mini-label">연결됨</p>
                  <h2>풀잎서버</h2>
                </div>
                <div className="online-pill"><span />24</div>
              </div>
              <div className="server-card">
                <div className="pixel-server-icon"><i /><i /><i /><i /></div>
                <div>
                  <strong>play.pooleaf.com</strong>
                  <span>s8u님, 다시 오셨네요</span>
                </div>
                <em>38 ms</em>
              </div>
              <div className="chat-stack">
                <div className="chat-row">
                  <div className="avatar avatar-green">A</div>
                  <div><span>Alex <time>9:39</time></span><p>마을로 가는 사람 있어요?</p></div>
                </div>
                <div className="chat-row">
                  <div className="avatar avatar-blue">S</div>
                  <div><span>Steve <time>9:40</time></span><p>스폰에서 만나요.</p></div>
                </div>
                <div className="system-message">River님이 게임에 참가했습니다</div>
                <div className="chat-row">
                  <div className="avatar avatar-orange">R</div>
                  <div><span>River <time>9:41</time></span><p>다들 안녕하세요 👋</p></div>
                </div>
              </div>
              <div className="composer"><span>메시지</span><button aria-label="메시지 전송">↑</button></div>
              <div className="tab-bar">
                <span className="active"><i className="tab-server" />서버</span>
                <span><i className="tab-account" />계정</span>
                <span><i className="tab-settings" />설정</span>
              </div>
            </div>
          </div>
          <div className="floating-card latency"><small>지연 시간</small><strong><span />38 ms</strong></div>
          <div className="floating-card privacy-chip"><span className="lock-icon" />키체인에 안전하게 보관</div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-grid">
          <span>Microsoft 계정 로그인</span>
          <span>서버에 직접 연결</span>
          <span>15개 언어 지원</span>
        </div>
      </section>

      <section className="section shell" id="features">
        <div className="section-heading split-heading">
          <div><p className="eyebrow simple">잠깐의 확인을 위해</p><h2>필요한 기능만,<br />가볍게.</h2></div>
          <p>MineChat으로 게임 전체를 실행하지 않고도 서버를 확인하고, 사람들과 대화하며, 필요한 작업을 처리할 수 있습니다.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <div className={`feature-visual visual-${feature.number}`} aria-hidden="true">
                {feature.number === "01" && <><div className="pulse-ring" /><div className="ping-dot" /><span>38 ms</span></>}
                {feature.number === "02" && <><div className="bubble b-one" /><div className="bubble b-two" /><div className="bubble b-three" /></>}
                {feature.number === "03" && <><div className="heart">♥</div><div className="inventory-grid">{Array.from({ length: 9 }).map((_, index) => <i key={index} />)}</div></>}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="security-section">
        <div className="shell security-grid">
          <div className="security-art" aria-hidden="true">
            <div className="shield"><span className="lock-icon large" /></div>
            <div className="security-line line-one" />
            <div className="security-line line-two" />
            <span className="security-label label-one">Microsoft</span>
            <span className="security-label label-two">키체인</span>
          </div>
          <div className="security-copy">
            <p className="eyebrow simple">계정은 오직 내 것</p>
            <h2>안전하게 로그인하고,<br />서버에 직접 연결.</h2>
            <p>MineChat은 시스템 브라우저에서 Microsoft의 공식 로그인 절차를 사용합니다. 비밀번호는 앱에 입력되지 않으며 인증 토큰은 iOS 키체인에 보관됩니다.</p>
            <ul className="check-list">
              <li><span>✓</span>MineChat은 비밀번호를 수집하지 않음</li>
              <li><span>✓</span>개발자가 운영하는 계정 백엔드 없음</li>
              <li><span>✓</span>인증 토큰은 iOS 키체인에 안전하게 보관</li>
            </ul>
            <Link className="text-link" href="/ko/privacy">개인정보 처리방침 읽기 <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section shell language-section">
        <div className="language-copy">
          <p className="eyebrow simple">내 언어로 자연스럽게</p>
          <h2>15개 언어로,<br />익숙한 경험.</h2>
          <p>MineChat은 처음 실행할 때 기기 언어를 따르며, 앱 설정에서 언제든 원하는 언어로 변경할 수 있습니다.</p>
        </div>
        <div className="language-cloud" aria-label="지원 언어">
          {languages.map((language) => <span key={language}>{language}</span>)}
        </div>
      </section>

      <section className="cta-section shell">
        <div>
          <p className="eyebrow">네이티브. 간결함. 세심함.</p>
          <h2>모바일을 위한,<br />Java 채팅.</h2>
          <p>MineChat iOS 버전은 현재 개발 중입니다.</p>
        </div>
        <Link className="button button-light" href="/ko/support">지원 문의</Link>
      </section>
    </SiteFrame>
  );
}
