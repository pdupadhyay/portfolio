// app/page.tsx
import HomeSection from './Components/HomeSection';
import AboutSection from './Components/AboutSection';
import ProjectsSection from './Components/ProjectsSection';
import SkillsSection from './Components/SkillsSection';
import ExperienceSection from './Components/ExperienceSection';
import ContactSection from './Components/ContactSection';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen px-2">
      <div><HomeSection /></div>
      <div className='my-2'><AboutSection /></div>
      <div className='my-2'><ProjectsSection /></div>
      <div className='my-1'><SkillsSection /></div>
      <div className='my-1'><ExperienceSection /></div>
      <div className='my-1'><ContactSection /></div>
    </main>
  );
}
