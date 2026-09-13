"use client";

import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Garuda Hacks 7.0 Participant",
    description: "Built a direct-to-consumer digital marketplace to connect local farmers directly with consumers. Engineered catalog browsing, product filtering, and transaction flows.",
    tech: ["React", "JavaScript"],
    bgClass: "bg-slate-800",
    images: ["/garuda-1.png", "/garuda-2.png"],
  },
  {
    id: 2,
    title: "Fit N Full Web App",
    description: "Developed an end-to-end full-stack web application for a food startup to manage online ordering. Implemented RESTful endpoints and integrated a MySQL database.",
    tech: ["HTML", "Node.js", "MySQL", "VPS"],
    bgClass: "bg-slate-700",
    images: ["/fitnfull-1.png", "/fitnfull-2.png", "/fitnfull-3.png", "/fitnfull-4.png"],
  },
  {
    id: 3,
    title: "2D Browser RPG Engine",
    description: "Developed a 2D browser-based RPG engine inspired by classic top-down adventure mechanics. Implemented core game loops, grid movement, and collision handling.",
    tech: ["React", "JavaScript", "DOM"],
    bgClass: "bg-slate-900",
    images: ["/game-1.png", "/game-2.png"],
  },
  {
    id: 4,
    title: "Samsung Innovation Campus",
    description: "Graduated with a Final Score of 99.40. Completed intensive training in Python Programming, Data Types, Control Flow, and AI Prompting Hacks.",
    tech: ["Python", "Certification"],
    bgClass: "bg-blue-900",
    images: ["/samsung.png"],
  }
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [innerImageIndex, setInnerImageIndex] = useState(0);

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setInnerImageIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setInnerImageIndex(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setInnerImageIndex(0);
  };

  return (
    <>
    <div className="relative w-full max-w-5xl mx-auto mt-8 group">
      <div 
        className="overflow-hidden rounded-2xl relative aspect-square sm:aspect-[4/3] md:aspect-video bg-black shadow-2xl"
      >
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => {
            const hasImages = project.images && project.images.length > 0;
            const currentImg = hasImages ? project.images[innerImageIndex % project.images.length] : undefined;

            return (
              <div key={project.id} className="min-w-full relative h-full flex-shrink-0">
                {hasImages ? (
                  <div className="absolute inset-0">
                    <img 
                      src={currentImg} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                  </div>
                ) : (
                  <div className={`absolute inset-0 ${project.bgClass} flex items-center justify-center opacity-80`}>
                    <span className="text-white/20 text-4xl font-bold tracking-widest uppercase">{project.title}</span>
                  </div>
                )}
              
              {/* Gradient Overlay for Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              
              {/* Text Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-12 pointer-events-none">
                <h3 
                  onClick={() => setSelectedProject(project)}
                  className="inline-block text-2xl sm:text-4xl font-bold text-white mb-2 glitch-hover transition-transform origin-left cursor-pointer pointer-events-auto hover:text-slate-300"
                  title="Click to view details"
                >
                  {project.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline ml-2 opacity-50"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </h3>
                <p className="text-slate-200 text-xs sm:text-base max-w-2xl mb-4 line-clamp-4 sm:line-clamp-none">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/20 backdrop-blur-sm border border-white/10 px-3 py-1 text-xs font-medium text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/80 hover:scale-110 backdrop-blur-md transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 z-20"
          aria-label="Previous Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/80 hover:scale-110 backdrop-blur-md transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 z-20"
          aria-label="Next Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index 
                ? "bg-red-500 w-6" // Matches the red active dot in the screenshot
                : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      </div>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black hover:scale-110 transition-all z-50"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            {/* Modal Image Area */}
            <div className="w-full md:w-1/2 bg-black flex items-center justify-center min-h-[300px] md:min-h-[400px] relative">
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <img 
                  src={selectedProject.images[innerImageIndex % selectedProject.images.length]} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              ) : (
                <div className={`w-full h-full ${selectedProject.bgClass} flex items-center justify-center opacity-80`}>
                  <span className="text-white/20 text-2xl font-bold tracking-widest uppercase">{selectedProject.title}</span>
                </div>
              )}
            </div>

            {/* Modal Content Area */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                {selectedProject.title}
              </h2>
              
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Project Description</h4>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="rounded-md bg-slate-800 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
