import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Georgia Trailer Outlet, LLC — how we collect, use, and protect your information, including SMS opt-in data.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-brand-white py-14 sm:py-16">
      <article className="legal-prose mx-auto max-w-prose px-4 sm:px-6">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Effective Date: July 17, 2026</strong>
        </p>
        <p>
          Georgia Trailer Outlet, LLC (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) operates georgiatraileroutlet.com and is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website or use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          <strong>Information you provide directly:</strong> When you fill out
          our contact form, request information, or communicate with us, we may
          collect your name, email address, phone number, and any message
          content you submit.
        </p>
        <p>
          <strong>Information collected automatically:</strong> When you visit
          our website, we may automatically collect certain information about
          your device, including your IP address, browser type, operating
          system, referring URLs, and pages visited. This information is
          collected through cookies and similar technologies.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Provide, operate, and maintain our services</li>
          <li>
            Send you transactional communications related to your account or
            inquiries
          </li>
          <li>
            Send you marketing communications, only where you have expressly
            opted in
          </li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>SMS/Text Messaging Privacy</h2>
        <p>
          If you opt in to receive text messages from Georgia Trailer Outlet,
          LLC, we collect and use your mobile phone number solely to deliver the
          messages you have consented to receive.
        </p>
        <p>
          <strong>
            No mobile information will be shared with third parties or
            affiliates for marketing or promotional purposes. All other
            categories exclude text messaging originator opt-in data and
            consent; this information will not be shared with any third parties.
          </strong>
        </p>
        <p>
          Text messaging opt-in data and consent will not be sold, rented, or
          shared with any third party.
        </p>

        <h2>Sharing of Information</h2>
        <p>
          We do not sell your personal information. We may share your
          information only in the following circumstances:
        </p>
        <ul>
          <li>
            <strong>Service providers:</strong> With trusted vendors who perform
            services on our behalf (e.g., website hosting, email delivery),
            bound by confidentiality obligations. This excludes SMS opt-in data
            as stated above.
          </li>
          <li>
            <strong>Legal requirements:</strong> When required by law, subpoena,
            or to protect our legal rights.
          </li>
          <li>
            <strong>Business transfers:</strong> In connection with a merger,
            sale, or acquisition of all or part of our business, excluding SMS
            opt-in data and consent.
          </li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We retain your personal information only as long as necessary to
          fulfill the purposes described in this policy, unless a longer
          retention period is required by law.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable administrative, technical, and physical
          safeguards to protect your personal information. However, no method of
          transmission over the Internet is 100% secure.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, or
          delete your personal information. To exercise these rights, contact us
          using the information below.
        </p>

        <h2>Opting Out</h2>
        <ul>
          <li>
            <strong>SMS:</strong> Reply STOP to any text message to unsubscribe
            at any time. Reply HELP for assistance.
          </li>
          <li>
            <strong>Email:</strong> Use the unsubscribe link in any marketing
            email.
          </li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to individuals under 13, and we do not
          knowingly collect personal information from children under 13.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated
          version will be posted on this page with a revised effective date.
        </p>

        <h2>Contact Us</h2>
        <p>
          Georgia Trailer Outlet, LLC
          <br />
          45 Carson Loop Rd NW, Cartersville, GA 30121-4429
          <br />
          Phone: (770) 608-6882
          <br />
          Email: admin@georgiatraileroutlet.com
        </p>
      </article>
    </div>
  );
}
