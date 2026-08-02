import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Education = () => {
  const getEducationStatus = () => {
    const today = new Date();
    const gradDate = new Date(2027, 4); // May 2027
    if (today > gradDate) {
      return "Graduated | May 2027";
    }
    const startDate = new Date(2023, 7); // Aug 2023
    const yearsDiff = (today - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    let yearText = "1st Year";
    if (yearsDiff >= 3) yearText = "4th Year";
    else if (yearsDiff >= 2) yearText = "3rd Year";
    else if (yearsDiff >= 1) yearText = "2nd Year";

    return `${yearText} (Current) | Expected May 2027`;
  };

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal as="span" className="block text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Academic Background
          </Reveal>
          <Reveal as="h2" delay={100} className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            University <span className="font-serif italic font-normal text-white">Education.</span>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Reveal delay={200} className="glass hover-lift p-8 rounded-3xl md:p-12 glow-border">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className="pt-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Bachelor of Technology in Computer Science and Engineering</h3>
                <p className="text-xl text-primary font-medium mb-6">University College of Engineering, Osmania University | Hyderabad, Telangana State</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">Status:</span>
                    <span className="text-muted-foreground">{getEducationStatus()}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-2 text-white">Relevant Coursework:</span>
                    <div className="flex flex-wrap gap-2 text-muted-foreground">
                      <span className="px-3 py-1 bg-surface border border-border/50 rounded-full text-sm">Data Structures & Algorithms</span>
                      <span className="px-3 py-1 bg-surface border border-border/50 rounded-full text-sm">DBMS</span>
                      <span className="px-3 py-1 bg-surface border border-border/50 rounded-full text-sm">Operating Systems</span>
                      <span className="px-3 py-1 bg-surface border border-border/50 rounded-full text-sm">Software Engineering</span>
                      <span className="px-3 py-1 bg-surface border border-border/50 rounded-full text-sm">Discrete Mathematics</span>
                      <span className="px-3 py-1 bg-surface border border-border/50 rounded-full text-sm">Computer Networks</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
