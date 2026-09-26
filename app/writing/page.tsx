import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, PenLine } from "lucide-react";
import Reveal from "../components/reveal";

const description =
  "Notes by Manav Purswani on product analytics, business systems, and building better product decisions.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/writing" },
  openGraph: {
    type: "website",
    title: "Writing · Manav Purswani",
    description,
    url: "/writing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing · Manav Purswani",
    description,
  },
};

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:px-10 sm:py-16">
      <Reveal>
        <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          <span className="text-muted">Writing</span>
          <span className="h-px w-5 bg-border" />
          <span>0 articles</span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h1 className="mt-5 max-w-xl font-display text-[2.2rem] font-semibold leading-[1.05] tracking-tight sm:text-[3rem]">
          Notes on products, data, and decisions.
        </h1>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
          {description}
        </p>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-14 rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <PenLine className="h-6 w-6 text-accent" aria-hidden="true" />
          <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-fg">
            First article coming soon.
          </h2>
          <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-muted">
            This space will hold practical notes from my path through business systems,
            product analytics, and product management.
          </p>
        </div>
      </Reveal>

      <div className="mt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to portfolio
        </Link>
      </div>
    </div>
  );
}
