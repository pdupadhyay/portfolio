"use client"
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [resumeUrl, setResumeUrl] = useState<string | null>(null);
    const [showResume, setShowResume] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slideUp');
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

    // Clean up the blob URL when component unmounts
    useEffect(() => {
        return () => {
            if (resumeUrl) {
                URL.revokeObjectURL(resumeUrl);
            }
        };
    }, [resumeUrl]);

    const handleViewResume = async () => {
        setIsLoading(true);
        try {
            // Fetch the PDF as a blob
            const response = await fetch('/PRADYUMNA_UPADHYAY_RESUME.pdf');
            const blob = await response.blob();
            // Create a URL for the blob
            const url = URL.createObjectURL(blob);
            setResumeUrl(url);
            setShowResume(true);
        } catch (error) {
            console.error('Error fetching the resume:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseResume = () => {
        setShowResume(false);
    };

    return (
      <section id="about" className="py-20 bg-white">
        <div 
          ref={sectionRef}
          className="container mx-auto px-6 opacity-0 transition-all duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600 
          after:animate-width-expand">
            About Me
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed animate-delay-200">
              I&apos;m a Software Engineering master&apos;s student at the University of Maryland, passionate about creating efficient and user-friendly applications. With a strong foundation in full-stack development and cloud technologies, I&apos;m constantly seeking to expand my skills and take on new challenges in the tech world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed animate-delay-400">
              My experience includes working on diverse projects, from learning management systems to facial recognition applications, always focusing on delivering high-quality, scalable solutions.
            </p>
            
            <div className="mt-10 flex justify-center animate-delay-600">
              <button 
                onClick={handleViewResume}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg flex items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v4m0 0v4m0-4h4m-4 0H8" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
                {isLoading ? 'Loading...' : 'View Resume'}
              </button>
            </div>
          </div>
        </div>

        {/* Modal for displaying the resume */}
        {showResume && resumeUrl && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-0 animate-fadeIn z-50 flex items-center justify-center p-4"
            style={{ animationDuration: '300ms' }}
            onClick={handleCloseResume}
          >
            <div 
              className="bg-white rounded-lg shadow-xl w-full max-w-5xl flex flex-col max-h-[90vh] animate-scaleIn"
              style={{ animationDuration: '400ms' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-800">Resume</h3>
                <button 
                  onClick={handleCloseResume}
                  className="text-gray-500 hover:text-gray-700 hover:rotate-90 transition-transform duration-300 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-auto p-1">
                <object
                  data={resumeUrl}
                  type="application/pdf"
                  className="w-full h-[75vh] sm:h-[60vh] md:h-[70vh] animate-fadeIn"
                  style={{ minHeight: 'calc(100vh - 150px)', width: '100%', animationDuration: '800ms', animationDelay: '200ms' }}
                  aria-label="Resume PDF"
                >
                  <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
                </object>
              </div>
              <div className="border-t p-4 flex justify-end">
                <a
                  href={resumeUrl}
                  download="PRADYUMNA_UPADHYAY_RESUME.pdf"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-all hover:shadow-lg transform hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    );
};
  
export default AboutSection;