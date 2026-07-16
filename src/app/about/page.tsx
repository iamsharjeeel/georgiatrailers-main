import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Georgia Trailer Outlet in Cartersville, GA — brands we carry, financing, and how we serve the Atlanta and Southeast trailer market.",
};

export default function AboutPage() {
  return (
    <div className="bg-brand-white">
      <section className="bg-brand-black py-16 text-brand-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-display text-sm tracking-[0.22em] text-brand-red">
            About Us
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-[0.04em] sm:text-6xl">
            Built for haulers across{" "}
            <span className="text-brand-red">Georgia</span> and the Southeast
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            {site.positioning}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-brand-muted">
            <p>
              Georgia Trailer Outlet is a trailer dealership in Cartersville,
              Georgia serving contractors, landscapers, farmers, haulers, and
              homeowners who need dependable equipment without the runaround.
              From our lot at {formatAddress()}, customers can walk rows of
              in-stock trailers — equipment trailers, dump trailers, flatbeds,
              tilt decks, enclosed cargo trailers, utility trailers, and the
              attachments that finish the setup — instead of waiting on a
              factory order that may not match what the job actually needs.
            </p>
            <p>
              We focus on the greater Atlanta metro and the wider Southeast
              because this region moves dirt, lumber, steel, livestock feed, and
              tools every day. Whether you are pulling a skid steer to a
              Bartow County jobsite, delivering landscaping materials into
              Cobb County, or outfitting a mobile service business that runs
              between Atlanta and Chattanooga, the right trailer saves time and
              wear on your tow vehicle. Our team helps match GVWR, deck length,
              axle configuration, and ramp style to the way you actually haul —
              not a one-size-fits-all floor model.
            </p>
            <p>
              On the lot, expect a straightforward experience. You can inspect
              frames, decks, gates, and lighting up close, compare side-by-side
              builds, and ask detailed questions about tongue weight, hitch
              height, and payload. We keep the conversation practical: what you
              haul, how often you haul it, and which trailer will still feel
              right two seasons from now. Sales are no-pressure by design —
              walk the inventory, take measurements with your truck, and decide
              when you are ready.
            </p>
            <p>
              The brands we carry — Lamar, Diamond Cargo, Load Trail, RawMaxx,
              Behnke Trailers, and NEO — were selected for construction quality,
              parts availability, and reputations that hold up under commercial
              use. Equipment and dump buyers often lean toward Load Trail,
              RawMaxx, and Behnke for heavy work; enclosed and cargo customers
              frequently choose Diamond Cargo for secure, weather-protected
              storage on the road; utility and specialty builds from Lamar and
              NEO round out options for farms, shops, and weekend haulers.
            </p>
            <p>
              Financing should not be the reason a trailer stays on the lot. We
              offer affordable financing for everyone, with no credit checks and
              competitive rates, so cash-flow-conscious businesses and first-time
              buyers can get working iron without a lengthy approval maze. Ask
              our team about current programs when you visit or{" "}
              <Link
                href="/contact"
                className="font-semibold text-brand-red underline-offset-2 hover:underline"
              >
                contact us
              </Link>{" "}
              ahead of time.
            </p>
            <p>
              Georgia Trailer Outlet [VERIFY: founding year / ownership history]
              continues to grow inventory so Southeast customers can find what
              they need in stock. Store hours are Monday through Friday 9:00 AM
              to 5:00 PM, Saturday 9:00 AM to 1:00 PM, and closed Sunday. Call{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-brand-red underline-offset-2 hover:underline"
              >
                {site.phone}
              </a>{" "}
              or email{" "}
              <a
                href={site.emailHref}
                className="font-semibold text-brand-red underline-offset-2 hover:underline"
              >
                {site.email}
              </a>{" "}
              — we are ready to help you leave with the right trailer.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft">
              <Image
                src="/images/gto-lot.jpg"
                alt="aerial view of trailer lot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="bg-brand-soft p-6">
              <h2 className="font-display text-2xl tracking-[0.06em] text-brand-black">
                Service Area
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-muted">
                Cartersville and Bartow County, the Atlanta metro, North Georgia,
                and customers throughout the Southeast who travel for selection
                and price.
              </p>
              <h2 className="font-display mt-8 text-2xl tracking-[0.06em] text-brand-black">
                Brands on the Lot
              </h2>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm font-semibold tracking-wide text-brand-black">
                {site.brands.map((brand) => (
                  <li key={brand}>{brand}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
