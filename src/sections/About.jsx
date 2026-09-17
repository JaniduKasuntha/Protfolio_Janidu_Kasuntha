import { Reveal } from "@/components/Reveal";

export const About = () => {
  return (
    <section id="about" className="py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Identifier */}
        <Reveal>
          <div className="mb-16">
            <span className="text-[18px] md:text-[20px] font-mono text-primary/80 font-semibold tracking-widest uppercase">
              02 / About
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] leading-[1.2] text-foreground mb-6">
                Bridging artificial intelligence with modern software engineering.
              </h2>
              <div className="space-y-4 text-muted-foreground text-[15px] sm:text-base leading-relaxed">
                <p>
                  I am an Information Technology undergraduate at SLIIT specializing in Artificial Intelligence. My focus lies at the intersection of machine learning research and production-grade software development.
                </p>
                <p>
                  I build complete full-stack applications and integrate ML, AI, and LLM capabilities into real applications that solve practical problems.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Engineering Capabilities */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="flex flex-col border-t border-border">
                {/* Capability 1 */}
                <div className="py-7 border-b border-border grid sm:grid-cols-12 gap-3 sm:gap-6">
                  <div className="sm:col-span-4">
                    <h3 className="text-[15px] font-medium text-foreground">Machine Learning & AI</h3>
                  </div>
                  <div className="sm:col-span-8 space-y-3">
                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                      Developing predictive models and integrating them via modern REST APIs. Experience with data balancing, feature engineering, and model evaluation.
                    </p>
                    <p className="text-[12px] font-mono text-muted-foreground leading-relaxed">
                      TensorFlow, scikit-learn, XGBoost, CatBoost, Pandas
                    </p>
                  </div>
                </div>

                {/* Capability 2 */}
                <div className="py-7 border-b border-border grid sm:grid-cols-12 gap-3 sm:gap-6">
                  <div className="sm:col-span-4">
                    <h3 className="text-[15px] font-medium text-foreground">Backend / Software Systems</h3>
                  </div>
                  <div className="sm:col-span-8 space-y-3">
                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                      Designing secure, scalable backend architectures with role-based access control, relational databases, and asynchronous pipelines.
                    </p>
                    <p className="text-[12px] font-mono text-muted-foreground leading-relaxed">
                      Node.js, FastAPI, Spring Boot, MySQL, MongoDB
                    </p>
                  </div>
                </div>

                {/* Capability 3 */}
                <div className="py-7 border-b border-border grid sm:grid-cols-12 gap-3 sm:gap-6">
                  <div className="sm:col-span-4">
                    <h3 className="text-[15px] font-medium text-foreground">Full-Stack Applications</h3>
                  </div>
                  <div className="sm:col-span-8 space-y-3">
                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                      Building responsive web and cross-platform mobile interfaces that consume backend APIs for seamless user experiences.
                    </p>
                    <p className="text-[12px] font-mono text-muted-foreground leading-relaxed">
                      React, React Native, Tailwind CSS, Vite
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
