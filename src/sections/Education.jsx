import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";

const educationList = [
  {
    period: "2024 — Present",
    degree: "BSc (Hons) in Information Technology Specializing in Artificial Intelligence",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    location: "Malabe, Sri Lanka",
    description:
      "Specializing in Machine Learning, Deep Learning, Natural Language Processing, and Data Science. Actively building end-to-end AI applications, predictive pipelines, and full-stack software systems. (Expected graduation: 2028)",
    current: true,
    skills: ["Machine Learning", "Deep Learning", "Data Structures", "Full-Stack Web", "Python"],
  },
  {
    period: "2021 — 2023",
    degree: "G.C.E. Advanced Level Examination",
    institution: "Nalanda College Colombo",
    location: "Colombo 10, Sri Lanka",
    description:
      "Successfully completed GCE Advanced Level with 3-B passes, developing strong analytical thinking, mathematics, and foundational problem-solving skills.",
    current: false,
    skills: ["Analytical Thinking", "Mathematics", "Problem Solving"],
  },
  {
    period: "2019 — 2020",
    degree: "G.C.E. Ordinary Level Examination",
    institution: "Nalanda College Colombo",
    location: "Colombo 10, Sri Lanka",
    description:
      "Completed secondary education with strong academic standing, active participation in school clubs, IT societies, and leadership activities.",
    current: false,
    skills: ["Academic Excellence", "Leadership", "School IT Society"],
  },
  {
    period: "2019",
    degree: "Professional English Language Certification",
    institution: "British Council Sri Lanka",
    location: "Colombo, Sri Lanka",
    description:
      "Completed advanced professional English reading, writing, and conversational communication modules, building strong fluency for international collaboration.",
    current: false,
    skills: ["Technical Writing", "Verbal Communication", "Presentation"],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-primary uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Education & <span className="text-primary glow-text">Learning Journey</span>
          </h2>
          <p className="text-base text-muted-foreground">
            A chronological timeline of academic achievements, professional training, and engineering education.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide */}
          <div className="absolute left-4 md:left-1/2 top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-border md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-10">
            {educationList.map((item, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 items-start animate-fade-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Center Node Indicator */}
                <div className="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item.current && (
                    <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                  )}
                </div>

                {/* Timeline Card */}
                <div
                  className={`pl-10 md:pl-0 ${
                    idx % 2 === 1
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12 text-left"
                  }`}
                >
                  <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300 group shadow-lg shadow-black/10">
                    <div className={`flex items-center gap-2 mb-2 ${idx % 2 === 1 ? "md:justify-end" : "justify-start"}`}>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          <Sparkles className="w-2.5 h-2.5" />
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>

                    <div className={`flex items-center gap-1.5 text-xs text-muted-foreground mt-1 mb-3 ${idx % 2 === 1 ? "md:justify-end" : "justify-start"}`}>
                      <MapPin className="w-3 h-3 text-primary shrink-0" />
                      <span>{item.institution} — {item.location}</span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skill Tags */}
                    {item.skills && (
                      <div className={`flex flex-wrap gap-1.5 ${idx % 2 === 1 ? "md:justify-end" : "justify-start"}`}>
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface text-slate-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
