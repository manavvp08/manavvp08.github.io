import Reveal from "../reveal";
import { Section, Kicker } from "./section-shell";

const fieldNotes = [
  {
    number: "01",
    label: "I can’t unsee",
    title: "The workaround hiding inside “that’s just how we do it.”",
    body: "If a process needs a survival guide, I want to know why the process survived.",
  },
  {
    number: "02",
    label: "A hill I’ll defend",
    title: "Clarity is a form of kindness.",
    body: "Good work should leave the next person less confused—not more impressed by the vocabulary.",
  },
  {
    number: "03",
    label: "The mildly annoying part",
    title: "I will ask, “What decision changes?”",
    body: "Probably once more than the room expected. A dashboard, meeting, or feature should earn its place.",
  },
  {
    number: "04",
    label: "Off duty, allegedly",
    title: "Music on. Too many tabs open.",
    body: "Usually following one harmless question into a rabbit hole—or mentally redesigning a checkout flow that never asked for my opinion.",
  },
];

const workingTogether = [
  { label: "Bring me", value: "the messy version" },
  { label: "I’ll bring", value: "structure without the theatre" },
  { label: "We’ll leave with", value: "a decision and an owner" },
];

export default function About() {
  return (
    <Section id="about" className="py-16 sm:py-32">
      <Kicker index="06" label="About" />

      <div className="mt-6 grid items-end gap-5 md:grid-cols-[1.35fr_0.65fr] md:gap-12">
        <Reveal>
          <h2 className="max-w-3xl font-display text-[2.15rem] font-semibold leading-[1.04] tracking-tight text-balance sm:text-[3.25rem]">
            The parts that don’t fit neatly on a résumé.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-md text-[15px] leading-relaxed text-muted">
            A small field guide to how I show up when there’s a messy problem, a
            blank whiteboard, or a process everyone has quietly learned to tolerate.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {fieldNotes.map((note, index) => (
          <Reveal key={note.number} delay={80 + index * 45}>
            <article className="group relative h-full min-h-56 overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:p-7">
              <div className="absolute right-5 top-4 font-mono text-5xl font-medium tracking-tighter text-fg/[0.04] transition-colors group-hover:text-accent/10">
                {note.number}
              </div>
              <div className="relative flex h-full flex-col">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  {note.label}
                </div>
                <h3 className="mt-8 max-w-md font-display text-[1.45rem] font-semibold leading-tight tracking-tight text-fg">
                  {note.title}
                </h3>
                <p className="mt-auto max-w-md pt-6 text-[14px] leading-relaxed text-muted">
                  {note.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={240}>
        <div className="bg-grid mt-3 overflow-hidden rounded-2xl border border-border bg-bg-2">
          <div className="border-b border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:px-7">
            Working together, minus the theatre
          </div>
          <div className="grid md:grid-cols-3">
            {workingTogether.map((step, index) => (
              <div
                key={step.label}
                className="relative border-b border-border px-5 py-5 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:last:border-r-0"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  {step.label}
                </div>
                <div className="mt-1.5 font-display text-lg font-semibold text-fg">
                  {step.value}
                </div>
                {index < workingTogether.length - 1 && (
                  <span className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] text-accent md:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
