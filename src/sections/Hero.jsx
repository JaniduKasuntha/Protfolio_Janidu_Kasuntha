import { Button } from "@/components/Button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { skill } from "@/components/Skills";

const skillIcons = skill;

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* =========================================================
          OLD-STYLE HERO BACKGROUND
      ========================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40"
        />

        {/* Dark gradient - intentionally lighter than new version */}
        <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/45 to-background" />

        {/* Ambient teal glow */}
        <div
          className="
            absolute
            top-1/4 left-1/2
            -translate-x-1/2
            w-150 h-150
            bg-primary/10
            rounded-full
            blur-[140px]
          "
        />
      </div>

      {/* =========================================================
          FLOATING AMBIENT PARTICLES
      ========================================================== */}
      {/* FLOATING AMBIENT PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-50"
            style={{
              backgroundColor: "#20B2A6",
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,

              "--moveX": `${((i * 37) % 200) - 100}px`,
              "--moveY": `${((i * 53) % 200) - 100}px`,

              animation: `particle-drift 7s ease-in-out infinite alternate`,
              animationDelay: `${(i % 10) * -0.5}s`,
            }}
          />
        ))}
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}
      <div className="container mx-auto max-w-7xl px-6 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-7">
            {/* Availability */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary" />

                <span>
                  Available for Full-Stack / AI Engineering Internships
                </span>
              </div>
            </div>

            {/* Name + Role */}
            <div className="space-y-3 animate-fade-in animation-delay-100">
              <h1
                className="
                  text-5xl
                  md:text-6xl
                  lg:text-6xl
                  xl:text-7xl
                  font-semibold
                  tracking-tight
                  leading-[1.05]
                  text-foreground
                "
              >
                Janidu Kasuntha
              </h1>

              <h2
                className="
                  text-xl
                  md:text-2xl
                  font-medium
                  text-primary
                "
              >
                Full-Stack & AI Engineering Undergraduate
              </h2>
            </div>

            {/* Description */}
            <p
              className="
                max-w-2xl
                text-base
                md:text-lg
                leading-8
                text-muted-foreground
                animate-fade-in
                animation-delay-200
              "
            >
              I study Information Technology at SLIIT, specializing in
              Artificial Intelligence. I build complete full-stack applications
              with React, Node.js, FastAPI and Spring Boot, and develop AI
              engineering features with Python, machine learning and LLM
              integration.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#projects">
                <Button size="default">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-lg
                  border
                  border-border
                  bg-background/40
                  text-sm
                  font-medium
                  text-foreground
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:border-primary/50
                  hover:bg-primary/5
                  hover:text-primary
                "
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-5
                pt-1
                animate-fade-in
                animation-delay-400
              "
            >
              <a
                href="https://github.com/JaniduKasuntha"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-muted-foreground
                  transition-colors
                  hover:text-primary
                "
              >
                <FaGithub className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/janidu-kasuntha/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-muted-foreground
                  transition-colors
                  hover:text-primary
                "
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href="mailto:janidukasuntha123@gmail.com"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-muted-foreground
                  transition-colors
                  hover:text-primary
                "
              >
                <SiGmail className="w-5 h-5" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE - PROFILE
          ====================================================== */}
          <div className="lg:col-span-5">
            <div
              className="
                relative
                w-full
                max-w-70
                sm:max-w-[320px]
                lg:max-w-87.5
                mx-auto
                lg:ml-auto
                lg:mr-0
                animate-fade-in
                animation-delay-300
              "
            >
              {/* Profile image */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-background/30
                  backdrop-blur-sm
                "
              >
                <img
                  src="/1.png"
                  alt="Janidu Kasuntha"
                  className="
                    w-full
                    aspect-4/5
                    object-cover
                    block
                  "
                />
              </div>

              {/* Metadata */}
              <div
                className="
                  mt-5
                  pt-4
                  border-t
                  border-white/10
                  flex
                  items-start
                  justify-between
                  gap-4
                  text-xs
                  font-mono
                  text-muted-foreground
                "
              >
                <div>
                  <p className="text-foreground/80">SLIIT</p>
                  <p className="mt-1">AI Specialization</p>
                </div>

                <div className="text-right">
                  <p className="text-foreground/80">2024 — 2028</p>
                  <p className="mt-1">Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            TECHNOLOGY MARQUEE
        ========================================================== */}
        <div
          className="
            mt-8
            md:mt-10
            pt-5
            border-t
            border-white/10
            animate-fade-in
            animation-delay-500
          "
        >
          <p
            className="
              text-sm
              uppercase
              tracking-widest
              text-muted-foreground/80
              mb-3
              text-center
              font-mono
            "
          >
            Core Technologies & Tooling
          </p>

          <div className="relative overflow-hidden marquee-mask">
            <div className="flex animate-marquee whitespace-nowrap">
              {/* First copy */}
              {Object.entries(skillIcons).map(([name, icon], idx) => (
                <div
                  key={`first-${idx}`}
                  className="
                    flex
                    items-center
                    gap-2
                    shrink-0
                    py-2
                    px-5
                    group
                    cursor-default
                  "
                >
                  <span
                    className="
                      text-white/75
                      transition-colors
                      group-hover:text-primary
                      [&>svg]:w-5
                      [&>svg]:h-5
                    "
                  >
                    {icon}
                  </span>

                  <span
                    className="
                      text-sm
                      md:text-base
                      font-medium
                      text-white/70
                      transition-colors
                      group-hover:text-white
                      font-mono
                    "
                  >
                    {name}
                  </span>
                </div>
              ))}

              {/* Duplicate for continuous scrolling */}
              {Object.entries(skillIcons).map(([name, icon], idx) => (
                <div
                  key={`second-${idx}`}
                  aria-hidden="true"
                  className="
                    flex
                    items-center
                    gap-2
                    shrink-0
                    py-2
                    px-5
                    group
                    cursor-default
                  "
                >
                  <span
                    className="
                      text-white/75
                      transition-colors
                      group-hover:text-primary
                      [&>svg]:w-5
                      [&>svg]:h-5
                    "
                  >
                    {icon}
                  </span>

                  <span
                    className="
                      text-sm
                      md:text-base
                      font-medium
                      text-white/70
                      transition-colors
                      group-hover:text-white
                      font-mono
                    "
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="hidden md:flex justify-center pt-4 animate-fade-in animation-delay-600">
            <a
              href="#about"
              className="group flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-primary transition-colors text-xs font-mono"
            >
              <span>EXPLORE</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
