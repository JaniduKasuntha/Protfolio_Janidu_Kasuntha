import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Trophy,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { Reveal } from "@/components/Reveal";

/* =========================================================
   ACHIEVEMENTS
   ========================================================= */

const achievements = [
  {
    id: 4,
    title: "Advanced Professional English Certification",
    organization: "British Council Sri Lanka",
    date: "2019",
    description:
      "Completed professional English communication training through the British Council Sri Lanka.",
    link: null,
  },
  {
    id: 5,
    title: "Code Night N2 — Linux Session Leaderboard Topper",
    organization: "SLIIT Mozilla Campus Club",
    date: "2026",
    description:
      "Recognized as one of the leaderboard toppers at the Code Night N2 Linux Session.",
    link: "https://lnkd.in/p/gd_PtKvz",
    image:"/codenightceti.png"
  },
];

/* =========================================================
   TESTIMONIALS / LINKEDIN FEEDBACK

   To add another testimonial later:

   {
     id: 3,
     name: "Person Name",
     role: "LinkedIn Recommendation",
     image: "/testimonial3.png",
     link: "https://www.linkedin.com/..."
   }

   The carousel updates automatically.
   ========================================================= */

const testimonials = [
  {
    id: 1,
    name: "Nadeesha Malshan",
    role: "LinkedIn Recommendation / Project Feedback",
    image: "/nad.png",
    link: "https://www.linkedin.com/posts/janidu-kasuntha_we-are-proud-to-announce-the-successful-completion-activity-7457426036067053568-3YD6",
  },
  {
    id: 2,
    name: "Sudharma Paranavithana",
    role: "LinkedIn Endorsement / Project Feedback",
    image: "/sud.png",
    link: "https://www.linkedin.com/posts/janidu-kasuntha_fullstackdevelopment-reactnative-nodejs-activity-7457414708610879488-DiHB",
  },
  {
    id: 3,
    name: "Code night N2 Linux Session",
    role: "LinkedIn Endorsement / Project Feedback",
    image: "/codenight.jpeg",
    link: "https://lnkd.in/p/gd_PtKvz",
  },
];

/* =========================================================
   COMPONENT
   ========================================================= */

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonial = testimonials[currentTestimonial];

  const nextTestimonial = () => {
    setCurrentTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section
      id="testimonials"
      className="py-16 lg:py-20 border-b border-border"
    >
      <div className="container mx-auto max-w-7xl px-6">

        {/* =====================================================
            SECTION TITLE
        ===================================================== */}

        <Reveal>
          <div className="mb-12 lg:mb-16">
            <span className="text-[18px] md:text-[20px] font-mono text-primary/80 font-semibold tracking-widest uppercase">
              06 / Achievements & Kind Words
            </span>
          </div>
        </Reveal>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">

          {/* ===================================================
              LEFT — ACHIEVEMENTS
          =================================================== */}

          <div>
            <Reveal delay={100}>
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-border">
                <Trophy className="w-4 h-4 text-primary" />

                <h3 className="text-[13px] md:text-[14px] font-mono text-primary/80 font-semibold uppercase tracking-widest">
                  Verified Achievements
                </h3>
              </div>
            </Reveal>

            <div>
              {achievements.map((item, index) => (
                <Reveal key={item.id} delay={120 + index * 40}>
                  <article className="py-6 border-b border-border/50 group">

                    {/* Title + Date */}

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <h4 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>

                      <span className="text-[11px] font-mono text-muted-foreground shrink-0">
                        {item.date}
                      </span>
                    </div>

                    {/* Organization */}

                    <p className="text-[12px] font-medium text-foreground/80 mb-3">
                      {item.organization}
                    </p>

                    {/* Description */}

                    <p className="text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Achievement Preview */}

                    {item.image && (
                      <div className="relative inline-flex group/achievement">
                        <button
                          type="button"
                          aria-label={`Preview ${item.title}`}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            px-3.5
                            py-2
                            rounded-lg
                            border
                            border-primary/30
                            text-[12px]
                            font-medium
                            text-primary
                            hover:bg-primary/10
                            hover:border-primary/60
                            transition-all
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-primary/50
                          "
                        >
                          View Achievement

                          <Trophy className="w-3.5 h-3.5" />
                        </button>

                        <div className="pointer-events-none absolute left-full top-1/2 z-10 ml-4 hidden w-130 -translate-y-1/2 rounded-xl border border-border bg-card p-2 opacity-0 shadow-xl transition-opacity duration-200 group-hover/achievement:block group-hover/achievement:opacity-100 group-focus-within/achievement:block group-focus-within/achievement:opacity-100">
                          <img
                            src={item.image}
                            alt={`${item.title} achievement preview`}
                            className="h-auto max-h-[40rem] w-full rounded-lg object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ===================================================
              RIGHT — TESTIMONIALS
          =================================================== */}

          <div className="lg:sticky lg:top-28">

            <Reveal delay={100}>
              <h3 className="text-[13px] md:text-[14px] font-mono text-primary/80 font-semibold uppercase tracking-widest mb-8 pb-4 border-b border-border">
                Feedback & Endorsements
              </h3>
            </Reveal>

            <Reveal delay={180}>

              {/* =================================================
                  TESTIMONIAL CARD
              ================================================= */}

              <div className="relative w-full max-w-[50 0px] mx-auto rounded-2xl border border-border bg-card/40 overflow-hidden">

                {/* ===============================================
                    CARD HEADER
                =============================================== */}

                <div className="flex items-center justify-between px-4 py-3 border-b border-border/70">

                  <div className="flex items-center gap-2.5">

                    <div className="w-8 h-8 rounded-lg border border-primary/30 bg-primary/5 flex items-center justify-center">
                      <FaLinkedin className="w-4 h-4 text-primary" />
                    </div>

                    <div>
                      <p className="text-[12px] font-medium text-foreground">
                        LinkedIn Feedback
                      </p>

                      <p className="text-[9px] font-mono tracking-wider text-muted-foreground">
                        VERIFIED POST
                      </p>
                    </div>

                  </div>

                  <span className="text-[10px] font-mono text-muted-foreground">
                    {String(currentTestimonial + 1).padStart(2, "0")}
                    {" / "}
                    {String(testimonials.length).padStart(2, "0")}
                  </span>

                </div>

                {/* ===============================================
                    SCREENSHOT
                =============================================== */}

                <div className="p-3">

                  <div className="relative w-full rounded-xl border border-border/70 bg-background/50 overflow-hidden flex justify-center">

                    <img
                      key={testimonial.id}
                      src={testimonial.image}
                      alt={`${testimonial.name} LinkedIn feedback`}
                      className="
                        w-auto
                        max-w-full
                        h-auto
                        max-h-[400px]
                        object-contain
                      "
                      loading="lazy"
                    />

                  </div>

                </div>

                {/* ===============================================
                    PERSON INFORMATION
                =============================================== */}

                <div className="px-4 pb-4">

                  <div className="pt-3 border-t border-border/70">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                      <div>
                        <h4 className="text-[14px] font-semibold text-foreground">
                          {testimonial.name}
                        </h4>

                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          {testimonial.role}
                        </p>
                      </div>

                      {/* =========================================
                          VIEW LINKEDIN POST BUTTON
                      ========================================= */}

                      {testimonial.link && (
                        <a
                          href={testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            px-3
                            py-2
                            rounded-lg
                            border
                            border-primary/40
                            bg-primary/5
                            text-[11px]
                            font-semibold
                            text-primary
                            hover:bg-primary
                            hover:text-background
                            hover:border-primary
                            transition-all
                            shrink-0
                          "
                        >
                          <FaLinkedin className="w-3.5 h-3.5" />

                          View Post

                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                    </div>

                  </div>

                </div>

                {/* ===============================================
                    CAROUSEL CONTROLS
                =============================================== */}

                {testimonials.length > 1 && (
                  <div className="px-4 py-3 border-t border-border/70">

                    <div className="flex items-center justify-between">

                      {/* Previous */}

                      <button
                        type="button"
                        onClick={previousTestimonial}
                        aria-label="Previous testimonial"
                        className="
                          w-9
                          h-9
                          flex
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-border
                          text-muted-foreground
                          hover:text-primary
                          hover:border-primary/50
                          hover:bg-primary/5
                          transition-all
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-primary/50
                        "
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>

                      {/* Pagination */}

                      <div className="flex items-center gap-2">

                        {testimonials.map((item, index) => {
                          const isActive =
                            index === currentTestimonial;

                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() =>
                                goToTestimonial(index)
                              }
                              aria-label={`Go to testimonial ${
                                index + 1
                              }`}
                              aria-current={
                                isActive ? "true" : undefined
                              }
                              className={`
                                h-1.5
                                rounded-full
                                transition-all
                                duration-300
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-primary/50

                                ${
                                  isActive
                                    ? "w-7 bg-primary"
                                    : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                                }
                              `}
                            />
                          );
                        })}

                      </div>

                      {/* Next */}

                      <button
                        type="button"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                        className="
                          w-9
                          h-9
                          flex
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-border
                          text-muted-foreground
                          hover:text-primary
                          hover:border-primary/50
                          hover:bg-primary/5
                          transition-all
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-primary/50
                        "
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>

                    </div>

                  </div>
                )}

              </div>

            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
};