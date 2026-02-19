import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import avatarImg from "@/assets/avatar.png";
import resumePdf from "@/assets/Maisha-Resume.pdf";
import { profile } from "@/data/portfolio-data";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex flex-col items-center gap-8 md:flex-row md:gap-10"
    >
      <div className="hidden flex-col items-center gap-6 md:flex">
        <a
          href={profile.links.find((l) => l.label === "LinkedIn")?.href}
          target="_blank"
          rel="noreferrer"
          className="text-primary transition-opacity hover:opacity-80"
        >
          <Linkedin size={28} />
        </a>
        <a
          href={profile.links.find((l) => l.label === "GitHub")?.href}
          target="_blank"
          rel="noreferrer"
          className="text-primary transition-opacity hover:opacity-80"
        >
          <Github size={28} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="text-primary transition-opacity hover:opacity-80"
        >
          <Mail size={28} />
        </a>
      </div>

      <div className="shrink-0 md:order-last">
        <img
          src={avatarImg}
          alt={profile.name}
          className="h-48 w-48 rounded-full object-cover sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80"
        />
      </div>

      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Hi, I'm
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            {profile.name}
          </h1>
          <p className="text-lg text-muted-foreground">{profile.role}</p>
          <p className="text-base text-muted-foreground">{profile.summary}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button asChild variant="outline">
            <a href={resumePdf} target="_blank" rel="noreferrer">Download Resume</a>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-6 md:hidden">
          <a
            href={profile.links.find((l) => l.label === "LinkedIn")?.href}
            target="_blank"
            rel="noreferrer"
            className="text-primary transition-opacity hover:opacity-80"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={profile.links.find((l) => l.label === "GitHub")?.href}
            target="_blank"
            rel="noreferrer"
            className="text-primary transition-opacity hover:opacity-80"
          >
            <Github size={24} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-primary transition-opacity hover:opacity-80"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
