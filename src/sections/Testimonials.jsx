import { useState } from "react";
import {
  Quote,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Trophy,
  MessageSquareHeart,
  Calendar,
  Building2,
  Award,
  Sparkles,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

const achievements = [
  {
    id: 1,
    title: "Client Production Launch — NCC eCare Platform",
    organization: "Narammala Channeling Center",
    date: "2024",
    description:
      "Successfully engineered and deployed the full-stack medical appointment and AI report analysis platform to production, enabling seamless doctor channeling and automated report explanations.",
    badge: "Client Project",
    link: "https://www.linkedin.com/posts/janidu-kasuntha_we-are-proud-to-announce-the-successful-completion-activity-7457426036067053568-3YD6",
    tags: ["Full-Stack", "AI Deployment", "Client Delivery"],
  },
  {
    id: 2,
    title: "CampusBites Multi-Role Platform Release",
    organization: "SLIIT Software Engineering Initiative",
    date: "2024",
    description:
      "Designed and deployed the end-to-end mobile meal pre-ordering and vendor management application with real-time tracking, receiving positive feedback from students and staff.",
    badge: "Mobile Architecture",
    link: "https://www.linkedin.com/posts/janidu-kasuntha_fullstackdevelopment-reactnative-nodejs-activity-7457414708610879488-DiHB",
    tags: ["React Native", "Expo", "System Design"],
  },
  {
    id: 3,
    title: "High-Accuracy Medical ML Pipeline Research",
    organization: "SLIIT AI Project Showcase",
    date: "2024",
    description:
      "Trained and evaluated CatBoost & XGBoost predictive models on 400k+ clinical data records, achieving 98% accuracy on balanced heart disease benchmarks.",
    badge: "AI Research",
    link: "https://github.com/JaniduKasuntha/Heart-Disease-AI",
    tags: ["CatBoost", "Data Science", "Optimization"],
  },
  {
    id: 4,
    title: "Advanced Professional English Certification",
    organization: "British Council Sri Lanka",
    date: "2019",
    description:
      "Awarded certification in professional English communications, technical presentation, and collaborative dialogue.",
    badge: "Certification",
    link: null,
    tags: ["Communication", "Professional Fluency"],
  },
];

const testimonials = [
  {
    id: 1,
    name: "Narammala Channeling Center Team",
    role: "Client & Healthcare Partner",
    quote:
      "Janidu demonstrated remarkable technical dedication delivering our e-care platform. His implementation of the AI report explainer and smooth appointment workflows added immense value to our patients.",
    img: "/nad.png",
    link: "https://www.linkedin.com/posts/janidu-kasuntha_we-are-proud-to-announce-the-successful-completion-activity-7457426036067053568-3YD6",
    verified: true,
  },
  {
    id: 2,
    name: "Engineering Peers & Project Collaborators",
    role: "Full-Stack Development Review",
    quote:
      "Working with Janidu on cross-platform mobile architectures is a great experience. He brings precision to state management, clean backend APIs, and consistent attention to detail.",
    img: "/sud.png",
    link: "https://www.linkedin.com/posts/janidu-kasuntha_fullstackdevelopment-reactnative-nodejs-activity-7457414708610879488-DiHB",
    verified: true,
  },
  {
    id: 3,
    name: "CampusBites Reviewers",
    role: "User Community & Stakeholders",
    quote:
      "The intuitive UI and smooth order tracking made campus meal reservations seamless. Great execution from design to mobile deployment.",
    img: "/p.png",
    link: "https://www.linkedin.com/posts/janidu-kasuntha_we-are-proud-to-announce-the-successful-completion-activity-7457426036067053568-3YD6",
    verified: true,
  },
];

import { Reveal } from "@/components/Reveal";

export const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'achievements' | 'testimonials'
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const activeReview = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-primary uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Recognition & Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Achievements & <span className="text-primary glow-text">Kind Words</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Proud moments & words that inspire me.
          </p>
        </Reveal>

        {/* Category Tabs */}
        <Reveal delay={100}>
          <div className="flex justify-center gap-3 mb-14">
            <button
              onClick={() => setActiveTab("all")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === "all"
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-surface/80 text-muted-foreground hover:text-foreground border border-white/5"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>All Highlights</span>
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === "achievements"
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-surface/80 text-muted-foreground hover:text-foreground border border-white/5"
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Achievements</span>
            </button>
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === "testimonials"
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-surface/80 text-muted-foreground hover:text-foreground border border-white/5"
              }`}
            >
              <MessageSquareHeart className="w-3.5 h-3.5" />
              <span>Kind Words</span>
            </button>
          </div>
        </Reveal>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Achievements Column */}
          {(activeTab === "all" || activeTab === "achievements") && (
            <div
              className={`${
                activeTab === "achievements" ? "lg:col-span-12 max-w-4xl mx-auto" : "lg:col-span-7"
              } space-y-4`}
            >
              <Reveal delay={120} className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Key Milestones & Recognitions</h3>
              </Reveal>

              <div className="space-y-4">
                {achievements.map((item, aIdx) => (
                  <Reveal key={item.id} delay={140 + aIdx * 100}>
                    <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-primary/40 transition-all duration-300 group shadow-md">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3 h-3 text-primary" />
                            {item.organization}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-primary" />
                            {item.date}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2 mb-3">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface text-slate-300 border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-white transition-colors"
                          >
                            <span>Verify Details</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials Column */}
          {(activeTab === "all" || activeTab === "testimonials") && (
            <div
              className={`${
                activeTab === "testimonials" ? "lg:col-span-12 max-w-2xl mx-auto" : "lg:col-span-5"
              } space-y-4`}
            >
              <Reveal delay={120} className="flex items-center gap-2 mb-2">
                <MessageSquareHeart className="w-4 h-4 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Endorsements & Feedback</h3>
              </Reveal>

              {/* Interactive Testimonial Card */}
              <Reveal delay={180}>
                <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
                  {/* Quote Icon */}
                  <div className="w-10 h-10 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary mb-5 shadow-lg shadow-primary/10">
                    <Quote className="w-5 h-5" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-6 font-serif">
                    "{activeReview.quote}"
                  </p>

                  {/* Proof Image / Post Preview */}
                  {activeReview.img && (
                    <div className="relative rounded-xl overflow-hidden bg-surface/80 border border-white/5 mb-5 aspect-[16/10]">
                      <img
                        src={activeReview.img}
                        alt={activeReview.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div>
                      <h5 className="text-sm sm:text-base font-bold text-foreground">
                        {activeReview.name}
                      </h5>
                      <p className="text-xs text-muted-foreground">{activeReview.role}</p>
                    </div>

                    {activeReview.link && (
                      <a
                        href={activeReview.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-primary/30 hover:border-primary text-xs font-semibold text-primary hover:text-white transition-all hover:scale-105"
                      >
                        <FaLinkedin className="w-3.5 h-3.5" />
                        <span>View Post</span>
                      </a>
                    )}
                  </div>

                  {/* Carousel Navigation */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="p-2.5 rounded-full glass border border-white/10 hover:border-primary hover:text-primary transition-all cursor-pointer text-muted-foreground"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      {testimonials.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentTestimonial(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            idx === currentTestimonial
                              ? "w-6 bg-primary"
                              : "w-1.5 bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="p-2.5 rounded-full glass border border-white/10 hover:border-primary hover:text-primary transition-all cursor-pointer text-muted-foreground"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
