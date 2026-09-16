import { Skills } from "@/components/Skills";
import { Code2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-primary uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Skills & <span className="text-primary glow-text">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            A comprehensive overview of languages, frameworks, AI libraries, and developer tools I use to build intelligent systems.
          </p>
        </Reveal>

        {/* Categorized Skills Grid Component */}
        <Skills />
      </div>
    </section>
  );
};
