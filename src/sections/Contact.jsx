import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pedro@example.com",
    href: "mailto:pedro@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

export const Contact = () => {

  const [formData, setformData] = useState({
    name: "",
    email: "",
    massage: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "", //
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      /* prevent refreshing the page on form submit*/
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: " " });

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publickey = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

      if (!serviceID || !templateID || !publickey) {
        throw new Error(
          "Email Configureation is missing . please check your env ",
        );
      }
      await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.massage,
        },
        publickey,
      );

      setSubmitStatus({
        type: "Success",
        message: "Massage sent successfully! will get back to you soon .",
      });
      setformData({ name: "", email: "", massage: "" });
    } catch (err) {
      console.error("EmailJS error : ", err);
      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send the message . Please try again .",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* first column - form*/}
          <div className="glass rounded-3xl p-8 border border-primary/40 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name :
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-border px-4 py-3 bg-surface rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => {
                    setformData({ ...formData, name: e.target.value });
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email :
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-border px-4 py-3 bg-surface rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="mail@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setformData({ ...formData, email: e.target.value });
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message :
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border border-border px-4 py-3 bg-surface rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Your Message..."
                  required
                  value={formData.massage}
                  onChange={(e) => {
                    setformData({ ...formData, massage: e.target.value });
                  }}
                />
              </div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground sm:w-auto w-full md:w-auto active:scale-95 active:duration-75"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send />
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex flex-row items-center p-3 rounded-2xl mt-4 ${submitStatus.type === "Success"
                    ? "bg-green-500/10 text-green-500 border border-green-500/20"
                    : "bg-red-500/10 text-red-500 border border-red-500/20"
                    }`}
                >
                  {submitStatus.type === "Success" ? (
                    <CheckCircle className="w-5 h-5 mr-2" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-2" />
                  )}
                  <p className="ml-2">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
          {/* second column - contact info*/}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8 border border-primary/30 animate-fade-in animation-delay-400">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    className="flex items-center gap-5 p-3 rounded-2xl hover:bg-surface/60  transition-all group"
                  >
                    <div className="flex bg-primary/10 rounded-xl w-12 h-12 items-center justify-center group-hover:bg-primary/30 transition-colors shrink-0 group-hover:scale-110 duration-70">
                      <info.icon className="text-primary w-5 h-5 group-hover:scale-108" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30 animate-fade-in animation-delay-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-foreground">
                  Currently Available
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
