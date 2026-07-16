import Link from "next/link";
import { formatAddress, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-black text-brand-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.06em]">
            Georgia Trailer <span className="text-brand-red">Outlet</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            {site.positioning}
          </p>
        </div>

        <div>
          <p className="font-display text-sm tracking-[0.14em] text-brand-red">
            Visit Us
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            {site.tradeName}
            <br />
            {formatAddress(true)}
          </p>
          <p className="mt-3 text-sm">
            <a
              href={site.phoneHref}
              className="text-brand-white underline-offset-4 hover:underline"
            >
              {site.phone}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a
              href={site.emailHref}
              className="text-brand-white underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <p className="font-display text-sm tracking-[0.14em] text-brand-red">
            Store Hours
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            {site.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4">
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Legal"
          >
            <Link href="/privacy" className="hover:text-brand-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-white">
              Terms of Service
            </Link>
            <Link href="/sms-terms" className="hover:text-brand-white">
              SMS Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
