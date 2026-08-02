import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "subankardey1434@gmail.com",
    href: "mailto:subankardey1434@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8900954856",
    href: "tel:+918900954856",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, Telangana-500007",
    href: "#",
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
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 md:opacity-100" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl opacity-50 md:opacity-100" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <Reveal as="span" className="block text-secondary-foreground text-[10px] md:text-sm font-semibold tracking-[0.2em] uppercase">
            Get In Touch
          </Reveal>
          <Reveal as="h2" delay={100} className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 md:mt-4 mb-4 md:mb-6 text-secondary-foreground leading-tight">
            Let's build<br className="block md:hidden" />
            <span className="font-serif italic font-normal text-white md:ml-2">
              something great.
            </span>
          </Reveal>
          <Reveal as="p" delay={200} className="text-muted-foreground text-xs sm:text-sm md:text-base px-2 md:px-0 opacity-80">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 md:gap-12 max-w-5xl mx-auto">
          <Reveal delay={300} className="glass p-5 md:p-8 rounded-2xl md:rounded-3xl border border-primary/20">
            <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Send a Message
            </h3>
            <form className="space-y-3.5 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  type="email"
                  className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full text-sm md:text-base py-3 md:py-4"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={400} className="space-y-4 md:space-y-6">
            <div className="glass hover-lift rounded-2xl md:rounded-3xl p-5 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] md:text-sm text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-sm md:text-base font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-2xl md:rounded-3xl p-5 md:p-8 border border-primary/30">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm md:text-base font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-[13px] md:text-sm leading-relaxed">
                I'm actively seeking internships in Software Engineering, Web Development,
                or AI/ML. If you are looking for a dedicated engineering student
                to join your team, let's talk!
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
