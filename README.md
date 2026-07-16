# Georgia Trailer Outlet

Production marketing site for **Georgia Trailer Outlet, LLC** — built for A2P 10DLC / toll-free SMS campaign verification.

Stack: Next.js (App Router) + TypeScript + Tailwind CSS. No CMS, database, or auth.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About Us |
| `/contact` | Contact + SMS consent form |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/sms-terms` | SMS Terms & Conditions |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

```bash
npm run lint
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new) — framework preset: Next.js (zero config).
3. Deploy. Custom domain: point `georgiatraileroutlet.com` to the Vercel project.

Or from the CLI:

```bash
npx vercel
```

## Contact form endpoint (`FORM_ENDPOINT`)

The contact form posts to a configurable constant at the top of:

`src/components/ContactForm.tsx`

```ts
const FORM_ENDPOINT = "https://example.com/form-stub";
```

- Default stub accepts submissions locally (success state, no network).
- Replace with your webhook URL (e.g. Formspree, Make, Zapier, custom API) when ready.
- Payload JSON: `fullName`, `email`, `phone`, `message`, `marketingConsent`, `transactionalConsent`.

## SMS consent rules (compliance)

- Phone is optional unless a consent checkbox is checked.
- Marketing and transactional consents are separate, unchecked by default, and optional.
- Full consent copy is visible inline next to each checkbox.
