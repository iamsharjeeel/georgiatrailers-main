import Image from "next/image";
import Link from "next/link";
import { formatAddress, site } from "@/lib/site";

const categories = [
  {
    title: "Equipment Trailers",
    description:
      "Heavy-duty equipment trailers built to haul skid steers, mini excavators, and jobsite gear safely across Georgia roads.",
    image: "/images/cat-equipment-blank.png",
    alt: "equipment trailer on the Georgia Trailer Outlet lot",
  },
  {
    title: "Dump Trailers",
    description:
      "Hydraulic dump trailers that make landscaping, construction debris, and material hauling faster with less labor.",
    image: "/images/cat-dump-blank.png",
    alt: "dump trailer ready for landscaping and construction hauling",
  },
  {
    title: "Flatbeds",
    description:
      "Open flatbed trailers for lumber, steel, pallets, and oversized loads that need flexible tie-down points.",
    image: "/images/cat-flatbed-gooseneck-blank.png",
    alt: "flatbed gooseneck trailer for heavy hauling",
  },
  {
    title: "Tilt Decks",
    description:
      "Low-angle tilt deck trailers that make loading cars, mowers, and equipment easier without a separate ramp set.",
    image: "/images/cat-tilt-blank.png",
    alt: "7x22 tilt deck trailer",
  },
  {
    title: "Enclosed Trailers",
    description:
      "Enclosed cargo trailers from Diamond Cargo and others — secure, weather-protected space for tools, inventory, and mobile businesses.",
    image: "/images/cat-cargo-blank.png",
    alt: "enclosed cargo trailer on the lot",
  },
  {
    title: "Utility Trailers",
    description:
      "Single and tandem axle utility trailers for weekend projects, landscaping, farm work, and everyday hauling around Cartersville.",
    image: "/images/cat-utility-load-trail.png",
    alt: "utility trailer parked outdoors",
  },
  {
    title: "Attachments",
    description:
      "Ramps, winches, spare tires, and trailer accessories that outfit your haul the way your work actually demands.",
    image: "/images/cat-attachment.png",
    alt: "trailer hitch and attachments",
  },
];

const pillars = [
  {
    title: "Top Rated Brands",
    body: "We stock Lamar, Diamond Cargo, Load Trail, RawMaxx, Behnke Trailers, and NEO — brands chosen for build quality, warranty support, and real-world durability.",
  },
  {
    title: "Easy Financing",
    body: "Affordable financing for everyone with no credit checks and competitive rates, so you can roll a trailer off the lot without waiting weeks for approval.",
  },
  {
    title: "No Pressure Sales",
    body: "Walk the lot, ask questions, and compare options. Our team helps you find the right trailer — not the highest-commission one.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-brand-black text-brand-white">
        <Image
          src="/images/main204.jpg"
          alt="aerial view of trailer lot"
          fill
          priority
          className="animate-hero-zoom object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/40" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
          <p className="animate-fade-up font-display text-sm tracking-[0.22em] text-brand-red">
            Georgia Trailer Outlet
          </p>
          <h1 className="animate-fade-up delay-1 mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-[0.04em] sm:text-6xl md:text-7xl">
            Hundreds of trailers in stock at{" "}
            <span className="text-brand-red">great prices</span>
          </h1>
          <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Equipment, dump, flatbed, tilt deck, enclosed, and utility trailers
            for contractors, landscapers, haulers, and homeowners across the
            Southeast.
          </p>
          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-sm bg-brand-red px-7 py-3.5 font-display text-sm tracking-[0.14em] text-brand-white transition-colors hover:bg-brand-red-hover"
            >
              Contact Us
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-sm border border-white/40 px-7 py-3.5 font-display text-sm tracking-[0.14em] text-brand-white transition-colors hover:border-brand-white hover:bg-white/5"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl tracking-[0.05em] text-brand-black sm:text-5xl">
              Trailers for every job
            </h2>
            <p className="mt-4 text-lg text-brand-muted">
              Browse categories we keep in stock on our Cartersville lot — ready
              for work tomorrow, not weeks from now.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article key={category.title} className="group">
                <Link
                  href="/contact"
                  className="block"
                  aria-label={`Contact us about ${category.title}`}
                >
                  <div className="relative mb-4 flex aspect-[5/3] items-center justify-center overflow-hidden bg-brand-soft transition-colors group-hover:bg-[#e9e9e9]">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="font-display text-2xl tracking-[0.06em] text-brand-black group-hover:text-brand-red">
                    {category.title}
                  </h3>
                </Link>
                <p className="mt-2 text-base leading-relaxed text-brand-muted">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-14 text-brand-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-center text-3xl tracking-[0.08em] sm:text-4xl">
            Quality <span className="text-brand-red">Brands</span>
          </h2>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {site.brands.map((brand) => (
              <li
                key={brand}
                className="font-display text-xl tracking-[0.12em] text-white/90 sm:text-2xl"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display max-w-2xl text-4xl tracking-[0.05em] text-brand-black sm:text-5xl">
            Why Georgia Trailer Outlet
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <div className="mb-4 h-1 w-12 bg-brand-red" />
                <h3 className="font-display text-2xl tracking-[0.06em] text-brand-black">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-brand-muted">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl tracking-[0.05em] text-brand-black sm:text-5xl">
              Visit the lot
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-muted">
              See hundreds of trailers in person at our Cartersville location.
              Bring your tow vehicle and we&apos;ll help you match capacity,
              deck length, and hitch setup.
            </p>
            <p className="mt-6 text-base font-semibold text-brand-black">
              {formatAddress()}
            </p>
            <ul className="mt-4 space-y-2 text-brand-muted">
              {site.hours.map((row) => (
                <li key={row.days}>
                  <span className="text-brand-black">{row.days}:</span>{" "}
                  {row.time}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-sm bg-brand-red px-7 py-3.5 font-display text-sm tracking-[0.14em] text-brand-white transition-colors hover:bg-brand-red-hover"
            >
              Get Directions &amp; Contact
            </Link>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden bg-brand-soft">
            <Image
              src="/images/gto-lot.jpg"
              alt="rows of trailers on the Georgia Trailer Outlet lot"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
