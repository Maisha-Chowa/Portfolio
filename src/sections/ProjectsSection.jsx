import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Github,
  ChevronLeft,
  ChevronRight,
  Lock,
  ArrowRight,
} from "lucide-react";
import { projects } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const prevProject = () =>
    setCurrentProject((i) => (i === 0 ? projects.length - 1 : i - 1));
  const nextProject = () =>
    setCurrentProject((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <section id="portfolio" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-primary">Projects</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={prevProject}
          >
            <ChevronLeft size={16} />
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentProject + 1} / {projects.length}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={nextProject}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="flex items-center justify-center bg-muted/50 p-6">
            {projects[currentProject].image ? (
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="max-h-64 w-full rounded-lg object-contain"
              />
            ) : (
              <div className="flex h-48 w-full flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-primary/20">
                <Lock size={32} className="text-primary/40" />
                <span className="text-sm text-muted-foreground">
                  Private Repository
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-primary">
                  {projects[currentProject].title}
                </CardTitle>
                {projects[currentProject].isPrivate && (
                  <Badge
                    variant="outline"
                    className="shrink-0 gap-1 text-xs"
                  >
                    <Lock size={10} /> Private
                  </Badge>
                )}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {projects[currentProject].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[currentProject].tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {projects[currentProject].github && (
              <div className="mt-6">
                <Button asChild className="gap-2">
                  <a
                    href={projects[currentProject].github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> View on GitHub{" "}
                    <ArrowRight size={14} />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="flex justify-center gap-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentProject(idx)}
            className={`h-2.5 rounded-full transition-all ${
              idx === currentProject
                ? "w-8 bg-primary"
                : "w-2.5 bg-primary/20 hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
