
import React from "react";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "AWS",
  "Docker",
  "Git",
  "Tailwind CSS",
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">About Me</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="col-span-2 space-y-4">
            <p className="text-slate">
              Hello! My name is Munneth, and i enjoy creating things that live on the internet.
              My interest in web development started back in 2012 when I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="text-slate">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, 
              and a student-led design studio. My main focus these days is building accessible, inclusive 
              products and digital experiences for a variety of clients.
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
