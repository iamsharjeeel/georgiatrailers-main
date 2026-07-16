import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for georgiatraileroutlet.com, operated by Georgia Trailer Outlet, LLC.",
};

export default function TermsPage() {
  return (
    <div className="bg-brand-white py-14 sm:py-16">
      <article className="legal-prose mx-auto max-w-prose px-4 sm:px-6">
        <h1>Terms of Service</h1>
        <p>
          <strong>Effective Date: July 17, 2026</strong>
        </p>
        <p>
          Welcome to georgiatraileroutlet.com, operated by Georgia Trailer
          Outlet, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
          accessing or using our website, you agree to be bound by these Terms
          of Service. If you do not agree, please do not use our website.
        </p>

        <h2>Use of Our Website</h2>
        <p>
          You agree to use this website only for lawful purposes. You may not
          use it in any way that violates applicable laws or regulations,
          infringes the rights of others, or interferes with the operation of
          the site.
        </p>

        <h2>Products and Services</h2>
        <p>
          Georgia Trailer Outlet provides the sale of new trailers — including
          equipment trailers, dump trailers, flatbeds, tilt decks, enclosed
          cargo trailers, and utility trailers — along with attachments and
          financing options. All product and service descriptions, pricing, and
          availability are subject to change without notice. Contact us
          directly for current information.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, and
          images — is the property of Georgia Trailer Outlet, LLC or its
          licensors and is protected by copyright and trademark laws. You may
          not reproduce, distribute, or create derivative works without our
          written permission.
        </p>

        <h2>User Submissions</h2>
        <p>
          Information you submit through our contact form must be accurate and
          must not violate any third party&apos;s rights. We may use your
          submissions to respond to your inquiries as described in our Privacy
          Policy.
        </p>

        <h2>SMS/Text Messaging Terms</h2>
        <p>
          If you opt in to receive text messages from us, your participation is
          also governed by our SMS Terms &amp; Conditions, available at{" "}
          <Link href="/sms-terms">/sms-terms</Link>. Consent to receive text
          messages is not a condition of any purchase.
        </p>

        <h2>Disclaimers</h2>
        <p>
          This website and its content are provided &quot;as is&quot; without
          warranties of any kind, express or implied. We do not warrant that the
          website will be uninterrupted, error-free, or free of harmful
          components.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Georgia Trailer Outlet, LLC
          shall not be liable for any indirect, incidental, special, or
          consequential damages arising from your use of this website.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Georgia Trailer Outlet, LLC
          and its officers, employees, and agents from any claims arising out of
          your use of the website or violation of these Terms.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the content or privacy practices of those sites.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Georgia, without
          regard to conflict of law principles.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          website after changes constitutes acceptance of the revised Terms.
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
