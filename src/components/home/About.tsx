
import React from "react";

const skills = [
  "C++ 20",
  "Python",
  "Flask",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Supabase",
  "MongoDB",
  "Google Cloud",
  "Azure",
  "Docker",
  "Git",
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">About Me</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="col-span-2 space-y-4">
            <p className="text-slate">
              Hello! My name is Munneth, and 
            </p>
            <p className="text-slate">
              Fast-forward to today, I've had the privelage to work in student-orgs, startups, and as a research assistant!.
              The way technology is always changing is what I love about computer science because it allows me to constantly learn new things.
              
            </p>
            <p className="text-slate">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-5">
              {skills.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-aqua mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative rounded overflow-hidden w-full max-w-[300px] mx-auto">
              {/* Replace with your actual image */}
              <div className="aspect-square bg-slate-dark/60 rounded relative">
                <div className="absolute inset-0 border-2 border-aqua rounded bg-aqua/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-full h-full flex items-center justify-center text-aqua">
                  Your Photo Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
