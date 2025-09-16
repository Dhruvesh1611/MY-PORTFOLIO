
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { About } from "@/components/main/about";
import { Resume } from "@/components/main/resume";
import { Certifications } from "@/components/main/certifications";
// import { Achievements } from "@/components/main/achievements";
import { Contact } from "@/components/main/contact";
import { Education } from "@/components/main/education";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Education />
        <Certifications />
        {/* <Achievements /> */}
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
