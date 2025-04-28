
import React from 'react';
import Layout from '../components/layout/Layout';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const Resume = () => {
  return (
    <Layout>
      <div className="container px-4 mx-auto py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-light mb-2">Your Name</h1>
              <p className="text-aqua font-medium">Software Engineer</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild className="bg-aqua hover:bg-aqua/90 text-navy">
                <a href="/resume.pdf" download>
                  <Download size={16} className="mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-2 mb-8 text-slate">
            <p>San Francisco, CA (or Your Location)</p>
            <p>email@yourdomain.com | (123) 456-7890</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-aqua hover:underline">
                GitHub <ExternalLink size={14} className="ml-1" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-aqua hover:underline">
                LinkedIn <ExternalLink size={14} className="ml-1" />
              </a>
              <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-aqua hover:underline">
                Portfolio <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>

          <Separator className="my-8 bg-slate-dark" />

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-light mb-4">Summary</h2>
            <p className="text-slate">
              Highly motivated software engineer with expertise in full-stack development using modern technologies. 
              Passionate about building scalable, maintainable applications with excellent user experiences.
              Strong problem-solving skills and ability to learn new technologies quickly.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-light mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium text-aqua mb-2">Frontend</h3>
                <ul className="list-disc list-inside text-slate space-y-1">
                  <li>JavaScript/TypeScript</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>HTML5/CSS3</li>
                  <li>Tailwind CSS</li>
                  <li>Redux</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-aqua mb-2">Backend</h3>
                <ul className="list-disc list-inside text-slate space-y-1">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>REST APIs</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-aqua mb-2">Tools & Technologies</h3>
                <ul className="list-disc list-inside text-slate space-y-1">
                  <li>Git/GitHub</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>CI/CD</li>
                  <li>Jest/Testing Library</li>
                  <li>Agile/Scrum</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-light mb-6">Experience</h2>
            
            <div className="space-y-8">
              {/* Job 1 */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-light">Senior Software Engineer</h3>
                    <p className="text-aqua">Company Name</p>
                  </div>
                  <p className="font-mono text-slate">Jan 2022 - Present</p>
                </div>
                <ul className="mt-4 list-disc list-outside ml-5 text-slate space-y-2">
                  <li>Led development of a client-facing web application that increased customer engagement by 35%</li>
                  <li>Architected and implemented RESTful APIs serving over 1 million requests daily</li>
                  <li>Optimized database queries, reducing average API response time by 60%</li>
                  <li>Mentored junior developers through code reviews and pair programming sessions</li>
                  <li>Implemented automated testing strategy, achieving 90% code coverage</li>
                </ul>
              </div>
              
              {/* Job 2 */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-light">Software Developer</h3>
                    <p className="text-aqua">Previous Company</p>
                  </div>
                  <p className="font-mono text-slate">Jun 2020 - Dec 2021</p>
                </div>
                <ul className="mt-4 list-disc list-outside ml-5 text-slate space-y-2">
                  <li>Developed responsive UI components using React and Redux</li>
                  <li>Collaborated with designers to implement pixel-perfect user interfaces</li>
                  <li>Built RESTful APIs using Node.js and Express</li>
                  <li>Participated in Agile development process and sprint planning</li>
                  <li>Implemented OAuth 2.0 authentication system</li>
                </ul>
              </div>
              
              {/* Job 3 */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-light">Junior Developer</h3>
                    <p className="text-aqua">First Company</p>
                  </div>
                  <p className="font-mono text-slate">Jan 2019 - May 2020</p>
                </div>
                <ul className="mt-4 list-disc list-outside ml-5 text-slate space-y-2">
                  <li>Developed and maintained frontend components using HTML, CSS, and JavaScript</li>
                  <li>Fixed bugs and improved existing application features</li>
                  <li>Created responsive designs for mobile and desktop platforms</li>
                  <li>Assisted with database migrations and updates</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-light mb-6">Education</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-light">Master of Science in Computer Science</h3>
                    <p className="text-aqua">University Name</p>
                  </div>
                  <p className="font-mono text-slate">2020 - 2022</p>
                </div>
                <p className="mt-2 text-slate">
                  GPA: 3.9/4.0 | Specialization in Machine Learning and Distributed Systems
                </p>
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-light">Bachelor of Science in Computer Science</h3>
                    <p className="text-aqua">University Name</p>
                  </div>
                  <p className="font-mono text-slate">2016 - 2020</p>
                </div>
                <p className="mt-2 text-slate">
                  GPA: 3.8/4.0 | Minor in Mathematics
                </p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-light mb-6">Projects</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <h3 className="text-xl font-bold text-slate-light">Personal Finance Tracker</h3>
                  <div className="flex space-x-3">
                    <a href="https://github.com/yourusername/project" target="_blank" rel="noopener noreferrer" className="text-aqua hover:underline">GitHub</a>
                    <a href="https://project-demo.com" target="_blank" rel="noopener noreferrer" className="text-aqua hover:underline">Live Demo</a>
                  </div>
                </div>
                <p className="mt-2 text-slate">
                  A full-stack web application for managing personal finances. Built with React, Node.js, and MongoDB.
                </p>
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <h3 className="text-xl font-bold text-slate-light">E-commerce Platform</h3>
                  <div className="flex space-x-3">
                    <a href="https://github.com/yourusername/project" target="_blank" rel="noopener noreferrer" className="text-aqua hover:underline">GitHub</a>
                    <a href="https://project-demo.com" target="_blank" rel="noopener noreferrer" className="text-aqua hover:underline">Live Demo</a>
                  </div>
                </div>
                <p className="mt-2 text-slate">
                  An e-commerce platform with product catalog and cart functionality. Built with Next.js and PostgreSQL.
                </p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold text-slate-light mb-6">Certifications</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-slate-light">AWS Certified Developer - Associate</h3>
                <p className="text-slate">Amazon Web Services | 2022</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-slate-light">MongoDB Certified Developer</h3>
                <p className="text-slate">MongoDB, Inc. | 2021</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
