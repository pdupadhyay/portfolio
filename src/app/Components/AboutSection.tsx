"use client"
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [showResume, setShowResume] = useState(false);
  const [pdfLoaded, setPdfLoaded] = useState(false);

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

  // ESC key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showResume) {
        handleCloseResume();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showResume]);

  const handleViewResume = async () => {
    setIsLoading(true);
    setPdfLoaded(false);
    try {
      const response = await fetch('/PRADYUMNA_UPADHYAY_RESUME.pdf');
      const blob = await response.blob();
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
    setTimeout(() => setPdfLoaded(false), 300);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div
        ref={sectionRef}
        className="container mx-auto px-6 opacity-0 transition-all duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600 after:animate-width-expand">
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
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg flex items-center"
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
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm animate-fadeIn z-50 flex items-center justify-center p-4 transition-all duration-300"
          style={{ animationDuration: '300ms' }}
          onClick={handleCloseResume}
        >
          <div
            className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col max-h-[90vh] animate-scaleIn border border-blue-100 overflow-hidden"
            style={{ animationDuration: '400ms' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Decorative blurred circles */}
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-blue-400 opacity-20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-indigo-400 opacity-20 rounded-full blur-2xl pointer-events-none"></div>

            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-2xl relative z-10">
              <h3 className="text-xl font-bold text-blue-700 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </h3>
              <button
                onClick={handleCloseResume}
                className="text-gray-500 hover:text-blue-700 hover:bg-blue-100 rounded-full p-2 transition-all duration-300 transform hover:rotate-90 focus:outline-none"
                aria-label="Close resume"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 p-2 relative h-full">
              {!pdfLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10 animate-fadeIn">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 relative">
                      <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 animate-spin"></div>
                    </div>
                    <p className="mt-4 text-blue-600 font-medium">Loading resume...</p>
                  </div>
                </div>
              )}
              <object
                data={resumeUrl}
                type="application/pdf"
                className="w-full h-[calc(80vh-120px)] rounded-md shadow-inner animate-fadeIn"
                style={{ animationDuration: '800ms', animationDelay: '400ms' }}
                aria-label="Resume PDF"
                onLoad={() => setPdfLoaded(true)}
              >
                <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
              </object>
            </div>

            {/* Footer */}
            <div className="border-t p-4 bg-gradient-to-r from-blue-50 to-indigo-50 flex justify-between items-center rounded-b-2xl relative z-10">
              <div className="text-sm text-gray-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Press ESC or click outside to close
              </div>
              <a
                href={resumeUrl}
                download="PRADYUMNA_UPADHYAY_RESUME.pdf"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2 rounded-lg flex items-center transition-all hover:shadow-lg transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;