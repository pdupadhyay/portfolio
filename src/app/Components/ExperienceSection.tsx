"use client"
import { useEffect, useRef } from 'react';

const ExperienceItem = ({ 
  title, 
  company, 
  date, 
  description 
}: { 
  title: string; 
  company: string; 
  date: string; 
  description: string[] 
}) => (
  <div className="relative pl-8 mb-12 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-blue-600 before:rounded-full before:z-10">
    <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-blue-200"></div>
    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    <p className="text-blue-600 font-medium mb-2">{company} | {date}</p>
    <ul className="space-y-2">
      {description.map((desc, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-gray-700">{desc}</span>
        </li>
      ))}
    </ul>
  </div>
);

const experiences = [
  {
    title: "Software Engineer",
    company: "University of Maryland",
    date: "Oct 2023 - Present",
    description: [
      "Spearheaded innovative projects focusing on urban safety and traffic analysis, leveraging advanced geospatial technologies and web development frameworks.",
      "Engineered an interactive mapping solution that significantly improved the identification and analysis of high-risk pedestrian zones.",
      "Revolutionized large-scale data processing workflows using cloud computing technologies, resulting in substantial efficiency gains.",
      "Designed and implemented a comprehensive web application for in-depth analysis of vehicular incidents, enhancing data accessibility and visualization for stakeholders."
    ]
  },
  {
    title: "Software Engineer",
    company: "LTIMindtree",
    date: "Aug 2021 - Jul 2023",
    description: [
      "Orchestrated major enhancements to a multinational pricing tool, significantly improving database efficiency and streamlining data management processes.",
      "Served as a crucial liaison between various technical teams, fostering improved collaboration and driving substantial performance improvements across the application.",
      "Played a key role in optimizing the software development lifecycle, resulting in markedly reduced bug occurrences and accelerated release schedules.",
      "Took a leading role in knowledge dissemination, mentoring new team members and conducting comprehensive training sessions on diverse technologies and methodologies."
    ]
  }
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-white">
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600 after:animate-width-expand">
          Experience
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="opacity-0"
              style={{ 
                animation: `slideUp 1s ease forwards ${index * 0.3}s` 
              }}
            >
              <ExperienceItem {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
