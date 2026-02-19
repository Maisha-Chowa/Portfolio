import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary">Experience</h2>
      {experiences.map((exp) => (
        <Card key={exp.company}>
          <CardContent className="space-y-6 pt-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Briefcase size={20} />
              </span>
              <div className="space-y-1">
                <p className="font-semibold text-primary">
                  {exp.title} — {exp.company}
                </p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
                <p className="text-sm text-muted-foreground">{exp.timeline}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">{exp.description}</p>
            <p className="text-sm text-muted-foreground">{exp.summary}</p>

            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {exp.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <p className="text-sm italic text-muted-foreground">
              {exp.takeaway}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
