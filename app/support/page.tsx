import type { Metadata } from "next";
import SiteFrame from "../components/SiteFrame";

export const metadata: Metadata = {
  title: "Support",
  description: "Help and contact information for MineChat.",
};

const topics = [
  { title: "Can’t sign in", body: "Check that Safari can open Microsoft’s sign-in page and that your Minecraft Java Edition entitlement is active on the account." },
  { title: "Can’t reach a server", body: "Confirm the address, port, and server version. Some servers may block clients or require features that MineChat does not yet support." },
  { title: "Something looks wrong", body: "Restart the app and try again. If the issue continues, include a screenshot and the error reference in your email." },
];

export default function SupportPage() {
  return (
    <SiteFrame locale="en" alternateHref="/ko/support">
      <div className="content-page">
      <section className="page-hero shell narrow-shell">
        <p className="eyebrow simple">Support</p>
        <h1>How can we help?</h1>
        <p>MineChat is still in active development. If something is not working as expected, send us the details and we’ll take a look.</p>
        <a className="button button-primary" href="mailto:0uh1004@gmail.com?subject=MineChat%20Support">Email 0uh1004@gmail.com</a>
      </section>

      <section className="shell narrow-shell support-section">
        <h2>Before you email</h2>
        <div className="info-grid">
          <div><span>1</span><strong>App version</strong><p>Find it in MineChat Settings.</p></div>
          <div><span>2</span><strong>iOS version</strong><p>Found in iPhone Settings → General → About.</p></div>
          <div><span>3</span><strong>Error reference</strong><p>Copy the short reference shown in the error message.</p></div>
        </div>
        <div className="privacy-notice"><span className="lock-icon" /><p><strong>Keep sensitive information private.</strong> Never email your Microsoft password, access token, recovery code, or server credentials.</p></div>
      </section>

      <section className="shell narrow-shell faq-section">
        <h2>Common questions</h2>
        <div className="faq-list">
          {topics.map((topic) => <article key={topic.title}><h3>{topic.title}</h3><p>{topic.body}</p></article>)}
        </div>
      </section>
      </div>
    </SiteFrame>
  );
}
