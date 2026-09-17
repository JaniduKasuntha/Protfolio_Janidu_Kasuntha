import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { SkillsSection } from "@/sections/SkillsSection";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PortfolioLoader } from "@/components/PortfolioLoader";

function App() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      {/* Intro loading animation — removed from DOM after it completes */}
      <PortfolioLoader onComplete={() => setLoaderDone(true)} />

      {/*
        Portfolio content.
        Starts invisible so there is zero flash before the loader finishes.
        Fades in smoothly once onComplete fires.
      */}
      <div
        style={{
          opacity:    loaderDone ? 1 : 0,
          transition: loaderDone
            ? "opacity 0.5s cubic-bezier(0.4,0,0.2,1)"
            : "none",
          /* Pointer-events disabled until the loader is gone */
          pointerEvents: loaderDone ? "auto" : "none",
        }}
      >
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary relative overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <About />
            <SkillsSection />
            <Education />
            <Projects />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
}

export default App;
