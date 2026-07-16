# Handover — Georgia Trailer Outlet

## What changed

- Built Next.js App Router + Tailwind marketing site for A2P 10DLC SMS verification.
- Six routes: `/`, `/about`, `/contact`, `/privacy`, `/terms`, `/sms-terms`.
- Shared header/footer; footer includes all three legal links on every page.
- Contact form with separate marketing + transactional SMS consent checkboxes (unchecked by default), optional phone with consent-gated validation, success confirmation state.
- Legal pages use verbatim policy text with bolded no-sharing clauses.

## Why

Carrier reviewers need a live, legitimate business site with compliant SMS consent collection before approving messaging campaigns.

## Files touched

- `src/app/**` — pages, layout, globals
- `src/components/Header.tsx`, `Footer.tsx`, `ContactForm.tsx`
- `src/lib/site.ts` — shared business constants
- `next.config.ts` — Unsplash image remote pattern
- `README.md`, `HANDOVER.md`, `CHANGELOG.md`

## Pending

- Replace `FORM_ENDPOINT` in `src/components/ContactForm.tsx` with production webhook URL.
- [VERIFY] founding year / ownership history on About page.
- Point `georgiatraileroutlet.com` DNS to Vercel after deploy.
- Optional: swap Unsplash photos for real lot photography.
- Merge PR into `main` (or set Vercel Production Branch to the feature branch) — `main` currently only has README, so framework auto-detect fails until Next.js files are on the branch Vercel scans.
