const Educations = [
  {
    period: "2022 — Present",
    degree:
      "BSc (Hons) in Information Technology Specializing in Artificial Intelligence",
    location: "Sri Lanka Institute of Information Technology (SLIIT) Malabe",
    description:
      "Pursuing a comprehensive program that covers AI, machine learning, and data science. Engaging in hands-on projects and research to apply theoretical knowledge to real-world problems.",
    current: true,
  },
  {
    period: "2022 — Present",
    degree:
      "BSc (Hons) in Information Technology Specializing in Artificial Intelligence",
    location: "Sri Lanka Institute of Information Technology (SLIIT) Malabe",
    description:
      "Pursuing a comprehensive program that covers AI, machine learning, and data science. Engaging in hands-on projects and research to apply theoretical knowledge to real-world problems.",
    current: false,
  },
  {
    period: "2022 — Present",
    degree:
      "BSc (Hons) in Information Technology Specializing in Artificial Intelligence",
    location: "Sri Lanka Institute of Information Technology (SLIIT) Malabe",
    description:
      "Pursuing a comprehensive program that covers AI, machine learning, and data science. Engaging in hands-on projects and research to apply theoretical knowledge to real-world problems.",
    current: false,
  },
  {
    period: "2022 — Present",
    degree:
      "BSc (Hons) in Information Technology Specializing in Artificial Intelligence",
    location: "Sri Lanka Institute of Information Technology (SLIIT) Malabe",
    description:
      "Pursuing a comprehensive program that covers AI, machine learning, and data science. Engaging in hands-on projects and research to apply theoretical knowledge to real-world problems.",
    current: false,
  },
];
export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Milestones
          </span>
          <h2 className="text-4xl mt-1 font-bold  animate-fade-in md:text-5xl animation-delay-100 text-secondary-foreground">
            Education{" "}
            <span className="font-serif italic text-white">& Journey </span>
          </h2>
          <p className="mt-3 text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative ">
          {/* vertical line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* education/jurney items   */}
          <div className="space-y-12">
            {Educations.map((item, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
              >
                {/* timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {item.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* timeline Content */}
                <div
                  className={`pl-8 md:pl-0 text-sm md:text-lg ${
                    idx % 2 === 1
                      ? "md:pr-16 md:text-right text-lg"
                      : "md:col-start-2 md:pl-16 text-lg"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-primary text-sm font-medium">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {item.degree}
                    </h3>
                    <p className="text-muted-foreground mt-0.5">
                      {item.location}
                    </p>
                    <p className="text-muted-foreground mt-4">
                      {item.description}
                    </p>
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
