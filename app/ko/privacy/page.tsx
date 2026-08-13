import type { Metadata } from "next";
import SiteFrame from "../../components/SiteFrame";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "MineChat 모바일 앱과 웹사이트의 개인정보 처리방침입니다.",
  alternates: {
    canonical: "https://s8u.github.io/minechat-site/ko/privacy/",
    languages: {
      "en-US": "https://s8u.github.io/minechat-site/privacy/",
      "ko-KR": "https://s8u.github.io/minechat-site/ko/privacy/",
    },
  },
};

export default function KoreanPrivacyPage() {
  return (
    <SiteFrame locale="ko" alternateHref="/privacy">
      <div className="content-page legal-page">
        <section className="page-hero shell legal-shell">
          <p className="eyebrow simple">정책</p>
          <h1>개인정보 처리방침</h1>
          <p className="effective-date">시행일: 2026년 8월 14일</p>
          <p>MineChat은 사용자가 선택한 서비스와 Minecraft Java Edition 서버에 기기가 직접 연결되도록 설계되었습니다. 이 방침은 MineChat 앱과 웹사이트가 어떤 정보를 처리하는지 설명합니다.</p>
        </section>

        <article className="shell legal-shell legal-content">
          <section>
            <h2>1. 앱에서 처리하는 정보</h2>
            <p>MineChat은 기능 제공을 위해 사용자의 기기에서 다음 정보를 처리할 수 있습니다.</p>
            <ul>
              <li>Microsoft, Xbox 및 Minecraft 인증 토큰</li>
              <li>프로필 이름, UUID 및 스킨 이미지 URL과 같은 Minecraft 프로필 정보</li>
              <li>사용자가 저장한 서버 주소, 서버 이름, 앱 설정 및 빠른 입력</li>
              <li>서버 접속 중 교환되는 채팅 메시지, 게임 상태 및 서버 데이터</li>
            </ul>
            <p>인증 토큰은 iOS 키체인에 보관합니다. 그 밖의 앱 설정과 저장된 콘텐츠는 사용자의 기기에 로컬로 보관합니다.</p>
          </section>

          <section>
            <h2>2. 연결 방식</h2>
            <p>MineChat은 로그인과 Minecraft 프로필 확인을 위해 Microsoft 인증 절차를 사용하고 Microsoft, Xbox 및 Minecraft 서비스와 통신합니다. 또한 사용자가 선택한 Minecraft 서버에 직접 연결합니다.</p>
            <p>해당 외부 서비스와 서버 운영자는 각자의 개인정보 처리방침에 따라 계정, 기기, 네트워크, 채팅 또는 게임 정보를 처리할 수 있습니다. 서버 운영자는 IP 주소, 프로필 정보, 채팅 메시지, 명령어 및 서버로 전송된 기타 트래픽을 기록할 수 있습니다.</p>
          </section>

          <section>
            <h2>3. 개발자가 수집하는 정보</h2>
            <p>MineChat은 현재 개발자가 운영하는 계정 백엔드를 사용하지 않습니다. 개발자는 사용자의 Microsoft 비밀번호나 인증 토큰을 받지 않습니다.</p>
            <p>지원 문의를 보내면 개발자는 사용자의 이메일 주소와 문의 내용에 사용자가 자발적으로 포함한 정보를 받습니다. 비밀번호, 토큰, 복구 코드 또는 기타 민감한 인증 정보를 보내지 마세요.</p>
          </section>

          <section>
            <h2>4. 광고 및 분석</h2>
            <p>MineChat은 현재 개발 중입니다. 무료 출시 버전에는 배너 광고가 포함될 예정이며, 1회성 인앱 구매로 광고를 제거할 수 있습니다. 현재 개발 빌드에는 광고 SDK가 포함되어 있지 않습니다.</p>
            <p>광고 제공업체와 분석 또는 맞춤 광고 사용 여부는 아직 결정되지 않았습니다. 배포 버전에 광고를 포함하기 전에 제공업체, 데이터 처리 방식, 처리 목적, 사용자 선택권 및 보관 기간을 이 방침과 앱 스토어 개인정보 공개 항목에 반영하겠습니다.</p>
          </section>

          <section>
            <h2>5. 웹사이트 데이터</h2>
            <p>이 웹사이트는 의도적으로 광고 쿠키나 행동 분석 도구를 사용하지 않습니다. 호스팅 제공업체는 사이트 제공, 안정성 유지, 악용 방지 및 보안을 위해 IP 주소, 브라우저 종류, 요청 시각 및 요청한 페이지와 같은 제한적인 기술 정보를 자동으로 처리할 수 있습니다.</p>
          </section>

          <section>
            <h2>6. 보관 및 삭제</h2>
            <p>MineChat이 로컬에 저장한 정보는 관련 계정이나 서버를 제거하거나, 앱을 초기화하거나, 앱을 삭제할 때까지 사용자의 기기에 남습니다. 지원 문의 기록은 요청을 처리하고 답변 기록을 유지하는 데 합리적으로 필요한 기간 동안 보관할 수 있습니다. 외부 서비스와 Minecraft 서버 운영자는 각자의 보관 기간을 적용합니다.</p>
          </section>

          <section>
            <h2>7. 판매 및 공유</h2>
            <p>개발자는 사용자의 개인정보를 판매하지 않습니다. 정보는 사용자가 시작한 연결에 필요한 범위에서 앞서 설명한 외부 서비스 및 Minecraft 서버와 공유되거나, 법률에서 요구하는 경우에만 제공됩니다.</p>
          </section>

          <section>
            <h2>8. 아동 및 가족 계정</h2>
            <p>Microsoft 계정의 연령, 동의 및 가족 설정에 따라 Minecraft 서비스 이용이 제한될 수 있습니다. 부모 또는 보호자는 Microsoft의 가족 보호와 개인정보 안내를 확인하고 자녀의 외부 Minecraft 서버 이용을 지도해야 합니다.</p>
          </section>

          <section>
            <h2>9. 방침 변경</h2>
            <p>MineChat의 변경에 따라 이 방침을 갱신할 수 있습니다. 중요한 변경이 있을 때는 이 페이지 상단의 시행일을 수정합니다.</p>
          </section>

          <section>
            <h2>10. 문의</h2>
            <p>개인정보 관련 질문이나 요청은 <a href="mailto:0uh1004@gmail.com">0uh1004@gmail.com</a>으로 보내 주세요.</p>
          </section>
        </article>
      </div>
    </SiteFrame>
  );
}
