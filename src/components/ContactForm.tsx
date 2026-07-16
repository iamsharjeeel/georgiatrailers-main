"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const FORM_ENDPOINT = "https://example.com/form-stub";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [phoneError, setPhoneError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPhoneError("");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") ?? "").trim();
    const marketingConsent = data.get("marketingConsent") === "on";
    const transactionalConsent = data.get("transactionalConsent") === "on";

    if ((marketingConsent || transactionalConsent) && !phone) {
      setPhoneError(
        "Please provide a phone number to receive text messages.",
      );
      return;
    }

    const payload = {
      fullName: String(data.get("fullName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone,
      message: String(data.get("message") ?? "").trim(),
      marketingConsent,
      transactionalConsent,
    };

    setStatus("submitting");

    try {
      if (FORM_ENDPOINT.includes("example.com")) {
        await new Promise((resolve) => setTimeout(resolve, 450));
        setStatus("success");
        form.reset();
        return;
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please call us or email admin@georgiatraileroutlet.com.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-md border border-brand-border bg-brand-soft px-6 py-10 text-center"
        role="status"
      >
        <p className="font-display text-2xl tracking-[0.06em] text-brand-black">
          Thank You
        </p>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-brand-muted">
          Thanks — we&apos;ll get back to you within one business day.
        </p>
        <button
          type="button"
          className="mt-6 rounded-sm bg-brand-red px-6 py-3 font-display text-sm tracking-[0.12em] text-brand-white transition-colors hover:bg-brand-red-hover"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-md border border-brand-border bg-brand-soft p-5 sm:p-8"
      noValidate={false}
    >
      <div>
        <label
          htmlFor="fullName"
          className="font-display mb-2 block text-xs tracking-[0.16em] text-brand-black"
        >
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          placeholder="John Doe"
          className="w-full rounded-sm border border-brand-border bg-brand-white px-4 py-3 text-base text-brand-black placeholder:text-brand-muted/70"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-display mb-2 block text-xs tracking-[0.16em] text-brand-black"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="john@example.com"
          className="w-full rounded-sm border border-brand-border bg-brand-white px-4 py-3 text-base text-brand-black placeholder:text-brand-muted/70"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="font-display mb-2 block text-xs tracking-[0.16em] text-brand-black"
        >
          Phone Number (Optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
          aria-invalid={phoneError ? true : undefined}
          aria-describedby={phoneError ? "phone-error" : undefined}
          className="w-full rounded-sm border border-brand-border bg-brand-white px-4 py-3 text-base text-brand-black placeholder:text-brand-muted/70"
        />
        {phoneError ? (
          <p id="phone-error" className="mt-2 text-sm text-brand-red" role="alert">
            {phoneError}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-display mb-2 block text-xs tracking-[0.16em] text-brand-black"
        >
          How Can We Help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about the trailer you're looking for..."
          className="w-full resize-y rounded-sm border border-brand-border bg-brand-white px-4 py-3 text-base text-brand-black placeholder:text-brand-muted/70"
        />
      </div>

      <fieldset className="space-y-4">
        <legend className="font-display mb-1 text-xs tracking-[0.16em] text-brand-black">
          Text Message Preferences
        </legend>

        <label className="flex cursor-pointer gap-3 rounded-md border border-brand-border bg-brand-white p-4">
          <input
            type="checkbox"
            name="marketingConsent"
            className="mt-1 h-5 w-5 shrink-0 accent-brand-red"
          />
          <span className="text-sm leading-relaxed text-brand-black">
            <strong>Marketing Updates:</strong> I consent to receive recurring
            automated promotional and personalized marketing text messages (e.g.
            SMS/MMS) from{" "}
            <strong>Georgia Trailer Outlet, LLC</strong> at the number provided.
            Message and data rates may apply. Message frequency varies. Reply
            STOP to cancel at any time. Reply HELP for help. My consent is not a
            condition of any purchase.
          </span>
        </label>

        <label className="flex cursor-pointer gap-3 rounded-md border border-brand-border bg-brand-white p-4">
          <input
            type="checkbox"
            name="transactionalConsent"
            className="mt-1 h-5 w-5 shrink-0 accent-brand-red"
          />
          <span className="text-sm leading-relaxed text-brand-black">
            <strong>Transactional Updates:</strong> I consent to receive
            non-marketing text messages related to my account, order and
            delivery updates, and appointment reminders from{" "}
            <strong>Georgia Trailer Outlet, LLC</strong>. Message and data rates
            may apply. Message frequency varies. Reply STOP to cancel at any
            time. Reply HELP for help. My consent is not a condition of any
            purchase.
          </span>
        </label>
      </fieldset>

      <p className="text-xs leading-relaxed text-brand-muted">
        View our{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-brand-black">
          Privacy Policy
        </Link>
        ,{" "}
        <Link href="/terms" className="underline underline-offset-2 hover:text-brand-black">
          Terms of Service
        </Link>
        , and{" "}
        <Link
          href="/sms-terms"
          className="underline underline-offset-2 hover:text-brand-black"
        >
          SMS Terms &amp; Conditions
        </Link>
        .
      </p>

      {errorMessage ? (
        <p className="text-sm text-brand-red" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-brand-red px-6 py-3.5 font-display text-sm tracking-[0.14em] text-brand-white transition-colors hover:bg-brand-red-hover disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
