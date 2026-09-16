import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";

const contactMethods = [
  {
    icon: Mail,
    label: "Direct Email",
    value: "janidukasuntha123@gmail.com",
    href: "mailto:janidukasuntha123@gmail.com",
    actionLabel: "Send Email",
  },
  {
    icon: SiGmail,
    label: "Gmail Compose",
    value: "Open directly in Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=janidukasuntha123@gmail.com",
    actionLabel: "Launch Compose",
    isExternal: true,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/janidu-kasuntha",
    href: "https://www.linkedin.com/in/janidu-kasuntha/",
    actionLabel: "Connect",
    isExternal: true,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/JaniduKasuntha",
    href: "https://github.com/JaniduKasuntha",
    actionLabel: "Follow",
    isExternal: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 70 494 9031",
    href: "tel:+94704949031",
    actionLabel: "Call",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kiribathgoda, Western Province, Sri Lanka",
    href: "https://maps.app.goo.gl/BK5LnJeHKnjskwWC9",
    actionLabel: "View Map",
    isExternal: true,
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Email service is temporarily unavailable. Please use the direct email or Gmail compose button below.");
      }

      await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err.message ||
          "Failed to send message via form. Please use the direct Gmail compose button to reach me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-primary uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Let's build <span className="text-primary glow-text">something meaningful.</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Whether you have an internship opportunity, a project to collaborate on, or just want to discuss AI systems, my inbox is open!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column - Contact Form (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <div>
                <h3 className="text-lg font-bold text-foreground">Send a Message</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Direct submission delivers to my personal inbox
                </p>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=janidukasuntha123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium border border-primary/20 transition-colors"
                title="Launch Gmail Compose directly"
              >
                <SiGmail className="w-3.5 h-3.5" />
                <span>Open in Gmail</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Connor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Hello Janidu, I'd like to discuss an opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surface/80 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className="w-full justify-center py-3.5"
              >
                {isLoading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>

              {/* Status Alert */}
              {submitStatus.type && (
                <div
                  className={`flex items-start gap-2.5 p-3.5 rounded-xl text-xs sm:text-sm animate-fade-in ${
                    submitStatus.type === "success"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column - Direct Info & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-5 animate-fade-in animation-delay-200">
            {/* Availability Box */}
            <div className="glass-card rounded-2xl p-5 border border-primary/30 shadow-lg">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-sm font-bold text-foreground">
                  Available for Internship Positions
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Actively seeking AI Engineering, Machine Learning, and Full-Stack Software Engineering internships for 2024 / 2025.
              </p>
            </div>

            {/* Quick Contact Links */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground pb-2 border-b border-white/5">
                Contact Directory
              </h4>

              <div className="space-y-2">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.href}
                    target={method.isExternal ? "_blank" : undefined}
                    rel={method.isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-surface/80 border border-transparent hover:border-white/5 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                        <method.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-muted-foreground">{method.label}</div>
                        <div className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                          {method.value}
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-primary group-hover:translate-x-0.5 transition-transform shrink-0 hidden sm:inline-block">
                      {method.actionLabel} →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
