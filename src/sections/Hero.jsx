import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { PROFILE_LINKS } from "../constants/links";

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "C++",
  "SQL",
  "PHP",
  "React",
  "Node.js",
  "Express",
  "OpenAI API",
  "Gemini API",
  "LangChain",
  "n8n",
  "REST APIs",
  "WebSockets",
  "JWT",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Linux",
  "Kali Linux",
  "Postman",
];

export const Hero = () => {
  const getYearBadge = () => {
    const today = new Date();
    const gradDate = new Date(2027, 4);
    if (today > gradDate) return { main: "B.Tech", sub: "Graduate" };
    
    const startDate = new Date(2023, 7);
    const yearsDiff = (today - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    if (yearsDiff >= 3) return { main: "4th", sub: "Year Student" };
    if (yearsDiff >= 2) return { main: "3rd", sub: "Year Student" };
    if (yearsDiff >= 1) return { main: "2nd", sub: "Year Student" };
    return { main: "1st", sub: "Year Student" };
  };
  const yearBadge = getYearBadge();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}hero-banner.jpg`}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#6366F1",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs md:text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Computer Science Student • Full-Stack & AI Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary glow-text">secure</span>
                <br className="hidden sm:block" />
                {" "}applications with
                <br />
                <span className="font-serif italic font-normal text-white">
                  discipline.
                </span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in animation-delay-200">
                Hi, I'm Subankar Dey — a discipline-driven 3rd-year CS student. I build secure, full-stack web apps and AI-powered automation agents using LLM APIs.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in animation-delay-300">
              <AnimatedBorderButton href="#contact" className="w-full sm:w-auto justify-center">
                Contact Me <ArrowRight className="w-5 h-5" />
              </AnimatedBorderButton>
              <AnimatedBorderButton href={`${import.meta.env.BASE_URL}cv/subankar_dey_cv.pdf`} download="subankar_dey_cv.pdf" className="w-full sm:w-auto justify-center">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Follow me: </span>
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: PROFILE_LINKS.GITHUB, target: "_blank", rel: "noopener noreferrer" },
                  { icon: Linkedin, href: PROFILE_LINKS.LINKEDIN, target: "_blank", rel: "noopener noreferrer" },
                  { icon: Twitter, href: PROFILE_LINKS.TWITTER, target: "_blank", rel: "noopener noreferrer" },
                  { icon: Instagram, href: PROFILE_LINKS.INSTAGRAM, target: "_blank", rel: "noopener noreferrer" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.target}
                    rel={social.rel}
                    className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {<social.icon className="w-4 h-4 md:w-5 md:h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image Container */}
            <div className="relative max-w-[280px] sm:max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-1.5 md:p-2 glow-border group/photo transition-transform duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500" />
                <img
                  src={`${import.meta.env.BASE_URL}profile-photo.png`}
                  alt="Subankar Dey"
                  fetchPriority="high"
                  className="w-full aspect-[4/5] object-cover rounded-2xl relative z-10"
                />

                {/* Name Nameplate Overlay */}
                <div className="absolute inset-x-1.5 md:inset-x-2 bottom-1.5 md:bottom-2 p-4 md:p-6 bg-gradient-to-t from-background/90 via-background/40 to-transparent rounded-b-2xl z-20">
                  <div className="text-xl md:text-2xl font-bold text-white tracking-tight">Subankar Dey</div>
                </div>

                {/* Floating Status Badge */}
                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 glass-strong rounded-xl px-3 py-2 md:px-5 md:py-3 animate-float border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                      <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-75" />
                    </div>
                    <span className="text-[10px] md:text-sm font-bold tracking-tight text-white uppercase">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 glass-strong rounded-xl px-3 py-2 md:px-5 md:py-3 animate-float animation-delay-500 border border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20">
                  <div className="text-xl md:text-3xl font-black text-primary leading-none mb-0.5">{yearBadge.main}</div>
                  <div className="text-[9px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest text-center">
                    {yearBadge.sub}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
