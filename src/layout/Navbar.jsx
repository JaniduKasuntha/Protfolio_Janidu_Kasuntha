import { Button } from "@/components/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Kind Words" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section on scroll
      const sections = ["about", "skills", "education", "projects", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto max-w-7xl flex items-center justify-between px-6">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-1 text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          <span className="p-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-mono mr-1">
            JK
          </span>
          <span>Janidu</span>
          <span className="text-primary group-hover:animate-pulse">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1.5 flex items-center gap-1 border border-white/10 shadow-lg shadow-black/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  href={link.href}
                  key={link.href}
                  className={`px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface/60"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact">
            <Button size="sm" variant="primary" className="font-semibold shadow-md shadow-primary/20">
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2.5 rounded-xl glass border border-white/10 text-foreground hover:text-primary transition-colors cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong border-b border-white/10 animate-fade-in shadow-2xl">
          <div className="container mx-auto flex flex-col gap-2 px-6 py-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary/15 text-primary border border-primary/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-white/5 mt-1">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block">
                <Button size="sm" className="w-full justify-center">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
