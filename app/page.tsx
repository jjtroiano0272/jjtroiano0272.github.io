import Header from "@/components/Header";
import ScrollEffects from "@/components/ScrollEffects";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { FileBrowser } from "@/components/FileBrowser";
import SkillsCarousel from "@/components/SkillsCarousel";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Header />

      <main>
        <Hero />
        <FileBrowser />
        <Experience />
        {/* NOTE: overflows the x-edges when in mobile from the shadcn left/right arrows */}
        {/* <Marquee3D /> */}
        {/* <SkillsMarqueeMagicUI /> */}
        <SkillsCarousel />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
