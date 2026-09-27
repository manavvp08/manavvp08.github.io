import Reveal from "../reveal";
import ProjectList from "../project-list";
import { Section, Kicker } from "./section-shell";

export default function Projects() {
  return (
    <Section id="projects" className="py-16 sm:py-32">
      <Kicker index="03" label="Projects" />
      <Reveal delay={60}>
        <h2 className="mt-5 max-w-3xl font-display text-[2rem] leading-[1.08] tracking-tight sm:text-[2.6rem]">
          Products I have taken from a problem to a working prototype.
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Hands-on builds that show product discovery, technical judgment, and delivery.
        </p>
      </Reveal>
      <ProjectList />
    </Section>
  );
}
