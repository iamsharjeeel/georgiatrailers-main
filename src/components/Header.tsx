"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-black text-brand-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo priority onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-display text-sm tracking-[0.12em] transition-colors hover:text-brand-red ${
                  active ? "text-brand-red" : "text-brand-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.phoneHref}
            className="rounded-sm bg-brand-red px-4 py-2 font-display text-sm tracking-[0.1em] text-brand-white transition-colors hover:bg-brand-red-hover"
          >
            {site.phone}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-white/25 px-3 py-2 font-display text-sm tracking-[0.1em] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-display text-base tracking-[0.12em] text-brand-white hover:text-brand-red"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.phoneHref}
                className="inline-block rounded-sm bg-brand-red px-4 py-2 font-display text-sm tracking-[0.1em] text-brand-white"
              >
                Call {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
