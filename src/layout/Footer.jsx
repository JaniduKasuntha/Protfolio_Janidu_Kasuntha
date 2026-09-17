import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border bg-background/70">
      <div className="container mx-auto max-w-7xl px-6 py-6">
        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          {/* Identity */}
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/5 border border-primary/15 text-primary font-bold font-mono text-sm shrink-0">
              JK
            </span>

            <div>
              <div className="text-foreground font-semibold text-[15px]">
                Janidu Kasuntha
              </div>

              <p className="text-muted-foreground text-[13px] mt-0.5">
                Full-Stack & AI Engineering Undergraduate at SLIIT
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between md:justify-end gap-7">
            {/* Socials */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/JaniduKasuntha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/janidu-kasuntha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:janidukasuntha123@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>

            {/* Back To Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-[12px] font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <span>Back to Top</span>

              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* =====================================================
            BOTTOM ROW
        ===================================================== */}
        <div className="mt-5 pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span className="text-[12px] text-muted-foreground font-mono">
            © {currentYear} Janidu Kasuntha.
          </span>

          <span className="text-[12px] text-muted-foreground">
            Designed & Built with{" "}
            <span className="text-primary/70">
              precision
            </span>
            .
          </span>
        </div>
      </div>
    </footer>
  );
};