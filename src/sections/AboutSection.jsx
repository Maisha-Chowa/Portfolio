import { about } from "@/data/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary">About Me</h2>
      <div className="space-y-4">
        {about.paragraphs.map((text) => (
          <p
            key={text.slice(0, 30)}
            className="text-sm leading-relaxed text-muted-foreground"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
