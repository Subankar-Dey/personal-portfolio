import { Code2, Brain, Workflow, Database, Terminal } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "Java", "JavaScript (ES6+)", "C", "C++", "PHP", "SQL"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: [
      "OpenAI API",
      "Gemini API",
      "Claude API",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "Function Calling",
      "Vector Databases (Pinecone, ChromaDB)",
      "MCP",
    ],
  },
  {
    icon: Workflow,
    title: "Frameworks & Automation",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "n8n Workflows",
      "REST APIs",
      "WebSockets",
      "JWT Authentication",
      "Twilio Voice API",
      "WhatsApp Cloud API",
      "Webhooks",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    icon: Terminal,
    title: "Developer Tools",
    skills: [
      "Git/GitHub",
      "Docker",
      "Linux (Bash)",
      "VS Code",
      "Postman",
      "Kali Linux (Nmap, Wireshark, Metasploit)",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal
            as="span"
            className="block text-secondary-foreground text-sm font-medium tracking-wider uppercase"
          >
            What I Work With
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Technical{" "}
            <span className="font-serif italic font-normal text-white">
              skills.
            </span>
          </Reveal>
          <Reveal as="p" delay={200} className="text-muted-foreground">
            From core languages and databases to AI/ML tooling and workflow
            automation.
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <Reveal
              key={idx}
              delay={(idx + 1) * 100}
              className={`glass hover-lift p-6 rounded-2xl ${
                idx === skillCategories.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-surface border border-border/50 rounded-full text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
