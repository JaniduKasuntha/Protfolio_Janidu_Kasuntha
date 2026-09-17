import { Reveal } from "@/components/Reveal";
import { Skills } from "@/components/Skills";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Identifier */}
        <Reveal>
          <div className="mb-16">
            <span className="text-[18px] md:text-[20px] font-mono text-primary/80 font-semibold tracking-widest uppercase">
              03 / Technical Stack
            </span>
          </div>
        </Reveal>

        {/* Categorized Skills Matrix */}
        <Skills />
      </div>
    </section>
  );
};
