
import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University Name",
    date: "2020 - 2022",
    description: "Specialized in Machine Learning and Distributed Systems. Graduated with honors.",
    courses: [
      "Advanced Algorithms",
      "Machine Learning",
      "Distributed Systems",
      "Cloud Computing"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    date: "2016 - 2020",
    description: "Graduated with first-class honors. Active member of the programming club.",
    courses: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Software Engineering"
    ]
  },
  {
    degree: "High School Diploma",
    institution: "High School Name",
    date: "2012 - 2016",
    description: "Advanced courses in Mathematics and Computer Science.",
    courses: [
      "AP Computer Science",
      "AP Calculus",
      "Physics",
      "Advanced Mathematics"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">Education</h2>
        
        <div className="space-y-12">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="flex flex-col md:flex-row">
                {/* Timeline dot for mobile */}
                <div className="absolute left-0 top-1 md:hidden">
                  <div className="w-4 h-4 rounded-full bg-aqua"></div>
                </div>
                
                {/* Date column */}
                <div className="hidden md:block md:w-1/4 font-mono text-sm text-slate mb-2">
                  <div className="flex items-center">
                    <GraduationCap size={16} className="text-aqua mr-2" />
                    {item.date}
                  </div>
                </div>
                
                {/* Content column */}
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-slate-light mb-1">
                    {item.degree}
                  </h3>
                  <h4 className="text-aqua font-medium mb-2">
                    {item.institution}
                  </h4>
                  <p className="text-slate mb-4 md:hidden">
                    {item.date}
                  </p>
                  <p className="text-slate mb-4">
                    {item.description}
                  </p>
                  <div className="mt-3">
                    <h5 className="text-slate-light font-medium mb-2">
                      Key Courses:
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      {item.courses.map((course, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-aqua mr-2">▹</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
