import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 200;

      for (const { href } of navLinks) {
        const id = href.replace("#", "");
        const el = document.getElementById(id);

        if (el) {
          const { offsetTop, offsetHeight } = el;

          if (
            scrollPos >= offsetTop &&
            scrollPos < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu with Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3">
      {/* =====================================================
          NAVBAR SURFACE
      ===================================================== */}
      <div
        className={`
          container mx-auto max-w-7xl
          rounded-xl
          border
          backdrop-blur-md
          transition-all duration-300
          ${
            isScrolled
                  ? "bg-background/90 border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.30)]"
                  : "bg-transparent border-transparent shadow-none"
          }
        `}
      >
        <div className="flex items-center justify-between px-4 sm:px-5 h-14">
          {/* Brand */}
          <a
            href="#"
            aria-label="Janidu Kasuntha - Home"
            className="flex items-center gap-2.5 text-foreground shrink-0"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-md border border-primary/20 bg-primary/5 font-mono text-[11px] font-semibold text-primary">
              JK
            </span>

            <span className="text-sm font-medium hidden sm:inline">
              Janidu Kasuntha
            </span>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
          <nav
            className="hidden md:flex items-center gap-5 lg:gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  href={link.href}
                  key={link.href}
                  className={`
                    relative
                    text-[12px] lg:text-[13px]
                    font-medium
                    transition-colors duration-150
                    py-2
                    ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Resume */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-primary/50 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-background hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden border-t border-white/10 animate-fade-in"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-4 sm:px-5 py-2">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <a
                    href={link.href}
                    key={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      py-3.5
                      text-sm
                      font-medium
                      transition-colors
                      border-b border-white/5
                      last:border-b-0
                      ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="py-3.5">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-primary"
                >
                  View Resume ↗
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};