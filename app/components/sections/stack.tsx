import Reveal from "../reveal";
import { Section, Kicker } from "./section-shell";
import { capabilities, dailyDrivers } from "../../lib/data";

export default function Stack() {
  return (
    <Section id="stack" className="py-16 sm:py-32">
      <Kicker index="03" label="Toolkit" />

      <Reveal delay={60}>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.7rem,3.6vw,2.5rem)] leading-[1.14] tracking-tight text-balance">
          The product work between a business question and a shipped decision.
        </h2>
      </Reveal>
      <Reveal delay={110}>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          My strongest work sits where business context, user workflows, data, and
          engineering constraints meet.
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {capabilities.map((capability, index) => (
            <div key={capability.title} className="flex h-full flex-col bg-surface p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[12px] tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                  {capability.title}
                </h3>
              </div>
              <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-muted">
                {capability.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {capability.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-bg-2 px-2.5 py-0.5 font-mono text-[10.5px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-14">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            Working toolkit
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {dailyDrivers.map((driver) => (
              <span
                key={driver}
                className="rounded-full border border-border-strong bg-surface-2 px-4 py-2 font-display text-[15px] tracking-tight text-fg"
              >
                {driver}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
