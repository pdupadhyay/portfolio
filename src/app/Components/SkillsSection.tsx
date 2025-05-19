"use client"
import { useEffect, useRef } from 'react';

const SkillCategory = ({ category, skills }: { category: string; skills: string[] }) => (
  <div className="mb-10 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span 
          key={index} 
          className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors transform hover:scale-105 hover:shadow-sm transition-all animate-fadeIn"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);
  
const SkillsSection = () => {
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

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "C#"]
    },
    {
      category: "Web Development",
      skills: ["Angular", ".NET MVC", "Flask", "FastAPI", "HTML/CSS", "jQuery", "Node.js", "React", "Redux", "REST APIs", "Tailwind CSS",]
    },
    {
      category: "Cloud Technologies",
      skills: ["AWS EC2", "AWS EMR", "AWS S3", "Docker"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "MSSQL", "SQLAlchemy"]
    },
    {
      category: "Data Processing",
      skills: ["Batch Processing", "ArcGIS", "Distributed Data Processing", "Horizontal Scaling", "Esri Experience Builder", "OpenStreetMap", "PySpark"]
    },
    {
      category: "Tools",
      skills: ["Git", "Github", "JIRA", "Postman", "Slack", "Visual Studio Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category.category} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};
  
export default SkillsSection;
