import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { ArrowUp, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/JaniduKasuntha",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/janidu-kasuntha/",
    label: "LinkedIn",
  },
  {
    icon: SiGmail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=janidukasuntha123@gmail.com",
    label: "Gmail",
  },
];

const footerNav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Kind Words" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-card/60 backdrop-blur-xl">
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Summary */}
          <div className="text-center md:text-left space-y-2">
            <a
              href="#"
              className="inline-flex items-center gap-1 text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              <span className="p-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-mono mr-1">
                JK
              </span>
              <span>Janidu Kasuntha</span>
              <span className="text-primary">.</span>
            </a>
            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              AI & Software Engineering Undergraduate at SLIIT. Dedicated to crafting intelligent models & production web/mobile systems.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="p-2 rounded-full glass border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground hover:scale-110 active:scale-95"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-full glass border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground hover:scale-110 active:scale-95 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {currentYear} Janidu Kasuntha. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Designed & Built by</span>
            <span className="text-foreground font-semibold">Janidu Kasuntha</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
