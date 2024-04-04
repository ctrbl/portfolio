import HomeSection from '@/components/sections/home';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import ProjectSection from '@/components/sections/projects';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5">
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
