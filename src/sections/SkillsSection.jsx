import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skillGroups } from "@/data/portfolio-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-primary">
          Skills & Expertise
        </h2>
        <Badge variant="outline">Technical Arsenal</Badge>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <Card key={group.title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </span>
                  <div>
                    <CardTitle className="text-primary">
                      {group.title}
                    </CardTitle>
                    <CardDescription>{group.subtitle}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
