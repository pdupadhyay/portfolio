"use client"
import Link from 'next/link';
import { useRef, useEffect } from 'react';

const Navbar = () => {
  type Sections = {
    home: HTMLElement | null;
    about: HTMLElement | null;
    projects: HTMLElement | null;
    skills: HTMLElement | null;
    experience: HTMLElement | null;
    contact: HTMLElement | null;
  };
  
  const sections = useRef<Sections>({
    home: null,
    about: null,
    projects: null,
    skills: null,
    experience: null,
    contact: null,
  });

  const scrollToSection = (id: keyof Sections) => {
    sections.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');
    const skills = document.getElementById('skills');
    const experience = document.getElementById('experience');
    const contact = document.getElementById('contact');

    if (home && about && projects && skills && experience && contact) {
      sections.current = {
        home,
        about,
        projects,
        skills,
        experience,
        contact,
      };
    }
  }, []);

  return (
    <nav className="bg-gray-100 px-10 py-4 flex justify-between items-center sticky top-0">
      <div className="container mx-auto flex justify-between">
        <Link href="#home" onClick={() => scrollToSection('home')} className="text-lg font-bold">Home</Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about" onClick={() => scrollToSection('about')}>About</Link>
          </li>
          <li>
            <Link href="#projects" onClick={() => scrollToSection('projects')}>Projects</Link>
          </li>
          <li>
            <Link href="#skills" onClick={() => scrollToSection('skills')}>Skills</Link>
          </li>
          <li>
            <Link href="#experience" onClick={() => scrollToSection('experience')}>Experience</Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => scrollToSection('contact')}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;