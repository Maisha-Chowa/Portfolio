import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/portfolio-data";

export default function EducationSection() {
  return (
    <section id="qualification" className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary">
        Academic Background
      </h2>
      <Card>
        <CardContent className="space-y-4 pt-6">
          {education.map((item) => (
            <div
              key={item.title}
              className="space-y-1 text-sm text-muted-foreground"
            >
              <p className="font-medium text-foreground">{item.title}</p>
              <p>{item.org}</p>
              <p>{item.timeline}</p>
              <p>{item.detail}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
