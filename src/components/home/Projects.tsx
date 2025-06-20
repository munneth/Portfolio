import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Find Optimal Gym Time",
    description: "A web application for visit the UC Davis gym also called the 'ARC' at the best possible time based on scraped Occupancy Data from the ARC website.",
    technologies: ["Next.js", "Flask", "Matplotlib", "BS4", "ShadCN"],
    github: "https://github.com/munneth/github-Gym",
    external: "https://project-one-demo.com",
    image: "/gym-demo.png",
  },
  {
    title: "CAPTCHA bypass",
    description: "A web application that bypasses CAPTCHA using a combination of machine learning and computer vision. Designed a UI as well as a google chrome extension to work in the browser.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Scikit-learn"],
    github: "https://github.com/munneth/Captcha-AI-chrome-extension-AISC",
    external: "/Untitled video - Made with Clipchamp.mp4",
    image: "/AI Demo CAPTCHA.png",
  },
  /*{
    title: "Project Three",
    description: "A real-time chat application with private and group messaging features, built using WebSockets for instant communication.",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "Redis"],
    github: "https://github.com/yourusername/project-three",
    external: "https://project-three-demo.com",
    image: "/placeholder.svg",
  }*/
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">Things I've Built</h2>
        
        <div className="space-y-24">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={cn(
                "relative grid md:grid-cols-12 gap-4 md:gap-10 items-center",
                i % 2 === 1 ? "md:text-right" : ""
              )}
            >
              {/* Project image */}
              <div className={cn(
                "md:col-span-7 rounded overflow-hidden relative aspect-video bg-navy-light",
                i % 2 === 1 ? "md:order-2" : ""
              )}>
                {/* Only apply blue tint to projects that are not the CAPTCHA project */}
                {i !== 1 && i !== 0 && <div className="absolute inset-0 bg-aqua/20 mix-blend-multiply"></div>}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project content */}
              <div className={cn(
                "md:col-span-5 z-10",
                i % 2 === 1 ? "md:order-1" : ""
              )}>
                <p className="font-mono text-aqua text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-light mb-5">
                  {project.title}
                </h3>
                
                <div className="bg-navy-light p-6 rounded shadow-lg mb-5">
                  <p className="text-slate">{project.description}</p>
                </div>
                
                <ul className={cn(
                  "flex flex-wrap gap-3 text-sm font-mono text-slate mb-8",
                  i % 2 === 1 ? "md:justify-end" : ""
                )}>
                  {project.technologies.map((tech, j) => (
                    <li key={j}>{tech}</li>
                  ))}
                </ul>
                
                <div className={cn(
                  "flex space-x-5",
                  i % 2 === 1 ? "md:justify-end" : ""
                )}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-light hover:text-aqua transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.external} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-light hover:text-aqua transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
