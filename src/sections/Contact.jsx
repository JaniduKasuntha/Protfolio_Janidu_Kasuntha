import { useState } from "react";
import { ExternalLink, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/Button";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Email Configuration is missing.");
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
        message: "Message sent successfully! I will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: err.message || "Failed to send the message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 border-b border-border">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Section Identifier */}
        <Reveal>
          <div className="mb-20">
            <span className="text-[18px] md:text-[20px] font-mono text-primary/80 font-semibold tracking-widest uppercase">
              07 / Contact
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">
          
          {/* Left Column - Form */}
          <Reveal delay={100}>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-8">
                Send a Message
              </h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-[13px] font-mono text-muted-foreground uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full border border-border px-4 py-3 bg-surface rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] font-mono text-muted-foreground uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-border px-4 py-3 bg-surface rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                    placeholder="mail@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[13px] font-mono text-muted-foreground uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full border border-border px-4 py-3 bg-surface rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground"
                    placeholder="Your Message..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full sm:w-auto mt-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
                
                {submitStatus.type && (
                  <div
                    className={`flex items-center p-4 rounded-lg mt-4 border ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : "bg-red-500/10 text-red-500 border-red-500/20"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0" />
                    )}
                    <p className="ml-3 text-sm">{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </div>
          </Reveal>

          {/* Right Column - Info */}
          <Reveal delay={200}>
            <div className="flex flex-col items-start space-y-12 lg:pl-12 lg:border-l border-border h-full">
              
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
                  Direct Contact
                </h2>
                <a 
                  href="mailto:janidukasuntha123@gmail.com"
                  className="group inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-primary hover:text-primary-hover transition-colors"
                >
                  <span>janidukasuntha123@gmail.com</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I am currently available for Full-Stack / AI Engineering Internships. 
                Whether you have a specific role in mind, a project to collaborate on, or just 
                want to connect, my inbox is always open.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 pt-6 border-t border-border w-full">
                <a
                  href="https://github.com/JaniduKasuntha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[14px] font-medium text-foreground hover:text-primary transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub ↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/janidu-kasuntha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[14px] font-medium text-foreground hover:text-primary transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span>LinkedIn ↗</span>
                </a>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
