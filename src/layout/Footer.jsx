import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";
import { PROFILE_LINKS } from "../constants/links";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

const socialLinks = [
  { icon: Github, href: PROFILE_LINKS.GITHUB, label: "GitHub" },
  { icon: Linkedin, href: PROFILE_LINKS.LINKEDIN, label: "LinkedIn" },
  { icon: Twitter, href: PROFILE_LINKS.TWITTER, label: "Twitter" },
  { icon: Instagram, href: PROFILE_LINKS.INSTAGRAM, label: "Instagram" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-block" aria-label="Home">
              <Logo className="w-10 h-10 mx-auto md:mx-0" />
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Subankar Dey. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
