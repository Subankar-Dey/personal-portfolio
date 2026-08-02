import { ArrowUpRight, Github, Bot, Phone, LayoutDashboard, MessagesSquare } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Reveal } from "@/components/Reveal";
import { PROJECT_LINKS, PROFILE_LINKS } from "../constants/links";

const projects = [
  {
    title: "Autonomous WhatsApp AI Chatbot & Workflow Automation",
    description:
      "AI-powered conversational agent built with n8n that automates customer support and business workflows, using OpenAI and Gemini APIs for multi-turn contextual conversations and automated task execution.",
    icon: Bot,
    thumbnail: `${import.meta.env.BASE_URL}projects/whatsapp-ai-chatbot.jpg`,
    tags: ["n8n", "OpenAI API", "Gemini API", "WhatsApp Cloud API", "MySQL"],
    link: null,
  },
  {
    title: "AI Voice Agent & Conversational Telephony",
    description:
      "End-to-end voice AI pipeline converting speech to text via Whisper, processing logic through LLMs, and synthesizing natural audio via ElevenLabs, handling real-time calls through Twilio Voice API.",
    icon: Phone,
    thumbnail: `${import.meta.env.BASE_URL}projects/ai-voice-agent.jpg`,
    tags: ["n8n", "Whisper STT", "ElevenLabs TTS", "Twilio Voice API"],
    link: null,
  },
  {
    title: "Student Attendance Management System",
    description:
      "Multi-role management system (Admin/Teacher/Student) with strict RBAC in PHP and MySQL, featuring a mobile-responsive SCSS/Bootstrap dashboard and Chart.js analytics.",
    icon: LayoutDashboard,
    thumbnail: `${import.meta.env.BASE_URL}projects/student-attendance-system.jpg`,
    tags: ["PHP", "MySQL", "Bootstrap 4", "SCSS", "Chart.js"],
    link: PROJECT_LINKS.ATTENDANCE_SYSTEM,
  },
  {
    title: "Real-Time Messaging Platform",
    description:
      "Low-latency social messenger built with PHP and asynchronous AJAX polling for non-blocking database updates, with full secure user lifecycle management.",
    icon: MessagesSquare,
    thumbnail: `${import.meta.env.BASE_URL}projects/messaging-platform.jpg`,
    tags: ["PHP", "AJAX", "MySQL", "JavaScript"],
    link: PROJECT_LINKS.MESSAGING_PLATFORM,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <Reveal as="span" className="block text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </Reveal>
          <Reveal as="h2" delay={100} className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </Reveal>
          <Reveal as="p" delay={200} className="text-muted-foreground">
            A selection of my recent work, from AI-powered automation agents to
            full-stack web applications.
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Reveal
              key={idx}
              delay={(idx + 1) * 100}
              className="group glass hover-lift rounded-2xl overflow-hidden"
            >
              {/* Header (thumbnail image + icon badge) */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 via-card to-card">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-2.5 rounded-xl glass-strong">
                  <project.icon
                    className="w-6 h-6 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-3 group/link cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors group-hover/link:underline">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 flex-shrink-0
                    text-muted-foreground group-hover:text-primary
                     group-hover/link:translate-x-1
                     group-hover/link:-translate-y-1 transition-all"
                    />
                  </a>
                ) : (
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                )}
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All CTA */}
        <Reveal as="div" className="text-center mt-12">
          <AnimatedBorderButton href={PROFILE_LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </Reveal>
      </div>
    </section>
  );
};
