
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Youtini Entertainment",
    title: "Software Engineer",
    range: "January 2024 - Present",
    responsibilities: [
      "Improved bug resolution and streamlined website deployment by effectively delegating tasks to team members",
      "Restructured the Star Wars media database consisting of 25,000+ entries improving management",
      "Modified web insights to reflect opportunities for expanding content reach and improving user interaction",
      "Designed a GPT model that can directly fact check writer articles based off the Star Wars Timeline through data stored and hosted on an SQL Database, connecting through a Flask API"
    ]
  },
  {
    company: "#Include Davis",
    title: "Web Developer",
    range: "February 2024 - Present",
    responsibilities: [
      "Communicate with nonprofit and student organizations to gather requirements, present prototypes, and refine products based on feedback",
      "Collaborate with a cross-functional team of UC Davis web developers and designers to deliver digital solutions using a modern tech stack including Next.js and other technologies.",
      "Working with specific designs that are passed through multiple stages of approval and the implemented",
      //"Participated in Agile development processes and sprint planning"
    ]
  },
  {
    company: "YCUSD I.T. Department",
    title: "Intern",
    range: "January 2023 - February 2023",
    responsibilities: [
      "Resolved 20+ daily tech tickets, from phone line issues to corrupt OS files, across the school district",
      "Partnered with web developers to deploy user-friendly front-end updates to the district website",
      "Led a team to repair 500+ Chromebooks, showcasing leadership and efficiency in a technical support setting",
      
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
