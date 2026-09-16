import { Brain, Cpu, Server, Sparkles, CheckCircle2, Award } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Developing predictive models using CatBoost, XGBoost, TensorFlow, and scikit-learn on large datasets, integrated via modern REST APIs.",
  },
  {
    icon: Server,
    title: "Full-Stack Development",
    description:
      "Building robust, production-ready applications with React, React Native, Node.js, Express, FastAPI, and Spring Boot.",
  },
  {
    icon: Cpu,
    title: "System Performance",
    description:
      "Optimizing database queries, caching strategies, and asynchronous pipelines for low latency and high concurrency.",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    description:
      "Quickly adopting cutting-edge developer tools, generative AI APIs, and architectural patterns to solve complex problems.",
  },
];

const highlights = [
  { value: "98%", label: "Model Accuracy (ML)", detail: "Heart disease risk prediction" },
  { value: "400k+", label: "Data Records Processed", detail: "Clinical symptom pipelines" },
  { value: "4+", label: "Full-Stack Systems", detail: "Web & mobile applications" },
  { value: "2028", label: "SLIIT Graduation", detail: "BSc IT (Hons) Spec. in AI" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-background/50">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-primary uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Bridging <span className="text-primary glow-text">Artificial Intelligence</span> with modern software engineering.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I am passionate about taking machine learning algorithms beyond research notebooks and deploying them into real-world, user-facing applications that create tangible value.
          </p>
        </div>

        {/* 2-Column Scannable Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Key Focus & Philosophy (6 cols) */}
          <div className="lg:col-span-6 space-y-6 animate-fade-in animation-delay-200">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-white/5">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Technical Mindset & Experience
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                As an IT undergraduate at SLIIT specializing in AI, I immerse myself in both foundational computer science principles and cutting-edge machine learning. My hands-on projects range from medical diagnostic assistants powered by LLMs and computer vision to secure, role-based event reminder backends in Java Spring Boot.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Hands-on with predictive modeling, feature engineering & data balancing",
                  "Cross-platform full-stack engineering with React, Expo, and Node.js",
                  "Clean RESTful and SSE API architectures with FastAPI & Express",
                  "Committed to clean code, modular architecture, and rapid prototyping",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass rounded-xl p-4 text-center border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl font-bold text-primary font-mono">{item.value}</div>
                  <div className="text-xs font-semibold text-foreground mt-1">{item.label}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - 4 Engineering Pillars (6 cols) */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4 animate-fade-in animation-delay-300">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
