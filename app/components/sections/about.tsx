"use client";

import { useState } from "react";
import Reveal from "../reveal";
import { Section, Kicker } from "./section-shell";

const scenarios = [
  {
    id: "messy",
    number: "01",
    label: "Nobody agrees on the problem",
    dot: "bg-sky-400",
    wash: "from-sky-500/10",
    title: "First, I make sure we’re solving the same problem.",
    body: "When a conversation fills up with solutions, I pause and ask everyone to describe the problem in plain language. The common thread usually tells us where to start.",
    next: "Leave with one problem statement, the person we’re helping, and a shared picture of better.",
  },
  {
    id: "data",
    number: "02",
    label: "The numbers don’t match",
    dot: "bg-violet-400",
    wash: "from-violet-500/10",
    title: "Before debating the numbers, I check what they mean.",
    body: "Different filters, time periods, or definitions can make two honest dashboards disagree. I’d rather fix the question than argue over the answer.",
    next: "Agree on the metric, write down the assumptions, and use the same scoreboard.",
  },
  {
    id: "team",
    number: "03",
    label: "The conversation is stuck",
    dot: "bg-emerald-400",
    wash: "from-emerald-500/10",
    title: "When the room goes in circles, I give it a next step.",
    body: "I sort the conversation into what we know, what we’re assuming, and what we still need to learn. Opinions become much easier to work with when we can test them.",
    next: "Choose the smallest useful test, name an owner, and set a date to decide.",
  },
  {
    id: "offline",
    number: "04",
    label: "I’m off the clock",
    dot: "bg-amber-400",
    wash: "from-amber-500/10",
    title: "Work ends. Curiosity usually misses the memo.",
    body: "Music on, too many tabs open, and occasionally wondering why a checkout needed six screens when three would do.",
    next: "Take a screenshot, write one note, and try very hard not to turn it into a full teardown. Results vary.",
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
            Pick a situation. Here’s what you’d actually see me do—no buzzwords,
            no personality test.
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
              Curious enough to ask. Practical enough to move. Relaxed enough to
              admit when the first idea is bad.
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
