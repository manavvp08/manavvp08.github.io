import Reveal from "../reveal";
import { Section, Kicker } from "./section-shell";

const timeline = [
  {
    year: "Now",
    tag: "Deloitte",
    title: "Business System Analyst",
    body: "Driving enterprise systems transformation through requirements, release readiness, process improvement, and close partnership with engineering and business teams.",
  },
  {
    year: "Jul 2025",
    tag: "Deloitte",
    title: "Started as an intern",
    body: "Joined Deloitte in Mumbai before moving into the Business System Analyst role in January 2026.",
  },
  {
    year: "2021–2025",
    tag: "TSEC",
    title: "BE in Computer Engineering",
    body: "Studied at Thadomal Shahani Engineering College and built BotX.ai, an accessibility product that converts natural-language intent into web actions.",
  },
  {
    year: "2019–2021",
    tag: "Cambridge",
    title: "Engineering Science",
    body: "Completed Engineering Science studies through the University of Cambridge.",
  },
];

const quickFacts = [
  { k: "Based in", v: "Mumbai, IN" },
  { k: "Currently", v: "Deloitte" },
  { k: "Focus", v: "Product Analytics" },
  { k: "Open to", v: "Product Analyst · APM · PM" },
];

const credentials = ["SQL Intermediate", "SQL Basic", "English", "Hindi", "French"];

export default function About() {
  return (
    <Section id="about" className="py-16 sm:py-32">
      <Kicker index="05" label="About" />

      <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
        <div>
          <Reveal>
            <h2 className="font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-balance sm:text-[2.6rem]">
              Find the friction. Prove the case. Ship the fix.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 space-y-4">
              <p className="text-[17px] leading-relaxed text-fg/90">
                I&apos;m Manav, a Business Systems Analyst with more than a year of
                experience driving enterprise transformation and a clear direction toward
                Product Analytics and Product Management.
              </p>
              <p className="text-[15px] leading-relaxed text-muted">
                I specialize in turning ambiguous business problems into prioritized
                requirements, then partnering with engineering to ship measurable
                improvements. I&apos;m now deepening my hands-on work in product analytics,
                experimentation design, and AI-powered product features.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {quickFacts.map((fact) => (
                <div key={fact.k} className="bg-surface px-4 py-3.5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                    {fact.k}
                  </dt>
                  <dd className="mt-1 text-[14px] font-medium text-fg">{fact.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                Certifications & languages
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {credentials.map((credential) => (
                  <span
                    key={credential}
                    className="rounded-full border border-border bg-bg-2 px-3 py-1 text-[13px] text-muted"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="bg-grid relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-bg-2 p-7">
            <div className="absolute -right-20 -top-16 h-60 w-60 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                Product direction
              </div>
              <div className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-fg">
                Business systems
                <br />
                <span className="text-accent">→ Product analysis</span>
                <br />→ Product management
              </div>
            </div>
            <p className="relative max-w-sm text-[14px] leading-relaxed text-muted">
              The through-line is outcome ownership: understand the user and business
              problem, use evidence to prioritize, and stay close enough to delivery to
              know the solution actually worked.
            </p>
          </div>
        </Reveal>
      </div>

      <h3 className="mb-10 mt-20 font-display text-xl font-semibold tracking-tight">
        The short history
      </h3>
      <div>
        {timeline.map((item, index) => {
          const last = index === timeline.length - 1;
          return (
            <Reveal key={`${item.year}-${item.title}`} delay={index * 70}>
              <div className="grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-8">
                <div className="flex flex-col items-center">
                  <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-border-strong bg-bg">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted" />
                  </span>
                  {!last && <span className="w-px flex-1 bg-border" />}
                </div>
                <div className={last ? "pb-1" : "pb-12"}>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg">
                      {item.year}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-fg">
                    {item.title}
                  </h4>
                  <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
