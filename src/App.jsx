import FloatingNavbar from "@/components/FloatingNavbar";
import { Separator } from "@/components/ui/separator";
import HomeSection from "@/sections/HomeSection";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import EducationSection from "@/sections/EducationSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNavbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-24">
        <HomeSection />

        <div className="md:px-[4.25rem]">
          <Separator className="my-12" />
          <AboutSection />

          <Separator className="my-12" />
          <ExperienceSection />

          <Separator className="my-12" />
          <SkillsSection />

          <Separator className="my-12" />
          <ProjectsSection />

          <Separator className="my-12" />
          <EducationSection />

          <Separator className="my-12" />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
