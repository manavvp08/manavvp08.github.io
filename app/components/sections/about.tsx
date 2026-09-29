"use client";

import { useState } from "react";
import Reveal from "../reveal";
import { Section, Kicker } from "./section-shell";

const scenarios = [
  {
    id: "messy",
    number: "01",
    label: "The problem is messy",
    dot: "bg-sky-400",
    wash: "from-sky-500/10",
    title: "I slow down the rush to solutions.",
    body: "I ask everyone to explain the problem without proposing a fix. The overlap usually reveals what actually needs solving.",
    next: "Write the problem in one sentence, name who feels it, and agree on what better looks like.",
  },
  {
    id: "data",
    number: "02",
    label: "The data disagrees",
    dot: "bg-violet-400",
    wash: "from-violet-500/10",
    title: "I check definitions before choosing sides.",
    body: "Two dashboards can be correct and still answer different questions. I trace the metric, timeframe, and segment before debating the conclusion.",
    next: "Create one shared definition, surface the assumptions, and make the decision visible.",
  },
  {
    id: "team",
    number: "03",
    label: "The team is stuck",
    dot: "bg-emerald-400",
    wash: "from-emerald-500/10",
    title: "I turn debate into a decision.",
    body: "I separate what we know, what we assume, and what we can learn cheaply. That usually gives the room somewhere useful to move.",
    next: "Pick the smallest test, give it an owner, and agree on when we will revisit the call.",
  },
  {
    id: "offline",
    number: "04",
    label: "The laptop is closed",
    dot: "bg-amber-400",
    wash: "from-amber-500/10",
    title: "The laptop closes. The product brain does not.",
    body: "Music on, too many tabs open, and probably noticing the checkout flow that could have taken two fewer clicks.",
    next: "Take a screenshot, make a mental note, and promise myself I will not turn it into a teardown. No guarantees.",
  },
] as const;

export default function About() {
  const [selected, setSelected] = useState<(typeof scenarios)[number]["id"]>(
    scenarios[0].id,
  );
  const active = scenarios.find((scenario) => scenario.id === selected) ?? scenarios[0];

  return (
    <Section id="about" className="py-16 sm:py-32">
      <Kicker index="06" label="About" />

      <div className="mt-6 grid items-end gap-5 md:grid-cols-[1.35fr_0.65fr] md:gap-12">
        <Reveal>
          <h2 className="max-w-3xl font-display text-[2.15rem] font-semibold leading-[1.04] tracking-tight text-balance sm:text-[3.25rem]">
            Put me in the room.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-md text-[15px] leading-relaxed text-muted">
            Pick a situation. I’ll show you how I think, what I do next, and the
            occasional thing that follows me home.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-3 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-surface p-3">
            <div className="px-2 pb-3 pt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
              Choose a situation
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {scenarios.map((scenario) => {
                const isActive = scenario.id === active.id;

                return (
                  <button
                    key={scenario.id}
                    type="button"
                    aria-controls="about-scenario"
                    aria-pressed={isActive}
                    onClick={() => setSelected(scenario.id)}
                    className={`group flex min-h-20 items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-4 ${
                      isActive
                        ? "border-border bg-bg-2 text-fg shadow-sm"
                        : "border-transparent text-muted hover:border-border hover:bg-bg-2/60 hover:text-fg"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-2 w-2 shrink-0 rounded-full ${scenario.dot}`}
                    />
                    <span className="flex-1 text-[13px] font-medium leading-snug sm:text-[14px]">
                      {scenario.label}
                    </span>
                    <span className="hidden font-mono text-[10px] text-faint sm:block">
                      {scenario.number}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <article
            id="about-scenario"
            aria-live="polite"
            className="bg-grid relative flex min-h-[430px] h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-2 p-6 sm:p-8"
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-gradient-to-br ${active.wash} via-transparent to-transparent`}
            />
            <div className="relative flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
              <span className={`h-2 w-2 rounded-full ${active.dot}`} />
              Current scenario · {active.label}
            </div>

            <div className="relative my-auto py-10">
              <h3 className="max-w-2xl font-display text-[1.8rem] font-semibold leading-[1.08] tracking-tight text-fg sm:text-[2.45rem]">
                {active.title}
              </h3>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
                {active.body}
              </p>
            </div>

            <div className="relative border-t border-border pt-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                What I’d do next
              </div>
              <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-fg/85">
                {active.next}
              </p>
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={180}>
        <div className="mt-3 flex flex-col gap-4 rounded-2xl border border-border bg-surface px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div>
            <div className="font-display text-xl font-semibold text-fg">
              Same person. Different room.
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-muted">
              Curious enough to dig. Practical enough to move. Human enough to
              laugh when the first idea is terrible.
            </p>
          </div>
          <div aria-hidden="true" className="flex gap-2">
            {scenarios.map((scenario) => (
              <span key={scenario.id} className={`h-2.5 w-2.5 rounded-full ${scenario.dot}`} />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
