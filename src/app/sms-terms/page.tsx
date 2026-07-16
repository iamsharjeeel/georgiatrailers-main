import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Terms & Conditions",
  description:
    "SMS Terms & Conditions for Georgia Trailer Outlet, LLC text messaging programs.",
};

export default function SmsTermsPage() {
  return (
    <div className="bg-brand-white py-14 sm:py-16">
      <article className="legal-prose mx-auto max-w-prose px-4 sm:px-6">
        <h1>SMS Terms &amp; Conditions</h1>
        <p>
          <strong>Effective Date: July 17, 2026</strong>
        </p>
        <p>
          These SMS Terms &amp; Conditions govern text messaging programs
          offered by Georgia Trailer Outlet, LLC (&quot;we,&quot; &quot;us,&quot;
          or &quot;our&quot;).
        </p>

        <h2>1. Program Description</h2>
        <p>
          When you opt in to our text messaging programs, you may receive the
          following types of messages:
        </p>
        <ul>
          <li>
            <strong>Marketing Messages:</strong> Recurring automated promotional
            and personalized marketing text messages (e.g., SMS/MMS), including
            offers, promotions, and updates about our trailers, inventory, and
            services.
          </li>
          <li>
            <strong>Transactional Messages:</strong> Non-marketing text messages
            related to your account, order and delivery updates, appointment
            reminders, and service alerts.
          </li>
        </ul>
        <p>You may opt in to either or both message types independently.</p>

        <h2>2. Consent</h2>
        <p>
          By checking the applicable consent box on our contact form and
          providing your mobile phone number, you expressly consent to receive
          the corresponding category of text messages from Georgia Trailer
          Outlet, LLC at the number provided.
        </p>
        <p>
          <strong>Consent is not a condition of any purchase.</strong> You can
          use our products and services without opting in to text messages.
        </p>

        <h2>3. Message Frequency</h2>
        <p>
          Message frequency varies based on your interactions with us and the
          programs you have joined.
        </p>

        <h2>4. Message and Data Rates</h2>
        <p>
          Message and data rates may apply. Charges are billed by your mobile
          carrier according to your mobile plan. Please contact your carrier for
          details.
        </p>

        <h2>5. Opting Out</h2>
        <p>
          You can cancel the SMS service at any time by texting{" "}
          <strong>STOP</strong> to any message you receive from us. After you
          send STOP, we will send a final message confirming that you have been
          unsubscribed. After this, you will no longer receive SMS messages from
          us for that program.
        </p>
        <p>
          To rejoin, sign up again through our website form or reply START.
        </p>

        <h2>6. Help</h2>
        <p>
          If you are experiencing issues with the messaging program, reply{" "}
          <strong>HELP</strong> to any message for assistance, or contact us
          directly at (770) 608-6882 or admin@georgiatraileroutlet.com.
        </p>

        <h2>7. Carrier Liability</h2>
        <p>Carriers are not liable for delayed or undelivered messages.</p>

        <h2>8. Privacy</h2>
        <p>
          Your mobile information will be handled in accordance with our Privacy
          Policy, available at <Link href="/privacy">/privacy</Link>.{" "}
          <strong>
            No mobile information will be shared with third parties or
            affiliates for marketing or promotional purposes.
          </strong>{" "}
          Text messaging opt-in data and consent will not be sold, rented, or
          shared with any third party.
        </p>

        <h2>9. Changes</h2>
        <p>
          We may update these SMS Terms &amp; Conditions at any time. The
          current version will always be posted at this page.
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
