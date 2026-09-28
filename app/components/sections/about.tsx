import Reveal from "../reveal";
import { Section, Kicker } from "./section-shell";

const quickFacts = [
  { label: "Based in", value: "Mumbai, IN" },
  { label: "Currently", value: "Deloitte" },
  { label: "Focus", value: "Product Analytics" },
  { label: "Open to", value: "Product Analyst · APM · PM" },
];

const credentials = ["SQL Intermediate", "SQL Basic", "English", "Hindi", "French"];

export default function About() {
  return (
    <Section id="about" className="py-16 sm:py-32">
      <Kicker index="06" label="About" />

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
                I&apos;m Manav, a Business Systems Analyst who enjoys turning unclear
                problems into decisions that teams can act on.
              </p>
              <p className="text-[15px] leading-relaxed text-muted">
                I&apos;m building deeper hands-on experience in product analytics,
                experimentation, and AI-powered products as I work toward Product
                Management.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="bg-surface px-4 py-3.5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-[14px] font-medium text-fg">
                    {fact.value}
                  </dd>
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
              know the solution worked.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
