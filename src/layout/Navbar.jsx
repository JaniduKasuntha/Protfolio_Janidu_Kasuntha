import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50
                    ${isScrolled ? "glass py-3" : "bg-transparent py-5"}`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 ">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          JK<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 ">
          <div className="glass rounded-full px-4 py-2 flex items-center gap-1 border border-black/10 shadow-xl">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block items-center gap-1">
          <a href="#contact">
          <Button size="sm">Contact</Button>
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 glass-strong animate-fade-in">
          <div className="container mx-auto flex flex-col items-left gap-3 px-5 py-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className=" text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
