import Link from "next/link";
import SiteFrame from "./components/SiteFrame";

const features = [
  {
    number: "01",
    title: "Know before you connect",
    body: "See server status, latency, player count, and MOTD at a glance. Version detection handles the setup for you.",
  },
  {
    number: "02",
    title: "Chat without the clutter",
    body: "A focused chat interface with quick messages, commands, timestamps, and typography you can make your own.",
  },
  {
    number: "03",
    title: "More than a chat window",
    body: "Keep an eye on health and hunger, inspect inventory, and use essential movement controls when you need them.",
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

export default function Home() {
  return (
    <SiteFrame locale="en" alternateHref="/ko/">
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" />In active development for iOS</div>
          <h1>Your server.<br /><span>In your pocket.</span></h1>
          <p className="hero-lead">An unofficial, lightweight Minecraft Java Edition client built around chat—designed to feel at home on your phone.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#features">Explore MineChat</a>
            <Link className="button button-secondary" href="/support">Get support</Link>
          </div>
          <p className="platform-note">Native iOS first. Android planned.</p>
        </div>

        <div className="phone-stage" aria-label="MineChat app preview">
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
                  <p className="mini-label">CONNECTED</p>
                  <h2>Pooleaf</h2>
                </div>
                <div className="online-pill"><span />24</div>
              </div>
              <div className="server-card">
                <div className="pixel-server-icon"><i /><i /><i /><i /></div>
                <div>
                  <strong>play.pooleaf.com</strong>
                  <span>Welcome back, s8u</span>
                </div>
                <em>38 ms</em>
              </div>
              <div className="chat-stack">
                <div className="chat-row">
                  <div className="avatar avatar-green">A</div>
                  <div><span>Alex <time>9:39</time></span><p>Anyone heading to the village?</p></div>
                </div>
                <div className="chat-row">
                  <div className="avatar avatar-blue">S</div>
                  <div><span>Steve <time>9:40</time></span><p>I can meet you at spawn.</p></div>
                </div>
                <div className="system-message">River joined the game</div>
                <div className="chat-row">
                  <div className="avatar avatar-orange">R</div>
                  <div><span>River <time>9:41</time></span><p>Hey everyone 👋</p></div>
                </div>
              </div>
              <div className="composer"><span>Message</span><button aria-label="Send message">↑</button></div>
              <div className="tab-bar">
                <span className="active"><i className="tab-server" />Servers</span>
                <span><i className="tab-account" />Account</span>
                <span><i className="tab-settings" />Settings</span>
              </div>
            </div>
          </div>
          <div className="floating-card latency"><small>LATENCY</small><strong><span />38 ms</strong></div>
          <div className="floating-card privacy-chip"><span className="lock-icon" />Keychain secured</div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-grid">
          <span>Microsoft account sign-in</span>
          <span>Direct server connection</span>
          <span>15 supported languages</span>
        </div>
      </section>

      <section className="section shell" id="features">
        <div className="section-heading split-heading">
          <div><p className="eyebrow simple">Built for the moments between</p><h2>The useful parts,<br />without the weight.</h2></div>
          <p>MineChat is for checking in, staying connected, and taking care of the essentials—without launching the full game.</p>
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
            <span className="security-label label-two">Keychain</span>
          </div>
          <div className="security-copy">
            <p className="eyebrow simple">Your account stays yours</p>
            <h2>Sign in securely.<br />Connect directly.</h2>
            <p>MineChat uses Microsoft&apos;s official sign-in flow in the system browser. Your password never enters the app, and authentication tokens are stored in the iOS Keychain.</p>
            <ul className="check-list">
              <li><span>✓</span>No passwords collected by MineChat</li>
              <li><span>✓</span>No developer-operated account backend</li>
              <li><span>✓</span>Authentication tokens secured in iOS Keychain</li>
            </ul>
            <Link className="text-link" href="/privacy">Read the privacy policy <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section shell language-section">
        <div className="language-copy">
          <p className="eyebrow simple">Made to speak your language</p>
          <h2>Fifteen languages.<br />One familiar experience.</h2>
          <p>MineChat follows your device language on first launch, with an in-app setting whenever you want to switch.</p>
        </div>
        <div className="language-cloud" aria-label="Supported languages">
          {languages.map((language) => <span key={language}>{language}</span>)}
        </div>
      </section>

      <section className="cta-section shell">
        <div>
          <p className="eyebrow">Native. Focused. Thoughtful.</p>
          <h2>Java chat,<br />made for mobile.</h2>
          <p>MineChat is currently in active development for iOS.</p>
        </div>
        <Link className="button button-light" href="/support">Contact support</Link>
      </section>
    </SiteFrame>
  );
}
