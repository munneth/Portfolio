
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Company One",
    title: "Senior Software Engineer",
    range: "January 2022 - Present",
    responsibilities: [
      "Led development of a new client-facing application using React, TypeScript, and Node.js",
      "Optimized application performance, reducing load time by 40%",
      "Implemented automated testing strategies resulting in 90% code coverage",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    company: "Company Two",
    title: "Software Developer",
    range: "June 2020 - December 2021",
    responsibilities: [
      "Developed responsive web applications using React and Redux",
      "Collaborated with UX designers to implement intuitive user interfaces",
      "Built RESTful APIs using Node.js and Express",
      "Participated in Agile development processes and sprint planning"
    ]
  },
  {
    company: "Company Three",
    title: "Junior Developer",
    range: "January 2019 - May 2020",
    responsibilities: [
      "Assisted in developing front-end components using HTML, CSS, and JavaScript",
      "Fixed bugs and improved application features",
      "Implemented responsive designs for mobile and desktop interfaces",
      "Participated in code reviews and testing"
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">Where I've Worked</h2>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          {/* Tab navigation */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate-dark">
            {experiences.map((experience, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "font-mono py-3 px-4 md:py-2 md:px-5 text-sm whitespace-nowrap transition-all focus:outline-none",
                  activeTab === i 
                    ? "text-aqua bg-navy-light md:bg-transparent md:border-l-2 md:border-aqua md:-ml-[2px]" 
                    : "text-slate hover:text-aqua hover:bg-navy-light/50 md:hover:bg-transparent"
                )}
              >
                {experience.company}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="py-5">
            {experiences.map((experience, i) => (
              <div 
                key={i} 
                className={cn(
                  "space-y-4 transition-all duration-300",
                  activeTab === i ? "block" : "hidden"
                )}
              >
                <h3 className="text-xl text-slate-light font-medium">
                  <span>{experience.title}</span>
                  <span className="text-aqua"> @ {experience.company}</span>
                </h3>
                <p className="font-mono text-sm text-slate">
                  {experience.range}
                </p>
                <ul className="space-y-2">
                  {experience.responsibilities.map((item, j) => (
                    <li key={j} className="flex text-slate">
                      <span className="text-aqua mr-2 mt-1 flex-shrink-0">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
