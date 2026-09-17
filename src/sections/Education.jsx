import { Reveal } from "@/components/Reveal";

const educationList = [
  {
    id: "sliit",
    period: "2024 — PRESENT",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    location: "Malabe, Sri Lanka",
    degree: "BSc (Hons) in Information Technology",
    specialization: "Specializing in Artificial Intelligence",
    details: "Focus areas: Full-Stack Development, ML, DL, NLP, Intelligent Agents, Computer Vision, MLOps, Edge AI, Responsible AI, Big Data Analytics & Cloud Engineering. Expected graduation: 2028.",
  },
  {
    id: "al",
    period: "2021 — 2023",
    institution: "Nalanda College Colombo",
    location: "Colombo 10, Sri Lanka",
    degree: "G.C.E. Advanced Level Examination",
    specialization: "Commerce Stream",
    details: "Achieved 3-B passes in ICT, Business Studies and Accounting.",
  },
  {
    id: "ol",
    period: "2019 — 2020",
    institution: "Nalanda College Colombo",
    location: "Colombo 10, Sri Lanka",
    degree: "G.C.E. Ordinary Level Examination",
    specialization: "",
    details: "Completed secondary education with strong academic standing.",
  },
  {
    id: "english",
    period: "2019",
    institution: "British Council Sri Lanka",
    location: "Colombo, Sri Lanka",
    degree: "Professional English Language Certification",
    specialization: "",
    details: "Advanced professional English reading, writing, and conversational communication modules.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Identifier */}
        <Reveal>
          <div className="mb-16">
            <span className="text-[18px] md:text-[20px] font-mono text-primary/80 font-semibold tracking-widest uppercase">
              04 / Education
            </span>
          </div>
        </Reveal>

        {/* Academic Chronology */}
        <div className="flex flex-col border-t border-border">
          {educationList.map((item, idx) => (
            <Reveal key={item.id} delay={100 + idx * 50}>
              <div className="py-8 border-b border-border grid sm:grid-cols-12 gap-4 sm:gap-8 items-start">
                {/* Date Column */}
                <div className="sm:col-span-3 lg:col-span-2">
                  <span className="text-[12px] font-mono text-muted-foreground tracking-wider">
                    {item.period}
                  </span>
                </div>

                {/* Details Column */}
                <div className="sm:col-span-9 lg:col-span-10 flex flex-col sm:flex-row sm:justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-medium text-foreground">
                      {item.institution}
                    </h3>
                    <p className="text-[15px] text-foreground/90">
                      {item.degree}
                    </p>
                    {item.specialization && (
                      <p className="text-[14px] text-primary">
                        {item.specialization}
                      </p>
                    )}
                    <p className="text-[14px] text-muted-foreground leading-relaxed pt-2 max-w-2xl">
                      {item.details}
                    </p>
                  </div>

                  <div className="shrink-0 text-left sm:text-right">
                    <span className="text-[12px] font-mono text-muted-foreground">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
