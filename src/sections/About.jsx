import { Bot, Code2, Rocket, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Secure Development",
    description:
      "Implementing server-side validations and mitigating vulnerabilities.",
  },
  {
    icon: Rocket,
    title: "Data-Driven",
    description:
      "Visualizing data insights and managing robust database schemas.",
  },
  {
    icon: Users,
    title: "Cybersecurity",
    description:
      "Leveraging Kali Linux, Nmap, Wireshark, and Metasploit for robust security.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Building LLM-powered agents and workflow automation with n8n, OpenAI, and LangChain.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <Reveal>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </Reveal>

            <Reveal
              as="h2"
              delay={100}
              className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground"
            >
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </Reveal>

            <Reveal
              delay={200}
              className="space-y-4 text-muted-foreground"
            >
              <p>
                I'm a discipline-driven 3rd-year Computer Science student at Osmania University,
                with a strong foundation in Data Structures, Algorithms, and Relational Database Design.
              </p>
              <p>
                My expertise spans full-stack web development, security-focused backend systems,
                and AI-driven automation — building LLM-powered conversational agents and voice
                pipelines using OpenAI, Gemini, and workflow orchestration tools like n8n.
              </p>
              <p>
                I was selected for an academic study visit to ISRO/NRSC on satellite data processing,
                and I'm currently contributing to open-source software targeting Google Summer of
                Code 2026 — actively seeking Software Engineering, Web Development, or AI/ML
                internship roles.
              </p>
            </Reveal>

            <Reveal
              delay={300}
              className="glass rounded-2xl p-6 glow-border"
            >
              <p className="text-lg font-medium italic text-foreground">
                "Demonstrating 'Quality and Discipline', my goal is to engineer
                end-to-end solutions that are as secure as they are visually engaging."
              </p>
            </Reveal>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <Reveal
                key={idx}
                delay={(idx + 1) * 100}
                className="glass hover-lift p-6 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
