'use client';
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import upSkilled from '../Content/UpSkilled.jpeg';
import smartCam from '../Content/SmartCam.png';
import rideShare from '../Content/RideShare.jpeg';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  url?: string;
  code?: string;
}

const ProjectCard = ({ title, description, imageUrl, url, code }: ProjectProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl h-64 w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}>
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full p-6 backface-hidden">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full p-6 backface-hidden rotate-y-180 bg-gray-100 flex flex-col justify-between">
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
          <div className="mt-auto flex justify-center space-x-4 z-10">
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Live Demo
              </a>
            )}
            {code && (
              <a href={code} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div >
  )
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "UpSkilled LMS",
      description: "A learning management system built with React and Node.js, featuring course management and progress tracking.",
      url: "https://upskilled.vercel.app",
      code: "https://github.com/hiren1407/UpSkilled-Frontend",
      imageUrl: upSkilled
    },
    {
      title: "SmartCam Facial Recognition",
      description: "An AI-powered facial recognition system using Python and OpenCV, integrated with cloud services.",
      url: "https://smartcam.vercel.app/",
      code: "https://github.com/pdupadhyay/smartcam-frontend",
      imageUrl: smartCam
    },
    {
      title: "Ride Share Application",
      description: "A full-stack ride-sharing platform developed with React Native and Firebase, supporting real-time location tracking.",
      code: "https://github.com/Nitss10/ride-sharing-frontend",
      imageUrl: rideShare
    }
  ];

  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
