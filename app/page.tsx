import HashScroll from "./components/hash-scroll";
import Intro from "./components/sections/intro";
import CaseStudies from "./components/sections/case-studies";
import Projects from "./components/sections/projects";
import Toolkit from "./components/sections/stack";
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import { SectionDivider } from "./components/sections/section-shell";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <HashScroll />
      <Intro />
      <SectionDivider />
      <CaseStudies />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Toolkit />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact />
    </>
  );
}
