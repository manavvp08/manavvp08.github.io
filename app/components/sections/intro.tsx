import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../reveal";
import CountUp from "../count-up";
import Button from "../button";
import { Section } from "./section-shell";
import { profile, facts } from "../../lib/data";

const productQuestions = ["Who needs this?", "What proves it?", "Did it work?"];

function Portrait({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`relative shrink-0 overflow-hidden rounded-full border border-border-strong bg-surface/80 shadow-2xl ${
        compact ? "h-16 w-16" : "h-40 w-40 sm:h-48 sm:w-48"
      }`}
    >
      <Image
        src="/sidebar-profile.jpg"
        alt="Manav Purswani"
        fill
        sizes={compact ? "64px" : "(max-width: 640px) 160px, 192px"}
        className="duotone object-cover object-top"
        priority
      />
    </span>
  );
}

function ProfilePanel({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <figure className="group mb-8 flex items-center gap-3.5">
        <Portrait compact />
        <figcaption className="min-w-0">
          <div className="font-display text-[17px] text-fg">{profile.name}</div>
          <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
            Business systems → Product
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-muted">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-success" />
            Open to Product Analyst and APM roles
          </div>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-bg-2">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute inset-0 grid place-items-center">
        <Portrait />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <div className="font-display text-sm text-fg">{profile.name}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            Business systems → Product
          </div>
        </div>
        <span className="font-mono text-[10px] text-faint">IN · MUMBAI</span>
      </figcaption>
    </figure>
  );
}

export default function Intro() {
  return (
    <Section id="intro" className="pb-16 pt-5 sm:pb-32 sm:pt-10">
      <div className="lg:hidden">
        <ProfilePanel mobile />
      </div>

      <Reveal className="hidden lg:block">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            Systems title. Product instincts.
          </span>
          <span className="inline-flex items-center gap-2 text-[12px] text-muted">
            <span className="pulse-dot h-2 w-2 rounded-full bg-success" />
            Open to Product Analyst and APM roles
            <span className="text-border-strong">/</span>
            Mumbai, IN
          </span>
        </div>
      </Reveal>

      <div className="grid gap-10 lg:mt-8 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-12">
        <div>
          <Reveal>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent lg:hidden">
              Systems title. Product instincts.
            </div>
            <h1 className="font-display text-[clamp(2.35rem,5vw,3.45rem)] leading-[1.04] tracking-tight text-balance">
              <span className="text-muted">My title says systems.</span>
              <br />
              <span className="text-fg">My brain keeps asking product questions.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-5 max-w-xl space-y-3">
              <p className="text-[16px] leading-relaxed text-fg/90">
                I’m not changing careers—I’m following the questions I’m already solving.
              </p>
              <p className="text-[14.5px] leading-relaxed text-muted">
                At Deloitte, I connect business context, data, and engineering to turn
                complex workflows into decisions teams can ship.
              </p>
              <p className="border-l-2 border-accent pl-3 text-[13px] italic text-muted">
                “Why?” is still my most-used product tool.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
              {productQuestions.map((question, index) => (
                <span key={question} className="inline-flex items-center gap-2">
                  <span className="rounded-md border border-border bg-surface px-2.5 py-1.5">
                    {question}
                  </span>
                  {index < productQuestions.length - 1 && (
                    <ArrowRight aria-hidden className="h-3 w-3 text-accent" />
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <Button href="#case-studies" variant="primary">
                See the decisions <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="#about" variant="secondary">
                Meet the human <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="hidden lg:block">
          <ProfilePanel />
        </Reveal>
      </div>

      <Reveal>
        <dl className="mt-14 grid grid-cols-2 gap-px border-y border-border bg-border sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-bg px-4 py-5">
              <dd className="font-display text-3xl font-semibold tracking-tight text-fg">
                <CountUp to={fact.to} prefix={fact.prefix} suffix={fact.suffix} />
              </dd>
              <dt className="mt-1 text-[12px] leading-snug text-muted">{fact.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {profile.now.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-border-strong hover:bg-surface-2"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-bg-2 font-display text-lg font-semibold text-accent">
                {item.mark}
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {item.label}
                </div>
                <div className="mt-0.5 font-display text-[17px] font-semibold tracking-tight text-fg">
                  {item.name}
                </div>
              </div>
              <ArrowUpRight className="h-[18px] w-[18px] shrink-0 text-faint transition-all group-hover:translate-x-0.5 group-hover:text-fg" />
            </a>
          ))}
        </div>
      </Reveal>

    </Section>
  );
}
