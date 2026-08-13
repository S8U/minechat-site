import type { Metadata } from "next";
import SiteFrame from "../components/SiteFrame";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the MineChat mobile application and website.",
};

export default function PrivacyPage() {
  return (
    <SiteFrame locale="en" alternateHref="/ko/privacy">
      <div className="content-page legal-page">
      <section className="page-hero shell legal-shell">
        <p className="eyebrow simple">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="effective-date">Effective August 14, 2026</p>
        <p>MineChat is built to connect your device directly to the services and Minecraft Java Edition servers you choose. This policy explains what information is handled by the MineChat app and this website.</p>
      </section>

      <article className="shell legal-shell legal-content">
        <section>
          <h2>1. Information handled by the app</h2>
          <p>MineChat may handle the following information on your device so the app can provide its features:</p>
          <ul>
            <li>Microsoft, Xbox, and Minecraft authentication tokens.</li>
            <li>Your Minecraft profile information, such as profile name, UUID, and skin image URL.</li>
            <li>Server addresses, server names, app settings, and quick messages you save.</li>
            <li>Chat messages, game state, and server data exchanged while connected to a server.</li>
          </ul>
          <p>Authentication tokens are stored in the iOS Keychain. Other app settings and saved content are stored locally on your device.</p>
        </section>

        <section>
          <h2>2. How connections work</h2>
          <p>MineChat uses Microsoft&apos;s authentication flow and communicates with Microsoft, Xbox, and Minecraft services to sign you in and retrieve your Minecraft profile. The app also connects directly to Minecraft servers that you choose.</p>
          <p>Those third parties and server operators may process account, device, network, chat, or gameplay information under their own privacy policies. A server operator may log your IP address, profile information, chat messages, commands, and other traffic sent to the server.</p>
        </section>

        <section>
          <h2>3. Information collected by the developer</h2>
          <p>MineChat does not currently operate a developer account backend. The developer does not receive your Microsoft password or authentication tokens.</p>
          <p>If you contact support, the developer receives the email address and any information you voluntarily include in your message. Please do not send passwords, tokens, recovery codes, or other sensitive credentials.</p>
        </section>

        <section>
          <h2>4. Advertising and analytics</h2>
          <p>MineChat is in active development. The planned free release will include banner advertising and offer a one-time in-app purchase to remove ads. The current development build does not include an advertising SDK.</p>
          <p>The advertising provider and whether analytics or personalized advertising will be used have not yet been selected. Before advertising is included in a distributed version, this policy and the applicable app store disclosures will be updated to identify the provider, data practices, purposes, user choices, and retention terms.</p>
        </section>

        <section>
          <h2>5. Website data</h2>
          <p>This website does not intentionally use advertising cookies or behavioral analytics. The hosting provider may automatically process limited technical information, such as your IP address, browser type, request time, and requested pages, for delivery, reliability, abuse prevention, and security.</p>
        </section>

        <section>
          <h2>6. Retention and deletion</h2>
          <p>Information stored locally by MineChat remains on your device until you remove the related account or server, reset the app, or delete the app. Support correspondence may be retained for as long as reasonably needed to resolve the request and maintain a record of the response. Third-party services and Minecraft server operators set their own retention periods.</p>
        </section>

        <section>
          <h2>7. Sale and sharing</h2>
          <p>The developer does not sell your personal information. Information is shared only as needed for the connections you initiate, with the third-party services and Minecraft servers described above, or when required by law.</p>
        </section>

        <section>
          <h2>8. Children and family accounts</h2>
          <p>Microsoft account age, consent, and family settings may affect access to Minecraft services. Parents and guardians should review Microsoft&apos;s family safety and privacy information and supervise a child&apos;s use of third-party Minecraft servers.</p>
        </section>

        <section>
          <h2>9. Changes to this policy</h2>
          <p>This policy may be updated as MineChat changes. The effective date at the top of this page will be revised when material updates are made.</p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>For privacy questions or requests, email <a href="mailto:0uh1004@gmail.com">0uh1004@gmail.com</a>.</p>
        </section>
      </article>
      </div>
    </SiteFrame>
  );
}
