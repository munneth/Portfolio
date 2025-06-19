
import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Davis",
    date: "2024 - expected 2028",
    description: "3.5 GPA, Deans List Spring Quarter 2025",
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Algorithm Design",
      "Cloud Computing"
    ]
  },
  {
    degree: "Associate of Science in Social and Behavioral Sciences",
    institution: "Yuba College",
    date: "2020 - 2024",
    description: "Dual Enrolled, graduated with a 3.9 GPA",
    courses: [
      "Introduction to Psychology",
      "Sociology",
      "Human Development",
      "Cultural Anthropology"
    ]
  },
 /* {
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
  }*/
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
