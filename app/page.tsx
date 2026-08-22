import Header from "@/components/Header";
import ScrollEffects from "@/components/ScrollEffects";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Header />

      <main>
        <Hero />
        <Projects />
        <Experience />
        {/* NOTE: overflows the x-edges when in mobile from the shadcn left/right arrows */}
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
