"use client"
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

const Navbar = () => {
  type Sections = {
    home: HTMLElement | null;
    about: HTMLElement | null;
    projects: HTMLElement | null;
    skills: HTMLElement | null;
    experience: HTMLElement | null;
    contact: HTMLElement | null;
  };
  
  const [activeSection, setActiveSection] = useState<keyof Sections>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
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
    setActiveSection(id);
    setMenuOpen(false);
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

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find which section is currently in view
      for (const section of Object.keys(sections.current) as Array<keyof Sections>) {
        const element = sections.current[section];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-md px-4 py-4 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#home" onClick={() => scrollToSection('home')} className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
          Pradyumna Upadhyay
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
            <li key={section}>
              <Link 
                href={`#${section}`} 
                onClick={() => scrollToSection(section as keyof Sections)}
                className={`font-medium transition-colors py-1 px-2 relative ${
                  activeSection === section 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 animate-slideRight" 
                        style={{ transformOrigin: 'left' }}></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4">
          <ul className="flex flex-col space-y-4">
            {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
              <li key={section}>
                <Link 
                  href={`#${section}`} 
                  onClick={() => scrollToSection(section as keyof Sections)}
                  className={`block py-2 px-4 ${
                    activeSection === section ? 'text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;