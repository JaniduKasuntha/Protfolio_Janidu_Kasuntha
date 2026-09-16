import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, Download, ChevronDown, Sparkles, FolderGit2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { skillIcons } from "@/components/Skills";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 md:pt-28 pb-16">
      {/* Background Image & Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/bg.jpg"
          alt="Atmosphere"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      {/* Subtle Floating Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-40"
            style={{
              backgroundColor: "#2dd4bf",
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animation: `slow-drift ${12 + (i % 8)}s ease-in-out infinite`,
              animationDelay: `${(i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Main Hero Container */}
      <div className="container mx-auto max-w-7xl px-6 relative z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Headline & Information (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status / Role Tag */}
            <div className="animate-fade-in inline-flex">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 text-xs md:text-sm font-medium text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                <span>AI & Software Engineering Undergraduate</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-foreground animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">intelligent</span> & scalable software experiences.
              </h1>

              {/* Refined, punchy bio text */}
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in animation-delay-200">
                Hi, I'm <span className="text-foreground font-semibold">Janidu Kasuntha</span>. I specialize in bridging predictive machine learning models with high-performance, full-stack applications. Seeking an AI or Software Engineering internship where I can build impactful systems.
              </p>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
              <a href="#projects">
                <Button size="default" variant="primary" className="group">
                  <FolderGit2 className="w-4 h-4" />
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <AnimatedBorderButton
                as="a"
                href="/cv.pdf"
                download="Janidu_Kasuntha_CV.pdf"
                className="group"
              >
                <Download className="w-4 h-4 text-primary transition-transform group-hover:-translate-y-0.5" />
                <span>Download CV</span>
              </AnimatedBorderButton>
            </div>

            {/* Social Channels Bar */}
            <div className="flex items-center gap-4 pt-2 animate-fade-in animation-delay-400">
              <span className="text-xs uppercase tracking-wider text-muted-foreground/80 font-mono">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/JaniduKasuntha",
                    label: "GitHub Profile",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/janidu-kasuntha/",
                    label: "LinkedIn Profile",
                  },
                  {
                    icon: SiGmail,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=janidukasuntha123@gmail.com",
                    label: "Compose Email via Gmail",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="p-2.5 rounded-full glass border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 text-muted-foreground hover:scale-110 active:scale-95"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Presentation (5 cols) */}
          <div className="lg:col-span-5 flex justify-center animate-fade-in animation-delay-300">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/30 via-teal-500/20 to-blue-500/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Profile Card Container */}
              <div className="relative glass-card rounded-3xl p-3 border border-white/10 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl bg-surface/50 aspect-[4/5]">
                  <img
                    src="/1.png"
                    alt="Janidu Kasuntha"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle gradient shadow at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Availability Badge */}
                <div className="absolute -bottom-3 -right-3 glass-strong rounded-2xl px-4 py-2.5 border border-primary/30 shadow-xl animate-float">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-semibold text-foreground tracking-wide">
                      Available for Internships
                    </span>
                  </div>
                </div>

                {/* Top Floating Badge */}
                <div className="absolute -top-3 -left-3 glass-strong rounded-2xl px-3.5 py-2 border border-white/10 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">
                      SLIIT (AI Specialization)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Technology Showcase */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-white/5 animate-fade-in animation-delay-500">
          <p className="text-xs uppercase tracking-widest text-muted-foreground/70 mb-4 text-center font-mono">
            Core Technologies & Tooling
          </p>
          <div className="relative overflow-hidden marquee-mask">
            <div className="flex animate-marquee whitespace-nowrap">
              {Object.entries(skillIcons).map(([name, icon], idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 shrink-0 py-2 px-5 group cursor-default"
                >
                  <span className="text-muted-foreground/60 group-hover:text-primary transition-colors">
                    {icon}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground/70 group-hover:text-foreground transition-colors font-mono">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden md:flex justify-center pt-8 animate-fade-in animation-delay-600">
        <a
          href="#about"
          className="group flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-primary transition-colors text-xs font-mono"
        >
          <span>EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-primary" />
        </a>
      </div>
    </section>
  );
};
