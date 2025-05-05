"use client"
import { useRef, useEffect } from 'react';

const ContactSection = () => {
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
    <footer id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-10 blur-3xl"></div>

      <div
        ref={sectionRef}
        className="container mx-auto px-6 opacity-0 transition-opacity duration-1000 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-indigo-400">
          Get In Touch
        </h2>

        <div className="max-w-5xl mx-auto backdrop-blur-sm bg-blue-900/20 rounded-2xl shadow-xl p-8 border border-blue-800/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-blue-200">Connect With Me</h3>

              <div className="space-y-6">
                <a
                  href="mailto:pradyumnaupadhyay28@gmail.com"
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-800/60 flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm mb-1">Email</p>
                    <p className="text-white group-hover:text-blue-200 transition-colors">pradyumnaupadhyay28@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/pdupadhyay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-800/60 flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.62-5.475 5.92.43.37.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm mb-1">GitHub</p>
                    <p className="text-white group-hover:text-blue-200 transition-colors">pdupadhyay</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/pradyumnaupadhyay28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-800/60 flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07s2.06.93 2.06 2.07c0 1.14-.92 2.07-2.06 2.07zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm mb-1">LinkedIn</p>
                    <p className="text-white group-hover:text-blue-200 transition-colors">pradyumnaupadhyay28</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-10 md:border-l border-blue-800/50 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-200">Let&apos;s Build Something Amazing</h3>
                <p className="text-blue-100 mb-6 max-w-sm">
                  I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>

                <div className="inline-block animate-bounce mt-4 rotate-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5 5 5-5M7 6l5 5 5-5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">Pradyumna Upadhyay</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;