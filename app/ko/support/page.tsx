import type { Metadata } from "next";
import SiteFrame from "../../components/SiteFrame";

export const metadata: Metadata = {
  title: "지원",
  description: "MineChat 도움말과 문의 정보입니다.",
  alternates: {
    canonical: "https://s8u.github.io/minechat-site/ko/support/",
    languages: {
      "en-US": "https://s8u.github.io/minechat-site/support/",
      "ko-KR": "https://s8u.github.io/minechat-site/ko/support/",
    },
  },
};

const topics = [
  { title: "로그인할 수 없음", body: "Safari에서 Microsoft 로그인 페이지를 열 수 있는지, 해당 계정이 Minecraft Java Edition을 보유하고 있는지 확인해 주세요." },
  { title: "서버에 접속할 수 없음", body: "서버 주소, 포트와 버전을 확인해 주세요. 일부 서버는 외부 클라이언트를 차단하거나 MineChat이 아직 지원하지 않는 기능을 요구할 수 있습니다." },
  { title: "화면이나 동작이 이상함", body: "앱을 다시 실행해 보세요. 문제가 계속되면 스크린샷과 화면에 표시된 오류 참조 코드를 이메일에 함께 적어 주세요." },
];

export default function KoreanSupportPage() {
  return (
    <SiteFrame locale="ko" alternateHref="/support">
      <div className="content-page">
        <section className="page-hero shell narrow-shell">
          <p className="eyebrow simple">지원</p>
          <h1>무엇을 도와드릴까요?</h1>
          <p>MineChat은 현재 개발 중입니다. 예상대로 동작하지 않는 부분이 있다면 자세한 내용을 보내 주세요.</p>
          <a className="button button-primary" href="mailto:0uh1004@gmail.com?subject=MineChat%20%EC%A7%80%EC%9B%90%20%EB%AC%B8%EC%9D%98">0uh1004@gmail.com으로 문의</a>
        </section>

        <section className="shell narrow-shell support-section">
          <h2>문의하기 전에</h2>
          <div className="info-grid">
            <div><span>1</span><strong>앱 버전</strong><p>MineChat 설정에서 확인할 수 있습니다.</p></div>
            <div><span>2</span><strong>iOS 버전</strong><p>iPhone 설정 → 일반 → 정보에서 확인할 수 있습니다.</p></div>
            <div><span>3</span><strong>오류 참조 코드</strong><p>오류 메시지에 표시된 짧은 참조 코드를 복사해 주세요.</p></div>
          </div>
          <div className="privacy-notice"><span className="lock-icon" /><p><strong>민감한 정보는 보내지 마세요.</strong> Microsoft 비밀번호, 액세스 토큰, 복구 코드 또는 서버 인증 정보를 이메일로 보내지 마세요.</p></div>
        </section>

        <section className="shell narrow-shell faq-section">
          <h2>자주 묻는 문제</h2>
          <div className="faq-list">
            {topics.map((topic) => <article key={topic.title}><h3>{topic.title}</h3><p>{topic.body}</p></article>)}
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
