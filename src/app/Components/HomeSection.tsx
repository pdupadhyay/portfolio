"use client";
import Image from 'next/image';
import photo from '../Content/Photo.jpeg'
import { useRef, useEffect } from 'react';
import PersonalizedGreeting from './PersonalizedGreeting';

const HomeSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

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
        <section
            ref={sectionRef}
            id='home'
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100 py-20 opacity-0 transition-opacity duration-1000"
        >
            <div className="container mx-auto px-6 text-center">
                <div className="relative mx-auto w-40 h-40 mb-8 animate-float">
                    <Image
                        src={photo}
                        alt="Pradyumna Upadhyay"
                        fill
                        className="rounded-full object-cover border-4 border-white shadow-lg"
                        priority
                    />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 animate-fadeIn" style={{ animationDelay: '300ms' }}>
                    Pradyumna Upadhyay
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: '600ms' }}>
                    Software Engineering Master&apos;s Student | Full Stack Developer
                </p>
                {/* Greeting moved below details */}
                <div className="mb-8">
                    <PersonalizedGreeting />
                </div>
                <div className="flex justify-center space-x-4 animate-fadeIn" style={{ animationDelay: '900ms' }}>
                    <a
                        href="#contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                    >
                        Contact Me
                    </a>
                    <a
                        href="#projects"
                        className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-600 transition-all transform hover:scale-105"
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;