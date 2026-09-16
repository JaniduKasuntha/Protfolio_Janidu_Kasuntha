import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { SkillsSection } from "@/sections/SkillsSection";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

function App() {
  return (
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
    </div>
  );
}

export default App;
