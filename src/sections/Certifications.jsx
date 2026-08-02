import { Award, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const certifications = [
  {
    icon: Award,
    title: "Programming with Python",
    issuer: "Internshala Trainings",
    date: "July 2023",
    description:
      "Python OOP, SQLite connectivity, and PyQt GUI development; recognized as a top performer.",
  },
  {
    icon: BadgeCheck,
    title: "DSA Seminar & Practical Problem Solving",
    issuer: "Fixity EDX & Wadhwani Foundation",
    date: "August 2025",
    description:
      'Recognized in the "Achievers" category for excellence in problem-solving and algorithmic presentation.',
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal
            as="span"
            className="block text-secondary-foreground text-sm font-medium tracking-wider uppercase"
          >
            Recognition
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Certifications{" "}
            <span className="font-serif italic font-normal text-white">
              & achievements.
            </span>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <Reveal
              key={idx}
              delay={(idx + 1) * 100}
              className="relative glass hover-lift p-8 rounded-3xl glow-border"
            >
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <cert.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-primary text-sm font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  {cert.date}
                </p>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
