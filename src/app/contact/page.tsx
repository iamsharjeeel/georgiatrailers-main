import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Georgia Trailer Outlet in Cartersville, GA — ask about inventory, financing, or visit the lot.",
};

export default function ContactPage() {
  return (
    <div className="bg-brand-white">
      <section className="bg-brand-black py-14 text-brand-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-display text-sm tracking-[0.22em] text-brand-red">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-[0.04em] sm:text-6xl">
            Talk to our team
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Looking for a specific trailer, financing details, or a time to
            visit the lot? Send a message and we&apos;ll respond within one
            business day.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl tracking-[0.06em] text-brand-black">
              Send a Message
            </h2>
            <p className="mt-3 mb-8 text-brand-muted">
              Tell us what you haul and we&apos;ll help narrow the right trailer
              from our in-stock selection.
            </p>
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="font-display text-3xl tracking-[0.06em] text-brand-black">
                Visit Us
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                {site.tradeName}
                <br />
                {formatAddress()}
              </p>
              <p className="mt-4">
                <a
                  href={site.phoneHref}
                  className="font-semibold text-brand-red underline-offset-2 hover:underline"
                >
                  {site.phone}
                </a>
              </p>
              <p className="mt-2">
                <a
                  href={site.emailHref}
                  className="font-semibold text-brand-red underline-offset-2 hover:underline"
                >
                  {site.email}
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl tracking-[0.08em] text-brand-black">
                Store Hours
              </h3>
              <ul className="mt-3 space-y-2 text-brand-muted">
                {site.hours.map((row) => (
                  <li key={row.days} className="flex justify-between gap-6">
                    <span>{row.days}</span>
                    <span className="text-brand-black">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl tracking-[0.08em] text-brand-black">
                Map
              </h3>
              <div className="mt-3 overflow-hidden rounded-sm border border-brand-border bg-brand-soft">
                <iframe
                  title="Map to Georgia Trailer Outlet in Cartersville, GA"
                  src={site.mapEmbedUrl}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-brand-red underline-offset-2 hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
