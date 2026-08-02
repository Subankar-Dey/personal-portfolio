import { Reveal } from "@/components/Reveal";

const experiences = [
  {
    period: "Upcoming",
    role: "Open Source Contributor",
    company: "Google Summer of Code (Targeting 2026)",
    description:
      "Actively maintaining a repository for a GSoC 2026 target project, demonstrating consistent version control habits and robust documentation skills.",
    technologies: ["Git", "GitHub", "Open Source Development"],
    current: true,
  },
  {
    period: "Recent",
    role: "Academic Visit Attendee",
    company: "ISRO / National Remote Sensing Centre (NRSC)",
    description:
      "Selected for an exclusive academic visit to study satellite data processing and the technical architecture of the Chandrayaan missions.",
    technologies: ["Satellite Data Processing", "Space Tech Architecture"],
    current: false,
  },
  {
    period: "Project",
    role: "AI/Automation Engineer",
    company: "Autonomous WhatsApp AI Chatbot & Workflow Automation",
    description: "Engineered an AI-powered conversational agent using n8n to automate customer support and business workflows, integrating OpenAI and Gemini APIs for multi-turn contextual conversations. Connected MySQL and Google Sheets to log conversation state with custom webhook triggers and retry logic.",
    technologies: ["n8n", "OpenAI API", "Gemini API", "WhatsApp Cloud API", "MySQL"],
    current: false,
  },
  {
    period: "Project",
    role: "Voice AI Engineer",
    company: "AI Voice Agent & Conversational Telephony",
    description: "Built an end-to-end voice AI pipeline converting speech to text via Whisper, processing logic via LLMs, and synthesizing natural audio via ElevenLabs. Handled real-time calls through Twilio Voice API using asynchronous n8n workflows, including automated appointment booking and call routing.",
    technologies: ["n8n", "Whisper STT", "ElevenLabs TTS", "Twilio Voice API"],
    current: false,
  },
  {
    period: "Project",
    role: "Full-Stack Developer",
    company: "Student Attendance Management System",
    description: "Developed a multi-role management system using PHP and MySQL, featuring secure authentication and Role-Based Access Control (RBAC). Engineered a responsive dashboard using SCSS/Bootstrap 4 and integrated Chart.js for data insights.",
    technologies: ["PHP", "MySQL", "Bootstrap 4", "SCSS", "Chart.js"],
    current: false,
  },
  {
    period: "Project",
    role: "Backend Developer",
    company: "Real-Time Messaging Platform",
    description: "Built a real-time social messenger using PHP and AJAX, focusing on low-latency message delivery and asynchronous database updates. Managed end-to-end user lifecycle.",
    technologies: ["PHP", "AJAX", "MySQL", "JavaScript"],
    current: false,
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Reveal
            as="span"
            className="block text-secondary-foreground text-sm font-medium tracking-wider uppercase"
          >
            Career Journey
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </Reveal>

          <Reveal as="p" delay={200} className="text-muted-foreground">
            A timeline of my professional growth, showcasing my projects, academic visits, and open source contributions.
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(99,102,241,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <Reveal
                key={idx}
                delay={(idx + 1) * 100}
                className="relative grid md:grid-cols-2 gap-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass hover-lift p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
