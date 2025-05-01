'use client';
import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import upSkilled from '../Content/UpSkilled.jpeg';
import smartCam from '../Content/SmartCam.png';
import travelBuddy from '../Content/TravelBuddy.png';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  technologies: string[];
  url?: string;
  code?: string;
}

const ProjectCard = ({ title, description, imageUrl, technologies, url, code }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-60 overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {url && (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex-1 text-center transition-colors"
            >
              Live Demo
            </a>
          )}
          {code && (
            <a 
              href={code} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg flex-1 text-center transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
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

  const projects = [
    {
      title: "Travel Buddy",
      description: "An AI-powered travel assistant that provides personalized travel recommendations and itineraries.",
      url: "https://travel-buddy-aiagent.vercel.app",
      code: "https://github.com/pdupadhyay/TravelBuddy-Frontend",
      imageUrl: travelBuddy,
      technologies: ["React", "Next.js", "OpenAI", "TailwindCSS", "Vercel"]
    },
    {
      title: "UpSkilled LMS",
      description: "A learning management system built with React and Node.js, featuring course management and progress tracking.",
      url: "https://upskilled.vercel.app",
      code: "https://github.com/pdupadhyay/UpSkilled-Frontend",
      imageUrl: upSkilled,
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS S3"]
    },
    {
      title: "SmartCam Facial Recognition",
      description: "An AI-powered facial recognition system using Python and OpenCV, integrated with cloud services.",
      url: "https://smartcam.vercel.app/",
      code: "https://github.com/pdupadhyay/smartcam-frontend",
      imageUrl: smartCam,
      technologies: ["Python", "OpenCV", "React", "TensorFlow", "AWS"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div 
        ref={sectionRef}
        className="container mx-auto px-6 opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
